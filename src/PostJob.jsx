import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";

const PostJob = () => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    entreprise: "",
    lieu: "",
    salaire: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const idRecruteur = localStorage.getItem("userId");
    if (!idRecruteur) {
      alert("Erreur : recruteur non identifié !");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/offres", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id_recruteur: idRecruteur }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Votre offre a été publiée avec succès !");
        navigate("/Dashboard");
      } else {
        alert(data.message || "Erreur lors de la publication.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5 form-container">
        <div className="form-header text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Icone emploi"
            className="form-image"
          />
          <h2 className="form-title">Créer une offre d'emploi</h2>
          <p className="text-muted">
            Merci de remplir les informations suivantes pour publier une nouvelle offre.
          </p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Titre du poste *</label>
            <input
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ex : Développeur Full Stack"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Entreprise *</label>
            <input
              type="text"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              className="form-control"
              placeholder="Ex : Tech Solutions SARL"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Lieu *</label>
            <input
              type="text"
              name="lieu"
              value={formData.lieu}
              onChange={handleChange}
              className="form-control"
              placeholder="Ex : Casablanca"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salaire (en MAD) *</label>
            <input
              type="number"
              name="salaire"
              value={formData.salaire}
              onChange={handleChange}
              className="form-control"
              placeholder="Ex : 12000"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description du poste *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Décrivez clairement les missions, compétences requises et avantages..."
              required
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Publier l'offre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
