import Link from "next/link";

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
              {/* Logo Image */}
              <div className="relative w-12 h-12 overflow-hidden bg-white/5 rounded-sm p-1">
                <img
                  src="/images/second logo .png"
                  alt="Logo"
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
              Restored to Purpose. Called to Impact.<br />
              Thank you for being here. You are part of the purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Home", "About Me", "Books", "Writings", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : item === "About Me" ? "/about" : `/${item.toLowerCase()}`}
                    className="text-white/50 text-sm hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              Stay Connected
            </h4>
            <p className="text-white/50 text-sm mb-4 sm:mb-5 leading-relaxed">
              Subscribe for updates on new books, writings, and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-sm px-3 sm:px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[var(--color-gold)] transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-soft-gold)] text-white px-4 sm:px-5 py-2.5 rounded-r-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Follow Me */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase mb-4 sm:mb-6">
              Follow Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "IG", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" },
                { label: "FB", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "X", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { label: "YT", path: "m22 8-6 4 6 4V8zM2 6h12v12H2z" },
                { label: "Spotify", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.8-9.4-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4.1-.9 7.6-.5 10.4 1.2.3.1.4.5.3.8zm1.2-2.7c-.2.4-.7.5-1 .3-2.9-1.8-6.6-2.2-10-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.9-1.2 8.1-.7 11.4 1.3.3.3.4.8.1 1.1zm.1-2.9c-3.4-2-8.1-2.2-11-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.4-1.2 8.6-1 12.5 1.3.5.3.6.9.3 1.4-.2.4-.7.6-1.2.3z", scale: 1 },
                { label: "Substack", path: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z", scale: 0.8 },
              ].map(({ label, path, scale }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all duration-300"
                  aria-label={label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={label === "Spotify" || label === "Substack" ? "currentColor" : "none"} stroke={label === "Spotify" || label === "Substack" ? "none" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={scale ? { transform: `scale(${scale})` } : undefined}>
                    <path d={path} />
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
            &copy; {new Date().getFullYear()} The Rib Restored by Shalaymah. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[var(--color-gold)]/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7z"/></svg>
            <span className="text-white/25 text-xs">Restored to Purpose</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
