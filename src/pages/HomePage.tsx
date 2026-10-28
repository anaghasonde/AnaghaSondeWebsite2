import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { BookCover } from '../components/BookCover';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { AppointmentBooking } from '../components/AppointmentBooking';

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
                  <span>Book a Confidential Session</span>
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

      {/* 2. WHAT IS LIFE COACHING & 4 PRINCIPLES */}
      <section className="py-20 bg-[#F5F5F5] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Understanding The Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              What is life coaching?
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

      {/* 3. ABOUT ANAGHA INTRODUCTION */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                The Person Behind Mind Matters
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
                Hello, I'm Anagha.
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
                  <span>Let's Connect</span>
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

      {/* 4. AUTHOR OF "WELCOME BACK TO YOURSELF" */}
      <section className="py-24 bg-[#F5F5F5] border-b border-[#E5E5E5] relative overflow-hidden" id="book-feature">
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
              <Link to="/book" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md transition-transform hover:scale-[1.01]">
                <BookCover size="lg" badge="Official Memoir Cover" />
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
              <div className="p-4 rounded-lg bg-white border-l-4 border-[#C62828] shadow-2xs">
                <p className="font-serif text-sm sm:text-base font-bold text-[#111111] italic">
                  "{siteConfig.book.closingQuote}"
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span>Discover the Book</span>
                </Link>

                <Link
                  to="/book#get-copy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5F5F5] text-[#111111] text-sm font-bold rounded-sm border border-[#111111] hover:border-[#C62828] hover:text-[#C62828] transition-all"
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
            <p className="text-xs uppercase tracking-widest text-[#555555] font-semibold pt-2">
              <strong>{siteConfig.brand.name}</strong> — <span className="text-[#C62828] font-bold">{siteConfig.brand.tagline}</span>
            </p>
          </div>

        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              Coaching Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Personalized Coaching Services
            </h2>
            <RedLine />
            <p className="text-base text-[#444444] leading-relaxed">
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
          <div className="mt-12 p-6 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-serif text-base font-bold text-[#111111]">
                One-to-One Session Information
              </p>
              <p className="text-xs text-[#555555] mt-0.5">
                Duration: {siteConfig.sessionDetails.durationDisplay} • Fee: <span className="font-bold text-[#C62828]">{siteConfig.sessionDetails.feeDisplay}</span> ({siteConfig.sessionDetails.feeNote})
              </p>
            </div>
            <Link
              to="/book-session"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. WHAT TO EXPECT FROM A SESSION (4-Step Visual Journey) */}
      <section className="py-20 bg-[#F5F5F5] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
              The Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              What to Expect From a Session
            </h2>
            <RedLine />
            <p className="text-sm sm:text-base text-[#444444]">
              A simple, respectful four-step journey designed around your comfort and individual pace.
            </p>
          </div>

          {/* 4 Steps Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.sessionJourney.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl bg-white border border-[#E5E5E5] shadow-xs flex flex-col justify-between hover:border-[#C62828] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#C62828] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      Step 0{step.step}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Phase {step.step}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#111111] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F5F5]">
                  <span className="w-full h-1 bg-gradient-to-r from-[#C62828] to-transparent rounded-full block" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#666666] italic">
            *Each session is guided organically by what you choose to bring, and may not strictly follow the same pattern every time.
          </div>
        </div>
      </section>

      {/* 7. COACHING PHILOSOPHY (Black Section #111111) */}
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

      {/* 8. TESTIMONIALS SECTION (NEW - Red, Black, and White Theme) */}
      <TestimonialsSection />

      {/* 9. THE MIND MATTERS SECTION (Themes Grid) */}
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

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
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

      {/* 11. APPOINTMENT BOOKING SECTION */}
      <section className="py-24 bg-white" id="book-appointment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Reassurance & Session Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                Begin Your Journey
              </span>
              
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
                  Let's Make Time for You.
                </h2>
                <p className="font-serif italic text-lg text-[#C62828] font-bold">
                  Book a Confidential Coaching Session
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                Sometimes, the first step towards change is simply making time for yourself.
              </p>

              <p className="text-sm text-[#555555] leading-relaxed">
                Whether you are navigating uncertainty, looking for motivation, working through personal challenges, or seeking a deeper understanding of yourself, let's begin with a conversation.
              </p>

              <p className="text-sm text-[#555555] leading-relaxed">
                Choose a session that works for you, and give yourself the space to pause, reflect, and move forward.
              </p>

              {/* Session Meta Box */}
              <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3 text-xs text-[#111111]">
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                  <span className="text-[#666666]">Duration:</span>
                  <strong className="font-bold">{siteConfig.sessionDetails.durationDisplay}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                  <span className="text-[#666666]">Session Fee:</span>
                  <strong className="font-bold text-[#C62828]">{siteConfig.sessionDetails.feeDisplay}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                  <span className="text-[#666666]">Formats:</span>
                  <strong className="font-bold">Online Worldwide or In-person (Bengaluru)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#666666]">Status:</span>
                  <span className="text-[#C62828] font-bold">Appointment confirmed upon reservation</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-serif italic text-xl text-[#111111] font-bold">
                  "{siteConfig.brand.tagline}"
                </p>
                <p className="text-xs uppercase tracking-wider text-[#666666] font-semibold mt-1">
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
