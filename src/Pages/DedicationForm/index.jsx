import React from "react";
import Banner from "../../Components/Banner/Banner";
import DedicationForm from "../../Components/DedicationForm/DeticationForm";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/Searchbar/Searchbar";

export default function DedicationFormPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <Banner />
          <SearchBar />
          <div className="mt-6 bg-blue/50 rounded-xl justify-center flex ">
            <DedicationForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
