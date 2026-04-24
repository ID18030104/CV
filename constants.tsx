import React from 'react';
import { 
  ExperienceItem, 
  EducationItem, 
  ProjectItem, 
  SkillCategory, 
  ContactInfo, 
  Language 
} from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Car,
  Brain,
  Code2,
  Server,
  Briefcase,
  Users,
  GraduationCap,
  Globe,
  Dumbbell
} from 'lucide-react';

export const CONTACT: ContactInfo = {
  phone: "+33 7 69 50 23 70",
  email: "isaacderhy18@gmail.com",
  linkedin: "linkedin.com/in/isaac-derhy-52628a217/",
  github: "github.com/ID18030104",
  location: "Saint-Mandé, France",
  driverLicense: "Permis B"
};

export const TYPEWRITER_STRINGS = [
  "Développeur IA & Systèmes",
  "Administration Systèmes & Réseaux",
  "Profil Mathématiques & Analytique",
  "Transformation de besoins en solutions"
];

export const PROFILE_TEXT = `Étudiant en **Administration Systèmes, Sécurité & Réseaux** à PST&B (en Bachelor 3, en double diplôme avec l'UPEC), avec une expérience en entreprise sur des projets mêlant **IA appliquée**, **automatisation**, **développement**, **intégration et infrastructure**.

J’aime évoluer **à la croisée des chemins entre l’entreprise et la tech** : partir d’un besoin réel (client, produit, opérationnel), le cadrer par une **approche analytique**, puis le transformer en solution concrète et déployable (**agents IA**, **plateformes**, **workflows**). En parallèle, j’ai un socle business solide : **vente**, **prospection**, **partenariats**, **gestion d’équipe** et **pilotage opérationnel**.`;

export const SKILLS: SkillCategory[] = [
  {
    category: "IA / Data / Mathématiques",
    skills: [
      { name: "Mathématiques Appliquées", level: 95, details: "Statistiques, Probabilités, Algèbre, Raisonnement" },
      { name: "LLMs & Agents AI", level: 95, details: "Prompt Engineering, RAG, Orchestration, LangChain" },
      { name: "Machine Learning / NLP", level: 90, details: "Training, Fine-tuning, Evaluation, Itérations" },
      { name: "Python Data Science", level: 90, details: "NumPy, Pandas, Visualisation, Nettoyage" }
    ]
  },
  {
    category: "Développement / Intégration",
    skills: [
      { name: "Python Scripting & Auto", level: 95, details: "Scripts complexes, Automatisation de process" },
      { name: "APIs & Backend", level: 90, details: "REST, Webhooks, JSON/XML, Intégrations" },
      { name: "Git & DevOps", level: 85, details: "Versioning, CI/CD, Documentation, PR" },
      { name: "Web Frontend", level: 70, details: "HTML/CSS, JavaScript, React (Notions)" }
    ]
  },
  {
    category: "Systèmes / Réseau / Sécurité",
    skills: [
      { name: "Administration Linux", level: 85, details: "Services, Permissions, Bash, Diagnostic" },
      { name: "Réseaux & Protocoles", level: 80, details: "TCP/IP, Subnetting, DNS, HTTP, SSH" },
      { name: "Sécurité & Auth", level: 80, details: "Certificats TLS, SSO (IdP/SP), VPN" },
      { name: "Infrastructure", level: 75, details: "Docker, Virtualisation (VMs), Cloud basics" }
    ]
  },
  {
    category: "Business / Sales / Management",
    skills: [
      { name: "Stratégie Commerciale", level: 95, details: "Prospection, Discovery, Closing, Négociation" },
      { name: "Gestion de Projet", level: 90, details: "Cadrage, Priorisation, Agile, Relation Client" },
      { name: "Data Sourcing", level: 90, details: "Enrichissement, Segmentation, Scraping" },
      { name: "Management", level: 85, details: "Recrutement, Formation, Coaching équipe" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "ia-sup.fr",
    role: "Directeur Technique (CTO)",
    period: "Mars 2026 – Présent",
    location: "Paris",
    description: [
      "Développement de la plateforme de A à Z (end-to-end).",
      "Recherche sur l’impact de l’IA sur le développement de carrière et le marché du travail en France.",
      "Pilotage technique : architecture, choix de stack, qualité, delivery."
    ]
  },
  {
    company: "Sairen",
    role: "AI Developer / Prompt Engineer (Alternance)",
    period: "Nov. 2025 – Mars 2026",
    location: "Paris (sur site)",
    description: [
      "Conception et développement d’agents IA (chatbots & voice agents).",
      "Relation client / delivery : recueil de besoin et implémentation.",
      "Orchestration d’outils : appels de fonctions, API, webhooks.",
      "Infrastructure voix : intégration LiveKit temps réel.",
      "Qualité : tests conversationnels, QA, cas limites.",
      "Partenariats & écosystème IA : collaborations Kyutai / Cekura."
    ]
  },
  {
    company: "Sairen",
    role: "Sales Engineer",
    period: "Mars 2025 – Nov. 2025",
    location: "Paris & périphérie",
    description: [
      "Prospection et vente : cold call, qualification, closing.",
      "Recherche et qualification de data : sourcing et segmentation.",
      "Conduite d’échanges commerciaux : discovery, démo, objections.",
      "Traduction besoin ↔ solution : coordination technique."
    ]
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
      "Documentation technique et guides d'usage."
    ]
  },
  {
    company: "$BERRY",
    role: "Co-fondateur / Développeur Web3",
    period: "Nov. 2024 – Fév. 2025",
    location: "",
    description: [
      "Création d’une cryptomonnaie avec une market cap de plusieurs millions.",
      "Conception de la tokenomics et gestion de la liquidité.",
      "Design de l’écosystème et construction de la roadmap produit."
    ]
  },
  {
    company: "Certinov",
    role: "Cofondateur / Directeur opérationnel",
    period: "Mai 2024 – Sept. 2024",
    location: "",
    description: [
      "Pilotage de 20 téléprospecteurs : coaching, scripts, reporting.",
      "Structuration opérationnelle : process et objectifs."
    ]
  }
];

export const ENGAGEMENTS: ExperienceItem[] = [
  {
    company: "PSTB Event",
    role: "Président d’association",
    period: "Oct. 2024 – Oct. 2025",
    description: [
      "Direction d’une équipe de 20 membres, organisation d’événements.",
      "Pilotage de conférences, tables rondes, podcasts.",
      "Gestion de bout en bout : planning, logistique, communication."
    ]
  },
  {
    company: "Crypto Club PST&B",
    role: "Président / Fondateur",
    period: "2024",
    description: [
      "Création d’une communauté web3 : sessions pédagogiques.",
      "Organisation de rencontres pour fédérer la dynamique étudiante."
    ]
  },
  {
    company: "Au cœur de la bonté",
    role: "Bénévole (soutien scolaire)",
    period: "2024 – 2026",
    description: [
      "Accompagnement d’élèves en difficulté : méthodologie et suivi."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "Tyerce",
    role: "Plateforme d’escrow + IA litiges",
    description: [
      "Sécurisation de transactions entre particuliers via escrow.",
      "Modèle IA de résolution de litiges (analyse preuves/contrats).",
      "Intégration produit : pipeline de traitement, décision argumentée."
    ],
    link: "https://github.com/ID18030104/Tyerce-project-ai"
  },
  {
    name: "Plateforme GEO",
    role: "Generative Engine Optimization",
    description: [
      "Plateforme de visibilité dans les moteurs génératifs.",
      "Analyse, recommandations, optimisation, dashboard de suivi."
    ]
  },
  {
    name: "Personnages Historiques",
    role: "Site interactif (Texte + Vocal)",
    description: [
      "Dialogue avec personnages historiques recréés via IA.",
      "Travail sur identité/ton, cohérence et expérience utilisateur."
    ]
  },
  {
    name: "Workflows IA Relation Client",
    role: "Automatisation",
    description: [
      "Workflows pour assister la relation client (qualification, résumé).",
      "Amélioration de la vitesse de traitement et cohérence."
    ]
  },
  {
    name: "Robot-chien IA",
    role: "Hardware & AI",
    description: [
      "Conception de bout en bout : assemblage, logique de contrôle.",
      "Intégration de briques IA pour comportements."
    ]
  },
  {
    name: "Robot-chien IA (Suite)",
    role: "Hardware & AI",
    description: [
      "Conception de bout en bout : assemblage, logique de contrôle.",
      "Intégration de briques IA pour comportements."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Paris School of Technology & Business (PST&B)",
    degree: "B3 Administration Systèmes, Sécurité & Réseaux — Double Diplôme",
    period: "2023 – 2026",
    details: [
      "Major de promo en B1 et B2.",
      "Systèmes, réseau, sécurité, data/statistiques, développement."
    ]
  },
  {
    school: "Bootcamp Generative AI",
    degree: "PST&B + Developers Institute (399h)",
    period: "Mai 2025 – Sept. 2025",
    details: ["Python ML/DL/NLP, Prompt Engineering, LLMs, Agents IA."]
  },
  {
    school: "Certifications Internationales",
    degree: "Estonian Business School, Regent's University London & University of New York in Prague",
    period: "Mars 2024, Mars 2025 & Mars 2026",
    details: []
  },
  {
    school: "N&R Hatorah",
    degree: "Baccalauréat — Mention Très Bien",
    period: "2015 – 2022",
    details: ["[[20/20 en Mathématiques]]", "17/20 en Physique-Chimie", "Obtenu en 2022"]
  }
];

export const OTHER_EXP: ExperienceItem[] = [
  {
    company: "Clikweb",
    role: "Fondateur (création de sites)",
    period: "2023",
    description: ["Prospection, recueil de besoin, création, livraisons."]
  },
  {
    company: "AMD Consulting",
    role: "Téléprospection",
    period: "2023",
    description: ["Prospection téléphonique B2B/B2C.", "Vente de services et prise de rendez-vous qualifiés."]
  },
  {
    company: "SDI Formation",
    role: "Téléprospection",
    period: "2022",
    description: ["Vente de formations professionnelles.", "Gestion de planning et relance client."]
  },
  {
    company: "Groupe Transition Énergétique",
    role: "Téléprospection",
    period: "2021",
    description: ["Sensibilisation à la rénovation énergétique.", "Qualification de fiches prospects."]
  }
];

export const LANGUAGES: Language[] = [
  { language: "Français", level: "Natif" },
  { language: "Anglais", level: "Opérationnel" },
  { language: "Hébreu", level: "Intermédiaire" },
  { language: "Espagnol", level: "Notions" },
  { language: "Arabe", level: "Notions" }
];

export const INTERESTS = [
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
  "Musique"
];

export const NAV_LINKS = [
  { label: 'Profil', href: '#profile', icon: <Users size={16} /> },
  { label: 'Compétences', href: '#skills', icon: <Brain size={16} /> },
  { label: 'Expériences', href: '#experience', icon: <Briefcase size={16} /> },
  { label: 'Projets', href: '#projects', icon: <Code2 size={16} /> },
  { label: 'Formation', href: '#education', icon: <GraduationCap size={16} /> },
  { label: 'Engagements', href: '#engagements', icon: <Globe size={16} /> },
];