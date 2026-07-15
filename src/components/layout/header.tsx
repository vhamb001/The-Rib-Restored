"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/writings", label: "Writings" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for header appearance changes
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-gray-100/40"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20 lg:h-[4.5rem]"
        }`}
      >
        {/* ─── Logo ─── */}
        <div className="flex items-center gap-3 lg:gap-5">
          <Link
            href="/"
            className="flex items-center gap-3 lg:gap-4 select-none group"
          >
            {/* Logo Image */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ${
                scrolled
                  ? "w-10 h-10 sm:w-11 sm:h-11"
                  : "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              }`}
            >
              <img
                src="/images/second.png"
                alt="The Rib Restored"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col items-center leading-none">
              <span
                className={`font-heading font-bold tracking-[0.25em] text-[var(--color-royal-deep)] uppercase transition-all duration-500 group-hover:text-[var(--color-gold)] ${
                  scrolled ? "text-[0.45rem] lg:text-[0.55rem]" : "text-[0.5rem] lg:text-[0.65rem]"
                }`}
              >
                The
              </span>
              <span
                className={`font-heading font-bold tracking-[0.15em] text-[var(--color-royal-deep)] uppercase -mt-0.5 transition-all duration-500 group-hover:text-[var(--color-gold)] ${
                  scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl lg:text-[1.65rem]"
                }`}
              >
                Rib
              </span>
              <span
                className={`font-heading font-semibold tracking-[0.35em] text-[var(--color-royal-deep)] uppercase mt-0.5 transition-all duration-500 group-hover:text-[var(--color-gold)] ${
                  scrolled ? "text-[0.3rem] lg:text-[0.38rem]" : "text-[0.35rem] lg:text-[0.42rem]"
                }`}
              >
                Restored
              </span>
            </div>
          </Link>

          {/* Tagline — visible on large screens only, hides when scrolled */}
          <div
            className={`hidden lg:flex flex-col justify-center border-l border-gray-200/60 pl-5 py-1 transition-all duration-500 ${
              scrolled
                ? "opacity-0 max-w-0 overflow-hidden pl-0 border-transparent"
                : "opacity-100 max-w-xs"
            }`}
          >
            <span className="font-script text-xl text-[var(--color-gold)] leading-none">
              Restored to Purpose.
            </span>
            <span className="font-sans text-[0.55rem] font-bold tracking-[0.22em] text-[var(--color-royal-deep)]/60 uppercase mt-1.5">
              Called to Impact.
            </span>
          </div>
        </div>

        {/* ─── Desktop Navigation ─── */}
        <nav className="hidden xl:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300
                after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-[1.5px] after:bg-[var(--color-gold)] after:transition-all after:duration-300
                ${
                  pathname === item.href
                    ? "text-[var(--color-royal-deep)] after:w-full"
                    : "text-gray-400 hover:text-[var(--color-royal-deep)] after:w-0 hover:after:w-full"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ─── Action Buttons ─── */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden lg:block">
            <Button
              variant="gold"
              size="sm"
              className="text-[0.6rem] tracking-[0.18em] rounded-full px-5"
            >
              Let&apos;s Connect
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden relative w-11 h-11 flex items-center justify-center text-[var(--color-royal-deep)] hover:bg-[var(--color-ivory)] rounded-full transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      <div
        className={`xl:hidden fixed inset-0 z-40 transition-all duration-400 ${
          scrolled ? "top-14 sm:top-16" : "top-16 sm:top-20"
        } ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel — full-width slide down */}
        <div
          className={`relative bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-xl transition-all duration-400 ease-out ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-6 py-6">
            <ul className="space-y-0.5">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{
                    animationDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                  }}
                  className={mobileOpen ? "animate-fade-in-up" : "opacity-0"}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center py-3.5 px-5 rounded-xl text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-[var(--color-ivory)] text-[var(--color-royal-deep)] border-l-[3px] border-[var(--color-gold)]"
                        : "text-gray-400 hover:bg-[var(--color-ivory)]/50 hover:text-[var(--color-royal-deep)]"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={`mt-6 pt-6 border-t border-gray-100 ${
                mobileOpen ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: mobileOpen ? `${navItems.length * 60}ms` : "0ms" }}
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="gold"
                  className="w-full text-sm tracking-[0.15em] rounded-xl h-12"
                >
                  Let&apos;s Connect
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
