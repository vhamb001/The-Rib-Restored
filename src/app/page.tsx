import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { projects } from "@/data/projects";
import { getSortedWritingsData } from "@/lib/writings";
import { BookOpen, PenTool, Lightbulb, User, Mail, Crown, Home, Headphones, ArrowRight } from "lucide-react";

const projectIcons: Record<string, React.ReactNode> = {
  crown: <Crown className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  headphones: <Headphones className="w-5 h-5" />,
  lightbulb: <Lightbulb className="w-5 h-5" />,
};

export default function HomePage() {
  const writings = getSortedWritingsData().slice(0, 3);
  const featuredBooks = books.filter((b) => b.status === "Available");

  return (
    <>
      {/* ════════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Soft background wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[var(--color-ivory)] to-white" />

        {/* Author image – right side */}
        <div className="absolute top-0 right-0 w-[55%] h-full hidden md:block">
          <Image
            src="/images/hero-bg.jpg"
            alt="Shalaymah – Author & Visionary"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-16 right-[10%] w-80 h-80 bg-[var(--color-gold)]/10 rounded-full blur-[100px] animate-pulse-gold pointer-events-none" />
        <div className="absolute bottom-0 right-[25%] w-60 h-60 bg-[var(--color-royal)]/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-6">
              Welcome to
            </span>

            {/* Title lockup */}
            <div className="relative mb-6">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] text-[var(--color-royal-deep)] uppercase leading-none">
                The Rib
              </h1>
              <span className="font-script text-6xl md:text-7xl lg:text-[6.5rem] text-[var(--color-gold)] block -mt-2 ml-4 lg:ml-8">
                Restored
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[var(--color-gold)]" />
              <span className="font-heading text-lg lg:text-xl font-bold tracking-[0.2em] text-[var(--color-royal-deep)] uppercase">
                By Shalaymah
              </span>
              <div className="w-10 h-px bg-[var(--color-gold)]" />
            </div>

            <p className="text-gray-500 text-sm lg:text-base leading-[1.8] mb-10 max-w-md">
              Author. Dreamer. Visionary.<br />
              I write to restore, to reveal, and to remember.<br />
              This is a space for books, writings, projects,<br />
              reflections, and purpose.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/books">Explore My Books</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/writings">Read My Writings</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Gold accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
      </section>

      {/* ════════════════════════════════════════════
          2. QUICK EXPLORE BAR
          ════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center divide-y md:divide-y-0 md:divide-x divide-gray-100 stagger-children">
            {[
              { href: "/books", icon: <BookOpen className="w-7 h-7" strokeWidth={1.2} />, title: "Books", desc: "Discover my books\nand upcoming releases." },
              { href: "/writings", icon: <PenTool className="w-7 h-7" strokeWidth={1.2} />, title: "Writings", desc: "Read reflections,\nteachings, and inspirations." },
              { href: "/projects", icon: <Lightbulb className="w-7 h-7" strokeWidth={1.2} />, title: "Projects", desc: "Explore my\nventures and initiatives." },
              { href: "/about", icon: <User className="w-7 h-7" strokeWidth={1.2} />, title: "About Me", desc: "Get to know my\nstory, calling, and mission." },
              { href: "/contact", icon: <Mail className="w-7 h-7" strokeWidth={1.2} />, title: "Contact", desc: "Let's connect!\nI'd love to hear from you." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex-1 py-8 lg:py-10 px-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--color-ivory)]"
              >
                <div className="text-[var(--color-royal-deep)] mb-3 transition-all duration-500 group-hover:text-[var(--color-gold)] group-hover:-translate-y-1">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-[0.65rem] tracking-[0.2em] text-[var(--color-royal-deep)] mb-1.5 uppercase">
                  {item.title}
                </h3>
                <p className="text-[0.6rem] text-gray-400 tracking-wider uppercase leading-relaxed whitespace-pre-line">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. NEWSLETTER STRIP
          ════════════════════════════════════════════ */}
      <section className="bg-[var(--color-royal-deep)] py-8 lg:py-10 relative overflow-hidden">
        {/* Subtle decorative texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="font-script text-3xl lg:text-4xl text-[var(--color-gold)] mb-1">
              Stay connected. Be the first to know.
            </h2>
            <p className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase">
              Get updates on new books, writings, and announcements.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-sm outline-none placeholder:text-white/25 text-sm min-w-[180px] focus:border-[var(--color-gold)] transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-sm outline-none placeholder:text-white/25 text-sm min-w-[180px] focus:border-[var(--color-gold)] transition-colors"
              required
            />
            <Button variant="gold" className="rounded-sm text-[0.65rem] tracking-[0.2em] px-8 py-3 h-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. FIVE-PANEL PORTAL
          ════════════════════════════════════════════ */}
      <section className="bg-[var(--color-ivory)] py-14 lg:py-16">
        <div className="container mx-auto px-4 lg:px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children">

            {/* ─── ABOUT ME ─── */}
            <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden group">
              <div className="bg-[var(--color-royal-deep)] text-center py-3">
                <span className="font-sans font-bold tracking-[0.25em] text-[0.6rem] text-white uppercase">About Me</span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] italic leading-tight">My Story.</h3>
                <h3 className="font-script text-3xl text-[var(--color-gold)] leading-none mb-4">My Calling.</h3>
                <p className="text-gray-500 text-xs leading-[1.7] mb-5">
                  I am Shalaymah, a prophetic dreamer, watchwoman, and author called to remember, to heal, and to build through words, wisdom, and divine revelation. Everything I create flows from purpose.
                </p>
                <Button variant="primary" className="w-full text-[0.6rem] tracking-[0.2em] mb-5" asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button>
                {/* Visual block */}
                <div className="mt-auto h-44 bg-[var(--color-royal-deep)] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="relative z-10 text-center space-y-0.5">
                    <p className="font-script text-xl text-[var(--color-gold)]">We&apos;ll</p>
                    <p className="font-heading font-bold text-white tracking-[0.25em] uppercase text-xs">Restore</p>
                    <p className="font-heading font-bold text-white tracking-[0.25em] uppercase text-xs">Reveal</p>
                    <p className="font-heading font-bold text-white tracking-[0.25em] uppercase text-xs">Remember</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── BOOKS ─── */}
            <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden group">
              <div className="bg-[var(--color-royal-deep)] text-center py-3">
                <span className="font-sans font-bold tracking-[0.25em] text-[0.6rem] text-white uppercase">Books</span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="text-center mb-5">
                  <h4 className="font-heading font-bold text-[var(--color-royal-deep)] tracking-[0.15em] text-[0.65rem] uppercase">Featured Books</h4>
                  <div className="gold-rule w-12 mx-auto mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {featuredBooks.map((book) => (
                    <div key={book.id} className="flex flex-col items-center">
                      <div className="w-full aspect-[2/3] relative shadow-md border border-gray-100 mb-2 overflow-hidden group/book">
                        <Image src={book.cover} alt={book.title} fill className="object-cover transition-transform duration-700 group-hover/book:scale-105" />
                      </div>
                      <h5 className="font-heading font-bold text-[var(--color-royal-deep)] text-center text-[0.55rem] leading-tight mb-1.5 line-clamp-2">{book.title}</h5>
                      <Link href={book.amazonUrl || "#"} className="text-[0.5rem] font-bold tracking-[0.15em] text-[var(--color-gold)] uppercase hover:text-[var(--color-royal-deep)] transition-colors">
                        View on Amazon
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-auto text-center pt-4 border-t border-gray-50">
                  <h4 className="font-heading font-bold text-[var(--color-royal-deep)] tracking-[0.15em] text-[0.65rem] uppercase mb-2">Upcoming Books</h4>
                  <div className="flex items-center gap-3 bg-[var(--color-ivory)] p-3 rounded-sm">
                    <BookOpen className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <div className="text-left">
                      <p className="text-[0.6rem] text-gray-600 font-medium leading-snug">New stories. New revelations.</p>
                      <p className="text-[0.5rem] text-gray-400 tracking-wider uppercase mt-0.5">Stay tuned for what&apos;s next!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── WRITINGS ─── */}
            <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden group">
              <div className="bg-[var(--color-royal-deep)] text-center py-3">
                <span className="font-sans font-bold tracking-[0.25em] text-[0.6rem] text-white uppercase">Writings</span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="text-center mb-5">
                  <h4 className="font-heading font-bold text-[var(--color-royal-deep)] tracking-[0.15em] text-[0.65rem] uppercase">Latest Writings</h4>
                  <div className="gold-rule w-12 mx-auto mt-2" />
                </div>
                <div className="space-y-4 flex-grow">
                  {writings.map((writing) => {
                    const date = new Date(writing.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                    return (
                      <Link key={writing.slug} href={`/writings/${writing.slug}`} className="flex gap-3 group/card">
                        <div className="w-14 h-14 shrink-0 relative border border-gray-100 rounded-sm overflow-hidden">
                          <Image src={writing.image} alt={writing.title} fill className="object-cover transition-transform duration-500 group-hover/card:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h5 className="font-heading font-bold text-[var(--color-royal-deep)] text-[0.65rem] mb-0.5 group-hover/card:text-[var(--color-gold)] transition-colors line-clamp-1">{writing.title}</h5>
                          <p className="text-[0.55rem] text-gray-400 line-clamp-1 leading-snug mb-0.5">{writing.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-[0.5rem] text-gray-300">{date}</span>
                            <span className="text-[0.5rem] font-bold text-[var(--color-gold)] tracking-wider uppercase flex items-center gap-0.5">
                              Read More <ArrowRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <Button variant="primary" className="w-full text-[0.6rem] tracking-[0.2em] mt-5" asChild>
                  <Link href="/writings">View All Writings</Link>
                </Button>
              </div>
            </div>

            {/* ─── PROJECTS ─── */}
            <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden group">
              <div className="bg-[var(--color-royal-deep)] text-center py-3">
                <span className="font-sans font-bold tracking-[0.25em] text-[0.6rem] text-white uppercase">Projects & Ventures</span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="text-center mb-5">
                  <h4 className="font-heading font-bold text-[var(--color-royal-deep)] tracking-[0.15em] text-[0.65rem] uppercase">My Projects & Ventures</h4>
                  <div className="gold-rule w-12 mx-auto mt-2" />
                </div>
                <div className="space-y-5 flex-grow">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-start gap-3 group/p">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-royal-deep)] flex items-center justify-center shrink-0 text-[var(--color-gold)] transition-all duration-300 group-hover/p:bg-[var(--color-gold)] group-hover/p:text-white">
                        {projectIcons[project.iconName] || <Lightbulb className="w-4 h-4" />}
                      </div>
                      <div>
                        <h5 className="font-heading font-bold text-[var(--color-royal-deep)] text-[0.65rem] mb-0.5">{project.title}</h5>
                        <p className="text-[0.55rem] text-gray-500 leading-snug">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" className="w-full text-[0.6rem] tracking-[0.2em] mt-5" asChild>
                  <Link href="/projects">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* ─── CONTACT ─── */}
            <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden group">
              <div className="bg-[var(--color-royal-deep)] text-center py-3">
                <span className="font-sans font-bold tracking-[0.25em] text-[0.6rem] text-white uppercase">Contact Me</span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <h4 className="font-heading font-bold text-[var(--color-royal-deep)] tracking-[0.15em] text-[0.65rem] uppercase">Let&apos;s Connect</h4>
                  <div className="gold-rule w-12 mx-auto mt-2" />
                </div>
                <p className="text-[0.6rem] text-gray-500 mb-4 text-center leading-relaxed">
                  I&apos;d love to hear from you! Whether it&apos;s a question, collaboration, or just a greeting — reach out!
                </p>
                <form className="space-y-2.5 mb-4">
                  <input type="text" placeholder="Your Name" className="w-full text-[0.6rem] px-3 py-2 border border-gray-150 bg-[var(--color-ivory)] rounded-sm outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-gray-300" />
                  <input type="email" placeholder="Your Email" className="w-full text-[0.6rem] px-3 py-2 border border-gray-150 bg-[var(--color-ivory)] rounded-sm outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-gray-300" />
                  <input type="text" placeholder="Subject" className="w-full text-[0.6rem] px-3 py-2 border border-gray-150 bg-[var(--color-ivory)] rounded-sm outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-gray-300" />
                  <textarea placeholder="Your Message" rows={3} className="w-full text-[0.6rem] px-3 py-2 border border-gray-150 bg-[var(--color-ivory)] rounded-sm outline-none focus:border-[var(--color-gold)] transition-colors resize-none placeholder:text-gray-300" />
                  <Button variant="gold" className="w-full text-[0.6rem] tracking-[0.2em] py-2 h-auto">
                    Send Message
                  </Button>
                </form>
                <div className="mt-auto text-center pt-3 border-t border-gray-50">
                  <p className="text-[0.5rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Connect With Me</p>
                  <div className="flex justify-center gap-2">
                    {["IG", "FB", "X"].map((label) => (
                      <a key={label} href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-[0.5rem] font-bold text-gray-400 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
