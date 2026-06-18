import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Target, Compass, Globe2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Magnivor Global Solutions bridges accounting precision with strategic financial intelligence for global businesses.",
      },
      { property: "og:title", content: "About Magnivor Global Solutions" },
      {
        property: "og:description",
        content: "Our story, mission, vision and the values that drive our advisory work.",
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

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Bridging accounting precision with{" "}
            <span className="text-gradient-gold">strategic intelligence</span>
          </>
        }
        description="Magnivor Global Solutions was created to serve global businesses with high-impact financial advisory that combines finance, economics and strategy."
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Built for the modern global finance function
          </h2>
          <p className="mt-6 text-muted-foreground">
            Magnivor Global Solutions was founded to bridge accounting precision with strategic
            financial intelligence for global businesses. We work alongside leadership teams as a
            trusted advisory partner — practical, senior-led and rigorous — supporting clients
            across Sri Lanka and internationally with the systems, insight and confidence required
            to grow.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-10">
          <div className="group rounded-2xl border border-border bg-white p-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-emerald/40 hover:shadow-elegant">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
              Mission
            </span>
            <h3 className="mt-3 text-2xl font-bold text-navy">
              Deliver world-class financial and advisory services
            </h3>
            <p className="mt-4 text-muted-foreground">
              Enable sustainable business growth through rigorous accounting, strategic advisory
              and intelligence that informs better decisions every day.
            </p>
          </div>
          <div className="group rounded-2xl border border-border gradient-navy p-10 text-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-elegant">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Vision
            </span>
            <h3 className="mt-3 text-2xl font-bold">
              Become a globally recognized financial intelligence advisory firm
            </h3>
            <p className="mt-4 text-white/75">
              A reference point for premium advisory — combining technical excellence, global
              perspective and unwavering client focus.
            </p>
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
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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

      <FinalCTA />
    </>
  );
}
