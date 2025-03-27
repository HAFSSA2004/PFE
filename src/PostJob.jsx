import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id_recruteur: idRecruteur, // Ajout de l'ID du recruteur
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Offre publiée avec succès !");
        navigate("/Dashboard");
      } else {
        alert(data.message || "Erreur lors de la publication");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue !");
    }
  };
  
  
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5 form-container">
        <h2 className="form-title text-center">Publier une offre</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Titre du poste *</label>
            <input type="text" className="form-control" name="titre" value={formData.titre} onChange={handleChange} required />
          </div>

         

          <div className="mb-3">
            <label className="form-label">Nom de l'entreprise *</label>
            <input type="text" className="form-control" name="entreprise" value={formData.entreprise} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Lieu *</label>
            <input type="text" className="form-control" name="lieu" value={formData.lieu} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Salaire (en MAD) *</label>
            <input type="number" className="form-control" name="salaire" value={formData.salaire} onChange={handleChange} required />
          </div>
<div className="mb-3">
<label htmlFor="jobDescription" className="form-label fw-semibold">Description du poste *</label>
        <p className="text-muted">Cette description de poste a été générée par OpenAI. Vous pouvez la modifier ou la remplacer.</p>
        <textarea
  id="jobDescription"
  className="form-control"
  rows="8"
  name="description"
  value={formData.description}
  onChange={handleChange} // ✅ Met à jour formData
/>

</div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/Dashboard" className="btn btn-secondary">← Retour</Link>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
  Publier →
</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
