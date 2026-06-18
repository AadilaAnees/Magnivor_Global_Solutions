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
      { title: "Services — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Accounting, taxation, virtual CFO, BPO, corporate training and economic intelligence — integrated services for global business growth.",
      },
      { property: "og:title", content: "Magnivor Services" },
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
        eyebrow="Our Services"
        title={
          <>
            Integrated solutions for{" "}
            <span className="text-gradient-gold">global business growth</span>
          </>
        }
        description="Six service pillars — covering accounting, compliance, leadership, operations, capability and intelligence."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Calculator;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col rounded-xl border border-border bg-white p-8 transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy/70">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy group-hover:text-emerald">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
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
