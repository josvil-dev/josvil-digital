'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import JsonLd from '../Components/JsonLd';
import { 
  createPersonSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema,
  createServiceSchema
} from '../../lib/jsonld';
import { 
  Code, Palette, Briefcase, ArrowRight, Check,
  Globe, Smartphone
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

export default function Services() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const serviceSchema = createServiceSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" }
  ]);

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Development Services",
    "description": "Comprehensive web development, UI/UX design, and digital consulting services by Joshua Vilanculo",
    "url": "https://josvil.digital/services",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "areaServed": "Global",
    "serviceType": [
      "Web Development",
      "UI/UX Design",
      "Frontend Development", 
      "Backend Development",
      "Mobile App Development",
      "Technical Consulting"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Web Development",
        "description": "Custom web applications using modern frameworks",
        "price": "Contact for quote"
      },
      {
        "@type": "Offer",
        "name": "UI/UX Design",
        "description": "User-centered design for digital products",
        "price": "Contact for quote"
      },
      {
        "@type": "Offer",
        "name": "Mobile Development",
        "description": "Cross-platform mobile applications",
        "price": "Contact for quote"
      }
    ]
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices",
      features: [
        "React & Next.js Applications",
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "API Development",
        "Database Integration"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance digital experiences",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
        "Mobile-First Design"
      ],
      technologies: ["Figma", "Adobe CC", "Framer", "Principle"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android",
      features: [
        "React Native Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "Maintenance & Updates"
      ],
      technologies: ["React Native", "Expo", "Firebase", "Redux"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Strategic guidance to help your business succeed in the digital landscape",
      features: [
        "Technology Stack Recommendations",
        "Code Review & Architecture",
        "Performance Audits",
        "Team Training",
        "Project Planning",
        "Digital Transformation"
      ],
      technologies: ["Architecture", "DevOps", "Best Practices", "Mentoring"]
    }
  ];

  // Theme-aware classes
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
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)]"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesPageSchema} />

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
                Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Professional</span>
                <br />
                Web Development
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                From concept to deployment, I provide comprehensive web development services 
                that help businesses succeed in the digital world. Let&apos;s build something amazing together.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mb-20"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  className={themeClasses.card}
                >
                  <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' :
                    index === 1 ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' :
                    index === 2 ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' :
                    'bg-gradient-to-r from-orange-500/20 to-red-500/20'
                  }`}>
                    <div className={`${
                      index === 0 ? 'text-blue-400' :
                      index === 1 ? 'text-purple-400' :
                      index === 2 ? 'text-green-400' :
                      'text-orange-400'
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${
                          index === 0 ? 'text-blue-400' :
                          index === 1 ? 'text-purple-400' :
                          index === 2 ? 'text-green-400' :
                          'text-orange-400'
                        }`} />
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDarkMode 
                            ? 'bg-white/10 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
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
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready to Start Your Project?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s discuss your project requirements and create a solution 
                  that perfectly fits your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className={themeClasses.button}>
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/work"
                      className={`inline-flex items-center gap-2 px-8 py-4 ${
                        isDarkMode 
                          ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10' 
                          : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200'
                      } rounded-xl font-semibold transition-all duration-300`}
                    >
                      <span>View Portfolio</span>
                      <Globe className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}