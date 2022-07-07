import classNames from 'classnames'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'div'> {
  children: any
  enable: boolean
  title: string
  togglePopup: () => void
}

const Popup: React.FC<IProps> = props => {
  const { children, title, className, togglePopup, enable, ...componentProps } = props

  const popupContainerClass = classNames(
    'fixed flex items-center justify-center w-full h-full z-20'
  )

  const popupFilterClass = classNames(
    'absolute bg-gray-400 opacity-50 blur-2xl w-full h-full -z-10'
  )

  const popupClass = classNames(
    'relative flex flex-col w-1/3 h-1/3 bg-white rounded-2xl shadow p-5',
    convertClassesToImportant(className)
  )

  const popupCloseIconClass = classNames(
    'absolute right-4 top-4 text-2xl cursor-pointer text-gray-400 hover:text-gray-500'
  )

  const popupTitleClass = classNames('font-bold text-xl text-gray-700')

  const popupContentClass = classNames('mt-3 h-full overflow-y-auto')

  return enable ? (
    <div className={popupContainerClass}>
      <div onClick={togglePopup} className={popupFilterClass} />
      <div className={popupClass} {...componentProps}>
        <IoMdClose onClick={togglePopup} className={popupCloseIconClass} />
        <div className={popupTitleClass}>{title}</div>
        <div className={popupContentClass}>{children}</div>
      </div>
    </div>
  ) : (
    <div />
  )
}

export default Popup
