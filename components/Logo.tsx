import Link from "next/link";

/**
 * Text-set placeholder matching the existing "ARE" mark + "Aire Real Estates"
 * wordmark styling (spaced caps, hairline rule, tracked subtitle).
 *
 * TO SWAP IN THE REAL LOGO FILE:
 * 1. Drop the logo asset into /public/images/logo/ (SVG preferred)
 * 2. Replace the contents of this component with:
 *      <Image src="/images/logo/aire-logo.svg" alt="Aire Real Estates" width={140} height={48} />
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const ink = variant === "light" ? "text-white" : "text-ink";
  const accent = variant === "light" ? "text-white/70" : "text-accent";

  return (
    <Link href="/" className="group inline-flex flex-col leading-none select-none">
      <span
        className={`font-serif text-2xl tracking-[0.2em] ${ink} transition-opacity group-hover:opacity-80`}
      >
        AIRE
      </span>
      <span className={`mt-1.5 h-px w-full ${variant === "light" ? "bg-white/40" : "bg-accent"}`} />
      <span className={`mt-1.5 text-[10px] font-sans tracking-[0.35em] ${accent}`}>
        REAL ESTATES
      </span>
    </Link>
  );
}
