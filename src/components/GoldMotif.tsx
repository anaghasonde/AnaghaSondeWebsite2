import React from 'react';

export const RedLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center py-2 ${className}`}>
    <div className="h-[2px] w-full max-w-md bg-gradient-to-r from-transparent via-[#C62828]/70 to-transparent" />
    <div className="absolute w-2 h-2 rotate-45 bg-[#C62828]" />
  </div>
);

// Alias for seamless backward-compatibility
export const GoldLine = RedLine;

export const BrandEmblem: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#C62828]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" strokeOpacity="0.3" stroke="#111111" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeOpacity="0.7" />
    <path d="m6.34 6.34 2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83" strokeOpacity="0.4" />
  </svg>
);

export const GoldEmblem = BrandEmblem;

export const BrandBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs tracking-wider uppercase font-semibold rounded-full bg-[#F5F5F5] text-[#111111] border border-[#C62828]/25 shadow-2xs ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
    {children}
  </span>
);

export const GoldBadge = BrandBadge;
