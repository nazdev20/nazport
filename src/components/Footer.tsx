import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 pt-8 pb-20 md:pb-8"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Identity */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {personalInfo.name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {personalInfo.role}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600 dark:text-neutral-400">
          <a href="#hero" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
