export const site = {
  name: "Sri Kanth V",
  monogram: "SKV",
  title: "AI/ML Engineer, Data & Business Analytics, Full Stack Developer",
  description:
    "Portfolio of Sri Kanth V — AI/ML engineer, data and business analytics practitioner, full stack developer and technical trainer building intelligent, end-to-end digital products.",
  email: "srikanth200428@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  github: {
    label: "GitHub",
    handle: "@Srikanth28202",
    href: "https://github.com/Srikanth28202",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "Sri Kanth V",
    href: "https://www.linkedin.com/in/sri-kanth-v-07a6a7269/",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export type SkillGroup = {
  title: string;
  caption: string;
  icon: "code" | "chart" | "brain" | "layout" | "database";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core",
    caption: "Strong fundamentals across compiled and scripting languages.",
    icon: "code",
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Data & Business Analytics",
    caption: "From raw spreadsheets to decision-ready dashboards.",
    icon: "chart",
    skills: ["Excel", "Power BI", "Pandas", "NumPy"],
  },
  {
    title: "AI & Machine Learning",
    caption: "Applied modelling, evaluation and model-backed services.",
    icon: "brain",
    skills: ["Machine Learning", "FastAPI"],
  },
  {
    title: "Frontend Engineering",
    caption: "Typed, component-driven interfaces that ship cleanly.",
    icon: "layout",
    skills: ["React.js", "Next.js"],
  },
  {
    title: "Data Stores & Tooling",
    caption: "Persistence, querying and versioned collaboration.",
    icon: "database",
    skills: ["MongoDB", "SQL Server", "Git"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  visual: "agri" | "translate" | "weather" | "ev";
  accent: string;
};

export const projects: Project[] = [
  {
    id: "agrisarathi",
    index: "01",
    title: "AgriSarathi",
    subtitle: "AI Crop Recommendation",
    description:
      "A recommendation system that reads soil and climate signals to suggest crops farmers can actually act on. Built around a model-first pipeline that turns agricultural data into a clear, usable recommendation.",
    tags: ["Machine Learning", "Recommendation", "Agriculture"],
    visual: "agri",
    accent: "#34D399",
  },
  {
    id: "translator",
    index: "02",
    title: "Neural Translator",
    subtitle: "Automated Multilingual Translation",
    description:
      "A multilingual translation workflow designed to preserve meaning across languages, with an evaluation-focused approach to handling real-world text beyond clean benchmarks.",
    tags: ["NLP", "Neural Networks", "Python"],
    visual: "translate",
    accent: "#38BDF8",
  },
  {
    id: "weather",
    index: "03",
    title: "Weather Patterns",
    subtitle: "Time-Series Forecasting with SARIMA",
    description:
      "Seasonal ARIMA modelling applied to historical weather data to separate trend, seasonality and noise — surfacing patterns that support better forecasting decisions.",
    tags: ["SARIMA", "Time Series", "Analytics"],
    visual: "weather",
    accent: "#287BFF",
  },
  {
    id: "ev-charging",
    index: "04",
    title: "Dynamic EV Charging",
    subtitle: "Smart Wireless Charging Robotic Vehicle",
    description:
      "A robotics and power-electronics build exploring dynamic wireless charging for electric vehicles — combining embedded control with energy-aware system design.",
    tags: ["Robotics", "Embedded", "Energy Systems"],
    visual: "ev",
    accent: "#8B5CF6",
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  kind: string;
  description: string;
  focus: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "Artsy Technologies",
    role: "Software Development",
    kind: "Industry",
    description:
      "Part of a professional product team, contributing to full stack development and translating requirements into shipped, maintainable features.",
    focus: ["Product engineering", "Full stack delivery"],
  },
  {
    org: "Cisco × AICTE",
    role: "Virtual Internship",
    kind: "Internship",
    description:
      "Selected for the Cisco and AICTE virtual internship program, working through networking fundamentals, structured troubleshooting and applied technical problem solving.",
    focus: ["Networking", "Problem solving"],
  },
  {
    org: "Independent Practice",
    role: "Freelance Development",
    kind: "Freelance",
    description:
      "Partner with clients to design and build responsive web applications — from interface decisions through implementation and deployment.",
    focus: ["Web applications", "Client delivery"],
  },
  {
    org: "Technical Training",
    role: "Trainer & Mentor",
    kind: "Teaching",
    description:
      "Deliver hands-on technical sessions across programming, data and AI fundamentals, breaking complex ideas into practical, project-based learning.",
    focus: ["Curriculum design", "Hands-on mentoring"],
  },
];
