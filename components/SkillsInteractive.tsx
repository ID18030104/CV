import React, { useEffect, useState, useRef } from 'react';
import { SKILLS } from '../constants';
import { Brain, Code2, Server, TrendingUp } from 'lucide-react';

const ICONS = [Brain, Code2, Server, TrendingUp];

const SkillsInteractive: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {SKILLS.map((category, idx) => {
        const Icon = ICONS[idx] || Brain;
        return (
          <div
            key={idx}
            className="bg-slate-50/80 rounded-xl p-6 border border-slate-200 hover:border-accent-200 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group print:break-inside-avoid"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 text-accent-500 group-hover:text-accent-600 group-hover:scale-110 transition-all duration-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
                {category.category}
              </h3>
            </div>

            <div className="space-y-5">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="font-semibold text-slate-700 text-sm md:text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs text-accent-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Background */}
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    {/* Animated Progress Bar */}
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-400 relative print-force-width"
                      style={{
                        '--print-width': `${skill.level}%`,
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease-out ${sIdx * 0.1}s`
                      } as React.CSSProperties}
                    >
                      {/* Shine effect - hidden in print */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent no-print"></div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-1.5 font-medium truncate">
                    {skill.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsInteractive;