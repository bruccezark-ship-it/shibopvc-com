import type { Metadata } from "next";
import Link from "next/link";
import { homePage } from "@/data/home";

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
  keywords: homePage.seo.keywords,
};

const pillarIcons: Record<string, React.ReactNode> = {
  材料: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  铺装: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  交付: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function HomePage() {
  const hero = homePage.sections.find((s) => s.id === "hero")!;
  const system = homePage.sections.find((s) => s.id === "system")!;
  const scenes = homePage.sections.find((s) => s.id === "scenes")!;
  const architecture = homePage.sections.find((s) => s.id === "architecture")!;
  const cta = homePage.sections.find((s) => s.id === "cta")!;

  return (
    <main>
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.bgImage}
            alt={hero.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
        </div>
        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            <p
              className="section-label"
              style={{ color: "hsl(var(--amber-400))" }}
            >
              {hero.label}
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-[1.1]">
              {hero.titleLine1}
            </h1>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] mb-2 text-[#ffc406]">
              {hero.titleLine2}
            </h1>
            <p className="text-white/70 font-light text-base md:text-lg leading-relaxed mb-3 max-w-lg">
              {hero.subtitle}
            </p>
            <p className="text-white/50 font-light text-sm tracking-wide mb-10">
              {hero.process}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {hero.ctas.map((item) => (
                <Link key={item.href} href={item.href} className={item.className}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">
            {hero.scrollHint}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-px h-48 bg-gradient-to-t from-transparent via-amber-400/30 to-transparent" />
      </section>

      <section className={`py-28 ${system.bg}`}>
        <div className="container-site">
          <div className="mb-16 text-center">
            <p className="section-label">{system.label}</p>
            <h2 className="section-title">{system.title}</h2>
            <div className="section-line mx-auto" />
            <p className="section-desc max-w-lg mx-auto">{system.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {system.pillars.map((item) => (
              <div
                key={item.title}
                className="bg-white p-10 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-stone-100 flex items-center justify-center text-stone-500 mx-auto mb-6 transition-colors duration-300 group-hover:bg-amber-50 group-hover:text-amber-500">
                  {pillarIcons[item.title]}
                </div>
                <h3 className="font-display text-2xl font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-xs tracking-widest uppercase text-stone-400 font-light mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex justify-center items-center gap-4 mt-8">
            {system.flow.map((label, index) => (
              <div key={label} className="contents">
                {index > 0 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--amber-400))"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                ) : null}
                <span className="text-xs text-stone-400 font-light tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-28 ${scenes.bg}`}>
        <div className="container-site">
          <div className="mb-16">
            <p className="section-label">{scenes.label}</p>
            <h2 className="section-title">{scenes.title}</h2>
            <div className="section-line" />
            <p className="section-desc">{scenes.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {scenes.scenes.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block relative overflow-hidden aspect-[3/4]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={`河北石博 | ${item.title}弹性地板`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light tracking-wide">
                    {item.sub}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/40">
                  <span className="inline-flex items-center gap-2 text-white border border-white/60 px-5 py-2 text-sm font-light tracking-wide">
                    {scenes.hoverCta}
                    <svg
                      width="14"
                      height="14"
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
            ))}
          </div>
        </div>
      </section>

      <section className={`py-28 ${architecture.bg}`}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">{architecture.label}</p>
              <h2 className="section-title">{architecture.title}</h2>
              <div className="section-line" />
              <p className="section-desc mb-8">{architecture.desc}</p>
              <div className="space-y-4">
                {architecture.leftLayers.map((item, index) => (
                  <div key={item.layer} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-stone-200 flex items-center justify-center text-stone-600 text-xs font-medium shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-900 mb-1">
                        {item.layer}
                      </h4>
                      <p className="text-xs text-stone-500 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-900 text-white p-10 lg:p-14">
              <h3 className="font-display text-xl font-medium mb-8 text-center">
                {architecture.diagramTitle}
              </h3>
              <div className="space-y-0">
                {architecture.layers.map((item, index) => (
                  <div key={item.name}>
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
                    <div
                      className={`py-3 text-center text-sm font-light tracking-wide ${
                        "dim" in item && item.dim
                          ? "bg-stone-800 text-stone-500"
                          : "bg-stone-700 text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-stone-50">
        <div className="container-site flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="section-label">{cta.label}</p>
            <h2 className="section-title">{cta.title}</h2>
            <div className="section-line" />
            <p className="section-desc">{cta.desc}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href={cta.cta.href} className={cta.cta.className}>
              {cta.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
