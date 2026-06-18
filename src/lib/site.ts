// ⬇️  EDIT HERE to change the contact email / phone used across the site
// (Contact page "Send Inquiry" form delivery, footer, mailto/tel links).
// Set `formspreeId` to your Formspree form ID so submissions land in your inbox.
export const SITE = {
  name: "Magnivor Global Solutions",
  shortName: "Magnivor",
  email: "aadhilaanees@gmail.com", // ← change to your Gmail for testing
  phoneDisplay: "+94 78 768 4244", // ← change phone (display format)
  phoneTel: "+94787684244", // ← change phone (tel: link, digits only)
  whatsappNumber: "94787684244", // international, no +
  whatsappMessage: "Hello Magnivor Global Solutions, I would like to request a consultation.",
  address: "27, 5 Upananda Mawatha, Dehiwala-Mount Lavinia 10350, Sri Lanka",
  formspreeId: "maqzzbeq", // ← create a free form at https://formspree.io and paste its ID here
  social: {
    facebook: "https://facebook.com/magnivorglobalsolutions",
    instagram: "https://instagram.com/magnivorglobalsolutions",
    linkedin: "https://www.linkedin.com/company/magnivor-global-solutions/",
  },
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const SERVICES = [
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    tag: "Core",
    short: "Financial reporting, reconciliations and IFRS-aligned books.",
    overview:
      "End-to-end accounting and bookkeeping that gives leadership a clean, auditable view of performance — every month, every quarter, every year.",
    scope: [
      "Day-to-day bookkeeping and ledger management",
      "Bank, payable and receivable reconciliations",
      "Monthly management accounts",
      "Year-end financial statements (IFRS / SLFRS)",
    ],
    deliverables: [
      "Monthly P&L, balance sheet and cash flow",
      "Reconciliation reports",
      "Audit-ready year-end financials",
    ],
    audience: "SMEs, startups and international firms needing reliable books.",
    benefits: ["Clean, audit-ready records", "Faster, smarter decisions", "Compliance built in"],
  },
  {
    slug: "taxation-compliance",
    title: "Taxation & Compliance",
    tag: "Advisory",
    short: "Tax planning, VAT and cross-border compliance advisory.",
    overview:
      "Strategic tax structuring and compliance support across Sri Lankan and international jurisdictions, so you stay efficient and fully compliant.",
    scope: [
      "Corporate and personal tax planning",
      "VAT, WHT and indirect tax compliance",
      "Cross-border and transfer pricing advisory",
      "Tax authority correspondence and audits",
    ],
    deliverables: ["Tax filings and computations", "Tax position memos", "Cross-border structuring advice"],
    audience: "Companies operating across multiple jurisdictions.",
    benefits: ["Lower effective tax burden", "Reduced compliance risk", "Confidence in audits and reviews"],
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    tag: "Strategic",
    short: "Forecasting, KPIs and CFO-level financial leadership on demand.",
    overview:
      "Plug a fractional CFO into your business — strategy, forecasting and board-grade reporting without the cost of a full-time hire.",
    scope: [
      "Budgeting and rolling forecasts",
      "KPI dashboards and management reporting",
      "Cash flow and working capital strategy",
      "Investor and board reporting",
    ],
    deliverables: ["Monthly CFO report", "12-month rolling forecast", "Board / investor pack"],
    audience: "Growth-stage businesses and SMEs without an in-house CFO.",
    benefits: ["Strategic clarity at the top", "Investor-ready numbers", "Better capital decisions"],
  },
  {
    slug: "bpo-services",
    title: "Business Process Outsourcing",
    tag: "Outsourcing",
    short: "Outsourced finance operations, payroll and reporting.",
    overview: "Offload finance operations to a dedicated Magnivor team — scalable, secure and SLA-driven.",
    scope: ["Accounts payable and receivable", "Payroll processing", "Management reporting", "Process design and SOPs"],
    deliverables: ["Operational finance run by Magnivor", "Monthly SLA reports", "Process documentation"],
    audience: "International firms scaling lean back-office operations.",
    benefits: ["Lower operating cost", "Predictable SLAs", "Senior oversight, junior execution"],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    tag: "Capability",
    short: "IFRS, governance and financial modeling workshops.",
    overview: "Practical, instructor-led training that lifts the capability of finance teams and business leaders.",
    scope: [
      "IFRS / SLFRS application",
      "Financial modeling and analysis",
      "Corporate governance",
      "Bespoke in-house programs",
    ],
    deliverables: ["Workshop materials", "Live or recorded sessions", "Certificates of completion"],
    audience: "Finance teams, leadership groups and professional bodies.",
    benefits: ["Stronger in-house capability", "Up-to-date standards know-how", "Better team retention"],
  },
  {
    slug: "economic-intelligence",
    title: "Economic Intelligence",
    tag: "Research",
    short: "Macroeconomic research and forecasting for decision makers.",
    overview:
      "Research-grade insight into macro trends, sectors and policy — translated into actionable guidance for your strategy.",
    scope: [
      "Macroeconomic monitoring",
      "Sector and market briefs",
      "Policy and regulatory analysis",
      "Custom research engagements",
    ],
    deliverables: ["Quarterly intelligence briefs", "Custom research reports", "Executive briefings"],
    audience: "Boards, investors and policy-sensitive businesses.",
    benefits: ["Foresight into market shifts", "Sharper strategic positioning", "Evidence-based decisions"],
  },
];

export type Service = (typeof SERVICES)[number];
