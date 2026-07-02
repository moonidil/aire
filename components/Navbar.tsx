"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/to-rent", label: "To Rent" },
  { href: "/services", label: "Services" },
  { href: "/for-owners", label: "For Owners" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(13,27,42,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-sans text-[13px] font-medium tracking-wide text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-ink/15 px-5 py-2.5 font-sans text-[13px] font-medium tracking-wide text-ink transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Enquire
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`overflow-hidden bg-bg transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-sans text-sm font-medium text-ink/80 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 w-fit rounded-full border border-ink/15 px-5 py-2.5 font-sans text-sm font-medium text-ink"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
