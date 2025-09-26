import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Joshua Vilanculo | Professional Web Developer South Africa",
  description: "Learn about Joshua Vilanculo, a passionate web developer with 7+ years of experience creating innovative web applications and mobile solutions across South Africa.",
  openGraph: {
    title: "About Joshua Vilanculo | Professional Web Developer South Africa",
    description: "Learn about Joshua Vilanculo, a passionate web developer with 7+ years of experience creating innovative web applications and mobile solutions.",
    url: "https://josvil.digital/about",
  },
  alternates: {
    canonical: "https://josvil.digital/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
