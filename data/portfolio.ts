export interface Profile {
  name: string;
  role: string;
  tagline: string;
  quote: string;
  location: string;
  email: string;
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
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  done?: boolean;
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
  quote: "If you don't take risks, you can't create a future. — Monkey D. Luffy (One Piece)",
  location: "Based in Morocco",
  email: "saad@ksioui.dev",
  heroSummary:
    "I build polished web experiences that balance performance, accessibility, and elegant interaction design.",
  about: [
    "Hi, I'm Saad Ksioui, a software developer who loves creating useful programs. Web development is something which I really love because when building web projects, I get to solve different issues and create interesting user experiences.",
    "No matter whether the project is a community platform, SaaS service, my own portfolio website or any kind of productivity application, for me, the process of making something out of an idea is what is truly thrilling. In general, there are two major things I like about developing software – challenges and constant learning.",
    "In order to create top-notch software, it is necessary to continuously learn more about various development technologies and software engineering in general, which I really enjoy. For me, good software is always built according to the principles of code quality, design, and people-first approach.",
    "At the moment, I study at 1337 Coding School where I improve problem solving skills as well as my knowledge about software development and computer science in general."
  ],
};


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
    description:
      "A cinematic one-page experience with editorial layout, gentle motion, and quick load times to help a brand stand out.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/saadksioui/showcase",
    demo: "https://example.com",
    done: true,
  }
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
