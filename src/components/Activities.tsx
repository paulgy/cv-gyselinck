import React from "react";

const activitiesData = [
  {
    year: "2005-2007",
    role: "Président et fondateur de l'association CULTURACTION", //
    description:
      "Organisation de manifestations culturelles, élaboration de dossiers de financement, partenariats, communication et création web.", //
    location: "Clermont-Ferrand",
  },
  {
    year: "2010 & 2011",
    role: "Participation à l'organisation du carnaval de Clermont-Ferrand", //
    description:
      "Association SambaGogo. Mobilisation et gestion des bénévoles.", //
    location: "Clermont-Ferrand",
  },
  {
    year: "2012",
    role: "DJing", //
    description: "El Cubanito, Bordeaux.", //
    location: "Bordeaux",
  },
  {
    year: "Depuis 1994",
    role: "Musicien (basse)", //
    description:
      "Création et managment de groupes de musique, organisation de concerts.", //
    location: "Divers",
  },
];

const Activities = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-gray-300 pb-2 mb-4">
        Activités Culturelles et Associatives
      </h2>
      {activitiesData.map((item, index) => (
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

export default Activities;
