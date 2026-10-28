import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Send } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';

export const BookPage: React.FC = () => {
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <GoldBadge>Personal Memoir</GoldBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171615] leading-tight">
            An Author. A Life Coach. <br />
            <span className="italic font-normal">A Believer in Finding Your Way Back to Yourself.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#B49A6A]">
            "{siteConfig.book.tagline}"
          </p>
          <GoldLine />
        </div>

        {/* 2-Column Book Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Book Cover Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <div className="absolute -inset-3 bg-[#E8D8C6]/70 rounded-xl blur-md -rotate-1" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#B49A6A]/50 bg-white p-2">
                <img
                  src={siteConfig.book.coverImage}
                  alt="Welcome Back to Yourself by Anagha Sonde"
                  className="w-full h-auto object-contain rounded"
                />
              </div>

              <div className="mt-4 p-4 rounded-lg bg-white border border-[#E8D8C6] text-center shadow-xs">
                <p className="font-serif text-base font-bold text-[#171615]">Welcome Back to Yourself</p>
                <p className="text-xs text-[#706B65]">By Anagha Sonde</p>
                <p className="text-[11px] text-[#B49A6A] font-medium mt-1">Personal Memoir • Self-Discovery</p>
              </div>
            </div>

            {/* Quick Purchase / Inquiry Card */}
            <div className="mt-8 w-full max-w-xs sm:max-w-sm p-6 rounded-lg bg-white border border-[#E8D8C6] space-y-4" id="get-copy">
              <h3 className="font-serif text-base font-bold text-[#171615] border-b border-[#E8D8C6] pb-2">
                Available Editions
              </h3>
              
              <div className="space-y-3">
                {siteConfig.book.editions.map((edition, idx) => (
                  <div key={idx} className="p-3 rounded border border-[#E8D8C6] bg-[#F8F5EF]/50 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-[#171615]">{edition.title}</p>
                      <p className="text-[11px] text-[#706B65]">{edition.retailer}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#E8D8C6] text-[#171615] font-medium text-[10px]">
                      Available
                    </span>
                  </div>
                ))}
              </div>

              {/* Inquiry Form for Book Copy */}
              <div className="pt-3 border-t border-[#E8D8C6]">
                <p className="text-xs text-[#706B65] mb-2 font-medium">
                  Enquire or order a signed author copy:
                </p>

                {inquirySubmitted ? (
                  <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs text-emerald-800 text-center">
                    Thank you! Your book enquiry has been received. We will notify you with purchase details.
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-[#E8D8C6] rounded bg-white focus:outline-none focus:border-[#B49A6A]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-[#E8D8C6] rounded bg-white focus:outline-none focus:border-[#B49A6A]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#171615] hover:bg-[#B49A6A] text-white text-xs font-semibold rounded-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-[#B49A6A]" />
                      <span>Request Book Information</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Excerpt, Themes */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#706B65] leading-relaxed">
            
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#171615] mb-3">
                About the Memoir
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base">
                {siteConfig.book.synopsis.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 rounded-lg bg-[#FAF7F2] border-l-4 border-[#B49A6A] shadow-2xs">
              <p className="font-serif text-base sm:text-lg font-bold text-[#171615] italic leading-relaxed">
                "{siteConfig.book.closingQuote}"
              </p>
            </div>

            {/* Themes Highlight */}
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#171615]">
                Core Reflections in the Book
              </h3>
              <p className="text-xs text-[#706B65]">
                The book is written as a personal memoir and an invitation to reflect, rather than a rigid self-help manual:
              </p>
              <ul className="space-y-3 text-sm text-[#706B65]">
                {siteConfig.book.themes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#B49A6A] mt-2 shrink-0" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connection to Mind Matters */}
            <div className="p-6 rounded-xl bg-[#171615] text-[#F8F5EF] space-y-3 border border-[#B49A6A]/40">
              <span className="text-xs uppercase tracking-widest text-[#B49A6A] font-semibold">
                The Connection to Mind Matters
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#E8D8C6] leading-relaxed">
                "{siteConfig.book.bridgeToCoaching}"
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#948E87]">
                <span>Mind Matters by Anagha Sonde</span>
                <span className="text-[#B49A6A] font-semibold">Love life, Live life</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#171615] hover:bg-[#B49A6A] text-white text-sm font-semibold rounded-sm transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#B49A6A]" />
                <span>Book a One-to-One Session</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#E8D8C6]/40 text-[#171615] text-sm font-semibold rounded-sm border border-[#E8D8C6] hover:border-[#B49A6A] transition-all"
              >
                <span>Contact the Author</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
