import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Heart, Sparkles, Shield, UserCheck, RefreshCw } from 'lucide-react';
import type { ServiceItem } from '../config/siteConfig';


const iconMap: Record<string, React.ReactNode> = {
  'one-to-one-coaching': <UserCheck className="w-5 h-5 text-[#B49A6A]" />,
  'motivation-and-direction': <Compass className="w-5 h-5 text-[#B49A6A]" />,
  'self-discovery-growth': <Sparkles className="w-5 h-5 text-[#B49A6A]" />,
  'confidence-self-belief': <Shield className="w-5 h-5 text-[#B49A6A]" />,
  'relationships-boundaries': <Heart className="w-5 h-5 text-[#B49A6A]" />,
  'life-transitions-decisions': <RefreshCw className="w-5 h-5 text-[#B49A6A]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-lg border transition-all duration-300 bg-white hover:shadow-md ${
        featured
          ? 'border-[#B49A6A] bg-gradient-to-b from-white to-[#F8F5EF]/60 shadow-xs'
          : 'border-[#E8D8C6] hover:border-[#B49A6A]/80'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#B49A6A] bg-[#F8F5EF] px-2.5 py-1 rounded border border-[#E8D8C6]">
            {service.number}
          </span>
          <div className="w-9 h-9 rounded-full bg-[#F8F5EF] border border-[#E8D8C6] flex items-center justify-center group-hover:scale-105 group-hover:border-[#B49A6A] transition-all">
            {iconMap[service.id] || <Sparkles className="w-5 h-5 text-[#B49A6A]" />}
          </div>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#171615] group-hover:text-[#B49A6A] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#706B65] font-medium mt-1">
          {service.subtitle}
        </p>

        <p className="text-sm text-[#706B65] leading-relaxed mt-3.5">
          {service.description}
        </p>

        {service.suitableFor && (
          <div className="mt-4 pt-3 border-t border-[#F8F5EF]">
            <p className="text-[12px] text-[#706B65] italic">
              <strong className="font-medium text-[#171615] not-italic">Ideal for: </strong>
              {service.suitableFor}
            </p>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-6 mt-4 border-t border-[#E8D8C6]/50 flex items-center justify-between">
        <Link
          to={`/book-session?service=${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171615] group-hover:text-[#B49A6A] transition-colors"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-[#706B65]">60 Mins</span>
      </div>
    </div>
  );
};
