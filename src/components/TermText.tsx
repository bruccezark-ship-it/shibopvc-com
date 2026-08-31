import { Fragment } from "react";

const BAIKE_BASE = "https://baike.baidu.com/item/";

const TERM_TARGETS: Record<string, string> = {
  弹性地板: "弹性地板",
  PVC地板: "PVC地板",
  橡胶地板: "橡胶地板",
  亚麻地板: "亚麻地板",
  运动地板: "运动地板",
  塑胶地板: "pvc塑胶地板",
  自流平: "自流平水泥",
  焊缝: "焊缝",
};

const TERMS = Object.keys(TERM_TARGETS).sort((a, b) => b.length - a.length);

const SPLIT_RE = new RegExp(`(${TERMS.join("|")})`, "g");

export function TermText({ text }: { text: string }) {
  const parts = text.split(SPLIT_RE);
  return (
    <>
      {parts.map((part, index) => {
        const target = TERM_TARGETS[part];
        if (!target) {
          return <Fragment key={index}>{part}</Fragment>;
        }
        return (
          <a
            key={index}
            href={`${BAIKE_BASE}${encodeURIComponent(target)}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`百度百科：${target}`}
            className="text-inherit underline decoration-stone-300 underline-offset-4 transition-colors hover:text-amber-600 hover:decoration-amber-400"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

export default TermText;
