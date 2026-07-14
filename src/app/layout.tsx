import type { Metadata } from "next";
import { Inter, Playfair_Display, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theribrestored.com"),
  title: {
    default: "The Rib Restored | By Shalaymah — Author, Dreamer, Visionary",
    template: "%s | The Rib Restored",
  },
  description:
    "A sacred space of restoration, prophetic writings, dream interpretation, spiritual discernment, and kingdom-centered creativity by Shalaymah Nurrayah Tzeduqah.",
  keywords: [
    "Shalaymah",
    "The Rib Restored",
    "prophetic books",
    "dream interpretation",
    "spiritual author",
    "kingdom creativity",
  ],
  authors: [{ name: "Shalaymah Nurrayah Tzeduqah" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Rib Restored",
    title: "The Rib Restored | By Shalaymah",
    description:
      "Author, Dreamer, Visionary. Books, writings, projects, reflections, and purpose.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rib Restored | By Shalaymah",
    description:
      "Author, Dreamer, Visionary. Books, writings, projects, reflections, and purpose.",
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${allura.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Accessibility: skip-to-content link */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Scroll progress indicator */}
        <ScrollProgress />

        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
