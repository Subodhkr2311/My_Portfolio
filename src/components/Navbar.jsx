import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'About', href: '#overview' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'work', 'process', 'experience', 'services', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 pointer-events-auto">
      {/* Centered Floating Pill Navigation (Clean & Formal) */}
      <div className="bg-neutral-950/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.22)] flex items-center gap-1 sm:gap-1.5 transition-all">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 select-none ${
                isActive
                  ? 'bg-[#FFD91A] text-black font-semibold shadow-xs scale-[1.02]'
                  : 'text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
