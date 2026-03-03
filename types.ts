
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  architectureApproach?: string;
  impact?: string;
  challenges?: string[];
  solutions?: string[];
  tags: string[];
  link?: string;
  imageUrl: string;
  screenshots?: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  details?: string[];
  techStack?: string[];
  impact?: string;
}

export interface USPItem {
  id: number;
  title: string;
  description: string;
  icon: 'Zap' | 'Brain' | 'Target' | 'Globe'; // Lucide icon names mapped
}

export interface Course {
  id: number;
  title: string;
  provider: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  USP = 'usp',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  COURSES = 'courses',
  CONTACT = 'contact',
}
