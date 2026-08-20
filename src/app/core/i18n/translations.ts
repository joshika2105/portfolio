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
      badge: 'Open to new opportunities',
      namePrefix: "Hi, I'm ",
      subtitle: 'Computer Science Student · Software Developer',
      description:
        'A creative developer who loves building modern applications and diving into new technologies.',
      ctaPrimary: 'GitHub',
      ctaSecondary: 'CV',
      cvUrl: 'cv_SarahJoshikaNelson_en.pdf'
    },
    about: {
      eyebrow: 'Get to know me',
      title: 'About Me',
      paragraphs: [
        "I'm currently studying Computer Science at HTL Leonding in Austria, where I've developed a strong interest in software development and modern technologies.",
        'I like building things from scratch and constantly refining how I work — to me, programming is just as much about problem-solving as it is about craft.',
        'What really drives me is combining creativity with code: figuring out how good design and solid engineering come together to build something people genuinely enjoy using.',
      ],
      learning: {
        label: 'Currently Learning',
        items: ['Python', 'Swift', 'Blender', '.NET', 'UI/UX Design'],
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
      downloadLabel: 'Download ZIP',
      viewAll: 'View All Projects',
      allTitle: 'All Projects',
      allSubtitle: 'Everything I’ve built so far, in one place.',
      backHome: 'Back to home',
      items: [
        {
          name: 'Lumeso Website',
          description:
            "Marketing website for Lumeso, built with Vue, GSAP animations, and Storyblok as a headless CMS. Focused on smooth scroll-based animations and a clean, componentized structure that let the team manage content independently.",
          tech: ['Vue', 'GSAP', 'Storyblok'],
          imageUrl: 'projects/lumeso.png',
          demoUrl: 'https://www.lumeso.com',
        },
        {
          name: 'FX Address Book',
          description:
            "A desktop address book built with JavaFX, following the MVC pattern with a singleton service layer, observable lists, and Java's Stream API. Includes live search and filtering, input validation with custom exceptions, and statistics like contact count and average age that update automatically. Later extended to persist contacts via JDBC with an Apache Derby database.",
          tech: ['Java', 'JavaFX', 'JDBC', 'Apache Derby'],
          imageUrl: 'projects/DemoContacts.gif',
          downloadUrl: '/AddressBook.zip',
        },
        {
          name: 'Digital Accessibility',
          description:
            "Internship project at BMD Software: a prototype for accessible PDF processing, built and tested with two different approaches — one in Angular and Python, another integrated into BMD's BMDgo product using C#.",
          tech: ['Python', 'FastAPI', 'Angular', 'TypeScript', 'PDF Parsing', 'C#'],
          imageUrl: 'projects/BMD.png',
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
          subtitle: 'Cashier (marginal employment)',
          description:
            'Worked as a cashier on a marginal part-time basis, building up communication, responsibility, and teamwork skills.',
        },
        {
          sortKey: '2026-07',
          period: 'July 2026',
          title: 'Lumeso',
          subtitle: 'Junior Frontend Developer',
          duration: '4 weeks',
          area: 'Web Development',
          description:
            "Worked on the company's marketing website as a Junior Frontend Developer and built a few smaller features for them along the way.",
        },
        {
          sortKey: '2026-08',
          period: 'August 2026',
          title: 'BMD Software',
          subtitle: 'Intern',
          duration: '4 weeks',
          area: 'Digital Accessibility',
          description: 'Developed two accessibility prototypes (Angular/Python and C# for BMD Go) to make PDF content accessible for screenreaders and assistive technologies. Utilized LLMs to optimize PDF readability, and contributed by building the backend data processing pipeline, structuring PDF data, and implementing the accessible front-end presentation.'
        },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: "Let's Connect",
      subtitle:
        'Got a project in mind, an opportunity to share, or just want to say hi? My inbox is always open.',
      emailLabel: 'Email',
      instagramLabel: 'Instagramm',
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
      badge: 'Offen für neue Möglichkeiten',
      namePrefix: 'Hi, ich bin',
      subtitle: 'Informatik-Student · Softwareentwickler',
      description:
        'Ein kreativer Entwickler, der gerne moderne Anwendungen baut und neue Technologien erkundet.',
      ctaPrimary: 'GitHub',
      ctaSecondary: 'Lebenslauf',
      cvUrl: 'cv_SarahJoshikaNelson_de.pdf'
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Über mich',
      paragraphs: [
        'Ich studiere aktuell Informatik an der HTL Leonding in Österreich und habe dabei ein starkes Interesse an Softwareentwicklung und modernen Technologien entwickelt.',
        'Ich baue gerne Dinge von Grund auf und verbessere laufend meine Arbeitsweise — für mich ist Programmieren genauso Problemlösung wie Handwerk.',
        'Was mich wirklich antreibt, ist die Verbindung von Kreativität und Code: herauszufinden, wie gutes Design und solide Technik zusammenkommen, um etwas zu bauen, das Menschen wirklich gerne nutzen.',
      ],
      learning: {
        label: 'Lerne gerade',
        items: ['Python', 'Swift', 'Blender', '.NET', 'UI/UX Design'],
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
      downloadLabel: 'ZIP herunterladen',
      viewAll: 'Alle Projekte ansehen',
      allTitle: 'Alle Projekte',
      allSubtitle: 'Alles, was ich bisher gebaut habe, an einem Ort.',
      backHome: 'Zurück zur Startseite',
      items: [
        {
          name: 'Lumeso Website',
          description:
            'Marketing-Website für Lumeso, umgesetzt mit Vue, GSAP-Animationen und Storyblok als Headless-CMS.',
          tech: ['Vue', 'GSAP', 'Storyblok'],
          imageUrl: 'projects/lumeso.png',
          demoUrl: 'https://www.lumeso.com',
        },
        {
          name: 'FX Address Book',
          description:
            "Eine Desktop-Adressbuch-Anwendung mit JavaFX, umgesetzt nach dem MVC-Pattern mit einem Singleton-Service-Layer, Observable Lists und Java's Stream API. Später erweitert um Persistierung der Kontakte via JDBC mit einer Apache-Derby-Datenbank.",
          tech: ['Java', 'JavaFX', 'JDBC', 'Apache Derby'],
          imageUrl: 'projects/DemoContacts.gif',
          downloadUrl: '/AddressBook.zip',
        },
        {
          name: 'Digitale Barrierefreiheit',
          description:
            'Praktikumsprojekt: Entwicklung von zwei Prototypen zur Barrierefreiheit (Angular/Python und C# für BMD Go), um PDF-Inhalte für Screenreader und assistive Technologien zugänglich zu machen. Einsatz von LLMs zur Optimierung der PDF-Lesbarkeit. Meine Beiträge: Aufbau der Backend-Datenverarbeitung, Strukturierung von PDF-Daten und Umsetzung der barrierefreien Frontend-Darstellung.',
          tech: ['Python', 'FastAPI', 'Angular', 'TypeScript', 'PDF Parsing', 'C#'],
          imageUrl: 'projects/BMD.png',
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
          subtitle: 'Kassiererin (geringfügig)',
          description:
            'Geringfügige Beschäftigung als Kassiererin, bei der ich Kommunikation, Verantwortung und Teamfähigkeit weiterentwickelt habe.',
        },
        {
          sortKey: '2026-07',
          period: 'Juli 2026',
          title: 'Lumeso',
          subtitle: 'Junior Frontend Developerin',
          duration: '4 Wochen',
          area: 'Webentwicklung',
          description:
            'Habe als Junior Frontend Developerin an der Marketing-Website des Unternehmens gearbeitet und nebenbei ein paar kleinere Funktionen für sie entwickelt.',
        },
        {
          sortKey: '2026-08',
          period: 'August 2026',
          title: 'BMD Software',
          subtitle: 'Praktikantin',
          duration: '4 Wochen',
          area: 'Digitale Barrierefreiheit',
          description:
            'Eigenes Projekt im Bereich digitale Barrierefreiheit: Prototypen entwickelt und diese gemeinsam mit einer Partnerin teilweise in BMDgo integriert.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt aufnehmen',
      title: 'Lass uns verbinden',
      subtitle:
        'Hast du ein Projekt, eine Idee oder willst einfach nur Hallo sagen? Meld dich, ich freu mich drauf.',
      emailLabel: 'E-Mail',
      instagramLabel: 'Instagram',
      phoneLabel: 'Telefon',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};