import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon, className = "" }) => {
  return (
    <section id={id} className={`py-12 md:py-16 scroll-mt-20 print:py-4 print:break-inside-avoid ${className}`}>
      <div className="flex items-center gap-3 mb-8 md:mb-10 border-b border-slate-100 pb-4 print:border-slate-300">
        {icon && <span className="text-accent-500 print:text-black">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 print:text-black uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="animate-fade-in-up">
        {children}
      </div>
    </section>
  );
};

export default Section;