import { fireEvent, render, screen } from '@testing-library/react'

import AutoComplete, { OptionTypes } from './AutoComplete'

describe('AutoComplete', () => {
  const element = {
    autoCompleteContainer: 'autoCompleteContainer',
    autoCompleteInput: 'autoCompleteInput',
    autoCompleteDropdown: 'autoCompleteDropdown',
    autoCompleteDropdownItem: 'autoCompleteDropdownItem',
    autoCompleteDropdownNoItem: 'autoCompleteDropdownNoItem',
  }

  const testChangeSelectedOption = jest.fn()
  const testValue = 'test-value'
  const testOptions = [
    {
      value: 'test-value',
      text: 'test-text',
    },
  ]

  test('should be render without crashing', () => {
    render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)
  })

  describe('auto complete container', () => {
    test('should contain pointer-events-none class when disabled or loading prop is true', () => {
      render(
        <AutoComplete
          loading
          disabled
          options={testOptions}
          changeSelectedOption={testChangeSelectedOption}
        />
      )

      expect(screen.getByTestId(element.autoCompleteContainer)).toHaveClass('pointer-events-none')
    })
  })

  describe('auto complete input', () => {
    test('should equal the changed value when change value', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.change(screen.getByTestId(element.autoCompleteInput), {
        target: { value: testValue },
      })

      expect(screen.getByTestId(element.autoCompleteInput)).toHaveValue(testValue)
    })

    test('should equal text of the selected item when select any items', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))
      fireEvent.click(screen.getByTestId(element.autoCompleteDropdownItem))

      expect(screen.getByTestId(element.autoCompleteInput)).toHaveValue(testOptions[0].text)
    })
  })

  describe('auto complete dropdown', () => {
    test('should active when focused input', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))

      expect(screen.getByTestId(element.autoCompleteDropdown)).toBeTruthy()
    })

    test('should not active when select any items', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))
      fireEvent.click(screen.getByTestId(element.autoCompleteDropdownItem))

      expect(screen.queryByTestId(element.autoCompleteDropdown)).toBeNull()
    })
  })

  describe('auto complete dropdown no item element', () => {
    test('should active when no options by filter text', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))
      fireEvent.change(screen.getByTestId(element.autoCompleteInput), {
        target: { value: 'tests are important' },
      })

      expect(screen.getByTestId(element.autoCompleteDropdownNoItem)).toBeTruthy()
    })
  })

  describe('auto complete dropdown item', () => {
    test('should correct render', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))

      expect(screen.getAllByTestId(element.autoCompleteDropdownItem)).toHaveLength(
        testOptions.length
      )
    })

    test('should not render when filter text equals text of any items', () => {
      render(<AutoComplete options={testOptions} changeSelectedOption={testChangeSelectedOption} />)

      fireEvent.focus(screen.getByTestId(element.autoCompleteInput))
      fireEvent.change(screen.getByTestId(element.autoCompleteInput), {
        target: { value: testOptions[0].text },
      })

      expect(screen.queryAllByTestId(element.autoCompleteDropdownItem)).toHaveLength(0)
    })
  })

  test('changeSelectedOption prop should equal text of the selected item when select any items', () => {
    let expectedValueOfItem
    const handleSelectedOption = (selectedOptionValue: OptionTypes) =>
      (expectedValueOfItem = selectedOptionValue)

    render(<AutoComplete changeSelectedOption={handleSelectedOption} options={testOptions} />)

    fireEvent.focus(screen.getByTestId(element.autoCompleteInput))
    fireEvent.click(screen.getByTestId(element.autoCompleteDropdownItem))

    expect(expectedValueOfItem).toEqual(testOptions[0].value)
  })
})
