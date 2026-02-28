import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      id: '1',
      title: 'ImHire',
      description: 'A website for a local business that offers courtesy cars to taxi drivers that have been in accidents. Built with React, Tailwind CSS, and WhatsApp API integration.',
      image: '/images/IMHIRE.png',
      category: 'frontend',
      technologies: ['React', 'Tailwind CSS', 'WhatsApp API', 'Vercel'],
      liveUrl: 'https://im-hire.vercel.app/',
      githubUrl: 'https://github.com/Gulzey/ImHire',
      featured: true
    },
    {
      id: '2',
      title: 'Henna By Hamda',
      description: ' A gallery style company page for a client created using ReactJS and threeJS. It showcases a range of henna pieces that the client wanted showcased. ThE Client was satisfied and informed me it boosted her visibility. T.',
      image: '/images/Henna.png',
      category: 'frontend',
      technologies: ['ReactJS', 'Vite', 'CSS', 'Lightbox library'],
      liveUrl: 'https://hennabyhamda.vercel.app/',
      githubUrl: 'https://github.com/Gulzey/Henna',
      featured: true
    },
    {
      id: '3',
      title: 'Blog/Forum',
      description: 'A social blog forum similar to Reddit or Quora where you can post, follow, comment, and reply to people. Built with the MERN stack (React, Express, Node.js, MongoDB). This project was a collaboration with my friend Abdi Suufi, who did the backend while I did the frontend.',
      image: '/images/Tiny.png',
      category: 'fullstack',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'MERN'],
      liveUrl: 'https://tiny-bros-blog.vercel.app/',
      githubUrl: 'https://github.com/Abdi-Suufi/TinyBrosBlog',
      featured: false
    },
    {
      id: '4',
      title: 'AdhanAlert',
      description: 'A user-friendly website designed to help users track prayer times in their city. Utilizing the Aladhan API and Geolocation API, it accurately displays prayer schedules based on the user\'s location. It will soon become a web application through ReactJS.',
      image: '/images/ADHAN.png',
      category: 'frontend',
      technologies: ['JavaScript', 'AladhanAPI', 'Bootstrap'],
      liveUrl: 'https://adhanalert.vercel.app/',
      githubUrl: 'https://github.com/Gulzey/AdhanAlert',
      featured: false
    },
    {
      id: '5',
      title: 'CycleNav',
      description: 'For my dissertation, I developed a navigation web service tailored specifically for cyclists. While established services like Google Maps exist, my aim was to create a platform that caters to the unique needs of the cycling community.',
      image: '/images/CYCLENAV.png',
      category: 'frontend',
      technologies: ['JavaScript', 'MapBox API', 'Bootstrap'],
      liveUrl: 'https://cyclenav.netlify.app/',
      githubUrl: 'https://github.com/Gulzey/Final-Year-Project',
      featured: true
    },
    {
      id: '6',
      title: 'Streaming Platform',
      description: 'A basic streaming platform UI created with React and Tailwind CSS.',
      image: '/images/G3WATCH.png',
      category: 'frontend',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      liveUrl: 'https://g3watch.vercel.app/',
      githubUrl: 'https://github.com/Gulzey/G3Watch',
      featured: false
    },

  ];



  return (
    <section id="projects" style={{ 
      padding: '5px 0 40px 0',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0'
    }}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </motion.div>



        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-0"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-transparent backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:ring-2 hover:ring-gray-400/50 transition-all duration-300 border border-gray-800/70"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                


                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 theme-action-button"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 theme-action-button"
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="italic text-sm theme-tech-tag"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Projects; 