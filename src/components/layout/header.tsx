import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-4 lg:px-8 h-20 lg:h-24 flex items-center justify-between">

        {/* Logo & Tagline */}
        <div className="flex items-center gap-5 lg:gap-7">
          <Link href="/" className="flex flex-col items-center leading-none select-none group">
            <span className="font-heading text-base lg:text-lg font-bold tracking-[0.25em] text-[var(--color-royal-deep)] uppercase transition-colors group-hover:text-[var(--color-gold)]">
              The
            </span>
            <span className="font-heading text-3xl lg:text-4xl font-bold tracking-[0.15em] text-[var(--color-royal-deep)] uppercase -mt-0.5 transition-colors group-hover:text-[var(--color-gold)]">
              Rib
            </span>
            <span className="font-heading text-[0.55rem] lg:text-[0.62rem] font-semibold tracking-[0.35em] text-[var(--color-royal-deep)] uppercase mt-0.5 transition-colors group-hover:text-[var(--color-gold)]">
              Restored
            </span>
          </Link>
          <div className="hidden lg:flex flex-col justify-center border-l border-gray-200 pl-6 py-1">
            <span className="font-script text-2xl text-[var(--color-gold)] leading-none">
              Restored to Purpose.
            </span>
            <span className="font-sans text-[0.6rem] font-bold tracking-[0.22em] text-[var(--color-royal-deep)] uppercase mt-2">
              Called to Impact.
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Me" },
            { href: "/books", label: "Books" },
            { href: "/writings", label: "Writings" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[0.7rem] font-bold tracking-[0.18em] text-gray-400 hover:text-[var(--color-royal-deep)] uppercase transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:block">
            <Button variant="gold" size="sm" className="text-[0.65rem] tracking-[0.2em]">
              Let&apos;s Connect
            </Button>
          </Link>
          <button className="xl:hidden text-[var(--color-royal-deep)] p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
