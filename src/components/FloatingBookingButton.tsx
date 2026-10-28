import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export const FloatingBookingButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Do not show on the booking page itself to avoid redundancy
  if (location.pathname === '/book-session') {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-5 right-4 z-40 transition-all duration-300 transform translate-y-0">
      <Link
        to="/book-session"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171615] text-white text-xs font-semibold tracking-wide rounded-full shadow-lg border border-[#B49A6A]/60 hover:bg-[#B49A6A] hover:text-[#171615] transition-all"
        aria-label="Book an Appointment"
      >
        <Calendar className="w-3.5 h-3.5 text-[#B49A6A]" />
        <span>Book a Session</span>
      </Link>
    </div>
  );
};
