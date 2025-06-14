import React, { useState } from "react";

export default function VideoMaker() {
  const [images, setImages] = useState([]);
  const [music, setMusic] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    const updatedImages = [...images, ...newPreviews].slice(0, 5);
    setImages(updatedImages);
  };

  const handleMusicChange = (e) => {
    setMusic(e.target.value);
  };
  return (
    <>
      {/* Área com upload de imagem e música */}
      <div className=" bg-gray-900 rounded-xl shadow p-4 m-4 h-[100%]">
        <h2 className="text-xl text-white font-bold mb-4 text-center">
          Prompt de Imagens e Música
        </h2>

        {/* Upload de Imagens */}
        <div className="mb-6">
          <label className="block font-medium mb-2  text-white">Envie até 5 imagens:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mb-4"
          />
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Preview ${idx + 1}`}
                  className="rounded-xl w-full h-32 object-cover"
                />
              ))}
            </div>
          )}
        </div>

        {/* Seletor de Música */}
        <div className="text-center">
          <label className="block font-medium mb-2  text-white">Escolha sua música:</label>
          <select
            value={music}
            onChange={handleMusicChange}
            className="w-full p-2 border rounded mb-4 max-w-sm mx-auto"
          >
            <option value="">Selecione uma música...</option>
            <option value="/musicas/musica1.mp3">Música 1</option>
            <option value="/musicas/musica2.mp3">Música 2</option>
            <option value="/musicas/musica3.mp3">Música 3</option>
          </select>
          {music && (
            <audio controls className="w-full max-w-sm mx-auto">
              <source src={music} type="audio/mpeg" />
              Seu navegador não suporta o player de áudio.
            </audio>
          )}
        </div>
      </div>
    </>
  );
}
