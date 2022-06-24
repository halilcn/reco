import classNames from 'classnames'
import React from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'div'> {
  id: string
  children: any
  checked?: boolean
  disabled?: boolean
  loading?: boolean
}

const Checkbox: React.FC<IProps> = props => {
  const { id, className, children, checked, loading, disabled, ...componentProps } = props

  //todo: style ?? önemli !

  const checkboxContainerClass = classNames(
    'relative flex items-center text-gray-500 text-sm cursor-pointer bg-sky-100 hover:bg-sky-200 text-sky-500 p-3 rounded-full',
    convertClassesToImportant(className),
    {
      'bg-sky-200': checked,
      'bg-slate-200	text-slate-400 pointer-events-none ': disabled,
      'bg-slate-200	text-slate-400 pointer-events-none cursor-wait opacity-80': loading,
    }
  )

  return (
    <div data-testid="iconCheckbox" className={checkboxContainerClass} {...componentProps}>
      {children}
    </div>
  )
}

export default Checkbox
