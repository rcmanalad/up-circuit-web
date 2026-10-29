import type { LucideIcon } from "lucide-react";
import { ArrowRight, Flag, Megaphone, Recycle, Users } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import InquiryLink from "@/components/inquiry-link";

type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  accent: string;
  cta: { label: string; href: string; category?: "Recruitment & Talks" };
};

const VALUE_PROPS: ValueProp[] = [
  {
    icon: Users,
    title: "Direct Access to Top EEE Talent",
    description: (
      <>
        Build recruitment pipelines straight into top honors graduates, researchers, and student leaders of the EEEI —
        the country&apos;s most sought-after engineering talent.
      </>
    ),
    accent: "from-upblue to-azure",
    cta: { label: "Book a recruitment talk", href: "#contact", category: "Recruitment & Talks" },
  },
  {
    icon: Megaphone,
    title: "National Brand Visibility",
    description: (
      <>
        Put your brand in front of a nationwide audience of top high school and university engineering students through{" "}
        <strong>SquEEEze</strong>, the National EEE Competition and Convention.
      </>
    ),
    accent: "from-azure to-skysea",
    cta: { label: "See SquEEEze", href: "#project-squeeeze" },
  },
  {
    icon: Recycle,
    title: "ESG & Environmental Alignment",
    description: (
      <>
        Anchor your CSR/ESG agenda in tangible impact with <strong>The E-Waste Project</strong> — responsible e-waste
        recycling and nationwide community collection drives.
      </>
    ),
    accent: "from-upindigo to-upblue",
    cta: { label: "See The E-Waste Project", href: "#project-ewaste" },
  },
  {
    icon: Flag,
    title: "Early Freshmen Touchpoint",
    description: (
      <>
        Be the first brand experience of incoming UP EEE freshmen, shiftees, and transferees through{" "}
        <strong>InteraCKT</strong> — their official welcoming tour and community integration event.
      </>
    ),
    accent: "from-skysea to-upindigo",
    cta: { label: "See InteraCKT", href: "#project-interackt" },
  },
];

export default function WhyPartner() {
  return (
    <section id="why-partner" className="scroll-mt-28 bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="For Corporate Partners"
          title="Why Partner With UP Circuit?"
          description="Four powerful ways your organization can plug into the country's premier EEE community — from recruitment pipelines to measurable ESG impact."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <Reveal key={prop.title} delay={i * 90}>
                <article className="value-card group relative overflow-hidden rounded-3xl border border-fog bg-white p-7">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${prop.accent}`} aria-hidden="true" />
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-skyice text-upblue">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{prop.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{prop.description}</p>
                  {prop.cta.category ? (
                    <InquiryLink
                      category={prop.cta.category}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-upblue transition-colors group-hover:text-azure"
                    >
                      {prop.cta.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </InquiryLink>
                  ) : (
                    <a
                      href={prop.cta.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-upblue transition-colors group-hover:text-azure"
                    >
                      {prop.cta.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
