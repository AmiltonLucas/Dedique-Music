import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sobre nós */}
        <div>
          <h2 className="text-lg font-bold mb-4">Sobre nós</h2>
          <p className="text-sm">
            Somos apaixonados por criar soluções inovadoras que impactam vidas
            de maneira positiva. Nosso compromisso é com a excelência e a
            satisfação dos clientes.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h2 className="text-lg font-bold mb-4">Links úteis</h2>
          <ul className="space-y-2">
            <li>
              <a href="/sobre" className="hover:text-white transition">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="/servicos" className="hover:text-white transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-white transition">
                Contato
              </a>
            </li>
            <li>
              <a
                href="/politica-de-privacidade"
                className="hover:text-white transition"
              >
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h2 className="text-lg font-bold mb-4">Siga-nos</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © 2025 Dedique music. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
