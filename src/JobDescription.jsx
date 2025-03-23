import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

export default function JobDescription() {
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Décrivez le poste</h2>
        <img src="image.png" alt="Illustration" className="w-20" />
      </div>

      <p className="font-medium mb-2">Description du poste <span className="text-red-500">*</span></p>
      <p className="text-gray-500 text-sm mb-2">
        Cette description de poste a été générée par OpenAI. Vous pouvez la modifier ou la remplacer.
      </p>

      <Editor
        apiKey="your-tinymce-api-key"
        initialValue="<p><strong>Overview</strong><br/>We are seeking a dedicated individual for this role...</p>"
        init={{
          height: 200,
          menubar: false,
          plugins: ["lists"],
          toolbar: "bold italic | bullist numlist",
        }}
        onEditorChange={(content) => setDescription(content)}
      />

      <div className="flex justify-end mt-4">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
          Continuer <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
}
