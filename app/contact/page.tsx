'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import JsonLd from '../Components/JsonLd';
import { 
  createPersonSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema 
} from '../../lib/jsonld';
import { 
  Mail, Phone, MapPin, Send, Clock, User, MessageCircle, 
  CheckCircle, AlertCircle, Loader2, 
  Github, Linkedin, Twitter
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

// Contact Form Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Contact Form Component
function ContactForm({ isDarkMode }: { isDarkMode: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! I&apos;ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Full Name *
          </label>
          <div className="relative">
            <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                errors.name
                  ? 'border-red-400 focus:border-red-500'
                  : isDarkMode
                    ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/10'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white'
              } focus:outline-none focus:ring-2 focus:ring-indigo-400/20`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Email Address *
          </label>
          <div className="relative">
            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : isDarkMode
                    ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/10'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white'
              } focus:outline-none focus:ring-2 focus:ring-indigo-400/20`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={`block text-sm font-semibold mb-2 ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
            errors.subject
              ? 'border-red-400 focus:border-red-500'
              : isDarkMode
                ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/10'
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white'
          } focus:outline-none focus:ring-2 focus:ring-indigo-400/20`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          Message *
        </label>
        <div className="relative">
          <MessageCircle className={`absolute left-3 top-4 w-5 h-5 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
              errors.message
                ? 'border-red-400 focus:border-red-500'
                : isDarkMode
                  ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/10'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400/20`}
            placeholder="Tell me about your project, ideas, or just say hello..."
          />
        </div>
        {errors.message && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Status */}
      {submitStatus !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl flex items-center gap-3 ${
            submitStatus === 'success'
              ? isDarkMode
                ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                : 'bg-green-50 border border-green-200 text-green-700'
              : isDarkMode
                ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                : 'bg-red-50 border border-red-200 text-red-700'
          }`}
        >
          {submitStatus === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <p>{submitMessage}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
          isSubmitting
            ? isDarkMode
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] hover:from-indigo-500 hover:to-purple-500'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function Contact() {
  const { isDarkMode } = useTheme();

  // Create structured data
  const personSchema = createPersonSchema();
  const organizationSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://josvil.digital" },
    { name: "Contact", url: "https://josvil.digital/contact" }
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Joshua Vilanculo - Full Stack Developer",
    "description": "Get in touch with Joshua Vilanculo for web development projects, UI/UX design services, or technical consulting. Available for freelance and contract work.",
    "url": "https://josvil.digital/contact",
    "author": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Joshua Vilanculo",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+258-XXX-XXX-XXX",
          "contactType": "customer service",
          "email": "hello@josvil.digital",
          "availableLanguage": ["English", "Portuguese"],
          "areaServed": "Global",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      ],
      "sameAs": [
        "https://github.com/joshuavilanculo",
        "https://linkedin.com/in/joshuavilanculo", 
        "https://twitter.com/joshuavilanculo"
      ]
    },
    "inLanguage": "en"
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development & Design Services",
    "description": "Professional web development, UI/UX design, and technical consulting services",
    "provider": {
      "@type": "Person",
      "name": "Joshua Vilanculo"
    },
    "areaServed": {
      "@type": "GeoShape",
      "description": "Global - Remote services available worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://josvil.digital/contact",
      "servicePhone": "+258-XXX-XXX-XXX",
      "email": "hello@josvil.digital"
    },
    "offers": {
      "@type": "Offer",
      "description": "Custom web development and design solutions",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly do you respond to inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I typically respond to all inquiries within 24 hours during business days. For urgent projects, I'm available for same-day consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What types of projects do you work on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in web development projects including e-commerce platforms, SaaS applications, portfolio websites, and mobile applications using React, Next.js, and modern web technologies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I work with clients globally and am experienced in remote collaboration. I'm available in multiple time zones and communicate fluently in English and Portuguese."
        }
      }
    ]
  };

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
    card: isDarkMode ? "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl" : "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/60 border border-gray-200/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-gray-300/60 shadow-lg hover:shadow-xl"
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@josvil.dev",
      link: "mailto:hello@josvil.dev"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "New York, NY",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/josvil-dev",
      color: isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/josvil",
      color: isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/josvil_dev",
      color: isDarkMode ? "hover:text-blue-400" : "hover:text-blue-500"
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={serviceAreaSchema} />
      <JsonLd data={faqSchema} />

      <div className={themeClasses.container}>
      {/* JSON-LD Structured Data */}
      <JsonLd
        data={[
          personSchema,
          organizationSchema,
          breadcrumbSchema,
          contactPageSchema,
          serviceAreaSchema,
          faqSchema
        ]}
      />

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
              Get In Touch
            </motion.span>
            <motion.h1 variants={fadeInUp} className={themeClasses.heading}>
              Let&apos;s <span className={themeClasses.gradientText}>Work</span>
              <br />
              Together
            </motion.h1>
            <motion.p variants={fadeInUp} className={`${themeClasses.description} max-w-3xl mx-auto mb-12`}>
              Have a project in mind? Want to collaborate on something amazing? 
              Or just want to say hello? I&apos;d love to hear from you. Let&apos;s create 
              something extraordinary together.
            </motion.p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-5 gap-12 mb-20">
            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <h2 className={`${themeClasses.subheading} mb-8`}>
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300' 
                          : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600'
                      }`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={`font-semibold ${
                              isDarkMode 
                                ? 'text-white hover:text-indigo-300' 
                                : 'text-gray-900 hover:text-indigo-600'
                            } transition-colors duration-300`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-4`}>
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                        } ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-3"
            >
              <motion.div variants={fadeInUp} className={themeClasses.card}>
                <h2 className={`${themeClasses.subheading} mb-8`}>
                  Send Message
                </h2>
                
                <ContactForm isDarkMode={isDarkMode} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
