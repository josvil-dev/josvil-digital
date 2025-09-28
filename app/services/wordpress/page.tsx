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
    Globe, Paintbrush, ShoppingCart, Search, Shield, Zap,
    ArrowRight, ExternalLink
} from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

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

export default function WordPressService() {
  const { isDarkMode } = useTheme();

  // Create structured data 
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "WordPress Development", url: "https://josvil.digital/services/wordpress" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WordPress Development Services",
    "description": "Professional WordPress development including custom themes, plugins, e-commerce, and maintenance services",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "WordPress Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/wordpress",
    "offers": {
      "@type": "Offer",
      "name": "WordPress Development Package",
      "description": "Complete WordPress solution from design to launch",
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
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes tailored to your brand and functionality needs"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "WooCommerce Integration",
      description: "Complete e-commerce solutions with payment gateways and inventory management"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "WordPress sites optimized for search engines with proper structure and meta data"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Maintenance",
      description: "Regular updates, security monitoring, and performance optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Fast-loading WordPress sites with caching, CDN, and image optimization"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-site Management",
      description: "WordPress multisite networks for managing multiple websites from one dashboard"
    }
  ];

  const services = [
    {
      name: "Custom WordPress Themes",
      description: "Unique, responsive themes built from scratch to match your brand",
      features: ["Mobile-responsive design", "Custom post types", "Advanced Custom Fields", "Page builders compatible"],
      price: "From R25,000"
    },
    {
      name: "WooCommerce Development", 
      description: "Complete e-commerce solutions with WordPress and WooCommerce",
      features: ["Product catalog setup", "Payment gateway integration", "Inventory management", "Order tracking"],
      price: "From R35,000"
    },
    {
      name: "WordPress Maintenance",
      description: "Ongoing maintenance and support for your WordPress website",
      features: ["Regular updates", "Security monitoring", "Performance optimization", "Content updates"],
      price: "From R2,500/month"
    }
  ];

  const technologies = [
    "WordPress", "WooCommerce", "Elementor", "Advanced Custom Fields",
    "PHP", "MySQL", "JavaScript", "CSS3", "SASS",
    "Gutenberg", "REST API", "Custom Post Types", "Hooks & Filters"
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-blue-300 font-medium text-lg mb-4 block" : "text-blue-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
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
                WordPress Development
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Professional</span>
                <br />
                WordPress Solutions
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Create powerful, scalable WordPress websites with custom themes, e-commerce functionality, 
                and ongoing maintenance. Perfect for businesses of all sizes.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start WordPress Project</span>
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
                  <span>View WordPress Sites</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
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

            {/* Services Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>WordPress Services</span>
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Comprehensive WordPress solutions for your business needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={themeClasses.card}
                  >
                    <div className="text-center mb-6">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                        {service.name}
                      </h3>
                      <div className={`text-2xl font-bold ${themeClasses.gradientText} mb-4`}>
                        {service.price}
                      </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <FaCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/contact"
                      className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isDarkMode
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
                  <span className={themeClasses.gradientText}>WordPress</span> Technologies
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Modern WordPress development tools and frameworks
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

            {/* CTA Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className={`${themeClasses.card} max-w-2xl mx-auto text-center`}>
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready for WordPress?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s create a powerful WordPress website that grows with your business 
                  and delivers exceptional user experiences.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your WordPress Project</span>
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