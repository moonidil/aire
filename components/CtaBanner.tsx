import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <Reveal>
        <div className="grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-panel sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <Link
            href="/for-owners"
            className="group flex flex-col justify-between gap-10 p-10 transition-colors hover:bg-ink/[0.025] sm:p-14"
          >
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-accent">
              FOR OWNERS
            </span>
            <div className="flex items-end justify-between gap-6">
              <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Get a free rental
                <br /> valuation.
              </h3>
              <ArrowUpRight
                size={26}
                strokeWidth={1.25}
                className="shrink-0 text-ink/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
              />
            </div>
          </Link>

          <Link
            href="/to-rent"
            className="group flex flex-col justify-between gap-10 p-10 transition-colors hover:bg-ink/[0.025] sm:p-14"
          >
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-accent">
              FOR RENTERS
            </span>
            <div className="flex items-end justify-between gap-6">
              <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Browse available
                <br /> apartments.
              </h3>
              <ArrowUpRight
                size={26}
                strokeWidth={1.25}
                className="shrink-0 text-ink/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
              />
            </div>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
