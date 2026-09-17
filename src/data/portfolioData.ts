import { PersonalInfo, SkillCategory, ExperienceItem, Project, EducationItem, CertificationItem, AchievementItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Maturi Madhulatha",
  headline: "Information Technology Student | Android Developer | Data Visualization Enthusiast",
  summary: "Motivated and detail-oriented B.Tech Information Technology student with hands-on experience in Android application development, Python, C, HTML, and data visualization. Skilled in developing Android applications using Kotlin and Android Studio, including WebView-based mobile applications integrated with web platforms. Passionate about software development, business technology solutions, and continuous learning.",
  email: "madhumaturi7@gmail.com",
  phone: "8096953898",
  location: "Khajipalem",
  githubLabel: "GitHub",
  githubUrl: "https://github.com/madhulatha77", // Set your GitHub profile URL here (e.g. "https://github.com/username")
  linkedinLabel: "LinkedIn",
  linkedinUrl: null, // Set your LinkedIn profile URL here (e.g. "https://linkedin.com/in/username")
  resumePath: "/resume.pdf"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "Kotlin", "C", "HTML"]
  },
  {
    title: "Frameworks & Tools",
    icon: "layers",
    skills: ["Django", "Git", "Android Studio", "Power BI"]
  },
  {
    title: "Technical Concepts",
    icon: "cpu",
    skills: ["REST APIs", "Authentication", "Client-Server Architecture", "Distributed Systems Basics"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Intern",
    company: "DPDPD Pvt Ltd",
    period: "January 2026 – June 2026",
    points: [
      "Developed Android applications using Kotlin and Android Studio for patient and partner services.",
      "Built and maintained responsive mobile interfaces with improved UI/UX features.",
      "Worked on integrating WebView functionality to convert an existing web platform into a mobile application.",
      "Collaborated with the development team to enhance application performance and usability.",
      "Managed local data storage and optimized application responsiveness for better user experience.",
      "Collaborated with the development team to enhance application usability and workflow navigation."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "certificate-mail-merge-agent",
    title: "Certificate Mail-Merge Agent",
    subtitle: "AI-Powered Certificate Automation",
    category: "Agentic AI",
    technologies: [
      "Python",
      "Flask",
      "Google Antigravity",
      "OpenPyXL",
      "python-docx"
    ],
    summary:
      "An automated certificate generation agent that creates personalized certificates from a template and student Excel data, with downloadable PDF and Word outputs.",
    points: [
      "Built an automated certificate mail-merge workflow using Python and Flask.",
      "Processes certificate templates and student data from Excel files.",
      "Generates personalized certificates while preserving the original certificate design.",
      "Produces combined PDF and Word documents for easy download.",
      "Deployed the application as a live web application."
    ],
    githubUrl: "https://github.com/madhulatha77/Certificate-Mail-Merge-Agent",
    demoUrl: "https://certificate-mail-merge-agent.onrender.com/"
  },

  {
    id: "aido-android-app",
    title: "AIDO – Android Application Development",
    subtitle: "Mobile Application Development",
    category: "Android Development",
    technologies: ["Kotlin", "Android Studio"],
    summary:
      "Android mobile application developed using Kotlin and Android Studio featuring optimized performance and user-friendly interfaces.",
    points: [
      "Contributed to the development of the AIDO mobile application using Kotlin and Android Studio.",
      "Implemented user-friendly interfaces and optimized application performance.",
      "Assisted in feature integration, debugging, and application maintenance."
    ],
    githubUrl: null
  },

  {
    id: "webview-mobile-app",
    title: "WebView-Based Mobile Application",
    subtitle: "Web-to-Mobile Integration",
    category: "Mobile Integration",
    technologies: ["Kotlin", "Android Studio", "WebView"],
    summary:
      "Android mobile application utilizing WebView to integrate an existing company website into a seamless mobile platform.",
    points: [
      "Developed an Android mobile application using WebView to integrate an existing company website into a mobile platform.",
      "Improved accessibility and mobile user experience through responsive application design.",
      "Worked on navigation handling, page loading optimization, and app performance enhancement."
    ],
    githubUrl: null
  },

  {
    id: "power-bi-sales-dashboard",
    title: "Power BI Sales Dashboard",
    subtitle: "Data Analytics & Visualization",
    category: "Data Visualization",
    technologies: ["Power BI", "Data Cleaning", "Data Transformation"],
    summary:
      "Interactive business intelligence dashboard designed to analyze sales data with category and shipping insights.",
    points: [
      "Developed an interactive dashboard to analyze sales data.",
      "Created charts and reports for category and shipping analysis.",
      "Performed data cleaning and transformation for accurate visualization."
    ],
    githubUrl: null
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Bapatla Engineering College",
    location: "Bapatla",
    period: "2022 – 2026",
    score: "9.35",
    scoreType: "CGPA"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Sai Junior College",
    location: "Bapatla",
    period: "2020 – 2022",
    score: "84.9%",
    scoreType: "Percentage"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "TCS CodeVita Season 13",
    issuer: "Tata Consultancy Services",
    details: "Achieved Global Rank 609 in TCS CodeVita Season 13 coding competition for demonstrating strong programming and problem-solving skills.",
    iconType: "code"
  },
  {
    title: "Power BI Internship Certification",
    issuer: "Shripriti Educational & IT Hub",
    details: "Completed a 2-month internship focused on Power BI dashboard development and business data visualization.",
    iconType: "chart"
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    details: "Completed hands-on training on AI tools, ChatGPT applications, AI-assisted coding, presentations, and data analysis.",
    iconType: "ai"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    value: "609",
    label: "Global Rank",
    description: "Secured Global Rank 609 in TCS CodeVita Season 13 international competitive programming contest.",
    highlight: "TCS CodeVita Season 13"
  },
  {
    value: "9.35",
    label: "B.Tech CGPA",
    description: "Maintained an outstanding cumulative grade point average of 9.35 in B.Tech Information Technology.",
    highlight: "Bapatla Engineering College"
  }
];
