import Link from "next/link";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const ink = variant === "light" ? "text-white" : "text-ink";
  const accent = variant === "light" ? "text-white/70" : "text-accent";

  return (
    <Link href="/" className="group inline-flex w-[8rem] flex-col leading-none select-none">
      <span
        className={`font-serif text-[1.25rem] tracking-[0.22em] ${ink} transition-opacity group-hover:opacity-80`}
      >
        AIRE
      </span>

      <span
        className={`mt-1.5 h-px w-full ${
          variant === "light" ? "bg-white/40" : "bg-accent"
        }`}
      />

      <span className={`mt-1.5 font-sans text-[9px] tracking-[0.34em] ${accent}`}>
        REAL ESTATES
      </span>
    </Link>
  );
}