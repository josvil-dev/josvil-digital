'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Navbar Component
const Navbar = () => {
    const { isDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [typewriterKey, setTypewriterKey] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typewriter effect restart every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTypewriterKey(prev => prev + 1);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    // Theme-aware classes
    const themeClasses = {
        navbar: isDarkMode 
            ? (isScrolled 
                ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
                : 'bg-transparent')
            : (isScrolled 
                ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
                : 'bg-transparent'),
        logo: isDarkMode ? 'text-white font-mono capitalize font-semibold text-xl hidden sm:block' : 'text-gray-900 font-semibold text-xl hidden sm:block',
        ctaButton: isDarkMode ? 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]' : 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]',
        mobileButton: isDarkMode ? 'md:hidden p-2 text-white bg-white/10 backdrop-blur-sm rounded-lg border border-white/10' : 'md:hidden p-2 text-gray-700 bg-gray-900/10 backdrop-blur-sm rounded-lg border border-gray-300/30',
        mobileMenu: isDarkMode ? 'md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10' : 'md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50',
        mobileLink: isDarkMode ? 'block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2' : 'block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium py-2',
        mobileCTA: isDarkMode ? 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold w-full justify-center' : 'inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold w-full justify-center'
    };

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${themeClasses.navbar}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">JV</span>
                            </div>
                            <span className={themeClasses.logo}>
                                {"JOSVIL_".split("").map((char, index) => (
                                    <motion.span
                                        key={`${typewriterKey}-${index}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.05,
                                            delay: 0.5 + index * 0.1,
                                            ease: "easeInOut"
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    key={`cursor-${typewriterKey}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: 1.3,
                                        ease: "easeInOut"
                                    }}
                                    className="ml-1"
                                >
                                    |
                                </motion.span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Next to Logo */}
                    <div className="hidden md:flex items-center gap-10 ml-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <Link
                                    href={item.href}
                                    className={`relative font-normal transition-colors duration-300 flex items-center gap-1 ${
                                        isDarkMode 
                                            ? 'text-white/90 hover:text-white' 
                                            : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    {item.name}
                                    <motion.svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 180 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path d="m6 9 6 6 6-6"/>
                                    </motion.svg>
                                </Link>
                                
                                {/* Hover dot indicator */}
                                <motion.div
                                    className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full ${
                                        isDarkMode 
                                            ? 'bg-gradient-to-r from-indigo-400 to-purple-400' 
                                            : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                                    }`}
                                    initial={{ scale: 0, x: '-50%' }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Icons - Right Side */}
                    <div className="hidden md:flex items-center gap-4 ml-auto">
                        {[
                            { name: 'GitHub', href: 'https://github.com', icon: Github },
                            { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
                            { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2 rounded-lg transition-all duration-300 ${
                                        isDarkMode 
                                            ? 'text-white/70 hover:text-white hover:bg-white/10' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                                    }`}
                                    aria-label={social.name}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={themeClasses.mobileButton}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={themeClasses.mobileMenu}
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={themeClasses.mobileLink}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            {/* Mobile Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className={`pt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200/30'}`}
                            >
                                <div className="flex justify-center gap-6">
                                    {[
                                        { name: 'GitHub', href: 'https://github.com', icon: Github },
                                        { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
                                        { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
                                    ].map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`p-3 rounded-full transition-all duration-300 ${
                                                    isDarkMode 
                                                        ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                                                        : 'bg-gray-900/5 border border-gray-200/30 text-gray-700 hover:bg-gray-900/10 hover:border-gray-300/50'
                                                }`}
                                                aria-label={social.name}
                                            >
                                                <Icon size={18} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

// Footer Component
const Footer = () => {
    const { isDarkMode } = useTheme();
    const currentYear = new Date().getFullYear();

    // Theme-aware classes
    const themeClasses = {
        footer: isDarkMode ? 'relative bg-slate-900 border-t border-white/10' : 'relative bg-gray-50 border-t border-gray-200/50',
        backgroundBlur1: isDarkMode ? 'absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl' : 'absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl',
        backgroundBlur2: isDarkMode ? 'absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl' : 'absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl',
        brandName: isDarkMode ? 'text-white font-semibold text-2xl' : 'text-gray-900 font-semibold text-2xl',
        description: isDarkMode ? 'text-gray-300 leading-relaxed mb-6 max-w-md' : 'text-gray-600 leading-relaxed mb-6 max-w-md',
        contactText: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        contactLink: isDarkMode ? 'hover:text-white transition-colors' : 'hover:text-gray-900 transition-colors',
        socialButton: isDarkMode ? 'p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300' : 'p-3 bg-gray-900/5 backdrop-blur-sm rounded-full border border-gray-200/30 text-gray-700 hover:bg-gray-900/10 hover:border-gray-300/50 transition-all duration-300',
        sectionTitle: isDarkMode ? 'text-white font-semibold text-lg mb-4' : 'text-gray-900 font-semibold text-lg mb-4',
        footerLink: isDarkMode ? 'text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block' : 'text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:translate-x-1 inline-block',
        newsletterCard: isDarkMode ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12' : 'bg-gradient-to-r from-indigo-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/30 mb-12',
        newsletterTitle: isDarkMode ? 'text-2xl font-bold text-white mb-4' : 'text-2xl font-bold text-gray-900 mb-4',
        newsletterDescription: isDarkMode ? 'text-gray-300 mb-6' : 'text-gray-600 mb-6',
        emailInput: isDarkMode ? 'flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors' : 'flex-1 px-4 py-3 bg-gray-900/5 backdrop-blur-sm border border-gray-200/30 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-colors',
        subscribeButton: isDarkMode ? 'px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] transition-all duration-300' : 'px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] transition-all duration-300',
        copyright: isDarkMode ? 'text-gray-400 text-sm mb-4 sm:mb-0' : 'text-gray-500 text-sm mb-4 sm:mb-0',
        legalLinks: isDarkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-500',
        legalLink: isDarkMode ? 'hover:text-white transition-colors' : 'hover:text-gray-900 transition-colors',
        bottomBorder: isDarkMode ? 'pt-8 border-t border-white/10' : 'pt-8 border-t border-gray-200/30'
    };

    const footerLinks = {
        'Navigation': [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Work', href: '/work' },
            { name: 'Services', href: '/services' },
        ],
        'Services': [
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'API Development', href: '/services/api-development' },
            { name: 'WordPress', href: '/services/wordpress' },
            { name: 'Framer', href: '/services/framer' },
            { name: 'Frontend', href: '/services/frontend' },
            { name: 'Backend', href: '/services/backend' },
            { name: 'Figma Design', href: '/services/figma-design' },
        ],
    };

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com', icon: Github },
        { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    ];

    return (
        <footer className={themeClasses.footer}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={themeClasses.backgroundBlur1} />
                <div className={themeClasses.backgroundBlur2} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">JV</span>
                            </div>
                            <span className={themeClasses.brandName}>
                                Joshua Vilanculo
                            </span>
                        </div>
                        <p className={themeClasses.description}>
                            Crafting digital experiences that blend beautiful design with robust engineering. 
                            Let&apos;s build something amazing together.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className={`flex items-center gap-3 ${themeClasses.contactText}`}>
                                <Mail size={18} className="text-indigo-400" />
                                <a href="mailto:joshua@example.com" className={themeClasses.contactLink}>
                                    josilanculo@gmail.com
                                </a>
                            </div>
                            <div className={`flex items-center gap-3 ${themeClasses.contactText}`}>
                                <Phone size={18} className="text-indigo-400" />
                                <a href="tel:+27639533676" className={themeClasses.contactLink}>
                                    +27 63 953 3676
                                </a>
                            </div>
                            <div className={`flex items-center gap-3 ${themeClasses.contactText}`}>
                                <MapPin size={18} className="text-indigo-400" />
                                <span> South Africa</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={themeClasses.socialButton}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {Object.entries(footerLinks).map(([title, links], index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h3 className={themeClasses.sectionTitle}>{title}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className={themeClasses.footerLink}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={themeClasses.newsletterCard}
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className={themeClasses.newsletterTitle}>Stay Updated</h3>
                        <p className={themeClasses.newsletterDescription}>
                            Subscribe to get notified about new projects, blog posts, and updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={themeClasses.emailInput}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={themeClasses.subscribeButton}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`flex flex-col sm:flex-row justify-between items-center ${themeClasses.bottomBorder}`}
                >
                    <p className={themeClasses.copyright}>
                        © {currentYear} Joshua Vilanculo. All rights reserved.
                    </p>
                    <div className={`flex gap-6 ${themeClasses.legalLinks}`}>
                        <Link href="/privacy" className={themeClasses.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={themeClasses.legalLink}>
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export { Navbar, Footer };