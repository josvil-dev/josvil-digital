'use client';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    console.log('Theme toggle clicked!'); // Debug log
    toggleTheme();
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 p-3 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-full">
        <FaSun size={20} className="text-white" />
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-4 right-4 z-[9999] p-3 backdrop-blur-sm border rounded-full transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
        isDarkMode 
          ? 'bg-slate-800/90 border-white/20 text-white hover:bg-slate-700/90' 
          : 'bg-white/90 border-gray-300/60 text-gray-700 hover:bg-gray-50/90 shadow-lg'
      }`}
      aria-label="Toggle theme"
      type="button"
      style={{ 
        pointerEvents: 'auto',
        touchAction: 'manipulation'
      }}
    >
      <div
        className="transition-transform duration-300"
        style={{
          transform: `rotate(${isDarkMode ? 0 : 180}deg)`
        }}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </div>
    </button>
  );
};

export default ThemeToggle;
