// src/components/Competences.tsx
"use client";

import { useState } from "react";

export default function Competences() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Compétences Numériques et Pédagogiques
      </h2>
      <div className="space-y-4">
        {/* === Pédagogie et Administration Numérique === */}
        <div className="border border-blue-200 rounded-lg shadow-sm">
          <button
            onClick={() => toggleSection("pedagogie")}
            className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Pédagogie et Administration Numérique
              <span className="text-blue-600 text-xl font-bold">
                {openSections.pedagogie ? "−" : "+"}
              </span>
            </h3>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSections.pedagogie
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 border-t border-blue-200">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Conception et déploiement de séquences pédagogiques numériques
                  via Moodle (évaluation formative et sommative, différenciation
                  des parcours et ludification des apprentissages).
                </li>
                <li>
                  Maîtrise des plateformes éducatives (Lycée Connecté, Moodle,
                  M@gistère, Capytale).
                </li>
                <li>
                  Utilisation des applications institutionnelles (Nuage, Codin,
                  Evento, Tribu, ...) et des outils du &quot;libre
                  éducatif&quot; pour la collaboration et le partage de
                  ressources pédagogiques.
                </li>
                <li>
                  Gestion et assistance des comptes Educonnect, Lycée Connecté,
                  Pix et Pronote.
                </li>
                <li>
                  Déploiement et suivi du dispositif Pix au lycée Camille
                  Jullian (2020 - 2022).
                </li>
                <li>
                  Formation à l&#39;algorithmique et à la programmation ;
                  Éducation au numérique et à l&#39;esprit critique face aux
                  enjeux du numérique (cours de SNT).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Développement et Outils Numériques === */}
        <div className="border border-blue-200 rounded-lg shadow-sm">
          <button
            onClick={() => toggleSection("developpement")}
            className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Développement et Outils Numériques
              <span className="text-blue-600 text-xl font-bold">
                {openSections.developpement ? "−" : "+"}
              </span>
            </h3>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSections.developpement
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 border-t border-blue-200">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Maîtrise des langages de programmation et de balisage :
                  Python, HTML/CSS, JavaScript, Markdown, Latex.
                </li>
                <li>
                  Compétences en développement web (HTML/CSS, JavaScript,
                  Next.js, Reveal.js) et administration de CMS (WordPress,
                  Moodle/M@gitère) pour la gestion de plateformes
                  d&#39;apprentissage et la diffusion de contenus pédagogiques.
                </li>
                <li>
                  Compétences solides en traitement, analyse et visualisation de
                  données : R, Stata, Python (Pandas, Plotly...) , Javascript
                  (Google Charts, Chart.js...), Tableurs.
                </li>
                <li>
                  Intelligence Artificielle (IA): Maîtrise du Prompt
                  Engineering, intégration d&#39;IA via API (
                  <a
                    href="https://www.gyselinck.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    expérimentations &#x2197;
                  </a>
                  )..
                </li>
                <li>Utilisateur avancé de l&#39;environnement Linux.</li>
                <li>Score Profil PIX : 365.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Formation, Accompagnement et Innovation === */}
        <div className="border border-blue-200 rounded-lg shadow-sm">
          <button
            onClick={() => toggleSection("formation")}
            className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Formation, Accompagnement et Innovation
              <span className="text-blue-600 text-xl font-bold">
                {openSections.formation ? "−" : "+"}
              </span>
            </h3>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSections.formation
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 border-t border-blue-200">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Accompagnement et formation des collègues aux usages du
                  numérique éducatif en tant que RUPN.
                </li>
                <li>
                  Formateur académique : &quot;Mobiliser l’IA dans
                  l’enseignement des SES&quot; ; &quot;Débuter avec
                  Moodle&quot;.
                </li>
                <li>
                  Capacité à l&#39;innovation et à l&#39;expérimentation
                  pédagogique.
                </li>
                <li>
                  Application du polyptyque RFID (Recherche, Formation,
                  Innovation, Développement) dans ma pratique.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Gestion de Projet et Communication === */}
        <div className="border border-blue-200 rounded-lg shadow-sm">
          <button
            onClick={() => toggleSection("gestion")}
            className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Gestion de Projet et Communication
              <span className="text-blue-600 text-xl font-bold">
                {openSections.gestion ? "−" : "+"}
              </span>
            </h3>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSections.gestion
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 border-t border-blue-200">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Pilotage du projet TraAM 2024-2025 (Académies de Bordeaux &
                  Limoges) sur l&#39;évaluation avec le numérique et l&#39;IA :
                  définition des objectifs, coordination de l&#39;équipe et
                  animation des réunion.
                </li>

                <li>
                  Participation à des programme de recherche en contexte
                  international (Sénégal, Vietnam).
                </li>
                <li>
                  Capacité à travailler en équipe et de manière collaborative,
                  sens du contact.
                </li>
                <li>
                  Compétences rédactionnelles et capacité à communiquer à
                  l&#39;oral.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
