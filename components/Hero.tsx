"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Skyline from "./Skyline";

export default function Hero() {
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!skylineRef.current) return;
      const y = window.scrollY;

      // Gentle parallax — background drifts slower than the page
      skylineRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg text-ink">
      {/* Blueprint grid overlay — barely-there architectural texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Skyline signature, parallax — fine black line-art, low opacity by design */}
      <div
        ref={skylineRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[235px] text-ink/35"
      >
        <Skyline className="h-full w-full" />
      </div>

      <div className="relative mx-auto w-full max-w-[52rem] px-6 pt-6 pb-28 lg:px-8">
        <p className="font-sans text-[10px] font-medium tracking-[0.32em] text-accent">
          LONDON · PREMIUM PROPERTY MANAGEMENT
        </p>

        <h1
          style={{ fontFamily: "var(--font-instrument)" }}
          className="mt-5 max-w-[42rem] text-[3rem] font-normal leading-[0.94] tracking-tight text-ink sm:text-[3.7rem] lg:text-[4.2rem] xl:text-[4.55rem]"
        >
          Your London property,
          <br />
          <span
            style={{ fontFamily: "var(--font-instrument)" }}
            className="italic text-[#6B8CAE]"
          >
            working harder
          </span>{" "}
          for you.
        </h1>

        <p className="mt-6 max-w-[29rem] font-sans text-[14px] leading-relaxed text-ink/60">
          Aire manages premium central London short-let apartments end to end,
          from listing to guest to monthly report, so owners get the income
          without the admin.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/for-owners"
            className="rounded-full bg-ink px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            I&apos;m an owner
          </Link>

          <Link
            href="/to-rent"
            className="rounded-full border border-ink/20 px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-ink transition-colors hover:border-ink/50"
          >
            Find a property
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/20 sm:flex">
        <span className="font-sans text-[10px] tracking-[0.25em]">SCROLL</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}