import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { aboutPage } from "@/data/about";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  keywords: aboutPage.seo.keywords,
};

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function AboutPage() {
  const { companyIntro, integrationAdvantages, coreValues } = aboutPage;

  return (
    <main>
      <PageHero
        label={aboutPage.hero.label}
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
        bgImage={images.hero}
        altText={aboutPage.hero.alt}
      />

      <section id={companyIntro.id} className="py-28 bg-white scroll-mt-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">{companyIntro.label}</p>
              <h2 className="section-title">{companyIntro.title}</h2>
              <div className="section-line" />
              <div className="space-y-4 text-sm text-stone-500 font-light leading-relaxed">
                {companyIntro.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ paddingBottom: "75%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={companyIntro.image}
                alt={companyIntro.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id={integrationAdvantages.id}
        className="py-28 bg-stone-50 scroll-mt-24"
      >
        <div className="container-site">
          <div className="mb-16">
            <p className="section-label">{integrationAdvantages.label}</p>
            <h2 className="section-title">{integrationAdvantages.title}</h2>
            <div className="section-line" />
            <p className="section-desc">{integrationAdvantages.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
            {integrationAdvantages.items.map((item) => (
              <div
                key={item.title}
                className="bg-stone-50 p-8 lg:p-10 transition-colors duration-300 hover:bg-white group"
              >
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6 transition-colors duration-300 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-500">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-3 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={coreValues.id} className="py-28 bg-white scroll-mt-24">
        <div className="container-site">
          <div className="mb-16">
            <p className="section-label">{coreValues.label}</p>
            <h2 className="section-title">{coreValues.title}</h2>
            <div className="section-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {coreValues.items.map((item) => (
              <div
                key={item.title}
                className="bg-stone-50 p-8 lg:p-10 transition-colors duration-300 hover:bg-white group"
              >
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6 transition-colors duration-300 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-500">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-3 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
