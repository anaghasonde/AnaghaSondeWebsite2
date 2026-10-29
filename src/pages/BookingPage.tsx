import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, Calendar } from 'lucide-react';
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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <BrandBadge>Introductory Conversation</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
            Book a Free Clarity Call
          </h1>
          <RedLine />
          
          {/* Introductory text */}
          <div className="text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5 pt-2 text-left sm:text-center">
            <p>
              Sometimes, all you need is a little space to pause, reflect, and understand yourself better.
            </p>
            <p>
              At Mind Matters, I offer a free clarity call to help us connect, understand what brings you here, and explore whether life coaching with me might be right for you.
            </p>
            <p>
              There is no pressure, no judgment, and no obligation to continue beyond this conversation.
            </p>
            <p className="font-medium text-[#111111]">
              To get started, please complete the short form below. Once I receive your request, I'll personally get in touch with you to coordinate a suitable time.
            </p>
          </div>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
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
                Give yourself the space to pause, reflect, and share what is on your mind. You do not need to have everything planned out or rehearsed.
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
                    <p className="text-[11px] text-[#666666]">
                      A 1-on-1 space to connect, discuss what brings you here, and explore whether life coaching is right for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Formats Available:</strong>
                    <p className="text-[11px] text-[#666666]">
                      • <strong>Online:</strong> Video call (Google Meet / Zoom) across India & globally.<br />
                      • <strong>In-Person:</strong> Bengaluru (quiet, reflective space, subject to schedule availability).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Mutual Scheduling:</strong>
                    <p className="text-[11px] text-[#666666]">
                      Dates and times are coordinated personally after reviewing your request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Direct Contact:</strong>
                    <p className="text-[11px] text-[#666666]">
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C62828] hover:underline font-medium">
                        {siteConfig.contact.email}
                      </a>
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

          {/* Right Column: Google Form Request Card & What Happens Next */}
          <div className="lg:col-span-7">
            <AppointmentBooking initialServiceId={requestedServiceId} />
          </div>

        </div>

      </div>
    </div>
  );
};
