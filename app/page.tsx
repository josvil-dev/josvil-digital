'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from './Components/Hero';

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
    return (
        <>
            <head>
                <title>South African Web Developer | Josvil Digital</title>
                <meta
                    name="description"
                    content="Professional web and app development services by a South African web developer. Specializing in modern, responsive websites and custom applications."
                />
                <meta
                    name="keywords"
                    content="web developer, South Africa, app developer, web development, app development, React, Next.js, frontend, backend, software engineer, Josvil Digital"
                />
                <meta name="author" content="Josvil Digital" />
            </head>
            <div className="min-h-screen bg-slate-900">
              <Hero />
                {/* About Section */}
              <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
                    
                    {/* Animated background elements */}
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
                    
                    <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid lg:grid-cols-2 gap-20 items-center"
                        >
                            <motion.div variants={fadeInUp} className="flex flex-col items-start">
                                <span className="text-indigo-300 font-medium text-lg mb-4 block">About Me</span>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    Bringing Ideas to{' '}
                                    <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                                        Digital Life
                                    </span>
                                </h2>
                                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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
                                        className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-xl font-medium border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-white/20"
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

                {/* Skills Section */}
                <section className="relative py-20 lg:py-32 bg-slate-800/30">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
                    
                    <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-center mb-16"
                        >
                            <motion.span variants={fadeInUp} className="text-indigo-300 font-medium text-lg mb-4 block">
                                Technologies
                            </motion.span>
                            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Skills & Expertise
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-2xl mx-auto">
                                I work with modern technologies to build scalable and performant applications
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                {
                                    category: "Frontend",
                                    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                                    color: "from-indigo-500 to-purple-500"
                                },
                                {
                                    category: "Backend",
                                    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    category: "Tools & Others",
                                    skills: ["Git", "Docker", "AWS", "Figma", "Prisma"],
                                    color: "from-cyan-500 to-blue-500"
                                }
                            ].map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    variants={fadeInUp}
                                    className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-slate-700/40"
                                >
                                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${skillGroup.color}/20 mb-6`}>
                                        <div className={`w-6 h-6 bg-gradient-to-r ${skillGroup.color} rounded-lg`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                                    <div className="space-y-3">
                                        {skillGroup.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                                                <span className="text-gray-300">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Featured Work Section */}
                <section className="relative py-20 lg:py-32 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
                    
                    <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-center mb-16"
                        >
                            <motion.span variants={fadeInUp} className="text-indigo-300 font-medium text-lg mb-4 block">
                                Portfolio
                            </motion.span>
                            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Featured Projects
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-300 text-lg max-w-2xl mx-auto">
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
                                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                                >
                                    <div className="p-8">
                                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${project.color}/20 mb-6`}>
                                            <div className={`w-6 h-6 bg-gradient-to-r ${project.color} rounded-lg`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                        <p className="text-gray-300 mb-6">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href="/work"
                                            className="inline-flex items-center gap-2 text-indigo-300 font-medium hover:text-indigo-200 transition-colors"
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
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white rounded-2xl font-semibold border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-white/20"
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
                <section className="relative py-20 lg:py-32 bg-slate-800/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900" />
                    
                    {/* Animated background elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
                    
                    <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.span variants={fadeInUp} className="text-indigo-300 font-medium text-lg mb-4 block">
                                Get In Touch
                            </motion.span>
                            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Let&apos;s Build Something{' '}
                                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                                    Amazing Together
                                </span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
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
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden"
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
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
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