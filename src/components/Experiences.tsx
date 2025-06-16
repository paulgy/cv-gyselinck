// src/components/Experiences.tsx

"use client";

import { useState } from "react";

// Le tableau de données n'a pas besoin d'être modifié
const experiencesData = [
  {
    title: "Professeur de SES et SNT",
    staticContent: [
      {
        title: "Professeur de SES",
        details: "Lycée Camille Jullian, Bordeaux | Depuis septembre 2015",
      },
      {
        title: "",
        details: "Lycée Camille Jullian, Bordeaux - Stagiaire | 2014-2015",
      },
      {
        title: "",
        details:
          "Lycée Montaigne, Bordeaux - Contractuel Admissible | 2013-2014",
      },
      {
        title: "Professeur de SNT",
        details: "Lycée Camille Jullian, Bordeaux | Depuis septembre 2019",
      },
    ],
  },
  {
    title: "Interlocuteur Académique pour le Numérique (IAN) de SES",
    company: "Académie de Bordeaux",
    dates: "depuis juin 2023",
    description: [
      "Administration du site web académique SES (Wordpress), refonte de l'architecture (en cours) et de la charte graphique, publication régulière d'article et lettres d'information.",
      "Administration de la liste de diffusion académique (Listeinfo_ses)",
      "Conception et publication de ressources pédagogiques numériques.",
      "Indexation des scénarios pédagogiques sur la plateforme Edubase.",
      "<strong>Innovation pédagogique :</strong> Portage et animation du projet TraAM 2024-2025 pour les académies de Bordeaux et Limoges.",
      "Participation aux séminaires nationaux des IAN (3 éditions), veille sur les innovations des autres académies, contribution aux réflexions nationales sur le numérique éducatif.",
    ],
  },
  {
    title: "Référent pour les Usages Pédagogiques Numériques (RUPN)",
    company: "Lycée Camille Jullian, Bordeaux",
    dates: "2021 - 2022",
    description: [
      "<strong>Conseil et pilotage :</strong> Appui à l'équipe de direction dans le pilotage du numérique et la définition de la stratégie d'établissement.",
      "<strong>Accompagnement pédagogique :</strong> Formation et support auprès des équipes pédagogiques pour l'intégration du numérique dans les pratiques d'enseignement.",
      "<strong>Administration et support technique :</strong> Gestion des accès au réseau et aux services pour les enseignants et les élèves (plus de 30 tickets gérés). Interface avec le support technique régional (e-ANNA) via l'outil GLPI.",
      "<strong>Déploiement de projets nationaux :</strong> Organisation des campagnes Pix pour tous les niveaux et gestion de la certification pour les classes de terminale. Prise en charge des tests de positionnement de seconde.",
    ],
  },
  {
    title: "Doctorant en Économie du Développement, Moniteur, ATER, Vacataire",
    company: "CERDI, Université d'Auvergne",
    dates: "2003 - 2010",
    description: [
      "Chargé de Travaux dirigés de Macro-économie, Micro-économie, Économie Politique, Démographie, Grandes Fonctions de l'Entreprise.",
      "Sujet de thèse : <em>Impact de l'éducation sur le revenu des ménages dans un contexte de transition économique : Une application sur données Vietnamiennes.</em> sous la direction de J.L. Arcand.",
      "Traitement et analyse des données VLSS (Vietnam Living standards Survey)",
      "Evaluation du Capital Santé au Brésil. Traitement et analyse et des données de l'enquête PNAD 1998 (Pesquisa National por Amostra de Domicílios) sur la santé au Brésil.",
      "Traitement des données d'enquêtes pour l'évaluation du programme National d'Infrastructures Rurales (PNIR) au Sénégal, en collaboration avec l'Université Gaston Berger, Saint-Louis, Sénégal | 2005",
      "Participations à colloques et séminaire, publication et valorisation de travaux de recherche en économie du développement.",
    ],
  },
  {
    title: "Stagiaire chargé d'étude",
    company: "Organisation Mondiale de la Santé (OMS), Hanoï, Vietnam",
    dates: "2002",
    description: [
      "Étude sur la demande de tabac au Vietnam en collaboration avec L'Institut d'Economie et le Ministère de la Santé (3 mois).",
    ],
  },
  {
    title: "Stagiaire dans une association de micro-crédit",
    company: "A.M.S.S.F M-C, Fès, Maroc",
    dates: "2001",
    description: [
      "Élaboration d'une demande de financement pour un projet de Micro-Finance (1 mois).",
    ],
  },
];

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Expériences Professionnelles
      </h2>
      <div className="space-y-8">
        {experiencesData.map((exp, index) => (
          <article key={index} className="border-b last:border-b-0 pb-4">
            {index === 0 && exp.staticContent ? (
              <div className="px-4">
                {" "}
                {/* Ajout d'un padding pour aligner avec les boutons */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Professeur de SES
                </h3>
                <p className="text-md text-gray-600">
                  Lycée Camille Jullian, Bordeaux | Depuis septembre 2015
                  <br />
                  Lycée Camille Jullian, Bordeaux - Stagiaire | 2014-2015
                  <br />
                  Lycée Montaigne, Bordeaux - Contractuel Admissible | 2013-2014
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Professeur de SNT
                </h3>
                <p className="text-md text-gray-600">
                  Lycée Camille Jullian, Bordeaux | Depuis septembre 2019
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left flex justify-between items-center px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-sm group"
                >
                  <div className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
                    <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-blue-700">
                      {exp.title}
                    </h3>
                    <p className="text-md text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-700">
                      {exp.company} | {exp.dates}
                    </p>
                  </div>
                  <span
                    className={`text-2xl font-light transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "rotate-45 text-blue-600 scale-110"
                        : "rotate-0 text-gray-500 group-hover:text-blue-600 group-hover:scale-105"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    activeIndex === index
                      ? "max-h-screen opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="transform transition-all duration-400 ease-in-out ${activeIndex === index ? 'translate-y-0' : '-translate-y-2'}">
                    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-8 pr-4">
                      {exp.description?.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="transition-all duration-300 ease-in-out hover:text-gray-900"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
