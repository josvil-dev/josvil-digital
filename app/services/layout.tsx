import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Joshua Vilanculo - Full Stack Developer',
  description: 'Professional web development services including React applications, API development, WordPress, Framer websites, and UI/UX design by Joshua Vilanculo.',
  keywords: 'web development services, React development, API development, WordPress development, Framer websites, UI/UX design, frontend development, backend development, Johannesburg developer',
  authors: [{ name: 'Joshua Vilanculo' }],
  creator: 'Joshua Vilanculo',
  publisher: 'Josvil Digital',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josvil.digital/services',
    title: 'Professional Web Development Services | Joshua Vilanculo',
    description: 'Comprehensive web development services including React applications, API development, WordPress solutions, and modern UI/UX design.',
    siteName: 'Josvil Digital',
    images: [
      {
        url: 'https://josvil.digital/josvil.jpeg',
        width: 1200,
        height: 630,
        alt: 'Joshua Vilanculo - Full Stack Developer Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Development Services | Joshua Vilanculo',
    description: 'Comprehensive web development services including React applications, API development, WordPress solutions, and modern UI/UX design.',
    creator: '@joshuavilanculo',
    images: ['https://josvil.digital/josvil.jpeg'],
  },
  alternates: {
    canonical: 'https://josvil.digital/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}