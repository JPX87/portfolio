export interface JourneyItem {
    id: string;
    year: string;
    title: string;
    location: string;
    mapImage: string;
    mapLink: string;
    logo: string[];
    content: {
        title: string;
        description: string;
    }[];
}

export const journeyItems: JourneyItem[] = [
    {
        id: 'valadon',
        year: '2021 - 2023',
        title: 'Lycée Suzanne Valadon - Limoges :',
        location: 'Limoges',
        mapImage: '/Journey/map/valadon.png',
        mapLink: 'https://www.google.com/maps/place/Lyc%C3%A9e+Suzanne+Valadon/@45.8290992,1.2434464,15.06z/data=!4m6!3m5!1s0x47fecb76b72aae99:0xb0f6110bb1ef739a!8m2!3d45.8293885!4d1.2460439!16s%2Fg%2F11h6npmt14',
        logo: ['/Journey/logo/valadon_logo.png'],
        content: [
            {
                title: 'Formations :',
                description: '<span>B</span>revet de <span>T</span>echnicien <span>S</span>upérieur <span>S</span>ervices <span>I</span>nformatiques aux <span>O</span>rganisations <br /> <br /> - spécialité : <span>S</span>olution <span>L</span>ogiciel <span>A</span>pplicatif <span>M</span>étier. <br /> <br /> Formation aux développements web et applicatif(Desktop & Mobile)'
            }
        ]
    },
    {
        id: 'laposte',
        year: '2021 - 2023',
        title: 'La Poste - Plateforme de Limoges :',
        location: 'Limoges',
        mapImage: '/Journey/map/alternance.png',
        mapLink: 'https://www.google.com/maps/place/La+Poste+Plateforme+de+Limoges/@45.8574423,1.2684996,13.42z/data=!4m6!3m5!1s0x47f935a64dc73393:0xe73c4a1c7b144e88!8m2!3d45.888629!4d1.2996483!16s%2Fg%2F11qm1wp__v',
        logo: ['/Journey/logo/laposte_logo.png'],
        content: [
            {
                title: 'Projet :',
                description: 'Durant 2 ans j\'ai été en Alternance à La poste, <br /><br /> j\'ai fait plusieurs petits projets dont "l\'Affichage Dynamique"<br /><br /> celui-ci à été déployé dans plusieurs régions comme la Charente Maritime, Vienne ou encore les Deux-Sèvres.<br /><br />'
            }
        ]
    },
    {
        id: 'MaryseBastieL',
        year: '2017 - 2021',
        title: 'Lycée Maryse Bastié - Limoges :',
        location: 'Limoges',
        mapImage: '/Journey/map/bastiee.png',
        mapLink: 'https://www.google.com/maps/place/Lyc%C3%A9e+Polyvalent+Maryse+Basti%C3%A9/@45.8509347,1.288544,17z/data=!3m1!4b1!4m6!3m5!1s0x47f93457192c71d1:0xf1b1818cbc23f213!8m2!3d45.850931!4d1.2907327!16s%2Fg%2F1tg6jxk5',
        logo: ['/Journey/logo/MaryseBastieL_logo.png'],
        content: [
            {
                title: 'Formation :',
                description: '<span>B</span>accalauréat <span>P</span>rofessionnelle <span>S</span>ysteme <span>N</span>umérique<br /> <br /> - spécialité : <span>R</span>éseaux <span>i</span>nformatiques et <span>S</span>ystèmes <span>C</span>ommunicants<br /> <br /> Formation a la gestion et installation des systèmes réseaux(Switch, router, etc ...)'
            }
        ]
    },
    {
        id: 'stages',
        year: '2017 - 2021',
        title: 'Stage :',
        location: 'Limoges',
        mapImage: '/Journey/map/stage.png',
        mapLink: '',
        logo: ['/Journey/logo/laposte_logo.png', '/Journey/logo/CCI_logo.jpg', '/Journey/logo/ASP_logo.png'],
        content: [
            {
                title: 'Projets :',
                description: '<em>La poste :</em><br /> <br /> - Projet Python de scan code QR pour porte d\'entrée <br /> <br /> - Installation et configuration ZoneMinder <br /> <br /><br /> <em>CCI :</em><br /> <br /> - Installation et utilisation de proxmox <br /> <br /> - Masterisation & dépannage<br /> <br /><br /> <em>ASP :</em><br /> <br /> - Masterisation & dépannage<br /> <br /> - Installation de smartphone<br /> <br />'
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
