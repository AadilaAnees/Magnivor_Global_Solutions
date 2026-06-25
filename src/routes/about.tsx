import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Target, Compass, Globe2, Sparkles, Linkedin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";

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
        content: "Our story, mission, vision, values, and the team that drive our advisory work.",
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
      <section className="py-20 md:py-28 relative overflow-hidden bg-navy text-white">
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
      <section className="bg-white py-20 md:py-28">
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
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Core Values
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              What guides every engagement
            </h2>
            <p className="mt-4 text-muted-foreground">
              Five principles that shape how we work with every client, every day.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-slate-50/80 p-8 transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-elegant"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-emerald text-white shadow-soft">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-navy/10 group-hover:text-emerald/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{v.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">
                  {v.body}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-emerald to-gold transition-all duration-500 group-hover:w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Senior advisors with global experience
            </h2>
            <p className="mt-4 text-muted-foreground">
              A multidisciplinary team combining finance, tax, strategy and economics for premium advisory delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <TeamCard key={m.role} member={m} featured={i === 0} />
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-muted-foreground">
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
  featured,
}: {
  member: (typeof TEAM)[number];
  featured?: boolean;
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const expertise = member.expertise.split("·").map((s) => s.trim());

  return (
    <article
      className={`group relative flex flex-col items-center rounded-2xl border border-white/10 p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Avatar */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-gold/40"
        style={{ backgroundColor: "var(--emerald-dark)" }}
      >
        <span className="font-display text-xl font-bold text-gold">{initials}</span>
      </div>

      {/* Gold separator */}
      <span className="mt-5 block h-px w-12 bg-gold" />

      <h3 className="mt-5 text-lg font-bold text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-emerald">{member.role}</p>

      <p className="mt-2 text-[11px] uppercase tracking-wider text-white/50">
        {member.qualification} · {member.experience}
      </p>

      {/* Expertise pills */}
      <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
        {expertise.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-gold/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p
        className={`mt-5 text-sm leading-relaxed ${featured ? "max-w-2xl" : ""}`}
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
    </article>
  );
}
