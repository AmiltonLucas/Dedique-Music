// pagina apenas para testes de novas funções e front-end!

import React from "react";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import Payment from "../../Components/Payment/Payment";

export default function TestPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          {/* Main Content */}
          <div className="mt-6 bg-bg/50 rounded-xl justify-center flex ">
            <Payment />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
