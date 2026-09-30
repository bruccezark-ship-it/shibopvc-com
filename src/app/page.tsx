import type { Metadata } from "next";
import Link from "next/link";
import { homePage } from "@/data/home";
import TermText from "@/components/TermText";

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
  keywords: homePage.seo.keywords,
  alternates: {
    canonical: "/",
  },
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
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.bgImage}
            alt={hero.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0" style={{ background: "linear-gradient(to right, rgba(28,25,23,0.8), rgba(28,25,23,0.5), transparent)" }} />
        </div>
        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            <p
              className="section-label"
              style={{ color: "hsl(var(--amber-400))" }}
            >
              {hero.label}
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] mb-2">
              <span className="block text-white">{hero.titleLine1}</span>
              <span className="block text-[#ffc406]">{hero.titleLine2}</span>
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

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">关于我们</p>
              <h2 className="section-title">河北石博新材料科技有限公司</h2>
              <div className="section-line" />
              <div className="space-y-4 text-sm text-stone-500 font-light leading-relaxed">
                <p>
                  <TermText text="河北石博新材料科技有限公司成立于2023年，是集弹性地板材料供应与铺装交付于一体的一站式系统服务商。公司深耕弹性地板行业，业务覆盖商用、运动、医疗、教育、工业等多个领域。" />
                </p>
                <p>
                  <TermText text="河北石博与国内外知名弹性地板品牌建立直接合作关系，省去中间环节，确保正品品质与价格优势。同时，公司拥有经验丰富的专业铺装团队，持证上岗，标准化铺装流程，累计服务客户150+家，铺装面积超过100万平方米。" />
                </p>
                <p>
                  <TermText text="从材料选型、报价、供货到铺装交付、售后维护，石博为客户提供全流程一体化服务，综合成本节省20%-30%，品质全程可控。" />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "150+", label: "累计服务客户" },
                { num: "100万㎡+", label: "累计铺装面积" },
                { num: "10+省", label: "业务覆盖范围" },
                { num: "20%-30%", label: "综合成本节省" },
              ].map((stat) => (
                <div key={stat.label} className="bg-stone-50 p-6 text-center">
                  <p className="font-display text-2xl font-medium text-stone-900 mb-1">
                    {stat.num}
                  </p>
                  <p className="text-xs text-stone-400 font-light tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`py-28 ${system.bg}`}>
        <div className="container-site">
          <div className="mb-16 text-center">
            <p className="section-label">{system.label}</p>
            <h2 className="section-title">{system.title}</h2>
            <div className="section-line mx-auto" />
            <p className="section-desc max-w-lg mx-auto">
              <TermText text={system.desc} />
            </p>
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
                  <TermText text={item.desc} />
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
            <p className="section-desc">
              <TermText text={scenes.desc} />
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {scenes.scenes.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block relative overflow-hidden"
                style={{ paddingBottom: "133.33%" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={`河北石博 | ${item.title}弹性地板`}
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0" style={{ background: "linear-gradient(to top, rgba(28,25,23,0.8), rgba(28,25,23,0.2), transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light tracking-wide">
                    {item.sub}
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:bg-stone-900/40">
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
              <p className="section-desc mb-8">
                <TermText text={architecture.desc} />
              </p>
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
                        <TermText text={item.desc} />
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

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-16 text-center">
            <p className="section-label">常见问题</p>
            <h2 className="section-title">关于PVC弹性地板，您想了解的都在这里</h2>
            <div className="section-line mx-auto" />
            <p className="section-desc max-w-2xl mx-auto">
              河北石博作为专业弹性地板系统服务商，为您解答关于PVC地板、LVT地板、SPC地板等弹性地面材料的常见疑问
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "PVC地板和瓷砖相比有什么优势？",
                a: "PVC地板比瓷砖更轻薄、脚感更舒适，具有更好的吸音和减震性能。同时PVC地板防滑性能优异，铺装更快捷，综合成本更低，广泛应用于医院、学校、商业空间等场所。",
              },
              {
                q: "弹性地板适合用在医院吗？",
                a: "非常适合。弹性地板是医院地面的首选材料，PVC地板具有抗菌、防滑、易清洁消毒等特性，同质透心PVC地板更是医疗场所的标准选择，能满足医院对卫生和耐磨的严格要求。",
              },
              {
                q: "LVT地板和SPC地板有什么区别？",
                a: "LVT地板（豪华乙烯基地板）质地较软，脚感舒适，适合家庭和轻度商业使用；SPC地板（石塑复合地板）质地更坚硬，防水性和稳定性更强，适合高流量商业和公共场所。两者都属于弹性地板家族。",
              },
              {
                q: "橡胶地板可以用在运动场馆吗？",
                a: "可以。橡胶地板具有优异的弹性和减震性能，是运动场馆的理想选择。运动地板需要满足专业运动标准，河北石博提供符合各类运动场地要求的橡胶地板和运动PVC地胶产品。",
              },
              {
                q: "亚麻地板环保吗？",
                a: "亚麻地板是非常环保的弹性地板材料，主要由亚麻籽油、软木粉、石灰石等天然原料制成，可自然降解。亚麻地板具有天然抗菌性，适合教育、医疗等对环保要求高的场所。",
              },
              {
                q: "铺装弹性地板前需要做自流平吗？",
                a: "通常需要。自流平是弹性地板铺装前的重要基层处理工序，能确保地面平整度达到铺装要求。河北石博的专业铺装团队会先进行基层检测，根据实际情况决定是否需要自流平处理。",
              },
              {
                q: "河北石博的弹性地板价格是多少？",
                a: "弹性地板价格因材料类型、厚度、品牌而异。河北石博与国内外知名弹性地板品牌建立直接合作关系，省去中间环节，确保正品品质与价格优势。欢迎联系我们获取免费报价方案。",
              },
              {
                q: "PVC地板的使用寿命有多长？",
                a: "PVC地板的使用寿命取决于使用场景和维护保养。一般来说，商用PVC地板使用寿命可达10-15年，同质透心PVC地板因通体同质结构，磨损后颜色一致不露底，使用寿命更长。定期维护保养可有效延长使用寿命。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-stone-50 p-6">
                <h3 className="text-sm font-medium text-stone-900 mb-3 flex items-start gap-2">
                  <span className="text-amber-500 shrink-0 mt-0.5">Q</span>
                  {item.q}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed pl-5">
                  <TermText text={item.a} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-stone-50">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
            <div>
              <p className="section-label">{cta.label}</p>
              <h2 className="section-title">{cta.title}</h2>
              <div className="section-line" />
              <p className="section-desc">
                <TermText text={cta.desc} />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href={cta.cta.href} className={cta.cta.className}>
                {cta.cta.label}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "免费上门勘察",
                desc: "专业工程师免费上门测量，根据现场条件提供个性化弹性地板铺装方案",
              },
              {
                title: "48小时出方案",
                desc: "从需求沟通到材料选型、铺装报价，48小时内为您提供完整解决方案",
              },
              {
                title: "双重质保",
                desc: "材料质保与铺装质保双重保障，PVC地板、橡胶地板全系产品售后无忧",
              },
              {
                title: "200+项目经验",
                desc: "覆盖医院、学校、商业、工业、运动场馆等场景，累计服务客户超200家",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-stone-100"
              >
                <h3 className="text-sm font-medium text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  <TermText text={item.desc} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
