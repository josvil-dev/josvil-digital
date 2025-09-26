import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Work & Portfolio | Joshua Vilanculo Web Developer",
  description: "Explore Joshua Vilanculo's portfolio featuring web development projects, case studies, and open-source contributions. See innovative solutions for South African businesses.",
  openGraph: {
    title: "My Work & Portfolio | Joshua Vilanculo Web Developer",
    description: "Explore Joshua Vilanculo's portfolio featuring web development projects, case studies, and open-source contributions.",
    url: "https://josvil.digital/work",
  },
  alternates: {
    canonical: "https://josvil.digital/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
