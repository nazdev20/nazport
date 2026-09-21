import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      const contactEl = document.getElementById('contact');
      const projectsEl = document.getElementById('projects');
      const experienceEl = document.getElementById('experience');
      const aboutEl = document.getElementById('about');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveSection('projects');
      } else if (experienceEl && scrollPosition >= experienceEl.offsetTop) {
        setActiveSection('experience');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Work', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 px-3 py-1.5 pb-safe shadow-lg"
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center min-w-[54px] min-h-[44px] py-1 px-1.5 rounded transition-colors ${
                isActive
                  ? 'text-neutral-950 dark:text-white font-medium'
                  : 'text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'stroke-[2.25]' : 'stroke-[1.75]'}`} />
              <span className="text-[10px] tracking-tight">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-neutral-100 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
