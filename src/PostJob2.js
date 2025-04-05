import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css"; // Fichier CSS pour le style personnalisé

const PostJob2 = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5 form-container">
        {/* En-tête avec image et titre */}
        <div className="form-header">
          <img src="/image2.jpg" alt="Illustration" className="form-image" />
          <h2 className="form-title">Ajouter les informations de base</h2>
        </div>

        {/* Formulaire */}
        <form>
          {/* Intitulé du poste */}
          <div className="mb-3">
            <label className="form-label">
              Intitulé du poste <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          {/* Nombre de personnes à recruter */}
          <div className="mb-3">
            <label className="form-label">
              Nombre de personnes à recruter pour ce poste <span className="text-danger">*</span>
            </label>
            <input type="number" className="form-control" required />
          </div>

          {/* Type de lieu du poste */}
          <div className="mb-3">
            <label className="form-label">
              Type de lieu du poste <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          {/* Lieu du poste */}
          

          {/* Type de contrat */}
          <div className="mb-3">
            <label className="form-label">
              Type de contract <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          {/* Boutons de navigation */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/postJob" className="btn btn-secondary">
              ← Retour
            </Link>
            <Link to="/PostJob3" className="btn btn-primary">
              Continuer →
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob2;
