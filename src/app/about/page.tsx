import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Hammer, ArrowRight, BookOpen, Quote } from "lucide-react";

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

        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
            {/* Text */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                Get to Know Me
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-royal-deep)] mb-2 leading-tight">
                My Story.
              </h1>
              <h1 className="font-script text-5xl md:text-6xl text-[var(--color-gold)] mb-8 leading-none">
                My Calling.
              </h1>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-8" />
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-6">
                I am Shalaymah — a prophetic dreamer, watchwoman, and author called to
                remember, restore, heal, and build through words, wisdom, and divine
                revelation. Everything I create flows from purpose.
              </p>
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-8">
                My journey began in the stillness — in the quiet hours of the night where 
                dreams became downloads and visions became blueprints. What I received, 
                I was called to share. And so I write.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="font-heading text-3xl font-bold text-[var(--color-royal-deep)]">2+</span>
                  <p className="text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Books</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-3xl font-bold text-[var(--color-royal-deep)]">4</span>
                  <p className="text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Ventures</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-3xl font-bold text-[var(--color-royal-deep)]">∞</span>
                  <p className="text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Dreams</p>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/author.png"
                  alt="Shalaymah"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-gold)]/20 rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Interlude */}
      <section className="bg-[var(--color-royal-deep)] py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative z-10">
          <Quote className="w-8 h-8 text-[var(--color-gold)]/40 mx-auto mb-5 rotate-180" />
          <blockquote className="font-heading text-lg lg:text-xl text-white/90 italic leading-relaxed mb-5">
            &ldquo;For we are His workmanship, created in Christ Jesus for good works, 
            which God prepared beforehand that we should walk in them.&rdquo;
          </blockquote>
          <cite className="text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase not-italic">
            Ephesians 2:10
          </cite>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              What Drives Me
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">
              The Four Pillars
            </h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group bg-white p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(200,151,62,0.06)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(200,151,62,0.25)]">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)]">
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
      <section className="py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              My Manifesto
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">
              What I Believe
            </h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>

          <div className="space-y-6">
            {[
              { keyword: "Restore", text: "Every person has a divine blueprint. I write to help people return to who they were always meant to be." },
              { keyword: "Reveal", text: "Hidden things are meant to be uncovered. Through prophetic dreams and divine insight, I reveal what the Spirit is speaking." },
              { keyword: "Remember", text: "We are called to remember our identity, our covenant, and our purpose. My writings are anchors against forgetting." },
            ].map((belief) => (
              <div key={belief.keyword} className="flex gap-6 items-start bg-white p-6 lg:p-8 rounded-sm border border-gray-100">
                <span className="font-heading text-2xl lg:text-3xl font-bold text-[var(--color-gold)] italic shrink-0 w-28 text-right">
                  {belief.keyword}.
                </span>
                <div className="w-px h-12 bg-[var(--color-gold)]/30 shrink-0 mt-1" />
                <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.8]">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-script text-4xl lg:text-5xl text-[var(--color-gold)] mb-3">
            Continue the journey
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
            Explore my books, read my writings, or reach out — I&apos;d love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
