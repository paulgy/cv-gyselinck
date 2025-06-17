// src/components/Engagements.tsx

export default function Engagements() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Engagements Associatifs et Projets Personnels
      </h2>
      <div className="space-y-8">
        {/* === Engagement 1: CULTURACTION === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Fondateur et Président de l&apos;association CULTURACTION
          </h3>
          <p className="text-md text-gray-600">
            Clermont-Ferrand | 2005 - 2007
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Gestion de projet complète : organisation de manifestations
              culturelles pour le milieu étudiant.
            </li>
            <li>
              Recherche de financements : élaboration de dossiers et mise en
              place de partenariats (CROUS, universités, etc.).
            </li>
            <li>
              Communication numérique : création et administration du site web
              de l&apos;association.
            </li>
            <li>Animation et gestion administrative de l&apos;association.</li>
          </ul>
        </article>

        {/* === Engagement 2: Musique === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Musicien, DeeJay
          </h3>
          <p className="text-md text-gray-600">Depuis 1994</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Créativité et collaboration au sein de diverses formations
              musicales.
            </li>
            <li>Organisation de concerts et gestion de projets artistiques.</li>
            <li>Dj Set dans le milieu Afro-Latino.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
