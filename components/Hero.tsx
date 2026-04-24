import React, { useState, useEffect } from 'react';
import { CONTACT } from '../constants';
import { useLanguage } from '../LanguageContext';
import {
  Github, Linkedin, Mail, MapPin, Phone, Car, Download, Terminal,
  Brain, Cpu, TrendingUp, Briefcase, Target, User, Flag,
} from 'lucide-react';
import MathBackground from './MathBackground';

const PROFILE_PIC_PATH = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0Pae3S_Gb7h2TSOQNtRAVjqPVzBRwe9x5w&s";
const FALLBACK_PIC = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0Pae3S_Gb7h2TSOQNtRAVjqPVzBRwe9x5w&s";

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const typewriterStrings = t.typewriter;

  const cvPdfPath = `/cv-${language}.pdf`;
  const cvPdfFilename = `Isaac_Derhy_CV_${language.toUpperCase()}.pdf`;
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  // Reset typewriter state when language changes so we don't mid-delete a phrase that no longer exists
  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setLoopNum(0);
    setDelta(100);
  }, [typewriterStrings]);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % typewriterStrings.length;
      const fullText = typewriterStrings[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(50);
      } else {
        setDelta(50 + Math.random() * 50);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, typewriterStrings, isDeleting, loopNum]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20 pb-10">

      <div className="absolute inset-0 z-0 print:hidden">
        <MathBackground />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden no-print select-none z-0">
        <span className="absolute top-[15%] left-[10%] text-4xl text-slate-200 font-serif opacity-10 animate-bounce delay-100">∑</span>
        <span className="absolute bottom-[20%] right-[10%] text-4xl text-slate-200 font-serif opacity-10 animate-bounce delay-300">∫</span>
        <span className="absolute top-[20%] right-[20%] text-3xl text-slate-200 font-serif opacity-10 animate-bounce delay-200">π</span>
        <span className="absolute bottom-[15%] left-[20%] text-3xl text-slate-200 font-serif opacity-10 animate-bounce delay-700">∞</span>

        <Brain className="absolute top-[35%] left-[15%] text-slate-200 opacity-10 animate-bounce delay-500" size={32} />
        <Cpu className="absolute bottom-[40%] right-[15%] text-slate-200 opacity-10 animate-bounce delay-1000" size={28} />
        <span className="absolute top-[70%] left-[8%] text-xs font-mono text-slate-200 opacity-10 animate-pulse">01001101</span>

        <TrendingUp className="absolute top-[10%] right-[40%] text-slate-200 opacity-10 animate-bounce delay-150" size={30} />
        <Briefcase className="absolute bottom-[10%] left-[40%] text-slate-200 opacity-10 animate-bounce delay-400" size={28} />
        <Target className="absolute top-[50%] right-[5%] text-slate-200 opacity-10 animate-bounce delay-200" size={26} />

        <span className="absolute top-[45%] left-[5%] text-xl text-slate-200 font-serif opacity-10 hidden md:block">e<sup>iπ</sup> + 1 = 0</span>
      </div>

      <div className="max-w-5xl w-full relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          <div className="relative group shrink-0 order-1 md:order-1">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100 relative z-20 ring-2 ring-slate-100 flex items-center justify-center bg-cover bg-center">
              <img
                src={PROFILE_PIC_PATH}
                alt="Isaac Derhy"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => {
                  if (e.currentTarget.src !== FALLBACK_PIC) {
                    e.currentTarget.src = FALLBACK_PIC;
                  }
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-10">
                <User size={40} />
              </div>
            </div>

            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-30 bg-white rounded-full border border-slate-200 p-1 shadow-sm" title={t.titles.workStatus}>
              <div className="bg-green-500 w-4 h-4 rounded-full animate-pulse"></div>
            </div>

            <div className="absolute inset-0 rounded-full border border-accent-200 scale-110 opacity-50 -z-10 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-0 rounded-full border border-primary-200 scale-125 opacity-30 -z-10 animate-spin-slow dashed" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-3">
              Isaac Derhy
            </h1>

            <div className="h-8 md:h-10 mb-6 flex items-center justify-center md:justify-start w-full">
              <Terminal className="text-slate-400 mr-3 hidden md:block" size={24} />
              <p className="text-lg md:text-2xl text-primary-600 font-medium font-mono relative">
                <span className="text-slate-300 mr-2 md:hidden">&gt;</span>
                {text}
                <span className="animate-pulse border-r-2 border-primary-500 ml-1 h-6 inline-block align-middle">&nbsp;</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-slate-500 text-sm md:text-base mb-8 max-w-xl">
              <div className="flex items-center gap-2">
                <Flag size={18} className="text-primary-500" />
                <span>{t.hero.nationality}</span>
              </div>

              <div className="flex items-center gap-2">
                <User size={18} className="text-primary-500" />
                <span>{t.hero.age}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-500" />
                <span>{t.hero.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Car size={18} className="text-primary-500" />
                <span>{t.hero.driverLicense}</span>
              </div>

              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                <Phone size={18} className="text-primary-500" />
                <span>{CONTACT.phone}</span>
              </a>

              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                <Mail size={18} className="text-primary-500" />
                <span>{CONTACT.email}</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4 no-print relative z-50">
              <a
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-xl hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 text-slate-400 transition-all border border-slate-200 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`https://${CONTACT.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-xl hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 text-slate-400 transition-all border border-slate-200 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={cvPdfPath}
                download={cvPdfFilename}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-slate-900/20 active:scale-95 transform hover:-translate-y-1 cursor-pointer"
              >
                <Download size={20} />
                <span>{t.titles.downloadCV}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
