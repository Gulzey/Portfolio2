import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Calculate distance between mouse and element position
  const getDistance = (elementX: number, elementY: number) => {
    const dx = mousePosition.x - elementX;
    const dy = mousePosition.y - elementY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Calculate repulsion effect
  const getRepulsion = (elementX: number, elementY: number, repulsionRadius = 150) => {
    const distance = getDistance(elementX, elementY);
    if (distance < repulsionRadius) {
      const force = (repulsionRadius - distance) / repulsionRadius;
      const angle = Math.atan2(elementY - mousePosition.y, elementX - mousePosition.x);
      return {
        x: Math.cos(angle) * force * 150,
        y: Math.sin(angle) * force * 150
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Floating Elements - Hidden on mobile to prevent wobbling */}
      <motion.div
        style={{
          x: getDistance(80, 80) < 150 ? getRepulsion(80, 80).x : 0,
          y: getDistance(80, 80) < 150 ? getRepulsion(80, 80).y : 0,
          scale: getDistance(80, 80) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [0, 30, -20, 15, 0],
          y: [0, -25, 20, -15, 0]
        }}
        transition={{ 
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-gray-600 rounded-full opacity-20 floating-element hidden md:block"
      />
      
      {/* Crescent Moon */}
      <motion.div
        style={{
          x: getDistance(window.innerWidth - 120, window.innerHeight - 120) < 150 ? getRepulsion(window.innerWidth - 120, window.innerHeight - 120).x : 0,
          y: getDistance(window.innerWidth - 120, window.innerHeight - 120) < 150 ? getRepulsion(window.innerWidth - 120, window.innerHeight - 120).y : 0,
          scale: getDistance(window.innerWidth - 120, window.innerHeight - 120) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [-15, 25, -10, 20, -15],
          y: [0, -20, 15, -10, 0]
        }}
        transition={{ 
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 right-20 w-24 h-24 opacity-20 floating-element hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 20 A30 30 0 0 1 50 80 A30 30 0 0 1 50 20 M50 25 A25 25 0 0 0 50 75 A25 25 0 0 0 50 25"
            fill="currentColor"
            className="text-gray-500"
          />
        </svg>
      </motion.div>

      <motion.div
        style={{
          x: getDistance(window.innerWidth / 3, window.innerHeight * 2/3) < 150 ? getRepulsion(window.innerWidth / 3, window.innerHeight * 2/3).x : 0,
          y: getDistance(window.innerWidth / 3, window.innerHeight * 2/3) < 150 ? getRepulsion(window.innerWidth / 3, window.innerHeight * 2/3).y : 0,
          scale: getDistance(window.innerWidth / 3, window.innerHeight * 2/3) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [0, -20, 15, -10, 0],
          y: [0, 25, -15, 20, 0]
        }}
        transition={{ 
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gray-600 rounded-full opacity-10 floating-element hidden md:block"
      />

      <motion.div
        style={{
          x: getDistance(window.innerWidth / 4, window.innerHeight * 3/4) < 150 ? getRepulsion(window.innerWidth / 4, window.innerHeight * 3/4).x : 0,
          y: getDistance(window.innerWidth / 4, window.innerHeight * 3/4) < 150 ? getRepulsion(window.innerWidth / 4, window.innerHeight * 3/4).y : 0,
          scale: getDistance(window.innerWidth / 4, window.innerHeight * 3/4) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [0, 15, -10, 20, 0],
          y: [0, 20, -15, 10, 0]
        }}
        transition={{ 
          x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-gray-500 rounded-full opacity-8 floating-element hidden md:block"
      />

      {/* Geometric Shape */}
      <motion.div
        style={{
          x: getDistance(window.innerWidth / 2, window.innerHeight / 4) < 150 ? getRepulsion(window.innerWidth / 2, window.innerHeight / 4).x : 0,
          y: getDistance(window.innerWidth / 2, window.innerHeight / 4) < 150 ? getRepulsion(window.innerWidth / 2, window.innerHeight / 4).y : 0,
          scale: getDistance(window.innerWidth / 2, window.innerHeight / 4) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [-10, 20, -15, 25, -10],
          y: [0, -15, 20, -10, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-1/4 right-1/2 w-18 h-18 opacity-10 floating-element hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill="currentColor"
            className="text-gray-400"
          />
        </svg>
      </motion.div>

      {/* Additional Right Side Shapes */}
      <motion.div
        style={{
          x: getDistance(window.innerWidth - 48, window.innerHeight / 4) < 150 ? getRepulsion(window.innerWidth - 48, window.innerHeight / 4).x : 0,
          y: getDistance(window.innerWidth - 48, window.innerHeight / 4) < 150 ? getRepulsion(window.innerWidth - 48, window.innerHeight / 4).y : 0,
          scale: getDistance(window.innerWidth - 48, window.innerHeight / 4) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [0, -15, 10, -20, 0],
          y: [0, 20, -10, 15, 0]
        }}
        transition={{ 
          x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-8 w-12 h-12 bg-gray-600 rounded-full opacity-3 floating-element hidden md:block"
      />

      <motion.div
        style={{
          x: getDistance(window.innerWidth - 72, window.innerHeight * 3/4) < 150 ? getRepulsion(window.innerWidth - 72, window.innerHeight * 3/4).x : 0,
          y: getDistance(window.innerWidth - 72, window.innerHeight * 3/4) < 150 ? getRepulsion(window.innerWidth - 72, window.innerHeight * 3/4).y : 0,
          scale: getDistance(window.innerWidth - 72, window.innerHeight * 3/4) < 150 ? 0.7 : 1
        }}
        animate={{ 
          x: [0, 20, -15, 25, 0],
          y: [0, -15, 20, -10, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          x: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 13, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-1/4 right-12 w-18 h-18 opacity-2 floating-element hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
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
            className="text-lg md:text-xl text-gray-200 font-medium"
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
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light px-4"
          >
            Full Stack Developer & Designer
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed px-4"
          >
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative design, and building products that make a difference.
          </motion.p>

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
              className="flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white rounded-lg font-medium transition-all duration-200 w-full sm:w-auto"
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