import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
  icon: Icon
}) {
  const baseStyle = "px-4 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-slate-950 shadow-lg shadow-orange-500/25",
    secondary: "bg-[#192233] hover:bg-[#222f44] text-slate-200 border border-[#222f44]",
    emerald: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20",
    outline: "bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </button>
  );
}
