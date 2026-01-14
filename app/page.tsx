'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from './Components/Hero';
import SkillsBento from './Components/SkillsBento';
import JsonLd from './Components/JsonLd';
import { useTheme } from './contexts/ThemeContext';
import { 
  createPersonSchema, 
  createWebsiteSchema, 
  createOrganizationSchema,
  createServiceSchema 
} from '../lib/jsonld';


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



export default function Home() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const websiteSchema = createWebsiteSchema();
  const organizationSchema = createOrganizationSchema();
  const serviceSchema = createServiceSchema();
  
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Joshua Vilanculo Portfolio",
    "description": "A collection of web development projects showcasing expertise in React, Next.js, and modern web technologies.",
    "url": "https://josvil.digital",
    "author": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "creator": {
      "@type": "Person", 
      "name": "Joshua Vilanculo"
    },
    "about": [
      "Web Development",
      "React Development", 
      "Next.js Applications",
      "UI/UX Design",
      "Full Stack Development"
    ],
    "dateCreated": "2019",
    "inLanguage": "en"
  };

  // Theme-aware classes
  const themeClasses = {
    // Make the root container full-width and hide horizontal overflow to remove right-side gap on mobile
    container: isDarkMode
      ? "min-h-screen w-full overflow-x-hidden bg-slate-900"
      : "min-h-screen w-full overflow-x-hidden bg-gray-50",
    section: isDarkMode ? "relative py-20 lg:py-32 bg-slate-900 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-50 overflow-hidden",
    gradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
    backgroundBlur1: isDarkMode ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl",
    backgroundBlur2: isDarkMode ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",
    sectionLabel: isDarkMode ? "text-indigo-300 font-medium text-lg mb-4 block" : "text-indigo-600 font-medium text-lg mb-4 block",
    heading: isDarkMode ? "text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" : "text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight",
    gradientText: isDarkMode ? "bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent",
    description: isDarkMode ? "text-gray-300 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed",
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    cardTitle: isDarkMode ? "text-2xl font-bold text-white mb-4" : "text-2xl font-bold text-gray-900 mb-4",
    cardDescription: isDarkMode ? "text-gray-300 mb-6" : "text-gray-600 mb-6",
    techBadge: isDarkMode ? "px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10" : "px-3 py-1 bg-gray-900/5 text-gray-700 rounded-lg text-sm border border-gray-200/30",
    link: isDarkMode ? "inline-flex items-center gap-2 text-indigo-300 font-medium hover:text-indigo-200 transition-colors" : "inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-500 transition-colors",
    button: isDarkMode ? "group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-2xl font-semibold border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-white/20" : "group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-gray-900 rounded-2xl font-semibold border border-indigo-200/50 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-300/60",
    contactSection: isDarkMode ? "relative py-20 lg:py-32 bg-slate-800/30 overflow-hidden" : "relative py-20 lg:py-32 bg-gray-100/50 overflow-hidden",
    contactGradient: isDarkMode ? "absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900" : "absolute inset-0 bg-gradient-to-b from-gray-50/50 via-gray-100/30 to-gray-50",
    primaryCTA: isDarkMode ? "group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden" : "group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden",
    secondaryCTA: isDarkMode ? "group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20" : "group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900/5 backdrop-blur-xl text-gray-900 rounded-2xl font-semibold text-lg border border-gray-300/30 transition-all duration-300 hover:bg-gray-900/10 hover:border-gray-400/40"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={portfolioSchema} />

      <div className={themeClasses.container}>
        <Hero />
        
        {/* About Section */}
        <section className={themeClasses.section}>
          <div className={themeClasses.gradient} />

          {/* Animated background elements */}
          <div className={themeClasses.backgroundBlur1} />
          <div className={themeClasses.backgroundBlur2} />

          <div className="relative max-w-full mx-auto px-6 md:px-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              <motion.div variants={fadeInUp} className="flex flex-col items-start">
                <span className={themeClasses.sectionLabel}>About Me</span>
                <h2 className={themeClasses.heading}>
                  Bringing Ideas to{' '}
                  <span className={themeClasses.gradientText}>
                    Digital Life
                  </span>
                </h2>
                <div className={`space-y-6 ${themeClasses.description}`}>
                  <p>
                    With over 5 years of experience in web development, I specialize in creating
                    exceptional digital experiences that combine beautiful design with powerful functionality.
                  </p>
                  <p>
                    I believe that great software is built with empathy, attention to detail, and a
                    deep understanding of user needs. My approach focuses on writing clean,
                    maintainable code while delivering pixel-perfect interfaces.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Link
                    href="/about"
                    className={themeClasses.button}
                  >
                    <span>Learn More About Me</span>
                    <motion.span
                      className="text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
                {/* Image on the right */}
                <motion.div className="mb-8 lg:mb-0">
                  <Image
                    src="/josvil.jpg" // Replace with your image path
                    alt="Joshua Vilanculo Profile"
                    width={1200}
                    height={500}
                    className="rounded-xl object-cover max-w-full h-auto shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Using the new Bento Component */}
        <SkillsBento />

        {/* Services Section */}
        <section className={themeClasses.section}>
          <div className={themeClasses.gradient} />

          {/* Floating React Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 left-[10%] text-indigo-400/20"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.563-.455-.468-.91-.991-1.36-1.563z"/>
              </svg>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 30, 0],
                x: [0, -15, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-32 right-[15%] text-purple-400/20"
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.956 1.669 13.94.265c-.746-.35-1.619-.604-2.573-.753a13.787 13.787 0 0 0-1.498-.092v.005z"/>
              </svg>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -25, 0],
                x: [0, 20, 0],
                rotate: [0, 20, -10, 0],
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-20 left-[20%] text-cyan-400/20"
            >
              <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm7.5-5.206v10.412c0 .086.094.139.162.093l6.685-4.206a.109.109 0 0 0 0-.186L7.662 6.113a.109.109 0 0 0-.162.093z"/>
              </svg>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -20, 20, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-32 right-[25%] text-indigo-300/20"
            >
              <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
              </svg>
            </motion.div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
                Services
              </motion.span>
              
              {/* Animated divider line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-px mx-auto mb-12 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300/50 to-transparent'} max-w-xs`}
              />

              {/* Animated Service Headers */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { title: "UI/UX DESIGN", delay: 0 },
                  { title: "WEB DEVELOPMENT", delay: 0.1 },
                { title: "API INTEGRATION", delay: 0.2 }
                ].map((service) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: service.delay }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="relative overflow-hidden"
                  >
                    <motion.h2 
                      className={`text-3xl md:text-4xl font-bold tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      } cursor-pointer relative`}
                      whileHover={{
                        backgroundImage: isDarkMode 
                          ? "linear-gradient(45deg, #6366f1, #a855f7, #06b6d4)"
                          : "linear-gradient(45deg, #4f46e5, #7c3aed, #0891b2)",
                        backgroundClip: "text",
                        color: "transparent",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {service.title}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-0.5 ${
                          isDarkMode ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h2>
                  </motion.div>
                ))}
              </div>

              {/* Bottom divider line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-px mx-auto mb-12 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300/50 to-transparent'} max-w-md`}
              />

              {/* Description and CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <p className={`text-lg md:text-xl leading-relaxed mb-8 ${themeClasses.description}`}>
                  We craft meaningful experiences through UI/UX design, development, and motion design—turning your vision into a solution that truly connects.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className={`group inline-flex items-center justify-center gap-3 px-8 py-4 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500' 
                        : 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
                    } text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden`}
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Get in touch for a consultation</span>
                    <motion.span
                      className="relative z-10 text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work Section */}
        {/* <section className={themeClasses.section}>
          <div className={themeClasses.gradient} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
                Portfolio
              </motion.span>
              <motion.h2 variants={fadeInUp} className={themeClasses.heading}>
                Featured Projects
              </motion.h2>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-2xl mx-auto`}>
                A selection of recent projects that showcase my skills and passion for creating exceptional web experiences
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-8 mb-12"
            >
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern e-commerce solution built with Next.js and Stripe integration.",
                  tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "SaaS Dashboard",
                  description: "A comprehensive dashboard for project management with real-time collaboration.",
                  tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
                  color: "from-purple-500 to-pink-500"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={themeClasses.card}
                >
                  <div className="p-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${project.color}/20 mb-6`}>
                      <div className={`w-6 h-6 bg-gradient-to-r ${project.color} rounded-lg`} />
                    </div>
                    <h3 className={themeClasses.cardTitle}>{project.title}</h3>
                    <p className={themeClasses.cardDescription}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={themeClasses.techBadge}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/work"
                      className={themeClasses.link}
                    >
                      View Project
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center"
            >
              <Link
                href="/work"
                className={themeClasses.button}
              >
                <span>View All Projects</span>
                <motion.span
                  className="text-xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className={themeClasses.contactSection}>
          <div className={themeClasses.contactGradient} />

          {/* Animated background elements */}
          <div className={themeClasses.backgroundBlur1} />
          <div className={themeClasses.backgroundBlur2} />

          <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
                Get In Touch
              </motion.span>
              <motion.h2 variants={fadeInUp} className={themeClasses.heading}>
                Let&apos;s Build Something{' '}
                <span className={themeClasses.gradientText}>
                  Amazing Together
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={`${themeClasses.description} mb-12 max-w-2xl mx-auto`}>
                Whether you have a project in mind or just want to chat about technology,
                I&apos;d love to hear from you. Let&apos;s create something extraordinary.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className={themeClasses.primaryCTA}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Start a Conversation</span>
                    <motion.span
                      className="relative z-10 text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="mailto:josvilanculo@gmail.com"
                    className={themeClasses.secondaryCTA}
                  >
                    <span>Send an Email</span>
                    <span className="text-xl">✉</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}