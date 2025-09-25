'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero = () => {
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

    return (
        <div className="relative w-full min-h-[75vh] md:min-h-[60vh] overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/jos-vilanculo.jpg")', // Replace with your image path
                }}
            />
            
            {/* Gradient overlay with opacity variation from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 via-slate-800/40 to-slate-900/20 z-10" />
            
            {/* Keep the existing gradient overlays as requested */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-indigo-900/60 z-15" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-20" />

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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm mb-8"
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">Available for new opportunities</span>
                        </motion.div>

                        {/* Introduction */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-indigo-300 font-medium text-lg md:text-xl mb-4 tracking-wide"
                        >
                            Hi, my name is
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Joshua Vilanculo
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-semibold">
                                I build things for the web.
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl"
                        >
                            I am a developer passionate about crafting{' '}
                            <span className="text-indigo-300 font-medium">accessible</span>,{' '}
                            <span className="text-purple-300 font-medium">pixel-perfect</span> user interfaces
                            that blend thoughtful design with robust engineering.
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
                                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10">Let's Talk</span>
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
                                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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