import classNames from 'classnames'
import React from 'react'



interface IProps {}

const Deneme: React.FC<IProps> = props => {
  //todo: style module

  const testClass=classNames('text-xl font-bold underline text-red-600 bg-blue-500')

  return <div className={testClass}>test button</div>
}

export default Deneme
