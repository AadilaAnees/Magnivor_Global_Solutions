import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";
import { z } from "zod";
import {
  sanityEnabled,
  sanityClient,
  ARTICLES_QUERY,
  urlFor,
  type SanityArticle,
} from "@/lib/sanity";

const insightsSearchSchema = z.object({
  category: z.string().optional(),
  articleId: z.string().optional(),
});

export const Route = createFileRoute("/insights")({
  validateSearch: (search) => insightsSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Insights & Media — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Strategic perspectives on economic trends, taxation, financial strategy and corporate governance.",
      },
      { property: "og:title", content: "Insights & Media — Magnivor Global Solutions" },
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
  "Articles",
  "News & Updates",
  "Media Mentions",
  "Case Studies",
  "Events",
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
  const search = Route.useSearch();
  const [active, setActive] = useState<Category>("All");
  const [posts, setPosts] = useState<Post[]>([]); // Starts empty to display Coming Soon
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.category) {
      setActive(search.category as Category);
    }
  }, [search.category]);

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

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Insights & Media"
        title={
          <>
            Strategic perspectives on{" "}
            <span className="text-gradient-gold">finance, tax and the global economy</span>
          </>
        }
        description="Research-grade thinking from Magnivor advisors — translated into practical guidance for leadership teams."
      />

      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-40 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
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
            {loading ? "Loading…" : active !== "All" ? `Category: ${active}` : "All Categories"}
          </p>

          {/* COMING SOON STATE */}
          {filtered.length === 0 && !loading && (
            <div className="mt-12 rounded-2xl border border-border bg-[#021024] p-12 md:p-20 text-center text-white shadow-elegant relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
              
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold mb-6 shadow-soft">
                <Sparkles className="h-8 w-8" />
              </span>
              
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
                Coming Soon
              </span>
              
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
                Research publications are currently in development
              </h3>
              
              <p className="mt-4 text-sm md:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
                {active !== "All" 
                  ? `We are finalizing our expert insights for "${active}". Check back soon or subscribe below to get notified when it drops.`
                  : "Our senior advisors and research team are putting together comprehensive briefs on economic trends, taxation updates, and financial strategy."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald">
            Subscribe
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
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
              className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm outline-none focus:border-emerald text-navy"
            />
            <button
              type="submit"
              className="rounded-md bg-[#EAB308] px-5 py-3 text-sm font-semibold text-[#021024] transition hover:brightness-110"
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