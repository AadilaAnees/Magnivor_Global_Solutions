import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Download,
  ArrowRight,
  Clock,
  ExternalLink,
  Building2,
  Scale,
  Landmark,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Knowledge Hub — Magnivor Global Solutions" },
      {
        name: "description",
        content:
          "Explore MGS corporate brochure, IFRS & IAS financial reporting insights, practical guides, e-books, and useful links.",
      },
      { property: "og:title", content: "Resources & Knowledge Hub — Magnivor Global Solutions" },
      {
        property: "og:description",
        content:
          "Access corporate brochure, IFRS/IAS guidance, practical guides, e-books, and useful external links.",
      },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCE_SECTIONS = [
  { id: "brochure", label: "Brochure" },
  { id: "ifrs", label: "IFRS / IAS" },
  { id: "guides", label: "Guides & E-books" },
  { id: "links", label: "Other Useful Links" },
] as const;

function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [downloadNotice, setDownloadNotice] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["brochure", "ifrs", "guides", "links"].includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("all");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const selectTab = (id: string) => {
    setActiveTab(id);
    if (id === "all") {
      history.replaceState(null, "", window.location.pathname);
    } else {
      history.replaceState(null, "", `#${id}`);
    }
  };

  const handleBrochureDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Knowledge, tools, and technical resources to{" "}
            <span className="text-gradient-gold">empower global business</span>
          </>
        }
        description="Access our corporate publications, practical reporting guidance, technical e-books, and curated external regulatory sources."
      />

      <div className="bg-white text-navy min-h-[450px] pt-8 md:pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Category Filter Pills (Styled identically to Insights section) */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => selectTab("all")}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeTab === "all"
                  ? "border-emerald bg-emerald text-white shadow-soft"
                  : "border-border bg-white/70 text-navy/75 backdrop-blur hover:border-emerald/40 hover:text-emerald"
              }`}
            >
              All
            </button>
            {RESOURCE_SECTIONS.map((sec) => {
              const isActive = activeTab === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => selectTab(sec.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? "border-emerald bg-emerald text-white shadow-soft"
                      : "border-border bg-white/70 text-navy/75 backdrop-blur hover:border-emerald/40 hover:text-emerald"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {activeTab !== "all"
              ? `Resource: ${RESOURCE_SECTIONS.find((s) => s.id === activeTab)?.label ?? activeTab}`
              : "All Resources"}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. BROCHURE SECTION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "brochure") && (
          <section
            id="brochure"
            className="pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-100"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="max-w-3xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
                  Brochure
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Discover MGS
                </h2>

                <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
                  Explore our corporate brochure to learn more about MGS, our services, capabilities,
                  values, and international vision.
                </p>

                <p className="mt-3 text-navy/80 text-sm leading-relaxed md:text-base">
                  Discover how we support businesses through accounting, bookkeeping, taxation, BPO,
                  risk &amp; governance, internal audit, advisory, consulting, and economic intelligence.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 md:p-8 max-w-3xl">
                <p className="text-sm font-semibold text-navy">
                  Download our brochure and discover how MGS can support your business.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBrochureDownload}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-bold shadow-soft transition hover:opacity-90 hover:scale-[1.02] cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Brochure</span>
                  </button>

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200/80 px-3 py-1.5 text-xs font-semibold text-navy/70">
                    <Clock className="h-3.5 w-3.5 text-emerald" />
                    <span>Coming Soon</span>
                  </span>
                </div>

                {downloadNotice && (
                  <div className="mt-3 rounded-lg border border-emerald/20 bg-emerald/10 p-3 text-xs text-navy">
                    <span className="font-semibold text-emerald">Notice: </span>
                    Brochure download will be available soon.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 2. IFRS / IAS SECTION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "ifrs") && (
          <section
            id="ifrs"
            className="pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-100"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="max-w-3xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
                  IFRS / IAS
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Navigate financial reporting with confidence.
                </h2>
                <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
                  Stay informed with practical insights and resources on IFRS Accounting Standards and
                  IAS requirements.
                </p>
                <p className="mt-3 text-navy/80 text-sm leading-relaxed md:text-base">
                  Our IFRS/IAS resources are designed to help finance professionals, businesses, and
                  decision-makers better understand complex financial reporting matters and their
                  practical implications.
                </p>
              </div>

              {/* Coming Soon Area with Action CTA */}
              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 md:p-8 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy/70">
                  <Clock className="h-4 w-4 text-emerald" />
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-2 text-xs text-navy/60">
                  Articles and data will be updated soon.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-bold shadow-soft transition hover:opacity-90 hover:scale-[1.02]"
                  >
                    <span>Explore our IFRS / IAS resources</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 3. GUIDES & E-BOOKS SECTION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "guides") && (
          <section
            id="guides"
            className="pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-100"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="max-w-3xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
                  Guides &amp; E-books
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Practical knowledge. Meaningful insights.
                </h2>
                <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
                  Access our collection of guides, e-books, technical publications, and practical
                  resources covering accounting, taxation, business, risk, governance, compliance, and
                  emerging economic trends.
                </p>
                <p className="mt-3 text-navy/80 text-sm leading-relaxed md:text-base">
                  Designed for business leaders and professionals, our resources provide practical
                  knowledge to support better decisions and sustainable growth.
                </p>
              </div>

              {/* Coming Soon Area with Action CTA */}
              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 md:p-8 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy/70">
                  <Clock className="h-4 w-4 text-emerald" />
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-2 text-xs text-navy/60">
                  Articles and data will be updated soon.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-bold shadow-soft transition hover:opacity-90 hover:scale-[1.02]"
                  >
                    <span>Explore our Guides &amp; E-books</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 4. OTHER USEFUL LINKS SECTION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "links") && (
          <section
            id="links"
            className="pt-10 pb-16 md:pt-14 md:pb-24"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="max-w-3xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald block">
                  Other Useful Links
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Connect with trusted sources of knowledge.
                </h2>
                <p className="mt-4 text-navy/80 text-sm leading-relaxed md:text-base">
                  Explore a curated collection of useful external resources, professional institutions,
                  regulatory authorities, industry bodies, and other trusted sources to help you stay
                  informed and make better business decisions.
                </p>
                <p className="mt-3 text-navy/80 text-sm leading-relaxed md:text-base">
                  From financial reporting and taxation to regulation, economics, business, and
                  professional development, find the resources that matter to you.
                </p>
              </div>

              {/* External Useful Links Directory */}
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {/* Category 1: Accounting & Professional Bodies */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base border-b border-slate-200 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-gold">
                      <Building2 className="h-4 w-4 text-gold" />
                    </div>
                    <h3>Professional Bodies</h3>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {[
                      { name: "CA Sri Lanka", url: "https://www.casrilanka.com", desc: "The Institute of Chartered Accountants of Sri Lanka" },
                      { name: "ACCA Global", url: "https://www.accaglobal.com", desc: "Association of Chartered Certified Accountants" },
                      { name: "CIMA / AICPA", url: "https://www.aicpa-cima.com", desc: "Chartered Institute of Management Accountants" },
                      { name: "CPA Australia", url: "https://www.cpaaustralia.com.au", desc: "Certified Practising Accountants Australia" },
                    ].map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item block rounded-xl border border-transparent bg-white p-3 transition hover:border-emerald/40 hover:shadow-soft"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-navy group-hover/item:text-emerald transition-colors">
                              {link.name}
                            </span>
                            <ExternalLink className="h-3.5 w-3.5 text-navy/40 group-hover/item:text-emerald transition-colors" />
                          </div>
                          <p className="mt-1 text-[11px] text-navy/65 leading-tight">{link.desc}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category 2: Standards & Regulatory Authorities */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base border-b border-slate-200 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-gold">
                      <Scale className="h-4 w-4 text-gold" />
                    </div>
                    <h3>Standards &amp; Regulators</h3>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {[
                      { name: "IFRS Foundation & IASB", url: "https://www.ifrs.org", desc: "International Financial Reporting Standards official portal" },
                      { name: "Inland Revenue Department (IRD)", url: "http://www.ird.gov.lk", desc: "Tax regulatory authority of Sri Lanka" },
                      { name: "Registrar of Companies (ROC)", url: "https://www.drc.gov.lk", desc: "Company registrations and corporate compliance" },
                      { name: "Securities & Exchange Commission", url: "https://www.sec.gov.lk", desc: "Capital markets regulator of Sri Lanka" },
                    ].map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item block rounded-xl border border-transparent bg-white p-3 transition hover:border-emerald/40 hover:shadow-soft"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-navy group-hover/item:text-emerald transition-colors">
                              {link.name}
                            </span>
                            <ExternalLink className="h-3.5 w-3.5 text-navy/40 group-hover/item:text-emerald transition-colors" />
                          </div>
                          <p className="mt-1 text-[11px] text-navy/65 leading-tight">{link.desc}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Category 3: Economic & Central Banking Sources */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base border-b border-slate-200 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-gold">
                      <Landmark className="h-4 w-4 text-gold" />
                    </div>
                    <h3>Economic &amp; Data Sources</h3>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {[
                      { name: "Central Bank of Sri Lanka", url: "https://www.cbsl.gov.lk", desc: "Macroeconomic indicators, exchange rates & statistics" },
                      { name: "World Bank Open Knowledge", url: "https://openknowledge.worldbank.org", desc: "Global economic research & development data" },
                      { name: "IMF Data & Publications", url: "https://www.imf.org/en/Data", desc: "Global financial stability & macroeconomic reports" },
                      { name: "Department of Census & Statistics", url: "http://www.statistics.gov.lk", desc: "National economic & demographic datasets" },
                    ].map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item block rounded-xl border border-transparent bg-white p-3 transition hover:border-emerald/40 hover:shadow-soft"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-navy group-hover/item:text-emerald transition-colors">
                              {link.name}
                            </span>
                            <ExternalLink className="h-3.5 w-3.5 text-navy/40 group-hover/item:text-emerald transition-colors" />
                          </div>
                          <p className="mt-1 text-[11px] text-navy/65 leading-tight">{link.desc}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-bold shadow-soft transition hover:opacity-90 hover:scale-[1.02]"
                >
                  <span>Explore Useful Links</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer CTA shown only on All Resources main view */}
      {activeTab === "all" && <FinalCTA />}
    </>
  );
}
