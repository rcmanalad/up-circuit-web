import Reveal from "@/components/reveal";
import StatCounter from "@/components/stat-counter";
import { HERO_STATS, ORG } from "@/lib/site";
import { ArrowRight, Sparkles } from "lucide-react";

const MARQUEE_ITEMS = ["Conduct", "Rectify", "Amplify", "Dare to Be; Be Different", "Est. 1994"];

function Marquee() {
  const strip = (
    <span className="flex shrink-0 items-center gap-10 pr-10 text-sm font-semibold uppercase tracking-[0.22em] text-skyice">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          {item}
          <span className="text-azure" aria-hidden="true">
            ●
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-upindigo/60 py-3" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {strip}
        {strip}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-grid [background-size:44px_44px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-circuit-fade" aria-hidden="true" />

      {/* Decorative circuit traces */}
      <svg
        className="pointer-events-none absolute -right-24 top-16 hidden w-[560px] opacity-25 md:block"
        viewBox="0 0 560 560"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 80h120v60h80v120h120M40 160h60v80h60M360 260h160M480 80h60v120h-40M520 260v80h-60M320 380h-80v-40"
          stroke="#6dcae9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="40" cy="80" r="6" fill="#c5f3ff" />
        <circle cx="280" cy="260" r="6" fill="#c5f3ff" />
        <circle cx="480" cy="80" r="6" fill="#c5f3ff" />
        <circle cx="460" cy="340" r="6" fill="#1f9ade" />
        <circle cx="360" cy="260" r="10" stroke="#1f9ade" strokeWidth="2" />
        <circle cx="320" cy="380" r="6" fill="#6dcae9" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-52">
        <div className="max-w-3xl">
          <Reveal>
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-skysea/40 bg-upblue/20 px-4 py-1.5 text-xs font-semibold text-skyice sm:text-sm">
              <Sparkles className="h-4 w-4 text-skysea" aria-hidden="true" />
              {ORG.affiliation}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Conduct.{" "}
              <span className="bg-gradient-to-r from-skyice via-skysea to-azure bg-clip-text text-transparent">
                Rectify.
              </span>{" "}
              Amplify.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 font-display text-xl font-semibold text-skysea sm:text-2xl">“{ORG.motto}”</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
              Since February 1994, <strong className="text-white">UP Circuit</strong> has powered the country&apos;s
              brightest electrical and electronics engineering minds — producing board topnotchers, microsatellite
              pioneers, and industry leaders. Partner with the premier EEE student organization of UP Diliman and plug
              your brand directly into the Philippines&apos; top engineering talent pipeline.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-upblue px-7 py-4 text-base font-semibold text-white shadow-glow transition-colors hover:bg-azure"
              >
                Partner With Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-skysea/50 bg-white/5 px-7 py-4 text-base font-semibold text-skyice backdrop-blur transition-colors hover:border-skysea hover:bg-white/10"
              >
                Explore Our Impact
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-steel">{stat.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                    {stat.unit ? <span className="ml-1 text-base font-semibold text-fog">{stat.unit}</span> : null}
                  </dd>
                  <dd className="text-sm text-fog">{stat.sub}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
