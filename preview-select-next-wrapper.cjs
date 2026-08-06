"use strict";
/* previewSelectNextWebpack opencodePreviewNextLocInject */
const path = require("path");

const PREVIEW_SELECT_NEXT_MARKER = "previewSelectNextWebpack";

function withOpencodePreviewSelect(nextConfig) {
  const base = nextConfig && typeof nextConfig === "object" ? nextConfig : {};
  // Pin tracing/webpack context to the Next app dir. When git lives at a drive root (D:\),
  // Next otherwise treats the whole volume as the monorepo and watchpack hangs / zombies the port.
  const appRoot = path.resolve(__dirname);
  return Object.assign({}, base, {
    outputFileTracingRoot: base.outputFileTracingRoot || appRoot,
    turbopack: Object.assign({}, base.turbopack || {}, {
      root: (base.turbopack && base.turbopack.root) || appRoot,
    }),
    webpack: function (config, options) {
      config.context = appRoot;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.[jt]sx$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: path.join(__dirname, "preview-select-next-loader.cjs"),
          },
        ],
      });
      if (typeof base.webpack === "function") {
        return base.webpack(config, options);
      }
      return config;
    },
  });
}

module.exports = {
  withOpencodePreviewSelect: withOpencodePreviewSelect,
  previewSelectNextWebpack: true,
};
