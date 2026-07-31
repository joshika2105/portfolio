import { Language, Translations } from './language.types';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for internships',
      namePrefix: "Hi, I'm ",
      subtitle: 'Computer Science Student · Software Developer',
      description:
        'A creative developer passionate about building modern applications and exploring new technologies.',
      ctaPrimary: 'View GitHub',
      ctaSecondary: 'Download CV',
    },
    about: {
      eyebrow: 'Get to know me',
      title: 'About Me',
      paragraphs: [
        "I'm a Computer Science student at HTL Leonding in Austria, with a strong interest in software development and modern technologies.",
        'I enjoy building applications from the ground up and constantly improving my skills — for me, programming is as much about problem-solving as it is about craft.',
        'What drives me is combining creativity with code: I like exploring how thoughtful design and solid engineering come together to make something people actually enjoy using.',
      ],
      learning: {
        label: 'Currently Learning',
        items: ['Vue', 'Swift', 'Blender', '.NET', 'UI/UX Design'],
      },
    },
    skills: {
      eyebrow: 'What I work with',
      title: 'My Skills',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Featured Projects',
      githubLabel: 'GitHub',
      demoLabel: 'Live Demo',
      viewAll: 'View All Projects',
      allTitle: 'All Projects',
      allSubtitle: 'Everything I’ve built so far, in one place.',
      backHome: 'Back to home',
      items: [
        {
          name: 'TaskFlow',
          description:
            'A collaborative task management platform that helps small teams organize projects, track deadlines, and stay in sync in real time.',
          tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
          githubUrl: '#',
          demoUrl: '#',
        },
        {
          name: 'WeatherPulse',
          description:
            'A clean weather dashboard that pulls live forecasts and visualizes trends for any city, built with a focus on speed and simplicity.',
          tech: ['React', 'TypeScript', 'Tailwind CSS'],
          githubUrl: '#',
          demoUrl: '#',
        },
        {
          name: 'DevNotes',
          description:
            'A minimalist note-taking app for developers, with Markdown support and syntax-highlighted code snippets baked in.',
          tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
          githubUrl: '#',
          demoUrl: '#',
        },
      ],
    },
    timeline: {
      eyebrow: 'The journey so far',
      title: 'Experience & Education',
      educationLabel: 'Education',
      experienceLabel: 'Experience',
      education: [
        {
          sortKey: '2015-09',
          period: '2015 – 2019',
          title: 'VS10 Grillparzer Volksschule',
          description: 'Primary education and foundational learning.',
        },
        {
          sortKey: '2019-09',
          period: '2019 – 2023',
          title: 'Akademisches Gymnasium',
          duration: '4 years',
          description: 'General education and development of academic skills.',
        },
        {
          sortKey: '2023-09',
          period: '2023 – Present',
          title: 'HTL Leonding – Informatik',
          duration: 'Currently studying',
          description:
            'Computer science education focusing on software development, programming, and modern technologies.',
        },
      ],
      experience: [
        {
          sortKey: '2024-08',
          period: 'August 2024 – June 2025',
          title: 'BILLA PLUS',
          subtitle: 'Saturday employee',
          description:
            'Part-time work experience while developing communication, responsibility, and teamwork skills.',
        },
        {
          sortKey: '2026-07',
          period: 'July 2026',
          title: 'Lumeso',
          subtitle: 'Intern',
          duration: '4 weeks',
          area: 'Web Development',
          description: 'Placeholder text for internship tasks and projects.',
        },
        {
          sortKey: '2026-08',
          period: 'August 2026',
          title: 'BMD Software',
          subtitle: 'Intern',
          duration: '4 weeks',
          description: 'Placeholder text for upcoming internship experience.',
        },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: "Let's Connect",
      subtitle:
        "Whether you have a project, an opportunity, or just want to say hello, I'd love to hear from you.",
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      phoneLabel: 'Phone',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
      education: 'Ausbildung',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Offen für Praktika',
      namePrefix: 'Hi, ich bin',
      subtitle: 'Informatik-Student · Softwareentwickler',
      description:
        'Ein kreativer Entwickler mit Leidenschaft für moderne Anwendungen und neue Technologien.',
      ctaPrimary: 'GitHub ansehen',
      ctaSecondary: 'Lebenslauf laden',
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Über mich',
      paragraphs: [
        'Ich bin Informatik-Student an der HTL Leonding in Österreich mit großem Interesse an Softwareentwicklung und modernen Technologien.',
        'Ich entwickle gerne Anwendungen von Grund auf und erweitere laufend meine Fähigkeiten — für mich ist Programmieren ebenso Problemlösung wie Handwerk.',
        'Mich treibt an, Kreativität mit Code zu verbinden: durchdachtes Design und solide Technik zusammenzubringen, um etwas zu schaffen, das Menschen wirklich gerne nutzen.',
      ],
      learning: {
        label: 'Lerne gerade',
        items: ['Vue', 'Swift', 'Blender', '.NET', 'UI/UX Design'],
      },
    },
    skills: {
      eyebrow: 'Womit ich arbeite',
      title: 'Meine Skills',
    },
    projects: {
      eyebrow: 'Ausgewählte Arbeiten',
      title: 'Ausgewählte Projekte',
      githubLabel: 'GitHub',
      demoLabel: 'Live-Demo',
      viewAll: 'Alle Projekte ansehen',
      allTitle: 'Alle Projekte',
      allSubtitle: 'Alles, was ich bisher gebaut habe, an einem Ort.',
      backHome: 'Zurück zur Startseite',
      items: [
        {
          name: 'TaskFlow',
          description:
            'Eine kollaborative Aufgabenverwaltungsplattform, mit der kleine Teams Projekte organisieren, Fristen verfolgen und in Echtzeit synchron bleiben.',
          tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
          githubUrl: '#',
          demoUrl: '#',
        },
        {
          name: 'WeatherPulse',
          description:
            'Ein übersichtliches Wetter-Dashboard, das aktuelle Vorhersagen abruft und Trends für jede Stadt visualisiert — mit Fokus auf Geschwindigkeit und Einfachheit.',
          tech: ['React', 'TypeScript', 'Tailwind CSS'],
          githubUrl: '#',
          demoUrl: '#',
        },
        {
          name: 'DevNotes',
          description:
            'Eine minimalistische Notiz-App für Entwickler mit Markdown-Unterstützung und farblich hervorgehobenen Code-Snippets.',
          tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
          githubUrl: '#',
          demoUrl: '#',
        },
      ],
    },
    timeline: {
      eyebrow: 'Mein bisheriger Weg',
      title: 'Erfahrung & Ausbildung',
      educationLabel: 'Ausbildung',
      experienceLabel: 'Erfahrung',
      education: [
        {
          sortKey: '2015-09',
          period: '2015 – 2019',
          title: 'VS10 Grillparzer Volksschule',
          description: 'Grundschulbildung und grundlegendes Lernen.',
        },
        {
          sortKey: '2019-09',
          period: '2019 – 2023',
          title: 'Akademisches Gymnasium',
          duration: '4 Jahre',
          description: 'Allgemeinbildung und Entwicklung schulischer Fähigkeiten.',
        },
        {
          sortKey: '2023-09',
          period: '2023 – Heute',
          title: 'HTL Leonding – Informatik',
          duration: 'Zurzeit studierend',
          description:
            'Informatikausbildung mit Schwerpunkt auf Softwareentwicklung, Programmierung und modernen Technologien.',
        },
      ],
      experience: [
        {
          sortKey: '2024-08',
          period: 'August 2024 – Juni 2025',
          title: 'BILLA PLUS',
          subtitle: 'Samstagsaushilfe',
          description:
            'Teilzeitarbeit, bei der ich Kommunikation, Verantwortung und Teamfähigkeit weiterentwickelt habe.',
        },
        {
          sortKey: '2026-07',
          period: 'Juli 2026',
          title: 'Lumeso',
          subtitle: 'Praktikantin',
          duration: '4 Wochen',
          area: 'Webentwicklung',
          description: 'Platzhaltertext für Praktikumsaufgaben und -projekte.',
        },
        {
          sortKey: '2026-08',
          period: 'August 2026',
          title: 'BMD Software',
          subtitle: 'Praktikantin',
          duration: '4 Wochen',
          description: 'Platzhaltertext für das bevorstehende Praktikum.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt aufnehmen',
      title: 'Lass uns verbinden',
      subtitle:
        'Ob Projekt, Praktikumsmöglichkeit oder einfach nur ein Hallo — ich freue mich, von dir zu hören.',
      emailLabel: 'E-Mail',
      githubLabel: 'GitHub',
      phoneLabel: 'Telefon',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};
