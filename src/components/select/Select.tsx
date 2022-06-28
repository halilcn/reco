import classNames from 'classnames'
import React from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

interface IProps extends React.ComponentProps<'div'> {
  disabled?: boolean
  loading?: boolean
}

const Select: React.FC<IProps> = props => {
  const { id, className, children, loading, disabled, ...componentProps } = props

  const selectContainer = classNames(
    'relative flex items-center text-gray-500 text-sm font-light'
    /* convertClassesToImportant(className),
    {
      'pointer-events-none': disabled,
      'pointer-events-none cursor-wait opacity-80': loading,
    }*/
  )

  return (
    <div className={'flex flex-col items-center relative rounded-2xl'}>
      <div
        className={
          'flex items-center bg-sky-50 py-2 px-10 text-sky-500 border rounded-md border-sky-100 hover:border-sky-200 cursor-pointer'
        }>
        Select
        <MdOutlineArrowDropDown className={'ml-1'} size={24} />
      </div>
      <div
        className={
          'absolute shadow top-11 overflow-y-hidden w-52 rounded text-gray-500 cursor-pointer'
        }>
        <div className={'px-3 py-3 font-light text-sm hover:bg-sky-50'}>dropwdasd asddown</div>
      </div>
    </div>
  )
}

export default Select
