export const site = {
  name: "Sri Kanth V",
  monogram: "SKV",
  title:
    "Artificial Intelligence & Machine Learning Engineer | Data Analytics | Full Stack Developer",
  description:
    "Portfolio of Sri Kanth V — AI/ML engineer, data and business analytics practitioner, full stack developer and technical trainer building intelligent, end-to-end digital products.",
  email: "srikanth200428@gmail.com",
  phone: "7019878478",
  location: "Doddaballapura, Bengaluru Rural, Karnataka, India.",
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
    skills: [
      "Excel",
      "Power BI",
      "EDA",
      "Statistics",
      "Data Cleaning",
      "Business Analysis",
    ],
  },
  {
    title: "AI & Machine Learning",
    caption: "Applied modelling, evaluation and model-backed services.",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Predictive Modelling",
      "Time Series Forecasting",
      "OpenCV",
    ],
  },
  {
    title: "Frontend Engineering",
    caption: "Typed, component-driven interfaces that ship cleanly.",
    icon: "layout",
    skills: ["HTML", "CSS", "React.js", "Next.js"],
  },
  {
    title: "Backend & Delivery",
    caption: "APIs, data stores and tooling that keep builds reliable.",
    icon: "database",
    skills: ["FastAPI", "SQL Server", "MongoDB", "Jupyter Notebook", "VS Code"],
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { title: "Programming", skills: ["Python", "Java", "C++", "SQL"] },
  { title: "AI/ML", skills: ["Machine Learning", "Predictive Modelling", "Time Series Forecasting", "OpenCV"] },
  { title: "Data Analytics", skills: ["Excel", "Power BI", "EDA", "Statistics", "Data Cleaning", "Business Analysis"] },
  { title: "Visualization", skills: ["Matplotlib", "Seaborn", "Dashboard Development"] },
  { title: "Libraries", skills: ["Pandas", "NumPy", "Scikit-learn", "Statsmodels"] },
  { title: "Web", skills: ["HTML", "CSS", "React.js", "Next.js", "FastAPI"] },
  { title: "Database", skills: ["SQL Server", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"] },
];

export type ExperienceItem = {
  org: string;
  role: string;
  kind: string;
  period?: string;
  description: string;
  focus: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "Artsy Technologies",
    role: "AI/ML Intern",
    kind: "Internship",
    period: "Oct 2025 – Jul 2026",
    description:
      "Worked on Python-based AI/ML projects, contributing to model development, data handling and implementation. Guided and mentored student interns in technical concepts and project implementation.",
    focus: ["Model development", "Data handling", "Student mentoring"],
  },
  {
    org: "Cisco AICTE",
    role: "Cybersecurity Intern",
    kind: "Internship",
    period: "Jun–Aug 2025",
    description:
      "Virtual internship focused on cybersecurity fundamentals, threat analysis and security practices.",
    focus: ["Cybersecurity fundamentals", "Threat analysis", "Security practices"],
  },
  {
    org: "Tattvasphere Technologies LLP",
    role: "Freelance Software Developer",
    kind: "Freelance",
    period: "",
    description:
      "Website development and improvements for KECCTA.in and Nagaraseva.com — Next.js development, sitemap and canonical URL configuration, technical SEO and Google Search indexing improvements, municipal digital solutions and service workflows.",
    focus: ["KECCTA.in", "Nagaraseva.com", "Next.js", "Technical SEO"],
  },
  {
    org: "Anudip Foundation",
    role: "Data and Business Analytics Using AI",
    kind: "Training",
    period: "Currently undergoing",
    description:
      "Currently undergoing training in data cleaning, analysis, visualization, KPI tracking, business insights and AI-assisted analytics.",
    focus: ["Data cleaning", "Data analysis", "Visualization", "KPI tracking", "Business insights", "AI-assisted analytics"],
  },
];

export type EducationEntry = {
  degree: string;
  university: string;
  cgpa: string;
  duration: string;
};

export const education: EducationEntry = {
  degree: "B.E. Artificial Intelligence and Machine Learning",
  university: "SJC Institute of Technology, Karnataka",
  cgpa: "8.66/10",
  duration: "2022 – 2026",
};

export type EducationHistoryEntry = {
  level: string;
  degree: string;
  institution: string;
  score: string;
  duration: string;
};

export const educationHistory: EducationHistoryEntry[] = [
  {
    level: "Pre-University",
    degree: "Pre-University",
    institution: "Shree Vani PU College",
    score: "87%",
    duration: "2020 – 2022",
  },
  {
    level: "SSLC",
    degree: "SSLC",
    institution: "Swamy Vivekananda English High School",
    score: "90.56%",
    duration: "2019 – 2020",
  },
];

export type Achievement = {
  title: string;
  subtitle?: string;
  description: string;
};

export const leadership: Achievement[] = [
  {
    title: "Class Representative",
    subtitle: "Four consecutive years",
    description: "Served as Class Representative for four consecutive years, representing the cohort in academic and extracurricular activities.",
  },
  {
    title: "Department Placement Coordinator",
    subtitle: "Coordinator",
    description: "Coordinated department placement activities and student industry outreach.",
  },
  {
    title: "Technical Trainer and Intern Mentor",
    subtitle: "Trainer & Mentor",
    description: "Delivered technical training and mentored student interns across programming, data and AI fundamentals.",
  },
];

export const certifications: Achievement[] = [
  {
    title: "Machine Learning",
    subtitle: "Kaggle",
    description: "Completed the Machine Learning course on Kaggle.",
  },
  {
    title: "Introduction to Deep Learning",
    subtitle: "Kaggle",
    description: "Completed the Introduction to Deep Learning course on Kaggle.",
  },
];
