import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { BookOpen, Tablet, Book, BookMarked, ArrowRight } from "lucide-react";

const formatIcons: Record<string, React.ReactNode> = {
  Ebook: <Tablet className="w-4 h-4" />,
  Paperback: <Book className="w-4 h-4" />,
  Hardcover: <BookMarked className="w-4 h-4" />,
};

export default function BooksPage() {
  const availableBooks = books.filter((b) => b.status === "Available");
  const comingBooks = books.filter((b) => b.status === "Coming Soon");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-royal)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Library</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            My Books
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Words that restore. Stories that reveal. Kingdom understanding, one page at a time.
          </p>
        </div>
      </section>

      {/* Featured Books — Full Width Showcase */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {availableBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Book Cover */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] group bg-white">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative frame */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-gold)]/10 rounded-sm -z-10 hidden sm:block" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--color-gold)]/20 rounded-tl-sm hidden sm:block" />
                  </div>

                  {/* Book Info */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {book.subtitle && (
                      <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-3 sm:mb-4">
                        {book.subtitle}
                      </span>
                    )}
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4 sm:mb-5 leading-tight">
                      {book.title}
                    </h2>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-5 sm:mb-6" />
                    <p className="text-gray-500 text-sm sm:text-[0.95rem] leading-[1.9] mb-6 sm:mb-8 max-w-lg">
                      {book.description}
                    </p>

                    {/* Format Buttons */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase">
                        Available Formats
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {book.formats.map((format) => (
                          <a
                            key={format.type}
                            href={format.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-3 bg-white border border-gray-200 hover:border-[var(--color-gold)] rounded-sm px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(200,151,62,0.12)]"
                          >
                            <span className="w-8 h-8 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover/btn:bg-[var(--color-gold)] group-hover/btn:text-white">
                              {formatIcons[format.type]}
                            </span>
                            <div className="text-left">
                              <span className="block text-sm font-semibold text-[var(--color-royal-deep)] group-hover/btn:text-[var(--color-gold)] transition-colors duration-300">
                                {format.type}
                              </span>
                              {format.price && (
                                <span className="block text-[0.65rem] text-gray-400">
                                  {format.price}
                                </span>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 ml-auto transition-all duration-300 group-hover/btn:text-[var(--color-gold)] group-hover/btn:translate-x-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      {comingBooks.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-24 bg-[var(--color-ivory)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-sm border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4">
                More Revelations Are Coming
              </h2>
              <div className="gold-rule w-16 mx-auto mb-6" />
              <p className="text-gray-500 text-sm sm:text-base leading-[1.7] mb-8 max-w-md mx-auto">
                I am currently working on new writings and books. Join the newsletter to be the first to know when they are released.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link href="/#newsletter">Stay Connected</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
