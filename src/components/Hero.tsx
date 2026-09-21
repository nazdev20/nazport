import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Github, Mail } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="hero"
      aria-label="Home"
      className="pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2">
          {personalInfo.name}
        </h1>

        {/* Professional Title */}
        <p className="text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-400 mb-6">
          {personalInfo.role}
        </p>

        {/* Short 2-3 sentence introduction */}
        <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
          {personalInfo.intro}
        </p>

        {/* Action Buttons: Resume, GitHub, Contact */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            id="hero-resume-btn"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>

          <a
            id="hero-github-btn"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-950 text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            id="hero-contact-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 bg-transparent text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>

        {/* Selected Skills Area (only most relevant technologies) */}
        <div className="pt-8 border-t border-neutral-200/70 dark:border-neutral-800/70">
          <h2 className="text-xs uppercase tracking-wider font-mono font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
            Selected Skills
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            {personalInfo.selectedSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
