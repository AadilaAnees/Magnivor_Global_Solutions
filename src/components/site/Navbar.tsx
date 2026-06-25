import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES } from "@/lib/site";

// Import featured assets for mega menu panels
import ctaSkyline from "@/assets/cta-skyline.jpg";
import aboutAdvisory from "@/assets/about-advisory.jpg";
import aboutImg from "@/assets/about.jpg";

type MenuType = "services" | "about" | "insights";

interface SubLink {
  label: string;
  to: string;
  hash?: string;
}

interface FeaturedData {
  category: string;
  title: string;
  description: string;
  image: string;
  to: string;
}

interface MenuData {
  title: string;
  description: string;
  quickLinks: { label: string; to: string }[];
  links: SubLink[];
  featured: FeaturedData;
}

const MENU_CONTENT: Record<MenuType, MenuData> = {
  services: {
    title: "Services",
    description: "Integrated financial and advisory solutions designed for global business growth.",
    quickLinks: [
      { label: "View all services", to: "/services" },
      { label: "Contact us", to: "/contact" },
    ],
    links: [
      { label: "Accounting & Bookkeeping", to: "/services/accounting-bookkeeping" },
      { label: "Taxation & Compliance", to: "/services/taxation-compliance" },
      { label: "Virtual CFO Services", to: "/services/virtual-cfo" },
      { label: "Business Process Outsourcing", to: "/services/bpo-services" },
      { label: "Corporate Training", to: "/services/corporate-training" },
      { label: "Economic Intelligence", to: "/services/economic-intelligence" },
      { label: "Financial Planning", to: "/services" },
      { label: "Investor Readiness", to: "/services" },
    ],
    featured: {
      category: "Featured Service",
      title: "Virtual CFO Advisory",
      description: "Deploy senior-level financial intelligence and strategic guidance inside your business.",
      image: aboutAdvisory,
      to: "/services/virtual-cfo",
    },
  },
  about: {
    title: "About Us",
    description: "Discover how Magnivor combines financial precision with strategic intelligence to guide global business.",
    quickLinks: [
      { label: "Read about us", to: "/about" },
      { label: "Contact us", to: "/contact" },
    ],
    links: [
      { label: "Vision & Mission", to: "/about" },
      { label: "Meet the Team", to: "/about", hash: "team" },
      { label: "Core Values", to: "/about" },
      { label: "Our Story", to: "/about" },
      { label: "Our Presence", to: "/about" },
      { label: "Careers & Partners", to: "/contact" },
    ],
    featured: {
      category: "Core Values",
      title: "Precision & Strategy",
      description: "We do the right thing—every number, every recommendation. Audit-grade work combined with CFO-level insight.",
      image: aboutImg,
      to: "/about",
    },
  },
  insights: {
    title: "Insights",
    description: "Strategic perspectives on macroeconomics, compliance and performance reporting.",
    quickLinks: [
      { label: "Read all insights", to: "/insights" },
      { label: "Subscribe to Briefs", to: "/insights" },
    ],
    links: [
      { label: "Economic Trends", to: "/insights" },
      { label: "Tax Updates", to: "/insights" },
      { label: "Financial Strategy", to: "/insights" },
      { label: "Corporate Governance", to: "/insights" },
      { label: "Business Intelligence", to: "/insights" },
    ],
    featured: {
      category: "Featured Insight",
      title: "Global Economic Outlook 2026",
      description: "Understanding emerging opportunities and risks for growing businesses.",
      image: ctaSkyline,
      to: "/insights",
    },
  },
};

const menuItems = [
  { to: "/services", label: "What we do", type: "services" as MenuType | null },
  { to: "/about", label: "Who we are", type: "about" as MenuType | null },
  { to: "/insights", label: "Insights & Media", type: "insights" as MenuType | null },
  { to: "/contact", label: "Contact us", type: null },
] as const;

interface SearchItem {
  title: string;
  description: string;
  to: string;
  hash?: string;
}

const PAGES_TO_SEARCH: SearchItem[] = [
  { title: "Who we are / About Us", description: "Our story, mission, vision, and core values.", to: "/about" },
  { title: "Meet the Team", description: "Our senior advisors and global consultants.", to: "/about", hash: "team" },
  { title: "Vision & Mission", description: "Our goal to deliver world-class financial advisory.", to: "/about" },
  { title: "Contact Us", description: "Get in touch for accounting, tax, or CFO support.", to: "/contact" },
  { title: "Request a Consultation", description: "Inquire about our professional advisory services.", to: "/contact" },
  { title: "What We Do / Services Overview", description: "Integrated financial, tax and strategic consulting.", to: "/services" },
  { title: "Insights & Media Desk", description: "Strategic briefs on CBSL rates, VAT, and IFRS.", to: "/insights" },
];

const INSIGHTS_TO_SEARCH: SearchItem[] = [
  { title: "Navigating CBSL's policy rate shifts: a playbook for SMEs", description: "Tighter monetary conditions demand disciplined liquidity management.", to: "/insights" },
  { title: "Cross-border VAT for service exporters: practical guidance", description: "Structuring service flows to avoid double taxation.", to: "/insights" },
  { title: "IFRS 18 and the new shape of performance reporting", description: "What boards need to know about the structure, subtotals and disclosures.", to: "/insights" },
  { title: "Building a board pack that actually drives decisions", description: "Cutting noise and sharpening KPIs for board reporting.", to: "/insights" },
  { title: "Macro signals SMEs should track in the next 12 months", description: "Indicators worth watching to translate into business decisions.", to: "/insights" },
  { title: "Notes from the field: lessons from a year of advisory work", description: "Patterns, surprises and recurring themes from across our 2025 engagements.", to: "/insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // Mobile menu toggle
  const [activeMenu, setActiveMenu] = useState<MenuType | null>(null); // Desktop mega menu state
  const [activeMobileSub, setActiveMobileSub] = useState<MenuType | null>(null); // Mobile sub-menu state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const closeTimeoutRef = useRef<number | null>(null);

  // Search logic filtering
  const query = searchQuery.trim().toLowerCase();
  
  const filteredServices = query
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.short.toLowerCase().includes(query) ||
          s.overview.toLowerCase().includes(query)
      )
    : [];

  const filteredPages = query
    ? PAGES_TO_SEARCH.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : [];

  const filteredInsights = query
    ? INSIGHTS_TO_SEARCH.filter(
        (i) =>
          i.title.toLowerCase().includes(query) ||
          i.description.toLowerCase().includes(query)
      )
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Listeners for Escape key and Click Outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setSearchOpen(false);
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mega-menu-trigger") && !target.closest(".mega-menu-panel")) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (type: MenuType) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(type);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const solid = scrolled || open || activeMenu !== null;

  return (
    <>
      {/* Background dimmer overlay when mega menu is open */}
      <div
        className={`fixed inset-0 bg-navy/20 backdrop-blur-[2px] transition-opacity duration-300 z-30 pointer-events-none ${
          activeMenu ? "opacity-100" : "opacity-0"
        }`}
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          solid
            ? "bg-navy border-t-2 border-t-[var(--gold)] shadow-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
          <Logo variant="light" />

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {menuItems.map((item) => {
              if (item.type) {
                return (
                  <li
                    key={item.label}
                    className="mega-menu-trigger relative py-2"
                    onMouseEnter={() => handleMouseEnter(item.type!)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition cursor-pointer ${
                        activeMenu === item.type
                          ? "text-gold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          activeMenu === item.type ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm font-medium text-white/80 transition hover:text-white"
                    activeProps={{ className: "text-gold font-semibold" }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action Area (Search, Consult, Toggle) */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="text-white/80 hover:text-white p-2 transition rounded-md hover:bg-white/5 cursor-pointer"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Consultation Button */}
            <Link
              to="/contact"
              className="hidden rounded-md bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-soft transition hover:opacity-90 lg:inline-flex"
            >
              Request a Consultation
            </Link>

            {/* Hamburger Toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white lg:hidden cursor-pointer"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Desktop Mega Menu Dropdowns */}
        {activeMenu && (
          <div
            className="mega-menu-panel absolute left-0 right-0 top-full w-full bg-transparent px-6 pb-6 pt-2 z-50 hidden lg:block"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl grid grid-cols-12 overflow-hidden rounded-xl bg-white shadow-elegant border border-navy/10 transition-all duration-300">
              {/* Left Sidebar (25% / 3 cols) */}
              <div className="col-span-3 bg-[#F5F7FA] p-8 flex flex-col justify-between border-r border-navy/5">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-soft">
                    {MENU_CONTENT[activeMenu].title}
                  </h3>
                  <p className="mt-4 text-xs text-navy/70 leading-relaxed">
                    {MENU_CONTENT[activeMenu].description}
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  {MENU_CONTENT[activeMenu].quickLinks.map((ql) => (
                    <Link
                      key={ql.label}
                      to={ql.to}
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-[#5483B3] transition-colors"
                    >
                      {ql.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Center Links Grid (50% / 6 cols) */}
              <div className="col-span-6 p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-5">
                  Explore Categories
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {MENU_CONTENT[activeMenu].links.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      hash={sub.hash}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-[#F5F7FA] text-xs font-semibold text-navy"
                    >
                      <span>{sub.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#5483B3]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Featured Card (25% / 3 cols) */}
              <div className="col-span-3 p-8 border-l border-navy/5 bg-[#F5F7FA]/30 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40 block mb-4">
                  {MENU_CONTENT[activeMenu].featured.category}
                </span>
                <div className="rounded-xl border border-navy/5 bg-white p-3.5 shadow-soft flex-1 flex flex-col justify-between">
                  <div>
                    <img
                      src={MENU_CONTENT[activeMenu].featured.image}
                      alt=""
                      className="aspect-[16/10] w-full rounded-lg object-cover"
                    />
                    <h4 className="mt-3.5 text-xs font-bold text-navy leading-snug">
                      {MENU_CONTENT[activeMenu].featured.title}
                    </h4>
                    <p className="mt-1.5 text-[11px] text-navy/70 leading-relaxed">
                      {MENU_CONTENT[activeMenu].featured.description}
                    </p>
                  </div>
                  <Link
                    to={MENU_CONTENT[activeMenu].featured.to}
                    onClick={() => setActiveMenu(null)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#5483B3] hover:text-[#021024] transition-colors"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Accordion Nav Panel */}
        {open && (
          <div className="border-t border-white/10 bg-navy lg:hidden">
            <ul className="flex flex-col p-3">
              {menuItems.map((item) => {
                if (item.type) {
                  const subData = MENU_CONTENT[item.type];
                  const subOpen = activeMobileSub === item.type;
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => setActiveMobileSub(subOpen ? null : item.type)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            subOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {subOpen && (
                        <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                          {subData.links.map((subLink) => (
                            <li key={subLink.label}>
                              <Link
                                to={subLink.to}
                                hash={subLink.hash}
                                onClick={() => {
                                  setOpen(false);
                                  setActiveMobileSub(null);
                                }}
                                className="block rounded-md px-3 py-2 text-xs text-white/70 hover:bg-white/5 hover:text-white"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
                      activeProps={{ className: "text-gold font-semibold bg-white/5" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-accent text-accent-foreground px-5 py-3 text-center text-sm font-semibold shadow-soft"
                >
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Interactive Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-2xl px-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              aria-label="Close search"
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
              className="absolute -top-14 right-6 text-white/75 hover:text-white p-2 transition rounded-md hover:bg-white/10 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Search Input Card */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="relative flex items-center rounded-xl bg-white p-4 shadow-elegant border border-navy/5"
            >
              <Search className="h-5 w-5 text-navy/40 flex-none" />
              <input
                autoFocus
                type="text"
                placeholder="Search insights, services, advisors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-3 flex-1 bg-transparent text-lg text-navy outline-none placeholder:text-navy/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-navy/40 hover:text-navy p-1 transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>

            {/* Suggestions (When Query is Empty) */}
            {searchQuery.trim().length === 0 && (
              <div className="mt-2 rounded-xl bg-white p-4 shadow-elegant border border-navy/5 text-navy animate-in fade-in duration-200">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5483B3] mb-3 px-1">
                  Suggested Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Virtual CFO Advisory", to: "/services/virtual-cfo" },
                    { label: "Tax Structuring", to: "/services/taxation-compliance" },
                    { label: "Meet the Team", to: "/about", hash: "team" },
                    { label: "Economic Trends", to: "/insights" },
                    { label: "Compliance & Audit", to: "/services/accounting-bookkeeping" },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      to={s.to}
                      hash={s.hash}
                      onClick={() => { setSearchOpen(false); }}
                      className="rounded-full bg-slate-50 border border-navy/5 px-3 py-1.5 text-xs font-semibold text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results Dropdown (When Query exists) */}
            {searchQuery.trim().length > 0 && (
              <div className="mt-2 max-h-[350px] overflow-y-auto rounded-xl bg-white p-4 shadow-elegant border border-navy/5 text-navy animate-in fade-in duration-200">
                {filteredServices.length === 0 && filteredPages.length === 0 && filteredInsights.length === 0 ? (
                  <p className="text-center text-sm text-navy/50 py-6">
                    No results found for <span className="font-semibold text-navy">"{searchQuery}"</span>
                  </p>
                ) : (
                  <div className="space-y-4">
                    {/* Services Results */}
                    {filteredServices.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5483B3] mb-2 px-1">
                          Services ({filteredServices.length})
                        </h4>
                        <div className="space-y-1">
                          {filteredServices.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                            >
                              <div className="text-xs font-bold text-navy">{s.title}</div>
                              <div className="text-[10px] text-navy/60 mt-0.5 line-clamp-1">{s.short}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pages Results */}
                    {filteredPages.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5483B3] mb-2 px-1">
                          Pages & Info ({filteredPages.length})
                        </h4>
                        <div className="space-y-1">
                          {filteredPages.map((p) => (
                            <Link
                              key={p.title}
                              to={p.to}
                              hash={p.hash}
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                            >
                              <div className="text-xs font-bold text-navy">{p.title}</div>
                              <div className="text-[10px] text-navy/60 mt-0.5 line-clamp-1">{p.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Insights Results */}
                    {filteredInsights.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5483B3] mb-2 px-1">
                          Insights & Research ({filteredInsights.length})
                        </h4>
                        <div className="space-y-1">
                          {filteredInsights.map((i) => (
                            <Link
                              key={i.title}
                              to={i.to}
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                            >
                              <div className="text-xs font-bold text-navy">{i.title}</div>
                              <div className="text-[10px] text-navy/60 mt-0.5 line-clamp-1">{i.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <p className="mt-4 text-center text-xs text-white/50">
              Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans">Esc</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
