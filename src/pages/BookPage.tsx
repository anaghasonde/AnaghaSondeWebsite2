import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { BookCover } from '../components/BookCover';

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
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Personal Memoir</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
            An Author. A Life Coach. <br />
            <span className="italic font-normal">A Believer in Finding Your Way Back to Yourself.</span>
          </h1>
          <div className="space-y-2">
            <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
              "{siteConfig.book.subtitle}"
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">
              {siteConfig.book.tagline}
            </p>
          </div>
          <RedLine />
        </div>

        {/* 2-Column Book Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Book Cover Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <BookCover size="xl" badge="Official Memoir Cover" />

              <div className="mt-6 p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] text-center shadow-xs w-full max-w-xs sm:max-w-sm space-y-1.5">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                  {siteConfig.book.pillarsStatement}
                </span>
                <p className="font-serif text-base font-bold text-[#111111]">{siteConfig.book.title}</p>
                <p className="text-xs text-[#555555]">By {siteConfig.book.author}</p>
                <p className="text-[11px] text-[#C62828] font-bold italic pt-1 border-t border-[#E5E5E5]">
                  "{siteConfig.book.callout}"
                </p>
              </div>
            </div>

            {/* Quick Purchase / Inquiry Card */}
            <div className="mt-8 w-full max-w-xs sm:max-w-sm p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-4" id="get-copy">
              <h3 className="font-serif text-base font-bold text-[#111111] border-b border-[#E5E5E5] pb-2">
                Available Editions
              </h3>
              
              <div className="space-y-3">
                {siteConfig.book.editions.map((edition, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-[#E5E5E5] bg-white flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-[#111111]">{edition.title}</p>
                      <p className="text-[11px] text-[#666666]">{edition.retailer}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-50 text-[#C62828] border border-red-200 font-bold text-[10px]">
                      Available
                    </span>
                  </div>
                ))}
              </div>

              {/* Inquiry Form for Book Copy */}
              <div className="pt-3 border-t border-[#E5E5E5]">
                <p className="text-xs text-[#555555] mb-2 font-semibold">
                  Enquire or order an author copy:
                </p>

                {inquirySubmitted ? (
                  <div className="p-3 bg-red-50 rounded border border-red-200 text-xs text-[#C62828] font-semibold text-center">
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
                      className="w-full px-3 py-1.5 text-xs border border-[#E5E5E5] rounded bg-white focus:outline-none focus:border-[#C62828]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-[#E5E5E5] rounded bg-white focus:outline-none focus:border-[#C62828]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Request Book Information</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Excerpt, Themes */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#444444] leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                About the Memoir
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#444444]">
                {siteConfig.book.synopsis.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 rounded-xl bg-[#F5F5F5] border-l-4 border-[#C62828] shadow-2xs">
              <p className="font-serif text-base sm:text-lg font-bold text-[#111111] italic leading-relaxed">
                "{siteConfig.book.closingQuote}"
              </p>
            </div>

            {/* Themes Highlight */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                Core Reflections in the Book
              </h3>
              <p className="text-xs text-[#555555]">
                The book is written as a personal memoir and an invitation to reflect, rather than a rigid self-help manual:
              </p>
              <ul className="space-y-3 text-sm text-[#555555]">
                {siteConfig.book.themes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C62828] mt-2 shrink-0" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connection to Mind Matters (Black Section) */}
            <div className="p-6 rounded-2xl bg-[#111111] text-white space-y-3 border-2 border-[#C62828]">
              <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
                The Connection to Mind Matters
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#E5E5E5] leading-relaxed">
                "{siteConfig.book.bridgeToCoaching}"
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#AAAAAA]">
                <span>Mind Matters by Anagha Sonde</span>
                <span className="text-white font-bold">Love life, Live life</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Free Clarity Call</span>
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border-2 border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all"
              >
                <span>Email the Author</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
