import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';
import { ServiceCard } from '../components/ServiceCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { AppointmentBooking } from '../components/AppointmentBooking';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#F8F5EF] border-b border-[#E8D8C6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Message & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2">
                <GoldBadge>
                  {siteConfig.brand.name}
                </GoldBadge>
              </div>

              <div className="space-y-3">
                <p className="font-serif italic text-xl sm:text-2xl text-[#B49A6A] font-medium tracking-wide">
                  {siteConfig.brand.tagline}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171615] leading-[1.18]">
                  Come back to yourself. <br className="hidden sm:inline" />
                  <span className="italic font-normal text-[#171615]">
                    Discover a life that feels like yours.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#706B65] leading-relaxed max-w-2xl">
                {siteConfig.brand.heroSubheadline}
              </p>

              <p className="text-sm sm:text-base text-[#706B65] leading-relaxed max-w-2xl">
                {siteConfig.brand.heroParagraph2}
              </p>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/book-session"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171615] hover:bg-[#B49A6A] text-white text-sm font-semibold rounded-sm transition-all duration-300 shadow-sm hover:shadow group border border-[#171615] hover:border-[#B49A6A]"
                >
                  <Calendar className="w-4 h-4 text-[#B49A6A] group-hover:text-white transition-colors" />
                  <span>Book a Confidential Session</span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#E8D8C6]/50 text-[#171615] text-sm font-semibold rounded-sm border border-[#171615]/20 hover:border-[#B49A6A] transition-all"
                >
                  <span>Get to Know Me</span>
                  <ArrowRight className="w-4 h-4 text-[#706B65]" />
                </Link>
              </div>

              {/* Supporting reassurance */}
              <div className="pt-4 flex items-center gap-2 text-xs font-medium text-[#706B65]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A]" />
                <span>{siteConfig.brand.heroPledge}</span>
              </div>
            </div>

            {/* Right Column: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                
                {/* Subtle Antique Gold Offset Framing Motif */}
                <div className="absolute -inset-2.5 rounded-2xl border border-[#B49A6A]/40 -rotate-1 transition-transform group-hover:rotate-0 duration-500" />
                <div className="absolute -inset-1 rounded-2xl border border-[#E8D8C6] rotate-1 transition-transform group-hover:rotate-0 duration-500" />
                
                {/* Main Portrait Container */}
                <div className="relative rounded-xl overflow-hidden bg-[#171615] shadow-xl border border-[#B49A6A]/30">
                  <img
                    src={siteConfig.brand.portraitPath}
                    alt="Anagha Sonde - Life Coach & Author of Welcome Back to Yourself"
                    className="w-full h-auto object-cover object-top aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Bottom Portrait Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171615] via-[#171615]/80 to-transparent p-5 text-white">
                    <p className="font-serif text-lg font-bold tracking-tight text-white">
                      Anagha Sonde
                    </p>
                    <p className="text-xs text-[#E8D8C6] tracking-wider uppercase font-medium">
                      Life Coach & Author • Achology Certified
                    </p>
                  </div>
                </div>

                {/* Subtle Decorative Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#F8F5EF] border border-[#B49A6A]/50 px-4 py-2 rounded-md shadow-md hidden sm:flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B49A6A]" />
                  <span className="text-xs font-serif italic text-[#171615]">
                    "Love life, Live life"
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS LIFE COACHING & 4 PRINCIPLES */}
      <section className="py-20 bg-white border-b border-[#E8D8C6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              Understanding The Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
              What is life coaching?
            </h2>
            <GoldLine />
            <p className="text-base sm:text-lg text-[#706B65] leading-relaxed">
              {siteConfig.philosophy.coachingDefinition}
            </p>
            <p className="text-sm text-[#706B65] leading-relaxed italic">
              {siteConfig.philosophy.coachingNature}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {siteConfig.philosophy.fourPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#F8F5EF] border border-[#E8D8C6] hover:border-[#B49A6A] transition-all hover:shadow-xs group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#B49A6A]/40 flex items-center justify-center mb-4 text-[#B49A6A] font-serif font-bold text-sm group-hover:bg-[#171615] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#171615] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#706B65] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Gentle Distinction Note */}
          <div className="mt-12 max-w-3xl mx-auto p-4 rounded-md bg-[#F8F5EF]/80 border border-[#E8D8C6] text-xs text-[#706B65] text-center leading-relaxed">
            <strong className="text-[#171615]">A gentle note of clarity:</strong> Life coaching supports self-discovery, clarity, and personal decisions. It is not psychotherapy, psychiatric treatment, or crisis mental health intervention.
          </div>
        </div>
      </section>

      {/* 3. ABOUT ANAGHA INTRODUCTION */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E8D8C6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
                The Person Behind Mind Matters
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
                Hello, I'm Anagha.
              </h2>
              
              <p className="text-base text-[#171615] font-serif italic">
                "I believe that sometimes, the answers we are looking for begin with being truly heard."
              </p>

              <p className="text-sm sm:text-base text-[#706B65] leading-relaxed">
                My approach to life coaching is rooted in listening, understanding, and helping people make sense of their own experiences. I believe every person has a unique story, and no two journeys are the same.
              </p>

              <p className="text-sm sm:text-base text-[#706B65] leading-relaxed">
                I don't believe in fitting people into ready-made formulas. I believe in creating space for honest conversations, asking meaningful questions, exploring what matters to you, and helping you discover a way forward that feels right for your life.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#171615] hover:bg-[#B49A6A] text-white text-sm font-semibold rounded-sm transition-all"
                >
                  <span>Read My Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/book-session"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#E8D8C6]/50 text-[#171615] text-sm font-semibold rounded-sm border border-[#E8D8C6] hover:border-[#B49A6A] transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#B49A6A]" />
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-xl bg-white border border-[#E8D8C6] shadow-sm relative space-y-6">
                <div className="text-4xl font-serif text-[#B49A6A] leading-none opacity-50">
                  “
                </div>
                <blockquote className="font-serif text-lg sm:text-xl text-[#171615] italic leading-relaxed">
                  Because a meaningful life is not about becoming someone else. It is about understanding yourself and learning to live in a way that feels true to you.
                </blockquote>
                <div className="pt-4 border-t border-[#E8D8C6] flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-[#171615]">Anagha Sonde</p>
                    <p className="text-xs text-[#706B65]">Life Coach & Author</p>
                  </div>
                  <span className="text-xs text-[#B49A6A] uppercase tracking-wider font-mono">
                    Mind Matters
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: AUTHOR OF "WELCOME BACK TO YOURSELF" */}
      <section className="py-24 bg-[#FAF7F2] border-b border-[#E8D8C6]/50 relative overflow-hidden" id="book-feature">
        {/* Decorative background embellishment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              Personal Memoir & Publication
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615] leading-snug">
              An Author. A Life Coach. <br />
              <span className="italic font-normal">A Believer in Finding Your Way Back to Yourself.</span>
            </h2>
            <GoldLine />
          </div>

          {/* Editorial 2-Column Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Book Cover Presentation (Left on desktop) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                
                {/* Floating ambient shadow & gold rim */}
                <div className="absolute -inset-3 bg-[#E8D8C6]/60 rounded-lg blur-md -rotate-1 transition-all group-hover:rotate-0" />
                
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#B49A6A]/50 bg-white p-2">
                  <img
                    src={siteConfig.book.coverImage}
                    alt="Welcome Back to Yourself by Anagha Sonde - Book Cover"
                    className="w-full h-auto object-contain rounded transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-[#706B65] bg-white px-3 py-1 rounded-full border border-[#E8D8C6]">
                    Official Memoir Cover
                  </span>
                </div>
              </div>
            </div>

            {/* Book Details, Description, and CTAs (Right on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
                  Memoir by Anagha Sonde
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171615] mt-1">
                  {siteConfig.book.title}
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#706B65] mt-1.5">
                  "{siteConfig.book.tagline}"
                </p>
              </div>

              {/* Book Excerpt Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#706B65] leading-relaxed">
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
                <p className="text-xs font-semibold uppercase tracking-wider text-[#171615] mb-2.5">
                  Core Reflections in the Book:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#706B65]">
                  {siteConfig.book.themes.map((theme, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A] mt-2 shrink-0" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final closing reminder */}
              <div className="p-4 rounded-md bg-white border-l-4 border-[#B49A6A] shadow-2xs">
                <p className="font-serif text-sm sm:text-base font-semibold text-[#171615] italic">
                  "{siteConfig.book.closingQuote}"
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#171615] hover:bg-[#B49A6A] text-white text-sm font-semibold rounded-sm transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#B49A6A]" />
                  <span>Discover the Book</span>
                </Link>

                <Link
                  to="/book#get-copy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#E8D8C6]/50 text-[#171615] text-sm font-semibold rounded-sm border border-[#E8D8C6] hover:border-[#B49A6A] transition-all"
                >
                  <span>Get Your Copy</span>
                  <ArrowRight className="w-4 h-4 text-[#706B65]" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bridge between the book and Mind Matters */}
          <div className="mt-16 pt-12 border-t border-[#E8D8C6] max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B49A6A] font-semibold">
              The Shared Intention
            </span>
            <p className="font-serif italic text-base sm:text-lg text-[#171615] leading-relaxed">
              "{siteConfig.book.bridgeToCoaching}"
            </p>
            <p className="text-xs uppercase tracking-widest text-[#706B65] font-medium pt-2">
              <strong>{siteConfig.brand.name}</strong> — {siteConfig.brand.tagline}
            </p>
          </div>

        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-20 bg-white border-b border-[#E8D8C6]/50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              Coaching Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
              Personalized Coaching Services
            </h2>
            <GoldLine />
            <p className="text-base text-[#706B65] leading-relaxed">
              Each session provides a safe, reflective space to explore your unique circumstances at your own pace.
            </p>
          </div>

          {/* 6 Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} featured={idx === 0} />
            ))}
          </div>

          {/* Central Session Details Pill */}
          <div className="mt-12 p-6 rounded-lg bg-[#F8F5EF] border border-[#E8D8C6] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-serif text-base font-semibold text-[#171615]">
                One-to-One Session Information
              </p>
              <p className="text-xs text-[#706B65] mt-0.5">
                Duration: {siteConfig.sessionDetails.durationDisplay} • Fee: {siteConfig.sessionDetails.feeDisplay} ({siteConfig.sessionDetails.feeNote})
              </p>
            </div>
            <Link
              to="/book-session"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171615] hover:bg-[#B49A6A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shrink-0"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. COACHING PHILOSOPHY (Charcoal Black Section) */}
      <section className="py-24 bg-[#171615] text-[#F8F5EF] border-y border-[#B49A6A]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              My Coaching Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              "{siteConfig.philosophy.heading}"
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B49A6A] to-transparent my-2" />
            </div>
            <p className="text-sm text-[#C4BEB6] max-w-xl mx-auto">
              Coaching is a collaborative conversation, not a lecture or a one-size-fits-all plan.
            </p>
          </div>

          {/* 7 Principles Presentation */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {siteConfig.philosophy.principles.map((principle, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#B49A6A]/60 transition-all flex items-start gap-4"
              >
                <span className="w-7 h-7 rounded-full bg-[#B49A6A]/20 border border-[#B49A6A]/50 flex items-center justify-center text-xs font-serif font-bold text-[#CBB48B] shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base text-[#F8F5EF]/90 font-medium leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>

          {/* Central Tagline Spotlight */}
          <div className="mt-16 text-center space-y-2">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#B49A6A] font-semibold">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#948E87]">
              Mind Matters by Anagha Sonde
            </p>
          </div>

        </div>
      </section>

      {/* 7. WHAT TO EXPECT FROM A SESSION (4-Step Visual Journey) */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E8D8C6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              The Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
              What to Expect From a Session
            </h2>
            <GoldLine />
            <p className="text-sm sm:text-base text-[#706B65]">
              A simple, respectful four-step journey designed around your comfort and individual pace.
            </p>
          </div>

          {/* 4 Steps Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.sessionJourney.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-lg bg-white border border-[#E8D8C6] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#B49A6A] bg-[#F8F5EF] px-2 py-0.5 rounded border border-[#E8D8C6]">
                      Step 0{step.step}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#706B65]">Phase {step.step}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#171615] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#706B65] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F8F5EF]">
                  <span className="w-full h-1 bg-gradient-to-r from-[#B49A6A] to-transparent rounded-full block" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#706B65] italic">
            *Each session is guided organically by what you choose to bring, and may not strictly follow the same pattern every time.
          </div>
        </div>
      </section>

      {/* 8. THE MIND MATTERS SECTION (Themes Grid) */}
      <section className="py-20 bg-white border-b border-[#E8D8C6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              Mind Matters Initiative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
              A space for the conversations that matter.
            </h2>
            <GoldLine />
            <p className="text-base text-[#706B65] leading-relaxed">
              Mind Matters exists to encourage self-awareness, emotional understanding, thoughtful choices, personal growth, and more meaningful ways of living.
            </p>
          </div>

          {/* Conversation Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.mindMattersThemes.map((theme, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#F8F5EF]/60 border border-[#E8D8C6] hover:border-[#B49A6A] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#B49A6A] mb-3" />
                <h3 className="font-serif text-base font-bold text-[#171615] mb-1.5">
                  {theme.title}
                </h3>
                <p className="text-xs text-[#706B65] leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/mind-matters"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171615] hover:text-[#B49A6A] transition-colors"
            >
              <span>Explore the Mind Matters Space</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E8D8C6]/50" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
              Clarity & Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
              Frequently Asked Questions
            </h2>
            <GoldLine />
            <p className="text-sm sm:text-base text-[#706B65]">
              Honest answers regarding confidentiality, session structure, format, and coaching scope.
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

      {/* 10. APPOINTMENT BOOKING SECTION */}
      <section className="py-24 bg-white" id="book-appointment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Reassurance & Session Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
                Begin Your Journey
              </span>
              
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
                  Let's Make Time for You.
                </h2>
                <p className="font-serif italic text-lg text-[#B49A6A]">
                  Book a Confidential Coaching Session
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#706B65] leading-relaxed">
                Sometimes, the first step towards change is simply making time for yourself.
              </p>

              <p className="text-sm text-[#706B65] leading-relaxed">
                Whether you are navigating uncertainty, looking for motivation, working through personal challenges, or seeking a deeper understanding of yourself, let's begin with a conversation.
              </p>

              <p className="text-sm text-[#706B65] leading-relaxed">
                Choose a session that works for you, and give yourself the space to pause, reflect, and move forward.
              </p>

              {/* Session Meta Box */}
              <div className="p-5 rounded-lg bg-[#F8F5EF] border border-[#E8D8C6] space-y-3 text-xs text-[#171615]">
                <div className="flex items-center justify-between border-b border-[#E8D8C6] pb-2">
                  <span className="text-[#706B65]">Duration:</span>
                  <strong className="font-semibold">{siteConfig.sessionDetails.durationDisplay}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#E8D8C6] pb-2">
                  <span className="text-[#706B65]">Session Fee:</span>
                  <strong className="font-semibold">{siteConfig.sessionDetails.feeDisplay}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#E8D8C6] pb-2">
                  <span className="text-[#706B65]">Formats:</span>
                  <strong className="font-semibold">Online Worldwide or In-person (Bengaluru)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#706B65]">Status:</span>
                  <span className="text-[#B49A6A] font-semibold">Appointment confirmed upon reservation</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-serif italic text-lg text-[#171615]">
                  "{siteConfig.brand.tagline}"
                </p>
                <p className="text-xs uppercase tracking-wider text-[#706B65] mt-1">
                  Mind Matters by Anagha Sonde
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Appointment Booking Interface */}
            <div className="lg:col-span-7">
              <AppointmentBooking />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
