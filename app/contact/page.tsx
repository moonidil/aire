"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Check } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3c0 2.5 2 4.5 4.5 4.5" />
    </svg>
  );
}

import Reveal from "@/components/Reveal";

// TODO: Replace with real Formspree form ID once she signs up at https://formspree.io
// Instructions: create a free account → new form → copy the form ID (looks like "xyzabc12")
// → paste it here, done. Submissions will email her automatically.
const FORMSPREE_ID = "xeebpglb";

// TODO: Fill these in with her real contact details
const CONTACTS = [
  { icon: Mail, label: "Email", value: "hello@airerealestates.com", href: "mailto:hello@airerealestates.com" },
  { icon: Phone, label: "Phone", value: "+44 -", href: "tel:+442000000000" },
  { icon: InstagramIcon, label: "Instagram", value: "@aire_real_estates", href: "https://instagram.com/aire_real_estates" },
  { icon: TikTokIcon, label: "TikTok", value: "@aire_real_estates", href: "https://tiktok.com/@airerealestates" },
  { icon: MapPin, label: "Location", value: "Central London, UK", href: null },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            CONTACT
          </p>
          <h1
            style={{ fontFamily: "var(--font-instrument)" }}
            className="mt-6 max-w-4xl text-[12vw] font-normal leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
          >
            Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-ink/60">
            Whether you&apos;re an owner exploring management or looking for a
            place to stay — send us a note and we&apos;ll be in touch within
            one business day.
          </p>
        </Reveal>
      </section>

      {/* Form + Contact details */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Enquiry form */}
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              SEND AN ENQUIRY
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-5 text-3xl leading-tight text-ink sm:text-[2.25rem]"
            >
              Tell us a bit about you.
            </h2>

            {status === "sent" ? (
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-panel p-8">
                <Check size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p style={{ fontFamily: "var(--font-instrument)" }} className="text-xl text-ink">
                    Thank you — message received.
                  </p>
                  <p className="mt-2 font-sans text-sm text-ink/60">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <SelectField
                    label="I'm..."
                    name="enquiry_type"
                    required
                    options={[
                      "A property owner",
                      "Looking to rent",
                      "General enquiry",
                    ]}
                  />
                </div>
                <TextareaField label="Message" name="message" required />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] tracking-wide text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <ArrowUpRight size={14} strokeWidth={1.75} />
                  </button>
                  {status === "error" && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-red-700/80">
                      Something went wrong — please email us directly
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>

          {/* Contact details */}
          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              OR REACH US DIRECTLY
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-5 text-3xl leading-tight text-ink sm:text-[2.25rem]"
            >
              Prefer another channel?
            </h2>

            <ul className="mt-10 divide-y divide-line border-y border-line">
              {CONTACTS.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-center gap-5 py-5">
                    <Icon size={18} strokeWidth={1.5} className="shrink-0 text-ink/50" />
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                        {c.label}
                      </p>
                      <p className="mt-1 font-sans text-[15px] text-ink">
                        {c.value}
                      </p>
                    </div>
                    {c.href && (
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                      />
                    )}
                  </div>
                );

                const href = c.href;
                return (
                  <li key={c.label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group block transition-colors hover:bg-ink/[0.02]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 font-sans text-sm leading-relaxed text-ink/55">
              We aim to respond to every enquiry within one business day.
              Monday to Friday, 9am–6pm.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------- Field primitives ---------- */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full border-0 border-b border-line bg-transparent py-2.5 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-ink"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 block w-full appearance-none border-0 border-b border-line bg-transparent py-2.5 font-sans text-[15px] text-ink outline-none transition-colors focus:border-ink"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="mt-2 block w-full resize-none border-0 border-b border-line bg-transparent py-2.5 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-ink"
        placeholder="Tell us about the property, or what you're looking for..."
      />
    </label>
  );
}