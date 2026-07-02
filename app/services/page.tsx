import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const PACKAGES = [
  {
    kind: "ONE-OFF SERVICE",
    name: "Listing Setup",
    description:
      "For owners who want a professionally optimised listing but prefer to manage it themselves. We fix everything and hand it back in the best shape it has ever been in.",
    price: "From £350",
    priceNote: "One-off fee, based on property size",
    includes: [
      "Full listing rewrite — title, description and amenities",
      "Photo guidance and review",
      "Pricing strategy setup",
      "Guest messaging templates",
      "Check-in instruction setup",
      "One-time property audit report",
    ],
    cta: "Enquire about Listing Setup",
  },
  {
    kind: "ONGOING SERVICE",
    name: "Full Management",
    description:
      "For owners who want to hand everything over. We manage your property end to end — from the first guest enquiry to the monthly owner report.",
    price: "From £400 setup",
    priceNote: "Plus a share of booking revenue — tailored to your property",
    includes: [
      "Everything in Listing Setup",
      "Calendar and pricing management",
      "Guest messaging — before, during and after every stay",
      "Cleaner coordination and quality checks",
      "Check-in and check-out support",
      "Maintenance coordination and issue handling",
      "Monthly owner report — occupancy, revenue, reviews",
    ],
    cta: "Enquire about Full Management",
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            SERVICES
          </p>
          <h1
            style={{ fontFamily: "var(--font-instrument)" }}
            className="mt-6 max-w-4xl text-[12vw] font-normal leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
          >
            Two ways to work
            <br />
            with <span style={{ fontFamily: "var(--font-instrument)" }} className="italic text-[#6B8CAE]">Aire</span>.
          </h1>
          <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-ink/60">
            Choose the level of support that fits where you are right now. Both
            start with a free, no-commitment audit call — so you know exactly
            what you&apos;re signing up for.
          </p>
        </Reveal>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 sm:p-10 ${
                  pkg.featured
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-panel text-ink"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                    pkg.featured ? "text-bg/60" : "text-accent"
                  }`}
                >
                  {pkg.kind}
                </p>

                <h2
                  style={{ fontFamily: "var(--font-instrument)" }}
                  className={`mt-5 text-4xl leading-tight sm:text-[2.75rem] ${
                    pkg.featured ? "text-bg" : "text-ink"
                  }`}
                >
                  {pkg.name}
                </h2>

                <p
                  className={`mt-5 max-w-md font-sans text-sm leading-relaxed ${
                    pkg.featured ? "text-bg/70" : "text-ink/60"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`mt-8 border-t pt-6 ${
                    pkg.featured ? "border-bg/15" : "border-line"
                  }`}
                >
                  <p
                    style={{ fontFamily: "var(--font-instrument)" }}
                    className={`text-3xl ${pkg.featured ? "text-bg" : "text-ink"}`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={`mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] ${
                      pkg.featured ? "text-bg/55" : "text-ink/45"
                    }`}
                  >
                    {pkg.priceNote}
                  </p>
                </div>

                <div
                  className={`mt-8 border-t pt-6 ${
                    pkg.featured ? "border-bg/15" : "border-line"
                  }`}
                >
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                      pkg.featured ? "text-bg/55" : "text-ink/45"
                    }`}
                  >
                    WHAT&apos;S INCLUDED
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={15}
                          strokeWidth={1.75}
                          className={`mt-1 shrink-0 ${
                            pkg.featured ? "text-bg/70" : "text-accent"
                          }`}
                        />
                        <span
                          className={`font-sans text-[14px] leading-relaxed ${
                            pkg.featured ? "text-bg/85" : "text-ink/75"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-mono text-[12px] tracking-wide transition-all hover:-translate-y-0.5 ${
                    pkg.featured
                      ? "bg-bg text-ink"
                      : "border border-ink/20 text-ink hover:border-ink/50"
                  }`}
                >
                  {pkg.cta}
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-t border-line pt-14 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                NOT SURE WHICH FITS?
              </p>
              <h2
                style={{ fontFamily: "var(--font-instrument)" }}
                className="mt-5 text-3xl leading-tight text-ink sm:text-[2.25rem]"
              >
                Start with a free 20-minute audit call.
              </h2>
              <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-ink/60">
                Tell us about the property. We&apos;ll ask a few straightforward
                questions and give you an honest view of what we&apos;d do
                differently. No obligation, no pressure.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] tracking-wide text-bg transition-transform hover:-translate-y-0.5"
            >
              Book the call
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}