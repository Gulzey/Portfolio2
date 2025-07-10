import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const getHighlightTextColor = () => {
  if (typeof window !== 'undefined') {
    const lightChecked = document.querySelector('input[value="light"]:checked');
    if (lightChecked) {
      return '#1a1a1a';
    }
  }
  return '#fff';
};

const About: React.FC = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Guled Abdi' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Greater Bristol Area' },
    { icon: <Calendar size={20} />, label: 'Birthday', value: 'January 1, 1990' },
    { icon: <Mail size={20} />, label: 'Email', value: 'guled-abdi@outlook.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '07857760653' },
  ];

  const [highlightColor, setHighlightColor] = useState(getHighlightTextColor());
  useEffect(() => {
    const updateColor = () => setHighlightColor(getHighlightTextColor());
    // Set color on mount (for SSR/first load)
    updateColor();
    document.body.addEventListener('change', updateColor, true);
    return () => document.body.removeEventListener('change', updateColor, true);
  }, []);

  return (
    <section id="about" style={{ 
      padding: '50px 0 40px 0',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed text-center">
              <p className="text-lg">
                As a 24-year-old Software Engineering graduate from the University of the West of England, Bristol (2:1), I'm passionate about bringing businesses to life online.
              </p>
              <p className="text-lg">
                I'm currently working as a freelance web developer, dedicating my time to crafting compelling websites for clients who need a strong digital presence. My real love lies in UI and web design, and I primarily leverage React and JavaScript to build modern, engaging web experiences.
              </p>
              
              <p>
                When I'm not coding, I enjoy staying active through running and playing basketball, which helps me maintain both physical and mental clarity. I also love diving into story books and getting lost in a good narrative. These activities keep me balanced and inspired in my creative work.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold" style={{ color: highlightColor }}>3+</div>
                <div className="text-sm" style={{ color: highlightColor }}>Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold" style={{ color: highlightColor }}>10+</div>
                <div className="text-sm" style={{ color: highlightColor }}>Projects Completed</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold" style={{ color: highlightColor }}>12+</div>
                <div className="text-sm" style={{ color: highlightColor }}>Technologies</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold" style={{ color: highlightColor }}>∞</div>
                <div className="text-sm" style={{ color: highlightColor }}>Learning</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 