import Reveal from "@/components/reveal";
import { ORG } from "@/lib/site";
import { CheckCircle2, ExternalLink } from "lucide-react";

const FACTS = [
  "Official student organization of the EEEI, UP Diliman",
  "Established February 1994 — 30+ years of unbroken service",
  "Home of SquEEEze, The E-Waste Project, and InteraCKT",
];

const SNAPSHOT: { label: string; value: string }[] = [
  { label: "Affiliation", value: "EEEI, UP Diliman" },
  { label: "Slogan", value: "Conduct, Rectify, Amplify" },
  { label: "Motto", value: "Dare to Be; Be Different" },
  { label: "Official Website", value: "upcircuit.org" },
  { label: "Flagship Projects", value: "SquEEEze · E-Waste · InteraCKT" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-upblue">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The circuit that connects Filipino engineering excellence.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              <strong className="text-ink">{ORG.name} (UP Circuit / UP CKT)</strong> is the premier academic
              organization of the {ORG.affiliation.split(",")[0]}. For over three decades, we have united EEE students,
              alumni, and industry partners around one current: <em>Conduct, Rectify, Amplify</em> — conduct talent,
              rectify problems, and amplify impact.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              We live our motto — <em className="font-semibold">“{ORG.motto}”</em> — through three flagship programs
              that span national competitions, environmental action, and community integration, and through a legacy of
              Oblation Scholars, Latin honor graduates, and board topnotchers now leading the industry.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-medium text-ink/80">
              {FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-upblue" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Organization snapshot card */}
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-skyice via-mist to-fog opacity-70 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl border border-fog bg-white p-7 shadow-card sm:p-9">
                <div className="flex items-center justify-between border-b border-mist pb-5">
                  <div>
                    <p className="font-display text-xl font-bold text-ink">UP Circuit</p>
                    <p className="text-sm font-semibold text-upblue">University of the Philippines Diliman</p>
                  </div>
                  <span className="rounded-xl bg-upindigo px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-skyice">
                    Since 1994
                  </span>
                </div>
                <dl className="mt-6 grid grid-cols-1 gap-4 text-sm">
                  {SNAPSHOT.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 rounded-xl bg-mist/70 px-4 py-3">
                      <dt className="font-semibold text-ink/70">{row.label}</dt>
                      <dd className="text-right font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={ORG.website}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-upblue/30 bg-skyice/50 px-5 py-3 text-sm font-semibold text-upblue transition-colors hover:bg-skyice"
                >
                  Visit the official UP Circuit website
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
