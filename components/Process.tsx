import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Free audit call", copy: "20 minutes, no commitment." },
  { n: "02", title: "Property review", copy: "We check everything before agreeing." },
  { n: "03", title: "Agreement signed", copy: "Clear contract, no surprises." },
  { n: "04", title: "Listing relaunched", copy: "Live within 5–7 days." },
  { n: "05", title: "We manage everything", copy: "Monthly reports, always." },
];

export default function Process() {
  return (
    <section className="bg-ink py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-sans text-xs font-medium tracking-[0.3em] text-accent-soft">
            THE PROCESS
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-[2.75rem]">
            Up and running in five steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="relative border-t border-white/15 pt-6">
                <span className="font-serif text-sm text-accent-soft/70">{step.n}</span>
                <h3 className="mt-3 font-serif text-lg leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
