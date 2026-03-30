import { ElementType } from 'react';
import {
  JavaScript, TypeScript, React as ReactLogo, NextJs, Angular,
  CSS3, Sass, TailwindCSS, Bootstrap4,
  NodeJs, ExpressJsDark, PHP, SymfonyDark,
  MySQL, Oracle, MongoDB,
  Java, Spring,
  Android, Xamarin, CSharp, Python,
  Linux, Bash, Git, Docker, Kubernetes,
  VisualStudioCode,
  Jira, Figma
} from 'developer-icons'

export interface SkillLogo {
  src: string;
  className?: string;
}

export interface Skill {
  name: string;
  level: string | string[];
  logos?: (ElementType | SkillLogo)[];
}

export interface SkillCategory {
  idStart: number;
  title: string;
  skills: Skill[];
  className?: string;
  isLeft?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    idStart: 2,
    title: 'Front-End :',
    skills: [
      {
        name: 'Langages',
        logos: [JavaScript, TypeScript],
        level: 'JS/TS',
      },
      {
        name: 'Frameworks',
        logos: [ReactLogo, NextJs, Angular],
        level: 'React, Next.js, Angular',
      },
      {
        name: 'Intégration',
        logos: [CSS3, Sass, Bootstrap4, TailwindCSS],
        level: ['CSS/SCSS', 'Bootstrap4, Tailwind'],
      },
    ],
    className: 'bg-gradient-to-br from-(--color-secondary) via-60% via-(--color-secondary) to-(--color)',
  },
  {
    idStart: 5,
    title: 'Back-End & Data :',
    skills: [
      {
        name: 'Node & Express',
        logos: [NodeJs, ExpressJsDark],
        level: 'Node.js, Express JS',
      },
      {
        name: 'PHP',
        logos: [PHP, SymfonyDark],
        level: 'PHP, Symfony',
      },
      {
        name: 'Java',
        logos: [Java, Spring],
        level: 'Java, Spring Boot, JavaFX',
      },
      {
        name: 'BDD',
        logos: [MySQL, Oracle, MongoDB],
        level: ['MySQL, Oracle SQL', 'MongoDB'],
      },
    ],
    className: 'bg-gradient-to-bl from-(--color-secondary) via-60% via-(--color-secondary) to-(--color)',
    isLeft: true,
  },
  {
    idStart: 9,
    title: 'Mobile & Scripting :',
    skills: [
      {
        name: 'Scripting',
        logos: [Python, Bash],
        level: 'Python, Bash',
      },
      {
        name: 'Mobile',
        logos: [Android, Xamarin, CSharp],
        level: 'Android Java, Xamarin C#',
      },
    ],
    className: 'bg-gradient-to-br from-(--color-secondary) via-60% via-(--color-secondary) to-(--color)',
  },
  {
    idStart: 11,
    title: 'DevOps & Outils :',
    skills: [
      {
        name: 'DevOps',
        logos: [Docker, Kubernetes],
        level: 'Docker, Kube',
      },
      {
        name: 'Système & Git',
        logos: [Linux, { src: '/logo/proxmox.png' }, Git],
        level: 'Linux, Proxmox, Git',
      },
      {
        name: 'IDE',
        logos: [VisualStudioCode, { src: '/logo/intellij-idea.png' }],
        level: 'VS Code, IntelliJ IDEA',
      },
      {
        name: 'Task & design',
        logos: [Jira, Figma],
        level: 'Jira, Figma',
      }
    ],
    className: 'bg-gradient-to-bl from-(--color-secondary) via-60% via-(--color-secondary) to-(--color)',
    isLeft: true,
  },
  {
    idStart: 15,
    title: 'Langues :',
    skills: [
      {
        name: 'Anglais',
        logos: [{ src: '/logo/english.jpg' }],
        level: 'Niveau B1',
      },
      {
        name: 'Français',
        logos: [{ src: '/logo/french.png' }],
        level: 'Natif',
      },
    ],
    className: 'bg-gradient-to-br from-(--color-secondary) via-60% via-(--color-secondary) to-(--color)',
  },
];
