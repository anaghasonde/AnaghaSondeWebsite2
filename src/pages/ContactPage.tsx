import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>Direct Communication</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Let's begin with a conversation.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            "Love life, Live life"
          </p>
          <RedLine />
          <p className="text-sm sm:text-base text-[#444444] max-w-2xl mx-auto mt-4 leading-relaxed">
            You don't have to have everything figured out before reaching out. Tell me a little about what brings you here, and we can explore whether coaching feels right for you.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Booking Alternative */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#111111] border-b border-[#E5E5E5] pb-3">
                Mind Matters by Anagha Sonde
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#444444]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C62828] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#111111]">Location</strong>
                    <p>{siteConfig.contact.city}, India</p>
                    <p className="text-[11px] text-[#666666]">Online worldwide (Google Meet / Zoom) or In-person Bengaluru</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C62828] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#111111]">Timezone & Hours</strong>
                    <p>{siteConfig.contact.timezone}</p>
                    <p className="text-[11px] text-[#666666]">Monday to Saturday, by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C62828] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#111111]">Email</strong>
                    <p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-[#111111] font-semibold hover:text-[#C62828] transition-colors underline-offset-2 hover:underline">
                        {siteConfig.contact.displayEmail}
                      </a>
                    </p>
                    <p className="text-[11px] text-[#666666]">For enquiries, partnerships, and session scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Alternative Box */}
            <div className="p-6 rounded-2xl bg-[#111111] text-white border-2 border-[#C62828] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
                Direct Appointment
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Prefer to choose a date and time directly?
              </h3>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                If you already know when you'd like to meet, our appointment scheduler lets you pick an available 60-minute time slot immediately.
              </p>
              <Link
                to="/book-session"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold rounded-sm transition-colors text-center shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Go to Appointment Calendar</span>
              </Link>
            </div>

            {/* Book Copy Enquiry Teaser */}
            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-between text-xs shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 shrink-0">
                  <img
                    src={siteConfig.book.coverImage}
                    alt="Welcome Back to Yourself cover"
                    className="w-full aspect-[5/8] object-contain rounded-xs shadow-xs"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111111]">Looking for the book?</p>
                  <p className="text-[11px] text-[#666666]">Enquire for an author copy of <em>Welcome Back to Yourself</em></p>
                </div>
              </div>
              <Link to="/book#get-copy" className="text-[#C62828] font-bold hover:underline shrink-0 text-xs ml-2">
                Order &rarr;
              </Link>
            </div>

            {/* Privacy Promise */}
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 text-xs text-[#444444] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
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
