'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import JsonLd from '../../Components/JsonLd';
import { 
  createPersonSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema 
} from '../../../lib/jsonld';
import { 
  Code, Globe, Smartphone, Database, Zap, Shield,
  ArrowRight, Check, ExternalLink, Monitor
} from 'lucide-react';

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

export default function WebDevelopmentService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "Web Development", url: "https://josvil.digital/services/web-development" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including React applications, Next.js websites, custom web apps, and full-stack solutions",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "Web Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/web-development",
    "offers": {
      "@type": "Offer",
      "name": "Web Development Package",
      "description": "Complete web development solution from concept to deployment",
      "price": "450",
      "priceCurrency": "ZAR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "450",
        "priceCurrency": "ZAR",
        "unitText": "per hour"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Applications",
            "description": "Custom React.js applications with modern UI/UX"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Websites",
            "description": "Server-side rendered websites with optimal performance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Applications",
            "description": "Complete web applications with frontend and backend"
          }
        }
      ]
    }
  };

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom React Applications",
      description: "Modern, interactive web applications built with React.js and TypeScript"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Next.js Websites",
      description: "Fast, SEO-optimized websites with server-side rendering and static generation"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full-Stack Solutions",
      description: "Complete web applications with database integration and API development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times with modern optimization techniques"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Reliability",
      description: "Secure, scalable applications with best practices and testing"
    }
  ];

  const technologies = [
    "React.js", "Next.js", "TypeScript", "JavaScript ES6+",
    "HTML5", "CSS3", "Tailwind CSS", "SASS/SCSS",
    "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "REST APIs", "GraphQL", "Firebase", "Vercel",
    "Git", "Docker", "AWS", "Testing"
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "R15,000",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO",
        "1 month support"
      ],
      recommended: false
    },
    {
      name: "Professional Website",
      price: "R35,000",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "Up to 15 pages",
        "Custom design",
        "CMS integration",
        "Advanced SEO",
        "E-commerce ready",
        "3 months support"
      ],
      recommended: true
    },
    {
      name: "Enterprise Application",
      price: "From R75,000",
      description: "Complex web applications with custom functionality",
      features: [
        "Unlimited pages",
        "Custom development",
        "Database integration",
        "User authentication",
        "API development",
        "6 months support"
      ],
      recommended: false
    }
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-blue-300 font-medium text-lg mb-4 block" : "text-blue-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <div className={themeClasses.container}>
        {/* Hero Section */}
        <section className={themeClasses.section}>
          <div className={themeClasses.gradient} />
          <div className={themeClasses.backgroundBlur1} />
          <div className={themeClasses.backgroundBlur2} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            {/* Hero Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
                Web Development Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Modern Web</span>
                <br />
                Applications
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Build powerful, scalable web applications with React, Next.js, and modern technologies. 
                From simple websites to complex web applications, I deliver solutions that drive results.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/work"
                  className={`inline-flex items-center gap-2 px-8 py-4 ${
                    isDarkMode 
                      ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10' 
                      : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200'
                  } rounded-xl font-semibold transition-all duration-300`}
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  className={themeClasses.card}
                >
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Technologies Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Technologies</span> I Use
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Modern tools and frameworks for building exceptional web experiences
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Pricing Packages */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Pricing</span> Packages
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Flexible pricing options to fit your project needs and budget
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${themeClasses.card} ${
                      pkg.recommended 
                        ? isDarkMode 
                          ? 'border-blue-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/60'
                          : 'border-blue-400/50 bg-gradient-to-br from-blue-50/80 to-white/80'
                        : ''
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                          Recommended
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                        {pkg.name}
                      </h3>
                      <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-4`}>
                        {pkg.price}
                      </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {pkg.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/contact"
                      className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        pkg.recommended
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]'
                          : isDarkMode
                            ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                            : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}