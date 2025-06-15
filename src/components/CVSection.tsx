import React from "react";

interface CVSectionProps {
  title: string;
}

const CVSection: React.FC<CVSectionProps> = ({ title }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-gray-300 pb-2 mb-4">
        {title}
      </h2>
      {/* Le contenu de la section sera ajouté par les autres composants */}
    </section>
  );
};

export default CVSection;
