import { useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Magnivor on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <span
        className={`pointer-events-none rounded-md bg-navy px-3 py-1.5 text-xs font-medium text-white shadow-soft transition-all duration-200 ${
          hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        } hidden sm:inline-block`}
      >
        Chat with Magnivor
      </span>
      <span
        className="wa-pulse flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-transform duration-200 hover:scale-105"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
      </span>
    </a>
  );
}
