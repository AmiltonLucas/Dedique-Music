import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Banner from "../../../Components/Banner/Banner";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import SearchBar from "../../../Components/Searchbar/Searchbar";
import Footer from "../../../Components/Footer/Footer";

const clients = [
  {
    name: "Ana Santos",
    location: "São Paulo, SP",
    feedback:
      "Adorei a qualidade das aulas e o suporte incrível! Minha técnica vocal melhorou muito em pouco tempo.",
    photo: "https://picsum.photos/100?random=1",
  },
  {
    name: "Carlos Lima",
    location: "Rio de Janeiro, RJ",
    feedback:
      "Os professores são muito atenciosos e realmente entendem do assunto. Recomendo para quem quer levar a música a sério.",
    photo: "https://picsum.photos/100?random=2",
  },
  {
    name: "Mariana Oliveira",
    location: "Curitiba, PR",
    feedback:
      "A plataforma é super intuitiva e cheia de recursos. Fiquei impressionada com a organização e o conteúdo.",
    photo: "https://picsum.photos/100?random=3",
  },
  {
    name: "João Pereira",
    location: "Salvador, BA",
    feedback:
      "A Dedique Music me ajudou a retomar minha paixão pela música. Obrigado pelo incentivo e apoio!",
    photo: "https://picsum.photos/100?random=4",
  },
  {
    name: "Fernanda Costa",
    location: "Fortaleza, CE",
    feedback:
      "Ótima experiência! A comunidade é acolhedora e sempre disponível para ajudar. Me sinto em casa.",
    photo: "https://picsum.photos/100?random=5",
  },
  {
    name: "Lucas Almeida",
    location: "Belo Horizonte, MG",
    feedback:
      "Estou aprendendo muito com os cursos. Valeu cada centavo investido. Parabéns pela qualidade!",
    photo: "https://picsum.photos/100?random=6",
  },
];

export default function OpniaoDeClientesPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <Banner />
          <SearchBar />
          <div className="flex mt-6 bg-blue/50 rounded-xl">
            <Sidebar />
            <section className="flex-1 bg-blue/40 text-white p-6 rounded-lg shadow-lg ml-6 items-center justify-center">
              <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl">
                <h1
                  className="text-center m-4 font-semibold text-3xl"
                  id="opiniao-clientes"
                >
                  Opiniões de Clientes
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-4 rounded-lg flex flex-col items-center shadow-md w-full"
                    >
                      <img
                        src={client.photo}
                        alt={`Foto de ${client.name}`}
                        className="w-16 h-16 rounded-full mb-4 object-cover"
                      />
                      <h2 className="text-lg font-semibold">{client.name}</h2>
                      <p className="text-sm text-gray-300">{client.location}</p>
                      <p className="italic text-gray-400 mt-2 text-center">
                        "{client.feedback}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
