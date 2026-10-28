import React from 'react';
import { Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

import { RedLine, BrandBadge } from './GoldMotif';

export const TestimonialsSection: React.FC = () => {
  const { heading, subheadline, supportingText, notice, items } = siteConfig.testimonialsSection;

  return (
    <section className="py-24 bg-[#F5F5F5] border-b border-[#E5E5E5]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <BrandBadge>Client Experiences</BrandBadge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            {heading}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-medium">
            "{subheadline}"
          </p>
          <RedLine />
          <p className="text-sm sm:text-base text-[#333333] leading-relaxed max-w-2xl mx-auto">
            {supportingText}
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl p-8 border border-[#E5E5E5] shadow-xs hover:border-[#C62828]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Quotation Icon & Theme Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#C62828] group-hover:bg-[#C62828] group-hover:text-white transition-colors duration-300">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C62828] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    {item.theme}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="font-serif text-base sm:text-lg text-[#111111] italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer: Attribution & Context */}
              <div className="pt-5 border-t border-[#F5F5F5] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-sm text-[#111111]">
                      {item.attribution}
                    </p>
                    <p className="text-xs text-[#666666]">
                      {item.context}
                    </p>
                  </div>
                </div>

                {/* Subtle Development Placeholder Label */}
                {item.isPlaceholder && (
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#666666] bg-[#F5F5F5] px-2 py-0.5 rounded border border-[#E5E5E5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
                      Development Placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Development & Privacy Transparency Note */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-lg bg-white border border-[#E5E5E5] text-center text-xs text-[#666666] leading-relaxed">
          <strong className="text-[#111111]">Ethical Integrity Note:</strong> {notice}
        </div>

      </div>
    </section>
  );
};
