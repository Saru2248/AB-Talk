  # ABTalks — AI Usage Log

This document records the AI-assisted development process used to design and build the ABTalks redesign.

The project was developed using AI-assisted design, implementation, debugging, and refinement.

---

## 1. Project Brief

ABTalks is a 60-day coding challenge platform for Indian college students.

The redesign focuses on three core routes:

- `/`
- `/dashboard`
- `/day/12`

The primary design constraint was a 390px mobile viewport.

The core product loop is:

**Build → Prove → Progress**

---

## 2. AI Tools Used

- AI coding assistant: [INSERT TOOL NAME]
- AI design / prototyping tool: [INSERT IF USED]
- Framework: React + Vite
- Styling: [Tailwind CSS / CSS / etc.]
- Icons: [Lucide / etc.]

---

## 3. Initial Product & Design Prompt

The first major prompt given to the AI was:

> [PASTE THE ORIGINAL ABTALKS DESIGN BRIEF OR YOUR ORIGINAL PROMPT HERE]

The prompt established:

- Mobile-first design
- 390px viewport
- Landing page
- Student dashboard
- Challenge Day page
- Mock data
- Edge cases
- Route requirements
- Student-focused UX

---

## 4. Design Direction Prompt

The AI was then instructed to establish a visual direction around:

> “Build for 60 days. Become impossible to ignore.”

The design direction focused on:

- Premium developer aesthetic
- Dark-first interface
- Strong typography
- Clear progress visualization
- Minimal visual clutter
- Mobile-first interaction
- Clear CTA hierarchy

---

## 5. Runtime Implementation Prompt

The design was then converted into a functioning runtime application.

The AI was instructed to:

- Implement React routing
- Create `/`
- Create `/dashboard`
- Create `/day/12`
- Add reusable components
- Add mock data
- Add localStorage persistence
- Add GitHub submission
- Add LinkedIn submission
- Add proof validation
- Add day completion state
- Add responsive behavior

Core interaction:

**BUILD → PROVE → COMPLETE → PROGRESS**

---

## 6. Functional Logic

The AI-assisted implementation included:

### Dashboard

- Current day
- Current streak
- Overall completion
- Today's task
- 60-day progress
- Achievements
- Recent proof

### Challenge Day

- Task description
- Requirements
- Suggested stack
- GitHub URL submission
- LinkedIn URL submission
- URL validation
- Proof status
- Completion state

### Persistence

Local storage is used to preserve:

- Submitted GitHub URL
- Submitted LinkedIn URL
- Proof status
- Completed days
- Progress
- Streak

No production authentication or database was required by the challenge.

---

## 7. Product Idea Added Beyond the Minimum

### Recovery Mode

A student missing one day should not feel like the entire challenge has failed.

Instead of aggressively showing:

> “STREAK LOST”

the interface uses:

> “Missed yesterday?  
> You're not starting over. You're continuing.”

The student can resume the challenge and optionally catch up.

This was introduced because the target users are college students who may have exams, assignments, placements, and other commitments.

The goal is to encourage recovery rather than abandonment.

---

## 8. AI-Assisted Refinement

During development, AI was also used to identify and improve:

- Mobile spacing
- Typography hierarchy
- CTA placement
- Component consistency
- Empty states
- First-day state
- Missed-day state
- Form validation
- Responsive behavior
- Mobile navigation
- Submission feedback
- Visual hierarchy

---

## 9. Testing & QA

The application was checked against the challenge requirements.

### Routes

- [x] `/`
- [x] `/dashboard`
- [x] `/day/12`

### Mobile

- [x] 390px viewport
- [x] No horizontal overflow
- [x] Touch-friendly controls
- [x] Mobile-first layout

### Challenge Flow

- [x] Read today's task
- [x] Enter GitHub proof
- [x] Enter LinkedIn proof
- [x] Validate URLs
- [x] Submit proof
- [x] Complete challenge day
- [x] Update progress
- [x] Persist state

### Edge Cases

- [x] First day
- [x] Missed day
- [x] Empty profile
- [x] Incomplete proof
- [x] Invalid URLs

---

## 10. Final Product Principle

The final experience is built around one simple loop:

**BUILD → PROVE → PROGRESS**

The interface should always answer:

> What do I need to build today?

> What proof do I need to submit?

> How far have I progressed?

---

## 11. Development Notes

AI was used as a development collaborator rather than only as a code generator.

The workflow generally followed:

**Prompt → Generate → Run → Inspect → Identify Issues → Refine Prompt → Implement → Test**

Human decisions were made around:

- Product direction
- UX priorities
- Feature selection
- Edge cases
- Visual direction
- Final acceptance criteria

---

## 12. Submission

Route Map:

```text
/
/dashboard
/day/12



Live Deployment:
https://ab-talk.vercel.app/


Repository:

https://github.com/Saru2248/AB-Talk.git
