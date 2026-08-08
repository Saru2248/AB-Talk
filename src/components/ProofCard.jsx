import React from 'react';
import { Check, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ProofCard({
  type = 'github', // 'github' | 'linkedin'
  label,
  placeholder,
  value,
  onChange,
  onVerify,
  isVerifying = false,
  isVerified = false,
  error = ''
}) {
  const isGithub = type === 'github';

  return (
    <div className={`p-4 rounded-xl border transition-all ${
      isVerified
        ? 'bg-emerald-500/10 border-emerald-500/40'
        : 'bg-[#131926] border-[#222f44]'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
            isGithub
              ? 'bg-slate-800 border border-slate-700 text-white'
              : 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
          }`}>
            {isGithub ? <GithubIcon className="w-4 h-4" /> : <LinkedinIcon className="w-4 h-4" />}
          </div>
          <span className="text-xs font-bold text-white font-mono uppercase">{label}</span>
        </div>

        {isVerified ? (
          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 font-mono">
            <Check className="w-3.5 h-3.5" /> Submitted
          </span>
        ) : (
          <span className="text-[10px] text-slate-500 font-mono">○ Not Submitted</span>
        )}
      </div>

      <div className="space-y-2">
        <input
          type="url"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 font-mono"
        />
        {error && (
          <p className="text-[11px] text-rose-400 font-mono">{error}</p>
        )}

        <button
          type="button"
          onClick={onVerify}
          disabled={isVerifying}
          className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            isVerified
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : isGithub
              ? 'bg-[#192233] hover:bg-[#222f44] text-orange-400 border border-slate-700'
              : 'bg-[#192233] hover:bg-[#222f44] text-blue-400 border border-slate-700'
          }`}
        >
          {isVerifying ? (
            <span className="flex items-center gap-1 font-mono">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> VERIFYING...
            </span>
          ) : isVerified ? (
            '✓ VERIFIED'
          ) : (
            `VERIFY ${isGithub ? 'GITHUB' : 'LINKEDIN'}`
          )}
        </button>
      </div>
    </div>
  );
}
