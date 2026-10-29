import Image from "next/image";
import { Award, ExternalLink, Handshake, Package, Recycle, Star, Ticket, Trophy } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import InquiryLink from "@/components/inquiry-link";

function FacebookCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default function FlagshipProjects() {
  return (
    <section id="projects" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sponsorship Showcase"
          title="Our Flagship Projects"
          description="Three proven platforms to showcase your brand — each with its own audience, scale, and measurable impact."
        />

        {/* ---------- 1. The E-Waste Project ---------- */}
        <Reveal>
          <article
            id="project-ewaste"
            className="mt-14 scroll-mt-28 overflow-hidden rounded-3xl border border-fog bg-gradient-to-br from-mist via-white to-skyice/40 shadow-card"
          >
            <div className="grid lg:grid-cols-5">
              <div className="relative flex flex-col justify-between overflow-hidden bg-upindigo p-8 text-white sm:p-10 lg:col-span-2">
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-upblue/30 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-skyice">
                    Project 01 · ESG Flagship
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold">The E-Waste Project</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    Environmental sustainability through responsible electronics disposal. We educate communities about
                    e-waste hazards and organize collection drives that keep toxic electronics out of landfills.
                  </p>
                  <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-sm">
                    <strong className="block font-display text-2xl text-skyice">10,793 kg</strong>
                    <span className="text-fog">of e-waste collected in Year 12 alone</span>
                  </p>
                </div>
                <div className="relative mt-8 flex flex-wrap gap-3">
                  <InquiryLink
                    category="E-Waste Project Partnership"
                    className="inline-flex items-center gap-2 rounded-xl bg-skyice px-5 py-3 text-sm font-bold text-upindigo transition-colors hover:bg-white"
                  >
                    <Recycle className="h-4 w-4" aria-hidden="true" />
                    Sponsor E-Waste Project
                  </InquiryLink>
                  <FacebookCta href="https://facebook.com/ewasteproject" label="Visit Facebook Page" />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:col-span-3">
                <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64">
                  <Image
                    src="/projects/ewaste.jpg"
                    alt="The E-Waste Project community collection drive"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h4 className="mt-7 font-display text-lg font-bold text-ink">Award-Winning Track Record</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Award className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Parangal sa Samahang Mag-aaral 2023</p>
                      <p className="mt-0.5 text-sm text-ink/70">Ignacio B. Gimenez Award for Social Innovation Project Excellence</p>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Trophy className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Champion — Youth In-Charge Competition 2025</p>
                      <p className="mt-0.5 text-sm text-ink/70">College/University Category</p>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Star className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Best Service Project — Engineering Organization Excellence Awards (EOEA)</p>
                      <p className="mt-0.5 text-sm text-ink/70">Recognized for outstanding service and community impact</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-5 rounded-2xl bg-mist/70 p-5 text-sm leading-relaxed text-ink/75">
                  <p className="font-semibold text-ink">Sponsor perks:</p>
                  <p className="mt-1">
                    Co-branded collection hubs · naming rights on community drives · measurable kg-diverted impact
                    reporting for your ESG disclosures.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------- 2. SquEEEze ---------- */}
        <Reveal>
          <article
            id="project-squeeeze"
            className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-fog bg-gradient-to-br from-skyice/60 via-white to-mist shadow-card"
          >
            <div className="grid lg:grid-cols-5">
              <div className="relative order-1 flex flex-col justify-between overflow-hidden bg-upblue p-8 text-white sm:p-10 lg:order-2 lg:col-span-2">
                <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-azure/50 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-skyice">
                    Project 02 · National Flagship
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold">SquEEEze</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    The National Electrical and Electronics Engineering (EEE) Competition and Convention — established
                    in 1998, it has grown into the country&apos;s premier EEE event series.
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white/10 px-4 py-3">
                      <dt className="text-fog">Established</dt>
                      <dd className="mt-0.5 font-display text-xl font-bold text-skyice">1998</dd>
                    </div>
                    <div className="rounded-xl bg-white/10 px-4 py-3">
                      <dt className="text-fog">Reach</dt>
                      <dd className="mt-0.5 font-display text-xl font-bold text-skyice">Nationwide</dd>
                    </div>
                  </dl>
                </div>
                <div className="relative mt-8 flex flex-wrap gap-3">
                  <InquiryLink
                    category="Corporate Sponsorship"
                    className="inline-flex items-center gap-2 rounded-xl bg-skyice px-5 py-3 text-sm font-bold text-upblue transition-colors hover:bg-white"
                  >
                    <Ticket className="h-4 w-4" aria-hidden="true" />
                    Sponsor SquEEEze
                  </InquiryLink>
                  <FacebookCta href="https://facebook.com/upcircuit.squeeeze" label="Visit Facebook Page" />
                </div>
              </div>

              <div className="order-2 p-8 sm:p-10 lg:order-1 lg:col-span-3">
                <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64">
                  <Image
                    src="/projects/squeeeze.jpg"
                    alt="SquEEEze National EEE Competition and Convention"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h4 className="mt-7 font-display text-lg font-bold text-ink">Competitions &amp; Conventions Across the Country</h4>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  <li className="rounded-2xl border border-fog bg-white p-5">
                    <p className="font-semibold text-ink">Inter-High School Quiz Bees</p>
                    <p className="mt-1 text-sm text-ink/70">Discovering the country&apos;s next generation of engineering talent.</p>
                  </li>
                  <li className="rounded-2xl border border-fog bg-white p-5">
                    <p className="font-semibold text-ink">College Engineering Competitions</p>
                    <p className="mt-1 text-sm text-ink/70">Head-to-head challenges for premier university engineering students.</p>
                  </li>
                  <li className="rounded-2xl border border-fog bg-white p-5">
                    <p className="font-semibold text-ink">TechDecon</p>
                    <p className="mt-1 text-sm text-ink/70">The signature technical debate convention that sharpens engineering discourse.</p>
                  </li>
                  <li className="rounded-2xl border border-fog bg-white p-5">
                    <p className="font-semibold text-ink">Technical Conventions</p>
                    <p className="mt-1 text-sm text-ink/70">Industry talks, workshops, and demos held in venues across the Philippines.</p>
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-skyice/50 p-5 text-sm leading-relaxed text-ink/75">
                  <p className="font-semibold text-ink">Audience:</p>
                  <p className="mt-1">
                    High school STEM students and premier university engineering students nationwide — your future hires
                    and future customers, all in one place.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------- 3. InteraCKT ---------- */}
        <Reveal>
          <article
            id="project-interackt"
            className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-fog bg-gradient-to-br from-mist via-white to-skyice/40 shadow-card"
          >
            <div className="grid lg:grid-cols-5">
              <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-upindigo to-upblue p-8 text-white sm:p-10 lg:col-span-2">
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-skysea/30 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-skyice">
                    Project 03 · Community Flagship
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold">InteraCKT</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    The official UP Diliman EEE freshmen, shiftee, and transferee welcoming tour and community
                    integration event — where the newest batch of future Filipino engineers is welcomed into the EEEI
                    family.
                  </p>
                  <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-sm">
                    <strong className="block font-display text-xl text-skyice">First-mover advantage</strong>
                    <span className="text-fog">with every incoming EEE batch</span>
                  </p>
                </div>
                <div className="relative mt-8 flex flex-wrap gap-3">
                  <InquiryLink
                    category="Corporate Sponsorship"
                    className="inline-flex items-center gap-2 rounded-xl bg-skyice px-5 py-3 text-sm font-bold text-upindigo transition-colors hover:bg-white"
                  >
                    <Handshake className="h-4 w-4" aria-hidden="true" />
                    Partner for InteraCKT
                  </InquiryLink>
                  <FacebookCta href="https://facebook.com/upcircuit.interackt" label="Visit Facebook Page" />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:col-span-3">
                <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64">
                  <Image
                    src="/projects/interackt.jpg"
                    alt="InteraCKT freshmen welcoming tour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h4 className="mt-7 font-display text-lg font-bold text-ink">Sponsorship Value</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Star className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Direct Brand Placement</p>
                      <p className="mt-0.5 text-sm text-ink/70">
                        Your brand woven into the tour experience, event collaterals, and welcome kits.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Package className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Product Sampling</p>
                      <p className="mt-0.5 text-sm text-ink/70">
                        Put your products directly in the hands of hundreds of new engineering students.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-fog bg-white p-4">
                    <Handshake className="h-6 w-6 shrink-0 text-upblue" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink">Early Talent Engagement</p>
                      <p className="mt-0.5 text-sm text-ink/70">
                        Build brand loyalty with future engineers from day one of their UP journey.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
