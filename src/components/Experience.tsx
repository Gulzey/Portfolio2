import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [

    {
      id: '2',
      type: 'work',
      title: 'Coming Soon',
      company: 'Future Opportunity',
      location: 'TBD',
      period: 'Future',
      description: [
        'Exciting opportunities ahead in front-end development',
        'Looking forward to new challenges and growth',
        'Ready to take on innovative projects and technologies'
      ],
      technologies: ['React', 'JavaScript', 'TypeScript', 'UI/UX Design'],
      icon: <Briefcase size={24} />
    },
    {
      id: '3',
      type: 'work',
      title: 'Web Developer',
      company: 'Freelance',
      location: 'Bristol, UK',
      period: '2023 - Present',
      description: [
        'Designing Web applications using React.js and other related technologies',
        'Understand client requirements and provide regular progress updates',
        'Develop design concepts and wireframes for responsive user interfaces',
        'Write clean HTML, CSS, and JavaScript code for interactive UIs',
        'Set up servers, databases and implement APIs',
        'Manage hosting environments and deploy updates to live sites whilst also analysing the site by using SEO practices'
      ],
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'APIs', 'SEO', 'Hosting'],
      icon: <Briefcase size={24} />
    },
    {
      id: '4',
      type: 'education',
      title: 'Bachelor of Science',
      company: 'University of the West of England',
      location: 'Bristol, UK',
      period: '2020 - 2024',
      description: [
        'Graduated with honors and created a dissertation that centered around making a cycling navigation web application, achieving a first in that module (85%)',
        'Developing and maintaining software for clients using JavaScript and other related technologies',
        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products'
      ],
      technologies: ['JavaScript', 'React', 'Web Development', 'Responsive Design', 'Cross-browser Compatibility'],
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>

          <div className="space-y-12">
            {experiences.slice().reverse().map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 z-10 ${
                  index % 2 === 0 ? 'md:translate-x-2' : 'md:-translate-x-6'
                }`}></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-transparent backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800/70"
                  >
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div className={`inline-flex p-3 rounded-lg bg-gray-800/90 text-white mb-4`}>
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-gray-300 font-medium mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 justify-center">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {experience.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-4 text-center">
                      {experience.description.map((item, idx) => (
                        <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                          • {item}
                        </p>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="italic text-sm text-gray-400"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mx-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={20} />
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 