import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSortedWritingsData } from "@/lib/writings";
import { ArrowRight } from "lucide-react";

const categories = [
  "All Writings",
  "Dreams & Visions",
  "Reflections",
  "Faith & Growth",
  "Healing",
  "Purpose & Calling",
  "Kingdom Living",
  "Announcements",
];

export default function WritingsPage() {
  const writings = getSortedWritingsData();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-20 lg:py-28 overflow-hidden border-b border-gray-100">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-royal)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Reflections & Teachings</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            Writings & Reflections
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            A space for kingdom understanding — reflections, teachings, and divine inspiration.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-56 shrink-0">
            <h3 className="font-heading font-bold text-sm tracking-[0.1em] text-[var(--color-royal-deep)] uppercase mb-5">
              Categories
            </h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-sm text-left w-full py-2.5 px-4 rounded-sm transition-all duration-300 ${
                      cat === "All Writings"
                        ? "bg-[var(--color-royal-deep)] text-white font-medium"
                        : "text-gray-500 hover:bg-[var(--color-ivory)] hover:text-[var(--color-royal-deep)]"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Posts */}
          <div className="flex-1 space-y-6 stagger-children">
            {writings.map((writing) => {
              const date = new Date(writing.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
              return (
                <Link
                  key={writing.slug}
                  href={`/writings/${writing.slug}`}
                  className="group flex flex-col sm:flex-row gap-5 p-5 lg:p-6 rounded-sm border border-transparent hover:border-gray-100 hover:bg-[var(--color-warm-white)] hover:shadow-sm transition-all duration-500"
                >
                  <div className="relative w-full sm:w-48 shrink-0 aspect-[4/3] rounded-sm overflow-hidden bg-[var(--color-ivory)]">
                    <Image src={writing.image} alt={writing.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] text-[var(--color-gold)] uppercase">{writing.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-xs text-gray-400">{date}</span>
                    </div>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                      {writing.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-[1.7] line-clamp-2 mb-3">{writing.excerpt}</p>
                    <span className="inline-flex items-center text-xs font-bold tracking-wider text-[var(--color-royal)] uppercase">
                      Read More <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <div className="bg-[var(--color-royal-deep)] text-white p-10 lg:p-14 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10">
              <h2 className="font-script text-3xl lg:text-4xl text-[var(--color-gold)] mb-3">Stay updated</h2>
              <p className="text-white/50 text-sm mb-8">Subscribe to receive new writings and reflections directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/10 px-5 py-3 rounded-sm text-sm text-white placeholder:text-white/25 outline-none focus:border-[var(--color-gold)] transition-colors w-full sm:w-auto min-w-[240px]"
                  required
                />
                <Button variant="gold" className="rounded-sm">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
