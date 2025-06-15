import React from "react";
// L'import est maintenant utilisé !
import CVSection from "./CVSection";

const educationData = [
  {
    year: "2003-2012",
    degree: "Doctorat d'Économie du Développement",
    institution: "CERDI, Université d'Auvergne",
  },
  {
    year: "2003",
    degree:
      "Magistère d'Économie du Développement & DEA d'Économie du Développement (mention très bien)",
    institution: "CERDI, Université d'Auvergne",
  },
  {
    year: "2000",
    degree: "Licence Sciences Économiques et Sociales",
    institution: "Université Bordeaux IV",
  },
];

const Education = () => {
  return (
    // On retire la balise <section> qui est déjà dans CVSection.tsx
    <>
      {/* On remplace le <h2> par notre composant réutilisable */}
      <CVSection title="Education" />

      {educationData.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-x-8 mb-4">
          <p className="w-full md:w-1/4 font-semibold text-gray-700">
            {item.year}
          </p>
          <div className="w-full md:w-3/4">
            <h3 className="font-bold text-gray-800">{item.degree}</h3>
            <p className="text-gray-600">{item.institution}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
