import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { ServiceCard } from '../components/ServiceCard';

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

        {/* Pricing & Duration Bar */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Session Duration</span>
              <p className="font-serif text-xl font-bold text-[#111111]">60 Minutes</p>
              <p className="text-[11px] text-[#777777]">Dedicated, unhurried time for reflection</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Session Fee</span>
              <p className="font-serif text-xl font-bold text-[#C62828]">{siteConfig.sessionDetails.feeDisplay}</p>
              <p className="text-[11px] text-[#777777]">{siteConfig.sessionDetails.feeNote}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Session Formats</span>
              <p className="font-serif text-base font-bold text-[#111111]">Online & Bengaluru</p>
              <p className="text-[11px] text-[#777777]">Online worldwide or in-person by reservation</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard service={service} featured={index === 0} />
            </div>
          ))}
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
              <span>Book An Exploration Session</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-white/20"
            >
              <span>Enquire First</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
