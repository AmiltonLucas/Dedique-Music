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

function Sidebar() {
  const items = [
    { name: "Início", icon: <FaHome />, link: "/" },
    {
      name: "Reação gravada Grátis",
      icon: <FaHeart />,
      link: "/reacao-gravada",
    },
    {
      name: "Reconciliação/desculpas fem",
      icon: <SiHuggingface />,
      link: "/reconciliacaoF#reconciliacaoF",
    },
    {
      name: "Reconciliação/desculpas masc",
      icon: <SiHuggingface />,
      link: "/reconciliacaoM#reconciliacaoM",
    },
    {
      name: "Declaração de amor masc",
      icon: <FaHeart />,
      link: "/declaracao-amor-masc#declaracao-amor-masc",
    },
    {
      name: "Declaração de amor fem",
      icon: <FaHeart />,
      link: "/declaracao-amor-fem#declaracao-amor-fem",
    },
    {
      name: "Aniversário romântico",
      icon: <FaBirthdayCake />,
      link: "/aniversario-romantico#aniversario-romantico",
    },
    {
      name: "Aniversário esposo(a)",
      icon: <FaUsers />,
      link: "/aniversario-esposo-esposa#aniversario-esposo-esposa",
    },
    {
      name: "Aniv alguém especial",
      icon: <FaGift />,
      link: "/aniversario-especial#aniversario-especial",
    },
    {
      name: "Aniversário de mãe",
      icon: <FaUsers />,
      link: "/aniversario-mae#aniversario-mae",
    },
    {
      name: "Aniv de pai",
      icon: <FaUsers />,
      link: "/aniversario-pai#aniversario-pai",
    },
    {
      name: "Aniv de filha",
      icon: <FaUsers />,
      link: "/aniversario-filha#aniversario-filha",
    },
    {
      name: "Aniv filho",
      icon: <FaUsers />,
      link: "/aniversario-filho#aniversario-filho",
    },
    {
      name: "Aniv amigo",
      icon: <FaSmile />,
      link: "/aniversario-amigo#aniversario-amigo",
    },
    {
      name: "Aniv amiga",
      icon: <FaSmile />,
      link: "/aniversario-amiga#aniversario-amiga",
    },
    {
      name: "Aniv irmã",
      icon: <FaUsers />,
      link: "/aniversario-irma#aniversario-irma",
    },
    {
      name: "Aniv irmão",
      icon: <FaUsers />,
      link: "/aniversario-irmao#aniversario-irmao",
    },
    {
      name: "Aniversário de Tios",
      icon: <FaUsers />,
      link: "/aniversario-tios#aniversario-tios",
    },
    {
      name: "Aniv de padrinhos",
      icon: <FaUsers />,
      link: "/aniversario-padrinhos#aniversario-padrinhos",
    },
    {
      name: "Aniv de avós",
      icon: <FaUsers />,
      link: "/aniversario-avos#aniversario-avos",
    },
    {
      name: "Aniv sobrinhos",
      icon: <FaUsers />,
      link: "/aniversario-sobrinhos#aniversario-sobrinhos",
    },
    {
      name: "Aniv de nora e genro",
      icon: <FaUsers />,
      link: "/aniversario-nora-genro#aniversario-nora-genro",
    },
    {
      name: "Aniv de sogros",
      icon: <FaUsers />,
      link: "/aniversario-sogros#aniversario-sogros",
    },
    {
      name: "Aniv casamento",
      icon: <FaGift />,
      link: "/aniversario-casamento#aniversario-casamento",
    },
    {
      name: "Aniv namoro",
      icon: <FaHeart />,
      link: "/aniversario-namoro#aniversario-namoro",
    },
    {
      name: "Dia dos Pais",
      icon: <FaHandsHelping />,
      link: "/dia-dos-pais#dia-dos-pais",
    },
    {
      name: "Aniv comadre",
      icon: <FaUsers />,
      link: "/aniversario-comadre#aniversario-comadre",
    },
    {
      name: "Aniversario geral",
      icon: <FaBirthdayCake />,
      link: "/aniversario-geral#aniversario-geral",
    },
    {
      name: "Aniversário de cunhados",
      icon: <FaUsers />,
      link: "/aniversario-cunhados#aniversario-cunhados",
    },
    {
      name: "Dia das mães",
      icon: <FaHandsHelping />,
      link: "/dia-das-maes#dia-das-maes",
    },
    {
      name: "Dia dos namorados f",
      icon: <FaHeart />,
      link: "/dia-dos-namorados-f#dia-dos-namorados-f",
    },
    {
      name: "Dia dos namorados M",
      icon: <FaHeart />,
      link: "/dia-dos-namorados-m#dia-dos-namorados-m",
    },
    {
      name: "Dia internacional da mulher",
      icon: <FaSmile />,
      link: "/dia-internacional-mulher#dia-internacional-mulher",
    },
    {
      name: "Dia dos Avós 26/07",
      icon: <FaUsers />,
      link: "/dia-dos-avos#dia-dos-avos",
    },
    {
      name: "Mensagens de feliz natal",
      icon: <FaGift />,
      link: "/feliz-natal#feliz-natal",
    },
    {
      name: "Mensagens de amizade",
      icon: <FaSmile />,
      link: "/mensagens-amizade#mensagens-amizade",
    },
    { name: "Conquistas", icon: <FaSmile />, link: "/conquistas#conquistas" },
    {
      name: "Pedido de casamento",
      icon: <FaHeart />,
      link: "/pedido-casamento#pedido-casamento",
    },
    {
      name: "Pedido de namoro",
      icon: <FaHeart />,
      link: "/pedido-namoro#pedido-namoro",
    },
    { name: "Otimismo", icon: <FaSmile />, link: "/otimismo#otimismo" },
    { name: "Saudades", icon: <FaSmile />, link: "/saudades#saudades" },
    {
      name: "Românticas evangélicas",
      icon: <FaHeart />,
      link: "/romanticas-evangelicas#romanticas-evangelicas",
    },
    {
      name: "Românticas suaves",
      icon: <FaHeart />,
      link: "/romanticas-suaves#romanticas-suaves",
    },
    {
      name: "Desculpas geral",
      icon: <FaQuestionCircle />,
      link: "/desculpas-geral#desculpas-geral",
    },
    {
      name: "Agradecimentos",
      icon: <FaHandsHelping />,
      link: "/agradecimentos#agradecimentos",
    },
    {
      name: "Homenagens",
      icon: <FaHandsHelping />,
      link: "/homenagens#homenagens",
    },
    {
      name: "Dicas de relacionamento",
      icon: <FaHeart />,
      link: "/dicas-relacionamento#dicas-relacionamento",
    },
    {
      name: "Românticas e aniv do ex",
      icon: <FaHeart />,
      link: "/romanticas-ex#romanticas-ex",
    },
    {
      name: "Romantica por tel",
      icon: <FaPhone />,
      link: "/romantica-por-tel#romantica-por-tel",
    },
    {
      name: "Romantica distantes",
      icon: <FaHeart />,
      link: "/romantica-distantes#romantica-distantes",
    },
    {
      name: "Dia do amigo",
      icon: <FaSmile />,
      link: "/dia-do-amigo#dia-do-amigo",
    },
    {
      name: "Opinião de clientes",
      icon: <FaSmile />,
      link: "/opiniao-clientes#opiniao-clientes",
    },
    {
      name: "Forma de pagamento",
      icon: <FaQuestionCircle />,
      link: "/forma-pagamento#forma-pagamento",
    },
    {
      name: "Contatos e agendamento",
      icon: <FaPhone />,
      link: "/contatos-agendamento#contatos-agendamento",
    },
  ];

  return (
    <aside className="w-64 p-4 bg-blue/50 text-white rounded-lg shadow-lg">
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

export default Sidebar;
