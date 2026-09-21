/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  // Dark mode toggle: default to dark for clean developer aesthetic
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Synchronize dark mode class on HTML document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900 font-sans antialiased transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* 5 Main Sections: Home → About → Experience → Projects → Contact */}
      <main id="main-content" className="pb-16 md:pb-0">
        {/* 1. Home + Selected Skills */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 2. About */}
        <About />

        {/* 3. Experience */}
        <Experience />

        {/* 4. Selected Projects (3 featured projects) */}
        <Projects />

        {/* 5. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar (Home, About, Work, Projects, Contact) */}
      <BottomNav />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
