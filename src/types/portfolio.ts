export interface PersonalInfo {
  name: string;
  role: string;
  intro: string;
  selectedSkills: string[];
  email: string;
  github: string;
  linkedin: string;
}

export interface AboutData {
  paragraphs: string[];
  degree: string;
  institution: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoNotice?: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
}
