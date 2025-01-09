import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function ModalSairConta({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in">
      <div className="p-6 w-11/12 max-w-sm transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
        <div className="flex justify-between items-center">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
            <ExclamationTriangleIcon
              aria-hidden="true"
              className="size-6 text-red-600"
            />
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 text-2xl">Sair da conta ?</div>
        <div className="mt-4 text-gray-500">
          Quer realmente sair de sua conta ?
        </div>
        <div className="mt-6 flex justify-end">
          <a href="/">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Confirmar !
              </button>
          </a>
        </div>
      </div>
    </div>
  );
}
