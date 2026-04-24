import React from 'react';
import type { ContactInfo } from './types';
import {
  Users,
  Brain,
  Briefcase,
  Code2,
  GraduationCap,
  Globe,
} from 'lucide-react';

export type Lang = 'fr' | 'en' | 'zh';

// Données factuelles non traduites
export const CONTACT: ContactInfo = {
  phone: "+33 7 69 50 23 70",
  email: "isaacderhy18@gmail.com",
  linkedin: "linkedin.com/in/isaac-derhy-52628a217/",
  github: "github.com/ID18030104",
  location: "Saint-Mandé, France",
  driverLicense: "Permis B",
};

// Items de navigation : href et icône identiques dans les 3 langues, label traduit via `t.nav[key]`
export const NAV_ITEMS = [
  { key: 'profile', href: '#profile', icon: <Users size={16} /> },
  { key: 'skills', href: '#skills', icon: <Brain size={16} /> },
  { key: 'experience', href: '#experience', icon: <Briefcase size={16} /> },
  { key: 'projects', href: '#projects', icon: <Code2 size={16} /> },
  { key: 'education', href: '#education', icon: <GraduationCap size={16} /> },
  { key: 'engagements', href: '#engagements', icon: <Globe size={16} /> },
];

export interface SkillEntry {
  name: string;
  level: number;
  details: string;
}
export interface SkillCategoryEntry {
  category: string;
  skills: SkillEntry[];
}
export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  companyUrl?: string;
}
export interface ProjectEntry {
  name: string;
  role?: string;
  description: string[];
  link?: string;
}
export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  details: string[];
}
export interface LanguageEntry {
  language: string;
  level: string;
}

export interface Translation {
  profile: string;
  typewriter: string[];
  skills: SkillCategoryEntry[];
  experiences: ExperienceEntry[];
  engagements: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  otherExp: ExperienceEntry[];
  langs: LanguageEntry[];
  interests: string[];
  nav: Record<string, string>;
  titles: {
    profile: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    engagements: string;
    otherExp: string;
    languages: string;
    interests: string;
    downloadCV: string;
    viewProject: string;
    footerPromoTitle: string;
    footerPromoDesc: string;
    contactMe: string;
    rightsReserved: string;
    siteMeta: string;
    workStatus: string;
  };
  hero: {
    nationality: string;
    age: string;
    location: string;
    driverLicense: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  // ================================================================ FRANÇAIS
  fr: {
    profile:
      "Étudiant en **Administration Systèmes, Sécurité & Réseaux** à PST&B (en Bachelor 3, en double diplôme avec l'UPEC), avec une expérience en entreprise sur des projets mêlant **IA appliquée**, **automatisation**, **développement**, **intégration et infrastructure**.\n\nJ'aime évoluer **à la croisée des chemins entre l'entreprise et la tech** : partir d'un besoin réel (client, produit, opérationnel), le cadrer par une **approche analytique**, puis le transformer en solution concrète et déployable (**agents IA**, **plateformes**, **workflows**). En parallèle, j'ai un socle business solide : **vente**, **prospection**, **partenariats**, **gestion d'équipe** et **pilotage opérationnel**.",
    typewriter: [
      "Développeur IA & Systèmes",
      "Administration Systèmes & Réseaux",
      "Profil Mathématiques & Analytique",
      "Transformation de besoins en solutions",
    ],
    skills: [
      {
        category: "IA / Data / Mathématiques",
        skills: [
          { name: "Mathématiques Appliquées", level: 95, details: "Statistiques, Probabilités, Algèbre, Raisonnement" },
          { name: "LLMs & Agents AI", level: 95, details: "Prompt Engineering, RAG, Orchestration, LangChain" },
          { name: "Machine Learning / NLP", level: 90, details: "Training, Fine-tuning, Evaluation, Itérations" },
          { name: "Python Data Science", level: 90, details: "NumPy, Pandas, Visualisation, Nettoyage" },
        ],
      },
      {
        category: "Développement / Intégration",
        skills: [
          { name: "Python Scripting & Auto", level: 95, details: "Scripts complexes, Automatisation de process" },
          { name: "APIs & Backend", level: 90, details: "REST, Webhooks, JSON/XML, Intégrations" },
          { name: "Git & DevOps", level: 85, details: "Versioning, CI/CD, Documentation, PR" },
          { name: "Web Frontend", level: 70, details: "HTML/CSS, JavaScript, React (Notions)" },
        ],
      },
      {
        category: "Systèmes / Réseau / Sécurité",
        skills: [
          { name: "Administration Linux", level: 85, details: "Services, Permissions, Bash, Diagnostic" },
          { name: "Réseaux & Protocoles", level: 80, details: "TCP/IP, Subnetting, DNS, HTTP, SSH" },
          { name: "Sécurité & Auth", level: 80, details: "Certificats TLS, SSO (IdP/SP), VPN" },
          { name: "Infrastructure", level: 75, details: "Docker, Virtualisation (VMs), Cloud basics" },
        ],
      },
      {
        category: "Business / Sales / Management",
        skills: [
          { name: "Stratégie Commerciale", level: 95, details: "Prospection, Discovery, Closing, Négociation" },
          { name: "Gestion de Projet", level: 90, details: "Cadrage, Priorisation, Agile, Relation Client" },
          { name: "Data Sourcing", level: 90, details: "Enrichissement, Segmentation, Scraping" },
          { name: "Management", level: 85, details: "Recrutement, Formation, Coaching équipe" },
        ],
      },
    ],
    experiences: [
      {
        company: "ia-sup.fr",
        role: "Directeur Technique (CTO)",
        period: "Mars 2026 – Présent",
        location: "Paris",
        companyUrl: "https://ia-sup.fr",
        description: [
          "Développement de la plateforme de A à Z (end-to-end).",
          "Recherche sur l'impact de l'IA sur le développement de carrière et le marché du travail en France.",
          "Pilotage technique : architecture, choix de stack, qualité, delivery.",
        ],
      },
      {
        company: "Sairen",
        role: "AI Developer / Prompt Engineer (Alternance)",
        period: "Nov. 2025 – Mars 2026",
        location: "Paris (sur site)",
        description: [
          "Conception et développement d'agents IA (chatbots & voice agents).",
          "Relation client / delivery : recueil de besoin et implémentation.",
          "Orchestration d'outils : appels de fonctions, API, webhooks.",
          "Infrastructure voix : intégration LiveKit temps réel.",
          "Qualité : tests conversationnels, QA, cas limites.",
          "Partenariats & écosystème IA : collaborations Kyutai / Cekura.",
        ],
      },
      {
        company: "Sairen",
        role: "Sales Engineer",
        period: "Mars 2025 – Nov. 2025",
        location: "Paris & périphérie",
        description: [
          "Prospection et vente : cold call, qualification, closing.",
          "Recherche et qualification de data : sourcing et segmentation.",
          "Conduite d'échanges commerciaux : discovery, démo, objections.",
          "Traduction besoin ↔ solution : coordination technique.",
        ],
      },
      {
        company: "TW3 Partners",
        role: "Stage IA",
        period: "Sept. 2025 – Oct. 2025",
        location: "Paris (sur site)",
        description: [
          "Développement sur plateforme IA : modules, tests, itérations.",
          "Veille technologique IA : stack, modèles, patterns.",
          "Déploiement : configuration serveurs, Google Cloud.",
          "Documentation technique et guides d'usage.",
        ],
      },
      {
        company: "$BERRY",
        role: "Co-fondateur / Développeur Web3",
        period: "Nov. 2024 – Fév. 2025",
        location: "",
        description: [
          "Création d'une cryptomonnaie avec une market cap de plusieurs millions.",
          "Conception de la tokenomics et gestion de la liquidité.",
          "Design de l'écosystème et construction de la roadmap produit.",
        ],
      },
      {
        company: "Certinov",
        role: "Cofondateur / Directeur opérationnel",
        period: "Mai 2024 – Sept. 2024",
        location: "",
        description: [
          "Pilotage de 20 téléprospecteurs : coaching, scripts, reporting.",
          "Structuration opérationnelle : process et objectifs.",
        ],
      },
    ],
    engagements: [
      {
        company: "PSTB Event",
        role: "Président d'association",
        period: "Oct. 2024 – Oct. 2025",
        description: [
          "Direction d'une équipe de 20 membres, organisation d'événements.",
          "Pilotage de conférences, tables rondes, podcasts.",
          "Gestion de bout en bout : planning, logistique, communication.",
        ],
      },
      {
        company: "Crypto Club PST&B",
        role: "Président / Fondateur",
        period: "2024",
        description: [
          "Création d'une communauté web3 : sessions pédagogiques.",
          "Organisation de rencontres pour fédérer la dynamique étudiante.",
        ],
      },
      {
        company: "Au cœur de la bonté",
        role: "Bénévole (soutien scolaire)",
        period: "2024 – 2026",
        description: [
          "Accompagnement d'élèves en difficulté : méthodologie et suivi.",
        ],
      },
    ],
    projects: [
      {
        name: "Tyerce",
        role: "Plateforme d'escrow + IA litiges",
        description: [
          "Sécurisation de transactions entre particuliers via escrow.",
          "Modèle IA de résolution de litiges (analyse preuves/contrats).",
          "Intégration produit : pipeline de traitement, décision argumentée.",
        ],
        link: "https://github.com/ID18030104/Tyerce-project-ai",
      },
      {
        name: "Plateforme GEO",
        role: "Generative Engine Optimization",
        description: [
          "Plateforme de visibilité dans les moteurs génératifs.",
          "Analyse, recommandations, optimisation, dashboard de suivi.",
        ],
      },
      {
        name: "Personnages Historiques",
        role: "Site interactif (Texte + Vocal)",
        description: [
          "Dialogue avec personnages historiques recréés via IA.",
          "Travail sur identité/ton, cohérence et expérience utilisateur.",
        ],
      },
      {
        name: "Workflows IA Relation Client",
        role: "Automatisation",
        description: [
          "Workflows pour assister la relation client (qualification, résumé).",
          "Amélioration de la vitesse de traitement et cohérence.",
        ],
      },
      {
        name: "Robot-chien IA",
        role: "Hardware & AI",
        description: [
          "Conception de bout en bout : assemblage, logique de contrôle.",
          "Intégration de briques IA pour comportements.",
        ],
      },
      {
        name: "Robot-chien IA (Suite)",
        role: "Hardware & AI",
        description: [
          "Conception de bout en bout : assemblage, logique de contrôle.",
          "Intégration de briques IA pour comportements.",
        ],
      },
    ],
    education: [
      {
        school: "Paris School of Technology & Business (PST&B)",
        degree: "B3 Administration Systèmes, Sécurité & Réseaux — Double Diplôme",
        period: "2023 – 2026",
        details: [
          "Major de promo en B1 et B2.",
          "Systèmes, réseau, sécurité, data/statistiques, développement.",
        ],
      },
      {
        school: "Bootcamp Generative AI",
        degree: "PST&B + Developers Institute (399h)",
        period: "Mai 2025 – Sept. 2025",
        details: ["Python ML/DL/NLP, Prompt Engineering, LLMs, Agents IA."],
      },
      {
        school: "Certifications Internationales",
        degree: "Estonian Business School, Regent's University London & University of New York in Prague",
        period: "Mars 2024, Mars 2025 & Mars 2026",
        details: [],
      },
      {
        school: "N&R Hatorah",
        degree: "Baccalauréat — Mention Très Bien",
        period: "2015 – 2022",
        details: ["[[20/20 en Mathématiques]]", "17/20 en Physique-Chimie", "Obtenu en 2022"],
      },
    ],
    otherExp: [
      {
        company: "Clikweb",
        role: "Fondateur (création de sites)",
        period: "2023",
        description: ["Prospection, recueil de besoin, création, livraisons."],
      },
      {
        company: "AMD Consulting",
        role: "Téléprospection",
        period: "2023",
        description: ["Prospection téléphonique B2B/B2C.", "Vente de services et prise de rendez-vous qualifiés."],
      },
      {
        company: "SDI Formation",
        role: "Téléprospection",
        period: "2022",
        description: ["Vente de formations professionnelles.", "Gestion de planning et relance client."],
      },
      {
        company: "Groupe Transition Énergétique",
        role: "Téléprospection",
        period: "2021",
        description: ["Sensibilisation à la rénovation énergétique.", "Qualification de fiches prospects."],
      },
    ],
    langs: [
      { language: "Français", level: "Natif" },
      { language: "Anglais", level: "Opérationnel" },
      { language: "Hébreu", level: "Intermédiaire" },
      { language: "Espagnol", level: "Notions" },
      { language: "Arabe", level: "Notions" },
    ],
    interests: [
      "Mathématiques",
      "Lecture (Essais, Tech)",
      "Business & Stratégie",
      "Voyages",
      "IA & Web3",
      "Entrepreneuriat",
      "Sports de combat",
      "Musculation",
      "Padel",
      "Football",
      "E-sport",
      "Musique",
    ],
    nav: {
      profile: "Profil",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      engagements: "Engagements",
    },
    titles: {
      profile: "Profil",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      engagements: "Engagements & Responsabilités",
      otherExp: "Exp. Complémentaires",
      languages: "Langues",
      interests: "Centres d'intérêt",
      downloadCV: "Télécharger le CV",
      viewProject: "Voir le projet",
      footerPromoTitle: "Vous avez apprécié ce CV interactif ?",
      footerPromoDesc:
        "Vous souhaitez un portfolio similaire qui vous démarque, ou un site vitrine professionnel ? Je peux réaliser un site web sur-mesure qui vous correspond.",
      contactMe: "Me contacter",
      rightsReserved: "Tous droits réservés.",
      siteMeta: "Site web interactif • React & Tailwind",
      workStatus: "Alternance (En poste)",
    },
    hero: {
      nationality: "Français",
      age: "22 ans",
      location: "Saint-Mandé, France",
      driverLicense: "Permis B",
    },
  },

  // ================================================================= ENGLISH
  en: {
    profile:
      "Student in **Systems Administration, Security & Networks** at PST&B (3rd-year Bachelor, dual-degree with UPEC), with professional experience on projects combining **applied AI**, **automation**, **development**, **integration and infrastructure**.\n\nI enjoy operating **at the crossroads of business and tech**: starting from a real need (client, product, operational), framing it with an **analytical approach**, then turning it into a concrete, deployable solution (**AI agents**, **platforms**, **workflows**). In parallel, I have a solid business foundation: **sales**, **prospecting**, **partnerships**, **team management** and **operational leadership**.",
    typewriter: [
      "AI & Systems Developer",
      "Systems & Network Administration",
      "Math & Analytical Profile",
      "Turning needs into solutions",
    ],
    skills: [
      {
        category: "AI / Data / Mathematics",
        skills: [
          { name: "Applied Mathematics", level: 95, details: "Statistics, Probability, Algebra, Reasoning" },
          { name: "LLMs & AI Agents", level: 95, details: "Prompt Engineering, RAG, Orchestration, LangChain" },
          { name: "Machine Learning / NLP", level: 90, details: "Training, Fine-tuning, Evaluation, Iterations" },
          { name: "Python Data Science", level: 90, details: "NumPy, Pandas, Visualization, Cleaning" },
        ],
      },
      {
        category: "Development / Integration",
        skills: [
          { name: "Python Scripting & Automation", level: 95, details: "Complex scripts, Process automation" },
          { name: "APIs & Backend", level: 90, details: "REST, Webhooks, JSON/XML, Integrations" },
          { name: "Git & DevOps", level: 85, details: "Versioning, CI/CD, Documentation, PR" },
          { name: "Web Frontend", level: 70, details: "HTML/CSS, JavaScript, React (Basics)" },
        ],
      },
      {
        category: "Systems / Network / Security",
        skills: [
          { name: "Linux Administration", level: 85, details: "Services, Permissions, Bash, Diagnostics" },
          { name: "Networks & Protocols", level: 80, details: "TCP/IP, Subnetting, DNS, HTTP, SSH" },
          { name: "Security & Auth", level: 80, details: "TLS Certificates, SSO (IdP/SP), VPN" },
          { name: "Infrastructure", level: 75, details: "Docker, Virtualization (VMs), Cloud basics" },
        ],
      },
      {
        category: "Business / Sales / Management",
        skills: [
          { name: "Sales Strategy", level: 95, details: "Prospecting, Discovery, Closing, Negotiation" },
          { name: "Project Management", level: 90, details: "Scoping, Prioritization, Agile, Client Relations" },
          { name: "Data Sourcing", level: 90, details: "Enrichment, Segmentation, Scraping" },
          { name: "Management", level: 85, details: "Recruiting, Training, Team coaching" },
        ],
      },
    ],
    experiences: [
      {
        company: "ia-sup.fr",
        role: "Chief Technical Officer (CTO)",
        period: "Mar 2026 – Present",
        location: "Paris",
        companyUrl: "https://ia-sup.fr",
        description: [
          "End-to-end platform development from scratch.",
          "Research on the impact of AI on career development and the French labour market.",
          "Technical leadership: architecture, stack decisions, quality, delivery.",
        ],
      },
      {
        company: "Sairen",
        role: "AI Developer / Prompt Engineer (Apprenticeship)",
        period: "Nov 2025 – Mar 2026",
        location: "Paris (on-site)",
        description: [
          "Design and development of AI agents (chatbots & voice agents).",
          "Client relations / delivery: requirements gathering and implementation.",
          "Tool orchestration: function calls, APIs, webhooks.",
          "Voice infrastructure: real-time LiveKit integration.",
          "Quality: conversational testing, QA, edge cases.",
          "Partnerships & AI ecosystem: collaborations with Kyutai / Cekura.",
        ],
      },
      {
        company: "Sairen",
        role: "Sales Engineer",
        period: "Mar 2025 – Nov 2025",
        location: "Paris & surroundings",
        description: [
          "Prospecting and sales: cold call, qualification, closing.",
          "Data research and qualification: sourcing and segmentation.",
          "Running sales conversations: discovery, demo, objections.",
          "Need ↔ solution translation: technical coordination.",
        ],
      },
      {
        company: "TW3 Partners",
        role: "AI Internship",
        period: "Sep 2025 – Oct 2025",
        location: "Paris (on-site)",
        description: [
          "AI platform development: modules, testing, iterations.",
          "AI tech watch: stack, models, patterns.",
          "Deployment: server configuration, Google Cloud.",
          "Technical documentation and usage guides.",
        ],
      },
      {
        company: "$BERRY",
        role: "Co-founder / Web3 Developer",
        period: "Nov 2024 – Feb 2025",
        location: "",
        description: [
          "Launched a cryptocurrency with a multi-million-dollar market cap.",
          "Tokenomics design and liquidity management.",
          "Ecosystem design and product roadmap.",
        ],
      },
      {
        company: "Certinov",
        role: "Co-founder / Operations Director",
        period: "May 2024 – Sep 2024",
        location: "",
        description: [
          "Led a team of 20 telemarketers: coaching, scripts, reporting.",
          "Operational structuring: processes and objectives.",
        ],
      },
    ],
    engagements: [
      {
        company: "PSTB Event",
        role: "Association President",
        period: "Oct 2024 – Oct 2025",
        description: [
          "Led a team of 20 members, organized events.",
          "Ran conferences, roundtables, podcasts.",
          "End-to-end management: planning, logistics, communication.",
        ],
      },
      {
        company: "Crypto Club PST&B",
        role: "President / Founder",
        period: "2024",
        description: [
          "Built a web3 community: educational sessions.",
          "Organized meetups to energize the student community.",
        ],
      },
      {
        company: "Au cœur de la bonté",
        role: "Volunteer (academic tutoring)",
        period: "2024 – 2026",
        description: [
          "Supporting struggling students: methodology and follow-up.",
        ],
      },
    ],
    projects: [
      {
        name: "Tyerce",
        role: "Escrow platform + AI dispute resolution",
        description: [
          "Securing peer-to-peer transactions via escrow.",
          "AI model for dispute resolution (evidence/contract analysis).",
          "Product integration: processing pipeline, reasoned decisions.",
        ],
        link: "https://github.com/ID18030104/Tyerce-project-ai",
      },
      {
        name: "GEO Platform",
        role: "Generative Engine Optimization",
        description: [
          "Visibility platform for generative engines.",
          "Analysis, recommendations, optimization, tracking dashboard.",
        ],
      },
      {
        name: "Historical Figures",
        role: "Interactive site (Text + Voice)",
        description: [
          "Dialogue with historical figures recreated via AI.",
          "Work on identity/tone, consistency and user experience.",
        ],
      },
      {
        name: "AI Customer Relationship Workflows",
        role: "Automation",
        description: [
          "Workflows assisting customer relations (qualification, summary).",
          "Improved processing speed and consistency.",
        ],
      },
      {
        name: "AI Robot Dog",
        role: "Hardware & AI",
        description: [
          "End-to-end design: assembly, control logic.",
          "Integration of AI building blocks for behaviours.",
        ],
      },
      {
        name: "AI Robot Dog (V2)",
        role: "Hardware & AI",
        description: [
          "End-to-end design: assembly, control logic.",
          "Integration of AI building blocks for behaviours.",
        ],
      },
    ],
    education: [
      {
        school: "Paris School of Technology & Business (PST&B)",
        degree: "B3 Systems Administration, Security & Networks — Dual Degree",
        period: "2023 – 2026",
        details: [
          "Class valedictorian in B1 and B2.",
          "Systems, network, security, data/statistics, development.",
        ],
      },
      {
        school: "Generative AI Bootcamp",
        degree: "PST&B + Developers Institute (399h)",
        period: "May 2025 – Sep 2025",
        details: ["Python ML/DL/NLP, Prompt Engineering, LLMs, AI Agents."],
      },
      {
        school: "International Certifications",
        degree: "Estonian Business School, Regent's University London & University of New York in Prague",
        period: "Mar 2024, Mar 2025 & Mar 2026",
        details: [],
      },
      {
        school: "N&R Hatorah",
        degree: "French High School Diploma — Highest Honours",
        period: "2015 – 2022",
        details: ["[[20/20 in Mathematics]]", "17/20 in Physics-Chemistry", "Obtained in 2022"],
      },
    ],
    otherExp: [
      {
        company: "Clikweb",
        role: "Founder (website creation)",
        period: "2023",
        description: ["Prospecting, requirements gathering, creation, delivery."],
      },
      {
        company: "AMD Consulting",
        role: "Telemarketing",
        period: "2023",
        description: ["B2B/B2C phone prospecting.", "Service sales and qualified appointments."],
      },
      {
        company: "SDI Formation",
        role: "Telemarketing",
        period: "2022",
        description: ["Selling professional training.", "Scheduling and client follow-up."],
      },
      {
        company: "Groupe Transition Énergétique",
        role: "Telemarketing",
        period: "2021",
        description: ["Energy renovation awareness.", "Lead qualification."],
      },
    ],
    langs: [
      { language: "French", level: "Native" },
      { language: "English", level: "Professional" },
      { language: "Hebrew", level: "Intermediate" },
      { language: "Spanish", level: "Basics" },
      { language: "Arabic", level: "Basics" },
    ],
    interests: [
      "Mathematics",
      "Reading (Essays, Tech)",
      "Business & Strategy",
      "Travel",
      "AI & Web3",
      "Entrepreneurship",
      "Combat sports",
      "Weight training",
      "Padel",
      "Football",
      "E-sports",
      "Music",
    ],
    nav: {
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      engagements: "Engagements",
    },
    titles: {
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      engagements: "Engagements & Responsibilities",
      otherExp: "Other Experience",
      languages: "Languages",
      interests: "Interests",
      downloadCV: "Download CV",
      viewProject: "View project",
      footerPromoTitle: "Liked this interactive CV?",
      footerPromoDesc:
        "Looking for a portfolio that stands out, or a polished professional website? I can build a custom site tailored to you.",
      contactMe: "Contact me",
      rightsReserved: "All rights reserved.",
      siteMeta: "Interactive website • React & Tailwind",
      workStatus: "Apprenticeship (currently employed)",
    },
    hero: {
      nationality: "French",
      age: "22 years old",
      location: "Saint-Mandé, France",
      driverLicense: "Driver's License (B)",
    },
  },

  // =================================================================== 中文
  zh: {
    profile:
      "PST&B 大学**系统管理、安全与网络**专业三年级本科生（与 UPEC 双学位），拥有在企业中参与**应用人工智能**、**自动化**、**开发**、**集成与基础架构**项目的经验。\n\n我喜欢**在商业与技术的交汇处**工作：从真实需求（客户、产品、运营）出发，用**分析方法**进行框架梳理，然后将其转化为可落地、可部署的具体方案（**AI 代理**、**平台**、**工作流**）。与此同时，我拥有扎实的商业基础：**销售**、**拓客**、**合作伙伴关系**、**团队管理**以及**运营统筹**。",
    typewriter: [
      "AI 与系统开发工程师",
      "系统与网络管理",
      "数学与分析型背景",
      "将需求转化为解决方案",
    ],
    skills: [
      {
        category: "AI / 数据 / 数学",
        skills: [
          { name: "应用数学", level: 95, details: "统计学、概率、代数、推理" },
          { name: "LLMs 与 AI 代理", level: 95, details: "提示工程、RAG、编排、LangChain" },
          { name: "机器学习 / NLP", level: 90, details: "训练、微调、评估、迭代" },
          { name: "Python 数据科学", level: 90, details: "NumPy、Pandas、可视化、数据清洗" },
        ],
      },
      {
        category: "开发 / 集成",
        skills: [
          { name: "Python 脚本与自动化", level: 95, details: "复杂脚本、流程自动化" },
          { name: "API 与后端", level: 90, details: "REST、Webhooks、JSON/XML、集成" },
          { name: "Git 与 DevOps", level: 85, details: "版本管理、CI/CD、文档、PR" },
          { name: "Web 前端", level: 70, details: "HTML/CSS、JavaScript、React（基础）" },
        ],
      },
      {
        category: "系统 / 网络 / 安全",
        skills: [
          { name: "Linux 管理", level: 85, details: "服务、权限、Bash、排障" },
          { name: "网络与协议", level: 80, details: "TCP/IP、子网、DNS、HTTP、SSH" },
          { name: "安全与认证", level: 80, details: "TLS 证书、SSO（IdP/SP）、VPN" },
          { name: "基础架构", level: 75, details: "Docker、虚拟化（VM）、云基础" },
        ],
      },
      {
        category: "商业 / 销售 / 管理",
        skills: [
          { name: "商业策略", level: 95, details: "拓客、需求挖掘、成交、谈判" },
          { name: "项目管理", level: 90, details: "范围界定、优先级、敏捷、客户关系" },
          { name: "数据采集", level: 90, details: "信息丰富化、分群、爬取" },
          { name: "团队管理", level: 85, details: "招聘、培训、团队辅导" },
        ],
      },
    ],
    experiences: [
      {
        company: "ia-sup.fr",
        role: "首席技术官 (CTO)",
        period: "2026年3月 – 至今",
        location: "巴黎",
        companyUrl: "https://ia-sup.fr",
        description: [
          "从零开始端到端构建整个平台。",
          "研究 AI 对法国职业发展和就业市场的影响。",
          "技术负责人：架构、技术栈选型、质量与交付。",
        ],
      },
      {
        company: "Sairen",
        role: "AI 开发工程师 / 提示工程师（学徒制）",
        period: "2025年11月 – 2026年3月",
        location: "巴黎（现场）",
        description: [
          "设计并开发 AI 代理（聊天机器人与语音代理）。",
          "客户关系与交付：需求收集与落地。",
          "工具编排：函数调用、API、Webhooks。",
          "语音基础设施：LiveKit 实时集成。",
          "质量：对话测试、QA、边界情况。",
          "合作伙伴与 AI 生态：与 Kyutai / Cekura 合作。",
        ],
      },
      {
        company: "Sairen",
        role: "销售工程师",
        period: "2025年3月 – 2025年11月",
        location: "巴黎及周边",
        description: [
          "拓客与销售：陌生电话、资格甄别、成交。",
          "数据研究与筛选：信息采集与分群。",
          "商务洽谈：需求挖掘、演示、异议处理。",
          "需求 ↔ 方案的转译：技术协调。",
        ],
      },
      {
        company: "TW3 Partners",
        role: "AI 实习生",
        period: "2025年9月 – 2025年10月",
        location: "巴黎（现场）",
        description: [
          "AI 平台开发:模块、测试、迭代。",
          "AI 技术跟踪：技术栈、模型、模式。",
          "部署：服务器配置、Google Cloud。",
          "技术文档与使用指南。",
        ],
      },
      {
        company: "$BERRY",
        role: "联合创始人 / Web3 开发者",
        period: "2024年11月 – 2025年2月",
        location: "",
        description: [
          "推出一款市值达数百万的加密货币。",
          "设计代币经济模型并管理流动性。",
          "生态系统设计与产品路线图构建。",
        ],
      },
      {
        company: "Certinov",
        role: "联合创始人 / 运营总监",
        period: "2024年5月 – 2024年9月",
        location: "",
        description: [
          "管理 20 名电话销售团队：辅导、话术、报告。",
          "运营结构化：流程与目标。",
        ],
      },
    ],
    engagements: [
      {
        company: "PSTB Event",
        role: "学生社团主席",
        period: "2024年10月 – 2025年10月",
        description: [
          "带领 20 人团队，组织各类活动。",
          "策划讲座、圆桌论坛、播客节目。",
          "端到端管理：规划、后勤、传播。",
        ],
      },
      {
        company: "PST&B 加密货币俱乐部",
        role: "创始人 / 主席",
        period: "2024",
        description: [
          "打造 Web3 社群：开设教学课程。",
          "组织聚会以激发学生社区活力。",
        ],
      },
      {
        company: "Au cœur de la bonté",
        role: "志愿者（课业辅导）",
        period: "2024 – 2026",
        description: [
          "帮助学习困难的学生：方法论与跟进。",
        ],
      },
    ],
    projects: [
      {
        name: "Tyerce",
        role: "第三方托管平台 + AI 纠纷解决",
        description: [
          "通过托管机制保障个人之间的交易安全。",
          "基于 AI 的纠纷处理模型（证据/合同分析）。",
          "产品集成：处理流水线、有据可依的决策。",
        ],
        link: "https://github.com/ID18030104/Tyerce-project-ai",
      },
      {
        name: "GEO 平台",
        role: "生成式引擎优化",
        description: [
          "面向生成式搜索引擎的曝光平台。",
          "分析、推荐、优化与追踪仪表板。",
        ],
      },
      {
        name: "历史人物对话",
        role: "交互式站点（文本 + 语音）",
        description: [
          "通过 AI 重现并与历史人物对话。",
          "聚焦身份/语气、一致性与用户体验。",
        ],
      },
      {
        name: "AI 客户关系工作流",
        role: "自动化",
        description: [
          "辅助客户关系的工作流(资格评估、摘要)。",
          "提升处理速度与一致性。",
        ],
      },
      {
        name: "AI 机器狗",
        role: "硬件与 AI",
        description: [
          "端到端设计：组装、控制逻辑。",
          "集成 AI 模块以实现行为能力。",
        ],
      },
      {
        name: "AI 机器狗（第二版）",
        role: "硬件与 AI",
        description: [
          "端到端设计：组装、控制逻辑。",
          "集成 AI 模块以实现行为能力。",
        ],
      },
    ],
    education: [
      {
        school: "巴黎科技与商业学院 (PST&B)",
        degree: "B3 系统管理、安全与网络 — 双学位",
        period: "2023 – 2026",
        details: [
          "B1 与 B2 年级均为年级第一。",
          "系统、网络、安全、数据/统计、开发。",
        ],
      },
      {
        school: "生成式 AI 训练营",
        degree: "PST&B + Developers Institute（399 小时）",
        period: "2025年5月 – 2025年9月",
        details: ["Python ML/DL/NLP、提示工程、LLMs、AI 代理。"],
      },
      {
        school: "国际认证",
        degree: "爱沙尼亚商学院、伦敦摄政大学与布拉格纽约大学",
        period: "2024年3月、2025年3月 及 2026年3月",
        details: [],
      },
      {
        school: "N&R Hatorah",
        degree: "法国高中会考 — 最优等",
        period: "2015 – 2022",
        details: ["[[数学 20/20]]", "物理化学 17/20", "2022 年获得"],
      },
    ],
    otherExp: [
      {
        company: "Clikweb",
        role: "创始人（网站建设）",
        period: "2023",
        description: ["拓客、需求收集、制作与交付。"],
      },
      {
        company: "AMD Consulting",
        role: "电话销售",
        period: "2023",
        description: ["B2B/B2C 电话拓客。", "销售服务并安排合格见面。"],
      },
      {
        company: "SDI Formation",
        role: "电话销售",
        period: "2022",
        description: ["销售专业培训课程。", "日程管理与客户回访。"],
      },
      {
        company: "Groupe Transition Énergétique",
        role: "电话销售",
        period: "2021",
        description: ["普及节能改造意识。", "潜在客户资料筛选。"],
      },
    ],
    langs: [
      { language: "法语", level: "母语" },
      { language: "英语", level: "职业流利" },
      { language: "希伯来语", level: "中级" },
      { language: "西班牙语", level: "基础" },
      { language: "阿拉伯语", level: "基础" },
    ],
    interests: [
      "数学",
      "阅读（评论、科技）",
      "商业与策略",
      "旅行",
      "AI 与 Web3",
      "创业",
      "格斗运动",
      "健身",
      "匹克球 (Padel)",
      "足球",
      "电子竞技",
      "音乐",
    ],
    nav: {
      profile: "简介",
      skills: "技能",
      experience: "经历",
      projects: "项目",
      education: "学历",
      engagements: "参与",
    },
    titles: {
      profile: "个人简介",
      skills: "技能",
      experience: "职业经历",
      projects: "项目",
      education: "教育背景",
      engagements: "社会参与与责任",
      otherExp: "其他经历",
      languages: "语言",
      interests: "兴趣爱好",
      downloadCV: "下载简历",
      viewProject: "查看项目",
      footerPromoTitle: "喜欢这份交互式简历吗？",
      footerPromoDesc:
        "想要一份同样出彩的作品集，或是一个专业的品牌展示站点？我可以为您量身打造。",
      contactMe: "联系我",
      rightsReserved: "保留所有权利。",
      siteMeta: "交互式网站 • React & Tailwind",
      workStatus: "学徒（在职）",
    },
    hero: {
      nationality: "法国籍",
      age: "22 岁",
      location: "圣芒代，法国",
      driverLicense: "B 类驾照",
    },
  },
};
