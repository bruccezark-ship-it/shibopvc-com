"use strict";
/* opencodePreviewNextLocInject */
const OPENCODE_LOC_ATTR = "data-opencode-loc";
/** Next root layout forbids unknown attrs on document tags; skip non-UI nodes. */
const OPENCODE_LOC_SKIP = {
  html: 1,
  body: 1,
  head: 1,
  script: 1,
  style: 1,
  link: 1,
  meta: 1,
  noscript: 1,
  template: 1,
  base: 1,
  title: 1,
};
/** Stamp host DOM tags only — Component props (Link/Image) often mismatch SSR vs client. */
const OPENCODE_LOC_HOST_ONLY = true;

function shouldSkipTag(name) {
  if (!name) return true;
  if (name === "Fragment" || name.endsWith(".Fragment")) return true;
  const base = String(name).split(".").pop() || name;
  if (OPENCODE_LOC_SKIP[base.toLowerCase()]) return true;
  // PascalCase / member components are not host elements.
  if (OPENCODE_LOC_HOST_ONLY && base.charAt(0) === base.charAt(0).toUpperCase() && base.charAt(0) !== base.charAt(0).toLowerCase()) {
    return true;
  }
  return false;
}

function toPos(code, offset) {
  let line = 1;
  let column = 0;
  for (let i = 0; i < offset && i < code.length; i++) {
    if (code[i] === "\n") {
      line++;
      column = 0;
    } else {
      column++;
    }
  }
  return { line: line, column: column + 1 };
}

function formatLoc(file, start, end) {
  return file + ":" + start.line + ":" + start.column + ":" + end.line + ":" + end.column;
}

function jsxName(node) {
  if (!node) return;
  if (node.type === "JSXIdentifier") return node.name;
  if (node.type === "JSXMemberExpression") {
    const obj = jsxName(node.object);
    const prop = jsxName(node.property);
    if (obj && prop) return obj + "." + prop;
  }
  if (node.type === "JSXNamespacedName") return node.namespace.name + ":" + node.name.name;
}

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "loc" || key === "start" || key === "end" || key === "range") continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const child of value) {
        if (child && typeof child === "object" && child.type) walk(child, visit);
      }
    } else if (value && typeof value === "object" && value.type) {
      walk(value, visit);
    }
  }
}

function hasLoc(opening) {
  return (opening.attributes || []).some(function (attr) {
    if (attr.type !== "JSXAttribute") return false;
    if (!attr.name || attr.name.type !== "JSXIdentifier") return false;
    return attr.name.name === OPENCODE_LOC_ATTR || attr.name.name === "data-opencode-source";
  });
}

function loadBabelParser() {
  try {
    return require("@babel/parser");
  } catch (_err) {
    try {
      const path = require("path");
      const { createRequire } = require("module");
      const req = createRequire(path.join(process.cwd(), "package.json"));
      return req("@babel/parser");
    } catch (_err2) {
      return null;
    }
  }
}

function injectJsxLocFallback(code, relativeFile) {
  const insertions = [];
  // Host elements only (lowercase). Avoids TS generics and Next component prop mismatches.
  const tagRe = /<([a-z][\w.-]*)(\s[^>]*?)?(\/?)>/g;
  let match;
  while ((match = tagRe.exec(code))) {
    const full = match[0];
    const tag = match[1] || "";
    if (shouldSkipTag(tag)) continue;
    if (full.indexOf(OPENCODE_LOC_ATTR) >= 0 || full.indexOf("data-opencode-source") >= 0) continue;
    const absStart = match.index;
    const start = toPos(code, absStart);
    const absEnd = absStart + full.length;
    const end = toPos(code, absEnd);
    const value = formatLoc(String(relativeFile).replace(/\\/g, "/"), start, end);
    const attr = " " + OPENCODE_LOC_ATTR + '="' + value + '"';
    let insertAt = absEnd - 1;
    if (full.slice(-2) === "/>") insertAt = absEnd - 2;
    insertions.push({ index: insertAt, text: attr });
  }
  if (!insertions.length) return { code: code, injected: 0 };
  insertions.sort(function (a, b) {
    return b.index - a.index;
  });
  let next = code;
  for (let i = 0; i < insertions.length; i++) {
    const item = insertions[i];
    next = next.slice(0, item.index) + item.text + next.slice(item.index);
  }
  return { code: next, injected: insertions.length };
}

function injectJsxLoc(code, relativeFile) {
  const babel = loadBabelParser();
  if (babel) {
    const parse = babel.parse || (babel.default && babel.default.parse) || babel.parseSync;
    if (parse) {
      let ast;
      try {
        ast = parse(code, {
          sourceType: "module",
          sourceFilename: relativeFile,
          plugins: ["jsx", "typescript", "classProperties", "decorators-legacy"],
          errorRecovery: true,
        });
      } catch (_err) {
        ast = null;
      }
      if (ast) {
        const insertions = [];
        walk(ast.program, function (node) {
          if (node.type !== "JSXOpeningElement") return;
          const name = jsxName(node.name);
          if (shouldSkipTag(name)) return;
          if (hasLoc(node)) return;
          if (node.start == null || node.end == null) return;
          const start = toPos(code, node.start);
          const end = toPos(code, node.end);
          const value = formatLoc(String(relativeFile).replace(/\\/g, "/"), start, end);
          const attr = " " + OPENCODE_LOC_ATTR + '="' + value + '"';
          const slice = code.slice(node.start, node.end);
          const gt = slice.lastIndexOf(">");
          if (gt < 0) return;
          let insertAt = node.start + gt;
          if (gt > 0 && slice[gt - 1] === "/") insertAt = node.start + gt - 1;
          insertions.push({ index: insertAt, text: attr });
        });
        if (!insertions.length) return { code: code, injected: 0 };
        insertions.sort(function (a, b) {
          return b.index - a.index;
        });
        let next = code;
        for (let i = 0; i < insertions.length; i++) {
          const item = insertions[i];
          next = next.slice(0, item.index) + item.text + next.slice(item.index);
        }
        return { code: next, injected: insertions.length };
      }
    }
  }
  return injectJsxLocFallback(code, relativeFile);
}

function projectRelative(id, root) {
  const normalized = String(id).split("?")[0].replace(/\\/g, "/");
  const base = String(root || "")
    .replace(/\\/g, "/")
    .replace(/\/$/, "");
  if (base && normalized.indexOf(base + "/") === 0) return normalized.slice(base.length + 1);
  const markers = ["/src/", "/app/", "/pages/", "/components/"];
  for (let i = 0; i < markers.length; i++) {
    const idx = normalized.indexOf(markers[i]);
    if (idx >= 0) return normalized.slice(idx + 1);
  }
  const parts = normalized.split("/");
  return parts[parts.length - 1] || normalized;
}

module.exports = function opencodePreviewSelectNextLoader(source) {
  const callback = this.async();
  const root = this.rootContext || process.cwd();
  const relative = projectRelative(this.resourcePath, root);
  try {
    const result = injectJsxLoc(source, relative);
    if (!result || !result.injected) {
      callback(null, source);
      return;
    }
    callback(null, result.code);
  } catch (err) {
    callback(err);
  }
};
