"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

// Same Formspree ID as the Contact page  enquiries land in the same inbox,
// but the enquiry_type field will say "Looking to rent" so she can tell them apart.
// TODO: replace with real ID (currently reads from Contact page's placeholder)
const FORMSPREE_ID = "xeebpglb";

const PROOF_POINTS = [
  {
    title: "Space and privacy",
    copy: "A full apartment. Living room, kitchen, proper bedroom. Room to breathe.",
  },
  {
    title: "Prime locations",
    copy: "Central, East & South West London. Everything within reach.",
  },
  {
    title: "One contact, always",
    copy: "A real person. Not a call centre. Someone who picks up.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Tell us what you need",
    copy: "Dates, party size, preferred area. The form takes two minutes.",
  },
  {
    n: "02",
    title: "We come back to you",
    copy: "Within one business day. Real options, not automated replies.",
  },
  {
    n: "03",
    title: "Confirm and arrive",
    copy: "Check-in instructions and a direct contact number, all sent before you travel.",
  },
];

const REASSURANCE = [
  "No booking fees at enquiry stage",
  "Professionally managed properties only",
  "One contact for the duration of your stay",
  "Response within one business day",
];

export default function ToRentPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("enquiry_type", "Looking to rent");

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
            CENTRAL LONDON · SHORT STAYS
          </p>
          <h1
            style={{ fontFamily: "var(--font-instrument)" }}
            className="mt-6 max-w-4xl text-[12vw] font-normal leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
          >
            A better way to
            <br />
            <span style={{ fontFamily: "var(--font-instrument)" }} className="italic text-[#6B8CAE]">stay</span> in London.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/60">
            Premium apartments in the heart of the city. No hotels. No
            compromises. Just a beautiful space to come home to.
          </p>
          <Link
            href="#enquire"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] tracking-wide text-bg transition-transform hover:-translate-y-0.5"
          >
            Enquire about a stay
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </Link>
        </Reveal>
      </section>

      {/* Why Aire */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <Reveal>
          <div className="border-t border-line pt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              WHY AIRE
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-5 max-w-2xl text-4xl leading-tight text-ink sm:text-[2.75rem]"
            >
              Not a hotel. Better than a hotel.
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/60">
              Hotels give you a room. Aire gives you a home. Our apartments
              offer space, privacy and comfort that no hotel room can match,
              with one point of contact who knows your property and picks up
              when it matters.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {PROOF_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="bg-panel">
              <div className="h-full px-8 py-10">
                <h3
                  style={{ fontFamily: "var(--font-instrument)" }}
                  className="text-xl text-ink"
                >
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/60">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <Reveal>
          <div className="border-t border-line pt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              HOW IT WORKS
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-5 max-w-xl text-4xl leading-tight text-ink sm:text-[2.75rem]"
            >
              Three steps to a stay.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="border-t border-line pt-6">
                <span className="font-mono text-xs text-accent">{step.n}</span>
                <h3
                  style={{ fontFamily: "var(--font-instrument)" }}
                  className="mt-3 text-xl leading-snug text-ink"
                >
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/60">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="mx-auto max-w-7xl px-6 pb-32 lg:px-10 scroll-mt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              ENQUIRY
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-5 text-3xl leading-tight text-ink sm:text-[2.5rem]"
            >
              Tell us what you&apos;re looking for.
            </h2>
            <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/60">
              No commitment, no booking fee, just a conversation.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {status === "sent" ? (
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-panel p-8">
                <Check size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p style={{ fontFamily: "var(--font-instrument)" }} className="text-xl text-ink">
                    Thank you, enquiry received.
                  </p>
                  <p className="mt-2 font-sans text-sm text-ink/60">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Full name" name="name" required />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" optional />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Arrival date" name="arrival" type="date" required />
                  <Field label="Departure date" name="departure" type="date" required />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Number of guests" name="guests" type="number" required />
                  <Field label="Bedrooms needed" name="bedrooms" type="number" optional />
                </div>
                <SelectField
                  label="Preferred area"
                  name="area"
                  optional
                  options={[
                    "No preference",
                    "South West",
                    "East",
                    "West",
                    "Central",
                  ]}
                />
                <TextareaField label="Anything else" name="notes" optional />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] tracking-wide text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? "Sending..." : "Send my enquiry"}
                    <ArrowUpRight size={14} strokeWidth={1.75} />
                  </button>
                  {status === "error" && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-red-700/80">
                      Something went wrong, please email us directly
                    </p>
                  )}
                </div>

                <p className="pt-2 font-sans text-xs leading-relaxed text-ink/45">
                  We respond within one business day. Your details are kept
                  confidential in line with our privacy policy.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-ink py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {REASSURANCE.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-6 shrink-0 bg-bg/40" />
                  <p className="font-sans text-sm leading-relaxed text-bg/85">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
  optional = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}{optional && <span className="ml-2 normal-case tracking-normal text-ink/35">(optional)</span>}
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
  optional = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}{optional && <span className="ml-2 normal-case tracking-normal text-ink/35">(optional)</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 block w-full appearance-none border-0 border-b border-line bg-transparent py-2.5 font-sans text-[15px] text-ink outline-none transition-colors focus:border-ink"
      >
        <option value="" disabled>Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required = false,
  optional = false,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
        {label}{optional && <span className="ml-2 normal-case tracking-normal text-ink/35">(optional)</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="mt-2 block w-full resize-none border-0 border-b border-line bg-transparent py-2.5 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-ink"
        placeholder="Any specific requirements, questions, or context we should know..."
      />
    </label>
  );
}