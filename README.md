# ABTalks — 60 Days of Proof, Not Promises

## Route Map

```
/
/dashboard
/day/12
```

---

## ⚡ Overview

**ABTalks** is a mobile-first, 60-day coding challenge platform designed for Indian college students. Students pick a track, complete daily build missions, and maintain consistency by submitting dual proof of work (GitHub commit + LinkedIn post).

### Key Features
1. **Mobile-First Design (Primary viewport: 390px)**
   - Custom dark developer theme (`#090d14`), electric amber accents (`#ff5500`), and emerald completion states (`#10b981`).
   - Sticky bottom navigation bar (`Home`, `Challenge`, `Progress`, `Profile`).
   - Touch-optimized 44px+ targets and zero horizontal scrollbar overflow.

2. **Core Routes & Views**
   - `/`: Mobile Hero with 60-Day journey visualization, illustrative social proof stats, 3-step how-it-works, philosophy grid, dual proof cards, selectable track paths, and strong closing CTAs.
   - `/dashboard`: Personal student greeting, current day progress card (20% complete, 11-day streak), priority **Today's Build** card (`Day 12: Build an Issue Tracker`), compact 60-day calendar progress grid, student standing metrics, and recent proof history.
   - `/day/12`: Full challenge day mission breakdown (Must Have requirements, Bonus challenges, flexible suggested stack note), dual GitHub & LinkedIn proof URL input fields with live verification states, submit button state transition to `DAY 12 COMPLETE!`, celebratory confetti, and Next Day Preview (`Tomorrow: Day 13 - Personal Expense Tracker`).

3. **Thoughtful Experience Features**
   - **Recovery Mode**: Encouraging missed-day banner (*“Missed yesterday? You're not starting over. You're continuing.”*) without toxic streak resets.
   - **First Day State**: Onboarding view for Day 1 students.
   - **State Switcher**: Interactive state selector pill in header for instant reviewer testing (`Standard Day 12 Active`, `Missed Day Recovery Mode`, `Day 1 First Day State`).

---

## 🛠️ Tech Stack & Running Locally

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Tokens
- **Icons**: Lucide React + Custom SVG Icons
- **Animation**: Canvas Confetti

### Start Development Server
```bash
npm install
npm run dev
```

### Build Production Bundle
```bash
npm run build
```
