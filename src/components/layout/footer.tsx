import Link from "next/link";
import siteData from "../../../content/data/site.json";
import footerData from "../../../content/data/footer.json";

export function Footer() {
  return (
    <footer className="bg-[var(--color-royal-darkest)] text-white relative overflow-hidden">
      {/* Decorative gold line at top */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-12 h-12 overflow-hidden bg-white/5 rounded-sm p-1">
                <img
                  src={footerData.brand.logoImage}
                  alt={footerData.brand.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-lg font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">The</span>
                <span className="font-heading text-4xl font-bold tracking-[0.15em] text-[var(--color-gold)] uppercase -mt-0.5">Rib</span>
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.35em] text-[var(--color-gold)] uppercase mt-0.5">Restored</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {footerData.brand.tagline}<br />
              {footerData.brand.taglineSecondary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerData.quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              {footerData.stayConnected.heading}
            </h4>
            <p className="text-white/50 text-sm mb-4 sm:mb-5 leading-relaxed">
              {footerData.stayConnected.description}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={footerData.stayConnected.emailPlaceholder}
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-sm px-3 sm:px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[var(--color-gold)] transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-soft-gold)] text-white px-4 sm:px-5 py-2.5 rounded-r-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300 shrink-0"
              >
                {footerData.stayConnected.submitText}
              </button>
            </form>
          </div>

          {/* Follow Me */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              {footerData.followMe.heading}
            </h4>
            <div className="flex flex-wrap gap-3">
              {siteData.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={social.filled ? "currentColor" : "none"} stroke={social.filled ? "none" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={social.scale !== 1 ? { transform: `scale(${social.scale})` } : undefined}>
                    <path d={social.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-xs tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteData.copyrightTemplate}
          </p>
          <div className="flex items-center gap-2 text-[var(--color-gold)]/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7z"/></svg>
            <span className="text-white/25 text-xs">{siteData.copyrightMotto}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
