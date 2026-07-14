import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import contactData from "../../../content/data/contact.json";
import siteData from "../../../content/data/site.json";

export default function ContactPage() {
  // Filter social links for contact page (Instagram, Threads, Facebook, Substack)
  const contactSocials = siteData.socialLinks.filter(s =>
    ["Instagram", "Threads", "Facebook", "Substack"].includes(s.fullLabel)
  );

  return (
    <div className="bg-white min-h-screen">
      {/* ════════════════════════════════════════════
          1. HERO — Section Title Header
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-gray-100/35">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-gold)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <SectionHeader
              label={contactData.hero.sectionLabel}
              heading={contactData.hero.heading}
              description={contactData.hero.description}
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. CONTACT CONTENT — Info & Form Split View
          ════════════════════════════════════════════ */}
      <section className="section-padding-sm py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <div className="bg-white rounded-sm border border-gray-100/80 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Info Side (Royal Blue and Gold theme) */}
                <div className="md:col-span-2 bg-[var(--color-royal-deep)] p-8 sm:p-10 lg:p-12 text-white flex flex-col relative overflow-hidden">
                  {/* Subtle mesh background */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                  <div className="absolute bottom-[-10%] right-[-10%] w-60 h-60 bg-[var(--color-gold)]/10 rounded-full blur-[70px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10">
                      <span className="font-script text-3xl text-[var(--color-gold)] block mb-1">{contactData.sidebar.greeting}</span>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">{contactData.sidebar.heading}</h2>
                      <div className="w-10 h-px bg-[var(--color-gold)] mt-5" />
                    </div>

                    <p className="text-white/60 text-sm leading-[1.8] mb-10">
                      {contactData.sidebar.description}
                    </p>

                    <div className="mt-auto space-y-8">
                      <div>
                        <h4 className="font-heading text-xs tracking-[0.2em] text-[var(--color-gold)] uppercase font-bold mb-2.5">{contactData.sidebar.emailHeading}</h4>
                        <p className="text-white/80 text-sm font-medium italic">
                          {contactData.sidebar.emailText}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-heading text-xs tracking-[0.2em] text-[var(--color-gold)] uppercase font-bold mb-3.5">{contactData.sidebar.socialHeading}</h4>
                        <div className="flex flex-wrap gap-3">
                          {contactSocials.map((social) => (
                            <a
                              key={social.fullLabel}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all duration-300"
                              aria-label={social.fullLabel}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill={social.filled ? "currentColor" : "none"} stroke={social.filled ? "none" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d={social.svgPath} />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="md:col-span-3 p-8 sm:p-10 lg:p-14 relative">
                  {/* Subtle corner framing decorative markers */}
                  <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[var(--color-gold)]/25" />
                  <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[var(--color-gold)]/25" />

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-micro text-gray-400 font-bold tracking-wider uppercase">{contactData.form.nameLabel}</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-[var(--color-ivory)]/40 rounded-sm border border-gray-200/80 text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-micro text-gray-400 font-bold tracking-wider uppercase">{contactData.form.emailLabel}</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-[var(--color-ivory)]/40 rounded-sm border border-gray-200/80 text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-micro text-gray-400 font-bold tracking-wider uppercase">{contactData.form.subjectLabel}</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-[var(--color-ivory)]/40 rounded-sm border border-gray-200/80 text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white focus:shadow-sm transition-all duration-300 placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-micro text-gray-400 font-bold tracking-wider uppercase">{contactData.form.messageLabel}</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-[var(--color-ivory)]/40 rounded-sm border border-gray-200/80 text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white focus:shadow-sm transition-all duration-300 resize-none placeholder-gray-400"
                        required
                      />
                    </div>

                    <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-300">
                      {contactData.form.submitText}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
