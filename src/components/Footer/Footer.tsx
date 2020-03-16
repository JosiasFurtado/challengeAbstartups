import React from "react"
import { FaHeart } from "react-icons/fa"

interface Props {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-row mx-auto items-end justify-between py-3 max-w-6xl">
        <img
          className="w-auto h-12"
          src="https://cdn.startupbase.com.br/assets/images/logo_startupbase.png"
        />
        <div className="flex flex-col items-end">
          <img
            className="h-16 w-16 mb-2"
            src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          />
          <div className="flex flex-row items-center text-primary-500">
            Feito com <FaHeart className="mx-2" /> por
            <p className="ml-2 font-bold">Abstartups</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
