import { shopify, starbucks, tesla } from "@/assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from "@/assets/icons";

// Comprehensive skills data using only available icons
export const skills = [
  // Frontend Technologies
  {
    imageUrl: html,
    name: "HTML5",
    type: "Frontend",
    proficiency: "Expert",
    yearsOfExperience: 3,
  },
  {
    imageUrl: css,
    name: "CSS3",
    type: "Frontend",
    proficiency: "Expert",
    yearsOfExperience: 3,
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    proficiency: "Advanced",
    yearsOfExperience: 3,
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    proficiency: "Advanced",
    yearsOfExperience: 2,
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    proficiency: "Advanced",
    yearsOfExperience: 2,
  },
  {
    imageUrl: sass,
    name: "SASS/SCSS",
    type: "Frontend",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },

  // Backend Technologies
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },
  // Python removed (no icon)
  // Flask removed (no icon)
  // Java removed (no icon)
  // C++ removed (no icon)

  // Databases
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  },

  // Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    proficiency: "Advanced",
    yearsOfExperience: 2,
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    proficiency: "Advanced",
    yearsOfExperience: 2,
  },

  // Animation
  {
    imageUrl: motion,
    name: "Framer Motion",
    type: "Animation",
    proficiency: "Intermediate",
    yearsOfExperience: 1,
  }
];

// Alternative solutions for missing icons:

// Option 1: Use text instead of icons for missing items
// (Removed unused skillsWithMissingIcons array to resolve unused variable error)

// Option 2: Use react-icons instead (recommended)
// First install: npm install react-icons
// Then you can import like:
/*
import { 
  SiPython, 
  SiTensorflow, 
  SiJest, 
  SiCypress,
  SiAws,
  SiDocker,
  SiFigma,
  SiUnity
} from "react-icons/si";
*/

// Enhanced experiences
export const experiences = [
  {
    title: "Computer Science Student",
    company_name: "University",
    icon: starbucks, // Placeholder
    iconBg: "#accbe1",
    date: "2022 - Present",
    points: [
      "Specializing in Full Stack Development and AI/ML",
      "Developed 30+ projects including web apps, AI solutions, and games",
      "Participated in 3 hackathons with award-winning projects",
      "Coursework includes Data Structures, Algorithms, DBMS, and Software Engineering"
    ],
  },
  {
    title: "Freelance Developer & Designer",
    company_name: "Self-Employed",
    icon: tesla, // Placeholder
    iconBg: "#fbc3bc",
    date: "2023 - Present",
    points: [
      "Built professional websites for small businesses with SEO optimization",
      "Developed custom web applications with responsive designs",
      "Created UI/UX designs and prototypes for client projects",
      "Implemented software testing strategies for reliable applications"
    ],
  },
  {
    title: "Technical Content Creator",
    company_name: "Personal Brand",
    icon: shopify, // Placeholder
    iconBg: "#b7e4c7",
    date: "2023 - Present",
    points: [
      "Create tutorials on web development and AI concepts",
      "Share project walkthroughs and coding challenges",
      "Document learning journey in tech through blogs and videos",
      "Open source contributor to various projects"
    ],
  }
];

// Social links remain the same
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
    type: "email",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    type: "code",
    username: "Abhishek-DS-ML-Gupta",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhishek-gupta-0442132b6/",
    type: "professional",
    username: "abhishek-gupta-0442132b6",
  },
];

// Comprehensive projects list
export const projects = [
  // Professional Websites
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Business Portfolio Websites",
    description: "Developed professional websites for local businesses with SEO optimization, responsive design, and CMS integration.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    metrics: "5+ business websites deployed",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "Professional Websites"
  },
  
  // GenAI Projects
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Code Assistant",
    description: "Generative AI tool that helps developers write better code with intelligent suggestions and error detection.",
    techStack: ["Python", "TensorFlow", "React", "Flask"],
    metrics: "Hackathon winning project",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "GenAI"
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Chatbot with NLP",
    description: "AI-powered chatbot with natural language processing capabilities for customer support applications.",
    techStack: ["Python", "NLTK", "TensorFlow", "Node.js"],
    metrics: "85% accuracy in intent recognition",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "GenAI"
  },

  // Software Development
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with product management, cart functionality, and payment processing.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    metrics: "Supports 100+ products",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "Software Development"
  },
  {
    iconUrl: car,
    theme: "btn-back-black",
    name: "Task Management System",
    description: "Productivity application with task organization, team collaboration, and progress tracking features.",
    techStack: ["TypeScript", "React", "Redux", "Firebase"],
    metrics: "Used by 50+ daily users",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "Software Development"
  },

  // Software Testing
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Automated Testing Suite",
    description: "Comprehensive testing framework for web applications with unit, integration, and E2E tests.",
    techStack: ["Jest", "Cypress", "Mocha", "Chai"],
    metrics: "90% test coverage achieved",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "Software Testing"
  },

  // Game Development
  {
    iconUrl: motion,
    theme: "btn-back-purple",
    name: "2D Platformer Game",
    description: "Interactive game with custom physics engine, character animation, and level design.",
    techStack: ["Unity", "C#", "Blender"],
    metrics: "10+ levels designed",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "Game Development"
  },

  // UI/UX Design
  {
    iconUrl: mui,
    theme: "btn-back-orange",
    name: "Design System Library",
    description: "Comprehensive UI component library with documentation and design guidelines.",
    techStack: ["Figma", "Storybook", "React", "Framer Motion"],
    metrics: "50+ reusable components",
    link: "https://github.com/Abhishek-DS-ML-Gupta",
    category: "UI/UX Design"
  }
];