import { Button } from "@/components/ui/button";
import { Mail, Globe, MessageCircle, AtSign } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-gold)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Reach Out</span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            Let&apos;s Connect
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            I&apos;d love to hear from you. Whether it&apos;s a question, collaboration, opportunity, or a simple greeting.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Info Side */}
              <div className="md:col-span-2 bg-[var(--color-royal-deep)] p-7 sm:p-10 lg:p-12 text-white flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 sm:mb-10">
                    <span className="font-script text-2xl sm:text-3xl text-[var(--color-gold)] block mb-1">Hello</span>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">Let&apos;s Connect</h2>
                    <div className="w-10 h-[2px] bg-[var(--color-gold)] mt-4" />
                  </div>
                  <p className="text-white/50 text-sm leading-[1.7] mb-8 sm:mb-10">
                    I&apos;d love to hear from you. Whether it&apos;s a question, collaboration, opportunity, or a simple greeting — reach out below.
                  </p>
                  <div className="mt-auto space-y-6 sm:space-y-8">
                    <div>
                      <h4 className="font-heading text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase font-semibold mb-2">Email</h4>
                      <a href="mailto:hello@theribrestored.com" className="text-white/60 text-sm hover:text-[var(--color-gold)] transition-colors duration-300 break-all">
                        hello@theribrestored.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm tracking-[0.15em] text-[var(--color-gold)] uppercase font-semibold mb-3">Social</h4>
                      <div className="flex gap-3">
                        {[Globe, MessageCircle, AtSign].map((Icon, i) => (
                          <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-white/5 transition-all duration-300">
                            <Icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="md:col-span-3 p-7 sm:p-10 lg:p-14">
                <form className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold tracking-wider text-gray-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-[var(--color-ivory)] text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold tracking-wider text-gray-400 uppercase">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-[var(--color-ivory)] text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold tracking-wider text-gray-400 uppercase">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-[var(--color-ivory)] text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold tracking-wider text-gray-400 uppercase">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-[var(--color-ivory)] text-sm outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
