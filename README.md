# Junior Software Developer & IT Professional Portfolio

A clean, modern, minimalist portfolio website engineered to showcase practical software development capabilities, database design, and systems troubleshooting experience for entry-level and junior roles.

## Design & Architecture Philosophy

- **Honest Positioning**: Deliberately avoids exaggerated titles or marketing buzzwords ("expert", "senior", "master", "rockstar"). It presents a genuine, early-career developer with strong competencies in requirements analysis, relational logic, and systematic debugging.
- **Evidence-Driven**: Emphasizes **how you think** through the **Technical Case Studies** section (Problem → Investigation → Technical Reasoning → Solution → Result).
- **Data-Driven Decoupling**: All content (personal info, projects, skills, experience, case studies) is cleanly separated in `src/data/portfolioData.ts`. You can update your entire portfolio without modifying UI components.
- **Minimalist Aesthetics**: High-contrast, monochromatic palette (neutrals, slate, zinc) with ample whitespace, refined typography, and subtle light/dark mode transitions.
- **Accessible & Responsive**: Fully responsive across mobile, tablet, laptop, and desktop viewports with accessible semantic HTML and keyboard navigation.

---

## Project Structure

```
├── public/
│   └── resume.pdf                 # Replace with your actual resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Header with brand badge, anchors, and theme toggle
│   │   ├── Hero.tsx               # Introduction, title, and key action buttons
│   │   ├── About.tsx              # Education, IT & dev background, and strengths
│   │   ├── Skills.tsx             # Categorized skills (Development, Database, Frameworks, etc.)
│   │   ├── Projects.tsx           # Data-driven project cards with case study links
│   │   ├── CaseStudies.tsx        # 5-step technical problem-solving deep dives
│   │   ├── Experience.tsx         # Chronological work & project timeline
│   │   ├── DevelopmentApproach.tsx# 8-step iterative development workflow
│   │   ├── ResumeSection.tsx      # On-page CV snapshot and download controls
│   │   ├── ResumeModal.tsx        # In-browser full CV preview modal
│   │   ├── Contact.tsx            # Direct contact links and message form
│   │   ├── ProjectDemoModal.tsx   # Live demo preview and confidentiality notice modal
│   │   └── Footer.tsx             # Minimalist footer with quick navigation and back-to-top
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for all content & placeholders
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces for portfolio entities
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Tailwind CSS styling
│   └── main.tsx                   # React DOM entry point
├── index.html                     # HTML entry point with metadata
├── package.json                   # Build configuration & scripts
└── tsconfig.json                  # TypeScript compiler options
```

---

## How to Customize for Your Job Search

### 1. Update Personal & Contact Info
Open `src/data/portfolioData.ts` and update the `personalInfo` object:
- Replace `[Your Name]` with your actual full name.
- Update `location` (e.g. `"Manila, Philippines"`).
- Update `email`, `github`, and `linkedin` URLs.

### 2. Add Your Real Resume PDF
Replace `/public/resume.pdf` with your actual exported PDF file.
The "Download PDF" button and "View Resume" modal will automatically reference this file.

### 3. Update Education & Experience Records
In `src/data/portfolioData.ts`:
- Under `aboutData.educationPlaceholder`, enter your actual degree, institution name, and study years.
- Under `experienceData`, update the `companyPlaceholder`, `periodPlaceholder`, and specific responsibilities to match your internship or IT staff history.

### 4. Link Your Real Project Repositories & Demos
In `src/data/portfolioData.ts`, replace the `githubUrlPlaceholder` and `liveDemoUrlPlaceholder` in `projectsData` with your live links.

---

## Development & Build Commands

```bash
# Start local development server (binds to port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment Options

This portfolio is a static Single Page Application (SPA) compatible with standard web hosting platforms:

- **GitHub Pages**: Run `npm run build`, and deploy the resulting `dist/` directory via the `gh-pages` branch or GitHub Actions.
- **Vercel / Netlify / Cloudflare Pages**: Connect your GitHub repository. Set the build command to `npm run build` and publish directory to `dist`.
- **Google Cloud Run**: Pre-configured for Cloud Run deployment in Google AI Studio.
