"use client";
import { useState } from "react";

export default function Formations() {
  const [isFormationsContinuesOpen, setIsFormationsContinuesOpen] =
    useState(false);

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Formations et Diplômes
      </h2>
      <div className="space-y-8">
        {/* === Diplômes Universitaires === */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Diplômes Universitaires et Certification
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>CAPES de sciences économiques et sociales (2014)</li>
            <li>
              Magistère & DEA en Économie du Développement - Université
              d&apos;Auvergne | 2003 - mention Très Bien
            </li>
            <li>
              Licence en Sciences Économiques et Sociales - Université Bordeaux
              IV | 2000
            </li>
          </ul>
        </div>

        {/* === Formations Continues Clés (Accordéon) === */}
        <div>
          <button
            onClick={() =>
              setIsFormationsContinuesOpen(!isFormationsContinuesOpen)
            }
            className="w-full flex items-center justify-between text-xl font-semibold text-gray-800 mb-3 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:text-blue-800 focus:bg-blue-50 p-2 rounded-lg group"
            aria-expanded={isFormationsContinuesOpen}
            aria-controls="formations-continues-content"
          >
            <div className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
              <span>Formations Continues Pertinentes</span>
            </div>
            <div
              className={`w-6 h-6 flex items-center justify-center text-2xl font-bold transform transition-all duration-300 ${
                isFormationsContinuesOpen
                  ? "rotate-45 text-blue-800"
                  : "text-gray-600"
              }`}
            >
              +
            </div>
          </button>

          <div
            id="formations-continues-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFormationsContinuesOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transform transition-all duration-300 ease-in-out ${
                isFormationsContinuesOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Animation du réseau SRANE (2024-2025)</li>
                <li>
                  Intégrer le numérique dans sa pratique de classe (2023-2024)
                </li>
                <li>
                  Ateliers Numérique et Sciences Informatiques (NSI) (2023-2024)
                </li>
                <li>Algorithmique et programmation au lycée (2019-2020)</li>
                <li>
                  Sciences Numériques et Technologie (SNT) en 2nde (2018-2019)
                </li>
                <li>Accompagnement des formateurs (2017-2018)</li>
                <li>Les usages du numérique en SES (2016-2017)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
