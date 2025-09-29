
'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import JsonLd from '../Components/JsonLd';
import { 
  createPersonSchema, 
  createBreadcrumbSchema,
  createProjectSchema 
} from '../../lib/jsonld';


// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Work Tabs Component (Modified to be 'Under Maintenance')
function WorkTabsLayout({ isDarkMode }: { isDarkMode: boolean }) {
  // All project data is no longer needed here as we are showing a maintenance message.
  // The original arrays are commented out/removed for brevity but could be kept 
  // if you plan to re-introduce the tabs later.
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-12 text-center"
    >
      <Wrench className="w-16 h-16 text-yellow-500 mb-6 animate-pulse" />
      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
        Work Section Under Maintenance 🛠️
      </h2>
      <p className={`max-w-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
        I'm currently revamping my portfolio to showcase new, exciting projects and an improved structure. 
        Please check back soon to see the updates! In the meantime, feel free to connect or view my code on 
        <Link 
          href="https://github.com/example" 
          className={`ml-1 font-medium ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} transition-colors underline`}
        >
          GitHub
        </Link>.
      </p>
    </motion.div>
  );
}

export default function Work() {
  const { isDarkMode } = useTheme();

  // Keep the structured data as it's good for SEO, even if the content is temporarily unavailable
  const personSchema = createPersonSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Work", url: "https://josvil.digital/work" }
  ]);

  const portfolioPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Joshua Vilanculo Portfolio - Web Development Projects (Under Maintenance)",
    "description": "Joshua Vilanculo's portfolio is currently undergoing maintenance. Showcasing expertise in React, Next.js, and modern web technologies.",
    "url": "https://josvil.digital/work",
    "author": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "about": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    // Removed 'mainEntity' for projects as the content is being hidden
    "inLanguage": "en"
  };

  // Remaining schemas are kept but could also be conditionally removed if desired
  const ecommerceProjectSchema = createProjectSchema({
    name: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution built with Next.js and Stripe integration",
    url: "https://josvil.digital/work/ecommerce-platform",
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "PostgreSQL"],
    dateCreated: "2024-01-01",
    image: "https://josvil.digital/projects/ecommerce.jpg"
  });

  const saasProjectSchema = createProjectSchema({
    name: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies with real-time data visualization", 
    url: "https://josvil.digital/work/saas-dashboard",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    dateCreated: "2024-02-01",
    image: "https://josvil.digital/projects/saas.jpg"
  });

  const mobileAppSchema = createProjectSchema({
    name: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    url: "https://josvil.digital/work/mobile-banking",
    technologies: ["React Native", "Firebase", "TypeScript"],
    dateCreated: "2023-11-01",
    image: "https://josvil.digital/projects/banking.jpg"
  });

  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joshua Vilanculo",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Skill",
        "competencyRequired": "React Development",
        "description": "Expert level React.js development with 5+ years experience"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Professional Skill",
        "competencyRequired": "Next.js Development",
        "description": "Advanced Next.js framework expertise for full-stack applications"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Skill", 
        "competencyRequired": "UI/UX Design",
        "description": "User-centered design and modern interface development"
      }
    ]
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Web Development Case Studies by Joshua Vilanculo",
    "description": "Detailed case studies showing problem-solving approach and results in web development projects",
    "author": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Josvil Digital"
    },
    "datePublished": "2024-01-01",
    "articleSection": "Case Studies",
    "about": [
      {
        "@type": "Thing",
        "name": "User Experience Design"
      },
      {
        "@type": "Thing", 
        "name": "Performance Optimization"
      },
      {
        "@type": "Thing",
        "name": "Web Development"
      }
    ]
  };

  // Theme-aware classes remain unchanged
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-indigo-300 font-medium text-lg mb-4 block" : "text-indigo-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-6 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={portfolioPageSchema} />
      <JsonLd data={ecommerceProjectSchema} />
      <JsonLd data={saasProjectSchema} />
      <JsonLd data={mobileAppSchema} />
      <JsonLd data={skillsSchema} />
      <JsonLd data={caseStudySchema} />

      <div className={themeClasses.container}>
        {/* Hero Section */}
        <section className={themeClasses.section}>
        <div className={themeClasses.gradient} />
        <div className={themeClasses.backgroundBlur1} />
        <div className={themeClasses.backgroundBlur2} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Intro Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
              My Work
            </motion.span>
            <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
              <span className={themeClasses.gradientText}>Portfolio</span>
              <br />
              & Projects
            </motion.h1>
            <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
              Explore my journey through code, design, and innovation. From client projects to 
              open-source contributions, here&apos;s a showcase of my passion for creating exceptional 
              digital experiences.
            </motion.p>

            {/* Work Stats (Kept for continuity) */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>50+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>25+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Clients</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>10+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Case Studies</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>100%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Work Tabs Section (Now Maintenance Section) */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className={themeClasses.card}>
              <WorkTabsLayout isDarkMode={isDarkMode} />
            </motion.div>
          </motion.div>
        </div>
        </section>
      </div>
    </>
  );
}
