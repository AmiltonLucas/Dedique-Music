import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function DedicationForm() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <a
        href="/"
        className="absolute left-[15rem] top-[30rem] text-3xl text-gray-200 flex gap-2 hover:text-gray-100 p-1 border-2 border-gray-900 bg-gray-900 rounded-xl"
      >
        <FaArrowLeft className="mt-1" />
        Voltar
      </a>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Dedique uma Música
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preencha seu nome:
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Seu Whatsapp:
            </label>
            <input
              type="text"
              placeholder="Seu Whatsapp"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Whatsapp de quem recebe:
              </label>
              <input
                type="text"
                placeholder="Whatsapp pra quem recebe"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nome de quem recebe:
              </label>
              <input
                type="text"
                placeholder="Nome da pessoa que recebe"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="default-message"
              checked={isChecked}
              onChange={toggleCheckbox}
              className={`w-5 h-5 rounded focus:ring focus:ring-blue-200 ${
                isChecked ? "bg-blue-500 border-blue-500" : "border-gray-300"
              }`}
            />
            <label
              htmlFor="default-message"
              className={`font-medium ${
                isChecked ? "text-blue-500" : "text-gray-700"
              }`}
            >
              Você é algo assim é tudo pra mim, é como eu sonhava Baby.
            </label>
          </div>
          <div>
            <textarea
              placeholder="Dedique uma mensagem personalizada..."
              className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:ring focus:ring-blue-200 outline-none resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-blue-500 hover:underline font-medium"
            >
              Visualizar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DedicationForm;
