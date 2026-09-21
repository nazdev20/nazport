import React, { useState } from 'react';
import { personalInfo, aboutData, experienceData, projectsData } from '../data/portfolioData';
import { X, Printer, Copy, Check, Mail, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${personalInfo.name}
${personalInfo.role}
Email: ${personalInfo.email} | GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${aboutData.paragraphs.join('\n\n')}

EDUCATION
${aboutData.degree} — ${aboutData.institution}

SELECTED SKILLS
${personalInfo.selectedSkills.join(', ')}

EXPERIENCE
${experienceData.map((e) => `${e.role} | ${e.company} (${e.period})\n${e.responsibilities.map((r) => `- ${r}`).join('\n')}`).join('\n\n')}

SELECTED PROJECTS
${projectsData.map((p) => `${p.title} (${p.technologies.join(', ')})\n${p.description}\n${p.keyFeatures.map((f) => `- ${f}`).join('\n')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl my-8 bg-white dark:bg-neutral-950 rounded border border-neutral-300 dark:border-neutral-800 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shrink-0">
          <div className="flex items-center gap-2">
            <h2 id="resume-modal-title" className="text-sm font-semibold text-neutral-900 dark:text-white">
              Resume Profile
            </h2>
            <span className="text-xs font-mono text-neutral-500">
              ({personalInfo.name})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print profile"
              className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyText}
              title="Copy text"
              className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              title="Close modal"
              className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-800 dark:text-neutral-200 text-sm">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h1 className="text-2xl font-bold text-neutral-950 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              {personalInfo.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                {personalInfo.github}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                {personalInfo.linkedin}
              </span>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 dark:text-neutral-500 mb-2">
              Professional Summary
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 dark:text-neutral-500 mb-2">
              Education
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">
              {aboutData.degree}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {aboutData.institution}
            </p>
          </div>

          {/* Core Technologies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 dark:text-neutral-500 mb-2">
              Selected Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {personalInfo.selectedSkills.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              Work Experience
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                      {exp.role} — {exp.company}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-400 dark:text-neutral-500 mb-3">
              Selected Projects
            </h3>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-3 py-0.5">
                  <div className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                    {proj.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">
                    {proj.technologies.join(', ')}
                  </div>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex justify-between items-center text-xs">
          <span className="text-neutral-500 font-mono">
            {copied ? 'Copied to clipboard!' : 'Print or copy profile'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
