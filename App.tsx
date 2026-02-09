import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import TimelineCard from './components/TimelineCard';
import ProjectCard from './components/ProjectCard';
import SkillsInteractive from './components/SkillsInteractive';
import Chatbot from './components/Chatbot';
import { 
  PROFILE_TEXT, 
  EXPERIENCES, 
  EDUCATION, 
  ENGAGEMENTS, 
  PROJECTS, 
  OTHER_EXP, 
  LANGUAGES, 
  INTERESTS,
  CONTACT
} from './constants';
import { 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Globe, 
  Brain, 
  Award, 
  Heart,
  User,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

// Helper to parse bold text marked with **
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-primary-600 font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-accent-100 selection:text-accent-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto bg-white shadow-xl shadow-slate-200/60 min-h-screen border-x border-slate-100 print:shadow-none print:bg-white print:max-w-full print:border-none">
        <Hero />
        
        <div className="px-6 pb-20 space-y-8 md:space-y-12">
          
          <Section id="profile" title="Profil" icon={<User size={24} />}>
            <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line print:text-black text-justify">
              {renderTextWithBold(PROFILE_TEXT)}
            </p>
          </Section>

          <Section id="skills" title="Compétences" icon={<Brain size={24} />}>
            <SkillsInteractive />
          </Section>

          <Section id="experience" title="Expériences" icon={<Briefcase size={24} />}>
            <div className="space-y-2">
              {EXPERIENCES.map((exp, idx) => (
                <TimelineCard 
                  key={idx}
                  title={exp.company}
                  subtitle={exp.role}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                />
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projets" icon={<Code2 size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:block">
              {PROJECTS.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </Section>

          <Section id="education" title="Formation" icon={<GraduationCap size={24} />}>
            <div className="space-y-2">
              {EDUCATION.map((edu, idx) => (
                <TimelineCard 
                  key={idx}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={edu.period}
                  description={edu.details}
                />
              ))}
            </div>
          </Section>

          <Section id="engagements" title="Engagements & Responsabilités" icon={<Globe size={24} />}>
            <div className="space-y-2">
              {ENGAGEMENTS.map((eng, idx) => (
                <TimelineCard 
                  key={idx}
                  title={eng.company}
                  subtitle={eng.role}
                  period={eng.period}
                  description={eng.description}
                />
              ))}
            </div>
          </Section>

          {/* Stacked sections for perfect centering */}
          <Section id="other" title="Exp. Complémentaires" icon={<Award size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_EXP.map((exp, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <h3 className="text-slate-800 font-bold text-lg print:text-black">{exp.role}</h3>
                  <p className="text-primary-600 text-sm mb-3 font-medium print:text-slate-700">{exp.company} • {exp.period}</p>
                  <ul className="text-slate-600 text-sm list-disc ml-4 print:text-black space-y-1">
                    {exp.description.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          
          <Section id="languages" title="Langues" icon={<Globe size={24} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 hover:border-accent-200 transition-colors print:bg-white print:border-slate-200">
                  <span className="text-slate-700 font-medium print:text-black">{lang.language}</span>
                  <span className="text-xs text-accent-600 font-bold uppercase print:text-slate-600 tracking-wider bg-accent-50 px-2 py-1 rounded-md">{lang.level}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="interests" title="Centres d'intérêt" icon={<Heart size={24} />}>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((int, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-600 border border-slate-200 hover:border-accent-400 hover:bg-accent-50 hover:text-accent-600 transition-all cursor-default print:bg-transparent print:text-black print:border-slate-300">
                  {int}
                </span>
              ))}
            </div>
          </Section>
          
          <footer className="pt-20 pb-10 text-center no-print">
             {/* CTA PROMO */}
             <div className="mb-16 p-8 bg-slate-900 rounded-2xl text-white max-w-2xl mx-auto shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code2 size={100} />
                 </div>
                 
                 <div className="relative z-10">
                    <h3 className="font-bold text-2xl mb-3">Vous avez apprécié ce CV interactif ?</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                       Vous souhaitez un portfolio similaire qui vous démarque, ou un site vitrine professionnel ? 
                       Je peux réaliser un site web sur-mesure qui vous correspond.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                       <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-50 transition-colors w-full sm:w-auto justify-center">
                          <Phone size={18} className="text-accent-500" />
                          {CONTACT.phone}
                       </a>
                       <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center">
                          <Mail size={18} />
                          Me contacter
                       </a>
                    </div>
                 </div>
             </div>

            <div className="text-slate-400 text-sm">
              <p>© {new Date().getFullYear()} Isaac Derhy. Tous droits réservés.</p>
              <p className="mt-2">Site web interactif • React & Tailwind</p>
            </div>
          </footer>
        </div>
        
        {/* Chatbot */}
        <Chatbot />
      </main>
    </div>
  );
};

export default App;