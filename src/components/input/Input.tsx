import classNames from 'classnames'
import React from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'input'> {
  id: string
  disabled?: boolean
  loading?: boolean
  hasError?: boolean
}

//todo:css input dolu olduğunda ?
//todo:peer-valid invalid ?

const Input: React.FC<IProps> = props => {
  const { id, className, loading, disabled, ...componentProps } = props

  const inputContainerClass = classNames('relative flex')

  //todo:!
  const inputClass = classNames(
    'z-10 border border-sky-200 py-3 px-3 text-sm text-gray-600 bg-transparent rounded-md peer focus:border-sky-300 focus:shadow focus:shadow-sky-100',
    {
      'pointer-events-none bg-slate-200	text-slate-300 placeholder:text-slate-300 border-slate-300':
        disabled || loading,
    }
  )

  const inputLabelClass = classNames(
    'absolute text-sm text-gray-400 duration-200 top-3 left-2.5 origin-[0] cursor-text peer-valid:left-2.5 peer-focus:font-semibold  peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:text-sky-500 peer-focus:scale-90',
    {
      'pointer-events-none': disabled || loading,
    }
  )

  return (
    <div className={inputContainerClass}>
      <input id={id} required className={inputClass} {...componentProps} />
      <label htmlFor="aa" className={inputLabelClass}>
        Email address
      </label>
    </div>
  )
}

export default Input
