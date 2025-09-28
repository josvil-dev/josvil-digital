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
  Server, Database, Shield, Cloud, Zap, Code,
  ArrowRight, Check, ExternalLink, HardDrive
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

export default function BackendService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "Backend Development", url: "https://josvil.digital/services/backend" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Backend Development Services",
    "description": "Professional backend development including server architecture, databases, APIs, authentication, and cloud deployment",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "Backend Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/backend",
    "offers": {
      "@type": "Offer",
      "name": "Backend Development Package",
      "description": "Complete backend solution from architecture to deployment",
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
      title: "Server Architecture",
      description: "Scalable server architectures designed for performance and reliability"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Efficient database schemas with MongoDB, PostgreSQL, and MySQL"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Authentication",
      description: "Robust security implementations with JWT, OAuth, and role-based access"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Deployment",
      description: "Deploy on AWS, Google Cloud, Heroku, and other cloud platforms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "High-performance backends with caching, indexing, and load balancing"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation"
    }
  ];

  const technologies = [
    "Node.js", "Express.js", "Python", "Django", "FastAPI",
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "Docker",
    "AWS", "Google Cloud", "Heroku", "JWT", "OAuth",
    "Socket.io", "GraphQL", "REST APIs", "Microservices"
  ];

  const packages = [
    {
      name: "Basic Backend",
      price: "R20,000",
      description: "Simple backend for small applications",
      features: [
        "Basic REST API",
        "Database setup",
        "User authentication",
        "Basic security",
        "Documentation",
        "1 month support"
      ],
      timeline: "2-3 weeks"
    },
    {
      name: "Professional Backend",
      price: "R45,000",
      description: "Comprehensive backend for business applications",
      features: [
        "Advanced API architecture",
        "Multiple database support",
        "Advanced authentication",
        "File upload handling",
        "Email integration",
        "Testing suite",
        "3 months support"
      ],
      timeline: "4-6 weeks",
      recommended: true
    },
    {
      name: "Enterprise Backend",
      price: "From R85,000",
      description: "Scalable backend for large applications",
      features: [
        "Microservices architecture",
        "Multiple databases",
        "Advanced security",
        "Real-time features",
        "Monitoring & logging",
        "CI/CD pipeline",
        "6 months support"
      ],
      timeline: "6-10 weeks"
    }
  ];

  const capabilities = [
    {
      title: "Database Management",
      description: "Design and implement efficient database schemas with proper indexing and relationships"
    },
    {
      title: "API Architecture",
      description: "Build scalable REST and GraphQL APIs with proper documentation and versioning"
    },
    {
      title: "Security Implementation",
      description: "Implement robust security measures including authentication, authorization, and data protection"
    },
    {
      title: "Performance Optimization",
      description: "Optimize backend performance with caching strategies, query optimization, and load balancing"
    }
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-orange-300 font-medium text-lg mb-4 block" : "text-orange-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(234,88,12,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(234,88,12,0.3)]"
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
                Backend Development
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Robust</span>
                <br />
                Server Solutions
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Build scalable, secure backend systems that power your applications. 
                From databases to APIs, create the foundation your business needs to grow.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Backend Project</span>
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
                  <span>View Backend Projects</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20">
                    <div className="text-orange-400">
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

            {/* Capabilities Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Backend</span> Capabilities
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Core backend development services I provide
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={themeClasses.card}
                  >
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {capability.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {capability.description}
                    </p>
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
                  <span className={themeClasses.gradientText}>Backend</span> Technologies
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Modern backend technologies and frameworks I work with
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                          : 'bg-orange-100 text-orange-700 border border-orange-200'
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
                  <span className={themeClasses.gradientText}>Backend</span> Packages
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Choose the right backend solution for your project needs
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
                          ? 'border-orange-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/60'
                          : 'border-orange-400/50 bg-gradient-to-br from-orange-50/80 to-white/80'
                        : ''
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full">
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
                          <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-[0_10px_25px_rgba(234,88,12,0.3)]'
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
                <HardDrive className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Need a Robust Backend?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s build a scalable, secure backend system that powers your application 
                  and grows with your business needs.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your Backend Project</span>
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