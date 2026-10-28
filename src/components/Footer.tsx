import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171615] text-[#F8F5EF] pt-16 pb-12 border-t border-[#B49A6A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline - Column 1 */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#B49A6A] transition-colors">
                Mind Matters
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#B49A6A] font-medium mt-1">
                by Anagha Sonde
              </span>
            </Link>

            <p className="font-serif italic text-lg text-[#E8D8C6]/90">
              "{siteConfig.brand.tagline}"
            </p>

            <p className="text-sm text-[#948E87] leading-relaxed max-w-md">
              Helping you pause, reflect, reconnect, and move forward with greater clarity. A confidential, reflective space for honest conversations and intentional living.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#E8D8C6]/70">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A]" />
                Founded 2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B49A6A]" />
                Achology Certified (2020)
              </span>
            </div>
          </div>

          {/* Quick Navigation - Column 2 */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide border-b border-[#B49A6A]/40 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#C4BEB6]">
              <li>
                <Link to="/" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> About Anagha
                </Link>
              </li>
              <li>
                <Link to="/life-coaching" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> What Is Life Coaching?
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> Coaching Services
                </Link>
              </li>
              <li>
                <Link to="/mind-matters" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> The Mind Matters Space
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2 text-[#E8D8C6]">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> My Book: Welcome Back to Yourself
                </Link>
              </li>
              <li>
                <Link to="/book-session" className="hover:text-[#B49A6A] transition-colors flex items-center gap-2 font-medium text-[#B49A6A]">
                  <span className="w-1 h-1 rounded-full bg-[#B49A6A]" /> Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Placeholder - Column 3 */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide border-b border-[#B49A6A]/40 pb-2">
              Conversations & Sessions
            </h3>

            <div className="space-y-3 text-sm text-[#C4BEB6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{siteConfig.contact.city}, India</p>
                  <p className="text-xs text-[#948E87]">Online Sessions Worldwide | In-person by appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Asia / Kolkata (IST)</p>
                  <p className="text-xs text-[#948E87]">Monday – Saturday, by confirmed booking</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B49A6A] shrink-0 mt-1" />
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[#B49A6A] transition-colors"
                  >
                    {siteConfig.contact.displayEmail}
                  </a>
                  <p className="text-[11px] text-[#948E87]">General enquiries & confidential booking coordination</p>
                </div>
              </div>
            </div>

            {/* Social Links Placeholders */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[#948E87] mb-2 font-medium">
                Connect
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href={siteConfig.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D8C6] hover:bg-[#B49A6A] hover:text-[#171615] transition-all"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D8C6] hover:bg-[#B49A6A] hover:text-[#171615] transition-all"
                  aria-label="Instagram profile"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Coaching & Medical Care Disclaimer */}
        <div className="py-6 border-b border-white/10">
          <p className="text-xs text-[#948E87] leading-relaxed max-w-5xl">
            <strong className="text-[#C4BEB6]">Professional Boundary Notice:</strong> {siteConfig.disclaimers.coachingDisclaimer} {siteConfig.disclaimers.confidentialityNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#948E87] gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {currentYear} Mind Matters by Anagha Sonde. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link to="/privacy" className="hover:text-[#B49A6A] transition-colors underline-offset-2 hover:underline">
              Privacy Policy & Confidentiality
            </Link>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#B49A6A] transition-colors underline-offset-2 hover:underline">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[#C4BEB6]">
              Made with intention <Heart className="w-3 h-3 text-[#B9797D] fill-current" />
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#E8D8C6] hover:bg-[#B49A6A] hover:text-[#171615] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
