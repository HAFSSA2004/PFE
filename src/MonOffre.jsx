import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Briefcase, Calendar } from "lucide-react";
import "./MonOffre.css";

export default function MonOffre() {
  const { id } = useParams();
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pfe-api-8b8e.vercel.app/offres/recruteur/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de récupération des offres");
        return res.json();
      })
      .then((data) => setOffres(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">👋 Bienvenue, Recruteur</h1>
          <p className="text-gray-500">Voici la liste de vos offres d’emploi.</p>
        </header>

        {loading && (
          <div className="flex justify-center items-center h-32">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
            <p className="font-bold">Erreur</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && offres.length === 0 && (
          <div className="text-center text-gray-600 mt-16">
            <p className="text-lg">Aucune offre n’a été publiée pour l’instant.</p>
          </div>
        )}

        <div className="offres-grid">
          {offres.map((offre) => (
            <div key={offre._id} className="offre-card">
              <div className="offre-header">
                <div className="icon-box">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{offre.titre}</h2>
                </div>
              </div>

              <p className="offre-description">{offre.description}</p>

              <div className="offre-footer">
                <div className="date">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(offre.date_publication).toLocaleDateString()}</span>
                </div>

                <button
                  onClick={() => navigate(`/offre/${offre._id}`)}
                  className="voir-btn"
                >
                  Voir →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
