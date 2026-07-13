export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  availability: string;
  cvUrl: string;
  avatar: string;
  heroSummary: string;
  about: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "leetcode";
}

export const profile: Profile = {
  name: "Saad Ksioui",
  role: "Software Engineer",
  tagline: "Designing thoughtful digital products with clarity, craft, and calm execution.",
  location: "Based in Morocco",
  email: "saad@ksioui.dev",
  availability: "Available for select freelance and product collaborations",
  cvUrl: "/cv.pdf",
  avatar: "/assets/avatar.svg",
  heroSummary:
    "I build polished web experiences that balance performance, accessibility, and elegant interaction design.",
  about: [
    "I am a software engineer focused on building expressive digital products that feel deliberate from the first click to the final interaction.",
    "My work blends product thinking, modern frontend engineering, and a strong emphasis on accessibility, performance, and maintainable architecture.",
    "I enjoy turning thoughtful requirements into clear interfaces and dependable systems that help teams ship with confidence.",
  ],
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product engineering",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Interface systems",
    items: ["Design systems", "Accessibility", "Motion", "Responsive UI"],
  },
  {
    title: "Delivery & collaboration",
    items: ["Git", "Vercel", "Agile delivery", "Code reviews"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Freelance Studio",
    role: "Frontend Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Designing and shipping sleek web products for founders, small teams, and creators who need premium digital presence.",
    highlights: [
      "Built polished landing pages and product experiences with a strong focus on performance and conversion.",
      "Collaborated closely with clients to translate product goals into component-driven interfaces.",
    ],
  },
  {
    company: "1337 Coding School",
    role: "Student & Problem Solver",
    period: "2022 — Present",
    location: "Rabat",
    summary:
      "Developing core computer science fundamentals through intensive software engineering practice and team-based projects.",
    highlights: [
      "Strengthened problem-solving, systems thinking, and clean coding habits through daily technical practice.",
      "Built projects that emphasize architecture, maintainability, and modern UI patterns.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "OFPPT",
    degree: "Developement Digital",
    period: "2022 — 2024",
    details: "Focused on software engineering fundamentals, algorithms, systems, and modern development practices.",
  },
  {
    school: "1337 Coding School",
    degree: "Computer Science & Software Engineering",
    period: "2025 — Present",
    details: "Focused on software engineering fundamentals, algorithms, systems, and modern development practices.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Northstar Studio",
    summary: "A refined portfolio experience for a modern creative agency.",
    description:
      "A cinematic one-page experience with editorial layout, gentle motion, and quick load times to help a brand stand out.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/saadksioui/showcase",
    demo: "https://example.com",
    image: "/assets/project-northstar.svg",
    featured: true,
  },
  {
    title: "Signal Board",
    summary: "An elegant product dashboard for visualizing user momentum.",
    description:
      "A minimal analytics surface designed for quick decision-making, responsive layouts, and calm interaction patterns.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saadksioui/showcase",
    demo: "https://example.com",
    image: "/assets/project-signal.svg",
  },
  {
    title: "Atelier Notes",
    summary: "A lightweight writing and planning workspace with a premium feel.",
    description:
      "A focused note-taking app that balances usability, speed, and timeless visuals without unnecessary clutter.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/saadksioui/showcase",
    demo: "https://example.com",
    image: "/assets/project-atelier.svg",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/saadksioui", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saadksioui", icon: "linkedin" },
  { label: "Email", href: "mailto:saad@ksioui.dev", icon: "mail" },
  { label: "LeetCode", href: "https://leetcode.com/u/saadksioui", icon: "leetcode" },
];

export const contactCopy = {
  title: "Let’s build something precise.",
  body: "If you’re looking for a thoughtful developer who values clarity, performance, and a calm user experience, I’d love to hear from you.",
  cta: "Send a note",
};
