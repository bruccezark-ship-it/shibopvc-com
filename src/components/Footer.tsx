import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="container-site pt-16 pb-0 mt-[1px] border-solid mb-[5px] border-[rgb(0,0,0)] border-[0px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-stone-800">
          <div className="lg:col-span-1 border-solid border-[rgb(0,0,0)] border-[0px] mt-[9px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-stone-800 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-amber-400" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-[0.12em] text-white">
                  {site.company.brand}
                </span>
                <p className="text-[10px] tracking-widest uppercase text-stone-500">
                  {site.company.fullName}
                </p>
              </div>
            </div>
            <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xs mb-6">
              {site.company.taglineFooter}
            </p>
            <p className="text-stone-600 text-xs font-light">
              全国服务热线：
              <span className="text-stone-400">{site.company.hotline}</span>
            </p>
          </div>

          <div className="border-[0px] mt-[9px] border-solid border-[rgb(0,0,0)]">
            <h4 className="text-white text-sm font-light tracking-wide mb-5">
              产品中心
            </h4>
            <ul className="space-y-3">
              {site.footer.productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-500 text-sm font-light hover:text-stone-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-[0px] mt-[9px] border-solid border-[rgb(0,0,0)]">
            <h4 className="text-white text-sm font-light tracking-wide mb-5">
              解决方案与服务
            </h4>
            <ul className="space-y-3">
              {site.footer.serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-500 text-sm font-light hover:text-stone-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-[0px] mt-[9px] border-solid border-[rgb(0,0,0)]">
            <h4 className="text-white text-sm font-light tracking-wide mb-5">
              关于石博
            </h4>
            <ul className="space-y-3">
              {site.footer.aboutAnchors.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-stone-500 text-sm font-light hover:text-stone-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4 border-t border-stone-800">
          <p className="text-stone-600 text-xs font-light">
            {site.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.footer.icp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 text-xs font-light hover:text-stone-400 transition-colors"
            >
              {site.footer.icp.text}
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={site.footer.policeBeian.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-stone-600 text-xs font-light hover:text-stone-400 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/beian.webp"
                alt={site.footer.policeBeian.alt}
                className="h-4 w-auto"
              />
              {site.footer.policeBeian.text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
