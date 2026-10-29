import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { ServiceCard } from '../components/ServiceCard';
import { BookCover } from '../components/BookCover';

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Personalized Offerings</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            My Coaching Services
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            Thoughtful spaces tailored to where you are on your journey.
          </p>
          <RedLine />
          <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto mt-4 leading-relaxed">
            All services are provided in one-to-one, confidential sessions designed to foster self-awareness, clarity, and sustainable personal choices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard service={service} featured={index === 0} />
            </div>
          ))}
        </div>

        {/* What to Expect From a Session (4-Step Visual Journey) */}
        <div className="mt-20 pt-16 border-t border-[#E5E5E5]">
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

        {/* Companion Book Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-xs">
          <div className="shrink-0 flex justify-center">
            <Link to="/book" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md transition-transform hover:scale-[1.02]">
              <BookCover size="sm" show3D={true} />
            </Link>
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C62828] font-bold">
                Companion Reading
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                {siteConfig.book.pillarsStatement}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
              Explore Anagha's Memoir: {siteConfig.book.title}
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#C62828] font-medium">
              "{siteConfig.book.subtitle}"
            </p>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Before or alongside your coaching journey, immerse yourself in reflections on self-discovery, reinvention, and reconnecting with your inner compass.
            </p>
            <div className="pt-1">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#C62828] transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#C62828]" />
                <span>Learn More About the Book</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Help Me Choose Feature */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-[#111111] text-white text-center space-y-4 border-2 border-[#C62828]">
          <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
            Unsure Where To Start?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Not Sure Which Service Fits You Best?
          </h2>
          <p className="text-sm text-[#CCCCCC] leading-relaxed max-w-xl mx-auto">
            You don't need to fit yourself into a category. In our first conversation, we will explore whatever is most pressing in your life, and allow the coaching relationship to take shape naturally.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-session?service=not-sure-help-me-choose"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book a Free Clarity Call</span>
            </Link>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-white/20"
            >
              <span>Email Anagha</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
