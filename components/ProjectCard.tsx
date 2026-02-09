import React, { useRef, useEffect, useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<ProjectItem> = ({ name, role, description, link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <div 
      ref={cardRef}
      className={`bg-slate-50/80 rounded-xl p-6 border border-slate-200 hover:border-accent-200 hover:bg-white hover:shadow-lg transition-all duration-300 group print:border-slate-200 print:bg-transparent print:p-4 print:mb-4 print:break-inside-avoid transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        print:opacity-100 print:translate-y-0
      `}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-accent-500 transition-colors print:text-black">
            {name}
          </h3>
          {role && <p className="text-sm text-primary-600 font-medium mb-1 print:text-slate-700">{role}</p>}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors no-print"
          >
            <Github size={20} />
          </a>
        )}
      </div>
      
      <div className="space-y-2">
        {description.map((desc, idx) => (
          <p key={idx} className="text-slate-600 text-sm leading-relaxed print:text-black">
            • {desc}
          </p>
        ))}
      </div>
      
      {link && (
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-500 hover:text-accent-600 mt-4 uppercase tracking-wider no-print"
        >
          Voir le projet <ExternalLink size={12} />
        </a>
      )}
      {link && (
        <p className="hidden print:block text-xs mt-1 text-slate-500">{link}</p>
      )}
    </div>
  );
};

export default ProjectCard;