import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONCERNS = [
  {
    problem: "Guest messages at 11pm",
    answer: "We handle all guest communication before, during and after every stay. You are never disturbed.",
  },
  {
    problem: "Unreliable cleaning",
    answer: "We coordinate and quality-check your cleaner after every single stay. Standards are non-negotiable.",
  },
  {
    problem: "No visibility on earnings",
    answer: "A clear monthly report lands in your inbox every month: occupancy, revenue, reviews and next steps.",
  },
  {
    problem: "No one picks up",
    answer: "One point of contact, always. We pick up, respond and resolve, you are never left chasing anyone.",
  },
  {
    problem: "Trusting someone with the property",
    answer: "We are selective about what we take on because we only manage properties we can genuinely deliver results for.",
  },
  {
    problem: "Underperforming listing",
    answer: "We rewrite, reprice and relaunch every property we manage. Most see improved performance within the first month.",
  },
];

const MONEY_STEPS = [
  {
    n: "01",
    title: "Guest pays the platform",
    copy: "Guests book and pay through Airbnb or Booking.com as normal. Nothing changes for them.",
  },
  {
    n: "02",
    title: "Platform pays you directly",
    copy: "Your income goes straight to your bank account. We never hold or touch your booking revenue.",
  },
  {
    n: "03",
    title: "We invoice our fee separately",
    copy: "At month end, we send a clear invoice for our management fee. No hidden charges, no surprises.",
  },
];

export default function ForOwnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            FOR OWNERS
          </p>
          <h1
            style={{ fontFamily: "var(--font-instrument)" }}
            className="mt-6 max-w-4xl text-[12vw] font-normal leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
          >
            Property management,
            <br />
            done <span style={{ fontFamily: "var(--font-instrument)" }} className="italic text-[#6B8CAE]">properly</span>.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/60">
            We only take on properties we can genuinely deliver results for.
            When we do, we run them end to end so owners get the income
            without the day-to-day.
          </p>
        </Reveal>
      </section>

      {/* Concerns / answers grid */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <Reveal>
          <div className="border-b border-line pb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              WHY OWNERS COME TO US
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-4 max-w-2xl text-3xl leading-tight text-ink sm:text-[2.5rem]"
            >
              The problems we quietly solve.
            </h2>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CONCERNS.map((c, i) => (
            <Reveal key={c.problem} delay={i * 80}>
              <div className="border-b border-line py-10 md:pr-10 md:[&:nth-child(2n)]:pl-10 md:[&:nth-child(2n)]:border-l lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pl-10 lg:[&:nth-child(3n+2)]:pl-10 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n)]:border-l">
                <h3
                  style={{ fontFamily: "var(--font-instrument)" }}
                  className="text-2xl leading-tight text-ink"
                >
                  {c.problem}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink/60">
                  {c.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How the money works */}
      <section className="bg-ink py-28 text-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/50">
              TRANSPARENCY
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument)" }}
              className="mt-4 max-w-xl text-4xl leading-tight sm:text-[2.75rem]"
            >
              How the money works.
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-bg/60">
              Your booking revenue always goes to your bank account first. We
              invoice our fee separately, at month end.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {MONEY_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t border-bg/15 pt-6">
                  <span className="font-mono text-xs text-bg/50">{step.n}</span>
                  <h3
                    style={{ fontFamily: "var(--font-instrument)" }}
                    className="mt-3 text-xl leading-snug text-bg"
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-bg/55">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                READY WHEN YOU ARE
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
                differently.
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