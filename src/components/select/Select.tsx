import classNames from 'classnames'
import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

export type optionTypes = string | number

export interface IOptions {
  value: optionTypes
  text: optionTypes
}

export interface IProps extends React.ComponentProps<'div'> {
  disabled?: boolean
  loading?: boolean
  defaultSelectedOptionText?: optionTypes
  changeOption: (selectedOptionValue: optionTypes) => void
  options: IOptions[]
}

const Select: React.FC<IProps> = props => {
  const {
    className,
    changeOption,
    children,
    loading,
    disabled,
    defaultSelectedOptionText,
    options,
    ...componentProps
  } = props

  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<optionTypes>(
    defaultSelectedOptionText || 'Select'
  )

  const toggleDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown)
  }

  const selectOption = (optionValue: optionTypes) => {
    changeOption(optionValue)
    setIsActiveDropdown(!isActiveDropdown)

    const textOfSelectedOption = options.find(option => option.value === optionValue)?.text
    if (textOfSelectedOption) setSelectedOption(textOfSelectedOption)
  }

  const selectContainerClass = classNames(
    'flex flex-col items-center relative rounded-2xl',
    convertClassesToImportant(className),
    {
      'pointer-events-none opacity-80': disabled,
    }
  )

  const selectedOptionClass = classNames(
    'flex items-center bg-sky-50 py-2 px-10 text-sky-500 border rounded-md border-sky-100 hover:border-sky-200 cursor-pointer'
  )

  const dropdownClass = classNames(
    'absolute shadow top-11 overflow-y-hidden  rounded text-gray-600 cursor-pointer',
    {
      'pointer-events-none cursor-wait opacity-80': loading,
    }
  )

  const dropdownItemClass = classNames(
    'px-3 py-3 font-light text-sm hover:bg-gray-50 active:bg-sky-50'
  )

  return (
    <div data-testid="selectContainer" className={selectContainerClass} {...componentProps}>
      <div data-testid="selectButton" className={selectedOptionClass} onClick={toggleDropdown}>
        <span data-testid="selectedOptionValue">{selectedOption}</span>
        <MdOutlineArrowDropDown className={'ml-1'} size={24} />
      </div>
      {isActiveDropdown && (
        <div data-testid="selectDropdown" className={dropdownClass}>
          {options.map((option, key) => (
            <div
              data-testid="selectDropdownItem"
              key={key}
              onClick={() => selectOption(option.value)}
              className={dropdownItemClass}>
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
