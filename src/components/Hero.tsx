import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const getButtonTextColor = () => {
  if (typeof window !== 'undefined') {
    // Check for light mode
    const lightChecked = document.querySelector('input[value="light"]:checked');
    if (lightChecked) {
      return '#1a1a1a';
    }
  }
  // Default to white for dark/dim
  return '#fff';
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonTextColor, setButtonTextColor] = useState(getButtonTextColor());

  useEffect(() => {
    const updateColor = () => setButtonTextColor(getButtonTextColor());
    // Set color on mount (for SSR/first load)
    updateColor();
    document.body.addEventListener('change', updateColor, true);
    return () => document.body.removeEventListener('change', updateColor, true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden" style={{ paddingTop: 0, paddingBottom: 64 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Theme Switcher at the top, centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <ThemeSwitcher />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium"
          >
            Hello, I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient px-4"
          >
            Guled Abdi
          </motion.h1>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-light px-4"
          >
            Full Stack Developer & Designer
          </motion.h3>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-gray-600 hover:bg-gray-600 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto"
              style={{ color: buttonTextColor }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
            style={{ marginBottom: 64 }}
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('#about')}
              className="text-gray-500 hover:text-gray-200 transition-colors duration-200"
            >
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 