import { fireEvent, render, screen } from '@testing-library/react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'
import Select, { optionTypes } from './Select'

describe('Select', () => {
  const element = {
    selectContainer: 'selectContainer',
    selectButton: 'selectButton',
    selectedOptionValue: 'selectedOptionValue',
    selectDropdown: 'selectDropdown',
    selectDropdownItem: 'selectDropdownItem',
  }

  const testChangeOption = jest.fn()
  const testClass = 'test-class'
  const testOptions = [
    {
      value: 'test-value',
      text: 'test-text',
    },
  ]

  test('should be render without crashing', () => {
    render(<Select changeOption={testChangeOption} options={testOptions} />)
  })

  describe('select container', () => {
    test('should be called when select container is clicked', () => {
      const clickHandle = jest.fn()

      render(<Select onClick={clickHandle} changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectContainer))

      expect(clickHandle).toHaveBeenCalled()
    })

    test('should contain pointer-events-none class when disabled prop is true', () => {
      render(<Select disabled changeOption={testChangeOption} options={testOptions} />)

      expect(screen.getByTestId(element.selectContainer)).toHaveClass('pointer-events-none')
    })

    test('should contain the added class name', () => {
      render(<Select className={testClass} changeOption={testChangeOption} options={testOptions} />)

      expect(screen.getByTestId(element.selectContainer)).toHaveClass(
        convertClassesToImportant(testClass)
      )
    })
  })

  describe('select dropdown', () => {
    test('be active when select button is clicked', () => {
      render(<Select changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectButton))

      expect(screen.getByTestId(element.selectDropdown)).toBeTruthy()
    })

    test('be not active when select button is clicked', () => {
      render(<Select changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectButton))
      fireEvent.click(screen.getByTestId(element.selectDropdownItem))

      expect(screen.queryByTestId(element.selectDropdown)).toBeNull()
    })

    test('should contain pointer-events-none class when loading prop is true', () => {
      render(<Select loading changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectButton))

      expect(screen.getByTestId(element.selectDropdown)).toHaveClass('pointer-events-none')
    })
  })

  describe('selected option value', () => {
    test('should contain text of selected option', () => {
      render(<Select changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectButton))
      fireEvent.click(screen.getByTestId(element.selectDropdownItem))

      expect(screen.getByTestId(element.selectedOptionValue).textContent).toEqual(
        testOptions[0].text
      )
    })
  })

  describe('select dropdown item', () => {
    test('should equal correct option text', () => {
      render(<Select changeOption={testChangeOption} options={testOptions} />)

      fireEvent.click(screen.getByTestId(element.selectButton))

      expect(screen.getByTestId(element.selectDropdownItem).textContent).toEqual(
        testOptions[0].text
      )
    })
  })

  test('change option prop should take value of selected option when any dropdown item clicked', () => {
    let expectedValue
    const changeOption = (selectedOptionValue: optionTypes) => (expectedValue = selectedOptionValue)

    render(<Select changeOption={changeOption} options={testOptions} />)

    fireEvent.click(screen.getByTestId(element.selectButton))
    fireEvent.click(screen.getByTestId(element.selectDropdownItem))

    expect(expectedValue).toEqual(testOptions[0].value)
  })
})
