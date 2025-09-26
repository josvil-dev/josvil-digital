'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, 
  Code, Palette, Database, Globe, Figma, Github, 
  Server, Layers, Zap, Coffee, Star, Award 
} from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiPostgresql, SiMongodb, SiFigma, SiAdobecreativecloud,
  SiGit, SiDocker, SiAmazon, SiVercel, SiJavascript, SiPython,
  SiFramer, SiNetlify, SiFirebase
} from 'react-icons/si';

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

// Services Tab Component
function ServicesTabLayout({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      description: "Custom web applications built with modern frameworks and best practices",
      features: [
        "Responsive design that works on all devices",
        "Performance optimization for fast loading times",
        "SEO-friendly architecture and clean code",
        "Modern JavaScript frameworks (React, Next.js)",
        "Database integration and API development",
        "E-commerce solutions and payment integration"
      ]
    },
    {
      title: "UI/UX Design", 
      icon: <Palette className="w-6 h-6" />,
      description: "User-centered design solutions that enhance digital experiences",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and brand consistency",
        "Usability testing and optimization",
        "Design systems and component libraries",
        "Mobile-first design approach"
      ]
    },
    {
      title: "Consulting",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Strategic guidance to help your business succeed in the digital landscape",
      features: [
        "Technology stack recommendations",
        "Code review and architecture analysis",
        "Performance audits and optimization",
        "Team training and mentorship",
        "Project planning and roadmap development",
        "Digital transformation strategies"
      ]
    }
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === index
                ? isDarkMode 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : isDarkMode
                  ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {services[index].icon}
            {service.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div>
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            {services[activeTab].title}
          </h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            {services[activeTab].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services[activeTab].features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 flex-shrink-0" />
              <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
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
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-6 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
    cardTitle: isDarkMode ? "text-xl font-bold text-white mb-4" : "text-xl font-bold text-gray-900 mb-4",
    cardDescription: isDarkMode ? "text-gray-300 mb-4" : "text-gray-600 mb-4",
    button: isDarkMode ? "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]" : "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]"
  };

  const experience = [
    {
      period: "2023 - Present",
      title: "Senior Full-Stack Developer & UI/UX Designer", 
      company: "Freelance & Consulting",
      description: "Leading end-to-end development of modern web applications, specializing in React, Next.js, and comprehensive design systems. Managing multiple client projects with focus on user experience and scalable architecture."
    },
    {
      period: "2021 - 2023",
      title: "Full-Stack Developer",
      company: "Digital Agency",
      description: "Developed responsive web applications and e-commerce platforms. Collaborated with design teams to implement pixel-perfect interfaces and optimize user experiences across various industries."
    },
    {
      period: "2019 - 2021",
      title: "Frontend Developer & Designer",
      company: "Startup Environment", 
      description: "Built interactive user interfaces and mobile-responsive websites. Gained expertise in modern JavaScript frameworks while contributing to product design and user research initiatives."
    },
    {
      period: "2017 - 2019",
      title: "Junior Web Developer",
      company: "Learning & Development",
      description: "Started my journey in web development, mastering HTML, CSS, JavaScript, and basic backend technologies. Focused on building solid foundations in programming principles and design thinking."
    }
  ];

  const education = [
    {
      period: "2020 - 2022",
      title: "Full-Stack Development",
      institution: "Online Platforms & Self-taught",
      description: "Comprehensive training in modern web technologies"
    },
    {
      period: "2018 - 2020",
      title: "Computer Science Fundamentals", 
      institution: "Online Coursework",
      description: "Core programming concepts and software engineering principles"
    }
  ];

  const techStack = [
    { 
      category: "Frontend", 
      icon: <Code className="w-6 h-6" />,
      tools: [
        { name: "React", icon: <SiReact className="w-5 h-5 text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 text-pink-500" /> }
      ]
    },
    { 
      category: "Backend", 
      icon: <Server className="w-6 h-6" />,
      tools: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-600" /> },
        { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
        { name: "Python", icon: <SiPython className="w-5 h-5 text-yellow-500" /> }
      ]
    },
    { 
      category: "Design", 
      icon: <Palette className="w-6 h-6" />,
      tools: [
        { name: "Figma", icon: <SiFigma className="w-5 h-5 text-purple-500" /> },
        { name: "Adobe CC", icon: <SiAdobecreativecloud className="w-5 h-5 text-red-500" /> },
        { name: "UI/UX Design", icon: <Layers className="w-5 h-5 text-indigo-500" /> }
      ]
    },
    { 
      category: "Tools", 
      icon: <Zap className="w-6 h-6" />,
      tools: [
        { name: "Git", icon: <SiGit className="w-5 h-5 text-orange-600" /> },
        { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
        { name: "AWS", icon: <SiAmazon className="w-5 h-5 text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5" /> },
        { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-yellow-600" /> }
      ]
    }
  ];

  return (
    <div className={themeClasses.container}>
      {/* Hero Section */}
      <section className={themeClasses.section}>
        <div className={themeClasses.gradient} />
        <div className={themeClasses.backgroundBlur1} />
        <div className={themeClasses.backgroundBlur2} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Hero Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
              About Joshua
            </motion.span>
            <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
              <span className={themeClasses.gradientText}>Creative Developer</span>
              <br />
              & Digital Designer
            </motion.h1>
          </motion.div>

          {/* Intro Section with Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 relative"
          >
            {/* Background decoration elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Image */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/josvil.jpg"
                    alt="Joshua Vilanculo"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" />
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <h2 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                    Hey, I'm Joshua! 👋
                  </h2>
                  <p className={`${themeClasses.description} text-xl leading-relaxed mb-6`}>
                    Welcome to the intersection of design and technology, where creativity and 
                    functionality come together.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                    With over 7 years of experience, I've been crafting seamless digital experiences 
                    that users love and businesses rely on. My journey started with a curiosity about 
                    how things work on the web, and it evolved into a passion for creating meaningful 
                    digital solutions.
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                    I specialize in bridging the gap between design and development, ensuring that 
                    every pixel serves a purpose and every interaction feels intuitive. From concept 
                    to deployment, I'm committed to delivering exceptional results.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>7+</div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>50+</div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold ${themeClasses.gradientText} mb-2`}>100%</div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Client Satisfaction</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section - Modern Design */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 relative"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-20 w-40 h-40 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-20 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            
            <motion.div variants={fadeInUp} className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <Briefcase className="text-indigo-400" size={32} />
                <h2 className={themeClasses.subheading}>My Journey</h2>
              </div>
              <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                From curious beginner to seasoned professional - here's how my career has evolved over the years
              </p>
            </motion.div>
            
            {/* Modern Experience Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className={`relative overflow-hidden rounded-2xl p-6 h-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-sm shadow-lg'
                  } transition-all duration-300 group-hover:border-indigo-400/50`}>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'
                      }`}>
                        <span className={`text-xs font-bold ${
                          isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
                        }`}>
                          {exp.period.split(' - ')[0].slice(-2)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Period */}
                      <div className="inline-block">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isDarkMode ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300' : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight group-hover:text-indigo-400 transition-colors duration-300`}>
                        {exp.title}
                      </h3>
                      
                      {/* Company */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                          {exp.company}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                        {exp.description}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                  </div>

                  {/* Floating elements */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div>
                  <div className={`text-2xl font-bold ${themeClasses.gradientText}`}>4</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Career Stages</div>
                </div>
                <div className={`w-px h-8 ${isDarkMode ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                <div>
                  <div className={`text-2xl font-bold ${themeClasses.gradientText}`}>7+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Growth</div>
                </div>
                <div className={`w-px h-8 ${isDarkMode ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                <div>
                  <div className={`text-2xl font-bold ${themeClasses.gradientText}`}>∞</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Learning</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className={themeClasses.card}>
              <div className="flex items-center gap-3 mb-8">
                <Server className="text-indigo-400" size={32} />
                <h2 className={themeClasses.subheading}>Services</h2>
              </div>
              
              <ServicesTabLayout isDarkMode={isDarkMode} />
            </motion.div>
          </motion.div>

          {/* Tools & Technologies Bento Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className={themeClasses.subheading}>Tools & Technologies</h2>
              <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                A comprehensive toolkit for creating exceptional digital experiences
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {techStack.map((stack, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  className={`${themeClasses.card} relative overflow-hidden group ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : 
                    index === 1 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Dynamic Overlay Shapes */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'
                  } w-24 h-24 ${
                    index === 0 ? 'bg-gradient-to-bl from-indigo-500/20 to-purple-500/20' :
                    index === 1 ? 'bg-gradient-to-tr from-purple-500/20 to-pink-500/20' :
                    index === 2 ? 'bg-gradient-to-bl from-cyan-500/20 to-blue-500/20' :
                    'bg-gradient-to-tr from-emerald-500/20 to-green-500/20'
                  } rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        {stack.icon}
                      </div>
                      <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${
                        index === 0 ? 'text-2xl' : 'text-lg'
                      }`}>
                        {stack.category}
                      </h3>
                    </div>
                    
                    <div className={`grid ${index === 0 ? 'grid-cols-3 gap-3' : 'grid-cols-2 gap-2'}`}>
                      {stack.tools.slice(0, index === 0 ? 6 : 4).map((tool, toolIndex) => (
                        <motion.div
                          key={toolIndex}
                          whileHover={{ scale: 1.1 }}
                          className={`flex items-center gap-2 p-2 rounded-lg ${
                            isDarkMode 
                              ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                              : 'bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200/30'
                          } transition-all duration-200`}
                        >
                          {tool.icon}
                          <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${
                            index === 0 ? 'hidden sm:inline' : ''
                          }`}>
                            {tool.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/work" className={`${themeClasses.button} text-lg px-8 py-4`}>
                  <Globe className="w-5 h-5" />
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
