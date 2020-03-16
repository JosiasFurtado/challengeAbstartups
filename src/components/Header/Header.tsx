import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

interface Props {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className={className}>
      <div className="flex flex-row mx-auto items-center justify-between py-1 max-w-6xl">
        <img
          className="w-auto h-12"
          src="https://abstartups.com.br/wp-content/uploads/2018/08/logo-header-rebranding.png"
        />
        <div className="text-primary-500 flex flex-row items-center">
          <div className="hidden md:flex flex-row items-center">
            <button
              className="max-w-xs rounded-lg hover:bg-primary-400 py-1 px-8 font-semibold bg-primary-500 text-white "
              type="button"
            >
              CADASTRAR
            </button>
            <button
              className="max-w-xs w-full hover:border-primary-500 border-white border rounded-lg font-bold py-1 px-8 mx-2"
              type="button"
            >
              LOGIN
            </button>
          </div>
          <div onClick={() => setToggleMenu(!toggleMenu)}>
            <FaBars className="w-full hover:text-blue-900" size={23} />
          </div>
        </div>
      </div>
      {toggleMenu ? (
        <div className="flex justify-end">
          <div className=" border border-white md:hidden absolute max-w-md w-full bg-primary-600 p-4 mt-2 rounded-lg">
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 pb-2">
              <h6 className="">Login</h6>
            </div>
            <hr />
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 py-2">
              <h6 className="">Cadastrar</h6>
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
          <div className="border border-white hidden md:flex flex-col absolute max-w-md w-full bg-primary-600 p-4 mt-2 rounded-lg">
            <div className="flex flex-row items-center text-white cursor-pointer hover:text-gray-400 pb-2">
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
    </div>
  )
}

export default Header
