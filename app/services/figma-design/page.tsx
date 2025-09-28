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
  Figma, Palette, Layout, Users, Zap, Eye,
  ArrowRight, Check, ExternalLink, Brush
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

export default function FigmaService() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Services", url: "https://josvil.digital/services" },
    { name: "Figma Design", url: "https://josvil.digital/services/figma-design" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Figma Design Services",
    "description": "Professional Figma design services including UI/UX design, prototyping, design systems, and collaborative design workflows",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "serviceType": "UI/UX Design",
    "areaServed": "Global",
    "url": "https://josvil.digital/services/figma-design",
    "offers": {
      "@type": "Offer",
      "name": "Figma Design Package",
      "description": "Complete Figma design solution from concept to prototype",
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
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and engaging digital experiences"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Systems",
      description: "Comprehensive design systems with reusable components and style guides"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interactive Prototypes",
      description: "High-fidelity prototypes with smooth animations and micro-interactions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Workflow",
      description: "Team-friendly design process with stakeholder feedback and version control"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "User Testing Ready",
      description: "Designs optimized for user testing with clear user flows and scenarios"
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Brand Consistency",
      description: "Maintain brand identity across all touchpoints and user interactions"
    }
  ];

  const designTypes = [
    {
      name: "Web Application Design",
      description: "Complete web app interfaces with modern UX patterns",
      features: ["Responsive layouts", "Component libraries", "User flows", "Interactive prototypes"],
      timeline: "2-4 weeks"
    },
    {
      name: "Mobile App Design",
      description: "Native iOS and Android app designs following platform guidelines",
      features: ["Platform-specific designs", "Gesture interactions", "Icon design", "App store assets"],
      timeline: "3-5 weeks"
    },
    {
      name: "Design System Creation",
      description: "Comprehensive design systems for scalable product development",
      features: ["Component library", "Style guide", "Design tokens", "Documentation"],
      timeline: "4-6 weeks"
    }
  ];

  const packages = [
    {
      name: "UI Design Package",
      price: "R15,000",
      description: "Essential UI design for small projects",
      features: [
        "Up to 10 screens",
        "Basic component library",
        "Style guide",
        "Basic prototyping",
        "2 revision rounds",
        "Design handoff"
      ],
      timeline: "2-3 weeks"
    },
    {
      name: "Complete UX/UI Package",
      price: "R35,000",
      description: "Full UX/UI design process for web or mobile apps",
      features: [
        "User research & personas",
        "Wireframes & user flows",
        "High-fidelity designs",
        "Interactive prototypes",
        "Design system",
        "User testing support",
        "3 revision rounds"
      ],
      timeline: "4-6 weeks",
      recommended: true
    },
    {
      name: "Enterprise Design System",
      price: "From R65,000",
      description: "Comprehensive design system for large organizations",
      features: [
        "Complete design system",
        "Component documentation",
        "Design tokens",
        "Brand guidelines",
        "Team training",
        "Ongoing support",
        "Unlimited revisions"
      ],
      timeline: "6-10 weeks"
    }
  ];

  const capabilities = [
    {
      title: "User Research & Analysis",
      description: "Understand your users through research, personas, and journey mapping to inform design decisions"
    },
    {
      title: "Wireframing & Prototyping",
      description: "Create low and high-fidelity wireframes and interactive prototypes for user testing"
    },
    {
      title: "Visual Design & Branding",
      description: "Develop cohesive visual identity and apply brand guidelines across all design elements"
    },
    {
      title: "Design System Architecture",
      description: "Build scalable design systems with reusable components and comprehensive documentation"
    }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Principle", "ProtoPie",
    "Adobe Creative Suite", "Zeplin", "InVision", "Miro", "Whimsical"
  ];

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-pink-300 font-medium text-lg mb-4 block" : "text-pink-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
    subheading: isDarkMode ? "text-2xl lg:text-3xl font-bold text-white mb-6" : "text-2xl lg:text-3xl font-bold text-gray-900 mb-6",
    gradientText: isDarkMode ? "bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 via-rose-600 to-violet-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    button: isDarkMode ? "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)]" : "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)]"
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
                Figma Design Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Exceptional</span>
                <br />
                UI/UX Design
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                Create user-centered designs that drive engagement and conversions. 
                From wireframes to high-fidelity prototypes, I design experiences that users love.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Design Project</span>
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
                  <span>View Design Work</span>
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
                  <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-pink-500/20 to-rose-500/20">
                    <div className="text-pink-400">
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

            {/* Design Types Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Design</span> Specializations
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Types of design projects I excel at
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {designTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={themeClasses.card}
                  >
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {type.name}
                    </h3>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {type.description}
                    </p>

                    <div className="mb-4">
                      <div className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-3 uppercase tracking-wider`}>
                        Includes
                      </div>
                      <div className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-pink-400 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`text-sm ${isDarkMode ? 'text-pink-300' : 'text-pink-600'} font-medium`}>
                      Timeline: {type.timeline}
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  <span className={themeClasses.gradientText}>Design</span> Process
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  My comprehensive approach to design projects
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

            {/* Tools Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Design</span> Tools
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Professional design tools I use for creating exceptional experiences
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' 
                          : 'bg-pink-100 text-pink-700 border border-pink-200'
                      }`}
                    >
                      {tool}
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
                  <span className={themeClasses.gradientText}>Design</span> Packages
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Choose the perfect design package for your project
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
                          ? 'border-pink-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/60'
                          : 'border-pink-400/50 bg-gradient-to-br from-pink-50/80 to-white/80'
                        : ''
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold rounded-full">
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
                          <Check className="w-5 h-5 text-pink-400 flex-shrink-0" />
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
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-[0_10px_25px_rgba(236,72,153,0.3)]'
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
                <Figma className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready for Great Design?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s create designs that not only look amazing but also solve real 
                  user problems and drive business results.
                </p>
                <Link href="/contact" className={themeClasses.button}>
                  <span>Start Your Design Project</span>
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