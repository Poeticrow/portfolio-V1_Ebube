import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { PageTransition } from '@/components/page-transition';
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedBackground } from '@/components/animated-background';
// import { CursorTrail } from "@/components/cursor-trail"

const options = {
  title: 'Nwanze Ebube Ibifuro | Software Engineer',
  description:
    'Nwanze Ebube Ibifuro is a Software Engineer well seasoned who is passionate about building solutions to problems',
  // url: "localhost:3000/",
  siteName: 'Ebube Nwanze Portfolio',
  locale: 'en-US',
  type: 'website',
  keywords: [
    'Software Engineer',
    'Software Developer',
    'Web Developer',
    'Web Designer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'JavaScript Developer',
    'React Developer',
    'Next.js Developer',
    'Nwanze Ebube Ibifuro',
  ],
  authors: [{ name: 'Nwanze Ebube Ibifuro' }],
};

export const metadata: Metadata = {
  title: {
    default: options.title,
    template: '%s | Nwanze Ebube Ibifuro',
  },
  description: options.description,
  keywords: options.keywords,
  authors: options.authors,
  creator: 'Nwanze Ebube Ibifuro',
  publisher: 'Nwanze Ebube Ibifuro',
  // metadataBase: new URL(options.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: options.title,
    description: options.description,
    // url: options.url,
    siteName: options.siteName,
    locale: options.locale,
    type: 'website',
    // images:
    //   "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
  twitter: {
    card: 'summary_large_image',
    title: options.title,
    description: options.description,
    creator: '@quietandstuff',
    // images:
    //   "https://res.cloudinary.com/dhlbkd9i9/image/upload/v1735282721/portfolio/qgvvho0sgskbtsumfytf.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <AnimatedBackground />
          {/* <CursorTrail /> */}
          <Navigation />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
