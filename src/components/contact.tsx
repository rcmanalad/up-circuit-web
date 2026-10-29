"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ExternalLink, Mail, MapPin, Send, X } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import SocialIcon from "@/components/social-icon";
import { INQUIRY_CATEGORIES, ORG, SOCIALS, type InquiryCategory } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  organization: string;
  category: InquiryCategory | "";
  message: string;
};

const EMPTY_FORM: FormState = { name: "", email: "", organization: "", category: "", message: "" };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Listen for "pre-select category" requests from CTAs across the page.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<InquiryCategory>).detail;
      if (detail && (INQUIRY_CATEGORIES as readonly string[]).includes(detail)) {
        setForm((f) => ({ ...f, category: detail }));
      }
    };
    window.addEventListener("upckt:inquiry", handler);
    return () => window.removeEventListener("upckt:inquiry", handler);
  }, []);

  useEffect(() => {
    if (modalOpen) closeRef.current?.focus();
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: string[] = [];
    if (!form.name.trim()) next.push("Please enter your full name.");
    if (!form.email.trim() || !EMAIL_REGEX.test(form.email)) next.push("Please enter a valid work email address.");
    if (!form.category) next.push("Please select an inquiry category.");
    if (!form.message.trim()) next.push("Please tell us a little about your inquiry.");
    setErrors(next);
    if (next.length) return;

    setModalOpen(true);
  };

  const subject = `[${form.category || "General Inquiry"}] Partnership Inquiry from ${form.name}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    form.organization ? `Organization: ${form.organization}` : "",
    `Category: ${form.category}`,
    "",
    form.message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const mailtoHref = `mailto:${ORG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const inputClass =
    "w-full rounded-xl border border-fog bg-mist/40 px-4 py-3 text-ink placeholder-steel outline-none transition focus:border-upblue focus:bg-white focus:ring-2 focus:ring-skyice";

  return (
    <section id="contact" className="scroll-mt-28 bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact & Partnership Inquiries"
          title="Let's Build Something Electric Together"
          description="Tell us about your sponsorship, partnership, or recruitment goals — the UP Circuit team will get back to you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="rounded-3xl border border-fog bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-bold text-ink">Reach Us Directly</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skyice text-upblue">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Email</p>
                      <a href={`mailto:${ORG.email}`} className="break-all text-upblue hover:text-azure hover:underline">
                        {ORG.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skyice text-upblue">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Location</p>
                      {ORG.location.lines.map((line) => (
                        <p key={line} className="text-ink/70">
                          {line}
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-skyice text-upblue">
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Official Website</p>
                      <a href={ORG.website} target="_blank" rel="noopener" className="text-upblue hover:text-azure hover:underline">
                        www.upcircuit.org
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-fog bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-bold text-ink">Follow UP Circuit</h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 text-sm">
                  {SOCIALS.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-3 rounded-xl border border-fog px-4 py-3 font-medium text-ink transition-colors hover:border-upblue hover:bg-skyice/40"
                      >
                        <span className="text-upblue">
                          <SocialIcon kind={social.kind} className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-semibold">{social.label}</span>
                          <span className="block text-xs text-ink/60">{social.handle}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Inquiry form */}
          <Reveal className="lg:col-span-3" delay={120}>
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-fog bg-white p-7 shadow-card sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Full Name <span className="text-upblue">*</span>
                  </label>
                  <input
                    id="f-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Juan Dela Cruz"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Work Email <span className="text-upblue">*</span>
                  </label>
                  <input
                    id="f-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="f-org" className="mb-1.5 block text-sm font-semibold text-ink">
                  Company / Organization
                </label>
                <input
                  id="f-org"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Power Corporation"
                  value={form.organization}
                  onChange={(e) => update("organization", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="f-category" className="mb-1.5 block text-sm font-semibold text-ink">
                  Inquiry Category <span className="text-upblue">*</span>
                </label>
                <select
                  id="f-category"
                  required
                  value={form.category}
                  onChange={(e) => update("category", e.target.value as InquiryCategory | "")}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    Select a category…
                  </option>
                  {INQUIRY_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="f-message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Message <span className="text-upblue">*</span>
                </label>
                <textarea
                  id="f-message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals — sponsorship level, project of interest, timeline, and budget range (optional)…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {errors.length > 0 && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {errors.join(" ")}
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-upblue px-7 py-3.5 text-base font-bold text-white shadow-glow transition-colors hover:bg-azure"
                >
                  Send Partnership Inquiry
                  <Send className="h-5 w-5" aria-hidden="true" />
                </button>
                <p className="text-xs text-ink/60">
                  Inquiries are received at <span className="font-semibold text-ink/80">{ORG.email}</span>
                </p>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Map embed */}
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-fog shadow-card">
            <iframe
              title="Map — EEE Tambayan Complex, UP Diliman"
              src={ORG.mapEmbed}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-wrap items-center justify-between gap-3 bg-ink px-6 py-4 text-sm text-fog">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-skysea" aria-hidden="true" />
                {ORG.location.label}, Quezon City
              </p>
              <a href={ORG.mapLink} target="_blank" rel="noopener" className="font-semibold text-skyice hover:text-white hover:underline">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- Confirmation modal ---------- */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setModalOpen(false)} aria-hidden="true" />
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="bg-gradient-to-r from-upblue to-upindigo px-7 py-6 text-white">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Send className="h-7 w-7 text-skyice" aria-hidden="true" />
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close dialog"
                  className="rounded-lg p-1.5 transition-colors hover:bg-white/15"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <h3 id="modal-title" className="mt-4 font-display text-2xl font-bold">
                Inquiry Prepared! ⚡
              </h3>
              <p className="mt-1 text-sm text-skyice">One last step — open your email app to send it to our partnerships team.</p>
            </div>
            <div className="px-7 py-6">
              <dl className="space-y-2 rounded-2xl bg-mist/60 p-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold text-ink/60">Name</dt>
                  <dd className="text-right font-medium text-ink">{form.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold text-ink/60">Email</dt>
                  <dd className="text-right font-medium text-ink">{form.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold text-ink/60">Category</dt>
                  <dd className="text-right font-medium text-ink">{form.category}</dd>
                </div>
              </dl>
              <div className="mt-5 grid gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-upblue px-5 py-3.5 text-sm font-bold text-white shadow-glow transition-colors hover:bg-azure"
                >
                  Open Email App to Send
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="text-center text-xs text-ink/60">
                  Or email us directly at{" "}
                  <a href={`mailto:${ORG.email}`} className="font-semibold text-upblue hover:underline">
                    {ORG.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
