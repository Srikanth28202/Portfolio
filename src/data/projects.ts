export type ProjectVisualKind =
  | "agri"
  | "translate"
  | "weather"
  | "ev"
  | "fraud"
  | "web";

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
    id: "keccta-in",
    index: "01",
    title: "KECCTA.in",
    subtitle: "Freelance Website Development",
    description:
      "Freelance website development using Next.js, React.js, JavaScript, HTML, CSS and technical SEO.",
    tags: ["Next.js", "React.js", "JavaScript", "HTML", "CSS", "Technical SEO"],
    category: "Full Stack",
    accent: "#287BFF",
    visual: "web",
    github: "",
    liveDemo: "",
  },
  {
    id: "nagaraseva-com",
    index: "02",
    title: "Nagaraseva.com",
    subtitle: "Municipal Digital Solutions",
    description:
      "Municipal digital solutions for Doddaballapura, including citizen services, waste tracking and service request workflows.",
    tags: ["Next.js", "React.js", "Municipal", "Service Workflows", "Waste Tracking"],
    category: "Full Stack",
    accent: "#7C5CFF",
    visual: "web",
    github: "",
    liveDemo: "",
  },
  {
    id: "scanskip",
    index: "03",
    title: "ScanSkip",
    subtitle: "Academic and Career Assistance",
    description:
      "Ongoing academic and career assistance platform involving backend workflows, authentication, resource management and structured data storage.",
    tags: ["Backend", "Authentication", "Resource Management", "Structured Data"],
    category: "Full Stack",
    accent: "#38BDF8",
    visual: "web",
    github: "",
    liveDemo: "",
  },
  {
    id: "smart-greenhouse",
    index: "04",
    title: "Smart Greenhouse System",
    subtitle: "AI + IoT",
    description:
      "Smart irrigation, IoT sensor integration, automated environmental control and image processing for plant disease detection.",
    tags: ["IoT", "Agriculture", "Image Processing", "Computer Vision"],
    category: "AI/ML",
    accent: "#34D399",
    visual: "agri",
    github: "",
    liveDemo: "",
  },
  {
    id: "multilingual-voice-agent",
    index: "05",
    title: "Multilingual Voice Agent",
    subtitle: "Python Voice Interaction",
    description:
      "Python-based application integrating speech-to-text, translation and text-to-speech for multilingual voice interaction.",
    tags: ["Python", "NLP", "Speech-to-Text", "Translation", "Text-to-Speech"],
    category: "NLP",
    accent: "#F472B6",
    visual: "translate",
    github: "",
    liveDemo: "",
  },
  {
    id: "weather-pattern-prediction",
    index: "06",
    title: "Weather Pattern Prediction",
    subtitle: "Time-Series Forecasting with SARIMA",
    description:
      "Seasonal ARIMA modelling applied to historical weather data to separate trend, seasonality and noise — surfacing patterns that support better forecasting decisions.",
    tags: ["SARIMA", "Time Series", "Python", "Pandas", "NumPy", "Matplotlib"],
    category: "Data Analytics",
    accent: "#287BFF",
    visual: "weather",
    github: "https://github.com/Srikanth28202/weather-prediction",
    liveDemo: "https://weather-prediction-demo.vercel.app",
  },
];
