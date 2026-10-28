import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Calendar, ShieldCheck } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <GoldBadge>Direct Communication</GoldBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171615]">
            Let's begin with a conversation.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#B49A6A]">
            "Love life, Live life"
          </p>
          <GoldLine />
          <p className="text-sm sm:text-base text-[#706B65] max-w-2xl mx-auto mt-4 leading-relaxed">
            You don't have to have everything figured out before reaching out. Tell me a little about what brings you here, and we can explore whether coaching feels right for you.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Booking Alternative */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl bg-white border border-[#E8D8C6] shadow-xs space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#171615] border-b border-[#E8D8C6] pb-3">
                Mind Matters by Anagha Sonde
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#706B65]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#171615]">Location</strong>
                    <p>{siteConfig.contact.city}, India</p>
                    <p className="text-[11px] text-[#706B65]">Online worldwide (Google Meet / Zoom) or In-person Bengaluru</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#171615]">Timezone & Hours</strong>
                    <p>{siteConfig.contact.timezone}</p>
                    <p className="text-[11px] text-[#706B65]">Monday to Saturday, by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#171615]">Email</strong>
                    <p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-[#171615] hover:text-[#B49A6A] transition-colors underline-offset-2 hover:underline">
                        {siteConfig.contact.displayEmail}
                      </a>
                    </p>
                    <p className="text-[11px] text-[#706B65]">For enquiries, partnerships, and session scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Alternative Box */}
            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#B49A6A]/40 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B49A6A] font-semibold">
                Direct Appointment
              </span>
              <h3 className="font-serif text-lg font-bold text-[#171615]">
                Prefer to choose a date and time directly?
              </h3>
              <p className="text-xs text-[#706B65] leading-relaxed">
                If you already know when you'd like to meet, our appointment scheduler lets you pick an available 60-minute time slot immediately.
              </p>
              <Link
                to="/book-session"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#171615] hover:bg-[#B49A6A] text-white text-xs font-semibold rounded-sm transition-colors text-center"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B49A6A]" />
                <span>Go to Appointment Calendar</span>
              </Link>
            </div>

            {/* Privacy Promise */}
            <div className="p-4 rounded-lg bg-[#E8D8C6]/30 border border-[#B49A6A]/30 text-xs text-[#706B65] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
              <div>
                All contact enquiries are treated with the highest degree of personal discretion. We will never sell, rent, or share your contact details.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
};
