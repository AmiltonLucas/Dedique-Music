// Esta page sera usada para conteudo de musicas! Codigo onde aparece as musicas para usuarios

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
import Banner from "../../Components/Banner/Banner";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MusicGrid from "../../Components/MusicGrid/MusicGrid";
import Footer from "../../Components/Footer/Footer";

export default function ContentPages() {
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
            <section className="flex-1 bg-bg/40 text-white p-6 rounded-lg shadow-lg lg:ml-6 items-center justify-center">
              <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl">
                <h1 className="text-center m-4 font-semibold text-3xl" id="">
                  Music Grid "Texto Variavel aqui!"
                </h1>
                <MusicGrid />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
