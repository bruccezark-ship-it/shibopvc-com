"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import PageHero from "@/components/PageHero";
import { images } from "@/data/images";
import { solutions, solutionsPage } from "@/data/solutions";

export default function SolutionsContent() {
  const [activeId, setActiveId] = useState(solutions[0]?.id ?? "medical");
  const active = solutions.find((item) => item.id === activeId) ?? solutions[0];

  return (
    <main>
      <PageHero
        label={solutionsPage.hero.label}
        title={solutionsPage.hero.title}
        subtitle={solutionsPage.hero.subtitle}
        bgImage={images.hero}
        altText={solutionsPage.hero.alt}
      />

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-12">
            <p className="section-label">{solutionsPage.selector.label}</p>
            <h2 className="section-title">{solutionsPage.selector.title}</h2>
            <div className="section-line" />
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            {solutions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                  activeId === item.id
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {item.scene}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Link
                href="/projects"
                className="block relative overflow-hidden aspect-[4/3] mb-8 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.img}
                  alt={`河北石博 | ${active.scene}弹性地板方案`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <span>{solutionsPage.detailLabels.viewCaseHover}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <h3 className="font-display text-3xl font-medium mb-2">
                {active.scene}解决方案
              </h3>
              <p className="text-xs tracking-widest uppercase text-stone-400 font-light mb-6">
                {active.subs}
              </p>
              <div className="mb-8">
                <h4 className="text-sm font-medium text-stone-900 mb-4">
                  {solutionsPage.detailLabels.needs}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.needs.map((need) => (
                    <span
                      key={need}
                      className="text-xs text-stone-500 border border-stone-200 px-3 py-1.5 font-light"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-stone-50 p-6 mb-8">
                <h4 className="text-sm font-medium text-stone-900 mb-3">
                  {solutionsPage.detailLabels.recommend}
                </h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {active.recommend}
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-sm font-medium text-stone-900 mb-4">
                  {solutionsPage.detailLabels.layers}
                </h4>
                <div className="space-y-0">
                  {active.layers.map((layer, index) => (
                    <Fragment key={layer}>
                      {index > 0 ? (
                        <div className="flex justify-center py-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="hsl(var(--amber-400))"
                            strokeWidth="1.5"
                          >
                            <path d="M12 5v14M5 12l7 7 7-7" />
                          </svg>
                        </div>
                      ) : null}
                      <div className="py-2.5 px-4 bg-stone-100 text-center text-sm text-stone-700 font-light">
                        {layer}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <h4 className="text-sm font-medium text-stone-900 mb-4">
                  {solutionsPage.detailLabels.products}
                </h4>
                <div className="space-y-3">
                  {active.products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-3 bg-stone-50 p-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="hsl(var(--amber-400))"
                        strokeWidth="1.5"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-stone-600 font-light">
                        {product}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-10">
                <h4 className="text-sm font-medium text-stone-900 mb-4">
                  {solutionsPage.detailLabels.process}
                </h4>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {active.process}
                </p>
              </div>

              <div className="mb-10 bg-stone-50 p-6 border-l-2 border-amber-400">
                <p className="text-[10px] tracking-widest uppercase text-amber-500 font-medium mb-2">
                  典型案例
                </p>
                <h4 className="font-display text-lg font-medium text-stone-900 mb-4">
                  {active.caseTitle}
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="bg-white p-3">
                    <p className="text-sm font-medium text-stone-900">
                      {active.caseArea}
                    </p>
                    <p className="text-[10px] text-stone-400 font-light tracking-wide">
                      铺装面积
                    </p>
                  </div>
                  <div className="bg-white p-3">
                    <p className="text-sm font-medium text-stone-900">
                      {active.caseLocation}
                    </p>
                    <p className="text-[10px] text-stone-400 font-light tracking-wide">
                      项目地点
                    </p>
                  </div>
                  <div className="bg-white p-3">
                    <p className="text-sm font-medium text-stone-900">
                      {active.caseDuration}
                    </p>
                    <p className="text-[10px] text-stone-400 font-light tracking-wide">
                      铺装周期
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-stone-900 mb-1">
                      项目挑战
                    </p>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      {active.caseChallenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-900 mb-1">
                      最终效果
                    </p>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      {active.caseResult}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-stone-900 text-white text-sm font-light tracking-wide hover:bg-stone-800 transition-colors duration-300"
              >
                <span>{solutionsPage.detailLabels.viewCases}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-stone-500 font-light mb-6">
              {solutionsPage.bottomCta.text}
            </p>
            <Link
              href={solutionsPage.bottomCta.button.href}
              className="btn-primary"
            >
              {solutionsPage.bottomCta.button.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 bg-stone-50">
        <div className="container-site">
          <div className="mb-16 text-center">
            <p className="section-label">{solutionsPage.decisionPath.label}</p>
            <h2 className="section-title">{solutionsPage.decisionPath.title}</h2>
            <div className="section-line mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {solutionsPage.decisionPath.steps.map((step, index) => (
              <Fragment key={step}>
                <div className="bg-white px-6 py-4 text-center min-w-[120px]">
                  <span className="text-xs text-amber-500 font-medium block mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-stone-800 font-light">
                    {step}
                  </span>
                </div>
                {index < solutionsPage.decisionPath.steps.length - 1 ? (
                  <div className="hidden md:flex items-center px-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(var(--stone-300))"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
