// Codigo fonte de login!

import React from "react";
import Background from "../../Assets/Images/Login/background.jfif";
import BackgroundMobile from "../../Assets/Images/Login/background.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-[#060b1d]">
      {/* Imagem de fundo visível apenas em telas maiores */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Espaço reservado para a imagem de fundo em telas grandes */}
      </div>
      <div className="max-w-md m-auto hidden md:block">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-primary text-4xl font-bold">🌊</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-200 mb-2">
          Entre em sua conta
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Não tem conta?{" "}
          <a href="/registra-se" className="text-primary/80 font-medium">
            Crie a sua gratuitamente
          </a>
        </p>
        {/* Formulário */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary/50 focus:border-primary/50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary/50 focus:border-primary/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary/50 focus:ring-primary/50 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-300">Lembre de mim</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-primary/80 hover:text-primary/60"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary/60 text-white py-2 px-4 rounded-md hover:bg-primary/70 focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            Entrar
          </button>
        </form>
        {/* Linha divisória */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center"></div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 rounded text-gray-100">Ou continue com</span>
          </div>
        </div>
        {/* Botões de Login com outras contas */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="w-full inline-flex justify-center py-2 px-4 border border-primary/60 rounded-md shadow-sm bg-primary/60 text-gray-100 hover:bg-primary/50">
            <span className="sr-only">Sign in with Google</span>
            <FaGoogle className="m-auto" />
            <span className="ml-2">Google</span>
          </button>
          <button className="w-full inline-flex justify-center py-2 px-4 border border-primary/60 rounded-md shadow-sm bg-primary/60 text-gray-100 hover:bg-primary/50">
            <span className="sr-only">Sign in with Facebook</span>
            <FaFacebook className="m-auto" />
            <span className="ml-2">Facebook</span>
          </button>
        </div>
      </div>

      {/* Formulário de Login, sem imagem de fundo em telas menores */}
      <div
        className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 md:none"
        style={{
          backgroundImage: `url(${BackgroundMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: window.innerWidth >= 768 ? "none" : "flex",
        }}
      >
        {/* Conteúdo do formulário de login */}

        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <span className="text-primary text-4xl font-bold">🌊</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-200 mb-2">
            Entre em sua conta
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Não tem conta?{" "}
            <a href="/registra-se" className="text-primary/80 font-medium">
              Crie a sua gratuitamente
            </a>
          </p>
          {/* Formulário */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary/50 focus:border-primary/50"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary/50 focus:border-primary/50"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary/50 focus:ring-primary/50 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-300">Lembre de mim</span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-primary/80 hover:text-primary/60"
              >
                Esqueceu sua senha?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary/60 text-white py-2 px-4 rounded-md hover:bg-primary/70 focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              Entrar
            </button>
          </form>
          {/* Linha divisória */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center"></div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 rounded text-gray-100">
                Ou continue com
              </span>
            </div>
          </div>
          {/* Botões de Login com outras contas */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-primary/60 rounded-md shadow-sm bg-primary/60 text-gray-100 hover:bg-primary/50">
              <span className="sr-only">Sign in with Google</span>
              <FaGoogle className="m-auto" />
              <span className="ml-2">Google</span>
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-primary/60 rounded-md shadow-sm bg-primary/60 text-gray-100 hover:bg-primary/50">
              <span className="sr-only">Sign in with Facebook</span>
              <FaFacebook className="m-auto" />
              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
