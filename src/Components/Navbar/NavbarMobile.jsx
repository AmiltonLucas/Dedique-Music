// COdigo fonte da navbar Mobile!
"use client";
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
} from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiLogIn } from "react-icons/fi";
import Perfil from "../../Assets/icons/perfil.png";
import { IoPersonAddOutline } from "react-icons/io5";
import Logo from "../../../public/logo2.png";

const navigation = {
  categories: [
    {
      id: "menu",
      name: "Menu",
      sections: [
        {
          id: "musicas",
          name: "Músicas",
          items: [
            { name: "Início", icon: <FaHome />, href: "/" },
            {
              name: "Reação gravada Grátis",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Reconciliação/desculpas fem",
              icon: <SiHuggingface />,
              href: "/musics-grid",
            },
            {
              name: "Reconciliação/desculpas masc",
              icon: <SiHuggingface />,
              href: "/musics-grid",
            },
            {
              name: "Declaração de amor masc",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Declaração de amor fem",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Aniversário romântico",
              icon: <FaBirthdayCake />,
              href: "/musics-grid",
            },
            {
              name: "Aniversário esposo(a)",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv alguém especial",
              icon: <FaGift />,
              href: "/musics-grid",
            },
            {
              name: "Aniversário de mãe",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de pai",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de filha",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv filho",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv amigo",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Aniv amiga",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Aniv irmã",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv irmão",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniversário de Tios",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de padrinhos",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de avós",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv sobrinhos",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de nora e genro",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv de sogros",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniv casamento",
              icon: <FaGift />,
              href: "/musics-grid",
            },
            {
              name: "Aniv namoro",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Dia dos Pais",
              icon: <FaHandsHelping />,
              href: "/musics-grid",
            },
            {
              name: "Aniv comadre",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Aniversario geral",
              icon: <FaBirthdayCake />,
              href: "/musics-grid",
            },
            {
              name: "Aniversário de cunhados",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Dia das mães",
              icon: <FaHandsHelping />,
              href: "/musics-grid",
            },
            {
              name: "Dia dos namorados f",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Dia dos namorados M",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Dia internacional da mulher",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Dia dos Avós 26/07",
              icon: <FaUsers />,
              href: "/musics-grid",
            },
            {
              name: "Mensagens de feliz natal",
              icon: <FaGift />,
              href: "/musics-grid",
            },
            {
              name: "Mensagens de amizade",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Conquistas",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Pedido de casamento",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Pedido de namoro",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            { name: "Otimismo", icon: <FaSmile />, href: "/musics-grid" },
            { name: "Saudades", icon: <FaSmile />, href: "/musics-grid" },
            {
              name: "Românticas evangélicas",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Românticas suaves",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Desculpas geral",
              icon: <FaQuestionCircle />,
              href: "/musics-grid",
            },
            {
              name: "Agradecimentos",
              icon: <FaHandsHelping />,
              href: "/musics-grid",
            },
            {
              name: "Homenagens",
              icon: <FaHandsHelping />,
              href: "/musics-grid",
            },
            {
              name: "Dicas de relacionamento",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Românticas e aniv do ex",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Romantica por tel",
              icon: <FaPhone />,
              href: "/musics-grid",
            },
            {
              name: "Romantica distantes",
              icon: <FaHeart />,
              href: "/musics-grid",
            },
            {
              name: "Dia do amigo",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Opinião de clientes",
              icon: <FaSmile />,
              href: "/musics-grid",
            },
            {
              name: "Forma de pagamento",
              icon: <FaQuestionCircle />,
              href: "/musics-grid",
            },
            {
              name: "Contatos e agendamento",
              icon: <FaPhone />,
              href: "/musics-grid",
            },
          ],
        },
      ],
    },
  ],
};

const user = {
  name: "José Airton",
  email: "joseairton8712@gmail.com",
  phone: "+55 88 99999 9999",
  location: "Juazeiro do Norte, Ceará",
  subscription: "Padrão",
};

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-transparent mb-2 lg:hidden">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="/login"
                  className="font-semibold hover:text-primary flex gap-2 items-center transition-all"
                >
                  <FiLogIn /> Entrar
                </a>
              </div>
              <a href="/user">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-4">
                  <img
                    src={Perfil}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full border-2 border-blue-500 hover:border-primary cursor-pointer transition-all"
                  />
                  <div className="text-center sm:text-left mt-4 sm:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      {user.name}
                    </h1>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </a>
            </div>
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-primary data-[selected]:text-primary"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 p-2 text-gray-500 hover:text-gray-700 flex items-center space-x-2"
                              >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="https://front-dev-studio.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaZps17TzHAYgAl7pqoevTGkuARnStKaeLemQc1MOHyIZhely9zsflfWig0_aem__Y-fXtXhsJAlUlgNfpTzbQ"
                          target="_blank"
                        >
                          <p className="text-center mt-4 text-gray-500 font-semibold hover:text-gray-800 cursor-pointer">
                            &copy; Front Dev Studio
                          </p>
                        </a>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-primary rounded-xl">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Dedique Music</span>
                  <img alt="" src={Logo} className="h-8 w-auto" />
                </a>
                <p className="m-auto ml-2 text-2xl text-white">Dedique Music</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
