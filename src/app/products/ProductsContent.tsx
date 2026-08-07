"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { images } from "@/data/images";
import {
  productFilters,
  productPage,
  products,
  type Product,
} from "@/data/products";

const iconPaths: Record<string, string> = {
  thickness: "M3 12h18M3 6h18M3 18h18",
  wear: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  flame: "M12 2c0 0-4 6-4 10a4 4 0 0 0 8 0c0-4-4-10-4-10z",
  install:
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
};

function SpecIcon({ type }: { type: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="shrink-0 text-amber-500"
    >
      <path d={iconPaths[type] ?? iconPaths.thickness} />
    </svg>
  );
}

function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="关闭"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-[calc(100%-2rem)] md:max-w-3xl bg-white overflow-hidden max-h-[80dvh] md:max-h-none">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-white/90 text-stone-700 hover:bg-white"
          aria-label="关闭详情"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 relative overflow-hidden min-h-[200px] md:min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.img}
              alt={`河北石博 | ${product.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/40" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] tracking-widest text-amber-400 uppercase mb-1">
                {product.nameEn}
              </p>
              <h3 className="font-display text-xl font-medium text-white text-balance leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-white/70 font-light mt-1">
                {product.tagline}
              </p>
            </div>
          </div>
          <div className="md:col-span-3 overflow-y-auto max-h-[60dvh] md:max-h-[600px]">
            <div className="p-6 md:p-8 pb-28 md:pb-8">
              <p className="text-sm text-stone-500 font-light leading-relaxed mb-6 text-pretty">
                {product.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-[10px] font-medium tracking-widest uppercase text-stone-400 mb-3">
                    {productPage.detailModal.specsTitle}
                  </h4>
                  <div className="space-y-2.5">
                    {productPage.detailModal.specsLabels.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="flex items-center gap-2 text-stone-400 font-light">
                          <SpecIcon type={spec.icon} />
                          {spec.label}
                        </span>
                        <span className="text-stone-900 font-medium">
                          {product[spec.field as keyof Product] as string}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-medium tracking-widest uppercase text-stone-400 mb-3">
                    {productPage.detailModal.featuresTitle}
                  </h4>
                  <div className="space-y-1.5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="text-amber-500 shrink-0"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-stone-600 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.scenes.map((scene) => (
                  <span
                    key={scene}
                    className="text-[10px] px-2.5 py-1 border border-stone-200 text-stone-500 font-light"
                  >
                    {scene}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-stone-100">
                {productPage.detailModal.ctas.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    onClick={onClose}
                    className={`${cta.className} text-center`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsContent() {
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("全部");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () =>
      filter === "全部"
        ? products
        : products.filter((item) => item.scenes.includes(filter)),
    [filter],
  );

  return (
    <main>
      <PageHero
        label={productPage.hero.label}
        title={productPage.hero.title}
        subtitle={productPage.hero.subtitle}
        bgImage={images.hero}
        altText={productPage.hero.alt}
      />

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-12">
            <p className="section-label">{productPage.library.label}</p>
            <h2 className="section-title">{productPage.library.title}</h2>
            <div className="section-line" />
            <p className="section-desc">{productPage.library.desc}</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {productFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 text-sm font-light tracking-wide transition-all duration-300 ${
                  filter === item
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {item}
                {item !== "全部" ? (
                  <span className="ml-1.5 text-[11px] opacity-60">
                    {products.filter((p) => p.scenes.includes(item)).length}
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className="group text-left flex flex-col h-full transition-all duration-300 border border-stone-200 hover:border-amber-400 hover:shadow-md"
              >
                <div className="relative overflow-hidden shrink-0" style={{ paddingBottom: "75%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={`河北石博 | ${item.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] tracking-widest text-amber-400 font-medium uppercase mb-0.5">
                      {item.nameEn}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-stone-900/70 px-4 py-2 flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-amber-400"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                      <span className="text-white text-xs font-light tracking-wide">
                        {productPage.library.hoverCta}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-base font-medium text-stone-900 mb-1 text-balance">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-amber-500 font-light tracking-wide mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-stone-500 font-light leading-relaxed flex-1 text-pretty mb-4">
                    {item.highlight}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.scenes.map((scene) => (
                      <span
                        key={scene}
                        className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-500 font-light"
                      >
                        {scene}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-stone-100 text-[11px]">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <SpecIcon type="thickness" />
                      <span>{item.thickness}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <SpecIcon type="wear" />
                      <span>{item.wear}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />

      <section className="py-28 bg-stone-50">
        <div className="container-site">
          <div className="mb-12">
            <p className="section-label">{productPage.compare.label}</p>
            <h2 className="section-title">{productPage.compare.title}</h2>
            <div className="section-line" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  {productPage.compare.columns.map((col) => (
                    <th
                      key={col}
                      className="text-left px-5 py-4 font-light tracking-wide whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-stone-50"
                    } hover:bg-amber-50`}
                  >
                    <td className="px-5 py-4 font-medium text-stone-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-5 py-4 text-stone-500 font-light whitespace-nowrap">
                      {item.thickness}
                    </td>
                    <td className="px-5 py-4 text-stone-500 font-light whitespace-nowrap">
                      {item.wear}
                    </td>
                    <td className="px-5 py-4 text-stone-500 font-light whitespace-nowrap">
                      {item.flameRetardant}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.scenes.map((scene) => (
                          <span
                            key={scene}
                            className="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-500 whitespace-nowrap"
                          >
                            {scene}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-28 bg-stone-900 text-white">
        <div className="container-site flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p
              className="section-label"
              style={{ color: "hsl(var(--amber-400))" }}
            >
              {productPage.cta.label}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-5 text-balance">
              {productPage.cta.title}
            </h2>
            <div
              className="section-line"
              style={{ background: "hsl(var(--stone-600))" }}
            />
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-md text-pretty">
              {productPage.cta.desc}
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            {productPage.cta.buttons.map((btn) => (
              <Link key={btn.href} href={btn.href} className={btn.className}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
