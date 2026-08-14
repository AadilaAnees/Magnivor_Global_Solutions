import imgAccounting from "@/assets/accounting.png";
import imgTax from "@/assets/tax.png";
import imgAdvisory from "@/assets/advisory.png";
import imgOutsourcing from "@/assets/outsourcing.png";
import imgConsulting from "@/assets/consulting.png";
import imgRisk from "@/assets/risk.png";
// (Contact page "Send Inquiry" form delivery, footer, mailto/tel links).
export const SITE = {
  name: "Magnivor Global Solutions",
  shortName: "Magnivor",
  email: "consult@magnivorglobal.com",
  phoneDisplay: "+94 71 218 2124",
  phoneTel: "+94712182124",
  whatsappNumber: "94712182124",
  whatsappMessage: "Hello Magnivor Global Solutions, I would like to request a consultation.",
  address: "27, 5 Upananda Mawatha, Dehiwala-Mount Lavinia 10350, Sri Lanka",
  formspreeId: "mqpzqrpd",
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
    title: "Accounting",
    tag: "Core",
    short: "Turning Financial Information into Strategic Business Intelligence.",
    overview:
      "End-to-end accounting and bookkeeping that gives leadership a clean, auditable view of performance — every month, every quarter, every year.",
    scope: [
      "Bookkeeping & Financial Accounting",
      "Financial Reporting",
      "Management Reporting",
      "Budgeting & Forecasting",
      "Financial Planning & Analysis (FP&A)",
      "Virtual CFO Services",
      "Payroll Services",
      "Finance & Accounting Outsourcing",
      "Accounting Systems Support",
      "Other Related Accounting & Finance Services"
    ],
    deliverables: [
      "Monthly P&L, balance sheet and cash flow",
      "Reconciliation reports",
      "Audit-ready year-end financials",
    ],
    audience: "SMEs, startups and international firms needing reliable books.",
    benefits: [
      "Audit-ready financials",
      "Data-driven decision making",
      "Streamlined tax compliance"
    ],
    image: imgAccounting,
  },
  {
    slug: "taxation-compliance",
    title: "Tax",
    tag: "Advisory",
    short: "Helping You Navigate Tax with Confidence.",
    overview:
      "Strategic tax structuring and compliance support across Sri Lankan and international jurisdictions, so you stay efficient and fully compliant.",
    scope: [
      "Corporate Tax Advisory",
      "Tax Planning & Strategy",
      "Tax Compliance",
      "VAT / GST Advisory",
      "International Tax Advisory",
      "Transfer Pricing",
      "Tax Due Diligence",
      "Tax Audit Support",
      "Tax Risk Management",
      "Other Related Tax Services"
    ],
    deliverables: ["Tax filings and computations", "Tax position memos", "Cross-border structuring advice"],
    audience: "Companies operating across multiple jurisdictions.",
    benefits: ["Lower effective tax burden", "Reduced compliance risk", "Confidence in audits and reviews"],
    image: imgTax,
  },
  {
    slug: "virtual-cfo",
    title: "Business Consulting",
    tag: "Strategic",
    short: "Empowering Better Businesses.",
    overview:
      "Plug a fractional CFO into your business — strategy, forecasting and board-grade reporting without the cost of a full-time hire.",
    scope: [
      "Empowering Better Businesses",
      "Business Strategy",
      "Startup & Growth Advisory",
      "Business Process Outsourcing (BPO)",
      "Business Process Re-engineering",
      "Corporate Secretarial Services",
      "HR Consulting",
      "Corporate Training",
      "Digital Transformation Advisory",
      "Market Entry Advisory",
      "Other Related Business Consulting Services"
    ],
    deliverables: ["Monthly CFO report", "12-month rolling forecast", "Board / investor pack"],
    audience: "Growth-stage businesses and SMEs without an in-house CFO.",
    benefits: ["Strategic clarity at the top", "Investor-ready numbers", "Better capital decisions"],
    image: imgConsulting,
  },
  {
    slug: "bpo-services",
    title: "Outsourcing",
    tag: "Outsourcing",
    short: "Outsourced finance operations, payroll and reporting.",
    overview: "Offload finance operations to a dedicated Magnivor team — scalable, secure and SLA-driven.",
    scope: ["Accounts payable and receivable", "Payroll processing", "Management reporting", "Process design and SOPs"],
    deliverables: ["Operational finance run by Magnivor", "Monthly SLA reports", "Process documentation"],
    audience: "International firms scaling lean back-office operations.",
    benefits: ["Lower operating cost", "Predictable SLAs", "Senior oversight, junior execution"],
    image: imgOutsourcing,
  },
  {
    slug: "corporate-training",
    title: "Advisory",
    tag: "Capability",
    short: "Strategic Solutions for Sustainable Growth.",
    overview: "Practical, instructor-led training that lifts the capability of finance teams and business leaders.",
    scope: [
      "Business Advisory",
      "Financial Advisory",
      "IFRS Advisory",
      "Finance Transformation",
      "Business Valuation",
      "Business Process Improvement",
      "Performance Improvement",
      "ESG & Sustainability Advisory",
      "Economic Intelligence (Market & Strategic Insights)",
      "Other Related Advisory Services"
    ],
    deliverables: ["Workshop materials", "Live or recorded sessions", "Certificates of completion"],
    audience: "Finance teams, leadership groups and professional bodies.",
    benefits: ["Stronger in-house capability", "Up-to-date standards know-how", "Better team retention"],
    image: imgAdvisory
  },
  {
    slug: "economic-intelligence",
    title: "Risk & Governance",
    tag: "Research",
    short: "Strengthening Governance. Managing Risk. Building Trust.",
    overview:
      "Research-grade insight into macro trends, sectors and policy — translated into actionable guidance for your strategy.",
    scope: [
      "Strengthening Governance. Managing Risk. Building Trust.",
      "Internal Audit",
      "Enterprise Risk Management (ERM)",
      "Corporate Governance Advisory",
      "Internal Controls & Compliance Reviews",
      "SOQM Consulting",
      "Fraud Risk Assessments",
      "Business Continuity Planning",
      "Governance Framework Development",
      "Other Related Risk & Governance Services"
    ],
    deliverables: ["Quarterly intelligence briefs", "Custom research reports", "Executive briefings"],
    audience: "Boards, investors and policy-sensitive businesses.",
    benefits: ["Foresight into market shifts", "Sharper strategic positioning", "Evidence-based decisions"],
    image: imgRisk,
  },
];

export type Service = (typeof SERVICES)[number];
