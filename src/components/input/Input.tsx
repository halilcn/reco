import classNames from 'classnames'
import React from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'input'> {
  title?: string
  disabled?: boolean
  loading?: boolean
  hasError?: boolean
}

const Input: React.FC<IProps> = props => {
  const { id, title, className, loading, hasError, disabled, ...componentProps } = props

  const inputContainerClass = classNames('relative flex')

  const inputClass = classNames(
    'z-10 border border-sky-200 py-3 px-3 text-sm text-gray-500 bg-transparent rounded-md peer ',
    'focus:border-sky-300 focus:shadow focus:shadow-sky-100',
    convertClassesToImportant(className),
    {
      'border-red-200 focus:border-red-300 text-gray-400': hasError,
      '!pointer-events-none bg-slate-200	text-slate-300 placeholder:text-slate-300 border-slate-300':
        disabled || loading,
    }
  )

  const inputLabelClass = classNames(
    'absolute duration-200 text-sm origin-[0] cursor-text',
    'peer-invalid:text-gray-400 peer-invalid:left-2.5 peer-invalid:translate-y-3 peer-invalid:scale-100 peer-invalid:font-medium',
    'peer-valid:text-sky-500 peer-valid:left-0 peer-valid:-translate-y-6 peer-valid:left-2.5 peer-valid:scale-90 peer-valid:font-semibold',
    'peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:text-sky-500 peer-focus:scale-90 peer-focus:font-semibold',
    {
      '!text-red-300': hasError,
      'pointer-events-none': disabled || loading,
    }
  )

  return (
    <div className={inputContainerClass}>
      <input required className={inputClass} {...componentProps} />
      {title && <label className={inputLabelClass}>{title}</label>}
    </div>
  )
}

export default Input
