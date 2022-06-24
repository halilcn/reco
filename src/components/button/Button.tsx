import classNames from 'classnames'
import React from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'button'> {
  children: any
  disabled?: boolean
  loading?: boolean
}

//todo:!

const Button: React.FC<IProps> = props => {
  const { className, children, disabled, loading, ...componentProps } = props

  const buttonClass = classNames(
    'flex justify-center items-center w-40 bg-sky-500 hover:bg-sky-400 text-white font-medium py-2 px-4 rounded cursor-pointer',
    convertClassesToImportant(className),
    {
      'opacity-50 pointer-events-none	!cursor-not-allowed': disabled,
      'opacity-50 pointer-events-none	!cursor-wait': loading,
    }
  )

  const loadingClass = classNames('flex items-center')

  return (
    <button data-testid="button" className={buttonClass} {...componentProps}>
      {loading && (
        <div data-testid="loading" className={loadingClass}>
          ...loading
        </div>
      )}
      {!loading && <div data-testid="content">{children}</div>}
    </button>
  )
}

export default Button
