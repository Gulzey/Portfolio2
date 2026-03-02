import React, { useState, useEffect } from 'react';
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

  const applyTheme = (value: 'light' | 'dark' | 'dim') => {
    const target = document.querySelector(`input[name="theme"][value="${value}"]`) as HTMLInputElement | null;
    if (target) {
      target.checked = true;
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
    setTheme(value);
  };

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
        <div style={{ width: '100%', marginBottom: '4px' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', margin: '0 0 8px 0', opacity: 0.75 }}>
            Theme
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => applyTheme('light')}
              aria-label="Use light theme"
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: theme === 'light' ? '2px solid var(--c-content)' : '1px solid color-mix(in srgb, var(--c-content) 45%, transparent)',
                background: '#f5f5f5',
                cursor: 'pointer',
                padding: 0
              }}
            />
            <button
              onClick={() => applyTheme('dark')}
              aria-label="Use dark theme"
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: theme === 'dark' ? '2px solid var(--c-content)' : '1px solid color-mix(in srgb, var(--c-content) 45%, transparent)',
                background: '#151515',
                cursor: 'pointer',
                padding: 0
              }}
            />
            <button
              onClick={() => applyTheme('dim')}
              aria-label="Use dim theme"
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: theme === 'dim' ? '2px solid var(--c-content)' : '1px solid color-mix(in srgb, var(--c-content) 45%, transparent)',
                background: '#ff48a9',
                cursor: 'pointer',
                padding: 0
              }}
            />
          </div>
        </div>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(item.href);
              if (element) {
                const offset = 10;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            style={{
              color: 'var(--c-content)',
              textDecoration: 'none',
              fontSize: '1.1em',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
              textAlign: 'left',
              width: '100%',
              padding: '4px 0',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        marginLeft: navOpen ? '180px' : '0', 
        transition: 'margin-left 0.3s',
        minHeight: '100vh',
        width: '100%'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '1200px',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          marginBottom: '0'
        }}>
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
