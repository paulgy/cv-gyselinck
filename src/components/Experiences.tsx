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
        {/* === Expérience IAN === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">IAN de SES</h3>
          <p className="text-md text-gray-600 mb-2">
            Académie de Bordeaux | depuis juin 2023
          </p>

          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Administration du site web académique SES (Wordpress), refonte de
              l&#39;architecture (en cours) et de la charte graphique,
              publication régulière d&#39;article et lettres d&#39;information.
            </li>
            <li>
              Administration de la liste de diffusion académique (Listeinfo_ses)
            </li>
            <li>
              <strong>Création de ressources pédagogiques numériques :</strong>{" "}
              Conception et publication d&#39;activités interactives (tables de
              mobilité, nomenclature PCS, télétravail, analyse PIB).
            </li>
            <li>
              <strong>Plateforme Edubase :</strong> Indexation et valorisation
              des scénarios pédagogiques, participation aux webinaires de
              formation technique.
            </li>
            <li>
              <strong>Innovation pédagogique :</strong> Portage et animation du
              projet TraAM 2024-2025.
            </li>
            <li>
              <strong>Participation institutionnelle :</strong> Participation
              régulière aux séminaires nationaux des IAN (3 éditions), veille
              sur les innovations des autres académies, contribution aux
              réflexions nationales sur le numérique éducatif.
            </li>
            <li>
              <strong>Compétences développées :</strong> Traitement de données
              statistiques, création de parcours interactifs, maîtrise des
              outils collaboratifs, analyse des usages numériques pédagogiques.
            </li>
          </ul>
        </article>
        {/* === RUPN === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">RUPN)</h3>
          <p className="text-md text-gray-600">
            Lycée Camille Jullian, Bordeaux | 2021 - 2022
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              <strong>Conseil et pilotage :</strong> Appui à l&#39;équipe de
              direction dans le pilotage du numérique et la définition de la
              stratégie d&#39;établissement.
            </li>
            <li>
              <strong>Accompagnement pédagogique :</strong> Formation et support
              auprès des équipes pédagogiques pour l&#39;intégration du
              numérique dans les pratiques d&#39;enseignement.
            </li>
            <li>
              <strong>Administration et support technique :</strong> Gestion des
              accès au réseau et aux services pour les enseignants et les élèves
              (plus de 30 tickets gérés). Interface avec le support technique
              régional (e-ANNA) via l&#39;outil GLPI.
            </li>
            <li>
              <strong>Déploiement de projets nationaux :</strong> Organisation
              des campagnes Pix pour tous les niveaux et gestion de la
              certification pour les classes de terminale. Prise en charge des
              tests de positionnement de seconde.
            </li>
          </ul>
        </article>
        {/* === Expérience 2: Université === */}
        <article>
          <h3 className="text-xl font-semibold text-gray-800">
            Doctorant en Économie du Développement, <br />
            Moniteur, ATER, Vacataire
          </h3>
          <p className="text-md text-gray-600">
            CERDI, Université d&apos;Auvergne | 2003 - 2010
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              Chargé de Travaux dirigés de Macro-économie, Micro-économie,
              Économie Politique, Démographie, Grandes Fonctions de
              l’Entreprise.
            </li>
            <li>
              Sujet de thèse :{" "}
              <em>
                Impact de l’éducation sur le revenu des ménages dans un contexte
                de transition économique : Une application sur données
                Vietnamiennes.
              </em>{" "}
              sous la direction de J.L. Arcand.
            </li>
            <li>
              Traitement et analyse des données VLSS (Vietnam Living standards
              Survey)
            </li>
            <li>
              Evaluation du Capital Santé au Brésil. Traitement et analyse et
              des données de l&apos;enquête PNAD 1998 (Pesquisa National por
              Amostra de Domicílios) sur la santé au Brésil.
            </li>
            <li>
              Traitement des données d’enquêtes pour l’évaluation du programme
              National d’Infrastructures Rurales (PNIR) au Sénégal, en
              collaboration avec l’Université Gaston Berger, Saint-Louis,
              Sénégal | 2005
            </li>
            <li>
              Participations à colloques et séminaire, publication et
              valorisation de travaux de recherche en économie du développement.
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
