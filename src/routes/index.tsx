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
  Rocket,
  Landmark,
  Ship,
} from "lucide-react";
import { SERVICES, waLink } from "@/lib/site";
import { FinalCTA } from "@/components/site/FinalCTA";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import strategyImg from "@/assets/strategy-compressed.jpg";
import smeStartupImg from "@/assets/SME_startup.jpg";
import intnlBusinessImg from "@/assets/intnl_business.jpg";
import financeImg from "@/assets/finance.jpg";
import importExportImg from "@/assets/import_export.jpg";
import heroAdvisoryImg from "@/assets/hero-advisory.jpg";

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

const INDUSTRIES = [
  {
    name: "SMEs & Startups",
    icon: Rocket,
    image: smeStartupImg,
    tagline: "Scalable financial systems, tax structure, and growth advisory for early and mid-stage firms.",
  },
  {
    name: "International Businesses",
    icon: Globe2,
    image: intnlBusinessImg,
    tagline: "Cross-border compliance, global tax alignment, and multi-jurisdictional reporting.",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    image: financeImg,
    tagline: "Data-driven economic intelligence, IFRS performance standards, and regulatory reporting.",
  },
  {
    name: "Import / Export Firms",
    icon: Ship,
    image: importExportImg,
    tagline: "Working capital optimization, transfer pricing structure, and trade compliance.",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    image: heroAdvisoryImg,
    tagline: "Partner-level profitability analysis, practice growth advisory, and senior outsourcing support.",
  },
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

const TRENDING_TOPICS = [
  { id: "f1", category: "Economic Trends", title: "CBSL Policy Rate shifts" },
  { id: "f2", category: "Taxation Updates", title: "Cross-Border VAT playbook" },
  { id: "f3", category: "Financial Strategy", title: "IFRS 18 Performance reporting" },
];

function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate w-full overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
        style={{ backgroundColor: "var(--navy)" }}
      >
        {/* Background video */}
        <video
          src="/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(2, 16, 36, 0.75)" }}
        />

        {/* noscript Fallback */}
        <noscript>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--navy)" }}
          />
        </noscript>

        {/* Glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald opacity-20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold opacity-15 blur-[140px]"
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white lg:px-10">
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Global Insight. <span className="text-gold">Strategic Clarity.</span> Financial Precision.
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
                  style={{ backgroundColor: "rgba(2,16,36,0.85)" }}
                >
                  <p.icon className="h-3.5 w-3.5 text-gold" />
                  {p.label}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={560}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant transition hover:brightness-90"
            >
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TRENDING BAR */}
      <div className="relative z-20 border-b border-border bg-[#031735] py-3.5 shadow-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C1E8FF] flex-none">
            <span className="flex h-2 w-2 rounded-full bg-[#5483B3] animate-pulse" />
            Trending Topics
          </span>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-white/70">
            {TRENDING_TOPICS.map((topic) => (
              <Link
                key={topic.title}
                to="/insights"
                search={{ category: topic.category, articleId: topic.id }}
                className="hover:text-[#C1E8FF] transition-colors font-medium flex items-center gap-1.5 hover:underline"
              >
                <span>{topic.title}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#5483B3]" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT SNAPSHOT */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left side: Text content */}
            <div className="lg:col-span-7 text-left">
              <Reveal>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-soft">
                    About Magnivor
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl leading-tight">
                    A multidisciplinary advisory firm built for global business
                  </h2>
                  <p className="mt-5 text-navy/70 max-w-2xl text-base md:text-lg leading-relaxed">
                    Magnivor Global Solutions combines finance, economics and strategy to support global clients with
                    high-impact financial solutions — bridging accounting precision with strategic financial intelligence.
                  </p>
                  <Link
                    to="/about"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-soft hover:text-navy"
                  >
                    Read our story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right side: Styled image with decorative glow */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-emerald/20 to-gold/20 blur-lg opacity-80" />
                  <img
                    src={strategyImg}
                    alt="Corporate Strategy"
                    className="relative z-10 w-full rounded-2xl border border-border/50 object-cover shadow-elegant"
                  />
                </div>
              </Reveal>
            </div>
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
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
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
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-soft">Why Magnivor</span>
              <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Senior-led, globally-minded, relentlessly precise</h2>
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/30 via-navy/10 to-transparent" />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-navy p-6 backdrop-blur transition hover:border-white/20 text-white">
                  {/* gold left border slide-in */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0 w-[3px] bg-gold transition-all duration-500 ease-out group-hover:h-full"
                  />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-gold transition-colors duration-300 group-hover:bg-emerald group-hover:text-white">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — INTERACTIVE CAROUSEL */}
      <section className="relative overflow-hidden bg-navy py-20 md:py-28 text-white">
        {/* Soft background glows for clean dark themed effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[100px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left side: Title and list */}
            <div className="lg:col-span-5">
              <Reveal>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Industries
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                    Industries We Serve
                  </h2>
                  <p className="mt-6 text-white/70 text-base leading-relaxed mb-8">
                    We understand the unique financial challenges across every sector, delivering tailored strategies to drive sustainable international growth.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex flex-col border-l border-white/10 pl-2 space-y-2">
                  {INDUSTRIES.map((ind, index) => {
                    const Icon = ind.icon;
                    const isActive = index === activeIndustry;
                    return (
                      <button
                        key={ind.name}
                        onClick={() => setActiveIndustry(index)}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg text-left transition duration-300 cursor-pointer w-full ${
                          isActive
                            ? "bg-white/5 border-l-2 border-gold text-gold"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon className={`h-5 w-5 flex-none ${isActive ? "text-gold" : "text-[#7DA0CA]"}`} />
                        <span className="text-base font-semibold">
                          {ind.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right side: Interactive Image Display */}
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] shadow-elegant bg-black/20">
                  {/* Glowing background */}
                  <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-emerald/15 to-gold/15 blur-lg opacity-75 transition duration-500 group-hover:opacity-100" />
                  
                  {/* Active Image container with animation */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl z-10">
                    {INDUSTRIES.map((ind, index) => {
                      const isActive = index === activeIndustry;
                      return (
                        <div
                          key={ind.name}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            isActive ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-105 pointer-events-none"
                          }`}
                        >
                          <img
                            src={ind.image}
                            alt={ind.name}
                            className="w-full h-full object-cover brightness-[0.7] transition-transform duration-700 hover:scale-105"
                          />
                          {/* Text overlay inside image */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-6 md:p-8 flex flex-col justify-end text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                              How we help
                            </span>
                            <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">
                              {ind.name}
                            </h3>
                            <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-xl">
                              {ind.tagline}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
          <span className="mt-3 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
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
