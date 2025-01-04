import React from "react";

export default function MusicGrid() {
  const musicas = [
    { id: 1, title: "Música 1" },
    { id: 2, title: "Música 2" },
    { id: 3, title: "Música 3" },
    { id: 4, title: "Música 4" },
    { id: 5, title: "Música 5" },
    { id: 5, title: "Música 6" },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 p-1 h-[100%] mt-20 mb-20 sm:grid-cols-4 sm:gap-4 sm:p-6">
      {/* Lado esquerdo com opções */}
      <div className="col-span-1 bg-gray-100 p-6 rounded-lg ">
        <ul className="space-y-4">
          <li className="cursor-pointer hover:bg-gray-300 p-2 rounded">
            Opção 1
          </li>
          <li className="cursor-pointer hover:bg-gray-300 p-2 rounded">
            Opção 2
          </li>
          <li className="cursor-pointer hover:bg-gray-300 p-2 rounded">
            Opção 3
          </li>
          <li className="cursor-pointer hover:bg-gray-300 p-2 rounded">
            Opção 4
          </li>
        </ul>
      </div>

      {/* Lado direito com músicas */}
      <div className="col-span-1 grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:col-span-3">
        {musicas.map((musica) => (
          <div
            key={musica.id}
            className="bg-gray-200 p-6 rounded-lg text-center "
          >
            {musica.title}
          </div>
        ))}
      </div>
    </div>
  );
}
