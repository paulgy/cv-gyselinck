import React from "react";

const experienceData = [
  {
    year: "2004-2010",
    role: "Attaché Temporaire d'Enseignement et de Recherche (ATER), Moniteur, Allocataire de recherche, Vacataire",
    description:
      "Travaux dirigés de Microéconomie, Macroéconomie, Économie Politique, Démographie, Grandes Fonctions de l'Entreprise.",
    location:
      "Faculté de Sciences Économiques et de Gestion, Université d'Auvergne",
  },
  {
    year: "2005",
    role: "Traitement des données d'enquêtes pour l'évaluation du programme National d'Infrastructures Rurales (PNIR) au Sénégal", //
    description:
      "Université d'Auvergne en collaboration avec l'Université Gaston Berger, Saint-Louis, Sénégal.", //
    location: "Saint-Louis, Sénégal",
  },
  {
    year: "2002",
    role: "Stage à l'Organisation Mondiale de la Santé (OMS)", //
    description:
      "Étude sur la demande de tabac au Vietnam en collaboration avec L'Institut d'Economie et le Ministère de la Santé (3 mois).", //
    location: "Hanoï, Vietnam",
  },
  {
    year: "2001",
    role: "Stage dans une association de micro-crédit, A.M.S.S.F M-C", //
    description:
      "Élaboration d'une demande de financement pour un projet de Micro-Finance (1 mois).", //
    location: "Fès, Maroc",
  },
  {
    year: "2001",
    role: "Ride operator", //
    description: "Job d'été (1 mois).", //
    location: "Ocean City NJ, États-Unis",
  },
  {
    year: "1999 & 2000",
    role: "Remplacement d'éducateurs spécialisés pour l'APF-APEA", //
    description:
      "Accompagnement d'handicapés moteurs avec troubles associés dans leur quête d'autonomie + animation et organisation de sorties culturelles (2 x 2 mois).", //
    location: "Mérignac, 33",
  },
];

const Experience = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-gray-300 pb-2 mb-4">
        Expérience professionnelle
      </h2>
      {experienceData.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-x-8 mb-6">
          <p className="w-full md:w-1/4 font-semibold text-gray-700">
            {item.year}
          </p>
          <div className="w-full md:w-3/4">
            <h3 className="font-bold text-gray-800">{item.role}</h3>
            <p className="text-gray-600 italic">{item.location}</p>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
