import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-start mb-10">
      {/* Colonne de gauche */}
      <div>
        <h1 className="text-5xl font-extrabold text-gray-800">
          Paul Gyselinck
        </h1>
        <div className="text-gray-600 mt-2">
          <p>Né le 18 novembre 1978</p>
          <p>Célibataire</p>
          <p>Français</p>
          <p>Permis B</p>
        </div>
      </div>

      {/* Colonne de droite */}
      <div className="text-right text-gray-700">
        <div className="flex items-center justify-end mb-1">
          <p className="mr-2">10, rue Auguste Poirson</p>
          <FiMapPin />
        </div>
        <p className="mb-1">33000 Bordeaux, France</p>
        <div className="flex items-center justify-end mb-1 mt-4">
          <a href="tel:+33668309827" className="mr-2 hover:text-blue-600">
            (33) 6 68 30 98 27
          </a>
          <FiPhone />
        </div>
        <div className="flex items-center justify-end">
          <a
            href="mailto:gy.paul@gmail.com"
            className="mr-2 hover:text-blue-600"
          >
            gy.paul@gmail.com
          </a>
          <FiMail />
        </div>
      </div>
    </header>
  );
};

export default Header;
