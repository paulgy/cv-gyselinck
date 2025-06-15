// src/components/Header.tsx

// Voici la structure de base pour un composant React avec TypeScript
// Le "export default" est ce qui corrige l'erreur "is not a module"
export default function Header() {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Paul Gyselinck
      </h1>
      <p className="text-xl md:text-2xl text-blue-700 mt-2">
        Enseignant et Candidat Référent Numérique & IA
      </p>

      <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-gray-600">
        <a href="mailto:gy.paul@gmail.com" className="hover:text-blue-700">
          gy.paul@gmail.com
        </a>
        <span>•</span>
        <span>06 68 30 98 27</span>
        <span>•</span>
        <span>Bordeaux</span>
      </div>
      <div className="mt-4 flex justify-center items-center gap-x-4">
        <a
          href="https://cv.gyselinck.fr"
          className="text-blue-600 hover:underline"
        >
          cv.gyselinck.fr
        </a>
        {/* Ajoutez ici le lien vers votre profil LinkedIn si vous en avez un */}
        {/* <a href="LIEN_LINKEDIN" className="text-blue-600 hover:underline">
          Profil LinkedIn
        </a> */}
      </div>
    </header>
  );
}
