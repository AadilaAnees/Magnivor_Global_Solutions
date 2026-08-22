import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Target,
  Compass,
  Globe2,
  Sparkles,
  Linkedin,
  MapPin,
  Building2,
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Mail,
  Handshake,
  Briefcase,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";
import { WorldPresenceMap } from "@/components/site/WorldPresenceMap";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who we are — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Magnivor Global Solutions bridges accounting precision with strategic financial intelligence for global businesses.",
      },
      { property: "og:title", content: "Who we are — Magnivor Global Solutions" },
      {
        property: "og:description",
        content: "Our story, mission, vision, values, global presence, and the team that drive our advisory work.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    name: "Integrity",
    icon: ShieldCheck,
    body: "We do the right thing — even when no one is watching. Every number, every recommendation.",
  },
  {
    name: "Precision",
    icon: Target,
    body: "Rigorous, audit-grade work. The detail behind the strategy is where trust is earned.",
  },
  {
    name: "Strategy",
    icon: Compass,
    body: "We translate financial intelligence into decisions leadership can act on with confidence.",
  },
  {
    name: "Global Perspective",
    icon: Globe2,
    body: "Cross-border thinking by default — built for clients operating across jurisdictions.",
  },
  {
    name: "Client Success",
    icon: Sparkles,
    body: "Our scorecard is your growth. Long-term partnerships over transactional engagements.",
  },
];

const STORY_LINES = [
  { text: "BUILT", className: "text-gold" },
  { text: "FOR THE", className: "text-gold" },
  { text: "MODERN", className: "text-gold" },
  { text: "GLOBAL", className: "text-gold" },
  { text: "FINANCE", className: "text-white" },
  { text: "FUNCTION.", className: "text-white" },
];

function Typewriter({ lines }: { lines: { text: string; className: string }[] }) {
  const [visibleText, setVisibleText] = useState<string[]>(lines.map(() => ""));
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    const timer = setInterval(() => {
      if (currentLineIndex >= lines.length) {
        clearInterval(timer);
        return;
      }
      
      const line = lines[currentLineIndex].text;
      if (currentCharIndex < line.length) {
        setVisibleText(prev => {
          const next = [...prev];
          next[currentLineIndex] = line.slice(0, currentCharIndex + 1);
          return next;
        });
        currentCharIndex++;
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
      }
    }, 70);
    
    return () => clearInterval(timer);
  }, [start, lines]);

  return (
    <div ref={ref} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tighter text-left flex flex-col min-h-[300px] md:min-h-[420px]">
      {lines.map((line, idx) => {
        const isCurrentLine = start && (
          (idx === 0 && visibleText[idx].length < line.text.length) ||
          (idx > 0 && visibleText[idx - 1].length === lines[idx - 1].text.length && visibleText[idx].length < line.text.length)
        );
        return (
          <span key={idx} className={line.className}>
            {visibleText[idx]}
            {isCurrentLine && (
              <span className="inline-block w-[3px] h-[0.8em] bg-current ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
            )}
          </span>
        );
      })}
    </div>
  );
}

function AboutPage() {
  // Support smooth scrolling to anchor hash on mount or when hash changes
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const timer = setTimeout(handleHashScroll, 120);
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title={
          <>
            Bridging accounting precision with{" "}
            <span className="text-gradient-gold">strategic intelligence</span>
          </>
        }
        description="Magnivor Global Solutions was created to serve global businesses with high-impact financial advisory that combines finance, economics and strategy."
      />

      {/* Story */}
      <section
        id="story"
        className="scroll-mt-24 md:scroll-mt-28 pt-8 pb-20 md:pt-12 md:pb-28 relative overflow-hidden bg-navy text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20 items-center">
            {/* Left side: Heading and content (no animation) */}
            <div className="md:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block mb-3">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-white md:text-5xl leading-tight">
                Purpose drives us
              </h2>
              <p className="mt-6 text-white/80 text-base leading-relaxed md:text-lg">
                Magnivor Global Solutions was founded to bridge accounting precision with strategic
                financial intelligence for global businesses.
              </p>
              <p className="mt-4 text-white/70 text-sm leading-relaxed md:text-base">
                We work alongside leadership teams as a trusted advisory partner — practical, senior-led
                and rigorous — supporting clients across Sri Lanka and internationally with the systems,
                insight, and confidence required to grow.
              </p>
            </div>

            {/* Right side: Large stylized text, stacked with typing animation */}
            <div className="md:col-span-5">
              <Typewriter lines={STORY_LINES} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section
        id="vision-mission"
        className="scroll-mt-24 md:scroll-mt-28 bg-white pt-8 pb-20 md:pt-12 md:pb-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-col gap-10">
          {/* Mission Card */}
          <div className="group rounded-2xl border border-white/10 bg-navy p-8 md:p-12 text-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center relative">
              <svg className="w-full h-full text-gold animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2.5" strokeDasharray="160 40" />
                <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2.5" strokeDasharray="160 40" style={{ transform: 'rotate(120deg)', transformOrigin: 'center' }} />
                <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2.5" strokeDasharray="160 40" style={{ transform: 'rotate(240deg)', transformOrigin: 'center' }} />
                <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.8" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Mission
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl leading-tight">
                Deliver world-class financial and advisory services
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed text-sm md:text-base">
                Enable sustainable business growth through rigorous accounting, strategic advisory
                and intelligence that informs better decisions every day.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-2xl border border-white/10 bg-navy p-8 md:p-12 text-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
                Vision
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl leading-tight">
                Become a globally recognized financial intelligence advisory firm
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed text-sm md:text-base">
                A reference point for premium advisory — combining technical excellence, global
                perspective and unwavering client focus.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center relative">
              <svg className="w-full h-full text-emerald animate-float-slow" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(10, 10)">
                  {/* Block 1 (Vertical left) */}
                  <path d="M25 35 L45 25 L45 85 L25 95 Z" fill="rgba(84, 131, 179, 0.2)" stroke="var(--emerald)" strokeWidth="2.5" />
                  <path d="M45 25 L65 35 L65 95 L45 85 Z" fill="rgba(84, 131, 179, 0.1)" stroke="var(--emerald)" strokeWidth="2.5" />
                  <path d="M25 35 L45 25 L65 35 L45 45 Z" fill="rgba(84, 131, 179, 0.3)" stroke="var(--emerald)" strokeWidth="2.5" />
                  
                  {/* Block 2 (Top right horizontal) */}
                  <path d="M45 45 L65 35 L85 55 L65 65 Z" fill="rgba(193, 232, 255, 0.2)" stroke="var(--gold)" strokeWidth="2.5" />
                  <path d="M65 35 L85 35 L105 55 L85 55 Z" fill="rgba(193, 232, 255, 0.1)" stroke="var(--gold)" strokeWidth="2.5" />
                  <path d="M45 45 L65 35 L85 35 L65 45 Z" fill="rgba(193, 232, 255, 0.3)" stroke="var(--gold)" strokeWidth="2.5" />

                  {/* Block 3 (Bottom interlocking horizontal) */}
                  <path d="M25 95 L45 85 L65 85 L45 95 Z" fill="rgba(84, 131, 179, 0.15)" stroke="var(--emerald)" strokeWidth="2.5" />
                  <path d="M45 85 L65 85 L85 65 L65 65 Z" fill="rgba(84, 131, 179, 0.25)" stroke="var(--emerald)" strokeWidth="2.5" />
                  <path d="M25 95 L45 95 L65 65 L45 65 Z" fill="rgba(84, 131, 179, 0.35)" stroke="var(--emerald)" strokeWidth="2.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="core-values"
        className="scroll-mt-24 md:scroll-mt-28 relative overflow-hidden pt-6 pb-12 md:pt-8 md:pb-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[320px] w-[320px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-[320px] w-[320px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Core Values
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              What guides every engagement
            </h2>
            <p className="mt-4 text-white/80 text-sm leading-relaxed md:text-base">
              Five principles that shape how we work with every client, every day.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={v.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-slate-50/90 p-5 transition hover:-translate-y-0.5 hover:border-emerald/40 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg gradient-emerald text-white shadow-soft">
                    <v.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="font-display text-xl font-bold text-navy/15 group-hover:text-emerald/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">{v.name}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-navy/75">
                  {v.body}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald to-gold transition-all duration-500 group-hover:w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        id="careers"
        className="scroll-mt-24 md:scroll-mt-28 bg-white pt-8 pb-4 md:pt-12 md:pb-6 text-navy"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
              Careers
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Build your career. Shape what’s next.
            </h2>
            <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
              At MGS, our people drive our success. We are building a global network of professionals
              and welcome ambitious talent across Sri Lanka, India, the Middle East, the United Kingdom,
              Australia, and Canada.
            </p>
          </div>

          {/* Job Opportunities / Practice Disciplines - Small Horizontal Cards (No Emojis) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { title: "Accounting & Bookkeeping", desc: "Financial reporting & general ledger management" },
              { title: "Taxation & Compliance", desc: "Corporate tax, cross-border VAT & statutory filings" },
              { title: "BPO & Shared Services", desc: "Outsourced finance delivery & scalable operations" },
              { title: "Risk & Governance", desc: "Enterprise risk advisory & compliance frameworks" },
              { title: "Internal Audit", desc: "Process assurance, internal controls & reviews" },
              { title: "Advisory & Consulting", desc: "Strategic growth, financial modeling & M&A" },
              { title: "Economic Intelligence", desc: "Macro trends, market insights & research" },
            ].map((opp) => (
              <div
                key={opp.title}
                className="group rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 transition duration-200 hover:border-emerald/50 hover:bg-white hover:shadow-soft"
              >
                <h4 className="text-xs sm:text-sm font-bold text-navy group-hover:text-emerald transition-colors">
                  {opp.title}
                </h4>
                <p className="mt-1 text-[11px] text-navy/65 leading-relaxed">
                  {opp.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {/* CV / Talent Network Card */}
            <div className="group rounded-2xl border border-white/10 bg-navy p-8 md:p-10 text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elegant flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative">
                <svg
                  className="w-full h-full text-gold animate-spin-slow"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                  <circle cx="50" cy="50" r="28" stroke="var(--emerald)" strokeWidth="2" strokeDasharray="120 30" />
                  <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="60 20" style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }} />
                  <circle cx="50" cy="50" r="8" fill="var(--gold)" opacity="0.7" />
                  <circle cx="50" cy="12" r="3.5" fill="var(--emerald)" />
                  <circle cx="78" cy="64" r="3" fill="var(--gold)" />
                  <circle cx="22" cy="64" r="3" fill="var(--gold)" />
                </svg>
              </div>

              <div className="flex-1 text-left w-full">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Talent Network
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl leading-tight">
                  Keep your updated CV with us.
                </h3>
                <p className="mt-3 text-white/80 leading-relaxed text-sm md:text-base">
                  Send your latest CV to{" "}
                  <a
                    href="mailto:consult@magnivorglobal.com"
                    className="font-semibold text-gold underline hover:text-white transition-colors"
                  >
                    consult@magnivorglobal.com
                  </a>{" "}
                  and stay connected with MGS. As exciting opportunities arise across our growing
                  network, we’ll reach out with roles that match your career aspirations.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-xs md:text-sm font-semibold text-white/90">
                    Your next opportunity could be closer than you think.
                  </p>
                  <a
                    href="mailto:consult@magnivorglobal.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-5 py-2.5 text-xs font-bold shadow-soft transition hover:opacity-90 shrink-0"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send your CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="scroll-mt-24 md:scroll-mt-28 relative overflow-hidden bg-white pt-4 pb-14 md:pt-6 md:pb-20 text-navy"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Full Width Top Divider Line */}
          <div className="w-full border-t border-slate-200/80 pt-8 md:pt-10">
            <div className="max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
                Partners
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                Stronger together. Greater impact.
              </h2>
              <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
                At MGS, we believe the right partnerships create greater value for our clients.
              </p>
            </div>
          </div>

          {/* Creative At-a-Glance Partnership Pillars (Using ONLY Provided Content) */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* Pillar 1: Who We Collaborate With */}
            <div className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:border-emerald/50 hover:bg-white hover:shadow-soft">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-emerald">
                01 · Collaboration
              </span>
              <p className="mt-3 text-xs md:text-sm text-navy/80 leading-relaxed">
                We collaborate with professional firms, industry specialists, technology providers,
                consultants, research institutions, and other strategic partners to bring together
                complementary expertise and capabilities.
              </p>
            </div>

            {/* Pillar 2: Delivery Scope */}
            <div className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:border-emerald/50 hover:bg-white hover:shadow-soft">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-emerald">
                02 · Solutions
              </span>
              <p className="mt-3 text-xs md:text-sm text-navy/80 leading-relaxed">
                Our partner network enables us to deliver integrated, scalable, and internationally
                connected solutions across accounting, bookkeeping, taxation, BPO, risk &amp;
                governance, internal audit, advisory, consulting, and economic intelligence.
              </p>
            </div>

            {/* Pillar 3: Shared Values */}
            <div className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:border-emerald/50 hover:bg-white hover:shadow-soft">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-emerald">
                03 · Commitment
              </span>
              <p className="mt-3 text-xs md:text-sm text-navy/80 leading-relaxed">
                We are continuously building relationships with organisations that share our
                commitment to trust, excellence, integrity, and sustainable growth.
              </p>
            </div>
          </div>

          {/* Partner Action CTA Banner */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-navy p-6 md:p-8 text-white shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight text-center sm:text-left">
              Partner with MGS. Together, we shape what’s next.
            </h3>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-bold shadow-soft transition hover:opacity-90 hover:scale-[1.02]"
            >
              <span>Partner with MGS</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section
        id="presence"
        className="scroll-mt-24 md:scroll-mt-28 relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* 2-Column: Left Side Content, Right Side World Map */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
                Our Presence
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl leading-tight">
                Rooted in Sri Lanka. Expanding globally.
              </h2>
              <p className="mt-4 text-white/80 text-sm leading-relaxed md:text-base">
                MGS is currently based in Sri Lanka, delivering professional accounting, bookkeeping,
                taxation, risk &amp; governance, internal audit, advisory, consulting, economic
                intelligence, and Business Process Outsourcing (BPO) solutions.
              </p>

              <p className="mt-4 text-sm text-white/80 leading-relaxed md:text-base">
                As we grow, we are working towards establishing our presence through offices,
                delivery capabilities, and strategic partnerships across key international markets.
              </p>
            </div>

            {/* Right World Map Column */}
            <div className="lg:col-span-7">
              <WorldPresenceMap />
            </div>
          </div>

          {/* Delivery Model Factor Cards - 3 cards kept as is */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-50/5 p-5 transition hover:border-emerald/40">
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
                <h3 className="text-sm font-bold text-white">Scalable &amp; Cost-Effective</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Agile engagement frameworks designed to expand seamlessly with client demands.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-50/5 p-5 transition hover:border-emerald/40">
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
                <h3 className="text-sm font-bold text-white">High-Quality Professional Services</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Audit-grade accuracy and senior-led rigor embedded in every process.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-50/5 p-5 transition hover:border-emerald/40">
              <div className="flex items-center gap-2 text-gold">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
                <h3 className="text-sm font-bold text-white">Local Understanding &amp; Global Expertise</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Ground-level jurisdictional insights paired with international advisory acumen.
              </p>
            </div>
          </div>

          {/* Trusted Partner Statement */}
          <p className="mt-8 mx-auto max-w-4xl text-center text-sm text-white/80 leading-relaxed">
            From accounting and bookkeeping to BPO, taxation, risk and governance, internal audit,
            advisory, consulting, and economic intelligence, MGS aims to be a trusted professional
            partner wherever your business operates.
          </p>

          {/* Closing Quote Banner */}
          <div className="mt-8 rounded-xl border border-gold/30 bg-gradient-to-r from-[#031c38] via-[#052659] to-[#021024] p-5 text-center shadow-soft">
            <p className="text-base md:text-lg font-semibold text-white">
              “From Sri Lanka to the world — together, we shape what’s next.”
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="scroll-mt-24 md:scroll-mt-28 bg-white pt-8 pb-20 md:pt-12 md:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Senior advisors with global experience
            </h2>
            <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
              A multidisciplinary team combining finance, tax, strategy and economics for premium advisory delivery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {TEAM.map((m) => (
              <TeamCard key={m.role} member={m} />
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-navy/60">
            Profile photos and full team details will be added soon.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

const TEAM = [
  {
    name: "Team Member",
    role: "Managing Partner",
    qualification: "FCA, MBA",
    experience: "15+ years",
    expertise: "Strategy · IFRS · Cross-border advisory",
    bio: "Leads Magnivor's global advisory practice across accounting, tax and CFO services.",
  },
  {
    name: "Team Member",
    role: "Director — Tax & Compliance",
    qualification: "ACA, CTA",
    experience: "12+ years",
    expertise: "Corporate tax · VAT · Transfer pricing",
    bio: "Designs cross-border tax strategies for international businesses operating in and from Sri Lanka.",
  },
  {
    name: "Team Member",
    role: "Director — Virtual CFO",
    qualification: "ACMA, CGMA",
    experience: "14+ years",
    expertise: "FP&A · Board reporting · Capital strategy",
    bio: "Embeds CFO-level leadership into growth-stage businesses across multiple sectors.",
  },
  {
    name: "Team Member",
    role: "Head of Economic Intelligence",
    qualification: "MSc Economics",
    experience: "10+ years",
    expertise: "Macroeconomics · Policy · Sector research",
    bio: "Leads Magnivor's research practice covering macro trends, policy and sector outlooks.",
  },
];

function TeamCard({
  member,
}: {
  member: (typeof TEAM)[number] & { image?: string };
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const expertise = member.expertise.split("·").map((s) => s.trim());

  return (
    <article
      className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Left Side: Rectangular Photo Area */}
      <div className="relative w-full sm:w-2/5 min-h-[240px] flex shrink-0 items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 bg-slate-800/50">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" 
          />
        ) : (
          <span className="font-display text-5xl font-bold text-white/10">{initials}</span>
        )}
      </div>

      {/* Right Side: Candidate Info / CV Summary */}
      <div className="flex w-full flex-col p-6 sm:p-8 text-left">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-emerald">{member.role}</p>

        {/* Separator */}
        <span className="mt-4 block h-px w-12 bg-gold/50" />

        <p className="mt-4 text-[11px] uppercase tracking-wider text-white/50">
          {member.qualification} · {member.experience}
        </p>

        {/* Expertise pills */}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {expertise.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p
          className="mt-5 text-sm leading-relaxed flex-1"
          style={{ color: "var(--muted-foreground)" }}
        >
          {member.bio}
        </p>

        <a
          href="#"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition hover:text-white"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </article>
  );
}
