import { Activity, BookOpen, GraduationCap, Satellite, Trophy } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ACHIEVEMENTS, ALUMNI, MILESTONES, TOPNOTCHERS } from "@/lib/site";

export default function Legacy() {
  return (
    <section id="legacy" className="scroll-mt-28 bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="30+ Years in the Making"
          title="A Legacy of Excellence"
          description="From founding faculty to microsatellite pioneers and board topnotchers — UP Circuit's alumni define Filipino engineering leadership."
        />

        {/* Prominent alumni & faculty leaders */}
        <Reveal className="mt-14">
          <h3 className="font-display text-2xl font-bold text-ink">Prominent Notable Alumni &amp; Faculty Leaders</h3>
        </Reveal>
        <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ALUMNI.map((person, i) => (
            <Reveal key={person.name} delay={i * 80}>
              <article
                className={`h-full rounded-3xl border p-7 shadow-card transition-transform hover:-translate-y-1.5 ${
                  person.dark ? "border-upindigo/30 bg-ink" : "border-fog bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-xl font-bold ${
                      person.gradient
                    } ${person.dark ? "text-white" : "text-skyice"}`}
                    aria-hidden="true"
                  >
                    {person.initials}
                  </span>
                  <div>
                    <h4 className={`font-display text-lg font-bold leading-tight ${person.dark ? "text-white" : "text-ink"}`}>
                      {person.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-upblue">{person.role}</p>
                  </div>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${person.dark ? "text-fog" : "text-ink/70"}`}>
                  {person.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Board topnotchers */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-bold text-ink">Selected Board Topnotchers</h3>
          <p className="mt-2 max-w-3xl text-ink/70">
            A track record of Top 1 examinees across the Electrical Engineering (EE), Electronics Engineering (ECE), and
            Electronics Technician (ECT) licensure exams.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOPNOTCHERS.map((person, i) => (
            <Reveal key={person.name} delay={i * 60}>
              <div
                className={`flex items-center gap-4 rounded-2xl border p-5 ${
                  person.highlight ? "border-upblue/40 bg-skyice/40" : "border-fog bg-white"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-upblue font-display text-lg font-bold text-skyice">
                  #1
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{person.name}</p>
                  <p className="text-sm text-ink/70">{person.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Academic milestones & research awards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-fog bg-white p-8 shadow-card">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <GraduationCap className="h-6 w-6 text-upindigo" aria-hidden="true" />
                Academic Milestones
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <BookOpen className="mt-0.5 h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{ACHIEVEMENTS[0].title}</p>
                    <p className="mt-1 text-sm text-ink/70">{ACHIEVEMENTS[0].detail}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Trophy className="mt-0.5 h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{ACHIEVEMENTS[1].title}</p>
                    <p className="mt-1 text-sm text-ink/70">{ACHIEVEMENTS[1].detail}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-fog bg-white p-8 shadow-card">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <Activity className="h-6 w-6 text-upindigo" aria-hidden="true" />
                Award-Winning Research
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <Trophy className="mt-0.5 h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{ACHIEVEMENTS[2].title}</p>
                    <p className="mt-1 text-sm text-ink/70">{ACHIEVEMENTS[2].detail}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Satellite className="mt-0.5 h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{ACHIEVEMENTS[3].title}</p>
                    <p className="mt-1 text-sm text-ink/70">{ACHIEVEMENTS[3].detail}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Milestones timeline */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-bold text-ink">Key Milestones</h3>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m) => (
              <li key={m.year} className="rounded-2xl border-l-4 border-upblue bg-white p-5 shadow-sm">
                <p className="font-display text-2xl font-bold text-upblue">{m.year}</p>
                <p className="mt-1 font-semibold text-ink">{m.title}</p>
                <p className="mt-1 text-sm text-ink/70">{m.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
