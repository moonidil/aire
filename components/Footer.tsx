import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 font-sans text-sm leading-relaxed text-ink/60">
              Premium short-let property management for central London
              owners who want better results and less hassle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-ink/40">
                SITE
              </p>
              <ul className="mt-4 space-y-2.5 font-sans text-sm text-ink/70">
                <li><Link href="/to-rent" className="hover:text-accent">To Rent</Link></li>
                <li><Link href="/services" className="hover:text-accent">Services</Link></li>
                <li><Link href="/for-owners" className="hover:text-accent">For Owners</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-ink/40">
                COMPANY
              </p>
              <ul className="mt-4 space-y-2.5 font-sans text-sm text-ink/70">
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                <li><Link href="/" className="hover:text-accent">Home</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-ink/40">
                GET IN TOUCH
              </p>
              <ul className="mt-4 space-y-2.5 font-sans text-sm text-ink/70">
                <li>
                  <a href="mailto:hello@airerealestates.com" className="hover:text-accent">
                    hello@airerealestates.com
                  </a>
                </li>
                <li className="text-ink/50">London, UK</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-ink/40">
            © {new Date().getFullYear()} Aire Real Estates. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ink/40">London · Est. 2026</p>
        </div>
      </div>
    </footer>
  );
}
