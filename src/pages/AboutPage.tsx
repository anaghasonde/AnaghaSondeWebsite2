import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <GoldBadge>Founder & Life Coach</GoldBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171615]">
            Hello, I'm Anagha.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#B49A6A]">
            "I believe that sometimes, the answers we are looking for begin with being truly heard."
          </p>
          <GoldLine />
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-2 rounded-2xl border border-[#B49A6A]/40 -rotate-1" />
              <div className="relative rounded-xl overflow-hidden bg-[#171615] shadow-xl border border-[#B49A6A]/30">
                <img
                  src={siteConfig.brand.portraitPath}
                  alt="Anagha Sonde - Life Coach & Author"
                  className="w-full h-auto object-cover object-top aspect-[4/5]"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 p-4 rounded-lg bg-white border border-[#E8D8C6] text-center shadow-xs">
                <p className="font-serif text-base font-bold text-[#171615]">Anagha Sonde</p>
                <p className="text-xs text-[#706B65]">Life Coach • Author of "Welcome Back to Yourself"</p>
                <p className="text-[11px] text-[#B49A6A] mt-1 font-medium">Founder, Mind Matters (est. 2022)</p>
              </div>
            </div>

            {/* Quick Connect Box */}
            <div className="mt-6 w-full max-w-sm p-6 rounded-lg bg-white border border-[#E8D8C6] space-y-4">
              <h3 className="font-serif text-base font-semibold text-[#171615] border-b border-[#E8D8C6] pb-2">
                Session Availability
              </h3>
              <p className="text-xs text-[#706B65] leading-relaxed">
                Sessions are held one-to-one, either online worldwide or in person in Bengaluru by prior appointment.
              </p>
              <Link
                to="/book-session"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171615] hover:bg-[#B49A6A] text-white text-xs font-semibold rounded-sm transition-colors text-center"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B49A6A]" />
                <span>Book a Confidential Session</span>
              </Link>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 space-y-6 text-[#706B65] text-sm sm:text-base leading-relaxed">
            
            <div className="p-5 rounded-lg bg-white border border-[#E8D8C6]">
              <p className="font-serif text-lg text-[#171615] italic">
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
            <div className="pt-6 border-t border-[#E8D8C6] space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171615]">
                A little about my journey.
              </h2>

              <p>
                My work as a life coach is built on both structured training and deep human empathy. In 2020, I earned my certification in Life Coaching and Counselling through <strong>Achology</strong> (The Academy of Modern Applied Psychology).
              </p>

              <p>
                In 2022, I founded <strong>Mind Matters</strong> to offer a dedicated, warm, and confidential space where individuals can explore life transitions, career cross-roads, relationships, boundaries, and personal clarity.
              </p>

              {/* Note on claimed client count */}
              <div className="p-4 rounded bg-[#E8D8C6]/40 border border-[#B49A6A]/30 text-xs text-[#171615] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <div>
                  <strong>Professional Transparency:</strong> Experience includes supporting approximately 150 clients to date (stated as a verified claim in accordance with professional honesty standards). Every engagement is handled with strict confidentiality.
                </div>
              </div>
            </div>

            {/* The Author Dimension */}
            <div className="pt-6 border-t border-[#E8D8C6] space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171615]">
                Writing as a Reflection of Life
              </h2>

              <p>
                Writing has always been an integral way for me to process life's transitions. In my personal memoir, <em>"Welcome Back to Yourself,"</em> I explore the quiet moments when expectations pull us away from who we are, and the courage it takes to return to our own values and voice.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171615] hover:text-[#B49A6A] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#B49A6A]" />
                  <span>Explore the Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Let's Connect CTA */}
            <div className="pt-8 border-t border-[#E8D8C6] flex flex-wrap items-center gap-4">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#171615] hover:bg-[#B49A6A] text-white text-sm font-semibold rounded-sm transition-all shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#E8D8C6]/40 text-[#171615] text-sm font-semibold rounded-sm border border-[#E8D8C6] hover:border-[#B49A6A] transition-all"
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
