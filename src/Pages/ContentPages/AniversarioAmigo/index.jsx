import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Banner from "../../../Components/Banner/Banner";
import SearchBar from "../../../Components/Searchbar/Searchbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import { FaRegCirclePlay } from "react-icons/fa6";
import NavbarMobile from "../../../Components/Navbar/NavbarMobile";

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

export default function AniversarioAmigoPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          <div className="flex mt-6 bg-bg/50 rounded-xl">
            <Sidebar />
            <section
              className="flex-1 bg-bg/40 text-white p-6 rounded-lg shadow-lg lg:ml-6 items-center justify-center">
              <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl">
                <h1
                  className="text-center m-4 font-semibold text-3xl"
                  id="aniversario-amigo"
                >
                  Aniversário de Amigo
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {songs.map((song, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-4 rounded-lg flex items-center shadow-md w-full"
                    >
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold">{song.title}</h2>
                        <p className="text-sm text-gray-300">{song.artist}</p>
                        <p className="italic text-gray-400 mt-1">
                          "{song.lyric}"
                        </p>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
