'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Globe, 
  Server,
  ArrowRight
} from 'lucide-react';

const Work = () => {
  const [activeTab, setActiveTab] = useState('design');

  const tabs = [
    {
      id: 'design',
      label: 'Design',
      icon: Palette,
      title: 'Creative Design Solutions',
      description: 'Crafting beautiful, user-centered designs that blend aesthetics with functionality. From brand identity to digital experiences, we bring your vision to life with modern design principles.',
      features: [
        'Brand Identity & Logo Design',
        'UI/UX Design for Web & Mobile',
        'Prototyping & Wireframing',
        'Design Systems & Style Guides'
      ],
      color: 'from-purple-500 to-pink-500',
      bgImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop&crop=center'
    },
    {
      id: 'web-development',
      label: 'Web Development',
      icon: Code,
      title: 'Modern Web Applications',
      description: 'Building responsive, fast, and scalable web applications using cutting-edge technologies. From simple websites to complex web platforms, we deliver exceptional digital experiences.',
      features: [
        'React & Next.js Applications',
        'Responsive Web Design',
        'Performance Optimization',
        'Progressive Web Apps'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=center'
    },
    {
      id: 'api',
      label: 'API',
      icon: Globe,
      title: 'Robust API Development',
      description: 'Designing and developing secure, scalable APIs that power your applications. RESTful services, GraphQL endpoints, and microservices architecture for seamless data integration.',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'API Security & Authentication',
        'Documentation & Testing'
      ],
      color: 'from-green-500 to-emerald-500',
      bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop&crop=center'
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: Server,
      title: 'Scalable Backend Systems',
      description: 'Building robust server-side architectures that handle complex business logic and high traffic loads. Database design, cloud deployment, and microservices for enterprise-grade solutions.',
      features: [
        'Database Design & Optimization',
        'Cloud Infrastructure Setup',
        'Microservices Architecture',
        'DevOps & CI/CD Pipelines'
      ],
      color: 'from-orange-500 to-red-500',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&crop=center'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="max-w-8xl mx-auto md:px-8 px-4 relative pb-12 md:pb-20">
      <div className="bg-slate-900 rounded-4xl md:rounded-[48px] pt-12 md:pt-20 px-4 md:px-8 pb-4 md:pb-8">
        {/* Header */}
        <div className="flex gap-6 mb-16 flex-col justify-center xl:flex-row items-center md:justify-start md:items-start xl:items-end">
          <div className="text-4xl md:text-6xl font-bold text-white lg:w-[822px] text-center md:text-left">
            Our work, simplified
          </div>
          <div className="text-xl text-slate-300 flex-1 min-w-[300px] text-center md:text-left">
            From concept to deployment, we handle every aspect of your digital project. 
            Streamline your development process with our comprehensive services that make 
            complex solutions accessible and efficient.
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 rounded-2xl p-1 inline-flex overflow-x-scroll scrollbar-hidden gap-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                className="absolute bg-slate-700 rounded-xl top-1 bottom-1 shadow-lg"
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                style={{
                  left: tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length) + '%',
                  width: `${100 / tabs.length}%`
                }}
              />
            </AnimatePresence>
            
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex flex-shrink-0 items-center gap-2 relative z-10 px-6 py-4 cursor-pointer group transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className={`text-base font-medium transition-colors duration-200 ${
                    activeTab === tab.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800/50 rounded-2xl p-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col xl:flex-row gap-12 lg:gap-16"
            >
              {/* Content */}
              <div className="flex-1 flex flex-col items-start justify-center md:pl-4">
                <div className="flex flex-col max-w-[640px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${activeTabData?.color} shadow-lg`}>
                      {activeTabData && <activeTabData.icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {activeTabData?.title}
                    </h3>
                  </div>
                  
                  <p className="text-base text-slate-300 leading-relaxed mb-6">
                    {activeTabData?.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What we deliver:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeTabData?.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeTabData?.color}`} />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors duration-200 shadow-lg"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Visual */}
              <div className="w-full xl:max-w-[600px] rounded-lg overflow-hidden relative aspect-[16/9]">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={activeTabData?.bgImage}
                    alt={activeTabData?.title}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTabData?.color} opacity-20 rounded-lg`} />
                  
                  {/* Floating elements for visual interest */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute top-8 right-8"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${activeTabData?.color} opacity-80 flex items-center justify-center shadow-xl`}>
                      {activeTabData && <activeTabData.icon className="w-8 h-8 text-white" />}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Work;