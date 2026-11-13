export type ProjectVisualKind =
  | "agri"
  | "translate"
  | "weather"
  | "ev"
  | "fraud";

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  category: "AI/ML" | "Data Analytics" | "Full Stack" | "Robotics" | "NLP";
  accent: string;
  visual: ProjectVisualKind;
  github: string;
  liveDemo: string;
};

export const projects: Project[] = [
  {
    id: "agrisarathi",
    index: "01",
    title: "AgriSarathi",
    subtitle: "AI-Powered Crop Recommendation & Price Prediction",
    description:
      "An intelligent agricultural platform combining machine learning, explainable AI and multilingual assistance to support agricultural decision-making.",
    tags: ["Machine Learning", "Recommendation", "Agriculture", "SHAP", "NLP"],
    category: "AI/ML",
    accent: "#34D399",
    visual: "agri",
    github: "https://github.com/Srikanth28202/agrisarathi",
    liveDemo: "https://agrisarathi-demo.vercel.app",
  },
  {
    id: "translator",
    index: "02",
    title: "Automated Multilingual Neural Translator",
    description:
      "A neural-network-based translation application designed to translate text between multiple languages.",
    tags: ["NLP", "Neural Networks", "Python", "Seq2Seq"],
    category: "NLP",
    accent: "#38BDF8",
    visual: "translate",
    github: "https://github.com/Srikanth28202/neural-translator",
    liveDemo: "https://neural-translator-demo.vercel.app",
  },
  {
    id: "weather",
    index: "03",
    title: "Weather Pattern Prediction",
    description:
      "A time-series forecasting project using SARIMA to analyze historical weather patterns and predict future trends.",
    tags: ["SARIMA", "Time Series", "Python", "Pandas", "NumPy", "Matplotlib"],
    category: "Data Analytics",
    accent: "#287BFF",
    visual: "weather",
    github: "https://github.com/Srikanth28202/weather-prediction",
    liveDemo: "https://weather-prediction-demo.vercel.app",
  },
  {
    id: "ev-charging",
    index: "04",
    title: "Smart Dynamic Wireless EV Charging Robotic Vehicle",
    description:
      "An engineering project exploring dynamic wireless EV charging through a robotic vehicle system.",
    tags: ["Robotics", "Embedded Systems", "Wireless Charging", "IoT"],
    category: "Robotics",
    accent: "#8B5CF6",
    visual: "ev",
    github: "https://github.com/Srikanth28202/ev-charging-robot",
    liveDemo: "https://ev-charging-demo.vercel.app",
  },
  {
    id: "fake-job-detection",
    index: "05",
    title: "AI-Powered Fake Job Detection System",
    description:
      "An intelligent application that analyzes job postings and classifies potential fraudulent listings using NLP and machine learning.",
    tags: ["Python", "FastAPI", "React.js", "MongoDB", "NLP", "Classification"],
    category: "Full Stack",
    accent: "#F472B6",
    visual: "fraud",
    github: "https://github.com/Srikanth28202/fake-job-detection",
    liveDemo: "https://fake-job-detection-demo.vercel.app",
  },
];
