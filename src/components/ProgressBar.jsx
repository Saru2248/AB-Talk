import React from 'react';

export default function ProgressBar({ current = 0, total = 60, showLabel = true, height = 'h-2.5' }) {
  const percent = Math.min(Math.round((current / total) * 100), 100);

  return (
    <div className="w-full space-y-1.5">
      {showLabel && (
        <div className="flex justify-between text-xs font-mono text-slate-300">
          <span>{current} / {total} Days</span>
          <span className="text-orange-400 font-bold">{percent}%</span>
        </div>
      )}
      <div className={`w-full ${height} bg-[#090d14] rounded-full overflow-hidden p-0.5 border border-slate-800`}>
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
