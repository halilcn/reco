import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

import useOutsideClick from '../../hooks/useOutsideClick'
import convertClassesToImportant from '../../utils/convertClassesToImportant'

export type OptionTypes = string | number

export interface IOptions {
  value: OptionTypes
  text: OptionTypes
}

export interface IProps extends React.ComponentProps<'div'> {
  changeSelectedOption: (selectedOptionValue: OptionTypes) => void
  options: IOptions[]
  disabled?: boolean
  loading?: boolean
}

const AutoComplete: React.FC<IProps> = props => {
  const { className, changeSelectedOption, loading, disabled, options, ...componentProps } = props

  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)
  const [filterText, setFilterText] = useState<OptionTypes>('')
  const [dropdownOptions, setDropdownOptions] = useState<IOptions[]>([])
  const [selectedOption, setSelectedOption] = useState<OptionTypes>('')
  const [alreadySelectedOption, setAlreadySelectedOption] = useState<boolean>(false)

  const autoCompleteContainerRef = useRef(null)

  useOutsideClick(autoCompleteContainerRef, () => {
    setIsActiveDropdown(false)
  })

  useEffect(() => {
    setDropdownOptions(options)
  }, [])

  useEffect(() => {
    const selectedOption = options.find(
      option => option.text.toString().toLowerCase() === filterText.toString().toLowerCase()
    )

    if (selectedOption) {
      changeSelectedOption(selectedOption.value)
      setDropdownOptions([])
      setAlreadySelectedOption(true)
      return
    }

    const filteredOptions = options.filter(option =>
      option.text.toString().toLowerCase().includes(filterText.toString().toLowerCase())
    )

    setDropdownOptions(filteredOptions)
    setAlreadySelectedOption(false)
  }, [filterText])

  useEffect(() => {
    setFilterText(selectedOption)
  }, [selectedOption])

  const toggleDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown)
  }

  const selectOption = (optionValue: OptionTypes) => {
    setIsActiveDropdown(!isActiveDropdown)

    const textOfSelectedOption = options.find(
      option => option.value.toString() === optionValue.toString()
    )?.text

    if (textOfSelectedOption) setSelectedOption(textOfSelectedOption)
  }

  const selectContainerClass = classNames(
    'flex flex-col items-center relative rounded-2xl',
    convertClassesToImportant(className),
    {
      'pointer-events-none opacity-80': disabled || loading,
    }
  )

  const inputClass = classNames(
    'py-3 px-3 text-sm text-gray-500 border rounded-md border-sky-200 hover:border-sky-200 focus:border-sky-300 focus:shadow focus:shadow-sky-100'
  )

  const dropdownClass = classNames(
    'absolute shadow top-14 overflow-y-hidden  rounded text-gray-600 cursor-pointer w-full',
    {
      'pointer-events-none cursor-wait opacity-80': loading,
    }
  )

  const dropdownItemClass = classNames(
    'px-3 py-3 font-light text-sm hover:bg-gray-50 active:bg-sky-50'
  )

  const dropdownNoItemClass = classNames(
    'px-3 py-3 font-light text-sm cursor-default text-gray-400 text-center'
  )

  return (
    <div
      data-testid="autoCompleteContainer"
      ref={autoCompleteContainerRef}
      className={selectContainerClass}
      {...componentProps}>
      <input
        data-testid="autoCompleteInput"
        onFocus={toggleDropdown}
        onChange={e => setFilterText(e.target.value)}
        value={filterText}
        className={inputClass}
      />
      {isActiveDropdown && (
        <div data-testid="autoCompleteDropdown" className={dropdownClass}>
          {!!dropdownOptions.length &&
            dropdownOptions.map((option, key) => (
              <div
                data-testid="autoCompleteDropdownItem"
                key={key}
                onClick={() => selectOption(option.value)}
                className={dropdownItemClass}>
                {option.text}
              </div>
            ))}

          {!dropdownOptions.length && !alreadySelectedOption && (
            <div data-testid="autoCompleteDropdownNoItem" className={dropdownNoItemClass}>
              No option
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AutoComplete
