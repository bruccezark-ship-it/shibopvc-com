"use client";

import PageHero from "@/components/PageHero";
import { contactPage } from "@/data/contact";
import { images } from "@/data/images";

function ChannelIcon({ type }: { type: "phone" | "mail" | "map" }) {
  if (type === "phone") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    );
  }
  if (type === "mail") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const channelIcons = ["phone", "mail", "map"] as const;

export default function ContactContent() {
  return (
    <main>
      <PageHero
        label={contactPage.hero.label}
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
        bgImage={images.hero}
        altText={contactPage.hero.alt}
      />

      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="mb-16">
            <p className="section-label">
              {contactPage.channelsSection.label}
            </p>
            <h2 className="section-title">
              {contactPage.channelsSection.title}
            </h2>
            <div className="section-line" />
            <p className="section-desc">{contactPage.channelsSection.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactPage.channelsSection.channels.map((channel, index) => (
              <div
                key={channel.label}
                className="bg-stone-50 p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-stone-100 flex items-center justify-center text-stone-600 mb-6">
                  <ChannelIcon type={channelIcons[index] ?? "phone"} />
                </div>
                <p className="text-xs tracking-widest uppercase text-amber-500 font-medium mb-3">
                  {channel.label}
                </p>
                <p className="font-display text-xl font-medium text-stone-900 mb-2 break-all">
                  {channel.value}
                </p>
                <p className="text-sm text-stone-500 font-light leading-relaxed flex-1 mb-6">
                  {channel.desc}
                </p>
                {channel.action ? (
                  <a
                    href={channel.action}
                    className="inline-flex items-center gap-2 text-sm text-stone-900 font-medium border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors duration-200 self-start"
                  >
                    <span>{channel.actionLabel}</span>
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
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 pt-20">
            <div className="mb-12 text-center">
              <p className="section-label">
                {contactPage.promisesSection.label}
              </p>
              <h2 className="section-title">
                {contactPage.promisesSection.title}
              </h2>
              <div className="section-line mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactPage.promisesSection.items.map((item, index) => (
                <div key={item.title} className="text-center">
                  <span className="text-xs text-amber-500 font-medium tracking-widest block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-lg font-medium text-stone-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-stone-500 font-light mb-6">
                {contactPage.bottomCta.text}
              </p>
              <a
                href={contactPage.bottomCta.button.href}
                className={`${contactPage.bottomCta.button.className} inline-block`}
              >
                {contactPage.bottomCta.button.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
