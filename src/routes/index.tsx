import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Receipt,
  Briefcase,
  Building2,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Globe2,
  Target,
  Database,
  Handshake,
  HeartHandshake,
  BarChart3,
  
} from "lucide-react";
import { SERVICES, waLink } from "@/lib/site";
import holographicPlatformImg from "@/assets/holographic-platform.png";
import { FinalCTA } from "@/components/site/FinalCTA";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ParticlesBackground } from "@/components/site/ParticlesBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magnivor Global Solutions — Global Insight. Strategic Clarity." },
      {
        name: "description",
        content:
          "Sri Lanka–based international consulting firm delivering accounting, taxation, CFO advisory, BPO and economic intelligence to global clients.",
      },
      { property: "og:title", content: "Magnivor Global Solutions" },
      {
        property: "og:description",
        content:
          "Global insight. Strategic clarity. Financial precision. Premium advisory for international businesses.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "accounting-bookkeeping": Calculator,
  "taxation-compliance": Receipt,
  "virtual-cfo": Briefcase,
  "bpo-services": Building2,
  "corporate-training": GraduationCap,
  "economic-intelligence": LineChart,
};

const WHY = [
  {
    icon: ShieldCheck,
    title: "IFRS-aligned expertise",
    body: "Reporting and compliance that meets international standards.",
  },
  { icon: Globe2, title: "Global advisory capability", body: "Cross-border experience across multiple jurisdictions." },
  { icon: Target, title: "CFO-level strategic insight", body: "Decision support, not just bookkeeping." },
  { icon: Database, title: "Data-driven intelligence", body: "Research-grade analysis behind every recommendation." },
  { icon: Handshake, title: "Trusted outsourcing partner", body: "SLA-driven delivery from a senior-led team." },
  {
    icon: HeartHandshake,
    title: "Client-first approach",
    body: "Every engagement is built around your goals, not a template.",
  },
];

const INDUSTRIES: string[] = [
  "SMEs & Startups",
  "International Businesses",
  "Financial Services",
  "Import / Export Firms",
  "Professional Services",
];

const INSIGHT_PREVIEW = [
  { tag: "Economic Trends", title: "Sri Lanka's monetary stance and what it means for SMEs" },
  { tag: "Taxation", title: "Cross-border VAT: practical playbook for service exporters" },
  { tag: "Financial Strategy", title: "Working capital is the new growth lever" },
];

const HERO_PILLARS = [
  { icon: ShieldCheck, label: "IFRS-Aligned Expertise" },
  { icon: Globe2, label: "Cross-Border Advisory" },
  { icon: BarChart3, label: "CFO-Level Intelligence" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate w-full overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
        style={{ backgroundColor: "#0B1F3B" }}
      >
        {/* Animated particle network */}
        <div aria-hidden className="absolute inset-0">
          <ParticlesBackground />
        </div>
        {/* Glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald opacity-20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold opacity-15 blur-[140px]"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white lg:px-10">
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Global Insight. <span style={{ color: "#C8A24A" }}>Strategic Clarity.</span> Financial Precision.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base text-white/75 md:text-lg" style={{ maxWidth: "600px" }}>
              Magnivor Global Solutions is a Sri Lanka–based international consulting firm delivering accounting,
              taxation, CFO advisory, outsourcing and economic intelligence services.
            </p>
          </Reveal>

          {/* Floating pillar badges */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {HERO_PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={220 + i * 100}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur transition hover:border-gold/70"
                  style={{ backgroundColor: "rgba(11,31,59,0.85)" }}
                >
                  <p.icon className="h-3.5 w-3.5" style={{ color: "#C8A24A" }} />
                  {p.label}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={560}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:brightness-90"
              style={{ backgroundColor: "#0E6B5B" }}
            >
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        {/* Soft background glows for clean, glowing light gray effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]"
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
                  About Magnivor
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  A multidisciplinary advisory firm built for global business
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Magnivor Global Solutions combines finance, economics and strategy to support global clients with
                  high-impact financial solutions — bridging accounting precision with strategic financial intelligence.
                </p>
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark"
                >
                  Read our story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative flex items-center justify-center">
                {/* Micro holographic aura around the image */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute h-[110%] w-[110%] rounded-2xl bg-gradient-to-tr from-emerald/20 via-gold/15 to-navy/10 opacity-70 blur-[30px]"
                />
                <img
                  src={holographicPlatformImg}
                  alt="Futuristic 3D holographic data visualization platform"
                  loading="lazy"
                  className="relative z-10 aspect-[4/3] w-full rounded-xl object-cover shadow-elegant border border-white/60 backdrop-blur-sm"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — FLIP CARDS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">What We Do</span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Integrated services for finance, compliance and growth
                </h2>
              </div>
              <Link to="/services" className="text-sm font-semibold text-emerald hover:text-emerald-dark">
                View all services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Calculator;
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <FlipServiceCard service={s} Icon={Icon} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MAGNIVOR */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Why Magnivor</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Senior-led, globally-minded, relentlessly precise</h2>
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20">
                  {/* gold left border slide-in */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0 w-[3px] bg-gold transition-all duration-500 ease-out group-hover:h-full"
                  />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-gold transition-colors duration-300 group-hover:bg-emerald group-hover:text-white">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — MINIMAL LIST */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        {/* Soft background glows for clean, glowing light gray effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]"
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
            {/* Left side: Title */}
            <div className="md:col-span-5">
              <Reveal>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
                    Industries
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl lg:text-5xl leading-tight">
                    Industries We Serve
                  </h2>
                  <p className="mt-6 text-muted-foreground text-base leading-relaxed max-w-sm">
                    We understand the unique financial challenges across every sector, delivering tailored strategies to drive sustainable international growth.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right side: Spacious vertical list */}
            <div className="md:col-span-7">
              <Reveal delay={100}>
                <div className="border-t border-navy/10">
                  {INDUSTRIES.map((name) => (
                    <div
                      key={name}
                      className="py-6 md:py-8 border-b border-navy/10"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-navy hover:text-emerald transition-colors duration-300 cursor-default">
                        {name}
                      </h3>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">Insights</span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Strategic perspectives from our advisors
                </h2>
              </div>
              <Link to="/insights" className="text-sm font-semibold text-emerald hover:text-emerald-dark">
                Read Insights →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {INSIGHT_PREVIEW.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-elegant">
                  <span className="self-start rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                    {p.tag}
                  </span>
                  <h3 className="mt-5 flex-1 text-lg font-semibold text-navy group-hover:text-emerald">{p.title}</h3>
                  <Link
                    to="/insights"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald"
                  >
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function FlipServiceCard({
  service,
  Icon,
}: {
  service: (typeof SERVICES)[number];
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const [flipped, setFlipped] = useState(false);
  const handleMouseEnter = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setFlipped(true);
  };
  const handleMouseLeave = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setFlipped(false);
  };
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    // only toggle on touch, mouse is handled by pointer events
    const pe = e.nativeEvent as PointerEvent;
    if (pe.pointerType === "touch") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  return (
    <div
      className={`flip-card h-64 w-full ${flipped ? "is-flipped" : ""}`}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div className="flip-face flex flex-col items-center justify-center rounded-xl border border-border bg-white p-7 text-center shadow-soft">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
            <Icon className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-navy">{service.title}</h3>
          <span className="mt-3 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy/70">
            {service.tag}
          </span>
        </div>
        {/* BACK */}
        <div className="flip-face flip-back flex flex-col justify-between rounded-xl gradient-emerald p-7 text-white shadow-elegant">
          <p className="text-sm leading-relaxed text-white/95">{service.short}</p>
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="mt-4 inline-flex items-center gap-1.5 self-start rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-dark transition hover:bg-white/90"
          >
            Learn More <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
