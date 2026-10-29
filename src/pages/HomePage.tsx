import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { BookCover } from '../components/BookCover';
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

      {/* 8. MY BOOK SECTION, SOCIAL MEDIA ICONS & BOOK A FREE CLARITY CALL */}
      <section className="py-24 bg-white border-b border-[#E5E5E5] relative overflow-hidden" id="my-book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Personal Memoir & Publication
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-snug">
              An Author. A Life Coach. <br />
              <span className="italic font-normal">A Believer in Finding Your Way Back to Yourself.</span>
            </h2>
            <RedLine />
          </div>

          {/* Editorial 2-Column Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Book Cover Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <Link to="/book" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md transition-transform hover:scale-[1.01]" aria-label="Explore the book Welcome Back to Yourself">
                <BookCover size="lg" show3D={true} badge="Official Memoir Cover" />
              </Link>
            </div>

            {/* Book Details, Description, and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                    Official Memoir by Anagha Sonde
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                    {siteConfig.book.pillarsStatement}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mt-1">
                  {siteConfig.book.title}
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#C62828] font-semibold mt-1">
                  "{siteConfig.book.subtitle}"
                </p>
                <p className="text-xs text-[#666666] mt-1">
                  {siteConfig.book.tagline}
                </p>
              </div>

              {/* Book Excerpt */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#444444] leading-relaxed">
                <p>
                  What happens when life takes you away from yourself?
                </p>
                <p>
                  When expectations become louder than your own voice, when rejection leaves you questioning your worth, or when uncertainty makes you wonder whether you are on the right path, it is easy to lose touch with the person you once knew yourself to be.
                </p>
                <p>
                  <strong>Welcome Back to Yourself</strong>, written by Anagha Sonde, is a personal memoir about reinvention, self-discovery, and the journey of finding your way back to yourself.
                </p>
              </div>

              {/* Themes Highlight */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                  Core Reflections in the Book:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#555555]">
                  {siteConfig.book.themes.map((theme, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final closing reminder */}
              <div className="p-4 rounded-lg bg-[#F5F5F5] border-l-4 border-[#C62828] shadow-2xs">
                <p className="font-serif text-sm sm:text-base font-bold text-[#111111] italic">
                  "{siteConfig.book.closingQuote}"
                </p>
              </div>

              {/* Book Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#C62828] text-white text-sm font-bold rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span>Discover the Book</span>
                </Link>

                <Link
                  to="/book#get-copy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
                >
                  <span>Get Your Copy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bridge between book and coaching */}
          <div className="mt-16 pt-12 border-t border-[#E5E5E5] max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
              The Shared Intention
            </span>
            <p className="font-serif italic text-base sm:text-lg text-[#111111] leading-relaxed">
              "{siteConfig.book.bridgeToCoaching}"
            </p>
            <p className="text-xs uppercase tracking-widest text-[#555555] font-semibold pt-1">
              <strong>{siteConfig.brand.name}</strong> — <span className="text-[#C62828] font-bold">{siteConfig.brand.tagline}</span>
            </p>
          </div>

          {/* SOCIAL MEDIA ICONS & BOOK A FREE CLARITY CALL BUTTON */}
          <div className="mt-16 pt-12 border-t border-[#E5E5E5] max-w-2xl mx-auto text-center space-y-8">
            
            {/* Heading: Let's Connect */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                Stay In Touch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Let's Connect
              </h3>
            </div>

            {/* Social Media Icons (3 Horizontally Spaced & Responsive) */}
            <div className="flex items-center justify-center gap-5 sm:gap-6">
              
              {/* Instagram */}
              <a
                href={siteConfig.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5F5F5] hover:bg-[#C62828] text-[#111111] hover:text-white border border-[#E5E5E5] hover:border-[#C62828] flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2"
                aria-label="Visit Anagha Sonde on Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5F5F5] hover:bg-[#C62828] text-[#111111] hover:text-white border border-[#E5E5E5] hover:border-[#C62828] flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2"
                aria-label="Connect with Anagha Sonde on LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5F5F5] hover:bg-[#C62828] text-[#111111] hover:text-white border border-[#E5E5E5] hover:border-[#C62828] flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2"
                aria-label="Watch Anagha Sonde on YouTube"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

            </div>

            {/* Book a Free Clarity Call button */}
            <div className="pt-2">
              <Link
                to="/book-session"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm sm:text-base font-bold rounded-sm transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2 border border-[#C62828] hover:border-[#8E1515] group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Free Clarity Call</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
