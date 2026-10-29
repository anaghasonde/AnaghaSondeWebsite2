import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { AppointmentBooking } from '../components/AppointmentBooking';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedServiceId = searchParams.get('service') || undefined;

  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Introductory Conversation</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Let's Make Time for You.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            Book a Free Clarity Call
          </p>
          <RedLine />
          <p className="text-sm sm:text-base text-[#444444] max-w-2xl mx-auto mt-4 leading-relaxed">
            The free clarity call is an introductory conversation to understand your needs, explore where you are, and determine whether life coaching is appropriate for you.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Reassuring Intro, Session Info, What to Expect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Reassurance Card */}
            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
                The Sanctuary
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                Your Space to Pause
              </h2>
              <p className="text-sm text-[#444444] leading-relaxed">
                Choose a time that works for you, and give yourself the space to pause, reflect, and share what is on your mind. You do not need to have everything planned out or rehearsed.
              </p>
              
              <div className="pt-2 border-t border-[#E5E5E5]">
                <p className="font-serif italic text-base text-[#111111] font-bold">
                  "{siteConfig.brand.tagline}"
                </p>
              </div>
            </div>

            {/* Session Details Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#E5E5E5] pb-2">
                Clarity Call Logistics
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Introductory Conversation:</strong>
                    <p className="text-[11px] text-[#666666]">A dedicated space to discuss your goals and explore how coaching can support you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Formats Available:</strong>
                    <p className="text-[11px] text-[#666666]">
                      • <strong>Online:</strong> Video call (Google Meet / Zoom) across India & globally.<br />
                      • <strong>In-Person:</strong> Bengaluru (quiet, reflective space, subject to availability).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Summary */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#111111]">
                What Happens in a Session?
              </h3>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li className="flex items-start gap-2">
                  <strong className="text-[#111111]">1. We Talk:</strong> You share what is on your mind in a private setting.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#111111]">2. We Explore:</strong> We unpack thoughts and identify what matters most.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#111111]">3. We Find Clarity:</strong> Together, we explore perspectives and choices.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#111111]">4. You Move Forward:</strong> You decide which insights fit your life.
                </li>
              </ul>
            </div>

            {/* Confidentiality & Ethics Box */}
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 text-xs text-[#444444] space-y-2">
              <p className="font-bold text-[#111111] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C62828]" />
                Confidentiality & Boundaries
              </p>
              <p className="leading-relaxed">
                {siteConfig.disclaimers.coachingDisclaimer}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="lg:col-span-7">
            <AppointmentBooking initialServiceId={requestedServiceId} />
          </div>

        </div>

      </div>
    </div>
  );
};
