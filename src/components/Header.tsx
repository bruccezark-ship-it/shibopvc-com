"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-stone-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-stone-800 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-amber-400" />
          </div>
          <div>
            <span className={`font-display text-xl font-bold tracking-[0.12em] transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-white"
            }`}>
              {site.company.brand}
            </span>
            <p className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-stone-500" : "text-white/70"
            }`}>
              新材料科技有限公司
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-light tracking-wide relative group transition-colors duration-300 ${
                  scrolled
                    ? `text-stone-700 hover:text-stone-900 ${active ? "text-stone-900" : ""}`
                    : `text-white/90 hover:text-white ${active ? "text-white" : ""}`
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-stone-900" : "bg-white"
                  } ${active ? "w-full" : ""}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setOpen(!open)}
            aria-label="菜单"
            aria-expanded={open}
            type="button"
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  scrolled ? "text-stone-900" : "text-white"
                }`}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-colors duration-300 ${
                  scrolled ? "text-stone-900" : "text-white"
                }`}
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-t border-stone-100 shadow-lg flex flex-col transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
      >
        <button
          className="absolute top-4 right-4 p-2 text-stone-700 hover:text-stone-900 transition-colors"
          onClick={() => setOpen(false)}
          aria-label="关闭菜单"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {site.nav.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="block px-6 py-3 text-sm font-light tracking-wide text-stone-700 hover:bg-stone-50 transition-colors"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a
          href={site.mobileMenuCta.href}
          className="block mx-6 my-3 py-3 bg-stone-800 text-white text-center text-sm font-light tracking-wide"
          onClick={() => setOpen(false)}
        >
          {site.mobileMenuCta.label}
        </a>
      </div>
    </header>
  );
}
