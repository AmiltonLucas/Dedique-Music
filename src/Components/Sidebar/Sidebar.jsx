// Codigo fonte da sidebar do site!

import React from "react";
import {
  FaHome,
  FaHeart,
  FaBirthdayCake,
  FaUsers,
  FaGift,
  FaSmile,
  FaHandsHelping,
  FaQuestionCircle,
  FaPhone,
} from "react-icons/fa"; // Exemplo de ícones importados
import { SiHuggingface } from "react-icons/si";
import DateTime from "../DateTime/DateTime";
import SearchBar from "../Searchbar/Searchbar";

export default function Sidebar() {
  // AQUI ESTA TODAS AS ROTAS DA SIDEBAR!!!
  const items = [
    { name: "Início", icon: <FaHome />, link: "/" },
    {
      name: "Reação gravada Grátis",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Reconciliação/desculpas fem",
      icon: <SiHuggingface />,
      link: "/musics-grid",
    },
    {
      name: "Reconciliação/desculpas masc",
      icon: <SiHuggingface />,
      link: "/musics-grid",
    },
    {
      name: "Declaração de amor masc",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Declaração de amor fem",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Aniversário romântico",
      icon: <FaBirthdayCake />,
      link: "/musics-grid",
    },
    {
      name: "Aniversário esposo(a)",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv alguém especial",
      icon: <FaGift />,
      link: "/musics-grid",
    },
    {
      name: "Aniversário de mãe",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de pai",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de filha",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv filho",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv amigo",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    {
      name: "Aniv amiga",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    {
      name: "Aniv irmã",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv irmão",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniversário de Tios",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de padrinhos",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de avós",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv sobrinhos",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de nora e genro",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv de sogros",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniv casamento",
      icon: <FaGift />,
      link: "/musics-grid",
    },
    {
      name: "Aniv namoro",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Dia dos Pais",
      icon: <FaHandsHelping />,
      link: "/musics-grid",
    },
    {
      name: "Aniv comadre",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Aniversario geral",
      icon: <FaBirthdayCake />,
      link: "/musics-grid",
    },
    {
      name: "Aniversário de cunhados",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Dia das mães",
      icon: <FaHandsHelping />,
      link: "/musics-grid",
    },
    {
      name: "Dia dos namorados f",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Dia dos namorados M",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Dia internacional da mulher",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    {
      name: "Dia dos Avós 26/07",
      icon: <FaUsers />,
      link: "/musics-grid",
    },
    {
      name: "Mensagens de feliz natal",
      icon: <FaGift />,
      link: "/musics-grid",
    },
    {
      name: "Mensagens de amizade",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    { name: "Conquistas", icon: <FaSmile />, link: "/musics-grid" },
    {
      name: "Pedido de casamento",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Pedido de namoro",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    { name: "Otimismo", icon: <FaSmile />, link: "/musics-grid" },
    { name: "Saudades", icon: <FaSmile />, link: "/musics-grid" },
    {
      name: "Românticas evangélicas",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Românticas suaves",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Desculpas geral",
      icon: <FaQuestionCircle />,
      link: "/musics-grid",
    },
    {
      name: "Agradecimentos",
      icon: <FaHandsHelping />,
      link: "/musics-grid",
    },
    {
      name: "Homenagens",
      icon: <FaHandsHelping />,
      link: "/musics-grid",
    },
    {
      name: "Dicas de relacionamento",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Românticas e aniv do ex",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Romantica por tel",
      icon: <FaPhone />,
      link: "/musics-grid",
    },
    {
      name: "Romantica distantes",
      icon: <FaHeart />,
      link: "/musics-grid",
    },
    {
      name: "Dia do amigo",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    {
      name: "Opinião de clientes",
      icon: <FaSmile />,
      link: "/musics-grid",
    },
    {
      name: "Forma de pagamento",
      icon: <FaQuestionCircle />,
      link: "/musics-grid",
    },
    {
      name: "Contatos e agendamento",
      icon: <FaPhone />,
      link: "/musics-grid",
    },
  ];

  return (
    <aside className="w-64 p-4 bg-blue/50 text-white rounded-lg shadow-lg hidden lg:flex">
      <div className="bg-gray-900 p-2 rounded-lg">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-pink-600"
            >
              <a
                href={item.link}
                className="flex items-center space-x-2 w-full text-sm"
              >
                <span className="text-pink-500">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <SearchBar />
        <DateTime />
      </div>
    </aside>
  );
}
