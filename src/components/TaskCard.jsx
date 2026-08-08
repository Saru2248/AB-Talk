import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export default function TaskCard({ task, isCompleted = false }) {
  if (!task) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-orange-400 font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          TODAY'S BUILD
        </h2>
        <span className="text-[11px] text-slate-400 font-mono">Target: {task.estimatedTime || '60–90 min'}</span>
      </div>

      <div className="glass-card p-5 rounded-2xl border border-orange-500/40 relative overflow-hidden shadow-2xl group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[11px] font-bold font-mono uppercase mb-1.5 border border-orange-500/30">
              DAY {task.day}
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">
              {task.title}
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700 shrink-0">
            {task.difficulty || 'Intermediate'}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          “{task.description}”
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-mono bg-[#090d14] px-2.5 py-1 rounded-lg border border-slate-800">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{task.estimatedTime}</span>
          </div>
          {(task.skills || []).map((s, i) => (
            <span key={i} className="text-xs bg-orange-500/10 text-orange-300 border border-orange-500/20 px-2.5 py-1 rounded-lg font-mono">
              {s}
            </span>
          ))}
        </div>

        {/* Primary Action Button navigating to /day/12 */}
        <Link
          to={`/day/${task.day}`}
          className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-slate-950 text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-transform active:scale-98"
        >
          <span>{isCompleted ? `Review Day ${task.day} Submission` : `Start Day ${task.day}`}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
