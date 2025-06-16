// Codigo fonte do conteudo da home page!
import React from "react";
import Logo from "../../../public/logo3.png";
import WhatsappI from "../../Assets/Images/whatsappicon.png";
import ReacaoGravada from "../../Assets/Images/reacaogravada.png";
import Vocescolhe from "../../Assets/Images/voceescolhe.png";
import Pulando from "../../Assets/Images/pulando.png";
import Datas from "../../Assets/Images/datas.png";
import Aniversario from "../../Assets/Images/aniversario.png";
import Pessoa1 from "../../Assets/Images/pessoa1.jpg";
import Pessoa2 from "../../Assets/Images/pessoa2.jpg";
import Pessoa3 from "../../Assets/Images/pessoa3.jpg";
import Pessoa4 from "../../Assets/Images/pessoa4.jpg";

export default function Content() {
  return (
    <section className="flex-1 bg-blue/40 text-white p-6 rounded-lg shadow-lg lg:ml-6">
      <div className="bg-gray-900 p-2 rounded-lg">
        <div className="text-center mb-6">
          <img
            src={Logo} // Placeholder para o logotipo da Tele Mensagem
            alt="Placeholder Logo"
            className="mx-auto w-[16rem] bg-white border-2 rounded-xl"
          />
        </div>

        <div className="text-center mb-6">
          <a
            href="https://wa.me/889999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsappI} // Placeholder para o botão do WhatsApp
              alt="Atendimento via WhatsApp"
              className="w-20 mx-auto p-2 rounded-full bg-white"
            />
          </a>
          <p className="mt-4">
            Chame no WhatsApp. Valor R$ 25,00
            <br />
            Qualquer número do Brasil
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-400 text-lg font-semibold">
            Como funciona?
          </h3>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
            <li>Você escolhe a mensagem através do WhatsApp.</li>
            <li>Efetua pagamento e envia comprovante.</li>
            <li>Nossa equipe envia a telemensagem por ligação.</li>
            <li>Você recebe aviso do recebimento.</li>
          </ol>
        </div>

        <div className="grid grid-cols-3 gap-6 m-6">
          {/* Primeira linha: imagem grande à esquerda */}
          <div className="col-span-2 row-span-2">
            <img
              src={ReacaoGravada}
              alt="Reações Gravadas"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Vocescolhe}
              alt="Você Escolhe"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Pulando}
              alt="Pulando"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Segunda linha: imagem grande à direita */}
          <div>
            <img
              src={Datas}
              alt="Datas Comemorativas"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={Aniversario}
              alt="Aniversário"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-400 text-lg font-semibold">Avaliações</h3>
          <div className="text-center m-2">
            <img
              src={Pessoa1} // Placeholder para o logotipo da Tele Mensagem
              alt="Placeholder Logo"
              className="rounded-full w-20 h-20"
            />
          </div>
          <p className="text-pink-400">mat pvp </p>
          <p className="text-pink-400">Um comentário um mês atrás</p>
          <p>
            Fui muito bem atendida, realmente se empenham em fazer aquilo q
            pedimos, fiquei muito satisfeita recomendo esse serviço. Célia/SP.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-400 text-lg font-semibold">Avaliações</h3>
          <div className="text-center m-2">
            <img
              src={Pessoa2} // Placeholder para o logotipo da Tele Mensagem
              alt="Placeholder Logo"
              className="rounded-full w-20 h-20"
            />
          </div>
          <p className="text-pink-400">mat pvp </p>
          <p className="text-pink-400">Um comentário um mês atrás</p>
          <p>
            Fui muito bem atendida, realmente se empenham em fazer aquilo q
            pedimos, fiquei muito satisfeita recomendo esse serviço. Célia/SP.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-400 text-lg font-semibold">Avaliações</h3>
          <div className="text-center m-2">
            <img
              src={Pessoa3} // Placeholder para o logotipo da Tele Mensagem
              alt="Placeholder Logo"
              className="rounded-full w-20 h-20"
            />
          </div>
          <p className="text-pink-400">mat pvp </p>
          <p className="text-pink-400">Um comentário um mês atrás</p>
          <p>
            Fui muito bem atendida, realmente se empenham em fazer aquilo q
            pedimos, fiquei muito satisfeita recomendo esse serviço. Célia/SP.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-400 text-lg font-semibold">Avaliações</h3>
          <div className="text-center m-2">
            <img
              src={Pessoa4} // Placeholder para o logotipo da Tele Mensagem
              alt="Placeholder Logo"
              className="rounded-full w-20 h-20"
            />
          </div>
          <p className="text-pink-400">mat pvp </p>
          <p className="text-pink-400">Um comentário um mês atrás</p>
          <p>
            Fui muito bem atendida, realmente se empenham em fazer aquilo q
            pedimos, fiquei muito satisfeita recomendo esse serviço. Célia/SP.
          </p>
        </div>
      </div>
    </section>
  );
}
