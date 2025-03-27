import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Briefcase, Calendar } from "lucide-react";

export default function MonOffre() {
    const { id } = useParams();
    const [offres, setOffres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5050/offres/recruteur/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur de récupération des offres");
                return res.json();
            })
            .then((data) => setOffres(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                🚀 Mes Offres d'Emploi
            </h1>

            {loading && (
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}

            {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg shadow-md flex items-center">
                    <p className="font-bold">Erreur :</p>
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && offres.length === 0 && (
                <p className="text-gray-500 text-lg text-center">
                    Aucune offre disponible pour le moment.
                </p>
            )}

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {offres.map((offre) => (
                    <div key={offre.id} className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-800">{offre.titre}</h2>
                            </div>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-2">{offre.description}</p>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                            <Calendar className="w-5 h-5 mr-2" />
                            Publié le {offre.date_publication}
                        </div>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Voir l’offre
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
