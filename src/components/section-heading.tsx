import Reveal from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", dark = false }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? "text-skysea" : "text-upblue"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-fog" : "text-ink/70"}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
