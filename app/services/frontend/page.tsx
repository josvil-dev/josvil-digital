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
  Monitor, Palette, Zap, Smartphone, Eye, Code2,
  ArrowRight, Check, ExternalLink, Layout
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

export default function FrontendService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "Frontend Development", url: "https://josvil.digital/services/frontend" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Frontend Development Services",
    "description": "Professional frontend development including React applications, responsive design, UI/UX implementation, and modern web interfaces",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "Frontend Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/frontend",
    "offers": {
      "@type": "Offer",
      "name": "Frontend Development Package",
      "description": "Complete frontend solution from design to implementation",
      "price": "450",
      "priceCurrency": "ZAR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "450",
        "priceCurrency": "ZAR",
        "unitText": "per hour"
      }
    }
  };

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices and screen sizes"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern UI/UX",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Fast-loading applications with optimized code and efficient asset management"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Applications that work seamlessly across web, mobile, and desktop platforms"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Accessibility First",
      description: "WCAG compliant interfaces ensuring accessibility for all users"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Frameworks",
      description: "Built with React, Vue, Angular, and other cutting-edge technologies"
    }
  ];

  const technologies = [
    "React.js", "Next.js", "Vue.js", "Angular", "TypeScript",
    "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "SASS/SCSS",
    "Framer Motion", "Redux", "Zustand", "React Query", "Webpack",
    "Vite", "Jest", "Cypress", "Storybook", "Figma to Code"
  ];

  const packages = [
    {
      name: "UI Component Library",
      price: "R18,000",
      description: "Reusable component system for your applications",
      features: [
        "20+ custom components",
        "Design system setup",
        "Documentation",
        "TypeScript support",
        "Theme support",
        "2 months support"
      ],
      timeline: "2-3 weeks"
    },
    {
      name: "Complete Frontend",
      price: "R40,000",
      description: "Full frontend application development",
      features: [
        "Complete app development",
        "Responsive design",
        "State management",
        "API integration",
        "Performance optimization",
        "Testing suite",
        "3 months support"
      ],
      timeline: "4-6 weeks",
      recommended: true
    },
    {
      name: "Enterprise Frontend",
      price: "From R75,000",
      description: "Large-scale frontend applications with advanced features",
      features: [
        "Complex app architecture",
        "Micro-frontend setup",
        "Advanced state management",
        "Performance monitoring",
        "CI/CD integration",
        "Team training",
        "6 months support"
      ],
      timeline: "6-10 weeks"
    }
  ];

  const specializations = [
    {
      title: "React Ecosystem",
      description: "Expert in React, Next.js, and the entire React ecosystem including Redux, React Query, and modern hooks",
      technologies: ["React", "Next.js", "Redux", "React Query", "React Hook Form"]
    },
    {
      title: "Modern CSS",
      description: "Advanced CSS techniques including Flexbox, Grid, animations, and modern frameworks like Tailwind CSS",
      technologies: ["Tailwind CSS", "SASS", "CSS Grid", "Flexbox", "CSS Animations"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize frontend performance with code splitting, lazy loading, and efficient rendering strategies",
      technologies: ["Webpack", "Vite", "Code Splitting", "Lazy Loading", "Bundle Analysis"]
    },
    {
      title: "Design to Code",
      description: "Convert Figma, Adobe XD, and Sketch designs into pixel-perfect, responsive web applications",
      technologies: ["Figma", "Adobe XD", "Sketch", "Zeplin", "Pixel Perfect"]
    }
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-cyan-300 font-medium text-lg mb-4 block" : "text-cyan-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
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
                Frontend Development
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Beautiful</span>
                <br />
                User Interfaces
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Create stunning, responsive user interfaces that engage your audience. 
                From React applications to modern web experiences, I build frontends that convert.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Frontend Project</span>
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
                  <span>View Frontend Work</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <div className="text-cyan-400">
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

            {/* Specializations Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Frontend</span> Specializations
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Areas of expertise in modern frontend development
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={themeClasses.card}
                  >
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {spec.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {spec.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                              : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  <span className={themeClasses.gradientText}>Frontend</span> Technologies
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Modern frontend technologies and tools I use daily
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
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
                  <span className={themeClasses.gradientText}>Frontend</span> Packages
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Choose the perfect frontend solution for your project
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
                          ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/60'
                          : 'border-cyan-400/50 bg-gradient-to-br from-cyan-50/80 to-white/80'
                        : ''
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                        {pkg.name}
                      </h3>
                      <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>
                        {pkg.price}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                        {pkg.timeline}
                      </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {pkg.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-[0_10px_25px_rgba(6,182,212,0.3)]'
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

            {/* CTA Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className={`${themeClasses.card} max-w-2xl mx-auto text-center`}>
                <Layout className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready for Amazing Frontend?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s create a beautiful, responsive frontend that engages your users 
                  and drives your business forward.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your Frontend Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}