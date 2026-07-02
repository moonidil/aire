import Reveal from "./Reveal";

const STATS = [
  { value: "5–7", unit: "days", label: "to relaunch a listing" },
  { value: "20", unit: "min", label: "free property audit call" },
  { value: "100", unit: "%", label: "guest communication handled" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="flex items-baseline gap-2 px-2 py-10 sm:justify-center sm:px-8">
                <span className="font-serif text-4xl text-ink">{stat.value}</span>
                <span className="font-sans text-sm text-accent">{stat.unit}</span>
                <span className="ml-2 font-sans text-sm text-ink/55">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
