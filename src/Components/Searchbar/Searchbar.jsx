// Codigo fonte da barra de pesquisa!

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="bg-primary/70 text-gray-200 py-3 rounded-lg shadow-md mt-4 flex justify-center">
      <input
        type="text"
        placeholder="Pesquisar no site"
        className="w-3/4 px-4 py-2 rounded-lg focus:outline-none text-gray-900"
      />
      <button className="bg-primary ml-2 px-4 py-2 rounded-lg text-white hover:bg-secondary-dark">
      <FaSearch />
      </button>
    </div>
  );
}
