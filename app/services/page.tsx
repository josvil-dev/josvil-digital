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
    Code, Server, Globe, Figma,
    ArrowRight, Check, ExternalLink, Zap, Users,
} from 'lucide-react';
import { FaWordpress } from 'react-icons/fa';

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
      "API Development",
      "WordPress Development",
      "Framer Development",
      "Frontend Development", 
      "Backend Development",
      "UI/UX Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web applications using modern frameworks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "RESTful and GraphQL APIs with comprehensive documentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User-centered design for digital products"
          }
        }
      ]
    }
  };

  

        const services = [
          {
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            description: "Custom web applications built with modern frameworks and best practices",
            features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Implementation"],
            price: "From R15,000",
            href: "/services/web-development",
            color: "from-blue-500 to-cyan-500",
            textColor: "text-blue-400"
          },
          {
            icon: <Server className="w-8 h-8" />,
            title: "API Development",
            description: "Robust APIs and backend systems that power your applications",
            features: ["REST & GraphQL APIs", "Database Integration", "Authentication", "Cloud Deployment"],
            price: "From R20,000",
            href: "/services/api-development",
            color: "from-green-500 to-emerald-500",
            textColor: "text-green-400"
          },
          {
            icon: <FaWordpress className="w-8 h-8" />,
            title: "WordPress Development",
            description: "Professional WordPress websites with custom themes and functionality",
            features: ["Custom Themes", "WooCommerce", "SEO Optimization", "Maintenance"],
            price: "From R25,000",
            href: "/services/wordpress",
            color: "from-indigo-500 to-purple-500",
            textColor: "text-indigo-400"
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Framer Development",
            description: "Interactive websites with stunning animations and modern design",
            features: ["Interactive Animations", "Responsive Design", "CMS Integration", "Fast Performance"],
            price: "From R12,000",
            href: "/services/framer",
            color: "from-purple-500 to-pink-500",
            textColor: "text-purple-400"
          },
      
          {
            icon: <Server className="w-8 h-8" />,
            title: "Backend Development",
            description: "Scalable server solutions and database architectures",
            features: ["Server Architecture", "Database Design", "Security Implementation", "Cloud Deployment"],
            price: "From R20,000",
            href: "/services/backend",
            color: "from-orange-500 to-red-500",
            textColor: "text-orange-400"
          },
          {
            icon: <Figma className="w-8 h-8" />,
            title: "Figma Design",
            description: "User-centered design solutions that drive engagement and conversions",
            features: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
            price: "From R15,000",
            href: "/services/figma-design",
            color: "from-pink-500 to-rose-500",
            textColor: "text-pink-400"
          }
        ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and project requirements through detailed consultation."
    },
    {
      number: "02", 
      title: "Design & Development",
      description: "Creating wireframes, designs, and developing your solution using modern technologies and best practices."
    },
    {
      number: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing, performance optimization, and ensuring everything works perfectly across all devices."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support, maintenance, and updates as needed."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
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

  // Import missing icon
  const Monitor = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

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
                Professional Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
                <span className={themeClasses.gradientText}>Full-Stack</span>
                <br />
                Development Solutions
              </motion.h1>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
                From concept to deployment, I provide comprehensive web development services 
                that help businesses succeed in the digital world. Let&apos;s build something amazing together.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={themeClasses.button}>
                  <span>Get Started</span>
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

            {/* Stats Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${themeClasses.gradientText} mb-2`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>Services</span> I Offer
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  Comprehensive web development solutions tailored to your business needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, rotate: Math.random() > 0.5 ? 1 : -1 }}
                    className={themeClasses.card}
                  >
                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.color}/20`}>
                      <div className={service.textColor}>
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
                          <Check className={`w-4 h-4 ${service.textColor} flex-shrink-0`} />
                          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className={`text-lg font-bold ${service.textColor}`}>
                        {service.price}
                      </div>
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-2 px-4 py-2 ${
                          isDarkMode 
                            ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                            : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200'
                        } rounded-lg font-medium transition-all duration-300`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className={themeClasses.subheading}>
                  <span className={themeClasses.gradientText}>How</span> I Work
                </h2>
                <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                  A proven process that ensures successful project delivery every time
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`${themeClasses.card} text-center`}
                  >
                    <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-4`}>
                      {step.number}
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                      {step.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {step.description}
                    </p>
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
                <Zap className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                <h2 className={`${themeClasses.subheading} mb-4`}>
                  Ready to Start Your Project?
                </h2>
                <p className={`${themeClasses.description} mb-8`}>
                  Let&apos;s discuss your project requirements and create a solution 
                  that perfectly fits your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className={themeClasses.button}>
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className={`inline-flex items-center gap-2 px-8 py-4 ${
                      isDarkMode 
                        ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10' 
                        : 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200'
                    } rounded-xl font-semibold transition-all duration-300`}
                  >
                    <span>Learn About Me</span>
                    <Users className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}