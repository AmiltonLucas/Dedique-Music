// codigo fonte da navbar desktop!

import React from "react";
import { FiLogIn } from "react-icons/fi";
import Perfil from "../../Assets/icons/perfil.png";
import Logo from "../../../public/logo2.png"

const user = {
  name: "José Airton",
  email: "joseairton8712@gmail.com",
  phone: "+55 88 99999 9999",
  location: "Juazeiro do Norte, Ceará",
  subscription: "Padrão",
};

export default function Navbar() {
  return (
    <nav className="bg-primary/70 text-gray-200 py-3 rounded-lg shadow-md mt-4 mb-4 justify-around hidden lg:flex">
      <a href="/">
        <span className="sr-only">Dedique Music</span>
        <img alt="" src={Logo} className="h-12 w-auto" />
      </a>
      <a href="/" className="font-bold hover:text-white m-auto">
        ♥ Início
      </a>
      <a
        href="/reacao-gravada#reacao-gravada"
        className="font-bold hover:text-white m-auto"
      >
        ♥ Reação gravada
      </a>
      <a
        href="/reconciliacaoF#reconciliacaoF"
        className="font-bold hover:text-white m-auto"
      >
        ♥ Reconciliação/desculpas
      </a>
      <a
        href="/declaracao-amor-fem#declaracao-amor-fem"
        className="font-bold hover:text-white m-auto"
      >
        ♥ Declaração de amor
      </a>
      <a
        href="/login"
        className="font-bold hover:text-white flex gap-1 items-center m-auto"
      >
        <FiLogIn /> Entrar
      </a>
      <a href="/user">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 m-auto">
          <img
            src={Perfil}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-blue-500 hover:border-primary bg-white cursor-pointer transition-all"
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-1xl font-semibold hover:text-white">
              {user.name}
            </h1>
            <p className="text-[12px] hover:text-white">{user.email}</p>
          </div>
        </div>
      </a>
    </nav>
  );
}
