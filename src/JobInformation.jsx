import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function JobInformation() {
  const [formData, setFormData] = useState({
    intitule: "",
    nombreRecrues: "",
    typeLieu: "",
    lieu: "",
    typeContrat: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Ajouter les informations de base</h2>
        <img src="image.png" alt="Illustration" className="w-20" />
      </div>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">
            Intitulé du poste <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="intitule"
            value={formData.intitule}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Nombre de personnes à recruter pour ce poste <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="nombreRecrues"
            value={formData.nombreRecrues}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Type de lieu du poste <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="typeLieu"
            value={formData.typeLieu}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Quel est le lieu du poste ? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lieu"
            value={formData.lieu}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">
            Type de contrat <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="typeContrat"
            value={formData.typeContrat}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
            <ArrowLeft className="mr-2" size={16} /> Retour
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
            Continuer <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
