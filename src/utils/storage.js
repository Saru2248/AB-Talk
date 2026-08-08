// Storage utility for ABTalks local persistence

const STORAGE_KEY = 'abtalks_state_v2';

export const initialMockState = {
  student: {
    name: "Sarthak",
    handle: "@sarthak_dev",
    college: "VJT Institute of Tech, Mumbai",
    track: "Full Stack Development",
    currentDay: 12,
    totalDays: 60,
    streak: 11,
    completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    missedDays: [],
    profileComplete: false,
    profileCompletionPercent: 20,
    github: "https://github.com/sarthak",
    linkedin: "https://linkedin.com/in/sarthak"
  },
  proofs: {
    12: {
      github: "",
      linkedin: "",
      githubVerified: false,
      linkedinVerified: false,
      completed: false,
      completedAt: null
    },
    11: {
      github: "https://github.com/sarthak/kanban-board-app",
      linkedin: "https://linkedin.com/posts/sarthak-dev-day11-abtalks",
      githubVerified: true,
      linkedinVerified: true,
      completed: true,
      completedAt: "Aug 7, 2026"
    },
    10: {
      github: "https://github.com/sarthak/express-rate-limiter",
      linkedin: "https://linkedin.com/posts/sarthak-dev-day10-abtalks",
      githubVerified: true,
      linkedinVerified: true,
      completed: true,
      completedAt: "Aug 6, 2026"
    },
    9: {
      github: "https://github.com/sarthak/jwt-auth-express",
      linkedin: "https://linkedin.com/posts/sarthak-dev-day9-abtalks",
      githubVerified: true,
      linkedinVerified: true,
      completed: true,
      completedAt: "Aug 5, 2026"
    }
  },
  activeMode: "normal" // 'normal' | 'recovery' | 'firstday'
};

export function getStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialMockState;
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to read localStorage:", err);
    return initialMockState;
  }
}

export function saveStoredState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
  }
}

export function validateGithubUrl(url) {
  if (!url) return { valid: false, error: 'GitHub URL is required.' };
  const trimmed = url.trim().toLowerCase();
  const pattern = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+/;
  if (!pattern.test(trimmed) && !trimmed.includes('github.com')) {
    return { valid: false, error: 'Please enter a valid GitHub repository URL (e.g. https://github.com/username/project)' };
  }
  return { valid: true, error: null };
}

export function validateLinkedinUrl(url) {
  if (!url) return { valid: false, error: 'LinkedIn URL is required.' };
  const trimmed = url.trim().toLowerCase();
  const pattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/(posts|feed|in)\//;
  if (!pattern.test(trimmed) && !trimmed.includes('linkedin.com')) {
    return { valid: false, error: 'Please enter a valid LinkedIn post URL (e.g. https://linkedin.com/posts/...)' };
  }
  return { valid: true, error: null };
}
