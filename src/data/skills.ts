export interface SkillLogo {
  src: string;
  className?: string;
}

export interface Skill {
  name: string;
  level: string;
  logos?: SkillLogo[];
}

export interface SkillCategory {
  idStart: number;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    idStart: 2,
    title: 'Développeur :',
    skills: [
      {
        name: 'Web - Front',
        logos: [{ src: '/logo/html.png' }, { src: '/logo/css.png' }, { src: '/logo/js.png' }, { src: '/logo/react.png' }],
        level: 'html, css : Expert<br />js, React : Débutant',
      },
      {
        name: 'Web - Back',
        logos: [{ src: '/logo/php.png' }, { src: '/logo/symfony.svg' }, { src: '/logo/twig.png' }, { src: '/logo/MySQL.png' }],
        level: 'php : Avancé<br />Mysql : Avancé<br />Symfony: Débutant',
      },
      {
        name: 'Mobile',
        logos: [{ src: '/logo/android.png', className: 'white' }, { src: '/logo/xamarin.png' }],
        level: 'Débutant'
      },
      {
        name: 'Desktop',
        logos: [{ src: '/logo/java.png' }, { src: '/logo/c.png' }],
        level: 'java : Avancé<br />c# : débutant',
      },
      {
        name: 'Autre',
        logos: [{ src: '/logo/vba.png' }],
        level: 'VBA : Débutant',
      },
    ],
  },
  {
    idStart: 7,
    title: 'Réseaux :',
    skills: [
      {
        name: 'OS',
        logos: [{ src: '/logo/linux.png' }, { src: '/logo/windows.png' }],
        level: 'Avancé',
      },
      {
        name: 'Switch',
        logos: [{ src: '/logo/cisco.png' }],
        level: 'Avancé',
      },
      {
        name: 'Promox',
        logos: [{ src: '/logo/proxmox.png' }],
        level: 'Avancé',
      },
    ],
  },
  {
    idStart: 10,
    title: 'Langues :',
    skills: [
      {
        name: 'Français',
        logos: [{ src: '/logo/french.png' }],
        level: 'Langue marternelle',
      },
      {
        name: 'Anglais',
        logos: [{ src: '/logo/english.jpg' }],
        level: 'Niveau maîtriser B1',
      },
    ],
  },
];
