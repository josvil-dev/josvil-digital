"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {

  FiGithub,
  FiExternalLink,

  FiCode,

  FiGlobe,

  FiServer,
} from "react-icons/fi";
import Hero from "./Components/Hero";
import { url } from "inspector";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🚀" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "💛" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "UI/UX", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "React", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Web App",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing modern design principles with smooth animations and interactive elements.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Design",
  },
  {
    id: 5,
    title: "Restaurant POS System",
    description:
      "A comprehensive point-of-sale system for restaurants with inventory management, order tracking, and analytics.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Express.js", "MySQL", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "A unified dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Dashboard",
  },
];

const services = [
  {
    icon: <FiCode className="text-3xl" />,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive user interfaces with modern frameworks like React and Next.js.",
  },
  {
    icon: <FiServer className="text-3xl" />,
    title: "Backend Development",
    description:
      "Building robust APIs and server-side applications with Node.js, Python, and database integration.",
  },

  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Web Applications",
    description:
      "Full-stack web application development from concept to deployment with modern technologies.",
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-16 z-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-start md:text-6xl font-bold text-black dark:text-white mb-6">
              What I Do
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-transparent opacity-70 flex   border-2 border-orange-700 hover:border-red-500 transition-all duration-300"
              >

                <div className=""><h3 className="text-xl py-6 px-4 font-bold text-black mb-3">
                  {service.title}
                </h3>
                  <p className="text-gray-700 p-4">{service.description}</p>
                </div>
                <div className="text-orange-800 text-48 pt-18 p-4 hover:text-white justify-center bg-amber-600 ">{service.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black text-start mb-6">
              My Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-200 flex  overflow-hidden border border-gray-300 hover:border-blue-500 transition-all duration-300"
              >


                <div className="py-4 px-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">
                      {project.title}
                    </h3>

                  </div>

                  <p className="text-gray-900 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 transition-colors text-sm"
                    >
                      <FiGithub />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition-colors text-sm"
                    >
                      <FiExternalLink />
                      Live
                    </motion.a>
                  </div>
                </div>
                <div className=" w-[81%] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white  font-bold text-lg  ">
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
