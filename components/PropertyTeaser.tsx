import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Placeholder property cards. Once real photography lands in
 * /public/images/properties/, replace each <PlaceholderFrame> with:
 *   <Image src="/images/properties/xxx.jpg" alt="..." fill className="object-cover" />
 * The card shell, ratio and hover treatment stay the same.
 */
const PROPERTIES = [
  { name: "Bankside Loft", area: "Southwark, SE1", price: "£2,450 / month" },
  { name: "The Atelier", area: "Fitzrovia, W1", price: "£3,100 / month" },
  { name: "Riverline Studio", area: "Wapping, E1W", price: "£1,980 / month" },
];

function PlaceholderFrame() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-black/[0.045] via-panel to-black/[0.02]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0D1B2A0d 1px, transparent 1px), linear-gradient(to bottom, #0D1B2A0d 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <ImageIcon size={22} strokeWidth={1.25} className="relative text-ink/25" />
    </div>
  );
}

export default function PropertyTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-sans text-xs font-medium tracking-[0.3em] text-accent">
            CURRENTLY LISTED
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]">
            A selection of managed homes.
          </h2>
        </div>
        <Link
          href="/to-rent"
          className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink/70 hover:text-accent"
        >
          View all properties
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {PROPERTIES.map((p, i) => (
          <Reveal key={p.name} delay={i * 110}>
            <Link href="/to-rent" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line">
                <PlaceholderFrame />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-ink">{p.name}</h3>
                  <p className="font-sans text-sm text-ink/50">{p.area}</p>
                </div>
                <p className="font-sans text-sm text-ink/70">{p.price}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
