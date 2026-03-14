export interface Project {
    name: string;
    category: string[];
    language: string[];
    urlImage?: string;
    year: number[];
    urlProject: string;
    Description: string;
    Note?: string;
    Mission: string[];
    Competences?: string[];
    Media: string[];
    Files?: string | string[];
    link?: string | boolean;
    portraitMode?: boolean;
}

export const projectList: Project[] = [
    {
        name: "Affichage Dynamique",
        category: ["Web Front", "Web Back"],
        language: ["html.png", "css.png", "js.png", "php.png", "MySQL.png"],
        urlImage: "Affichage_Dynamique.png",
        year: [2021, 2022, 2023],
        urlProject: "Affichage_Dynamique",
        Description: "Le projet \"Affichage Dynamique\" vient répondre à un besoin de transmettre l'information de façon plus simple et sans perte de temps pour les salariés",
        Note: "Ce projet n'est pas sur github car il est propriété de La Poste",
        Mission: [
            "Gestion des écrans : Ajout, modifiction etsuppression ainsi que la possible de leur assigner une fonctionnalité spécifique.",
            "Gestion des contenus : Créer, modifier et diffuser des contenus sur les écrans (images, des vidéos et les PDF).",
            "Gestion des horaires de diffusion : La possibilité de planifier la diffusion de contenus à des heures précises",
            "Gestion des logs : La possibilité de visualiser les logs d’accès à l’application.",
            "Cartographie des écrans : La possibilité de visualiser les emplacements de chaque écran sur une carte, état (allumé ou éteint) et avancement de la lecture).",
            "Gestion des groupes d'utilisateurs : La possibilité de créer et de gérer des groupes d'utilisateurs avec des niveaux d'autorisation différents.",
            "Gestion des utilisateurs : La possibilité de créer et de gérer des comptes utilisateur avec un groupe défini, possibilité de synchroniser les utilisateurs avec l'Active Directory."
        ],
        Competences: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d’assistance et d’évolution", "Développer la présence en ligne de l’organisation", "Travailler en mode projet", "Mettre à disposition des utilisateurs un service informatique", "Organiser son développement professionnel"],
        Media: ["accueil.png", "ajout.png", "ajout2.png", "user.png", "groupe.png"],
        Files: ["Documentation_utilisateur_V4.pdf"],
        link: false
    },
    {
        name: "Coder Clothes",
        category: ["Web Front", "Web Back"],
        language: ["html.png", "css.png", "js.png", "php.png", "symfony.svg", "twig.png", "MySQL.png"],
        urlImage: "coderClothes2.png",
        year: [2023],
        urlProject: "CoderClothes",
        Description: "Coder Clothes est un projet effectué en Atelier Professionnel celui-ci est un site d'e-commerce de vente de vêtements de coder",
        Mission: ["Catalogue de produits : afficher une liste complète de tous les produits",
            "Panier d'achat : Ajouter des produits à un panier d'achat, modification et validation avant de passer à la caisse.",
            "Site sécurisé : Protocole https ",
            "Empreinte de mots de passe : Mots de passe haché et salé. ",
            "Gestion des commandes : Etat de leurs commandes, suivre la livraison de leurs produits et visualiser leur historique d'achats.",
            "Gestion des stocks : Gérer les stocks des produits, mettre à jour les niveaux de stock et envoyer des alertes lorsque certains produits sont en rupture de stock.",
            "Création et gestion des produits : permettre aux administrateurs de créer et de modifier des produits."],
        Competences: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d’assistance et d’évolution", "Développer la présence en ligne de l’organisation", "Travailler en mode projet", "Mettre à disposition des utilisateurs un service informatique", "Organiser son développement professionnel"],
        Media: ["accueil.png", "liste.png", "detail.png", "login.png", "profile.png", "commandes.png", "detailCommande.png", "adminProduits.png", "adminUser.png", "AdminEditUser.png", "AdminCatego.png", "listeCommandes.png"],

        Files: "Documentation_Utilisateurs.pdf",
        link: "https://github.com/David87100/SymfonyEquipe3"
    },
    {
        name: "Emotion du jour",
        category: ["Mobile"],
        language: ["c.png", "xamarin.png", "MySQL.png"],
        urlImage: "Emotion_du_jour.png",
        year: [2023],
        urlProject: "Emotion_du_jour",
        Description: "Projet effectué en cours permettant de noter son humeur du jour sur une application (Android & IOS) ",
        Mission: ["Création d'une humeur", "Suppression d'une humeur", "Suppression de toutes les humeurs"],
        Competences: ["Répondre aux incidents et aux demandes d’assistance et d’évolution"],
        Media: ["accueil.png", "accueil2.png", "liste.png", "supression.png", "supressionAll.png"],
        portraitMode: true,
        Files: "",
        link: false
    },
    {
        name: "Diaporama Carrousel",
        category: ["Web Front"],
        language: ["html.png", "css.png", "js.png", "react.png"],
        urlImage: "Diaporama_Carrousel2.png",
        year: [2022, 2023],
        urlProject: "Diaporama_Carrousel",
        Description: "Création d'un diaporama pour images et vidéos, celui est utilisé sur ce site pour permettre de voir mes réalisations",
        Mission: ["Afficher des photos & vidéos", "Lecture du diaporame", "Flêche suivant et précédent"],
        Media: ["laposte.png", "coder.png", "coder2.png"],
        Files: "",
        link: false
    },
    {
        name: "EDF Compteur",
        category: ["Mobile"],
        language: ["android.png", "MySQL.png"],
        urlImage: "EDF_Compteur.png",
        year: [2022],
        urlProject: "EDF_Compteur",
        Description: "Projet effectué en cours devant permettre de reveler le compteur EDf des particluier sur une application Android",
        Mission: ["Création d'un client", "Suppression d'un client", "edition d'un client"],
        Competences: ["Répondre aux incidents et aux demandes d’assistance et d’évolution", "Travailler en mode projet", "Organiser son développement professionnel"],
        Media: ["accueil.png", "liste.png", "ajout.png", "edition.png", "supression.png"],
        portraitMode: true,
        Files: "",
        link: false
    },
    {
        name: "Code Barre",
        category: ["Web Front", "Web Back"],
        language: ["html.png", "css.png", "php.png", "MySQL.png"],
        urlImage: "Code_Barre2.png",
        year: [2021],
        urlProject: "Code_Barre",
        Description: "Ce projet vient répondre à un besoin de faire l'inventaire du stock informatique au sein de La Poste Plateforme de Limoges",
        Mission: ["Connexion à un utilisateur", "Choix du type de status", "Enregistrement du code-barre", "Extraction en fichier CSV de la liste des codes-barres"],
        Competences: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d’assistance et d’évolution", "Mettre à disposition des utilisateurs un service informatique", "Organiser son développement professionnel"],
        Media: ["accueil.png", "app.png", "app1.png", "excel.png"],
        Files: "",
        link: false
    },
    {
        name: "Arbitre",
        category: ["Web Front", "Web Back"],
        language: ["html.png", "css.png", "php.png", "MySQL.png"],
        urlImage: "Arbitre.png",
        year: [2022],
        urlProject: "Arbitre",
        Description: "Projet effectué en cours permettant de gérer les arbitrages (mon équipe devait faire les championnats)",
        Mission: ["Consutation des championnats", "Création d'un championnat", "Suppression d'un championnat", "Connexion avec adresse mail et mot de passe"],
        Competences: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d’assistance et d’évolution", "Organiser son développement professionnel"],
        Media: ["accueil.png", "consult.png", "connexion.png", "profile.png", "gestion.png", "ajout.png", "modif.png", "suppresion.png"],
        Files: "",
        link: false
    },
    {
        name: "Karate",
        category: ["Desktop"],
        language: ["c.png", "MySQL.png"],
        urlImage: "Karate.png",
        year: [2022],
        urlProject: "Karate",
        Description: "Projet effectué en cours permettant de gérer les clubs, les membres et les compétitions (mon équipe devait faire les clubs)",
        Mission: ["Consutation des clubs", "Création d'un club", "Modification d'un club", "Suppression d'un club"],
        Competences: ["Répondre aux incidents et aux demandes d’assistance et d’évolution", "Organiser son développement professionnel"],
        Media: ["accueil.png", "menu.png", "liste.png", "ajout.png", "modifier.png", "supprimer.png"],
        Files: "",
        link: false
    }
];