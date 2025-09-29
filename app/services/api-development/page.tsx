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
  Server, Database, Cloud, Lock, Zap,
  ArrowRight, Check, ExternalLink, Code2
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

export default function APIService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "API Development", url: "https://josvil.digital/services/api-development" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "API Development Services",
    "description": "Professional API development including REST APIs, GraphQL, microservices, and third-party integrations",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "API Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/api-development",
    "offers": {
      "@type": "Offer",
      "name": "API Development Package",
      "description": "Complete API development solution from design to deployment",
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
      icon: <Server className="w-6 h-6" />,
      title: "REST API Development",
      description: "Scalable RESTful APIs with proper authentication, validation, and documentation"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "GraphQL APIs",
      description: "Flexible GraphQL APIs for efficient data fetching and real-time updates"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Integration",
      description: "Seamless integration with MongoDB, PostgreSQL, MySQL, and other databases"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Deployment",
      description: "Deploy APIs on AWS, Vercel, Heroku, or other cloud platforms"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security & Authentication",
      description: "JWT tokens, OAuth, API keys, and role-based access control"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Fast, efficient APIs with caching, rate limiting, and monitoring"
    }
  ];

  const apiTypes = [
    {
      name: "REST APIs",
      description: "Traditional REST endpoints for web and mobile applications",
      technologies: ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL"],
      useCases: ["Web Applications", "Mobile Apps", "Third-party Integrations"]
    },
    {
      name: "GraphQL APIs",
      description: "Modern GraphQL APIs for flexible data querying",
      technologies: ["Apollo Server", "GraphQL", "Prisma", "TypeScript"],
      useCases: ["Complex Data Relationships", "Real-time Updates", "Mobile Optimization"]
    },
    {
      name: "Microservices",
      description: "Scalable microservice architecture for enterprise applications",
      technologies: ["Docker", "Kubernetes", "Redis", "Message Queues"],
      useCases: ["Enterprise Systems", "High Traffic Apps", "Distributed Systems"]
    }
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-green-300 font-medium text-lg mb-4 block" : "text-green-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)]"
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
                API Development Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Powerful APIs</span>
                <br />
                & Backend Solutions
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Build robust, scalable APIs and backend systems that power your applications. 
                From simple REST endpoints to complex microservice architectures.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your API Project</span>
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
                  <span>View API Projects</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                    <div className="text-green-400">
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

            {/* API Types Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>API Types</span> I Develop
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Choose the right API architecture for your specific needs and scale
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {apiTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={themeClasses.card}
                  >
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {type.name}
                    </h3>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3 uppercase tracking-wider`}>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDarkMode 
                                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                : 'bg-green-100 text-green-700 border border-green-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3 uppercase tracking-wider`}>
                        Use Cases
                      </h4>
                      <div className="space-y-2">
                        {type.useCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {useCase}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                <Server className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready to Build Your API?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s discuss your backend needs and create a robust API solution 
                  that scales with your business.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Get Started Today</span>
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
