import type { CSSProperties } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  desc?: string;
  centered?: boolean;
  labelStyle?: CSSProperties;
};

export default function SectionHeading({
  label,
  title,
  desc,
  centered,
  labelStyle,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mb-16 text-center" : "mb-16"}>
      <p className="section-label" style={labelStyle}>
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      <div className={`section-line ${centered ? "mx-auto" : ""}`} />
      {desc ? (
        <p
          className={`section-desc ${centered ? "max-w-lg mx-auto" : ""}`}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}
