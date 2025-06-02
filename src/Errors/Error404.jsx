// Pagina de error 404 (quando a pagina que procura não existe ou está offline)!

import React from "react";

export default function Error404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-600 to-primary text-white animate-fadeIn">
      <h1 className="text-8xl font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-6 animate-slideIn">
        Página não encontrada
      </h2>
      <p className="text-center text-lg mb-8 px-6 animate-slideIn delay-200">
        Parece que a página que você está procurando não existe ou foi removida.
        😢
      </p>
      <a
        href="/"
        className="bg-white text-primary font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        Voltar para a página inicial
      </a>
      <div className="absolute bottom-4 text-sm text-gray-200 opacity-75">
        © 2024 Dedique Music | Todos os direitos reservados
      </div>
    </div>
  );
}

