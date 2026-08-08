import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, LayoutDashboard, UserCheck, Code2 } from 'lucide-react';

export default function BottomNav({ onOpenProfile }) {
  const location = useLocation();

  const navItems = [
    {
      label: 'Home',
      path: '/',
      icon: Home,
      isActive: location.pathname === '/'
    },
    {
      label: 'Challenge',
      path: '/day/12',
      icon: Code2,
      isActive: location.pathname.startsWith('/day')
    },
    {
      label: 'Progress',
      path: '/dashboard',
      icon: LayoutDashboard,
      isActive: location.pathname === '/dashboard'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#090d14]/95 backdrop-blur-lg border-t border-[#1e293b] px-4 py-2 flex items-center justify-around shadow-2xl max-w-md mx-auto sm:max-w-none">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 ${
              item.isActive
                ? 'text-orange-400 font-semibold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1.5 rounded-lg transition-colors ${item.isActive ? 'bg-orange-500/15' : 'bg-transparent'}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-[11px] tracking-tight">{item.label}</span>
          </Link>
        );
      })}

      {/* Profile Button */}
      <button
        onClick={onOpenProfile}
        className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-slate-400 hover:text-slate-200 transition-all duration-200"
      >
        <div className="p-1.5 rounded-lg bg-transparent hover:bg-slate-800">
          <UserCheck className="w-5 h-5" />
        </div>
        <span className="text-[11px] tracking-tight">Profile</span>
      </button>
    </div>
  );
}
