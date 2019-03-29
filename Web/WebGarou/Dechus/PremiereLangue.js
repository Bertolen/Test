/*
Construction du lexique de la première langue
*/

// Liste des mots du lexique
var mots = [
    {
        terme: "Abni-Gur",
        definition: "Croyance des Seigneurs des Tempêtes qu'en surmontant leurs épreuves ils deviendront un jour comme Urfarah."
    },
    {
        terme: "Anshega",
        definition: "Les Tribus Pures."
    },
    {
        terme: "Basu-Im",
        definition: "La deuxième étape du Kuruth, quand le loup-garou est un berserker incontrôlable."
    },
    {
        terme: "Dihar",
        definition: "Un esprit de rang assez haut pour qu'un Loup-Garou ne puisse le confronter individuellement."
    },
    {
        terme: "Dihir",
        definition: "Un esprit de haut rang et pouvoir."
    },
    {
        terme: "Duguthim",
        definition: "Humain revendiqué par un esprit."
    },
    {
        terme: "Ensih",
        definition: "Esprit de rang et pouvoir intermédiaire."
    },
    {
        terme: "Gathra",
        definition: "Offrande faite à un esprit en échange de faveurs."
    },
    {
        terme: "Hisil",
        definition: "Le monde spirituel."
    },
    {
        terme: "Hithimu",
        definition: "Humains manipulés par un esprit."
    },
    {
        terme: "Hursih",
        definition: "Esprit de bas rang et pouvoir.."
    },
    {
        terme: "Idigam",
        definition: "Esprits bannis sur la lune par Père-Loup pendant la pré-histoire."
    },
    {
        terme: "Ilthum",
        definition: "Rassemblement volontaire d'esprits qui ont choisit de travailler ensemble pour consolider leur pouvoir."
    },
    {
        terme: "Ilusah",
        definition: "Le plus haut rang d'esprits. Les epsrits de la Terre, Lune et du Soleil en font partie."
    },
    {
        terme: "Kuruth",
        definition: "La Rage Mortelle. Les instincts colériques qui mènent les Loup-Garous en Wasu-Im et Basu-Im."
    },
    {
        terme: "Magath",
        definition: "Esprit hybride sans nature."
    },
    {
        terme: "Mus-rah",
        definition: "\"Terrain de chasse sacré\", un terme de chasseur voulant dire térritoire."
    },
    {
        terme: "Muthrum",
        definition: "Les blus bas rang des esprits. Comparables à des insectes."
    },
    {
        terme: "Ni-zu Tag?",
        definition: "\"Que-est-ce que tu chasses?\" Une salutation habituelle chez les Chasseurs des Ténèbres."
    },
    {
        terme: "Sanghba'zir",
        definition: "Parjure, particulièrement ceux qui ont brisé le serment de la Lune."
    },
    {
        terme: "Mir",
        definition: "Rage."
    },
    {
        terme: "Shartha",
        definition: "Hôte."
    },
    {
        terme: "Siskur-Dah",
        definition: "\"La chasse sacré\", à la fois la chasse rituelle envers une proie définie et le mode de vie des Loup-Garous."
    },
    {
        terme: "Sugrah",
        definition: "L'habitude qu'ont les Seigneurs des Ténèbres à pointer du doigt les faiblesses des autres membres de la Tribu pour montrer leur ruse et renforcer la Tribu."
    },
    {
        terme: "Thu Ibiru",
        definition: "\"Toute Guerre\", philosophie des Griffes de Sang comme quoi la vie toute entière est un conflit."
    },
    {
        terme: "Umia",
        definition: "Regroupement d'esprits dans une catégorie en fonction de leur nature."
    },
    {
        terme: "Uratha",
        definition: "\"Loup-Garou\", souvent utilisé pour parler du peuple des loup-garous."
    },
    {
        terme: "Urdaga",
        definition: "Les Tribus Déchues."
    },
    {
        terme: "Urdur",
        definition: "\"Louveteau\", terme désignant les jeunes loup-garous. Souvent irrespectueux."
    },
    {
        terme: "Urfarah",
        definition: "Père-Loup."
    },
    {
        terme: "Urghir",
        definition: "\"Chien\", terme péjoratif pour désigner les loup-garous qui ont une harmonie trop proche du monde physique."
    },
    {
        terme: "Uzahal",
        definition: "\"Transparent\", terme péjoratif pour désigner les loup-garous qui ont une harmonie trop proche du monde spirituel."
    },
    {
        terme: "Wasu-Im",
        definition: "La première étape du Kuruthn quand le loup-garou a encore un peu de contrôle."
    },
    {
        terme: "Zahu",
        definition: "Le Goulot."
    }
];

var dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenuLexique").appendChild(dlElt); // Ajout de la liste à la page