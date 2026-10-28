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
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-[#C62828] bg-white shadow-sm ring-1 ring-[#C62828]/20'
                : 'border-[#E5E5E5] bg-white hover:border-[#C62828]/50'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between text-left px-5 py-4.5 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={`font-serif text-base sm:text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-[#C62828]' : 'text-[#111111]'}`}>
                {faq.question}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-[#C62828] text-white rotate-180' : 'bg-[#F5F5F5] text-[#555555]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="px-5 pb-5 sm:px-6 pt-1 text-sm text-[#444444] leading-relaxed border-t border-[#F5F5F5]"
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
