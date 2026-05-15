import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Hammer, ArrowRight, Quote } from "lucide-react";

const pillars = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "My Heart",
    body: "To see the broken made whole and the lost finding their identity. My heart beats for restoration — for the quiet moments where healing begins, and for the deep waters of understanding that transform lives.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "My Mission",
    body: "To write words that act as balm and blueprints. Through books, teachings, and reflections, my mission is to provide the resources and wisdom necessary for true, lasting, kingdom-aligned restoration.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "My Calling",
    body: "I am called to be a watchwoman and a prophetic dreamer. I listen, I wait, and I record what is spoken in the stillness so that others may hear, see, and understand the divine timeline.",
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "My Purpose",
    body: "To build. Whether it is a book, a brand, or a house of healing, my purpose is to physically and spiritually manifest the kingdom through ventures that restore identity and impact lives.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center py-14 sm:py-20 lg:py-28">
            {/* Text */}
            <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                Get to Know Me
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-royal-deep)] mb-2 leading-tight">
                My Story.
              </h1>
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--color-gold)] mb-6 sm:mb-8 leading-none">
                My Calling.
              </h1>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-6 sm:mb-8 mx-auto lg:mx-0" />
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-4 sm:mb-6 mx-auto lg:mx-0">
                Shalaymah Nurrayah Tzeduqah, known as <span className="text-[var(--color-gold)] font-bold">The Rib Restored</span>, is a prophetic dreamer, writer, seer, and spiritual teacher dedicated to helping others understand the language of dreams, discernment, and spiritual revelation through a grounded prophetic and scriptural lens.
              </p>
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-4 sm:mb-6 mx-auto lg:mx-0">
                Through her writings, teachings, and the mission of <span className="text-[var(--color-gold)] font-bold">Beit Yahweh HaGo’el</span>, Shalaymah seeks to bridge spiritual depth with practical understanding. Her approach combines symbolic interpretation, scriptural foundations, and personal refinement to help others recognize the voice of Elohim with wisdom, humility, and clarity.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start mb-8">
                <Button variant="gold" size="sm" asChild>
                  <a href="https://www.amazon.com/stores/Shalaymah-Nurrayah-Tzeduqah/author/B0GY94T77X" target="_blank" rel="noopener noreferrer">
                    View Amazon Author Profile
                  </a>
                </Button>
                <a href="https://instagram.com/The.Rib.Restored" target="_blank" rel="noopener noreferrer" className="text-[0.6rem] font-bold tracking-[0.2em] text-[var(--color-royal-deep)] uppercase hover:text-[var(--color-gold)] transition-colors">
                  Instagram: @The.Rib.Restored
                </a>
              </div>
              <div className="flex items-center gap-6 sm:gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">2+</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Books</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">10+</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Volumes</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">∞</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Dreams</p>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/author.png"
                  alt="Shalaymah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[var(--color-gold)]/20 rounded-sm -z-10 hidden sm:block" />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-sm hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Interlude */}
      <section className="bg-[var(--color-royal-deep)] py-10 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-gold)]/40 mx-auto mb-4 sm:mb-5 rotate-180" />
          <blockquote className="font-heading text-base sm:text-lg lg:text-xl text-white/90 italic leading-relaxed mb-4 sm:mb-5 px-2">
            &ldquo;For we are His workmanship, created in Christ Jesus for good works, 
            which God prepared beforehand that we should walk in them.&rdquo;
          </blockquote>
          <cite className="text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase not-italic">
            Ephesians 2:10
          </cite>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              What Drives Me
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">
              The Four Pillars
            </h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group bg-white p-6 sm:p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(200,151,62,0.06)]"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(200,151,62,0.25)] shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-[1.8]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              My Manifesto
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">
              What I Believe
            </h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { keyword: "Restore", text: "Through The Rib Restored, Shalaymah shares teachings and resources designed to help others navigate spiritual experiences with maturity, wisdom, and balance." },
              { keyword: "Reveal", text: "Her approach combines symbolic interpretation and scriptural foundations, helping seekers recognize the voice of Elohim in dreams and symbols." },
              { keyword: "Redeem", text: "Connected to Beit Yahweh HaGo’el — House of Yahweh The Redeemer, her work focuses on restoration, discernment, and strengthening families." },
            ].map((belief) => (
              <div key={belief.keyword} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start bg-white p-5 sm:p-6 lg:p-8 rounded-sm border border-gray-100">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-gold)] italic shrink-0 sm:w-28 sm:text-right">
                  {belief.keyword}.
                </span>
                <div className="w-full sm:w-px h-px sm:h-12 bg-[var(--color-gold)]/30 shrink-0 sm:mt-1" />
                <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.8]">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[var(--color-gold)] mb-3">
            Continue the journey
          </h2>
          <p className="text-gray-500 text-sm mb-6 sm:mb-8 max-w-sm mx-auto">
            Explore my books, read my writings, or reach out — I&apos;d love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/books">Explore My Books</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/writings">Read My Writings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
