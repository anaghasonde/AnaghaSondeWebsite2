import React from 'react';
import { siteConfig } from '../config/siteConfig';

export interface BookCoverProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  show3D?: boolean;
  className?: string;
  badge?: string;
  alt?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  size = 'md',
  show3D = true,
  className = '',
  badge,
  alt = 'Welcome Back to Yourself by Anagha Sonde - Official Book Cover',
}) => {
  const sizeClasses = {
    sm: 'max-w-[130px] sm:max-w-[150px]',
    md: 'max-w-[200px] sm:max-w-[230px]',
    lg: 'max-w-[280px] sm:max-w-[320px]',
    xl: 'max-w-[320px] sm:max-w-[380px]',
  };

  const selectedSize = sizeClasses[size];

  if (!show3D) {
    return (
      <div className={`relative ${selectedSize} ${className}`}>
        <div className="overflow-hidden rounded-md border border-[#222222] shadow-xl bg-white">
          <img
            src={siteConfig.book.coverImage}
            alt={alt}
            width={640}
            height={1024}
            className="w-full h-auto aspect-[5/8] object-contain block select-none"
            loading="lazy"
          />
        </div>
        {badge && (
          <div className="mt-3 text-center">
            <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111] bg-white px-3 py-1 rounded-full border border-[#E5E5E5] font-bold shadow-2xs">
              {badge}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative group ${selectedSize} w-full ${className}`}>
      {/* Ambient background soft glow */}
      <div
        className="absolute -inset-2 bg-gradient-to-tr from-black/25 via-red-950/15 to-transparent rounded-r-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* 3D Book Presentation Box */}
      <div className="relative flex rounded-r-md transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[18px_24px_45px_-8px_rgba(0,0,0,0.5)] shadow-[12px_16px_32px_-6px_rgba(0,0,0,0.4)]">
        {/* Spine: 3D binding edge */}
        <div
          className="w-2.5 sm:w-3.5 bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#2a2a2a] rounded-l-xs shrink-0 flex flex-col justify-between py-4 border-r border-black/40 shadow-inner"
          aria-hidden="true"
        >
          <div className="h-5 w-full border-t border-b border-white/10" />
          <div className="h-5 w-full border-t border-b border-white/10" />
        </div>

        {/* Cover Art Wrapper */}
        <div className="relative flex-1 bg-white overflow-hidden rounded-r-xs border-y border-r border-[#222222]">
          {/* Subtle Spine hinge shadow along the left edge */}
          <div
            className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Subtle glossy sheen reflection */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-70 pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Official Cover Image preserving exact 5:8 aspect ratio and full artwork */}
          <img
            src={siteConfig.book.coverImage}
            alt={alt}
            width={640}
            height={1024}
            className="w-full h-auto aspect-[5/8] object-contain block bg-white select-none transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Fine paper edge highlight on right side */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[1.5px] bg-white/40 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Paper Page Layers: Right and Bottom edge depth */}
        <div
          className="absolute -right-[3px] top-1 bottom-1 w-[3px] bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 rounded-r-xs border-l border-neutral-300"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-[3px] left-2.5 right-1 h-[3px] bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-400 rounded-b-xs border-t border-neutral-400"
          aria-hidden="true"
        />
      </div>

      {/* Optional Badge */}
      {badge && (
        <div className="mt-3.5 text-center">
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111] bg-white px-3 py-1 rounded-full border border-[#E5E5E5] font-bold shadow-2xs">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
