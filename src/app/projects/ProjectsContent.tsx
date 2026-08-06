"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { images } from "@/data/images";
import { projects, projectsPage } from "@/data/projects";

export default function ProjectsContent() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        label={projectsPage.hero.label}
        title={projectsPage.hero.title}
        subtitle={projectsPage.hero.subtitle}
        bgImage={images.hero}
        altText={projectsPage.hero.alt}
      />

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-16">
            <p className="section-label">精选案例</p>
            <h2 className="section-title">按统一标准呈现每个项目</h2>
            <div className="section-line" />
            <p className="section-desc">
              我们不只展示照片，更展示每个项目的完整交付过程，让您全面了解石博的专业能力
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isOpen = expanded === index;
              return (
                <div
                  key={project.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden aspect-[4/3] mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.img}
                        alt={`河北石博 | ${project.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-stone-50 p-4">
                        <p className="text-sm font-medium text-stone-900">
                          {project.area}
                        </p>
                        <p className="text-[10px] text-stone-400 font-light tracking-wide">
                          铺装面积
                        </p>
                      </div>
                      <div className="bg-stone-50 p-4">
                        <p className="text-sm font-medium text-stone-900">
                          {project.location}
                        </p>
                        <p className="text-[10px] text-stone-400 font-light tracking-wide">
                          项目地点
                        </p>
                      </div>
                      <div className="bg-stone-50 p-4">
                        <p className="text-sm font-medium text-stone-900">
                          {project.duration}
                        </p>
                        <p className="text-[10px] text-stone-400 font-light tracking-wide">
                          铺装周期
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-xs tracking-widest uppercase text-amber-500 font-medium">
                      {project.type}
                    </span>
                    <h3 className="font-display text-2xl font-medium mt-2 mb-4">
                      {project.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="mb-6 inline-flex items-center gap-2 text-sm text-stone-600 font-light border-b border-stone-300 pb-0.5 hover:border-stone-900 hover:text-stone-900 transition-colors"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "收起详情" : "展开详情"}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-stone-900 mb-2">
                            项目挑战
                          </h4>
                          <p className="text-sm text-stone-500 font-light leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-stone-900 mb-2">
                            解决方案
                          </h4>
                          <p className="text-sm text-stone-500 font-light leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-stone-900 mb-2">
                            铺装过程
                          </h4>
                          <p className="text-sm text-stone-500 font-light leading-relaxed">
                            {project.process}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-stone-900 mb-2">
                            最终效果
                          </h4>
                          <p className="text-sm text-stone-500 font-light leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                        <div className="bg-stone-50 p-6">
                          <p className="text-sm text-stone-600 font-light leading-relaxed italic mb-3">
                            &ldquo;{project.feedback}&rdquo;
                          </p>
                          <p className="text-xs text-stone-400 font-light">
                            —— {project.client}
                          </p>
                        </div>
                      </div>
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
