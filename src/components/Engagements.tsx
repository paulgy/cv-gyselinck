"use client";
import { useState } from "react";
// Les icônes nécessaires
import { FiMapPin, FiSliders, FiGrid, FiMusic } from "react-icons/fi";

export default function Engagements() {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: number]: boolean;
  }>({});

  // Le tableau de données reste une bonne pratique
  const softwareTools = [
    { name: "Traktor", icon: <FiSliders className="mr-1.5" /> },
    { name: "Maschine", icon: <FiGrid className="mr-1.5" /> },
    { name: "Komplete", icon: <FiMusic className="mr-1.5" /> },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Engagements Associatifs et Culturels
      </h2>
      <div className="space-y-8">
        {/* === Engagement 1: Association === */}

        <article>
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:bg-blue-50 p-2 rounded-lg group"
            aria-expanded={openAccordions[0]}
            aria-controls="engagement-1-content"
          >
            <div className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-800 transition-colors duration-300">
                Fondateur et Président d&#39;association (Culturaction)
              </h3>

              <p className="text-md text-gray-600">
                Clermont-Ferrand | 2005 - 2007
              </p>
            </div>

            <div
              className={`w-6 h-6 flex items-center justify-center text-2xl font-bold transform transition-all duration-300 ${
                openAccordions[0] ? "rotate-45 text-blue-800" : "text-gray-600"
              }`}
            >
              +
            </div>
          </button>

          <div
            id="engagement-1-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openAccordions[0] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transform transition-all duration-300 ease-in-out ${
                openAccordions[0] ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2 pl-4">
                <li>
                  Création et développement d&#39;une association visant à
                  organiser des manifestations culturelles en milieu étudiant.
                </li>

                <li>
                  Préparation et mise en œuvre d&#39;événements culturels
                  (concerts, échanges internationaux). Recherche de financements
                  et mise en place de partenariats avec des acteurs
                  institutionnels (CROUS, universités).
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article>
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:bg-blue-50 p-2 rounded-lg group"
            aria-expanded={openAccordions[1]}
            aria-controls="engagement-2-content"
          >
            <div className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-800 transition-colors duration-300">
                Création et Animation de Projets Musicaux
              </h3>
              <p className="text-md text-gray-600">Depuis 1994</p>
            </div>
            <div
              className={`w-6 h-6 flex items-center justify-center text-2xl font-bold transform transition-all duration-300 ${
                openAccordions[1] ? "rotate-45 text-blue-800" : "text-gray-600"
              }`}
            >
              +
            </div>
          </button>

          <div
            id="engagement-2-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openAccordions[1] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transform transition-all duration-300 ease-in-out ${
                openAccordions[1] ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-4 pl-4">
                <li>
                  Expérience en tant que musicien et organisateur au sein de
                  diverses formations et collectifs | 1994-2014.
                </li>
                <li>
                  Deejay professionnel spécialisé en musiques afro-caribéennes
                  et latines | depuis 2011.
                  <p className="mt-1 flex items-start text-gray-600">
                    <FiMapPin className="mr-2 mt-1 flex-shrink-0 text-gray-500" />
                    <span>
                      Lieux notables à Bordeaux : Calle Ocho, Mama Shelter,
                      Punta Cana Bar, Dansons sur les quais...
                    </span>
                    <div className="flex items-center flex-wrap">
                      {/* Conteneur Flexbox pour aligner les outils sur une ligne */}
                      <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-gray-600">
                        {softwareTools.map((tool) => (
                          // Chaque outil avec son icône
                          <span
                            key={tool.name}
                            className="inline-flex items-center"
                          >
                            {tool.icon}
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
