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

    const playShowcase = () => {
        alert('Showcase video would play here. You can integrate with any video service or use HTML5 video.');
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/Video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

       

            {/* Main Content Container */}
            <div className="relative z-30 max-w-7xl mx-auto px-10 pt-20">
                <div className="flex flex-col lg:flex-row gap-20 items-center min-h-[600px] py-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-6xl lg:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text text-transparent"
                        ><span className=" text-gray-800 font-bold text-2xl lg:text-3xl md:text-2xl">Hi my name is</span> <br /> Joshua Vilanculo <br className="text-base text-gray-800" /> I build things for the web.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg"
                        >
                            I am a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-5"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)]"
                            >
                                Lets Talk
                                <span>→</span>
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                            >

                               My Work
                                <span>→</span>
                            </Link>
                        </motion.div>
                    </motion.div>


                </div>
            </div>

            {/* Custom Styles for Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
        </div>
    );
};

export default Hero;