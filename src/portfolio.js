import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting
const illustration = {
  animated: true
};

const greeting = {
  username: "Anirban Maity",
  title: "Hi all, I'm Anirban 👋",
  subTitle: emoji(
    "Computer Science senior at Penn State with experience in software engineering, AI/ML, robotics, and scalable system development. Passionate about building intelligent platforms with Python, ROS, and Generative AI. 🚀"
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/anirbanmaity",
  linkedin: "https://www.linkedin.com/in/ani-psu",
  gmail: "anirbanmaity218@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK | AI/ML | ROBOTICS",
  skills: [
    emoji("⚡ Build AI/ML models using Scikit-learn, Transformers, LangChain"),
    emoji("⚡ Develop scalable web systems with Flask, MySQL, Docker"),
    emoji("⚡ Program intelligent simulations and motion planning in ROS/Gazebo"),
    emoji("⚡ Engineer LLM-based generative systems using OpenAI APIs")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Penn State University",
      logo: require("./assets/images/psu.png"),
      subHeader: "B.S. in Computer Science — Minor in Computer Engineering",
      duration: "Expected Dec. 2025",
      desc: "Focused on applied ML, robotics, and systems engineering.",
      descBullets: [
        "GPA: 3.2",
        "Key courses in OS, AI, LLMs, and distributed systems"
      ]
    }
  ]
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI & Robotics Research Intern",
      company: "NIT Rourkela",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2025 – Present",
      desc: "Developed 2D hospital simulations comparing PRM and RRT algorithms. Reduced path length by 15% and modeled real-world constraints."
    },
    {
      role: "Research Assistant — Generative AI Systems",
      company: "Penn State University",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "May 2025 – Present",
      desc: "Built modular LLM-based systems using LangChain and OpenAI APIs. Conducted extensive latency and bias testing for health/education use cases."
    },
    {
      role: "Full Stack Engineer (Capstone)",
      company: "Penn State College of Engineering",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2025 – May 2025",
      desc: "Built Threshold dashboard for real-time physiological monitoring using Google Pixel Watch and Mantis X3. Ensured HIPAA-compliant data handling."
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Key Projects",
  subtitle: "Projects combining ML, Systems, and Simulation",
  projects: [
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "Diabetes Detection Platform",
      projectDesc: "Built ACT-R + Random Forest hybrid system with fairness checks and interpretability for medical diagnosis.",
      footerLink: [
        { name: "View Code", url: "https://github.com/anirbanmaity/diabetes-detector" }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "Campus Enrollment Management System",
      projectDesc: "Java-based course enrollment platform with add/drop, validation, and admin controls.",
      footerLink: []
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to AI, Robotics, and Software Engineering roles.",
  number: "814-862-8781",
  email_address: "anirbanmaity218@gmail.com"
};

// Empty Required Configs
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

// Final Export
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  resumeSection,
  techStack,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  isHireable
};
