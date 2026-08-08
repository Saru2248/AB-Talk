export const initialStudentData = {
  name: "Sarthak",
  handle: "@sarthak_dev",
  college: "VJT Institute of Tech, Mumbai",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  track: "Full Stack Development",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  completionPercent: 20, // 12 of 60 = 20%
  topPercentile: 18,
  buildsShipped: 12,
  joinedDate: "July 27, 2026",
  proofsSubmitted: {
    github: 12,
    linkedin: 12
  }
};

export const tracksData = [
  {
    id: "fullstack",
    name: "Full Stack Development",
    icon: "Layers",
    description: "Build practical web products from scratch to deployment.",
    dailyEffort: "60–90 min/day",
    skills: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    popular: true,
    studentsCount: "1,240 enrolled"
  },
  {
    id: "datascience",
    name: "Data Science & Analytics",
    icon: "BarChart3",
    description: "Analyze real datasets, build visual insights & prediction models.",
    dailyEffort: "60–90 min/day",
    skills: ["Python", "Pandas", "NumPy", "SQL"],
    popular: false,
    studentsCount: "480 enrolled"
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    icon: "Cpu",
    description: "Fine-tune models, implement RAG systems & LLM wrappers.",
    dailyEffort: "75–90 min/day",
    skills: ["PyTorch", "OpenAI API", "LangChain", "Vector DB"],
    popular: true,
    studentsCount: "610 enrolled"
  },
  {
    id: "devops",
    name: "Cloud & DevOps",
    icon: "Cloud",
    description: "Containerize apps, build CI/CD pipelines & deploy on AWS.",
    dailyEffort: "60–90 min/day",
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
    popular: false,
    studentsCount: "320 enrolled"
  },
  {
    id: "dsa",
    name: "Data Structures & Algo",
    icon: "Code2",
    description: "Master 60 essential pattern problems with production code.",
    dailyEffort: "60 min/day",
    skills: ["Arrays & Graphs", "Dynamic Prog", "System Design"],
    popular: false,
    studentsCount: "790 enrolled"
  }
];

export const challengeDaysMap = {
  12: {
    day: 12,
    title: "Build an Issue Tracker",
    subtitle: "Turn today's requirements into a small working product.",
    difficulty: "Intermediate",
    estimatedTime: "60–90 min",
    skills: ["React", "API", "Database"],
    description: "Build a lightweight issue tracker where users can create, view, update, and close issues.",
    mustHave: [
      "Create an issue with title & detailed description",
      "Assign status: Open, In Progress, or Closed",
      "Update issue properties and edit status",
      "Close an issue with timestamp log"
    ],
    bonus: [
      "Add status filtering and instant search bar",
      "Add priority badge tags (High, Medium, Low)",
      "Persist issues in localStorage or mock API"
    ],
    suggestedStack: ["React", "Node.js", "Express", "MongoDB / PostgreSQL"],
    stackNote: "Suggested — use any stack you're comfortable with."
  },
  11: {
    day: 11,
    title: "Interactive Kanban Board",
    difficulty: "Intermediate",
    estimatedTime: "60 min",
    skills: ["React", "Drag & Drop", "CSS"],
    githubSubmitted: true,
    linkedinSubmitted: true,
    submittedAt: "Yesterday at 11:42 PM"
  },
  10: {
    day: 10,
    title: "REST API Rate Limiter",
    difficulty: "Intermediate",
    estimatedTime: "45 min",
    skills: ["Node.js", "Redis", "Middleware"],
    githubSubmitted: true,
    linkedinSubmitted: true,
    submittedAt: "2 days ago"
  },
  9: {
    day: 9,
    title: "JWT Authentication Flow",
    difficulty: "Intermediate",
    estimatedTime: "60 min",
    skills: ["Express", "JWT", "Security"],
    githubSubmitted: true,
    linkedinSubmitted: true,
    submittedAt: "3 days ago"
  },
  13: {
    day: 13,
    title: "Personal Expense Tracker",
    subtitle: "Track income, expenses, and monthly budget visualizer.",
    difficulty: "Intermediate",
    estimatedTime: "60–90 min",
    skills: ["React", "Chart.js / SVG", "State"],
    description: "Build a sleek expense manager with category breakdown and monthly limit alerts."
  },
  1: {
    day: 1,
    title: "Developer Portfolio Hero Section",
    subtitle: "Kickstart your 60-day journey with your personal developer landing page.",
    difficulty: "Beginner",
    estimatedTime: "45 min",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Build a simple, responsive developer landing page featuring your bio, tech stack, and GitHub link.",
    mustHave: [
      "Responsive header with your photo or avatar",
      "Short headline stating your focus area",
      "Links to your GitHub and LinkedIn profiles"
    ],
    bonus: [
      "Add a smooth dark mode toggle",
      "Add subtle hover effects on project cards"
    ],
    suggestedStack: ["HTML5", "CSS3 / Tailwind", "Vanilla JS"],
    stackNote: "Suggested — keep it lightweight and clean."
  }
};

export const recentProofSubmissions = [
  {
    day: 11,
    title: "Interactive Kanban Board",
    githubUrl: "https://github.com/sarthak/kanban-board-app",
    linkedinUrl: "https://linkedin.com/posts/sarthak-dev-day11-abtalks",
    date: "Aug 7, 2026",
    status: "Verified"
  },
  {
    day: 10,
    title: "REST API Rate Limiter",
    githubUrl: "https://github.com/sarthak/express-rate-limiter",
    linkedinUrl: "https://linkedin.com/posts/sarthak-dev-day10-abtalks",
    date: "Aug 6, 2026",
    status: "Verified"
  },
  {
    day: 9,
    title: "JWT Authentication Flow",
    githubUrl: "https://github.com/sarthak/jwt-auth-express",
    linkedinUrl: "https://linkedin.com/posts/sarthak-dev-day9-abtalks",
    date: "Aug 5, 2026",
    status: "Verified"
  }
];

export const landingStats = [
  { value: "2,400+", label: "Active Students", note: "Across 140+ Indian Colleges" },
  { value: "48,000+", label: "Builds Submitted", note: "Public Proof of Work" },
  { value: "60 Days", label: "Relentless Consistency", note: "Zero Excuses Allowed" }
];
