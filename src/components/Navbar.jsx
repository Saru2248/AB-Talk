import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Flame, User, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode, onOpenProfile }) {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: "Day 11 Proof Verified!", time: "14h ago", unread: true },
    { id: 2, title: "🔥 11-Day Streak Badge Unlocked!", time: "1d ago", unread: false },
    { id: 3, title: "New Track Challenge Updated", time: "2d ago", unread: false }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090d14]/90 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                AB<span className="text-orange-500">TALKS</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                PROOF
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link
            to="/"
            className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-orange-400 font-semibold' : ''}`}
          >
            Landing
          </Link>
          <Link
            to="/dashboard"
            className={`hover:text-white transition-colors ${location.pathname === '/dashboard' ? 'text-orange-400 font-semibold' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/day/12"
            className={`hover:text-white transition-colors ${location.pathname.startsWith('/day') ? 'text-orange-400 font-semibold' : ''}`}
          >
            Today's Challenge (Day 12)
          </Link>
        </nav>

        {/* Right Action Icons & Tester Mode Switcher */}
        <div className="flex items-center gap-2.5">
          {/* Subtle State Selector Pill (For instant UX edge-state testing) */}
          <div className="hidden sm:flex items-center bg-[#131926] border border-[#222f44] rounded-full px-2 py-1 text-xs">
            <span className="text-slate-400 mr-1 text-[11px]">State:</span>
            <select
              value={activeMode}
              onChange={(e) => setActiveMode(e.target.value)}
              className="bg-transparent text-orange-400 font-semibold cursor-pointer outline-none text-xs"
            >
              <option value="normal" className="bg-[#131926] text-slate-200">Standard (Day 12 Active)</option>
              <option value="recovery" className="bg-[#131926] text-slate-200">Missed Day (Recovery Mode)</option>
              <option value="firstday" className="bg-[#131926] text-slate-200">Day 1 (First Day State)</option>
            </select>
          </div>

          {/* Streak Chip */}
          <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full text-xs font-semibold text-orange-400">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
            <span>{activeMode === 'firstday' ? '0' : '11'}</span>
          </div>

          {/* Notification Icon */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-9 h-9 rounded-full bg-[#131926] border border-[#222f44] flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-[#090d14]" />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-[#131926] border border-[#222f44] rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#222f44]">
                  <span className="font-semibold text-xs text-white">Notifications</span>
                  <span className="text-[10px] text-orange-400 cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="space-y-2">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-2 rounded-lg bg-[#192233] hover:bg-[#222f44] transition-colors text-xs flex gap-2 items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-slate-200 font-medium">{n.title}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar */}
          <button
            onClick={onOpenProfile}
            className="relative group p-0.5 rounded-full ring-2 ring-orange-500/30 hover:ring-orange-500 transition-all cursor-pointer"
            title="View Student Profile"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Sarthak Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#090d14]" />
          </button>
        </div>
      </div>
    </header>
  );
}
