import React from "react"
import { FaSearch } from "react-icons/fa"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="">
      <Header className="px-2" />
      <div
        style={{
          backgroundImage: 'url("https://i.imgur.com/e339ZBc.png")',
        }}
        className="w-auto bg-center bg-no-repeat mx-auto flex px-2 py-64"
      >
        <div className="m-auto text-center text-primary-500">
          <h4 className="text-blue-700 text-2xl">Quer fazer parte?</h4>
          <h1 className="font-bold mb-4 text-4xl">Preencha com seu CNPJ</h1>
          <div className="flex flex-row items-center my-auto mb-4">
            <input className="border border-primary-500 h-12 w-full px-4 outline-none rounded-full" />

            <button type="button" className="cursor-pointer">
              <Link href="/formpage">
                <FaSearch className=" text-primary-300 -ml-12" size={25} />
              </Link>
            </button>
          </div>
          <h6 className=" text-blue-700 text-xl">
            e nós encontramos a sua empresa
          </h6>
        </div>
      </div>
      <Footer className="px-2" />
    </div>
  )
}

export default Home
