"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { images } from "@/data/images";
import { knowledgeArticles, knowledgePage } from "@/data/knowledge";

export default function KnowledgeContent() {
  const categories = useMemo(() => {
    const fromArticles = Array.from(
      new Set(knowledgeArticles.map((a) => a.category)),
    );
    return ["全部", ...fromArticles];
  }, []);

  const [category, setCategory] = useState("全部");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      category === "全部"
        ? knowledgeArticles
        : knowledgeArticles.filter((item) => item.category === category),
    [category],
  );

  return (
    <main>
      <PageHero
        label={knowledgePage.hero.label}
        title={knowledgePage.hero.title}
        subtitle={knowledgePage.hero.subtitle}
        bgImage={images.hero}
        altText={knowledgePage.hero.alt}
      />

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-12">
            <p className="section-label">{knowledgePage.library.label}</p>
            <h2 className="section-title">{knowledgePage.library.title}</h2>
            <div className="section-line" />
            <p className="section-desc">{knowledgePage.library.desc}</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setOpenId(null);
                }}
                className={`px-5 py-2.5 text-sm font-light tracking-wide transition-all duration-300 ${
                  category === item
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-xs text-stone-400 font-light mb-8 tracking-wide">
            {knowledgePage.library.countLabel.replace(
              "{n}",
              String(filtered.length),
            )}
          </p>

          <div className="space-y-0">
            {filtered.map((article) => {
              const expanded = openId === article.id;
              return (
                <div key={article.id} className="border-b border-stone-200">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId(expanded ? null : article.id)
                    }
                    className="w-full text-left py-6 group"
                    aria-expanded={expanded}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] tracking-widest uppercase text-amber-500 font-medium">
                          {article.category}
                        </span>
                        <h3 className="font-display text-lg font-medium text-stone-900 mt-1 group-hover:text-stone-600 transition-colors text-balance">
                          {article.title}
                        </h3>
                        <p className="text-sm text-stone-500 font-light mt-2 leading-relaxed max-w-2xl text-pretty">
                          {article.summary}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 text-stone-400 transition-transform duration-300 mt-1 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expanded
                        ? "max-h-[3000px] pb-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6">
                      {article.content.map((section, index) => (
                        <div key={`${article.id}-${index}`}>
                          <h4 className="text-sm font-medium text-stone-900 mb-2">
                            {section.h}
                          </h4>
                          <p className="text-sm text-stone-500 font-light leading-relaxed">
                            {section.p}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
