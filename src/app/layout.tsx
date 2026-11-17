import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Sora } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import { site } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const title =
  "Sri Kanth V — Artificial Intelligence & Machine Learning Engineer | Data Analytics | Full Stack Developer";
const description =
  "Sri Kanth V builds intelligent experiences through code — spanning machine learning, data and business analytics, full stack development and technical training.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Sri Kanth V",
  },
  description,
  keywords: [
    "Sri Kanth V",
    "AI/ML Engineer",
    "Machine Learning",
    "Data Analytics",
    "Business Analytics",
    "Full Stack Developer",
    "Technical Trainer",
    "Python",
    "Power BI",
    "React",
    "Next.js",
    "FastAPI",
  ],
  authors: [{ name: site.name, url: site.github.href }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Sri Kanth V",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#080B12",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle:
    "Artificial Intelligence & Machine Learning Engineer | Data Analytics | Full Stack Developer & Technical Trainer",
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.github.href, site.linkedin.href],
  knowsAbout: [
    "Machine Learning",
    "Data Analytics",
    "Full Stack Development",
    "Python",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${instrument.variable}`}
    >
      <body className="bg-ink text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-cta focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
