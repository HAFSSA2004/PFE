import React from "react";
import { Link } from "react-router-dom";
import "./Post4.css"; // Fichier CSS

const PostJob4 = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* En-tête avec image */}
      <div className="header-container d-flex align-items-center justify-content-between p-3">
        <h2 className="fw-bold">Décrivez le poste</h2>
        <img src="/image3.jpg" alt="Description du poste" className="header-image" />
      </div>

      {/* Zone de description */}
      <div className="mt-4">
        <label htmlFor="jobDescription" className="form-label fw-semibold">
          Description du poste *
        </label>
        <p className="text-muted">
          Cette description de poste a été générée par OpenAI. Vous pouvez la modifier ou la remplacer.
        </p>
        <textarea
          id="jobDescription"
          className="form-control"
          rows="8"
          defaultValue={`**Overview**
Nous recherchons un individu dédié et orienté vers les détails pour le poste de [Titre du Poste]. Ce rôle est essentiel pour assurer le bon fonctionnement de notre équipe et contribuer à notre succès global. Le candidat idéal aura une excellente éthique de travail, des compétences en communication et une passion pour la qualité.

**Responsabilités**
- Collaborer avec l'équipe pour atteindre les objectifs du projet.
- Maintenir des enregistrements et une documentation précise.
- Aider à l'amélioration de l'efficacité et de la productivité.
- Participer aux réunions, partager des idées et donner du feedback.
- Assurer la conformité avec les politiques de l'entreprise.
- Soutenir les autres départements pour favoriser un bon environnement de travail.

**Exigences**
- Solides compétences organisationnelles et souci du détail.
- Excellentes compétences en communication écrite et orale.
- Capacité à travailler en équipe et de manière autonome.
- Maîtrise des outils logiciels pertinents (préférée).
- Attitude proactive face aux problèmes et à l'amélioration continue.
- Une expérience antérieure est un plus mais pas obligatoire.

Nous encourageons tous les candidats qualifiés à postuler pour rejoindre notre équipe et avoir un impact positif sur notre organisation.`}
        />
      </div>

      {/* Boutons de navigation */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/postJob3" className="btn btn-secondary">
          ← Retour
        </Link>
        <button className="btn btn-primary">
          Continuer →
        </button>
      </div>
    </div>
  );
};

export default PostJob4;
