import React from "react"

interface Props {
  startup: {
    id: number
    name: string
    type: string
    bests: boolean
    medal: string
    rankPosition: string
    img: string
    pts: number
  }
}

const CardRank: React.FC<Props> = ({ startup }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full py-4 border-b border-secondary-500 ">
      <div className="flex flex-row items-center">
        {startup.medal ? (
          <img className="w-auto mx-2 h-10 rounded-lg" src={startup.medal} />
        ) : (
          <h6 className="font-bold mx-3 text-xl text-primary-500">
            {startup.rankPosition}
          </h6>
        )}
        <img className="w-12 border h-12 rounded-lg" src={startup.img} />
        {startup.bests ? (
          <img
            className="ml-2 w-auto h-12"
            src="https://i.imgur.com/O8ORZCl.png"
          />
        ) : null}
        <div className="ml-2">
          <h4 className="font-bold">{startup.name}</h4>
          <h6>{startup.type}</h6>
        </div>
      </div>
      <h6 className="font-bold text-xl text-primary-500">{startup.pts}pts</h6>
    </div>
  )
}

export default CardRank
