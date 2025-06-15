import React from "react";

const Skills = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-gray-300 pb-2 mb-4">
        Langues et compétences informatiques
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Langues */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Langues</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <span className="font-semibold">Français :</span> Langue
              maternelle
            </li>
            <li>
              <span className="font-semibold">Anglais :</span> Courant
            </li>
            <li>
              <span className="font-semibold">Portugais :</span> Moyen
            </li>
            <li>
              <span className="font-semibold">Espagnol :</span> Débutant
            </li>
          </ul>
        </div>

        {/* Informatique */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Informatique
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Économétrie :</span> R, Stata,
            E-Views
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Autres :</span> OpenOffice, MS
            Office, LaTeX, HTML, Shell Linux
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
