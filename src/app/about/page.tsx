import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Hammer } from "lucide-react";

const pillars = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "My Heart",
    body: "To see the broken made whole and the lost finding their identity. My heart beats for restoration, for the quiet moments where healing begins, and for the deep waters of understanding that transform lives.",
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
      <section className="relative bg-[var(--color-ivory)] py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Get to Know Me</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-6 leading-tight">
            My Story. <span className="font-script text-[var(--color-gold)] text-5xl md:text-6xl lg:text-7xl font-normal">My Calling.</span>
          </h1>
          <div className="gold-rule w-24 mx-auto mb-8" />
          <p className="text-gray-500 text-lg lg:text-xl leading-[1.8] max-w-2xl mx-auto">
            I am Shalaymah, a prophetic dreamer, watchwoman, and author called to
            remember, restore, heal, and build through words, wisdom, and divine
            revelation. Everything I create flows from purpose.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group bg-white p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(200,151,62,0.08)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--color-royal-deep)]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-[1.8] text-sm">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-script text-4xl lg:text-5xl text-[var(--color-gold)] mb-8">
            Continue the journey
          </h2>
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
