import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Lock, AlertTriangle, X } from 'lucide-react';

export default function DayGrid({
  currentDay = 12,
  completedDays = [1,2,3,4,5,6,7,8,9,10,11],
  missedDays = [],
  totalDays = 60
}) {
  const [lockedDayNotice, setLockedDayNotice] = useState(null);

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  const handleDayClick = (e, dayNum) => {
    const isCompleted = completedDays.includes(dayNum);
    const isCurrent = dayNum === currentDay;

    if (!isCompleted && !isCurrent) {
      e.preventDefault();
      setLockedDayNotice(dayNum);
    }
  };

  return (
    <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#222f44]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-orange-400" />
          60-DAY PROGRESS CALENDAR
        </h3>
        <span className="text-[11px] text-slate-400 font-mono">Day {currentDay} Active</span>
      </div>

      {/* Grid cells */}
      <div className="grid grid-cols-7 sm:grid-cols-10 gap-1.5">
        {days.map((d) => {
          const isCompleted = completedDays.includes(d);
          const isCurrent = d === currentDay;
          const isMissed = missedDays.includes(d);

          return (
            <Link
              key={d}
              to={`/day/${d}`}
              onClick={(e) => handleDayClick(e, d)}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all relative ${
                isCompleted
                  ? 'bg-orange-500/90 text-slate-950 shadow-sm hover:scale-105'
                  : isCurrent
                  ? 'bg-amber-400 text-slate-950 ring-2 ring-orange-400 font-extrabold scale-105 animate-pulse'
                  : isMissed
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-[#192233] text-slate-500 border border-slate-800 hover:border-slate-600 cursor-pointer'
              }`}
              title={`Day ${d}: ${isCompleted ? 'Completed' : isCurrent ? "Today's Challenge" : 'Locked'}`}
            >
              {d < 10 ? `0${d}` : d}
              {!isCompleted && !isCurrent && d > currentDay && (
                <Lock className="w-2.5 h-2.5 absolute top-1 right-1 text-slate-600 opacity-60" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400 pt-2 border-t border-slate-800 font-mono">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded bg-orange-500" /> Completed ({completedDays.length})
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded bg-amber-400" /> Today [{currentDay}]
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded bg-[#192233] border border-slate-700" /> Locked
        </span>
      </div>

      {/* Locked Notice Modal */}
      {lockedDayNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#131926] border border-[#222f44] p-5 rounded-2xl max-w-xs text-center shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Day {lockedDayNotice} is Locked</h4>
            <p className="text-xs text-slate-300 mt-1">
              Complete today's challenge (Day {currentDay}) first to maintain your streak and unlock future days.
            </p>
            <button
              onClick={() => setLockedDayNotice(null)}
              className="mt-4 w-full py-2 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-slate-950 text-xs transition-colors"
            >
              Back to Today's Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
