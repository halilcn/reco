import classNames from 'classnames'
import React from 'react'

interface IProps extends React.ComponentProps<'input'> {
  id: string
  children?: any
  disabled?: boolean
  checked?: boolean
  loading?: boolean
}

const Checkbox: React.FC<IProps> = props => {
  const { id, children, checked, loading, disabled, ...componentProps } = props

  //todo:dynamic checked?
  //todo: defaultChecked ?
  //todo: only icon ?
  //todo: loading ?

  const checkboxContainerClass = classNames('relative flex items-center')

  const checkboxClass = classNames('w-5 h-5 cursor-pointer')

  const checkboxLabelClass = classNames('ml-2 cursor-pointer text-sm font-light text-gray-500')

  return (
    <div className={checkboxContainerClass}>
      <input id={id} type="checkbox" className={checkboxClass} {...componentProps} />
      {children && (
        <label htmlFor={id} className={checkboxLabelClass}>
          {children}
        </label>
      )}
    </div>
  )
}

export default Checkbox
