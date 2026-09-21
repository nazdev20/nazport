import React from 'react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="py-16 sm:py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-8">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            >
              {/* Header: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white">
                  {item.role}
                </h3>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Company */}
              <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
                {item.company}
              </p>

              {/* Responsibility Bullets */}
              <ul className="space-y-2">
                {item.responsibilities.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
