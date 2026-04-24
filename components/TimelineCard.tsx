import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface TimelineCardProps {
  title: string; // Company or School
  subtitle: string; // Role or Degree
  period: string;
  location?: string;
  description: string[];
  titleUrl?: string; // Optional URL to make the title clickable
}

const TimelineCard: React.FC<TimelineCardProps> = ({ title, subtitle, period, location, description, titleUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect if we only want the animation once
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  // Helper to parse bold text marked with ** (primary color) or [[ (black)
  const renderTextWithBold = (text: string) => {
    // Regex matches **text** OR [[text]]
    const parts = text.split(/(\*\*.*?\*\*|\[\[.*?\]\])/g);
    return parts.map((part, index) => {
      // Standard Bold (Primary Color)
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-primary-600 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Black Bold (Specific request)
      if (part.startsWith('[[') && part.endsWith(']]')) {
        return (
          <strong key={index} className="text-slate-900 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative pl-8 border-l-2 border-slate-200 last:mb-0 mb-8 print:break-inside-avoid group transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        print:opacity-100 print:translate-y-0
      `}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-accent-400 group-hover:bg-accent-500 transition-colors"></div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-accent-500 transition-colors">{subtitle}</h3>
          {titleUrl ? (
            <a
              href={titleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary-600 font-semibold inline-flex items-center gap-1.5 hover:text-accent-500 hover:underline underline-offset-4 decoration-accent-400 transition-colors"
            >
              {title}
              <ExternalLink size={14} className="opacity-70" />
            </a>
          ) : (
            <h4 className="text-lg text-primary-600 font-semibold">{title}</h4>
          )}
        </div>
        <div className="text-slate-500 text-sm mt-1 md:mt-0 flex flex-col md:items-end font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      <ul className="list-disc list-outside ml-4 space-y-1.5 text-slate-600">
        {description.map((item, index) => (
          <li key={index} className="text-sm md:text-base leading-relaxed">
            {renderTextWithBold(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineCard;