import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

const Loading: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <div className="m-auto">
        <AiOutlineLoading
          size={50}
          className="loading mx-auto mb-6 font-medium text-primary-500"
        />
      </div>
    </div>
  )
}

export default Loading
