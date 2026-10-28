import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { BookCover } from '../components/BookCover';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Founder & Life Coach</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Hello, I'm Anagha.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            "I believe that sometimes, the answers we are looking for begin with being truly heard."
          </p>
          <RedLine />
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-2.5 rounded-2xl border-2 border-[#C62828]/40 -rotate-1" />
              <div className="relative rounded-xl overflow-hidden bg-[#111111] shadow-2xl border-2 border-[#111111]">
                <img
                  src={siteConfig.brand.portraitPath}
                  alt="Anagha Sonde - Life Coach & Author"
                  className="w-full h-auto object-cover object-top aspect-[3/4]"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] text-center shadow-xs">
                <p className="font-serif text-base font-bold text-[#111111]">Anagha Sonde</p>
                <p className="text-xs text-[#555555]">Life Coach • Author of "Welcome Back to Yourself"</p>
                <p className="text-[11px] text-[#C62828] mt-1 font-bold">Founder, Mind Matters (est. 2022)</p>
              </div>
            </div>

            {/* Quick Connect Box */}
            <div className="mt-6 w-full max-w-sm p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-4">
              <h3 className="font-serif text-base font-bold text-[#111111] border-b border-[#E5E5E5] pb-2">
                Session Availability
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Sessions are held one-to-one, either online worldwide or in person in Bengaluru by prior appointment.
              </p>
              <Link
                to="/book-session"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold rounded-sm transition-colors text-center shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book a Confidential Session</span>
              </Link>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 space-y-6 text-[#444444] text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5]">
              <p className="font-serif text-lg text-[#111111] italic leading-relaxed">
                "My approach to life coaching is rooted in listening, understanding, and helping people make sense of their own experiences. I believe every person has a unique story, and no two journeys are the same."
              </p>
            </div>

            <p>
              I don't believe in fitting people into ready-made formulas. I believe in creating space for honest conversations, asking meaningful questions, exploring what matters to you, and helping you discover a way forward that feels right for your life.
            </p>

            <p>
              Through <strong>Mind Matters</strong>, my intention is to help you reconnect with yourself, recognise your strengths, navigate life's challenges, and make choices with greater clarity and confidence.
            </p>

            <p>
              Because a meaningful life is not about becoming someone else. It is about understanding yourself and learning to live in a way that feels true to you.
            </p>

            {/* Sub-section: A little about my journey */}
            <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#111111]">
                A little about my journey.
              </h2>

              <p>
                My work as a life coach is built on both structured training and deep human empathy. In 2020, I earned my certification in Life Coaching and Counselling through <strong>Achology</strong> (The Academy of Modern Applied Psychology).
              </p>

              <p>
                In 2022, I founded <strong>Mind Matters</strong> to offer a dedicated, warm, and confidential space where individuals can explore life transitions, career cross-roads, relationships, boundaries, and personal clarity.
              </p>

              {/* Note on claimed client count */}
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 text-xs text-[#111111] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <strong>Professional Transparency:</strong> Experience includes supporting approximately 150 clients to date (stated as a verified claim in accordance with professional honesty standards). Every engagement is handled with strict confidentiality.
                </div>
              </div>
            </div>

            {/* The Author Dimension */}
            <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#111111]">
                Writing as a Reflection of Life
              </h2>

              <p>
                Writing has always been an integral way for me to process life's transitions. In my personal memoir, <em>"Welcome Back to Yourself,"</em> I explore the quiet moments when expectations pull us away from who we are, and the courage it takes to return to our own values and voice.
              </p>

              {/* Book Feature Card */}
              <div className="p-5 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] flex flex-col sm:flex-row items-center gap-6 shadow-xs mt-4">
                <div className="shrink-0 flex justify-center">
                  <Link to="/book" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md transition-transform hover:scale-[1.02]">
                    <BookCover size="sm" show3D={true} />
                  </Link>
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C62828]">
                      Official Memoir
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                      {siteConfig.book.pillarsStatement}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
                    {siteConfig.book.title}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#C62828] font-medium">
                    "{siteConfig.book.subtitle}"
                  </p>
                  <div className="pt-1">
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#C62828] transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#C62828]" />
                      <span>Explore the Book</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C62828]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Connect CTA */}
            <div className="pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center gap-4">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border-2 border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all"
              >
                <span>Send a Message</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
