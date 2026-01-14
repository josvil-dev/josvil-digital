'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
    const { isDarkMode } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Theme-aware classes
    const themeClasses = {
        container: isDarkMode 
            ? "relative w-full min-h-[75vh] md:min-h-[60vh] overflow-hidden bg-slate-900" 
            : "relative w-full min-h-[75vh] md:min-h-[60vh] overflow-hidden bg-gray-50",
        gradientOverlay: isDarkMode 
            ? "absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/20 z-10" 
            : "absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 z-10",
        secondaryGradient: isDarkMode 
            ? "absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-indigo-900/60 z-15" 
            : "absolute inset-0 bg-gradient-to-br from-gray-50/60 via-gray-100/50 to-indigo-100/60 z-15",
        bottomGradient: isDarkMode 
            ? "absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-20" 
            : "absolute inset-0 bg-gradient-to-t from-gray-50/70 via-transparent to-transparent z-20",
        statusBadge: isDarkMode 
            ? "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm mb-8" 
            : "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-200/30 backdrop-blur-sm mb-8",
        statusText: isDarkMode ? "text-white/90 text-sm font-medium" : "text-gray-700 text-sm font-medium",
        introText: isDarkMode ? "text-indigo-300 font-medium text-lg md:text-xl mb-4 tracking-wide" : "text-indigo-600 font-medium text-lg md:text-xl mb-4 tracking-wide",
        nameGradient: isDarkMode 
            ? "bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" 
            : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent",
        taglineGradient: isDarkMode 
            ? "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-semibold" 
            : "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-semibold",
        description: isDarkMode ? "text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl" : "text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl",
        accentText1: isDarkMode ? "text-indigo-300 font-medium" : "text-indigo-600 font-medium",
        accentText2: isDarkMode ? "text-purple-300 font-medium" : "text-purple-600 font-medium",
        primaryButton: isDarkMode 
            ? "group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden" 
            : "group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden",
        secondaryButton: isDarkMode 
            ? "group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] relative overflow-hidden" 
            : "group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900/5 backdrop-blur-xl text-gray-900 rounded-2xl font-semibold text-lg border border-gray-300/30 transition-all duration-300 hover:bg-gray-900/10 hover:border-gray-400/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden"
    };

    return (
        <div className={themeClasses.container}>
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/jos-vilanculo.jpg")', // Replace with your image path
                }}
            />
            
            {/* Gradient overlay with opacity variation from left to right */}
            <div className={themeClasses.gradientOverlay} />
            
            {/* Keep the existing gradient overlays as requested */}
            <div className={themeClasses.secondaryGradient} />
            <div className={themeClasses.bottomGradient} />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-25">
                <motion.div
                    animate={{
                        x: mousePosition.x * 50,
                        y: mousePosition.y * 50,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: mousePosition.x * -30,
                        y: mousePosition.y * -30,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 pt-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-between min-h-[600px] py-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-8xl"
                    >
                        {/* Greeting Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={themeClasses.statusBadge}
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className={themeClasses.statusText}>Available for new opportunities</span>
                        </motion.div>

                        {/* Introduction */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={themeClasses.introText}
                        >
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-3xl font-bold text-white md:text-5xl lg:text-7xl box"
                        >
                            <span className={themeClasses.nameGradient}>
                               Hi! I&apos;m Joshua Vilanculo
                            </span>
                            <br />
                            <span className={themeClasses.taglineGradient}>
                               Let&apos;s Build your way but with my Expertise.
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className={themeClasses.description}
                        >
                            I specialize in transforming complex{' '}
                            <span className={themeClasses.accentText1}>business</span>,{' '} problems into {' '} 
                            <span className={themeClasses.accentText2}>elegent</span>{' '}  high perfomance digital solutions that drive real-world engagement.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col md:flex-row gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/contact"
                                    className={themeClasses.primaryButton}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10">Let&apos;s Talk</span>
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
                                    href="/work"
                                    className={themeClasses.secondaryButton}
                                >
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-gradient-to-r from-white/5 to-white/10' : 'bg-gradient-to-r from-gray-900/5 to-gray-900/10'}`} />
                                    <span className="relative z-10">My Work</span>
                                    <motion.span
                                        className="relative z-10 text-xl"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;