import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
 function EmployerSignup() {
  const [formData, setFormData] = useState({
    entreprise: "",
    nom: "",
    source: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Créez un compte employeur</h2>
        <img src="image.png" alt="Illustration" className="w-20" />
      </div>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">
            Nom de l'entreprise <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Prénom et nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Comment avez-vous entendu parler de nous ?
          </label>
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Numéro de téléphone</label>
          <p className="text-sm text-gray-500">
            Numéro réservé aux communications concernant la gestion du compte. Non visible pour les chercheurs d'emploi.
          </p>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
            <ArrowLeft className="mr-2" size={16} /> Retour
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
           <Link to='/jobInformation'> Continuer <ArrowRight className="ml-2" size={16} /></Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployerSignup