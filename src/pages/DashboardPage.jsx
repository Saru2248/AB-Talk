import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Trophy, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { recentProofSubmissions, challengeDaysMap } from '../data/mockData';
import RecoveryBanner from '../components/RecoveryBanner';
import DayGrid from '../components/DayGrid';
import StreakCard from '../components/StreakCard';
import TaskCard from '../components/TaskCard';

export default function DashboardPage({ student = {}, proofs = {}, activeMode = 'normal' }) {
  const isFirstDay = activeMode === 'firstday';
  const isRecovery = activeMode === 'recovery';

  // Active day setup with safe fallbacks
  const activeDayNumber = isFirstDay ? 1 : (student.currentDay || 12);
  const currentTask = challengeDaysMap[activeDayNumber] || challengeDaysMap[12];
  const day12Proof = proofs[12] || {};

  const streakCount = isFirstDay ? 0 : (student.streak ?? 11);
  const completedDaysList = isFirstDay ? [] : (student.completedDays || [1,2,3,4,5,6,7,8,9,10,11]);
  const completedCount = completedDaysList.length;

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 pb-24 px-4 sm:px-6 max-w-5xl mx-auto pt-4">
      {/* ================= GREETING HEADER ================= */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">
            Good evening, {student.name || "Sarthak"}. 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
            {isFirstDay
              ? "Day 1 of 60 — Start your proof journey today."
              : isRecovery
              ? "Keep moving forward. Consistency is cumulative."
              : "Ready to ship something today?"}
          </p>
        </div>

        {/* Track Badge */}
        <span className="hidden sm:inline-flex text-xs font-mono bg-[#131926] border border-[#222f44] text-orange-400 px-3 py-1 rounded-full">
          {student.track || "Full Stack Development"}
        </span>
      </div>

      {/* ================= RECOVERY BANNER ================= */}
      {isRecovery && <RecoveryBanner />}

      {/* Desktop 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Main Left Column */}
        <div className="lg:col-span-8 space-y-5">
          {/* ================= CURRENT PROGRESS HERO CARD ================= */}
          <StreakCard
            day={activeDayNumber}
            totalDays={60}
            streak={streakCount}
            completedCount={completedCount}
            isFirstDay={isFirstDay}
            isCompleted={day12Proof.completed}
          />

          {/* ================= TODAY'S TASK (HIGHEST PRIORITY CARD) ================= */}
          <TaskCard
            task={currentTask}
            isCompleted={day12Proof.completed}
          />

          {/* ================= 60-DAY PROGRESS CALENDAR ================= */}
          <DayGrid
            currentDay={activeDayNumber}
            completedDays={completedDaysList}
            missedDays={isRecovery ? [11] : []}
            totalDays={60}
          />
        </div>

        {/* Sidebar Right Column (Desktop 4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          {/* ================= STUDENT STANDING ================= */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
              YOUR STANDING
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5">
              <div className="glass-card p-3.5 rounded-xl border border-[#222f44] flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400">
                    <Flame className="w-4 h-4 fill-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Consistency</p>
                    <p className="text-sm font-extrabold text-white font-mono">Top 18%</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-3.5 rounded-xl border border-[#222f44] flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Builds Shipped</p>
                    <p className="text-sm font-extrabold text-white font-mono">{completedCount}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-3.5 rounded-xl border border-[#222f44] flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Milestone</p>
                    <p className="text-sm font-extrabold text-emerald-400 font-mono">
                      {isFirstDay ? "Day 1" : "10-Day Streak ✓"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RECENT PROOF SUBMISSIONS ================= */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#222f44]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                RECENT PROOFS
              </h3>
              <span className="text-[11px] text-orange-400 font-mono">Verified</span>
            </div>

            <div className="space-y-2.5">
              {recentProofSubmissions.map((proof) => (
                <div
                  key={proof.day}
                  className="p-3 rounded-xl bg-[#192233] border border-[#222f44] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-orange-400 font-bold">Day {proof.day}</span>
                    <span className="text-slate-200 font-medium truncate max-w-[100px]">{proof.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-500/20">
                      <GithubIcon className="w-3 h-3" /> ✓
                    </span>
                    <span className="inline-flex items-center gap-1 text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-[10px] font-mono border border-blue-500/20">
                      <LinkedinIcon className="w-3 h-3" /> ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
