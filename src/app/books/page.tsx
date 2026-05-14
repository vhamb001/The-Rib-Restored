import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Library</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            My Books
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Words that restore. Stories that reveal. Kingdom understanding, one page at a time.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 stagger-children">
            {books.map((book) => (
              <div key={book.id} className="group flex flex-col bg-white rounded-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[var(--color-gold)]/30">
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[var(--color-ivory)]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {book.status === "Coming Soon" && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-royal-deep)] text-[0.55rem] font-bold px-3 py-1.5 rounded-sm tracking-[0.2em] uppercase">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-grow">
                  {book.subtitle && (
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] text-[var(--color-gold)] uppercase mb-2">
                      {book.subtitle}
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-3 leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.7] mb-6 flex-grow">
                    {book.description}
                  </p>
                  <div className="pt-4 border-t border-gray-50">
                    {book.status === "Available" ? (
                      <Button variant="gold" className="w-full" asChild>
                        <Link href={book.amazonUrl || "#"}>View on Amazon</Link>
                      </Button>
                    ) : (
                      <Button variant="secondary" className="w-full" disabled>
                        Stay Tuned
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <div className="bg-white p-10 lg:p-14 rounded-sm border border-gray-100 shadow-sm">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[var(--color-royal-deep)] mb-4">
              More Revelations Are Coming
            </h2>
            <div className="gold-rule w-16 mx-auto mb-6" />
            <p className="text-gray-500 text-sm leading-[1.7] mb-8">
              I am currently working on new writings and books. Join the newsletter to be the first to know when they are released.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/#newsletter">Stay Connected</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
