import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, ShieldCheck, MapPin } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';
import { AppointmentBooking } from '../components/AppointmentBooking';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedServiceId = searchParams.get('service') || undefined;

  return (
    <div className="py-12 sm:py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <GoldBadge>Direct Reservation</GoldBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171615]">
            Let's Make Time for You.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#B49A6A]">
            Book a Confidential Coaching Session
          </p>
          <GoldLine />
          <p className="text-sm sm:text-base text-[#706B65] max-w-2xl mx-auto mt-4 leading-relaxed">
            Sometimes, the first step towards change is simply making time for yourself. Whether you are navigating uncertainty, looking for motivation, working through personal challenges, or seeking a deeper understanding of yourself, let's begin with a conversation.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Reassuring Intro, Session Info, What to Expect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Reassurance Card */}
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] shadow-xs space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A6A]">
                The Sanctuary
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#171615]">
                Your Space to Pause
              </h2>
              <p className="text-sm text-[#706B65] leading-relaxed">
                Choose a session that works for you, and give yourself the space to pause, reflect, and move forward. You do not need to have everything planned out or rehearsed.
              </p>
              
              <div className="pt-2 border-t border-[#F8F5EF]">
                <p className="font-serif italic text-base text-[#171615]">
                  "{siteConfig.brand.tagline}"
                </p>
              </div>
            </div>

            {/* Session Details Card */}
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#171615] border-b border-[#E8D8C6] pb-2">
                Session Logistics
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#171615]">Duration:</strong> {siteConfig.sessionDetails.durationDisplay}
                    <p className="text-[11px] text-[#706B65]">Dedicated, uninterrupted one-to-one exploration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#171615]">Investment:</strong> {siteConfig.sessionDetails.feeDisplay}
                    <p className="text-[11px] text-[#706B65]">{siteConfig.sessionDetails.feeNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#171615]">Formats Available:</strong>
                    <p className="text-[11px] text-[#706B65]">
                      • <strong>Online:</strong> Video call (Google Meet / Zoom) across India & globally.<br />
                      • <strong>In-Person:</strong> Bengaluru (quiet, reflective space, subject to availability).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Summary */}
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#171615]">
                What Happens in a Session?
              </h3>
              <ul className="space-y-2 text-xs text-[#706B65]">
                <li className="flex items-start gap-2">
                  <strong className="text-[#171615]">1. We Talk:</strong> You share what is on your mind in a private setting.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#171615]">2. We Explore:</strong> We unpack thoughts and identify what matters most.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#171615]">3. We Find Clarity:</strong> Together, we explore perspectives and choices.
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#171615]">4. You Move Forward:</strong> You decide which insights fit your life.
                </li>
              </ul>
            </div>

            {/* Confidentiality & Ethics Box */}
            <div className="p-4 rounded-lg bg-[#E8D8C6]/30 border border-[#B49A6A]/30 text-xs text-[#706B65] space-y-2">
              <p className="font-semibold text-[#171615] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B49A6A]" />
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
