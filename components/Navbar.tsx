import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage, LANG_LABEL } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, cycleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm no-print transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-bold text-xl text-slate-800 tracking-tighter hover:text-accent-500 transition-colors"
        >
          ID<span className="text-accent-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'bg-slate-100 text-primary-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.nav[link.key]}
            </a>
          ))}

          {/* Language toggle (desktop, top-right) */}
          <button
            onClick={cycleLanguage}
            className="ml-3 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-600 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all"
            aria-label="Change language"
            title="Change language"
          >
            <Languages size={16} />
            <span>{LANG_LABEL[language]}</span>
          </button>
        </div>

        {/* Mobile: language toggle + burger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={cycleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all"
            aria-label="Change language"
          >
            <Languages size={14} />
            <span>{LANG_LABEL[language]}</span>
          </button>
          <button
            className="text-slate-500 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-white border-b border-slate-200 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-slate-50 text-primary-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={activeSection === link.href.substring(1) ? 'text-primary-500' : 'text-slate-400'}>
                {link.icon}
              </span>
              {t.nav[link.key]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
