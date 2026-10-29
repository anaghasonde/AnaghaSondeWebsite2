import React from 'react';
import { ExternalLink, Info, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AppointmentBookingProps {
  initialServiceId?: string;
  className?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialServiceId,
  className = '',
}) => {
  const selectedService = initialServiceId
    ? siteConfig.services.find((s) => s.id === initialServiceId)
    : undefined;

  const { googleFormUrl, ctaButtonText, steps, note } = siteConfig.booking;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Primary Action Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#111111] shadow-lg relative overflow-hidden">
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C62828]" />

        <div className="space-y-6">
          {/* Header & Context */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C62828] bg-red-50 border border-red-200 px-2.5 py-1 rounded">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1: Request Your Call</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Ready to Connect?
            </h2>
            <p className="text-sm text-[#444444] leading-relaxed">
              Click the button below to open the short clarity call request form. It takes less than two minutes to share your preferred time and contact details.
            </p>
          </div>

          {/* Selected Service Context Pill (if visitor arrived with a service parameter) */}
          {selectedService && (
            <div className="p-3.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] text-xs sm:text-sm text-[#333333] flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#666666] font-semibold block">
                  Service of Interest:
                </span>
                <strong className="text-[#111111] font-serif text-sm">
                  {selectedService.title}
                </strong>
              </div>
              <span className="text-[11px] font-mono text-[#C62828] font-bold bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">
                {selectedService.number}
              </span>
            </div>
          )}

          {/* Primary CTA Button */}
          <div className="pt-2">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fill Out the Form on Google Forms (opens in a new tab)"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C62828] hover:bg-[#8E1515] active:bg-[#6E1010] text-white text-base sm:text-lg font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#C62828] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C62828] text-center cursor-pointer group"
            >
              <span>{ctaButtonText}</span>
              <ExternalLink className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-[12px] text-[#666666] text-center mt-2.5 flex items-center justify-center gap-1.5">
              <span>Opens Google Form securely in a new browser tab</span>
              <span>•</span>
              <span>No account required</span>
            </p>
          </div>

          {/* Secondary Email Alternative */}
          <div className="pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#555555]">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C62828]" />
              Prefer to email directly?
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#C62828] hover:text-[#8E1515] font-semibold underline underline-offset-2"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: Explain What Happens Next */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C62828]">
            Simple 3-Step Process
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mt-1">
            What Happens Next
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] mt-1">
            Here is what to expect after you submit your request:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 gap-3.5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-xl bg-white border border-[#E5E5E5] flex items-start gap-3.5 transition-all hover:border-[#C62828]/50 hover:shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm shrink-0 border border-[#111111]">
                {item.step}
              </div>
              <div className="space-y-0.5 pt-0.5">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#111111]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Request Note Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-[#444444] space-y-1.5">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#111111]">Please note: </strong>
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
