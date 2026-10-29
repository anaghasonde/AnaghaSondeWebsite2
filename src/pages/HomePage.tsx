import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqAccordion } from '../components/FaqAccordion';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Message & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2">
                <BrandBadge>
                  {siteConfig.brand.name}
                </BrandBadge>
              </div>

              <div className="space-y-3">
                <p className="font-serif italic text-xl sm:text-2xl text-[#C62828] font-semibold tracking-wide">
                  {siteConfig.brand.tagline}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.18]">
                  Come back to yourself. <br className="hidden sm:inline" />
                  <span className="italic font-normal text-[#111111]">
                    Discover a life that feels like yours.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-2xl">
                {siteConfig.brand.heroSubheadline}
              </p>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl">
                {siteConfig.brand.heroParagraph2}
              </p>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/book-session"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all duration-300 shadow-sm hover:shadow-md group border border-[#C62828] hover:border-[#8E1515]"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book a Free Clarity Call</span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border-2 border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all"
                >
                  <span>Get to Know Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Supporting reassurance */}
              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#555555]">
                <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                <span>{siteConfig.brand.heroPledge}</span>
              </div>
            </div>

            {/* Right Column: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                
                {/* Modern Red & Black Offset Framing Motif */}
                <div className="absolute -inset-2.5 rounded-2xl border-2 border-[#C62828]/40 -rotate-1 transition-transform group-hover:rotate-0 duration-500" />
                <div className="absolute -inset-1 rounded-2xl border border-[#111111]/30 rotate-1 transition-transform group-hover:rotate-0 duration-500" />
                
                {/* Main Portrait Container */}
                <div className="relative rounded-xl overflow-hidden bg-[#111111] shadow-2xl border-2 border-[#111111]">
                  <img
                    src={siteConfig.brand.portraitPath}
                    alt="Anagha Sonde - Life Coach & Author of Welcome Back to Yourself"
                    className="w-full h-auto object-cover object-top aspect-[3/4] transform transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Bottom Portrait Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111] via-[#111111]/85 to-transparent p-5 text-white">
                    <p className="font-serif text-lg font-bold tracking-tight text-white">
                      Anagha Sonde
                    </p>
                    <p className="text-xs text-[#E5E5E5] tracking-wider uppercase font-medium">
                      Life Coach & Author • Achology Certified
                    </p>
                  </div>
                </div>

                {/* Tagline Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-[#C62828] px-4 py-2 rounded-md shadow-lg hidden sm:flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C62828]" />
                  <span className="text-xs font-serif font-bold italic text-[#111111]">
                    "Love life, Live life"
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT ANAGHA */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                The Person Behind Mind Matters
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
                Hello, I'm Anagha Sonde.
              </h2>
              
              <p className="text-base text-[#111111] font-serif italic">
                "I believe that sometimes, the answers we are looking for begin with being truly heard."
              </p>

              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                My approach to life coaching is rooted in listening, understanding, and helping people make sense of their own experiences. I believe every person has a unique story, and no two journeys are the same.
              </p>

              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                I don't believe in fitting people into ready-made formulas. I believe in creating space for honest conversations, asking meaningful questions, exploring what matters to you, and helping you discover a way forward that feels right for your life.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#C62828] text-white text-sm font-bold rounded-sm transition-all"
                >
                  <span>Read My Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/book-session"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#C62828]" />
                  <span>Book a Free Clarity Call</span>
                </Link>
              </div>
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs relative space-y-6">
                <div className="text-5xl font-serif text-[#C62828] leading-none opacity-40">
                  “
                </div>
                <blockquote className="font-serif text-lg sm:text-xl text-[#111111] italic leading-relaxed">
                  Because a meaningful life is not about becoming someone else. It is about understanding yourself and learning to live in a way that feels true to you.
                </blockquote>
                <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#111111]">Anagha Sonde</p>
                    <p className="text-xs text-[#666666]">Life Coach & Author</p>
                  </div>
                  <span className="text-xs text-[#C62828] uppercase tracking-wider font-bold">
                    Mind Matters
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT IS LIFE COACHING & 4 PRINCIPLES */}
      <section className="py-20 bg-[#F5F5F5] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Understanding The Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              What Is Life Coaching?
            </h2>
            <RedLine />
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
              {siteConfig.philosophy.coachingDefinition}
            </p>
            <p className="text-sm text-[#555555] leading-relaxed italic">
              {siteConfig.philosophy.coachingNature}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {siteConfig.philosophy.fourPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#C62828] transition-all hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center mb-4 text-[#C62828] font-serif font-bold text-sm group-hover:bg-[#C62828] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Gentle Distinction Note */}
          <div className="mt-12 max-w-3xl mx-auto p-4 rounded-lg bg-white border border-[#E5E5E5] text-xs text-[#555555] text-center leading-relaxed">
            <strong className="text-[#111111]">A gentle note of clarity:</strong> Life coaching supports self-discovery, clarity, and personal decisions. It is not psychotherapy, psychiatric treatment, or crisis mental health intervention.
          </div>
        </div>
      </section>

      {/* 4. COACHING PHILOSOPHY (Black Section #111111) */}
      <section className="py-24 bg-[#111111] text-white border-y-2 border-[#C62828] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              My Coaching Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              "{siteConfig.philosophy.heading}"
            </h2>
            <div className="flex justify-center">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C62828] to-transparent my-2" />
            </div>
            <p className="text-sm text-[#CCCCCC] max-w-xl mx-auto">
              Coaching is a collaborative conversation, not a lecture or a one-size-fits-all plan.
            </p>
          </div>

          {/* 7 Principles Presentation */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {siteConfig.philosophy.principles.map((principle, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C62828] transition-all flex items-start gap-4"
              >
                <span className="w-7 h-7 rounded-full bg-[#C62828] flex items-center justify-center text-xs font-serif font-bold text-white shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>

          {/* Central Tagline Spotlight */}
          <div className="mt-16 text-center space-y-2">
            <p className="font-serif italic text-2xl sm:text-3xl text-white font-bold">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
              Mind Matters by Anagha Sonde
            </p>
          </div>

        </div>
      </section>

      {/* 5. WORDS THAT MATTER (TESTIMONIALS SECTION) */}
      <TestimonialsSection />

      {/* 6. MIND MATTERS INITIATIVE (Themes Grid) */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Mind Matters Initiative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              A space for the conversations that matter.
            </h2>
            <RedLine />
            <p className="text-base text-[#444444] leading-relaxed">
              Mind Matters exists to encourage self-awareness, emotional understanding, thoughtful choices, personal growth, and more meaningful ways of living.
            </p>
          </div>

          {/* Conversation Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.mindMattersThemes.map((theme, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#C62828] transition-all"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#C62828] mb-3" />
                <h3 className="font-serif text-base font-bold text-[#111111] mb-1.5">
                  {theme.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/mind-matters"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#C62828] transition-colors"
            >
              <span>Explore the Mind Matters Space</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#F5F5F5] border-b border-[#E5E5E5]" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Clarity & Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Frequently Asked Questions
            </h2>
            <RedLine />
            <p className="text-sm sm:text-base text-[#555555]">
              Honest answers regarding confidentiality, session structure, format, and coaching scope.
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

    </div>
  );
};
