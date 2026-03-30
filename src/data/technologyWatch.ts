export interface TechSource {
    title: string;
    description: string;
    image: string;
    isRounded?: boolean; // Pour gérer le style de bordure spécifique (ex: Youtube/Réseaux)
}

export const techSources: TechSource[] = [
    {
        title: "Stackoverflow",
        description: "Plateforme est un forum de question et réponse en ligne pour les développeurs.",
        image: "/TechnologyWatch/stackover.png"
    },
    {
        title: "Documentation Technique",
        description: "Toutes ressource en ligne pour les informations et instructions relatives à un produit ou à un système.",
        image: "/TechnologyWatch/doc.png"
    },
    {
        title: "Google actualitées",
        description: "Plateforme en ligne fournissant des actualités et des articles provenant de diverses sources à travers le monde.",
        image: "/TechnologyWatch/gActu.png"
    },
    {
        title: "Reseaux sociaux",
        description: "Plateformes en ligne pour se connecter, partager et interagir avec d'autres personnes.",
        image: "/TechnologyWatch/ytb.png",
        isRounded: true
    }
];