import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
import VideoMaker from "../../Components/VideoMaker/VideoMaker";

export default function VideoMakerPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          {/* Conteúdo com Sidebar (responsivo) */}
          <div className="hidden lg:flex mt-6 bg-bg/50 rounded-xl">
            <Sidebar />
            <VideoMaker />
          </div>
          <div className="mt-6 rounded-xl bg-bg/50 lg:hidden">
            <VideoMaker />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
