export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden gradient-navy pt-32 pb-20 md:pt-40 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-emerald opacity-25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-gold opacity-20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
