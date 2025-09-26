import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./Components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";

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

export const metadata: Metadata = {
  title: "Joshua Vilanculo | Web Developer & App Developer in South Africa",
  description:
    "Joshua Vilanculo is a web developer and web app developer offering Figma design and prototyping services across all cities in South Africa.",
  keywords: [
    "Joshua Vilanculo",
    "web developer South Africa",
    "web app developer",
    "Figma design",
    "prototyping",
    "South Africa",
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
    "Bloemfontein",
    "web design",
    "app development",
    "UI/UX",
    "frontend developer",
    "backend developer",
    "full stack developer",
  ],
  openGraph,
  twitter,
  authors: [{ name: "Joshua Vilanculo" }],
  creator: "Joshua Vilanculo",
  publisher: "Joshua Vilanculo",
  alternates: {
    canonical: "https://josvil.digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeToggle />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
