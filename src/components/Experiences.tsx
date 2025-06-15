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
            Professeur de SES et Formateur Académique
          </h3>
          <p className="text-md text-gray-600">
            Lycée Camille Jullian, Bordeaux | Depuis septembre 2015
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Mise en œuvre des programmes incluant les enseignements de
              spécialité (SES) et transversaux (SNT, NSI).
            </li>
            <li>
              Formateur académique sur les usages du numérique en SES et pour
              les enseignants stagiaires (FSTG).
            </li>
            <li>
              Participation active aux formations et à l&apos;animation du
              réseau SRANE de l&apos;académie de Bordeaux.
            </li>
            <li>
              Accompagnement des élèves dans le cadre de la réforme du lycée et
              des nouvelles modalités d&apos;évaluation.
            </li>
          </ul>
        </article>

        {/* === Expérience 2: Université === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Attaché d&apos;Enseignement et de Recherche (ATER) & Doctorant
          </h3>
          <p className="text-md text-gray-600">
            CERDI, Université d&apos;Auvergne | 2003 - 2012
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Enseignement universitaire en microéconomie, macroéconomie et
              démographie.
            </li>
            <li>
              Gestion et traitement de données statistiques complexes dans un
              cadre de recherche international (PNIR, Sénégal).
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
              Collaboration avec des institutions nationales (Ministère de la
              Santé) sur des projets d&apos;étude.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
