'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from './Components/Hero';
import SkillsBento from './Components/SkillsBento';
import { useTheme } from './contexts/ThemeContext';


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

const metadata = {
  title: "South African Web Developer | Josvil Digital",
  description: "Professional web and app development services by a South African web developer. Specializing in modern, responsive websites and custom applications.",
  keywords: [
    "web developer",
    "South Africa",
    "app developer",
    "web development",
    "app development",
    "React",
    "Next.js",
    "frontend",
    "backend",
    "software engineer",
    "Josvil Digital"
  ],
  authors: [{ name: "Josvil Digital" }]
};

export default function Home() {
  const { isDarkMode } = useTheme();

  // Theme-aware classes
  const themeClasses = {
    container: isDarkMode ? "min-h-screen bg-slate-900" : "min-h-screen bg-gray-50",
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
      <div className={themeClasses.container}>
        <Hero />
        
        {/* About Section */}
        <section className={themeClasses.section}>
          <div className={themeClasses.gradient} />

          {/* Animated background elements */}
          <div className={themeClasses.backgroundBlur1} />
          <div className={themeClasses.backgroundBlur2} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
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

        {/* Featured Work Section */}
        <section className={themeClasses.section}>
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
        </section>

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
                    href="mailto:joshua@example.com"
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