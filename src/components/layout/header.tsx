"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/books", label: "Books" },
  { href: "/writings", label: "Writings" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-4 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">

        {/* Logo & Tagline */}
        <div className="flex items-center gap-4 lg:gap-7">
          <Link href="/" className="flex flex-col items-center leading-none select-none group">
            <span className="font-heading text-sm lg:text-lg font-bold tracking-[0.25em] text-[var(--color-royal-deep)] uppercase transition-colors group-hover:text-[var(--color-gold)]">
              The
            </span>
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.15em] text-[var(--color-royal-deep)] uppercase -mt-0.5 transition-colors group-hover:text-[var(--color-gold)]">
              Rib
            </span>
            <span className="font-heading text-[0.5rem] lg:text-[0.62rem] font-semibold tracking-[0.35em] text-[var(--color-royal-deep)] uppercase mt-0.5 transition-colors group-hover:text-[var(--color-gold)]">
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

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[var(--color-gold)] after:transition-all after:duration-300 ${
                pathname === item.href
                  ? "text-[var(--color-royal-deep)] after:w-full"
                  : "text-gray-400 hover:text-[var(--color-royal-deep)] after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden lg:block">
            <Button variant="gold" size="sm" className="text-[0.65rem] tracking-[0.2em]">
              Let&apos;s Connect
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden relative w-10 h-10 flex items-center justify-center text-[var(--color-royal-deep)] hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-400 ${
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

        {/* Menu Panel */}
        <div
          className={`relative bg-white border-b border-gray-100 shadow-lg transition-all duration-400 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="container mx-auto px-6 py-6">
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className={mobileOpen ? "animate-fade-in-up" : ""}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center py-3.5 px-4 rounded-lg text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-[var(--color-ivory)] text-[var(--color-royal-deep)] border-l-3 border-[var(--color-gold)]"
                        : "text-gray-500 hover:bg-[var(--color-ivory)] hover:text-[var(--color-royal-deep)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="gold" className="w-full text-sm tracking-[0.15em]">
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
