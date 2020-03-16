import React, { useState } from "react"
import Footer from "../../components/Footer"
import { FaBars, FaCaretDown, FaCheckCircle } from "react-icons/fa"

const fakeRank = [
  {
    id: "01",
    name: "Nubank",
    type: "Finanças",
    bests: true,
    medal: "https://i.imgur.com/TWU2v8m.png",
    img:
      "https://midia.ag/wp-content/uploads/2016/05/Logo-da-Nubank-na-midia-performa.png",
    pts: 1548,
  },
  {
    id: "02",
    name: "Stone Pagamentos",
    type: "Finanças",
    bests: true,
    medal: "https://i.imgur.com/asH5SQ8.png",
    img: "https://whatsrel.com.br/wp-content/uploads/2019/05/unnamed.jpg",
    pts: 1436,
  },
  {
    id: "03",
    name: "99",
    type: "Transportes",
    bests: true,
    medal: "https://i.imgur.com/7hdYf7y.png",
    img: "https://imagens.canaltech.com.br/empresas/2902.400.jpg",
    pts: 1379,
  },
  {
    id: "04",
    name: "Uber",
    type: "Transportes",
    bests: false,
    rankPosition: "4º",
    img: "https://seeklogo.com/images/U/uber-logo-9B6033C292-seeklogo.com.png",
    pts: 1254,
  },
  {
    id: "05",
    name: "Streammus",
    type: "Entreterimento",
    bests: false,
    rankPosition: "5º",
    img:
      "https://d1fdloi71mui9q.cloudfront.net/QS882q7TpGxlOnwzu3vO_3cc6ae165bb5a84d484ee575f82bfd78",
    pts: 1124,
  },
]

const Home: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="">
      <div className="flex flex-row items-center mx-auto justify-between px-2 py-1 max-w-6xl">
        <img
          className="w-auto h-12"
          src="https://abstartups.com.br/wp-content/uploads/2018/08/logo-header-rebranding.png"
        />
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          <FaBars
            className="w-auto hover:text-blue-900 text-primary-500"
            size={23}
          />
        </div>
      </div>
      {toggleMenu ? (
        <div className="flex justify-end">
          <div className="border border-white flex flex-col absolute max-w-md w-full bg-primary-600 p-4 mt-2 rounded-lg">
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 pb-2">
              <h6 className="">Minha conta</h6>
            </div>
            <hr />
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 py-2">
              <h6 className="">Pesquisar por startups</h6>
            </div>
            <hr />
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 py-2">
              <h6 className="">Ver o ranking</h6>
            </div>
            <hr />
            <div className="flex cursor-pointer flex-row items-center text-white hover:text-gray-400 pt-2">
              <h6 className="">Sobre Abstartup</h6>
            </div>
          </div>
        </div>
      ) : null}
      <div
        style={{
          backgroundImage: 'url("https://i.imgur.com/e339ZBc.png")',
        }}
        className="w-auto bg-center bg-no-repeat mx-auto flex flex-col px-2 py-8"
      >
        <div className="flex justify-end mb-4">
          <p className="text-gray-700 text-xl">
            Home &gt;{" "}
            <strong className="font-bold text-primary-500">Startups</strong>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto ">
          <div className="border px-4 lg:ml-6  mb-4 justify-between py-2 bg-white flex items-center border-gray-300 rounded-full w-56">
            Segmento
            <FaCaretDown className="text-primary-500" size={25} />
          </div>
          <div className="border px-4 lg:ml-6  mb-4 justify-between py-2 bg-white flex items-center border-gray-300 rounded-full w-56">
            Estado
            <FaCaretDown className="text-primary-500" size={25} />
          </div>
          <div className="border px-4 lg:ml-6  mb-4 justify-between py-2 bg-white flex items-center border-gray-300 rounded-full w-56">
            Cidade
            <FaCaretDown className="text-primary-500" size={25} />
          </div>
          <div className="border px-4 lg:ml-6  mb-4 justify-between py-2 bg-white flex items-center border-gray-300 rounded-full w-56">
            Público-alvo
            <FaCaretDown className="text-primary-500" size={25} />
          </div>
          <div className="border px-4 lg:ml-6  mb-4 justify-between py-2 bg-white flex items-center border-gray-300 rounded-full w-56">
            Modelo de Receita
            <FaCaretDown className="text-primary-500" size={25} />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 ">
          {fakeRank.map(startup => (
            <div
              key={startup.id}
              className="flex flex-col border-b w-full border-secondary-500 my-4"
            >
              <div className="flex flex-row">
                <div>
                  <img
                    className="border rounded-lg w-56 h-56 mb-2"
                    src={startup.img}
                  />
                  <p className="font-bold text-primary-500 text-center text-2xl">
                    {startup.pts}pts
                  </p>
                </div>
                <div className="ml-4 max-w-sm">
                  <h1 className="text-3xl font-bold">{startup.name}</h1>
                  <div className="flex flex-row items-center">
                    <FaCheckCircle className="text-primary-500" size={30} />
                    {startup.medal ? (
                      <img
                        className="w-auto mx-2 h-8 rounded-lg"
                        src={startup.medal}
                      />
                    ) : null}
                  </div>
                  <h5 className="text-2xl text-gray-700">{startup.type}</h5>
                  <h4 className=" text-lg text-gray-600">São Paulo - SP</h4>
                  {startup.bests ? (
                    <div className="flex flex-row items-center">
                      <img
                        className="w-auto h-12"
                        src="https://i.imgur.com/O8ORZCl.png"
                      />
                      <p className="text-2xl text-gray-700">Unicórnio</p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col mx-auto mb-4 text-center w-full max-w-sm">
                Está na hora de investir?
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="px-2" />
    </div>
  )
}

export default Home
