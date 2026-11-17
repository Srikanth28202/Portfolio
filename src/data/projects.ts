export type ProjectVisualKind =
  | "agri"
  | "translate"
  | "weather"
  | "ev"
  | "fraud";

export type ProjectGroup = "AI/ML" | "Data Analytics" | "Full Stack" | "Robotics";

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  /** Full category label shown in the project details view. */
  category: string;
  /** Short filter bucket used by the category filter bar. */
  group: ProjectGroup;
  accent: string;
  visual: ProjectVisualKind;
  github: string;
  liveDemo: string;
};

/**
 * Central placeholder links for the GitHub / Live Demo buttons.
 *
 * Replace each value with the real repository / deployment URL later —
 * every project currently points at a stable, resolvable page so no
 * button 404s and no repository URL is invented.
 */
export const placeholderLinks = {
  github: "https://github.com/Srikanth28202",
  liveDemo: "https://example.com",
} as const;

export const projects: Project[] = [
  {
    id: "agrisarathi",
    index: "01",
    title: "AgriSarathi",
    subtitle: "AI-Powered Crop Recommendation & Price Prediction",
    description:
      "An intelligent agricultural platform combining machine learning, explainable AI and multilingual assistance to support agricultural decision-making.",
    tags: ["Python", "Machine Learning", "SHAP", "NLP"],
    category: "AI / Machine Learning",
    group: "AI/ML",
    accent: "#34D399",
    visual: "agri",
    github: placeholderLinks.github,
    liveDemo: placeholderLinks.liveDemo,
  },
  {
    id: "translator",
    index: "02",
    title: "Automated Multilingual Neural Translator",
    description:
      "A neural-network-based translation application designed to translate text between multiple languages.",
    tags: ["Python", "Neural Networks", "NLP"],
    category: "AI / NLP",
    group: "AI/ML",
    accent: "#38BDF8",
    visual: "translate",
    github: placeholderLinks.github,
    liveDemo: placeholderLinks.liveDemo,
  },
  {
    id: "weather",
    index: "03",
    title: "Weather Pattern Prediction",
    description:
      "A time-series forecasting project using SARIMA to analyze historical weather patterns and predict future trends.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "SARIMA",
      "Matplotlib",
    ],
    category: "Data Analytics / Machine Learning",
    group: "Data Analytics",
    accent: "#287BFF",
    visual: "weather",
    github: placeholderLinks.github,
    liveDemo: placeholderLinks.liveDemo,
  },
  {
    id: "ev-charging",
    index: "04",
    title: "Smart Dynamic Wireless EV Charging Robotic Vehicle",
    description:
      "An engineering project exploring dynamic wireless EV charging through a robotic vehicle system.",
    tags: ["Embedded Systems", "Robotics", "Wireless Charging", "IoT"],
    category: "Robotics / IoT",
    group: "Robotics",
    accent: "#8B5CF6",
    visual: "ev",
    github: placeholderLinks.github,
    liveDemo: placeholderLinks.liveDemo,
  },
  {
    id: "fake-job-detection",
    index: "05",
    title: "AI-Powered Fake Job Detection System",
    description:
      "An intelligent application that analyzes job postings and classifies potential fraudulent listings using NLP and machine learning.",
    tags: ["Python", "FastAPI", "React.js", "MongoDB", "NLP"],
    category: "AI / Full Stack",
    group: "Full Stack",
    accent: "#F472B6",
    visual: "fraud",
    github: placeholderLinks.github,
    liveDemo: placeholderLinks.liveDemo,
  },
];
