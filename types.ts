export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface ProjectItem {
  name: string;
  role?: string;
  description: string[];
  link?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  details: string;
}

export interface SkillCategory {
  category: string;
  icon?: any; // For Lucide icon mapping
  skills: SkillItem[];
}

export interface Language {
  language: string;
  level: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  driverLicense: string;
}