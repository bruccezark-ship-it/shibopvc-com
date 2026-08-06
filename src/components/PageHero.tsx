type PageHeroProps = {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage: string;
  altText: string;
};

export function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  bgImage,
  altText,
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
      </div>
      <div className="container-site relative z-10">
        <div className="max-w-xl">
          <p
            className="section-label"
            style={{ color: "hsl(var(--amber-400))" }}
          >
            {label}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight">
            {title}
          </h1>
          {titleAccent ? (
            <h1 className="font-display text-4xl md:text-5xl font-medium text-amber-400 leading-tight mb-4">
              {titleAccent}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="text-white/70 font-light text-base leading-relaxed max-w-md mt-[5px]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
