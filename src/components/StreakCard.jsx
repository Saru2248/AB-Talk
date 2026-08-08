import React from 'react';
import { Flame, Zap } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function StreakCard({
  day = 12,
  totalDays = 60,
  streak = 11,
  completedCount = 11,
  isFirstDay = false,
  isCompleted = false
}) {
  const percent = Math.min(Math.round((completedCount / totalDays) * 100), 100);

  return (
    <div className="glass-card-accent p-4 sm:p-5 rounded-2xl border border-orange-500/30 relative overflow-hidden shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-orange-400 font-mono">
            CURRENT PROGRESS
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1.5 mt-0.5">
            <span>DAY {day}</span>
            <span className="text-sm font-normal text-slate-400">OF {totalDays}</span>
          </div>
        </div>

        {/* Streak Badge */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            <span className="text-xs font-extrabold text-orange-400 font-mono">
              {streak} DAY STREAK
            </span>
          </div>
          <span className="text-[10px] text-slate-400 mt-1 font-mono">
            {isFirstDay ? "Day 1 starts now" : "Chain active"}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar current={completedCount} total={totalDays} showLabel={true} />

      {/* Motivational Subtext */}
      <p className="text-xs text-slate-300 mt-3 flex items-center gap-1.5 font-medium">
        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {isFirstDay
          ? "Today is Day 1. Your streak starts with one build."
          : isCompleted
          ? "Day 12 proof submitted! Excellent momentum."
          : "11 days in. Keep the chain alive."}
      </p>
    </div>
  );
}
