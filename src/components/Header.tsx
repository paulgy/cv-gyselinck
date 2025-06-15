// components/Header.tsx
import React from "react";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";

const Header = () => {
  return (
    // container pour centrer, padding et bordure basse
    <header className="container mx-auto px-4 py-8 mb-10">
      {/* Layout principal */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Colonne de gauche : Identité */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            Paul Gyselinck
          </h1>
          {/* Titre professionnel */}
          <h2 className="text-xl lg:text-2xl font-medium text-blue-600 mt-2">
            Professeur de SES et SNT
          </h2>
          <h2 className="text-xl lg:text-2xl font-medium text-blue-600 mt-2">
            IAN de SES
          </h2>
        </div>

        {/* Colonne de droite : Coordonnées */}
        <div className="text-left md:text-right text-gray-700">
          <div className="flex flex-col gap-1">
            <div className="flex items-center md:justify-end gap-3">
              <span className="order-2 md:order-1">
                Lycée Camille Jullian, Bordeaux
              </span>
              <FiMapPin className="order-1 md:order-2 text-gray-500" />
            </div>
            <a
              href="tel:+33668309827"
              className="flex items-center md:justify-end gap-3 hover:text-blue-600 transition-colors"
            >
              <span className="order-2 md:order-1">(+33) 6 68 30 98 27</span>
              <FiPhone className="order-1 md:order-2 text-gray-500" />
            </a>
            <a
              href="mailto:paul.gyselinck@ac-bordeaux.fr"
              className="flex items-center md:justify-end gap-3 hover:text-blue-600 transition-colors"
            >
              <span className="order-2 md:order-1">
                paul.gyselinck@ac-bordeaux.fr
              </span>
              <FiMail className="order-1 md:order-2 text-gray-500" />
            </a>
            <div className="flex items-center md:justify-end gap-3 mt-1">
              <span className="order-2 md:order-1">Permis B</span>
              <FiCheckCircle className="order-1 md:order-2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
