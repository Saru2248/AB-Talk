import React from 'react';

export function Card({ children, className = '', accent = false }) {
  return (
    <div className={`p-5 rounded-2xl border transition-all ${
      accent
        ? 'glass-card-accent border-orange-500/30 shadow-xl'
        : 'glass-card border-[#222f44]'
    } ${className}`}>
      {children}
    </div>
  );
}
