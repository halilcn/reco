import React from 'react'

import index from './index'
import '/src/styles/index.scss'

interface IProps {}




const Deneme: React.FC<IProps> = props => {
  return (
    <div className="text-3xl font-bold underline text-red-600 bg-blue-500">
      test button
    </div>
  )
}

export default Deneme
