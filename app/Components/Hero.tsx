'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

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

    const playShowcase = () => {
        alert('Showcase video would play here. You can integrate with any video service or use HTML5 video.');
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-slate-900">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
            >
                <source src="/Video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-indigo-900/90 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-15">
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
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-25 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Main Content Container */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 pt-20">
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-between min-h-[600px] py-20">
                    
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-3xl"
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
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-indigo-500/25 relative overflow-hidden"
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
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] relative overflow-hidden"
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

                    {/* Right Side - Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex-1 max-w-lg hidden lg:block"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotateY: [0, 5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">JV</span>
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Joshua Vilanculo</div>
                                            <div className="text-gray-400 text-sm">Full Stack Developer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Frontend</span>
                                            <span className="text-white">95%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div 
                                                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "95%" }}
                                                transition={{ duration: 1, delay: 1 }}
                                            />
                                        </div>
                                        
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Backend</span>
                                            <span className="text-white">88%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div 
                                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "88%" }}
                                                transition={{ duration: 1, delay: 1.2 }}
                                            />
                                        </div>
                                        
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Design</span>
                                            <span className="text-white">92%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div 
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "92%" }}
                                                transition={{ duration: 1, delay: 1.4 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                                className="flex justify-center gap-4 mt-6"
                            >
                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <Github size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <Twitter size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <Linkedin size={20} />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-sm">Scroll down</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;