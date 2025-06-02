// Codigo fonte do sobre o site!

import React from "react";

export default function Sobrenos() {
  return (
    <>
      <main className="container mx-auto px-6 py-10">
        {/* Sobre Nós Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Quem Somos
          </h2>
          <p className="text-gray-200 leading-7">
            Somos uma equipe dedicada a proporcionar soluções de alta qualidade
            para nossos clientes. Nosso objetivo é transformar ideias em
            realidade, entregando projetos inovadores e impactantes. Estamos
            comprometidos com a excelência, transparência e inovação em tudo o
            que fazemos.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg p-4 rounded-lg text-center">
              <h3 className="text-xl font-medium text-gray-800">Missão</h3>
              <p className="mt-2 text-gray-600">
                Prover soluções que impactam positivamente nossos clientes e a
                sociedade.
              </p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg text-center">
              <h3 className="text-xl font-medium text-gray-800">Visão</h3>
              <p className="mt-2 text-gray-600">
                Ser referência em inovação e qualidade no mercado em que
                atuamos.
              </p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg text-center">
              <h3 className="text-xl font-medium text-gray-800">Valores</h3>
              <p className="mt-2 text-gray-600">
                Ética, compromisso, inovação e foco no cliente.
              </p>
            </div>
          </div>
        </section>
        {/* Contato Section */}
        <section id="contato">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Entre em Contato
          </h2>
          <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Digite sua mensagem"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
