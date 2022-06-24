import classNames from 'classnames'
import React from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'input'> {
  id: string
  children?: any
  disabled?: boolean
  loading?: boolean
}

const Checkbox: React.FC<IProps> = props => {
  const { id, className, children, loading, disabled, ...componentProps } = props

  const checkboxContainerClass = classNames(
    'relative flex items-center text-gray-500 text-sm font-light',
    convertClassesToImportant(className),
    {
      'pointer-events-none': disabled,
      'pointer-events-none cursor-wait opacity-80': loading,
    }
  )

  const checkboxClass = classNames('w-5 h-5 cursor-pointer checked:accent-sky-300')

  const checkboxLabelClass = classNames('ml-2 cursor-pointer')

  return (
    <div className={checkboxContainerClass}>
      <input
        type="checkbox"
        id={id}
        className={checkboxClass}
        disabled={disabled}
        {...componentProps}
      />
      {children && (
        <label htmlFor={id} className={checkboxLabelClass}>
          {children}
        </label>
      )}
    </div>
  )
}

export default Checkbox
