import { Project } from '../data/project.model';
import { TimelineEntry } from '../data/timeline.model';

export type Language = 'en' | 'de';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    badge: string;
    namePrefix: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    learning: { label: string; items: string[] };
  };
  skills: {
    eyebrow: string;
    title: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    githubLabel: string;
    demoLabel: string;
    viewAll: string;
    allTitle: string;
    allSubtitle: string;
    backHome: string;
    items: Project[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    educationLabel: string;
    experienceLabel: string;
    education: TimelineEntry[];
    experience: TimelineEntry[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    githubLabel: string;
    phoneLabel: string;
  };
  footer: {
    rights: string;
  };
}
