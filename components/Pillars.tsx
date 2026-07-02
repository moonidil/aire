import { KeyRound, MessageCircleMore, ClipboardList } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: KeyRound,
    title: "Listing & setup",
    copy: "Professional listing, pricing strategy and channel setup across the platforms that convert.",
  },
  {
    icon: MessageCircleMore,
    title: "Guest communication",
    copy: "Enquiries, check-in and support handled around the clock, in your voice.",
  },
  {
    icon: ClipboardList,
    title: "Cleaning & reporting",
    copy: "Coordinated turnovers and a clear monthly report — income in, costs out.",
  },
];

export default function Pillars() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <Reveal>
        <p className="font-sans text-xs font-medium tracking-[0.3em] text-accent">
          WHAT WE DO
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]">
          Premium short-let management, end to end.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 120} className="bg-panel">
            <div className="group h-full px-8 py-10 transition-colors hover:bg-ink/[0.025]">
              <pillar.icon
                size={22}
                strokeWidth={1.5}
                className="text-ink/70"
              />
              <h3 className="mt-6 font-serif text-xl text-ink">{pillar.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/60">
                {pillar.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
