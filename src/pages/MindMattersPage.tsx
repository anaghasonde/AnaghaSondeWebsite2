import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RedLine, BrandBadge } from '../components/GoldMotif';
import { BookCover } from '../components/BookCover';

export const MindMattersPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <BrandBadge>The Initiative</BrandBadge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            A space for the conversations that matter.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#C62828] font-semibold">
            "{siteConfig.brand.tagline}"
          </p>
          <RedLine />
          <p className="text-sm sm:text-base text-[#444444] max-w-2xl mx-auto mt-4 leading-relaxed">
            Founded in 2022 by Anagha Sonde, Mind Matters is a personal coaching initiative created to encourage self-awareness, emotional understanding, thoughtful choices, personal growth, and more meaningful ways of living.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] shadow-xs space-y-5 text-sm sm:text-base text-[#444444] leading-relaxed mb-16">
          <p className="font-serif text-lg text-[#111111] font-bold">
            Why Mind Matters was created
          </p>
          <p>
            In a world that constantly encourages us to do more, achieve faster, and measure our worth by external validation, we often forget to pause and ask the most fundamental question: <em>"Does this life feel like mine?"</em>
          </p>
          <p>
            Mind Matters was born from a desire to create a sanctuary where people can step off the treadmill of daily demands, lay down their masks, and speak honestly about what they are experiencing — without fear of judgment, criticism, or unsolicited advice.
          </p>
          <p>
            Here, you do not need to perform. You do not need to appear flawless. You are invited to come as you are, unpack what matters to you, and reconnect with your innate wisdom.
          </p>
        </div>

        {/* Themes Section */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
              Exploration Themes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Conversations that bring you closer to yourself
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
              These recurring themes often form the heart of our one-to-one coaching dialogues:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.mindMattersThemes.map((theme, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#C62828] transition-all flex items-start gap-4 hover:shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-xs font-mono font-bold text-[#C62828] shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connection to Anagha's Book */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-[#F5F5F5] border-2 border-[#111111] flex flex-col md:flex-row items-center gap-8 shadow-xs">
          <div className="shrink-0 flex justify-center">
            <Link to="/book" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md transition-transform hover:scale-[1.02]">
              <BookCover size="sm" show3D={true} />
            </Link>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C62828] font-bold">
                The Companion Memoir
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                {siteConfig.book.pillarsStatement}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
              {siteConfig.book.title}
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#C62828] font-medium">
              "{siteConfig.book.subtitle}"
            </p>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Written by {siteConfig.book.author}, this memoir shares personal experiences and reflections on reinvention, self-discovery, and finding the courage to begin again.
            </p>
            <div className="pt-2">
              <Link
                to="/book"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#C62828] transition-colors"
              >
                <span>Discover the Memoir</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C62828]" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#111111]">
            Give yourself the space you have been waiting for.
          </h3>
          <p className="text-sm text-[#555555] max-w-md mx-auto">
            Book a free clarity call to begin exploring what matters to you.
          </p>
          <div className="pt-2">
            <Link
              to="/book-session"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book a Free Clarity Call</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
