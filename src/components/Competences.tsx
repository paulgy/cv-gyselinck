// src/components/Competences.tsx

export default function Competences() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-6">
        Compétences Numériques et Pédagogiques
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* === Pédagogie et Numérique === */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Pédagogie et Numérique
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Ingénierie pédagogique : conception de séquences intégrant le
              numérique (SNT, NSI).
            </li>
            <li>
              Maîtrise des plateformes et outils académiques : M@gistère, ENT.
            </li>
            <li>
              Formation à l&apos;algorithmique et à la programmation au lycée.
            </li>
            <li>
              Éducation à l&apos;esprit critique face à l&apos;IA, en accord
              avec le cadre d&apos;usage national.
            </li>
          </ul>
        </div>

        {/* === Formation et Accompagnement === */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Formation et Accompagnement
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Formateur académique : animation de formations pour les
              enseignants (FSTG, SES).
            </li>
            <li>Accompagnement des équipes et des formateurs.</li>
            <li>Participation active aux formations du réseau SRANE.</li>
          </ul>
        </div>

        {/* === Gestion de Projet === */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Gestion de Projet
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Fondateur d&apos;association (CULTURACTION) : de la création à la
              gestion.
            </li>
            <li>Recherche de financements et développement de partenariats.</li>
            <li>
              Communication et création de supports numériques (site web
              associatif).
            </li>
            <li>
              Coordination de projets en contexte international (Sénégal,
              Vietnam).
            </li>
          </ul>
        </div>

        {/* === Outils et Langages === */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Outils et Langages
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Certification PIX</strong> (essentiel pour la mission).
            </li>
            <li>Langages : HTML, Shell Linux, R, Stata.</li>
            <li>
              Bureautique : suites MS Office et OpenOffice (ou LibreOffice).
            </li>
            <li>Plateformes de données et d&apos;économétrie : E-Views.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
