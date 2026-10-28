import React from 'react';

export const GoldLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center py-2 ${className}`}>
    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#B49A6A]/60 to-transparent" />
    <div className="absolute w-1.5 h-1.5 rotate-45 bg-[#B49A6A]" />
  </div>
);

export const GoldEmblem: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#B49A6A]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeOpacity="0.6" />
    <path d="m6.34 6.34 2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83" strokeOpacity="0.3" />
  </svg>
);

export const GoldBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs tracking-wider uppercase font-medium rounded-full bg-[#E8D8C6]/50 text-[#171615] border border-[#B49A6A]/30 ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A]" />
    {children}
  </span>
);
