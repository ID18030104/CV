import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TRANSLATIONS, type Lang, type Translation } from './constants';

interface LanguageContextValue {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  cycleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'cv-lang';
const CYCLE: Lang[] = ['fr', 'en', 'zh'];

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  // 1. URL query param wins (used by the PDF generator script and for sharable links)
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'fr' || urlLang === 'en' || urlLang === 'zh') return urlLang;
  // 2. Then localStorage
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'fr' || saved === 'en' || saved === 'zh') return saved;
  // 3. Default
  return 'fr';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Lang) => setLanguageState(lang);

  const cycleLanguage = () => {
    setLanguageState((prev) => {
      const idx = CYCLE.indexOf(prev);
      return CYCLE[(idx + 1) % CYCLE.length];
    });
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, cycleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

export const LANG_LABEL: Record<Lang, string> = {
  fr: 'FR',
  en: 'EN',
  zh: '中',
};
