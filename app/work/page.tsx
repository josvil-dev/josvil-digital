'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Code, ExternalLink, Github, Star, Users, 
  BookOpen, ArrowRight, Eye
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

// Work Tabs Component
function WorkTabsLayout({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with Next.js and Stripe integration",
      image: "/josvil.jpg", // Using available image as placeholder
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for SaaS companies with real-time data visualization",
      image: "/jos-vilanculo.jpg",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "/josvil.jpg",
      technologies: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  const caseStudies = [
    {
      title: "Redesigning User Onboarding",
      client: "TechStartup Inc.",
      duration: "3 months",
      description: "Complete redesign of user onboarding flow resulting in 40% increase in user retention",
      challenge: "High user drop-off rate during onboarding process",
      solution: "Simplified multi-step process with progress indicators and interactive tutorials",
      results: ["40% increase in user retention", "60% reduction in support tickets", "25% faster onboarding time"],
      image: "/jos-vilanculo.jpg"
    },
    {
      title: "E-commerce Performance Optimization",
      client: "Fashion Retailer",
      duration: "2 months", 
      description: "Comprehensive performance audit and optimization of high-traffic e-commerce platform",
      challenge: "Slow page load times affecting conversion rates",
      solution: "Code splitting, image optimization, and caching strategies implementation",
      results: ["50% faster page load times", "15% increase in conversion rate", "Improved SEO rankings"],
      image: "/josvil.jpg"
    }
  ];

  const contributions = [
    {
      title: "Open Source UI Library",
      type: "Open Source",
      description: "Contributing to a popular React component library used by 10k+ developers",
      stats: "500+ commits, 50+ PRs merged",
      technologies: ["React", "TypeScript", "Storybook"],
      url: "https://github.com/example"
    },
    {
      title: "Design System Documentation",
      type: "Community",
      description: "Created comprehensive design system guidelines for the developer community",
      stats: "1000+ developers reached",
      technologies: ["Figma", "Documentation", "Design Systems"],
      url: "https://example.com"
    },
    {
      title: "Tech Blog Articles",
      type: "Content",
      description: "Regular technical articles about modern web development practices",
      stats: "25+ articles, 50k+ views",
      technologies: ["Technical Writing", "Web Development", "Best Practices"],
      url: "https://blog.example.com"
    }
  ];

  const tabs = [
    { name: "Portfolio", icon: <Code className="w-5 h-5" />, count: portfolioProjects.length },
    { name: "Case Studies", icon: <BookOpen className="w-5 h-5" />, count: caseStudies.length },
    { name: "Contributions", icon: <Users className="w-5 h-5" />, count: contributions.length }
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === index
                ? isDarkMode 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : isDarkMode
                  ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeTab === index 
                ? 'bg-white/20' 
                : isDarkMode ? 'bg-white/10' : 'bg-gray-200'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Portfolio Tab */}
        {activeTab === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 shadow-lg'
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={project.liveUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </Link>
                    <Link href={project.githubUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                    {project.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 1 && (
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group overflow-hidden rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 shadow-lg'
                }`}
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {study.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        {study.duration}
                      </span>
                    </div>
                    
                    <p className={`${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'} font-medium mb-4`}>
                      {study.client}
                    </p>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {study.description}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          Challenge
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          Solution
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          Results
                        </h4>
                        <ul className="space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} flex items-start gap-2`}>
                              <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contributions Tab */}
        {activeTab === 2 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group p-6 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 shadow-lg'
                } hover:border-indigo-400/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    contribution.type === 'Open Source' 
                      ? isDarkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                      : contribution.type === 'Community'
                      ? isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                      : isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {contribution.type}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {contribution.title}
                </h3>
                
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {contribution.description}
                </p>
                
                <div className="mb-4">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    {contribution.stats}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode 
                          ? 'bg-white/10 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={contribution.url}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    isDarkMode ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-700'
                  } transition-colors`}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Work() {
  const { isDarkMode } = useTheme();

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
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-6 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl"
  };

  return (
    <div className={themeClasses.container}>
      {/* Hero Section */}
      <section className={themeClasses.section}>
        <div className={themeClasses.gradient} />
        <div className={themeClasses.backgroundBlur1} />
        <div className={themeClasses.backgroundBlur2} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Intro Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
              My Work
            </motion.span>
            <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
              <span className={themeClasses.gradientText}>Portfolio</span>
              <br />
              & Projects
            </motion.h1>
            <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
              Explore my journey through code, design, and innovation. From client projects to 
              open-source contributions, here&apos;s a showcase of my passion for creating exceptional 
              digital experiences.
            </motion.p>

            {/* Work Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>50+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>25+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Clients</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>10+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Case Studies</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>100%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Work Tabs Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className={themeClasses.card}>
              <WorkTabsLayout isDarkMode={isDarkMode} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
