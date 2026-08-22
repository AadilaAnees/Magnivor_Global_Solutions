import { useState } from "react";
import { Globe } from "lucide-react";

export type MarketId = "sri-lanka" | "india" | "middle-east" | "uk" | "canada" | "australia" | "global";

export interface MarketLocation {
  id: MarketId;
  name: string;
  shortName: string;
  role: string;
  isHub?: boolean;
  x: number; // SVG viewBox coordinates (0 to 1000)
  y: number; // SVG viewBox coordinates (0 to 520)
  labelX: number;
  labelY: number;
  labelAlign: "left" | "right" | "center";
  curveControl: { cx: number; cy: number };
  description: string;
  capabilities: string[];
}

export const MARKETS: MarketLocation[] = [
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    shortName: "Sri Lanka (HQ)",
    role: "Headquarters & Global Delivery Center",
    isHub: true,
    x: 692,
    y: 312,
    labelX: 692,
    labelY: 362,
    labelAlign: "center",
    curveControl: { cx: 692, cy: 312 },
    description:
      "Core operational headquarters delivering accounting, taxation, risk & governance, audit, advisory, consulting, and BPO solutions.",
    capabilities: ["Operational HQ", "Central Delivery Hub", "Full Suite Advisory", "Senior Leadership"],
  },
  {
    id: "india",
    name: "India",
    shortName: "India",
    role: "Strategic Delivery & Advisory Alliances",
    x: 676,
    y: 242,
    labelX: 742,
    labelY: 226,
    labelAlign: "left",
    curveControl: { cx: 686, cy: 275 },
    description: "Deep regional technical capabilities, corporate advisory, and scalable talent delivery.",
    capabilities: ["Tax & Compliance", "Shared Services", "Strategic Partnerships"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    shortName: "Middle East",
    role: "Regional Expansion & Financial Advisory",
    x: 592,
    y: 236,
    labelX: 520,
    labelY: 210,
    labelAlign: "right",
    curveControl: { cx: 635, cy: 260 },
    description: "Cross-border financial consulting, corporate structuring, and economic intelligence across GCC markets.",
    capabilities: ["Corporate Structuring", "Tax & VAT Advisory", "Economic Intelligence"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    shortName: "United Kingdom",
    role: "European Market & Strategic Partnerships",
    x: 472,
    y: 136,
    labelX: 410,
    labelY: 96,
    labelAlign: "right",
    curveControl: { cx: 560, cy: 190 },
    description: "International client engagements, outsourced management accounting, and strategic advisory.",
    capabilities: ["Outsourced BPO", "Management Accounting", "Cross-Border Advisory"],
  },
  {
    id: "canada",
    name: "Canada",
    shortName: "Canada",
    role: "North American Expansion & Consulting",
    x: 236,
    y: 155,
    labelX: 180,
    labelY: 115,
    labelAlign: "right",
    curveControl: { cx: 430, cy: 150 },
    description: "North American enterprise advisory, remote financial controllership, and business process outsourcing.",
    capabilities: ["Financial Controllership", "BPO Solutions", "Enterprise Advisory"],
  },
  {
    id: "australia",
    name: "Australia",
    shortName: "Australia",
    role: "Asia-Pacific Advisory & Delivery",
    x: 878,
    y: 395,
    labelX: 890,
    labelY: 445,
    labelAlign: "left",
    curveControl: { cx: 795, cy: 375 },
    description: "APAC client partnerships, specialized audit support, and ongoing bookkeeping capabilities.",
    capabilities: ["Audit Support", "Bookkeeping & Payroll", "APAC Alliances"],
  },
];

interface WorldPresenceMapProps {
  activeMarketId?: MarketId | null;
  onSelectMarket?: (id: MarketId) => void;
  onHoverMarket?: (id: MarketId | null) => void;
}

export function WorldPresenceMap({
  activeMarketId = "sri-lanka",
  onSelectMarket,
  onHoverMarket,
}: WorldPresenceMapProps) {
  const [internalHover, setInternalHover] = useState<MarketId | null>(null);

  const currentActiveId = internalHover || activeMarketId || "sri-lanka";
  const sriLanka = MARKETS.find((m) => m.isHub) || MARKETS[0];

  const handleMouseEnter = (id: MarketId) => {
    setInternalHover(id);
    onHoverMarket?.(id);
  };

  const handleMouseLeave = () => {
    setInternalHover(null);
    onHoverMarket?.(null);
  };

  const handleClick = (id: MarketId) => {
    onSelectMarket?.(id);
  };

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#041a38]/80 via-[#021024]/90 to-[#021024] p-3 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-[90px]" />

      {/* Top Header Bar inside Map Card */}
      <div className="relative z-10 mb-3 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald/20 border border-emerald/40 text-gold">
            <Globe className="h-4 w-4 text-gold animate-spin-slow" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
              Global Footprint &amp; Reach
            </span>
            <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium">
              <span>Sri Lanka Hub</span>
              <span className="text-gold font-bold">→</span>
              <span>Key International Markets</span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full aspect-[1000/530] select-none">
        <svg
          viewBox="0 0 1000 520"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="mapLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082954" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#051d3b" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#031226" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="mapLandHoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e3d7a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#082a52" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="arcGradientSriLanka" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C1E8FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#5483B3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C1E8FF" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="goldGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C1E8FF" />
              <stop offset="100%" stopColor="#5483B3" />
            </linearGradient>

            <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glowEmerald" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Dot Pattern for oceanic background */}
            <pattern id="oceanGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.8" fill="rgba(84, 131, 179, 0.18)" />
            </pattern>
          </defs>

          {/* Oceanic Matrix Grid Background */}
          <rect width="1000" height="520" fill="url(#oceanGrid)" className="opacity-70" />

          {/* Longitude & Latitude subtle guide lines */}
          <g stroke="rgba(84, 131, 179, 0.12)" strokeWidth="0.8" strokeDasharray="4 6" fill="none">
            {/* Equator */}
            <line x1="0" y1="290" x2="1000" y2="290" />
            {/* Tropic of Cancer */}
            <line x1="0" y1="210" x2="1000" y2="210" />
            {/* Tropic of Capricorn */}
            <line x1="0" y1="370" x2="1000" y2="370" />
            {/* Prime Meridian */}
            <line x1="475" y1="0" x2="475" y2="520" />
            {/* 80°E Meridian (Sri Lanka corridor) */}
            <line x1="692" y1="0" x2="692" y2="520" stroke="rgba(193, 232, 255, 0.18)" strokeDasharray="3 3" />
          </g>

          {/* WORLD CONTINENTS PATHS */}
          <g
            fill="url(#mapLandGradient)"
            stroke="rgba(84, 131, 179, 0.35)"
            strokeWidth="1"
            strokeLinejoin="round"
            className="transition-colors duration-500"
          >
            {/* NORTH AMERICA (Canada, USA, Alaska, Mexico) */}
            <path
              d="M 50,85 L 85,75 L 115,90 L 140,80 L 180,68 L 225,60 L 270,62 L 315,80 L 325,105 L 305,120 L 320,135 L 295,150 L 275,155 L 265,180 L 285,198 L 265,225 L 235,240 L 210,250 L 195,295 L 175,275 L 165,250 L 145,210 L 125,185 L 95,155 L 68,125 L 50,105 Z"
            />
            {/* Greenland */}
            <path d="M 335,42 L 385,38 L 400,68 L 380,88 L 345,78 Z" />
            {/* Alaska tip */}
            <path d="M 35,95 L 60,88 L 50,110 L 32,105 Z" />

            {/* SOUTH AMERICA */}
            <path
              d="M 215,305 L 255,300 L 290,320 L 330,345 L 345,380 L 325,420 L 300,455 L 265,505 L 250,475 L 240,410 L 220,355 L 205,325 Z"
            />

            {/* EUROPE */}
            {/* United Kingdom */}
            <path
              d="M 465,125 L 482,120 L 485,145 L 470,152 Z"
              className={currentActiveId === "uk" ? "fill-[#0e4887] stroke-gold stroke-[1.5]" : ""}
            />
            {/* Ireland */}
            <path d="M 452,130 L 462,128 L 460,142 L 450,139 Z" />
            {/* Scandinavia */}
            <path d="M 515,65 L 555,55 L 565,95 L 540,115 L 515,95 Z" />
            {/* Continental Europe */}
            <path d="M 478,155 L 535,140 L 575,150 L 585,185 L 545,210 L 490,208 L 468,180 Z" />

            {/* AFRICA */}
            <path
              d="M 468,220 L 555,215 L 590,245 L 618,290 L 610,340 L 585,395 L 545,445 L 515,448 L 485,385 L 460,320 L 440,265 L 448,230 Z"
            />
            {/* Madagascar */}
            <path d="M 622,375 L 635,385 L 625,425 L 615,410 Z" />

            {/* ASIA */}
            {/* Northern Asia / Siberia */}
            <path
              d="M 575,65 L 670,55 L 775,60 L 865,75 L 880,120 L 825,150 L 735,155 L 640,140 L 580,110 Z"
            />
            {/* Middle East & Arabian Peninsula */}
            <path
              d="M 578,212 L 630,215 L 645,255 L 615,275 L 582,255 L 572,225 Z"
              className={currentActiveId === "middle-east" ? "fill-[#0e4887] stroke-gold stroke-[1.5]" : ""}
            />
            {/* India Subcontinent */}
            <path
              d="M 652,205 L 720,205 L 715,258 L 685,302 L 655,248 Z"
              className={currentActiveId === "india" ? "fill-[#0e4887] stroke-gold stroke-[1.5]" : ""}
            />
            {/* East Asia & China */}
            <path d="M 725,160 L 825,165 L 850,215 L 815,265 L 760,270 L 735,230 L 725,190 Z" />
            {/* Japan */}
            <path d="M 870,145 L 892,150 L 882,190 L 865,178 Z" />
            {/* Southeast Asia */}
            <path d="M 755,275 L 795,280 L 805,325 L 770,335 L 745,305 Z" />
            {/* Indonesia archipelago */}
            <path d="M 760,345 L 815,350 L 845,365 L 805,372 L 765,360 Z" />
            <path d="M 830,335 L 860,340 L 855,360 L 825,355 Z" />

            {/* SRI LANKA (Prominently styled island with highlight) */}
            <path
              d="M 690,310 C 694,308 697,312 696,317 C 695,322 691,324 688,321 C 686,317 687,311 690,310 Z"
              className="fill-gold stroke-gold stroke-[1.5]"
              filter="url(#glowGold)"
            />

            {/* AUSTRALIA */}
            <path
              d="M 805,365 L 880,348 L 925,375 L 935,420 L 895,462 L 830,460 L 800,420 L 795,385 Z"
              className={currentActiveId === "australia" ? "fill-[#0e4887] stroke-gold stroke-[1.5]" : ""}
            />
            {/* New Zealand */}
            <path d="M 945,448 L 960,455 L 948,485 L 938,472 Z" />
          </g>

          {/* DOTTED NETWORK CONNECTIVITY ARCS FROM SRI LANKA TO INTERNATIONAL MARKETS */}
          <g className="arcs-group pointer-events-none">
            {MARKETS.filter((m) => !m.isHub).map((market) => {
              const isSelected = currentActiveId === market.id;
              const pathData = `M ${sriLanka.x} ${sriLanka.y} Q ${market.curveControl.cx} ${market.curveControl.cy} ${market.x} ${market.y}`;

              return (
                <g key={`arc-${market.id}`}>
                  {/* Background soft glow arc */}
                  <path
                    d={pathData}
                    fill="none"
                    stroke={isSelected ? "#C1E8FF" : "#5483B3"}
                    strokeWidth={isSelected ? "2.5" : "1.2"}
                    strokeOpacity={isSelected ? "0.9" : "0.35"}
                    strokeDasharray={isSelected ? "6 4" : "4 5"}
                    filter={isSelected ? "url(#glowGold)" : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Animated Traveling Particle Pulse */}
                  <circle r={isSelected ? "3" : "2"} fill="#C1E8FF">
                    <animateMotion
                      path={pathData}
                      dur={isSelected ? "2.5s" : "4.5s"}
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </circle>
                </g>
              );
            })}
          </g>

          {/* POINTER LEADER LINES & ANCHORS */}
          <g className="leader-lines pointer-events-none" strokeWidth="1">
            {MARKETS.map((m) => {
              const isSelected = currentActiveId === m.id;
              const strokeColor = m.isHub
                ? "rgba(193, 232, 255, 0.8)"
                : isSelected
                ? "rgba(193, 232, 255, 0.9)"
                : "rgba(84, 131, 179, 0.5)";

              return (
                <g key={`leader-${m.id}`} className="transition-all duration-300">
                  {/* Leader Pointer Line */}
                  <line
                    x1={m.x}
                    y1={m.y}
                    x2={m.labelX}
                    y2={m.labelY}
                    stroke={strokeColor}
                    strokeDasharray={isSelected ? "none" : "2 2"}
                    strokeWidth={isSelected || m.isHub ? "1.5" : "1"}
                  />
                  {/* Tiny Anchor Node at label position */}
                  <circle
                    cx={m.labelX}
                    cy={m.labelY}
                    r={isSelected ? "2.5" : "1.5"}
                    fill={m.isHub || isSelected ? "#C1E8FF" : "#5483B3"}
                  />
                </g>
              );
            })}
          </g>

          {/* COUNTRY NODES & BEACONS */}
          {MARKETS.map((market) => {
            const isSelected = currentActiveId === market.id;
            const isHub = market.isHub;

            return (
              <g
                key={`node-${market.id}`}
                className="cursor-pointer transition-transform duration-300"
                onClick={() => handleClick(market.id)}
                onMouseEnter={() => handleMouseEnter(market.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Hit area for easier click/hover on touch & mouse */}
                <circle cx={market.x} cy={market.y} r="18" fill="transparent" />

                {isHub ? (
                  /* SRI LANKA HUB - Special Beacon */
                  <g>
                    {/* Expanding Radar Pulse Ring 1 */}
                    <circle
                      cx={market.x}
                      cy={market.y}
                      r="12"
                      fill="none"
                      stroke="#C1E8FF"
                      strokeWidth="1.5"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        values="6;22;6"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0;0.8"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Expanding Radar Pulse Ring 2 */}
                    <circle
                      cx={market.x}
                      cy={market.y}
                      r="6"
                      fill="none"
                      stroke="#5483B3"
                      strokeWidth="1"
                    >
                      <animate
                        attributeName="r"
                        values="4;16;4"
                        dur="2.8s"
                        begin="0.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0;0.6"
                        dur="2.8s"
                        begin="0.8s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Core Hub Glow & Diamond Pin */}
                    <circle
                      cx={market.x}
                      cy={market.y}
                      r="5"
                      fill="#C1E8FF"
                      filter="url(#glowGold)"
                    />
                    <circle cx={market.x} cy={market.y} r="2.5" fill="#021024" />
                  </g>
                ) : (
                  /* INTERNATIONAL MARKET NODES */
                  <g>
                    {/* Active hover ripple */}
                    {isSelected && (
                      <circle
                        cx={market.x}
                        cy={market.y}
                        r="10"
                        fill="none"
                        stroke="#C1E8FF"
                        strokeWidth="1.5"
                        opacity="0.7"
                      >
                        <animate
                          attributeName="r"
                          values="4;14;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;0;0.8"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    <circle
                      cx={market.x}
                      cy={market.y}
                      r={isSelected ? "4.5" : "3.5"}
                      fill={isSelected ? "#C1E8FF" : "#5483B3"}
                      stroke="#021024"
                      strokeWidth="1"
                      filter={isSelected ? "url(#glowGold)" : "url(#glowEmerald)"}
                      className="transition-all duration-300"
                    />
                  </g>
                )}

                {/* Country Name Badge on SVG */}
                <g
                  transform={`translate(${market.labelX}, ${market.labelY})`}
                  className="transition-all duration-300"
                >
                  {isHub ? (
                    /* Sri Lanka HQ Badge */
                    <g transform="translate(-62, -12)">
                      <rect
                        width="124"
                        height="24"
                        rx="12"
                        fill="#031c3d"
                        stroke="#C1E8FF"
                        strokeWidth="1.2"
                        filter="url(#glowGold)"
                      />
                      <circle cx="14" cy="12" r="3.5" fill="#C1E8FF" />
                      <text
                        x="24"
                        y="15.5"
                        fill="#C1E8FF"
                        fontSize="10"
                        fontWeight="700"
                        letterSpacing="0.05em"
                        fontFamily="sans-serif"
                      >
                        SRI LANKA (HQ)
                      </text>
                    </g>
                  ) : (
                    /* Target Country Badges */
                    <g
                      transform={
                        market.labelAlign === "right"
                          ? "translate(-105, -10)"
                          : market.labelAlign === "center"
                          ? "translate(-50, -10)"
                          : "translate(6, -10)"
                      }
                    >
                      <rect
                        width={market.name.length > 10 ? "105" : "90"}
                        height="20"
                        rx="10"
                        fill={isSelected ? "#072952" : "rgba(3, 23, 53, 0.85)"}
                        stroke={isSelected ? "#C1E8FF" : "rgba(84, 131, 179, 0.4)"}
                        strokeWidth={isSelected ? "1.2" : "0.8"}
                        className="transition-colors duration-200"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="2.5"
                        fill={isSelected ? "#C1E8FF" : "#5483B3"}
                      />
                      <text
                        x="18"
                        y="13.5"
                        fill={isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.85)"}
                        fontSize="9.5"
                        fontWeight={isSelected ? "700" : "500"}
                        fontFamily="sans-serif"
                        letterSpacing="0.02em"
                      >
                        {market.name}
                      </text>
                    </g>
                  )}
                </g>
              </g>
            );
          })}

          {/* Watermark / Coordinates Stamp in Corner */}
          <g transform="translate(20, 480)" opacity="0.6" className="hidden sm:block">
            <text fill="#5483B3" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
              HUB COORD: 06°55'N / 79°51'E · COLOMBO
            </text>
            <text y="14" fill="rgba(84, 131, 179, 0.7)" fontSize="8" fontFamily="sans-serif">
              MAGNIVOR GLOBAL SOLUTIONS DELIVERY NETWORK
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
