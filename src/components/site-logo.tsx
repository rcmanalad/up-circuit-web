"use client";

import Image from "next/image";
import { useState } from "react";

/** Inline circuit-node fallback used if the official logo asset is missing. */
export function CircuitMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="url(#ckt-grad)" />
        <defs>
          <linearGradient id="ckt-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1174b5" />
            <stop offset="1" stopColor="#37398c" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="18" r="5" fill="#c5f3ff" />
        <circle cx="46" cy="18" r="5" fill="#c5f3ff" />
        <circle cx="18" cy="46" r="5" fill="#c5f3ff" />
        <circle cx="46" cy="46" r="5" fill="#c5f3ff" />
        <path d="M23 18h18M18 23v18M46 23v18M23 46h18" stroke="#c5f3ff" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight">UP&nbsp;Circuit</span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-upblue">UP Diliman · EEEI</span>
      </span>
    </span>
  );
}

type SiteLogoProps = {
  /** Tailwind width class, e.g. "w-40". */
  className?: string;
  /** Whether to render the wordmark fallback next to the mark. */
  withWordmark?: boolean;
  /** Render the light text variant (for dark surfaces). */
  light?: boolean;
};

/**
 * Official UP Circuit logo (downloaded from the organization's verified
 * Facebook page profile album into /public/logo.png). Falls back to an
 * inline circuit mark if the asset is ever missing.
 */
export default function SiteLogo({ className = "w-44", withWordmark = true, light = false }: SiteLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#1174b5" />
          <circle cx="18" cy="18" r="5" fill="#c5f3ff" />
          <circle cx="46" cy="18" r="5" fill="#c5f3ff" />
          <circle cx="18" cy="46" r="5" fill="#c5f3ff" />
          <circle cx="46" cy="46" r="5" fill="#c5f3ff" />
          <path d="M23 18h18M18 23v18M46 23v18M23 46h18" stroke="#c5f3ff" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </svg>
        {withWordmark && (
          <span className="text-left leading-tight">
            <span className={`block font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
              UP&nbsp;Circuit
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-skysea">UP Diliman · EEEI</span>
          </span>
        )}
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="UP Circuit — University of the Philippines Circuit logo"
      width={960}
      height={476}
      priority
      unoptimized
      onError={() => setFailed(true)}
      className={`h-auto ${withWordmark ? className : "w-12"}`}
    />
  );
}
