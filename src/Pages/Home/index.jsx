import React from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/Content/Content";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";

export default function HomePage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          <div className="hidden lg:flex mt-6 bg-bg/50 rounded-xl">
            <Sidebar />
            <Content />
          </div>
          <div className="mt-6 rounded-xl bg-bg/50 lg:hidden">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
