import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

import Header from "@/components/Header";

import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-playfair", // Use a CSS variable for easy styling
});

const options = {
  title: "Nwanze Ebube Ibifuro | Software Engineer",
  description:
    "Nwanze Ebube Ibifuro is a Software Engineer well seasoned who is passionate about building solutions to problems",
  // url: "localhost:3000/",
  siteName: "Ebube Nwanze Portfolio",
  locale: "en-US",
  type: "website",
  keywords: [
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Nwanze Ebube Ibifuro",
  ],
  authors: [{ name: "Nwanze Ebube Ibifuro" }],
};

export const metadata: Metadata = {
  title: {
    default: options.title,
    template: "%s | Nwanze Ebube Ibifuro",
  },
  description: options.description,
  keywords: options.keywords,
  authors: options.authors,
  creator: "Nwanze Ebube Ibifuro",
  publisher: "Nwanze Ebube Ibifuro",
  // metadataBase: new URL(options.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: options.title,
    description: options.description,
    // url: options.url,
    siteName: options.siteName,
    locale: options.locale,
    type: "website",
    // images:
    //   "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
  twitter: {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
    creator: "@quietandstuff",
    // images:
    //   "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} antialiased bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col relative`}
      >
        <AnimatedBackground />
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
