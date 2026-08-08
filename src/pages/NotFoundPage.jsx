import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4 animate-bounce">
        <Compass className="w-8 h-8" />
      </div>

      <h1 className="text-4xl font-extrabold text-white font-mono">404</h1>
      <h2 className="text-lg font-bold text-slate-200 mt-1">Route Not Found</h2>
      <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
        The challenge page you're looking for doesn't exist or is outside the 60-day roadmap.
      </p>

      <div className="flex gap-3 mt-6">
        <Link
          to="/"
          className="px-4 py-2.5 rounded-xl bg-[#192233] border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Landing</span>
        </Link>
        <Link
          to="/dashboard"
          className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-orange-500/20 transition-transform active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
