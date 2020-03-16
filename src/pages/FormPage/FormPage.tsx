import React, { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CardRank from "../../components/CardRank"
import FormModal from "../../components/FormModal"

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

const FormPage: React.FC = () => {
  const [page, setPage] = useState(1)
  return (
    <div>
      <Header className="px-2" />
      <div className="mx-auto flex flex-col px-2 py-6 max-w-6xl">
        <div className="mb-2">
          <h6 className="text-gray-500">Seja bem-vinda,</h6>
          <h2 className="text-primary-500 text-2xl font-bold">
            Dream Team LTDA
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <FormModal page={page} setPage={setPage} />
          <div className="flex flex-col md:ml-4  md:w-1/2">
            <h1 className="font-bold text-2xl text-gray-700 py-4">
              RANKING das Startups
            </h1>
            <p className="text-gray-700 font-bold mb-4">
              Você está na
              <strong className="px-2 text-primary-500 text-xl">13º</strong>
              posição e faltam
              <strong className="px-2 text-primary-500 text-xl">280pts</strong>
              para subir no Ranking
            </p>
            <p>
              Preencha todos os dados da sua empresa e{" "}
              <strong className="text-gray-700">ganhe pontos</strong> para subir
              no <strong className="text-gray-700">Ranking</strong> e concorrer
              a <strong className="text-gray-700">muitos prêmios.</strong>
            </p>
            <div>
              {fakeRank.map(item => (
                //@ts-ignore
                <CardRank key={item.id} startup={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer className="px-2" />
    </div>
  )
}

export default FormPage
