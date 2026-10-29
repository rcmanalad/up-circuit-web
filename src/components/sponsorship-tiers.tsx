"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { PERK_ROWS, TIERS, type TierId } from "@/lib/site";

export default function SponsorshipTiers() {
  const [active, setActive] = useState<TierId>("title");
  const activeTier = TIERS.find((t) => t.id === active) ?? TIERS[0];

  return (
    <section id="tiers" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sponsorship Tiers"
          title="Choose Your Level of Partnership"
          description="Select a tier below to explore the partner perks included at each level."
        />

        {/* Tier selector */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Sponsorship tiers">
            {TIERS.map((tier) => {
              const isActive = tier.id === active;
              return (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tier.id)}
                  className={`rounded-xl border px-5 py-3 text-sm font-bold transition ${
                    isActive
                      ? "border-upindigo bg-upindigo text-white shadow-glow"
                      : "border-fog bg-white text-ink hover:border-upblue hover:text-upblue"
                  }`}
                >
                  {tier.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tier summary panel */}
        <Reveal className="mx-auto mt-8 max-w-3xl">
          <div className="rounded-3xl border border-upblue/30 bg-gradient-to-br from-skyice/60 to-white p-7 text-center shadow-card">
            <p className="font-display text-2xl font-bold text-ink">{activeTier.label}</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink/75">{activeTier.summary}</p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-upblue px-6 py-3 text-sm font-bold text-white shadow-glow transition-colors hover:bg-azure"
            >
              Inquire About This Tier
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Comparison table */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-fog shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px] border-collapse bg-white text-sm" aria-label="Sponsorship tier comparison">
                <thead>
                  <tr className="bg-ink text-left text-white">
                    <th scope="col" className="px-5 py-4 font-display font-bold">
                      Partner Perk
                    </th>
                    {TIERS.map((tier) => (
                      <th
                        key={tier.id}
                        scope="col"
                        className={`tier-cell px-5 py-4 font-display font-bold ${
                          tier.id === active ? "tier-col-active" : ""
                        }`}
                      >
                        {tier.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist">
                  {PERK_ROWS.map((row, i) => (
                    <tr key={row.perk} className={`align-top ${i % 2 === 1 ? "bg-mist/40" : ""}`}>
                      <th scope="row" className="px-5 py-4 font-semibold text-ink">
                        {row.perk}
                      </th>
                      {TIERS.map((tier) => (
                        <td
                          key={tier.id}
                          className={`tier-cell px-5 py-4 text-ink/80 ${tier.id === active ? "tier-col-active" : ""}`}
                        >
                          {row.values[tier.id]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="bg-mist/60 px-5 py-3 text-xs text-ink/60">
              All perks are illustrative and scoped per engagement. Final deliverables are confirmed in your
              partnership agreement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
