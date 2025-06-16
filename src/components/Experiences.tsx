// src/components/Experiences.tsx

export default function Experiences() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Expériences Professionnelles
      </h2>
      <div className="space-y-8">
        {/* === Expérience 1: Enseignant et Formateur === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Professeur de SES
          </h3>
          <p className="text-md text-gray-600">
            Lycée Camille Jullian, Bordeaux | Depuis septembre 2015
            <br />
            Lycée Camille Jullian, Bordeaux - Stagiaire | 2014-2015
            <br />
            Lycée Montaigne, Bordeaux - Contractuel Admissible | 2013-2014
          </p>
          <h3 className="text-xl font-semibold text-gray-800">
            Professeur de SNT
          </h3>
          <p className="text-md text-gray-600">
            Lycée Camille Jullian, Bordeaux | Depuis septembre 2019
          </p>
        </article>

        {/* === Expérience 2: Université === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Doctorant en Économie du Développement, <br />
            Moniteur, Attaché d&apos;Enseignement et de Recherche (ATER)
          </h3>
          <p className="text-md text-gray-600">
            CERDI, Université d&apos;Auvergne | 2003 - 2010
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Travaux dirigés de Macro-économie, Micro-économie, Économie
              Politique, Démographie, Grandes Fonctions de l’Entreprise.
            </li>
            <li>
              Traitement des données d’enquêtes pour l’évaluation du programme
              National d’Infrastructures Rurales (PNIR) au Sénégal, en
              collaboration avec l’Université Gaston Berger, Saint-Louis,
              Sénégal | 2005
            </li>
            <li>
              Publication et valorisation de travaux de recherche en économie du
              développement.
            </li>
          </ul>
        </article>

        {/* === Expérience 3: OMS === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Stagiaire chargé d&apos;étude
          </h3>
          <p className="text-md text-gray-600">
            Organisation Mondiale de la Santé (OMS), Hanoï, Vietnam | 2002
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Étude sur la demande de tabac au Vietnam en collaboration avec
              L’Institut d’Economie et le Ministère de la Santé (3 mois).
            </li>
          </ul>
        </article>
        {/* === Expérience 4: Maroc === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Stagiaire dans une association de micro-crédit,
          </h3>
          <p className="text-md text-gray-600">
            A.M.S.S.F M-C, Fès, Maroc | 2001
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Élaboration d’une demande de financement pour un projet de
              Micro-Finance (1 mois).
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
