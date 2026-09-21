import {
  PersonalInfo,
  AboutData,
  ExperienceItem,
  ProjectItem,
  ContactData,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Nazarene Eroa',
  role: 'Application Analyst | Junior Software Developer',
  intro:
    'I am an early-career IT professional with a solid background in Information and Communications Technology. I have hands-on experience developing software applications, querying and structuring SQL databases, troubleshooting system issues, and building practical web interfaces. I focus on creating reliable solutions guided by sound application logic and clear user requirements.',
  selectedSkills: [
    'C#',
    'JavaScript / TypeScript',
    'SQL',
    'Next.js',
    'ASP.NET',
    'PostgreSQL / Supabase',
  ],
  email: 'nazareneeroa46@gmail.com',
  github: 'https://github.com/nazareneeroa',
  linkedin: 'https://linkedin.com/in/nazareneeroa',
};

export const aboutData: AboutData = {
  paragraphs: [
    'With a Diploma in Information and Communications Technology (ICT) from Polytechnic University of the Philippines, I have built a solid foundation in software development, relational databases, and IT systems support. My background includes building web-based tools, querying and managing SQL databases, troubleshooting software and hardware issues, and collaborating on technical workflows.',
    'I enjoy breaking down business requirements into practical systems with clean application logic, reliable data structures, and intuitive workflows. Moving forward, my career direction is focused on application analysis and junior software development—bridging operational needs with dependable, well-tested code.',
  ],
  degree: 'Diploma in Information and Communications Technology (ICT)',
  institution: 'Polytechnic University of the Philippines',
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Junior Developer / IT Support Associate',
    company: '[Company / Organization Name]',
    period: '[Start Date] – Present',
    responsibilities: [
      'Assist in maintaining and debugging internal web applications, resolving frontend issues and backend logic discrepancies.',
      'Write and optimize SQL queries for data verification, daily reporting, and routine database updates.',
      'Diagnose and troubleshoot application errors, system access issues, and hardware problems reported by staff.',
      'Collaborate with team members to document user requirements and test application modifications before release.',
    ],
  },
  {
    id: 'exp-2',
    role: 'IT / Systems Development Intern',
    company: '[Company / Organization Name]',
    period: '[Start Date] – [End Date]',
    responsibilities: [
      'Contributed to developing modular web components and structured database tables for internal tracking tools.',
      'Analyzed application logs and database records to isolate bugs and assist in deploying verified fixes.',
      'Assisted end-users with software installations, workstation configurations, and network connectivity troubleshooting.',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'canteen-management-system',
    title: 'Canteen Management & Ordering System',
    description:
      'A web-based ordering and transaction management system designed to streamline menu item tracking, order processing, and daily receipt logging. Developed to replace manual paper records with automated calculations and instant order status visibility.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
    keyFeatures: [
      'Role-based portals for customers and staff with order status tracking',
      'Relational database schema enforcing transaction integrity and stock records',
      'Automated billing calculation and daily sales reporting',
    ],
    githubUrl: 'https://github.com/nazareneeroa/canteen-management-system',
    liveDemoUrl: 'https://github.com/nazareneeroa/canteen-management-system',
    demoNotice:
      'Full source code and SQL setup script available on GitHub. Built with ASP.NET Core and SQL Server for enterprise IIS/local hosting.',
  },
  {
    id: 'realtime-photobooth-app',
    title: 'Realtime Photobooth & Asset Gallery',
    description:
      'An interactive web application enabling real-time photo capture, lightweight processing, and instant cloud-backed gallery sharing. Built to streamline client-side media capture with automatic database record synchronization.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    keyFeatures: [
      'Live camera stream capture with responsive client-side image processing',
      'Direct cloud asset storage with metadata stored in PostgreSQL via Supabase',
      'Real-time database subscription feed updating the public gallery instantly',
    ],
    githubUrl: 'https://github.com/nazareneeroa/photobooth-app',
    liveDemoUrl: 'https://github.com/nazareneeroa/photobooth-app',
    demoNotice:
      'Designed with Next.js and Supabase backend. Repository contains environment configuration and database schema migrations.',
  },
  {
    id: 'it-asset-tracker',
    title: 'IT Asset & Service Request Tracker',
    description:
      'A lightweight internal ticketing and hardware inventory system created to log departmental maintenance requests and monitor equipment assignment. Simplifies issue resolution lifecycles from submission to closure.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
    keyFeatures: [
      'Categorized ticket logging with priority levels and timestamped updates',
      'Hardware inventory ledger tracking serial numbers, specifications, and assigned custodians',
      'Clean filtering dashboard for active tickets and resolution status',
    ],
    githubUrl: 'https://github.com/nazareneeroa/it-asset-tracker',
    liveDemoUrl: 'https://github.com/nazareneeroa/it-asset-tracker',
    demoNotice:
      'Complete React frontend and PostgreSQL schema available in repository with sample database seed data.',
  },
];

export const contactData: ContactData = {
  email: 'nazareneeroa46@gmail.com',
  github: 'https://github.com/nazareneeroa',
  linkedin: 'https://linkedin.com/in/nazareneeroa',
};
