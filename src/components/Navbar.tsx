import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Life Coaching', path: '/life-coaching' },
    { name: 'Services', path: '/services' },
    { name: 'Mind Matters', path: '/mind-matters' },
    { name: 'My Book', path: '/book', badge: 'New' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E8D8C6]/60 py-3.5'
          : 'bg-[#F8F5EF] border-b border-[#E8D8C6]/40 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A] rounded-sm transition-transform duration-200"
            aria-label={`${siteConfig.brand.name} - Home`}
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#171615] group-hover:text-[#B49A6A] transition-colors">
              Mind Matters
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#706B65] font-medium -mt-0.5">
              by Anagha Sonde
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors rounded-md ${
                    active
                      ? 'text-[#171615] font-semibold'
                      : 'text-[#706B65] hover:text-[#171615]'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A]`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.badge && (
                      <span className="text-[10px] bg-[#B49A6A]/15 text-[#8F7446] font-semibold px-1.5 py-0.2 rounded-full border border-[#B49A6A]/30">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B49A6A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Book an Appointment */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/book-session"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide text-white bg-[#171615] hover:bg-[#B49A6A] transition-all duration-300 rounded-sm shadow-sm hover:shadow group border border-[#171615] hover:border-[#B49A6A] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B49A6A]"
            >
              <Calendar className="w-4 h-4 text-[#B49A6A] group-hover:text-white transition-colors" />
              <span>Book an Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/book-session"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#171615] rounded-sm hover:bg-[#B49A6A] transition-colors"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#171615] hover:text-[#B49A6A] hover:bg-[#E8D8C6]/40 focus:outline-none focus:ring-2 focus:ring-[#B49A6A]"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-[#F8F5EF] border-b border-[#E8D8C6] shadow-xl px-6 pt-5 pb-8 space-y-4 max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="pb-3 border-b border-[#E8D8C6]">
              <p className="font-serif italic text-sm text-[#706B65]">"{siteConfig.brand.tagline}"</p>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#E8D8C6]/60 text-[#171615] font-semibold border-l-4 border-[#B49A6A]'
                        : 'text-[#706B65] hover:bg-[#E8D8C6]/30 hover:text-[#171615]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-[#B49A6A]/20 text-[#8F7446] font-semibold px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#E8D8C6] space-y-3">
              <Link
                to="/book-session"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#171615] hover:bg-[#B49A6A] rounded-sm transition-colors text-center"
              >
                <Calendar className="w-4 h-4 text-[#B49A6A]" />
                Book an Appointment
              </Link>
              
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#171615] bg-[#E8D8C6]/50 hover:bg-[#E8D8C6] border border-[#B49A6A]/30 rounded-sm transition-colors text-center"
              >
                <BookOpen className="w-4 h-4 text-[#B49A6A]" />
                Discover "Welcome Back to Yourself"
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
