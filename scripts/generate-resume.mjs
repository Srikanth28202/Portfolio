/**
 * Generates a clean, single-page PDF resume at public/resume.pdf.
 * Run with: npm run resume
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "public", "resume.pdf");

const PAGE_WIDTH = 612;
const MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const INK = "0.08 0.09 0.12";
const MUTED = "0.38 0.41 0.46";
const ACCENT = "0.157 0.482 1";
const RULE = "0.85 0.87 0.9";

const escapeText = (value) =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\u2014/g, "\x97")
    .replace(/\u2019/g, "\x92");

const content = [];

const text = (value, x, y, size, font = "F1", color = INK, spacing = 0) => {
  content.push(
    `BT /${font} ${size} Tf ${color} rg ${spacing} Tc ${x} ${y} Td (${escapeText(
      value,
    )}) Tj ET`,
  );
};

const rule = (x, y, width, thickness = 0.8, color = RULE) => {
  content.push(
    `${color} RG ${thickness} w ${x} ${y} m ${x + width} ${y} l S`,
  );
};

const wrap = (value, maxChars) => {
  const words = value.split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
};

const paragraph = (value, size = 9.5, lineHeight = 13.5, maxChars = 96) => {
  const lines = wrap(value, maxChars);
  lines.forEach((line) => {
    text(line, MARGIN, cursor, size, "F1", MUTED);
    cursor -= lineHeight;
  });
};

let cursor = 0;

/* ---------- Header ---------- */

text("SRI KANTH V", MARGIN, 738, 25, "F2", INK, 0.5);
content.push(`${ACCENT} rg ${MARGIN} 722 96 3 re f`);

text(
  "AI/ML ENGINEER  ·  DATA & BUSINESS ANALYTICS  ·  FULL STACK DEVELOPER  ·  TECHNICAL TRAINER",
  MARGIN,
  702,
  7.4,
  "F2",
  ACCENT,
  0.55,
);

text(
  "srikanth200428@gmail.com    |    github.com/Srikanth28202    |    linkedin.com/in/sri-kanth-v-07a6a7269",
  MARGIN,
  689,
  8,
  "F1",
  MUTED,
);

/* ---------- Section helper ---------- */

const section = (label, y) => {
  text(label.toUpperCase(), MARGIN, y, 8.2, "F2", INK, 1.1);
  rule(MARGIN, y - 6, CONTENT_WIDTH, 0.7);
  cursor = y - 20;
};

/* ---------- Profile ---------- */

section("Profile", 662);
paragraph(
  "AI/ML engineer, data and analytics practitioner and full stack developer. I take problems from first exploration and modelling through to the interface people use — spanning machine learning pipelines, business analytics and modern web engineering. Alongside building, I train and mentor on the same tools, which keeps the fundamentals sharp.",
);

/* ---------- Skills ---------- */

section("Technical Skills", cursor - 6);
paragraph(
  "Programming: Python, Java, C++, SQL",
  9.3,
  12.6,
);
paragraph(
  "Data Analytics: Excel, Power BI, EDA, Statistics, Data Cleaning, Business Analysis",
  9.3,
  12.6,
);
paragraph(
  "AI / ML: Machine Learning, Predictive Modelling, Time Series Forecasting, OpenCV",
  9.3,
  12.6,
);
paragraph(
  "Libraries: Pandas, NumPy, Scikit-learn, Statsmodels",
  9.3,
  12.6,
);
paragraph(
  "Web: HTML, CSS, React.js, Next.js, FastAPI",
  9.3,
  12.6,
);
paragraph("Database: SQL Server, MongoDB", 9.3, 12.6);
paragraph("Tools: Git, GitHub, Jupyter Notebook, VS Code", 9.3, 12.6);

/* ---------- Projects ---------- */

section("Selected Projects", cursor - 8);

const projects = [
  [
    "KECCTA.in — Freelance Website Development",
    "Freelance website development using Next.js, React.js, JavaScript, HTML, CSS and technical SEO.",
  ],
  [
    "Nagaraseva.com — Municipal Digital Solutions",
    "Municipal digital solutions for Doddaballapura, including citizen services, waste tracking and service request workflows.",
  ],
  [
    "ScanSkip — Academic and Career Assistance",
    "Ongoing academic and career assistance platform involving backend workflows, authentication, resource management and structured data storage.",
  ],
  [
    "Smart Greenhouse System — AI + IoT",
    "Smart irrigation, IoT sensor integration, automated environmental control and image processing for plant disease detection.",
  ],
  [
    "Multilingual Voice Agent",
    "Python-based application integrating speech-to-text, translation and text-to-speech for multilingual voice interaction.",
  ],
  [
    "Weather Pattern Prediction using SARIMA",
    "Time-series forecasting using SARIMA, historical weather data and seasonal trend analysis.",
  ],
];

projects.forEach(([title, description]) => {
  text(title, MARGIN, cursor, 9.6, "F2", INK);
  cursor -= 12;
  paragraph(description, 9.1, 12.4);
  cursor -= 4;
});

/* ---------- Experience ---------- */

section("Experience", cursor - 4);

const experienceItems = [
  [
    "Artsy Technologies — AI/ML Intern",
    "Worked on Python-based AI/ML projects, contributing to model development, data handling and implementation. Guided and mentored student interns in technical concepts and project implementation.",
  ],
  [
    "Cisco AICTE — Cybersecurity Intern",
    "Virtual internship focused on cybersecurity fundamentals, threat analysis and security practices.",
  ],
  [
    "Tattvasphere Technologies LLP — Freelance Software Developer",
    "Website development and improvements for KECCTA.in and Nagaraseva.com, including Next.js development, sitemap and canonical URL configuration, and technical SEO and Google Search indexing improvements.",
  ],
  [
    "Anudip Foundation — Data and Business Analytics Using AI",
    "Currently undergoing training in data cleaning, analysis, visualization, KPI tracking, business insights and AI-assisted analytics.",
  ],
];

experienceItems.forEach(([title, description]) => {
  text(title, MARGIN, cursor, 9.6, "F2", INK);
  cursor -= 12;
  paragraph(description, 9.1, 12.4);
  cursor -= 4;
});

/* ---------- Footer ---------- */

console.log(`Content bottom: ${cursor.toFixed(1)}pt`);

rule(MARGIN, 70, CONTENT_WIDTH, 0.6);
text(
  "Detailed project walkthroughs and references available on request.",
  MARGIN,
  56,
  7.6,
  "F1",
  MUTED,
);
text("Sri Kanth V", PAGE_WIDTH - MARGIN - 42, 56, 7.6, "F2", MUTED);

/* ---------- Assemble PDF ---------- */

const stream = content.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let index = 1; index <= objects.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

await mkdir(dirname(output), { recursive: true });
await writeFile(output, Buffer.from(pdf, "latin1"));
console.log(`Resume written to ${output}`);
