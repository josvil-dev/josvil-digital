'use client';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaFigma, FaAws, FaDocker, FaMobileAlt, FaPaintBrush, FaCloud, FaGithub, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiAdobexd, SiFramer, SiVercel, SiDrupal, SiGooglecloud, SiLaravel, SiWebflow, SiSharp, SiDotnet, SiPhp } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const SkillsBento = () => {
    const { isDarkMode } = useTheme();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const controls = useAnimation();

    // Theme-aware classes
    const themeClasses = {
        section: isDarkMode 
            ? "relative py-4 bg-slate-900" 
            : "relative py-4 bg-gray-50",
        gradient: isDarkMode 
            ? "absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" 
            : "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50",
        backgroundBlur1: isDarkMode 
            ? "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" 
            : "absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl",
        backgroundBlur2: isDarkMode 
            ? "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" 
            : "absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",
        floatingIcons: isDarkMode 
            ? "absolute text-6xl opacity-10" 
            : "absolute text-6xl opacity-20",
        sectionLabel: isDarkMode 
            ? "text-indigo-300 font-medium text-lg mb-4 block" 
            : "text-indigo-600 font-medium text-lg mb-4 block",
        mainHeading: isDarkMode 
            ? "text-4xl lg:text-5xl font-bold text-white mb-6" 
            : "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
        gradientText: isDarkMode 
            ? "bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent" 
            : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent",
        description: isDarkMode 
            ? "text-gray-300 text-lg max-w-2xl mx-auto" 
            : "text-gray-600 text-lg max-w-2xl mx-auto",
        card: isDarkMode 
            ? "group relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20" 
            : "group relative bg-gradient-to-br from-white/80 to-gray-50/60 rounded-3xl border border-gray-200/50 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl",
        cardTitle: isDarkMode 
            ? "text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300" 
            : "text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300",
        cardDescription: isDarkMode 
            ? "text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300" 
            : "text-gray-600 text-sm mb-4 group-hover:text-gray-500 transition-colors duration-300",
        iconContainer: isDarkMode 
            ? "w-16 h-16 flex items-center justify-center text-3xl rounded-lg bg-slate-800/60 border border-white/10 shadow-lg text-white" 
            : "w-16 h-16 flex items-center justify-center text-3xl rounded-lg bg-white/80 border border-gray-200/50 shadow-lg text-gray-700",
        skillText: isDarkMode 
            ? "text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300" 
            : "text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors duration-300",
        ctaButton: isDarkMode 
            ? "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full border border-white/10 backdrop-blur-sm font-medium" 
            : "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full border border-indigo-200/50 backdrop-blur-sm font-medium",
        themeToggle: isDarkMode 
            ? "fixed top-4 right-4 z-50 p-3 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-slate-700/80 transition-colors" 
            : "fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-700 hover:bg-gray-50/80 transition-colors shadow-lg"
    };

    // Floating icons animation (using react-icons)
    const floatingIcons = [
        { icon: <FaReact />, delay: 0, x: '10%', y: '20%' },
        { icon: <FaNodeJs />, delay: 1, x: '80%', y: '10%' },
        { icon: <FaDatabase />, delay: 2, x: '70%', y: '80%' },
        { icon: <FaPaintBrush />, delay: 0.5, x: '20%', y: '70%' },
        { icon: <FaMobileAlt />, delay: 1.5, x: '90%', y: '50%' },
        { icon: <FaCloud />, delay: 2.5, x: '5%', y: '90%' },
        { icon: <FaAws />, delay: 0.8, x: '15%', y: '40%' },
        { icon: <FaGithub />, delay: 1.8, x: '85%', y: '30%' }
    ];

    const skillsData = [
        {
            id: 1,
            title: "Languages",
            skills: [
                "JavaScript (ES6+)", "TypeScript", "Python", "C#", "PHP", "HTML5", "CSS3", "Sass"
            ],
            icon: <FaCode />,
            color: "from-blue-500 to-cyan-500",
            size: "col-span-2 row-span-2",
            description: "Core programming languages I use to build applications",
            toolIcons: [
                <FaJs key="js" />,
                <SiTypescript key="ts" />,
                <FaPython key="python" />,
                <SiSharp key="csharp" />,
                <SiPhp key="php" />,
                <FaHtml5 key="html" />,
                <FaCss3Alt key="css" />
            ]
        },
        {
            id: 2,
            title: "Frameworks",
            skills: ["React", "Next.js", "Node.js", ".NET", "Laravel", "Tailwind CSS", "Bootstrap", "WordPress", "Drupal", "Webflow"],
            icon: <FaReact />,
            color: "from-indigo-500 to-purple-500",
            size: "col-span-1 row-span-2",
            description: "Modern frameworks and libraries for efficient development",
            toolIcons: [
                <FaReact key="react" />,
                <SiNextdotjs key="next" />,
                <FaNodeJs key="node" />,
                <SiDotnet key="dotnet" />,
                <SiLaravel key="laravel" />,
                <SiTailwindcss key="tailwind" />,
                <BsWordpress key="wordpress" />,
                <SiDrupal key="drupal" />,
                <SiWebflow key="webflow" />
            ]
        },
        {
            id: 3,
            title: "Dev Tools",
            skills: ["Git & GitHub", "VS Code", "Figma", "Docker", "AWS", "Azure", "Google Cloud", "Vercel"],
            icon: <FaServer />,
            color: "from-purple-500 to-pink-500",
            size: "col-span-1 row-span-2",
            description: "Development tools and platforms I use daily",
            toolIcons: [
                <FaGithub key="github" />,
                <FaFigma key="figma" />,
                <FaDocker key="docker" />,
                <FaAws key="aws" />,
                <SiGooglecloud key="gcloud" />,
                <SiVercel key="vercel" />
            ]
        },
    ];

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

    const cardVariants = {
        initial: { scale: 1, rotateY: 0 },
        hover: { 
            scale: 1.02, 
            rotateY: 5,
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.98 }
    };

    // Example logos for the first card (replace with your actual logo paths in /public)
    const toolLogos = [
        '/react-logo.png',
        '/nextjs-logo.png',
        '/ts-logo.png',
        '/tailwind-logo.png',
        '/js-logo.png',
    ];
    // Example images for other cards (replace as needed)
    const cardImages = [
        '/node-logo.png',
        '/python-logo.png',
        '/postgres-logo.png',
        '/mongo-logo.png',
        '/docker-logo.png',
    ];

    return (
        <section className={themeClasses.section}>
                <div className={themeClasses.gradient} />
                
                {/* Animated background elements */}
                <div className={themeClasses.backgroundBlur1} />
                <div className={themeClasses.backgroundBlur2} />
                
                {/* Floating Background Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className={themeClasses.floatingIcons}
                            style={{ left: item.x, top: item.y }}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 3,
                                delay: item.delay,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeInUp} className={themeClasses.sectionLabel}>
                        Technical Skills
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className={themeClasses.mainHeading}>
                        Skills &{' '}
                        <span className={themeClasses.gradientText}>
                            Technologies
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className={themeClasses.description}>
                        Interactive showcase of technologies I use to build scalable and performant applications
                    </motion.p>
                </motion.div>
                {/* Bento Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
                >
                    {skillsData.map((skill, idx) => {
                        if (idx === 3) {
                            // Replace the removed 4th card with the CTA
                            return (
                                <div key="cta-replace" className="flex items-center justify-center col-span-1 row-span-1">
                                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full border border-white/10 backdrop-blur-sm font-medium">
                                        <span>✨</span>
                                        <span>Always learning new technologies</span>
                                        <span>🚀</span>
                                    </div>
                                </div>
                            );
                        }
                        // Make second and third cards same height as each other, and expand width on hover
                        let customSize = skill.size;
                        // If second or third card is hovered, first card shrinks
                        if (idx === 0 && (hoveredCard === 2 || hoveredCard === 3)) {
                            customSize = 'col-span-1 row-span-2';
                        }
                        // Second and third cards expand on hover
                        if ((idx === 1 || idx === 2)) {
                            customSize = 'col-span-1 row-span-2';
                            if (hoveredCard === skill.id) {
                                customSize = 'col-span-2 row-span-2';
                            }
                        }
                        return (
                            <motion.div
                                key={skill.id}
                                variants={cardVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                onHoverStart={() => setHoveredCard(skill.id)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className={`${customSize} ${themeClasses.card}`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    zIndex: hoveredCard === skill.id ? 20 : 1 // bring hovered card to front
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                {/* Animated border gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`} />
                                <div className="relative p-6 h-full flex flex-col justify-between z-10">
                                    {/* Icon and title */}
                                    <div>
                                        <motion.div 
                                            className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${skill.color}/20 mb-4`}
                                            animate={hoveredCard === skill.id ? { 
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0]
                                            } : {}}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl text-white">{skill.icon}</span>
                                        </motion.div>
                                        <h3 className={themeClasses.cardTitle}>
                                            {skill.title}
                                        </h3>
                                        <p className={themeClasses.cardDescription}>
                                            {skill.description}
                                        </p>
                                    </div>
                                   
                                    <motion.div
                                        className="absolute left-0 right-0 bottom-0 px-6 pb-6"
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={hoveredCard === skill.id ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        <div className={`grid grid-cols-4 gap-2 rounded-xl p-2 ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/60 border border-gray-200/30'}`}>
                                            {skill.toolIcons && skill.toolIcons.map((icon, i) => (
                                                <span
                                                    key={i}
                                                    className={themeClasses.iconContainer}
                                                >
                                                    {icon && typeof icon === 'object' && 'type' in icon ? (
                                                        <span>{icon}</span>
                                                    ) : (
                                                        icon
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                    {/* Skills list: hide on hover */}
                                    <div className={`space-y-2 transition-opacity duration-300 ${hoveredCard === skill.id ? 'opacity-0' : 'opacity-100'}`}>
                                        {skill.skills.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={hoveredCard === skill.id ? { x: -20, opacity: 0 } : { x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                className="flex items-center gap-2"
                                            >
                                                <motion.div 
                                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                                    animate={hoveredCard === skill.id ? { scale: 1 } : { scale: [1, 1.3, 1] }}
                                                    transition={{ delay: index * 0.1 }}
                                                />
                                                <span className={themeClasses.skillText}>
                                                    {tech}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    {/* Hover effect particles */}
                                    {hoveredCard === skill.id && (
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`
                                                    }}
                                                    animate={{
                                                        y: [0, -20, 0],
                                                        opacity: [0, 1, 0],
                                                        scale: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        delay: i * 0.1,
                                                        repeat: Infinity
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Animated corner accent */}
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                                    animate={hoveredCard === skill.id ? { 
                                        background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, transparent)`
                                    } : {}}
                                    style={{
                                        clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
                {/* Bottom CTA */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <div className={themeClasses.ctaButton}>
                        <span>✨</span>
                        <span>Always learning new technologies</span>
                        <span>🚀</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsBento;