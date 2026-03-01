import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTheme = () => {
      const checked = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
      return checked ? checked.value : 'light';
    };
    setTheme(getTheme());
    const handler = () => setTheme(getTheme());
    document.body.addEventListener('change', handler, true);
    return () => document.body.removeEventListener('change', handler, true);
  }, []);

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend', icon: <Code size={24} />, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: <Code size={24} />, color: 'from-blue-600 to-blue-700' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: <Code size={24} />, color: 'from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: <Palette size={24} />, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 92, category: 'frontend', icon: <Code size={24} />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Three.js', level: 75, category: 'frontend', icon: <Code size={24} />, color: 'from-purple-500 to-pink-500' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend', icon: <Code size={24} />, color: 'from-green-500 to-green-600' },
    { name: 'Express.js', level: 80, category: 'backend', icon: <Code size={24} />, color: 'from-green-400 to-green-500' },
    
    // Database
    { name: 'MongoDB', level: 80, category: 'database', icon: <Database size={24} />, color: 'from-green-500 to-green-600' },
    { name: 'MySQL', level: 75, category: 'database', icon: <Database size={24} />, color: 'from-blue-500 to-blue-600' },
    
    // Mobile
    { name: 'React Native', level: 70, category: 'mobile', icon: <Smartphone size={24} />, color: 'from-blue-500 to-cyan-500' },
    
    // Other
    { name: 'REST APIs', level: 85, category: 'other', icon: <Globe size={24} />, color: 'from-green-500 to-blue-500' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Code size={20} /> },
    { id: 'frontend', name: 'Frontend', icon: <Palette size={20} /> },
    { id: 'backend', name: 'Backend', icon: <Code size={20} /> },
    { id: 'database', name: 'Database', icon: <Database size={20} /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone size={20} /> },
    { id: 'other', name: 'Other', icon: <Globe size={20} /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" style={{ 
      padding: '80px 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`glass-button flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : ''
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800/70"
            >
              <div className="text-center mb-4">
                <div 
                  className="inline-flex mb-3"
                  style={{
                    color: theme === 'light' ? '#1e3a8a' : theme === 'dark' ? '#60a5fa' : '#ec4899'
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 capitalize">
                    {skill.category}
                  </p>
                  <span className="italic text-sm text-gray-400 block mt-2">#{skill.name}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-center">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="font-medium text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
