import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function RecoveryBanner({ onDismiss }) {
  return (
    <div className="glass-card-accent p-4.5 rounded-2xl border border-amber-500/30 relative overflow-hidden my-4 shadow-xl">
      {/* Background subtle shine */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
        </div>

        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400 font-mono">
              RECOVERY MODE ACTIVE
            </span>
            <span className="text-[10px] text-slate-400 font-mono">No Penalty</span>
          </div>

          <h3 className="text-base font-bold text-white leading-tight">
            Missed yesterday? You're not starting over. You're continuing.
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            Real developers hit bumps. ABTalks measures total commitment over 60 days, not flawless streak perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Link
              to="/day/12"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-md shadow-amber-500/20"
            >
              <span>Resume Today's Challenge (Day 12)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/day/11"
              className="px-3.5 py-2 rounded-xl bg-[#131926] hover:bg-[#192233] border border-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Catch up on Day 11</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
