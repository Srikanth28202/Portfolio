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
    role: "AI/ML Developer and Intern Trainer",
    kind: "Industry",
    description:
      "Part of a professional product team, contributing to full stack development and translating requirements into shipped, maintainable features. Delivered technical training to interns on AI/ML fundamentals and model deployment.",
    focus: ["Product engineering", "Full stack delivery", "Mentoring"],
  },
  {
    org: "Cisco × AICTE",
    role: "Cybersecurity Intern",
    kind: "Internship",
    description:
      "Selected for the Cisco and AICTE virtual internship program, working through networking fundamentals, structured troubleshooting and applied technical problem solving. Focused on cybersecurity fundamentals and secure application development.",
    focus: ["Networking", "Problem solving", "Cybersecurity"],
  },
  {
    org: "Tattvasphere Technologies LLP",
    role: "Freelance Software Developer",
    kind: "Freelance",
    description:
      "Partnered with clients to design and build responsive web applications — from interface decisions through implementation and deployment. Delivered multiple client projects using Next.js and FastAPI.",
    focus: ["Web applications", "Client delivery", "Independent projects"],
  },
  {
    org: "Technical Trainer",
    role: "Trainer & Mentor",
    kind: "Trainer & Mentor",
    description:
      "Delivered hands-on technical sessions across programming, data and AI fundamentals, breaking complex ideas into practical, project-based learning. Mentored students and interns on building end-to-end intelligent systems.",
    focus: ["Curriculum design", "Hands-on mentoring", "Student mentoring"],
  },
];

export type Achievement = {
  title: string;
  subtitle: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "1st Place",
    subtitle: "National Level Hackathon 2026",
    description: "Won first place at a national-level hackathon with a team of four, building an AI-powered crop recommendation system.",
  },
  {
    title: "IEEE Student Member",
    subtitle: "Institute of Electrical and Electronics Engineers",
    description: "Active IEEE student member since 2022, participating in technical workshops and conferences.",
  },
  {
    title: "Cisco Python Programming Certification",
    subtitle: "Cisco Career Essentials",
    description: "Completed Cisco's Python programming certification for network automation and tool development.",
  },
  {
    title: "Class Representative",
    subtitle: "Batch Coordinator",
    description: "Served as class representative and cultural coordinator, organizing student events and technical meetups.",
  },
  {
    title: "Industry-Guided Project",
    subtitle: "FAER Company",
    description: "Academic project guided by FAER Company, deploying a full-stack AI solution for predictive maintenance.",
  },
];

export type EducationItem = {
  degree: string;
  university: string;
  cgpa: string;
  duration: string;
};

export const education: EducationItem = {
  degree: "B.E. Artificial Intelligence and Machine Learning",
  university: "Visvesvaraya Technological University",
  cgpa: "8.66/10",
  duration: "2018 – 2022",
};

// Phase 2: Technical Skill Categories
export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C++"],
  },
  {
    title: "AI/ML",
    skills: ["Machine Learning", "Image Processing", "AI Application Development"],
  },
  {
    title: "Data Analytics",
    skills: ["SQL", "Excel", "Power BI", "Statistics", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL Server"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];
