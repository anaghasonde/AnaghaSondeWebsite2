import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Heart, Sparkles, Shield, UserCheck, RefreshCw } from 'lucide-react';
import type { ServiceItem } from '../config/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  'one-to-one-coaching': <UserCheck className="w-5 h-5 text-[#C62828]" />,
  'motivation-and-direction': <Compass className="w-5 h-5 text-[#C62828]" />,
  'self-discovery-growth': <Sparkles className="w-5 h-5 text-[#C62828]" />,
  'confidence-self-belief': <Shield className="w-5 h-5 text-[#C62828]" />,
  'relationships-boundaries': <Heart className="w-5 h-5 text-[#C62828]" />,
  'life-transitions-decisions': <RefreshCw className="w-5 h-5 text-[#C62828]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border transition-all duration-300 bg-white hover:shadow-lg ${
        featured
          ? 'border-[#C62828] bg-gradient-to-b from-white to-red-50/20 shadow-xs'
          : 'border-[#E5E5E5] hover:border-[#C62828]/70'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold tracking-wider text-[#C62828] bg-[#F5F5F5] px-2.5 py-1 rounded border border-[#E5E5E5]">
            {service.number}
          </span>
          <div className="w-9 h-9 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center group-hover:scale-105 group-hover:border-[#C62828] transition-all">
            {iconMap[service.id] || <Sparkles className="w-5 h-5 text-[#C62828]" />}
          </div>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#C62828] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#666666] font-semibold mt-1">
          {service.subtitle}
        </p>

        <p className="text-sm text-[#444444] leading-relaxed mt-3.5">
          {service.description}
        </p>

        {service.suitableFor && (
          <div className="mt-4 pt-3 border-t border-[#F5F5F5]">
            <p className="text-[12px] text-[#555555] italic">
              <strong className="font-semibold text-[#111111] not-italic">Ideal for: </strong>
              {service.suitableFor}
            </p>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-6 mt-4 border-t border-[#E5E5E5] flex items-center justify-between">
        <Link
          to={`/book-session?service=${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#C62828] transition-colors"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C62828] group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-[#777777] font-medium">60 Mins</span>
      </div>
    </div>
  );
};
