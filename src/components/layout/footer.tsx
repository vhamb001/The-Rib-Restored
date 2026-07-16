"use client";

import Link from "next/link";
import { ArrowUp, Home } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import siteData from "../../../content/data/site.json";
import footerData from "../../../content/data/footer.json";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-royal-darkest)] text-white relative overflow-hidden">
      {/* Decorative gold line at top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-royal)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column */}
          <FadeIn className="sm:col-span-2 lg:col-span-3 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-4 group"
            >
              <div className="relative w-14 h-14 overflow-hidden bg-white/5 rounded-lg p-1">
                <img
                  src={footerData.brand.logoImage}
                  alt={footerData.brand.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-sm font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                  The
                </span>
                <span className="font-heading text-3xl font-bold tracking-[0.15em] text-[var(--color-gold)] uppercase -mt-0.5">
                  Rib
                </span>
                <span className="font-heading text-[0.5rem] font-semibold tracking-[0.35em] text-[var(--color-gold)] uppercase mt-0.5">
                  Restored
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {footerData.brand.tagline}
              <br />
              <span className="text-white/25 text-xs mt-1 block">
                {footerData.brand.taglineSecondary}
              </span>
            </p>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-xs tracking-[0.18em] text-[var(--color-gold)] uppercase mb-5 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-sm hover:text-[var(--color-gold)] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[var(--color-gold)] transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Ministry Column */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-xs tracking-[0.18em] text-[var(--color-gold)] uppercase mb-5 sm:mb-6">
              {footerData.ministry.heading}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-gold)] shrink-0 mt-0.5">
                  <Home className="w-3.5 h-3.5" />
                </div>
                <div>
                  <a
                    href={footerData.ministry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm font-medium hover:text-[var(--color-gold)] transition-colors duration-300 block leading-snug"
                  >
                    {footerData.ministry.name}
                  </a>
                  <span className="text-white/25 text-[0.65rem] italic block mt-0.5">
                    {footerData.ministry.fullName}
                  </span>
                </div>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                {footerData.ministry.description}
              </p>
            </div>
          </FadeIn>

          {/* Stay Connected */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-xs tracking-[0.18em] text-[var(--color-gold)] uppercase mb-5 sm:mb-6">
              {footerData.stayConnected.heading}
            </h4>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              {footerData.stayConnected.description}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={footerData.stayConnected.emailPlaceholder}
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-[var(--color-gold)] focus:bg-white/8 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-soft-gold)] text-white px-5 py-3 rounded-r-lg text-[0.65rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 shrink-0 hover:shadow-[0_4px_16px_rgba(200,151,62,0.4)]"
              >
                {footerData.stayConnected.submitText}
              </button>
            </form>
          </FadeIn>

          {/* Follow Me */}
          <FadeIn delay={0.3} className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-xs tracking-[0.18em] text-[var(--color-gold)] uppercase mb-5 sm:mb-6">
              {footerData.followMe.heading}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {siteData.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 hover:shadow-[0_0_12px_rgba(200,151,62,0.15)] transition-all duration-300 hover:scale-110"
                  aria-label={social.fullLabel || social.label}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={social.filled ? "currentColor" : "none"}
                    stroke={social.filled ? "none" : "currentColor"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      social.scale !== 1
                        ? { transform: `scale(${social.scale})` }
                        : undefined
                    }
                  >
                    <path d={social.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/25 text-xs tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteData.copyrightTemplate}
          </p>

          <div className="flex items-center gap-4">
            {/* Diamond ornament */}
            <div className="flex items-center gap-2 text-[var(--color-gold)]/30">
              <div className="w-4 h-px bg-[var(--color-gold)]/20" />
              <span className="text-[0.4rem]">◆</span>
              <span className="text-white/20 text-[0.65rem]">
                {siteData.copyrightMotto}
              </span>
              <span className="text-[0.4rem]">◆</span>
              <div className="w-4 h-px bg-[var(--color-gold)]/20" />
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 hover:shadow-[0_0_12px_rgba(200,151,62,0.15)] transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
