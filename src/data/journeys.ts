
// type: 'Formation' | 'Certification' | 'Association' | 'Alternance' | 'Stage';
export interface JourneyType {
    Formation: 'Formation';
    Certification: 'Certification';
    Association: 'Association';
    Alternance: 'Alternance';
    Stage: 'Stage';
}

export interface JourneyItem {
    id: string;
    year: string;
    title: string;
    type: JourneyType[keyof JourneyType];
    location: string;
    background: string;
    logoClassName?: string;
    logo: string[];
    priority?: boolean;
    content: {
        title: string;
        description: string;
    }[];
}

export const journeyItems: JourneyItem[] = [
    {
        id: 'univTLSMaster',
        year: '2024 - 2026',
        title: 'Université de Toulouse',
        type: 'Formation',
        location: 'Toulouse',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/univ-tls.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/univ-tls.png'],
        priority: true,
        content: [
            {
                title: 'Master MIAGE',
                description: 'Méthodes informatiques appliquées à la gestion des entreprises, parcours Ingénierie de la transformation numérique'
            }
        ]
    },
    {
        id: 'aumovio',
        year: '2024 - 2026',
        title: 'Aumovio (ex-Continental Automotive)',
        type: 'Alternance',
        location: 'Toulouse',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/continental.png')",
        logoClassName: "!bg-white !p-1",
        logo: ['/Journey/logo/aumovio.png'],
        priority: true,
        content: [
            {
                title: 'Ingénieur Full-Stack (Next / Express / Oracle SQL)',
                description: 'Recueil des besoins utilisateurs et conception d\'une application de gestion d\'assets connectée à l\'API BMC, incluant la modélisation de données, le déploiement sécurisé sous PM2 et la rédaction de la documentation technique pour l\'exploitation'
            }
        ]
    },
    {
        id: 'psc',
        year: '2024 - 2026',
        title: 'Protection Civile',
        type: 'Certification',
        location: 'Toulouse',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/protection-civique.jpg')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/protection-civique.svg'],
        priority: true,
        content: [
            {
                title: 'Certification Premier Secours Citoyen/Civique',
                description: 'Formation aux gestes de premiers secours et à la prévention des risques pour intervenir efficacement en cas d\'urgence'
            }
        ]
    },
    {
        id: 'univTLSLicence',
        year: '2023 - 2024',
        title: 'Université de Toulouse',
        type: 'Formation',
        location: 'Toulouse',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/univ-tls.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/univ-tls.png'],
        content: [
            {
                title: 'Licence 3 MIASHS',
                description: 'Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales parcours MIAGE'
            }
        ]
    },
    {
        id: 'cgi',
        year: '2023 - 2024',
        title: 'CGI',
        type: 'Stage',
        location: 'Toulouse',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/cgi.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/cgi.png'],
        content: [
            {
                title: 'Développeur SAP (ABAP / UI5 / ODATA)',
                description: "Développement d'extensions spécifiques SAP et résolution d'incidents sur l'outil de certification des aéronefs en équipe Agile (SAFe)."
            }
        ]
    },
    {
        id: 'valadon',
        year: '2021 - 2023',
        title: 'Lycée Suzanne Valadon',
        type: 'Formation',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/valadon.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/valadon.png'],
        content: [
            {
                title: 'BTS SIO',
                description: 'Services informatiques aux organisations, option B solutions logicielles et applications métiers'
            }
        ]
    },
    {
        id: 'laposte',
        year: '2021 - 2023',
        title: 'La Poste - Plateforme de Limoges',
        type: 'Alternance',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/la-poste.jpg')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/la-poste.png'],
        content: [
            {
                title: 'Développeur Web (PHP/JS)',
                description: 'Conception d\'une solution Web d\'affichage dynamique permettant la diffusion automatisée de flux (Photos, Vidéos, PDF) avec gestion fine des droits utilisateurs et planification intelligente.'
            }
        ]
    },
    {
        id: 'MaryseBastieL',
        year: '2018 - 2021',
        title: 'Lycée Maryse Bastié',
        type: 'Formation',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/maryse-bastie.png')",
        logoClassName: "!bg-white",
        logo: ['/Journey/logo/maryse-bastie.png'],
        content: [
            {
                title: 'Bac PRO SN',
                description: 'Système Numérique, Réseaux Informatiques et Systèmes Communicants'
            }
        ]
    },
    {
        id: 'stagesCCI',
        year: '2018 - 2021',
        title: 'CCI',
        type: 'Stage',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/cci.jpg')",
        logoClassName: "!bg-white !p-2",
        logo: ['/Journey/logo/cci.jpg'],
        content: [
            {
                title: 'Technicien système et réseau',
                description: 'Appui technique et maintenance de proximité : informatique, systèmes et réseaux'
            }
        ]
    },
    {
        id: 'stagesLaPoste1',
        year: '2018 - 2021',
        title: 'La Poste',
        type: 'Stage',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/la-poste-centre.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/la-poste.png'],
        content: [
            {
                title: 'Technicien système et réseau',
                description: "Déploiement et configuration d'une solution de vidéosurveillance IP sous Linux (ZoneMinder/Ubuntu)"
            }
        ]
    },
    {
        id: 'stagesLaPoste2',
        year: '2018 - 2021',
        title: 'La Poste',
        type: 'Stage',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/la-poste-centre.png')",
        logoClassName: "!bg-white p-3.5",
        logo: ['/Journey/logo/la-poste.png'],
        content: [
            {
                title: 'Développeur Python',
                description: "Maintenance et développement des solutions logicielles de contrôle d'accès (Python)"
            }
        ]
    },
    {
        id: 'stagesASP',
        year: '2018 - 2021',
        title: 'ASP',
        type: 'Stage',
        location: 'Limoges',
        background: "linear-gradient(270deg, #4443 0%, #4448 100%), url('/Journey/img/asp.png')",
        logoClassName: "!bg-white !p-0.5",
        logo: ['/Journey/logo/asp.png'],
        content: [
            {
                title: 'Technicien Support',
                description: 'Masterisation de postes, dépannage et installation de smartphone'
            }
        ]
    }
];

export const groupedJourneys = journeyItems.reduce((acc, item) => {
    const yearRange = item.year;
    if (!acc[yearRange]) {
        acc[yearRange] = [];
    }
    acc[yearRange].push(item);
    return acc;
}, {} as Record<string, JourneyItem[]>);
