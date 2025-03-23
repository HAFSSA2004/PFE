import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css"; // Import du CSS personnalisé

const Post = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5 form-container">
        {/* En-tête avec image et titre */}
        <div className="form-header">
          <img src="/image1.jpg" alt="Illustration" className="form-image" />
          <h2 className="form-title">Créez un compte employeur</h2>
        </div>

        {/* Formulaire */}
        <form>
          {/* Nom de l'entreprise */}
          <div className="mb-3">
            <label className="form-label">
              Nom de l’entreprise <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          {/* Prénom et Nom */}
          <div className="mb-3">
            <label className="form-label">
              Prénom et nom <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          {/* Comment avez-vous entendu parler de nous ? */}
          <div className="mb-3">
            <label className="form-label">
              Comment avez-vous entendu parler de nous ?
            </label>
            <input type="text" className="form-control" />
          </div>

          {/* Numéro de téléphone */}
          <div className="mb-3">
            <label className="form-label">Numéro de téléphone</label>
            <input type="tel" className="form-control" />
            <p className="text-muted small mt-1">
              Numéro réservé aux communications concernant la gestion du compte.
              Non visible pour les chercheurs d’emploi.
            </p>
          </div>

          {/* Boutons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/dashboard" className="btn btn-secondary">
              ← Retour
            </Link>
            <Link to="/PostJob2" className="btn btn-primary">
              Continuer →
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
