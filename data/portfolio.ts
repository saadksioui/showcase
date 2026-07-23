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


export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  summary: string;
  highlights: string[];
  tags?: string[];
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
  demo?: string;
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
    "Software Developer with a focus on building clean, scalable, and impactful digital solutions.",
  about: [
    "Hi, I'm Saad Ksioui, a software developer who loves creating useful programs. Web development is something which I really love because when building web projects, I get to solve different issues and create interesting user experiences.",
    "No matter whether the project is a community platform, SaaS service, my own portfolio website or any kind of productivity application, for me, the process of making something out of an idea is what is truly thrilling. In general, there are two major things I like about developing software – challenges and constant learning.",
    "In order to create top-notch software, it is necessary to continuously learn more about various development technologies and software engineering in general, which I really enjoy. For me, good software is always built according to the principles of code quality, design, and people-first approach.",
    "At the moment, I study at 1337 Coding School where I improve problem solving skills as well as my knowledge about software development and computer science in general."
  ],
};


export const experience: ExperienceItem[] = [
  {
    company: "DGM (Direction generale de la meteorologie)",
    role: "Full Stack Developer",
    type: "Internship",
    period: "Apr 2024 - Sep 2024",
    location: "Casablanca, Morocco",
    summary:
      "Developed a support ticket website tracking 5,000+ daily tickets, cutting response times by 30% and saving 100+ work hours monthly through automation and streamlined integrations.",
    highlights: [
      "Developed a comprehensive support ticket management website with an intuitive interface, incorporating a database system that tracked over 5,000 tickets daily.",
      "Implemented automatic user notifications for ticket updates, resulting in a 30% decrease in response time and an increase in customer satisfaction by 15%.",
      "Collaborated with cross-functional teams to streamline the integration of the ticket management website, reducing manual data entry errors by 20% and saving over 100 work hours per month."
    ],
    tags: [
      "React.js", 
      "TypeScript",
      "PHP",
      "Laravel",
      "MySQL",
      "Prometheus.io",
      "Grafana"
    ],
  },
  {
    company: "TEAMWAY",
    role: "Full Stack Developer",
    type: "Internship",
    period: "May 2025 - Oct 2025",
    location: "Casablanca, Morocco",
    summary: "Redesigned the corporate website and developed a custom content generation automation app, significantly boosting brand visibility while optimizing internal workflows and production efficiency.",
    highlights: [
      "Led the comprehensive redesign of the company website, modernizing the user interface and enhancing digital presence to drive higher user engagement.",
      "Developed and deployed an innovative content generation automation application, streamlining creative workflows and significantly reducing time-to-market for digital assets.",
      "Optimized internal operational processes by integrating automated tools, eliminating manual bottlenecks and improving cross-team efficiency."
    ],
    tags: [
      "React.js", 
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "WordPress",
      "Figma",
      "Tailwind CSS"
    ],
  }
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
    title: "LinkedHire",
    description:
      "LinkedHire is a modern web application built with Next.js, designed to streamline professional networking and hiring processes. Leveraging the latest features of Next.js, this project offers a fast, scalable, and developer-friendly foundation for building robust web experiences.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "ShadCN UI"],
    github: "https://github.com/saadksioui/linkedhire",
    demo: "https://linkedhire.vercel.app/",
    done: true,
  },
  {
    title: "Fly-in",
    description:
      "Fly-in is a Python-based simulation engine and pathfinding algorithm designed to route a fleet of autonomous drones through a complex, dynamic network.",
    technologies: ["Python", "Pygame", "Graph Theory", "Dijkstra's Algorithm", "MAPF (Multi-Agent Pathfinding)"],
    github: "https://github.com/saadksioui/fly-in",
    done: true,
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
