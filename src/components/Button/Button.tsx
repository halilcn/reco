import classNames from 'classnames'
import React from 'react'

interface IProps {
  children: any
  customClass?: string
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<IProps> = props => {
  const { customClass, children, disabled, loading } = props

  const buttonClass = classNames(
    'bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer',
    customClass,
    {
      'opacity-50 !cursor-not-allowed': disabled,
      'opacity-50 !cursor-wait': loading,
    }
  )

  const loadingClass = classNames('flex items-center')

  return (
    <div className={buttonClass}>
      {loading && (
        <div data-testid="loading" className={loadingClass}>
          loading...
        </div>
      )}
      {!loading && <div data-testid="content" className="content">{children}</div>}
    </div>
  )
}

/*
 */

export default Button
