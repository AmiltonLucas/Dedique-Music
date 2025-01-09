import React, { useState } from "react";
import Perfil from "../../Assets/icons/perfil.png";
import Modal from "../../Events/ModalError/ModalError";
import ModalS from "../../Events/ModalSairConta/ModalSairConta";
import { IoPersonAddOutline, IoPersonRemoveOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";

const user = {
  name: "José Airton",
  email: "joseairton8712@gmail.com",
  phone: "+55 88 99999 9999",
  location: "Juazeiro do Norte, Ceará",
  subscription: "Padrão",
};

export default function UserComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const [isModalSOpen, setIsModalSOpen] = useState(false);

  const openModalS = () => {
    setIsModalSOpen(true); // Corrigido para usar o setter correto
  };

  const closeModalS = () => {
    setIsModalSOpen(false); // Corrigido para usar o setter correto
  };

  return (
    <div className="m-4 p-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <img
            src={Perfil}
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-blue-500 cursor-pointer"
            onClick={openModal} // Abre o modal ao clicar na imagem
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-700">
            Detalhes do Usuário:
          </h2>
          <ul className="mt-2 space-y-2">
            <li className="flex flex-col lg:flex-row justify-between text-gray-600">
              <span className="font-medium">Número:</span>
              <span>{user.phone}</span>
            </li>
            <li className="flex flex-col lg:flex-row justify-between text-gray-600">
              <span className="font-medium">Localização:</span>
              <span>{user.location}</span>
            </li>
            <li className="flex flex-col lg:flex-row justify-between text-gray-600">
              <span className="font-medium">Assinatura:</span>
              <span>{user.subscription}</span>
            </li>
          </ul>
          <a href="/user-historico">
          <button className="flex gap-2 px-4 py-2 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 items-center justify-center w-[100%]">
            Histórico de pedidos <LuHistory />
          </button>
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
          <a href="/user-editar">
            <button className="flex gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 items-center justify-center w-[100%]">
              Editar perfil <IoPersonAddOutline />
            </button>
          </a>
          <button
            className="flex gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 items-center justify-center"
            onClick={openModalS}
          >
            Sair da conta <IoPersonRemoveOutline />
          </button>
        </div>
      </div>

      {/* Modal: Exibe quando isModalOpen é true */}
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
      <ModalS isOpen={isModalSOpen} onClose={closeModalS}></ModalS>
    </div>
  );
}
