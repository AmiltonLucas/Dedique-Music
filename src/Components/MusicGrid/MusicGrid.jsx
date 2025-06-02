// Codigo fonte do grid de musicas!

import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const songs = [
  {
    title: "Você",
    artist: "Tim Maia",
    lyric: "Você é algo assim é tudo pra mim",
  },
  {
    title: "Vento no Litoral",
    artist: "Legião Urbana",
    lyric: "Vai ser difícil eu sem você porque você está comigo o tempo todo",
  },
  {
    title: "Certas coisas",
    artist: "Lulu Santos",
    lyric: "Eu te amo calado como quem ouve uma sinfonia de silêncio e de luz",
  },
  {
    title: "Como vai você",
    artist: "Roberto Carlos",
    lyric: "Eu quero amanhecer ao seu redor, Preciso tanto me fazer feliz",
  },
  {
    title: "Pingos de Amor",
    artist: "Kid Abelha",
    lyric: "Vamos ser outra vez nós dois, Vai chover pingos de amor",
  },
];

export default function MusicGrid() {
  return (
    <div className="flex mt-6 rounded-xl">
      <section className="flex-1 text-white p-6 rounded-lg shadow-lg lg:ml-6 items-center justify-center">
        <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {songs.map((song, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg flex items-center shadow-md w-full"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{song.title}</h2>
                  <p className="text-sm text-gray-300">{song.artist}</p>
                  <p className="italic text-gray-400 mt-1">"{song.lyric}"</p>
                </div>
                <a href="/form-detication">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 ml-4">
                    <FaRegCirclePlay />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
