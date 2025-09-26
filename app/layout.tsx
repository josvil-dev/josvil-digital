import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./Components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// SEO: Enhanced metadata for high Google ranking

export const openGraph = {
  title: "Joshua Vilanculo | Web Developer & App Developer in South Africa",
  description:
    "Joshua Vilanculo is a professional web developer and web app developer specializing in Figma design and prototyping. Serving clients across all cities in South Africa.",
  url: "https://josvil.digital",
  siteName: "Joshua Vilanculo Web Development",
  images: [
    {
      url: "https://josvil.digital/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Joshua Vilanculo Web Developer South Africa",
    },
  ],
  locale: "en_ZA",
  type: "website",
};

export const twitter = {
  card: "summary_large_image",
  title: "Joshua Vilanculo | Web Developer & App Developer in South Africa",
  description:
    "Web and app development, Figma design, and prototyping by Joshua Vilanculo. Available in all South African cities.",
  images: ["https://josvil.digital/og-image.jpg"],
  creator: "@yourtwitterhandle",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Joshua Vilanculo | Expert Web Developer & App Developer in South Africa",
    template: "%s | Joshua Vilanculo - Web Developer South Africa"
  },
  description:
    "Professional web developer Joshua Vilanculo specializes in modern web applications, mobile apps, and UI/UX design. Serving businesses across South Africa with cutting-edge technology solutions.",
  keywords: [
    "Joshua Vilanculo",
    "web developer South Africa",
    "web app developer",
    "mobile app developer",
    "Figma design",
    "UI/UX designer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "South Africa",
    "Johannesburg web developer",
    "Cape Town web developer",
    "Durban web developer",
    "Pretoria web developer",
    "Port Elizabeth web developer",
    "Bloemfontein web developer",
    "web design South Africa",
    "app development South Africa",
    "responsive web design",
    "e-commerce development",
    "custom web applications",
    "modern web development",
    "progressive web apps",
    "SEO optimization",
    "website maintenance",
    "digital solutions",
    "business websites",
    "startup development"
  ],
  openGraph,
  twitter,
  authors: [{ name: "Joshua Vilanculo", url: "https://josvil.digital" }],
  creator: "Joshua Vilanculo",
  publisher: "Joshua Vilanculo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://josvil.digital'),
  alternates: {
    canonical: "https://josvil.digital",
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joshua Vilanculo",
              "jobTitle": "Web Developer & App Developer",
              "description": "Professional web developer specializing in modern web applications, mobile apps, and UI/UX design in South Africa",
              "url": "https://josvil.digital",
              "image": "https://josvil.digital/jos-vilanculo.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "South Africa"
              },
              "sameAs": [
                "https://github.com/josvil-dev",
                "https://linkedin.com/in/joshua-vilanculo",
                "https://twitter.com/josvil_dev"
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "React",
                "Next.js",
                "TypeScript",
                "Figma",
                "Full Stack Development"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": "Web Development Services",
                "areaServed": {
                  "@type": "Country",
                  "name": "South Africa"
                }
              }
            })
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeToggle />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        
        {/* Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
