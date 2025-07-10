import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const getHeaderTextColor = () => {
  if (typeof window !== 'undefined') {
    const lightChecked = document.querySelector('input[value="light"]:checked');
    if (lightChecked) {
      return '#1a1a1a';
    }
  }
  return '#fff';
};

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [headerColor, setHeaderColor] = useState(getHeaderTextColor());
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
  useEffect(() => {
    const updateColor = () => setHeaderColor(getHeaderTextColor());
    document.body.addEventListener('change', updateColor, true);
    return () => document.body.removeEventListener('change', updateColor, true);
  }, []);

  const iconColor = theme === 'light' ? '#000' : '#fff';

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail size={24} color={iconColor} />, 
      title: 'Email',
      value: 'guled-abdi@outlook.com',
      link: 'mailto:guled-abdi@outlook.com'
    },
    {
      icon: <Phone size={24} color={iconColor} />, 
      title: 'Phone',
      value: '07857760653',
      link: 'tel:+447857760653'
    },
    {
      icon: <MapPin size={24} color={iconColor} />, 
      title: 'Location',
      value: 'Greater Bristol Area',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, name: 'GitHub', url: 'https://github.com/Gulzey' },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/guled-abdi-b30656194/' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://formspree.io/f/mzzgqvny', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formDataToSend,
        redirect: 'manual',
      });
      
      // Check if the response is successful (2xx status) or if it's a redirect (which is normal for Formspree)
      if (response.ok || response.status === 302 || response.status === 301) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" style={{ 
      padding: '0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: '0'
    }}>
      <div className="w-full" style={{ paddingTop: '20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-black max-w-3xl mx-auto text-center">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-black mb-6">
                Let's Connect
              </h3>
              <p className="text-black leading-relaxed mb-8">
                Feel free to reach out if you'd like to collaborate on a project, 
                discuss potential opportunities, or just want to say hello. I'm always 
                excited to hear about new ideas and opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-start gap-4"
                >
                  <div className="flex items-center justify-center p-3 bg-transparent backdrop-blur-sm rounded-lg text-gray-300 flex-shrink-0 w-12 h-12">
                    {info.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-medium text-black">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-black hover:text-gray-800 hover:underline max-w-xs truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-black max-w-xs truncate block">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-black mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-button p-3"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-transparent backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800/70"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-gray-800/40 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-gray-800/40 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-gray-800/40 text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-gray-800/40 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-button w-full flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-600/90 backdrop-blur-sm rounded-lg text-white text-center"
                >
                  ✅ Your message has been sent! I will get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 