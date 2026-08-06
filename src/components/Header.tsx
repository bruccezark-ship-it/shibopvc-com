"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-transparent">
      <div className="container-site flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-stone-800 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-amber-400" />
          </div>
          <div>
            <span className="brand-text font-display text-xl font-bold tracking-[0.12em]">
              {site.company.brand}
            </span>
            <p className="brand-subtitle text-[10px] tracking-widest uppercase">
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
                className={`nav-link text-sm font-light tracking-wide relative group ${
                  active ? "brand-text" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full ${
                    active ? "w-full" : ""
                  }`}
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
                className="menu-icon brand-text"
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
                className="menu-icon brand-text"
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
        className={`md:hidden fixed top-0 left-0 right-0 bg-white border-t border-stone-100 shadow-lg flex flex-col transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ paddingTop: "4rem" }}
      >
        {site.nav.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="block px-6 py-3 text-sm font-light tracking-wide text-stone-700 hover:bg-stone-50 transition-colors"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href={site.mobileMenuCta.href}
          className="block mx-6 my-3 py-3 bg-stone-800 text-white text-center text-sm font-light tracking-wide"
          onClick={() => setOpen(false)}
        >
          {site.mobileMenuCta.label}
        </Link>
      </div>
    </header>
  );
}
