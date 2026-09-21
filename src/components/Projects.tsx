import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-16 sm:py-20 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Selected Projects
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Practical systems focused on application logic, relational data, and problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {projectsData.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="p-6 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            >
              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Short 2-3 sentence description */}
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Main Technologies */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 block mb-1.5">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2-3 Key Features */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 block mb-1.5">
                  Key Features
                </span>
                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-950 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
