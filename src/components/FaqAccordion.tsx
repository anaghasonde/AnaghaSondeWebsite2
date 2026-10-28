import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';


export const FaqAccordion: React.FC<{ defaultOpenIndex?: number }> = ({ defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {siteConfig.faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-lg border transition-all duration-200 ${
              isOpen
                ? 'border-[#B49A6A] bg-white shadow-sm'
                : 'border-[#E8D8C6] bg-white/70 hover:border-[#B49A6A]/60 hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between text-left px-5 py-4.5 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A] rounded-lg"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-serif text-base sm:text-lg font-medium text-[#171615] pr-4">
                {faq.question}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-[#171615] text-[#B49A6A] rotate-180' : 'bg-[#F8F5EF] text-[#706B65]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="px-5 pb-5 sm:px-6 pt-1 text-sm text-[#706B65] leading-relaxed border-t border-[#F8F5EF]"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
