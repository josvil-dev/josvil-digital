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
  Figma, Zap, Smartphone, Globe, Palette, MousePointer,
  ArrowRight, Check, ExternalLink, Layers
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

export default function FramerService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "Framer Development", url: "https://josvil.digital/services/framer" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Framer Website Development",
    "description": "Professional Framer website development with interactive animations, responsive design, and modern user experiences",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "Framer Development",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/framer",
    "offers": {
      "@type": "Offer",
      "name": "Framer Development Package",
      "description": "Complete Framer website from design to launch",
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
      icon: <MousePointer className="w-6 h-6" />,
      title: "Interactive Animations",
      description: "Engaging micro-interactions and animations that captivate your audience"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Perfect layouts that adapt beautifully to all screen sizes and devices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      description: "Optimized websites with lightning-fast loading times and smooth interactions"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Design Systems",
      description: "Consistent, scalable design systems with reusable components"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built-in SEO features and proper meta tags for better search visibility"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "CMS Integration",
      description: "Easy content management with Framer's built-in CMS capabilities"
    }
  ];

  const packages = [
    {
      name: "Landing Page",
      price: "R12,000",
      description: "Perfect for product launches and marketing campaigns",
      features: [
        "Single page design",
        "Interactive animations",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup"
      ],
      timeline: "1-2 weeks"
    },
    {
      name: "Business Website",
      price: "R25,000",
      description: "Complete website for growing businesses",
      features: [
        "Up to 8 pages",
        "Custom animations",
        "CMS integration",
        "Advanced SEO",
        "Analytics setup",
        "3 months support"
      ],
      timeline: "2-3 weeks",
      recommended: true
    },
    {
      name: "E-commerce Site",
      price: "R45,000",
      description: "Full e-commerce solution with Framer",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "Inventory management",
        "Order tracking",
        "6 months support"
      ],
      timeline: "3-4 weeks"
    }
  ];

  const capabilities = [
    {
      title: "Design to Development",
      description: "Transform Figma designs into fully functional Framer websites with pixel-perfect accuracy"
    },
    {
      title: "Custom Components",
      description: "Build reusable components and interactive elements tailored to your brand"
    },
    {
      title: "Animation Expertise", 
      description: "Create engaging animations and micro-interactions that enhance user experience"
    },
    {
      title: "Performance Optimization",
      description: "Ensure fast loading times and smooth performance across all devices"
    }
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-purple-300 font-medium text-lg mb-4 block" : "text-purple-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)]"
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
                Framer Development
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Interactive</span>
                <br />
                Framer Websites
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Create stunning, interactive websites with Framer&apos;s powerful design tools. 
                Perfect blend of beautiful design and smooth animations that engage your audience.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Framer Project</span>
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
                  <span>View Framer Sites</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <div className="text-purple-400">
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
                  <span className={themeClasses.gradientText}>Framer</span> Capabilities
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  What I can deliver with Framer&apos;s powerful platform
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
                  <span className={themeClasses.gradientText}>Framer</span> Packages
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Choose the perfect package for your Framer website needs
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
                          ? 'border-purple-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/60'
                          : 'border-purple-400/50 bg-gradient-to-br from-purple-50/80 to-white/80'
                        : ''
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
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
                          <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)]'
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
                <Figma className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready for Framer?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s create an interactive, engaging website with Framer that stands out 
                  from the competition and delights your users.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your Framer Project</span>
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