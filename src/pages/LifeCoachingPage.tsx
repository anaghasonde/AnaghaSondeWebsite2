import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';

export const LifeCoachingPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Understanding The Journey</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            What is life coaching?
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            A reflective, collaborative partnership for intentional living.
          </p>
          <RedLine />
        </div>

        {/* Narrative & Explanation */}
        <div className="max-w-4xl mx-auto space-y-8 text-sm sm:text-base text-[#444444] leading-relaxed">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs space-y-4">
            <p className="text-base sm:text-lg text-[#111111] font-serif font-bold leading-relaxed">
              {siteConfig.philosophy.coachingDefinition}
            </p>
            <p>
              Sometimes, clarity comes from looking at a familiar situation differently. Sometimes, it comes from recognising a pattern, setting a boundary, finding your voice, or allowing yourself to choose differently.
            </p>
            <p className="font-serif italic text-[#111111] font-semibold">
              {siteConfig.philosophy.coachingNature}
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="pt-8">
            <h2 className="font-serif text-2xl font-bold text-[#111111] text-center mb-8">
              The Four Pillars of Life Coaching
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.philosophy.fourPrinciples.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#C62828] transition-all group hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center font-mono font-bold text-xs text-[#C62828] mb-4 group-hover:bg-[#C62828] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Life Coaching vs Therapy Distinction Table */}
          <div className="pt-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
                Ethical Boundaries
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#111111] mt-1">
                Understanding Coaching vs. Therapy
              </h2>
              <p className="text-xs text-[#666666] mt-2">
                Clarity on scope is essential for your wellbeing, safety, and mutual expectations.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
                
                {/* Coaching Column */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-[#111111]">
                    <CheckCircle2 className="w-5 h-5 text-[#C62828]" />
                    <h3 className="font-serif text-lg font-bold">What Life Coaching Is</h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#444444]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                      <span>Forward-focused exploration of personal values, choices, and goals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                      <span>Collaborative partnership helping you discover your own answers and clarity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                      <span>Focused on self-awareness, personal agency, decision-making, and boundaries.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                      <span>Confidential, non-judgmental space to reflect on life transitions and growth.</span>
                    </li>
                  </ul>
                </div>

                {/* What Coaching Is Not (Therapy / Clinical) */}
                <div className="p-6 sm:p-8 space-y-4 bg-red-50/20">
                  <div className="flex items-center gap-2 text-[#111111]">
                    <ShieldCheck className="w-5 h-5 text-[#8E1515]" />
                    <h3 className="font-serif text-lg font-bold">What Life Coaching Is Not</h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#555555]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E1515] mt-2 shrink-0" />
                      <span>Not clinical psychology, psychotherapy, or psychiatric medical treatment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E1515] mt-2 shrink-0" />
                      <span>Does not diagnose, treat, or manage clinical mental health disorders or trauma.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E1515] mt-2 shrink-0" />
                      <span>Not a crisis intervention service or emergency suicide prevention line.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E1515] mt-2 shrink-0" />
                      <span>Does not tell you what to do, prescribe medication, or offer legal/financial advice.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Next Steps CTA Box */}
          <div className="mt-12 p-8 rounded-2xl bg-[#111111] text-white border-2 border-[#C62828] text-center space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ready to begin your conversation?
            </h3>
            <p className="text-sm text-[#CCCCCC] max-w-lg mx-auto">
              You do not have to have everything sorted out before we meet. Bring your thoughts as they are.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Session</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white hover:text-[#111111] text-white text-sm font-bold rounded-sm transition-all"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
