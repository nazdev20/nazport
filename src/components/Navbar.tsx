import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 shadow-xs'
          : 'bg-white/80 dark:bg-neutral-950/80 md:bg-transparent py-4 border-b md:border-b-0 border-neutral-200 dark:border-neutral-800'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          id="brand-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-6 h-6 rounded bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 flex items-center justify-center font-mono text-xs font-bold">
            NE
          </span>
          <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="px-3 py-1.5 text-xs font-medium rounded border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-800 dark:text-neutral-200 bg-transparent transition-colors"
          >
            Resume
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
