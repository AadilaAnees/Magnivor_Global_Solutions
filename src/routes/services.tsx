import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Receipt,
  Briefcase,
  Building2,
  GraduationCap,
  LineChart,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Accounting, taxation, virtual CFO, BPO, corporate training and economic intelligence — integrated services for global business growth.",
      },
      { property: "og:title", content: "What We Do — Magnivor Global Solutions" },
      {
        property: "og:description",
        content:
          "Integrated financial and advisory solutions designed for global business growth.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "accounting-bookkeeping": Calculator,
  "taxation-compliance": Receipt,
  "virtual-cfo": Briefcase,
  "bpo-services": Building2,
  "corporate-training": GraduationCap,
  "economic-intelligence": LineChart,
};

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title={
          <>
            Integrated solutions for{" "}
            <span className="text-gradient-gold">global business growth</span>
          </>
        }
        description="Six service pillars — covering accounting, compliance, leadership, operations, capability and intelligence."
      />

      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Calculator;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-navy p-6 backdrop-blur transition hover:-translate-y-1.5 hover:border-gold/50 hover:bg-navy-soft hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-gold transition">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-white/70">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-white transition">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
