import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";
import {
  sanityEnabled,
  sanityClient,
  ARTICLES_QUERY,
  urlFor,
  type SanityArticle,
} from "@/lib/sanity";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Strategic perspectives on economic trends, taxation, financial strategy and corporate governance.",
      },
      { property: "og:title", content: "Magnivor Insights" },
      {
        property: "og:description",
        content:
          "Economic trends, taxation updates, financial strategy and business intelligence.",
      },
    ],
  }),
  component: InsightsPage,
});

const CATEGORIES = [
  "All",
  "Economic Trends",
  "Taxation Updates",
  "Financial Strategy",
  "Corporate Governance",
  "Business Intelligence",
  "Other",
] as const;

type Category = (typeof CATEGORIES)[number];

type Post = {
  _id: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
};

// Fallback samples until Sanity is configured / populated.
const FALLBACK: Post[] = [
  {
    _id: "f1",
    category: "Economic Trends",
    title: "Navigating CBSL's policy rate shifts: a playbook for SMEs",
    excerpt:
      "Tighter monetary conditions demand disciplined liquidity management and a sharper view of working capital.",
    date: "Jun 2026",
    author: "Magnivor Research",
  },
  {
    _id: "f2",
    category: "Taxation Updates",
    title: "Cross-border VAT for service exporters: practical guidance",
    excerpt:
      "Structuring service flows to avoid double taxation while staying fully compliant across jurisdictions.",
    date: "May 2026",
    author: "Tax Advisory Desk",
  },
  {
    _id: "f3",
    category: "Financial Strategy",
    title: "IFRS 18 and the new shape of performance reporting",
    excerpt:
      "What boards need to know about the structure, subtotals and disclosures introduced by IFRS 18.",
    date: "May 2026",
    author: "IFRS Team",
  },
  {
    _id: "f4",
    category: "Corporate Governance",
    title: "Building a board pack that actually drives decisions",
    excerpt:
      "Cutting noise, sharpening KPIs and giving leadership the signals that matter most.",
    date: "Apr 2026",
    author: "CFO Practice",
  },
  {
    _id: "f5",
    category: "Business Intelligence",
    title: "Macro signals SMEs should track in the next 12 months",
    excerpt:
      "Five indicators worth watching — and how to translate them into operational decisions.",
    date: "Apr 2026",
    author: "Economic Intelligence",
  },
  {
    _id: "f6",
    category: "Other",
    title: "Notes from the field: lessons from a year of advisory work",
    excerpt:
      "Patterns, surprises and recurring themes from across our 2025 engagements.",
    date: "Feb 2026",
    author: "Magnivor Editors",
  },
];

function normalizeCategory(value?: string): Exclude<Category, "All"> {
  const allowed = CATEGORIES.filter((c) => c !== "All") as readonly Exclude<Category, "All">[];
  return (allowed.find((c) => c === value) ?? "Other") as Exclude<Category, "All">;
}

function mapSanity(a: SanityArticle): Post {
  return {
    _id: a._id,
    title: a.title,
    excerpt: a.excerpt ?? "",
    category: normalizeCategory(a.category),
    date: a.publishedAt
      ? new Date(a.publishedAt).toLocaleDateString(undefined, {
          month: "short",
          year: "numeric",
        })
      : "",
    author: a.author ?? "Magnivor",
    image: a.mainImage ? urlFor(a.mainImage).width(1200).height(675).url() : undefined,
  };
}

function InsightsPage() {
  const [active, setActive] = useState<Category>("All");
  const [posts, setPosts] = useState<Post[]>(FALLBACK);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sanityEnabled || !sanityClient) return;
    let cancelled = false;
    setLoading(true);
    sanityClient
      .fetch<SanityArticle[]>(ARTICLES_QUERY)
      .then((rows) => {
        if (cancelled) return;
        if (rows && rows.length > 0) setPosts(rows.map(mapSanity));
      })
      .catch((err) => console.error("Sanity fetch failed:", err))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Strategic perspectives on{" "}
            <span className="text-gradient-gold">finance, tax and the global economy</span>
          </>
        }
        description="Research-grade thinking from Magnivor advisors — translated into practical guidance for leadership teams."
      />

      <section className="relative py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-40 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? "border-emerald bg-emerald text-white shadow-soft"
                      : "border-border bg-white/70 text-navy/75 backdrop-blur hover:border-emerald/40 hover:text-emerald"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {loading
              ? "Loading…"
              : `${filtered.length} ${filtered.length === 1 ? "article" : "articles"}${
                  active !== "All" ? ` · ${active}` : ""
                }`}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p._id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/55 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/40">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy/90 via-navy to-emerald-dark">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      />
                      <ImageIcon className="relative h-10 w-10 text-white/40" />
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-md bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy shadow-soft">
                    {p.category}
                  </span>
                </div>


                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-navy group-hover:text-emerald">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {p.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </span>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-white/60 p-12 text-center backdrop-blur">
              <p className="text-sm text-muted-foreground">
                No articles in this category yet — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
            Subscribe
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Insight delivered to your inbox
          </h2>
          <p className="mt-3 text-muted-foreground">
            Quarterly intelligence briefs and timely updates on tax, finance and the global economy.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm outline-none focus:border-emerald"
            />
            <button
              type="submit"
              className="rounded-md gradient-emerald px-5 py-3 text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
