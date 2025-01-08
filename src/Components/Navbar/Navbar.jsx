import React from "react";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-primary/70 text-gray-200 py-3 rounded-lg shadow-md mt-4 mb-4 justify-around hidden lg:flex">
      <a href="/" className="font-bold hover:text-white">
        ♥ Início
      </a>
      <a
        href="/reacao-gravada#reacao-gravada"
        className="font-bold hover:text-white"
      >
        ♥ Reação gravada
      </a>
      <a
        href="/reconciliacaoF#reconciliacaoF"
        className="font-bold hover:text-white"
      >
        ♥ Reconciliação/desculpas
      </a>
      <a
        href="/declaracao-amor-fem#declaracao-amor-fem"
        className="font-bold hover:text-white"
      >
        ♥ Declaração de amor
      </a>
      <a
        href="/login"
        className="font-bold hover:text-white flex gap-1 items-center"
      >
        <FiLogIn /> Entrar
      </a>
    </nav>
  );
}
