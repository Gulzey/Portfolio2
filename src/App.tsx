import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import './components/ThemeSwitcher.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Get in Touch', href: '#contact' },
];

const App: React.FC = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [theme, setTheme] = useState('light');

  // Collapse navbar by default on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavOpen(false);
      } else {
        setNavOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Vertical Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: navOpen ? 0 : '-180px',
          height: '100vh',
          width: '180px',
          background: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: '120px',
          gap: '32px',
          borderRight: '1px solid color-mix(in srgb, var(--c-content) 10%, transparent)',
          paddingLeft: '32px',
          zIndex: 1000,
          transition: 'left 0.3s',
        }}
      >
        <button
          onClick={() => setNavOpen((open) => !open)}
          className="glass-button"
          style={{
            position: 'absolute',
            top: 20,
            right: -20,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1100,
            padding: 0,
          }}
          aria-label={navOpen ? 'Collapse navbar' : 'Expand navbar'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L8 10L13 15" stroke={theme === 'light' ? '#fff' : '#222'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: 'var(--c-content)',
              textDecoration: 'none',
              fontSize: '1.1em',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
              textAlign: 'left',
              width: '100%',
              padding: '4px 0',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginLeft: navOpen ? '180px' : '0', transition: 'margin-left 0.3s' }}>
        <div style={{ marginTop: '160px', width: '100%', maxWidth: '900px' }}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App; 