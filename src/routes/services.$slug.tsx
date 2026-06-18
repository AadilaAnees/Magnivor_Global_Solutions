import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SERVICES, waLink } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Magnivor" }] };
    return {
      meta: [
        { title: `${s.title} — Magnivor Global Solutions` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — Magnivor` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-navy">Service not found</h1>
      <Link to="/services" className="mt-5 text-sm font-semibold text-emerald">
        ← Back to services
      </Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const { service: s } = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow={s.tag}
        title={s.title}
        description={s.short}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Overview</h2>
            <p className="mt-4 text-muted-foreground">{s.overview}</p>

            <h3 className="mt-12 text-xl font-bold text-navy">Scope of work</h3>
            <ul className="mt-5 space-y-3">
              {s.scope.map((x: string) => (
                <li key={x} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full gradient-emerald text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-bold text-navy">Deliverables</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d: string) => (
                <li
                  key={d}
                  className="rounded-lg border border-border bg-white p-4 text-sm text-foreground/85"
                >
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-bold text-navy">Who it's for</h3>
            <p className="mt-3 text-muted-foreground">{s.audience}</p>

            <h3 className="mt-12 text-xl font-bold text-navy">Benefits</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {s.benefits.map((b: string) => (
                <li
                  key={b}
                  className="rounded-lg border border-emerald/20 bg-emerald/5 p-4 text-sm font-semibold text-emerald-dark"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-white p-7 shadow-soft">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Get Started
              </span>
              <h3 className="mt-3 text-xl font-bold text-navy">Request this service</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak with an advisor and get a tailored proposal.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md gradient-emerald px-5 py-3 text-sm font-semibold text-white"
              >
                Request Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink(`Hello Magnivor, I'd like to discuss: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-emerald/40"
              >
                <MessageCircle className="h-4 w-4" style={{ color: "var(--whatsapp)" }} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary p-7">
              <h4 className="text-sm font-semibold text-navy">Related services</h4>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.filter((x) => x.slug !== s.slug)
                  .slice(0, 4)
                  .map((x) => (
                    <li key={x.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: x.slug }}
                        className="flex items-center justify-between text-sm text-foreground/80 hover:text-emerald"
                      >
                        <span>{x.title}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
