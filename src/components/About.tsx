import React from 'react';
import { aboutData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About"
      className="py-16 sm:py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
          About
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Education note */}
        <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span>{aboutData.degree}</span>
          <span>{aboutData.institution}</span>
        </div>
      </div>
    </section>
  );
};
