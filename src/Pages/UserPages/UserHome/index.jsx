import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import NavbarMobile from "../../../Components/Navbar/NavbarMobile";
import Banner from "../../../Components/Banner/Banner";
import SearchBar from "../../../Components/Searchbar/Searchbar";
import Footer from "../../../Components/Footer/Footer";
import UserComponent from "../../../Components/UserComponents/UserComponent";

export default function UserPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          <div className="mt-6 bg-bg/50 rounded-xl">
            <UserComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
