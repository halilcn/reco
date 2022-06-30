import { fireEvent, render, screen } from '@testing-library/react'
import { FaBeer } from 'react-icons/fa'

import convertClassesToImportant from '../../utils/convertClassesToImportant'
import Input from './Input'

describe('Input', () => {
  const element = {
    inputContainer: 'inputContainer',
    input: 'input',
    title: 'title',
  }

  const testClass = 'test-class'
  const testValue = 'test-value'

  test('should be render without crashing', () => {
    render(<Input />)
  })

  describe('input', () => {
    test('should contain border-red-200 class when hasError prop is true', () => {
      render(<Input hasError />)

      expect(screen.getByTestId(element.input)).toHaveClass('border-red-200')
    })

    test('should contain !pointer-events-none class when loading prop is true', () => {
      render(<Input loading />)

      expect(screen.getByTestId(element.input)).toHaveClass('!pointer-events-none')
    })

    test('should contain !pointer-events-none class when disabled prop is true', () => {
      render(<Input disabled />)

      expect(screen.getByTestId(element.input)).toHaveClass('!pointer-events-none')
    })

    test('should contain the added class name', () => {
      render(<Input className={testClass} />)

      expect(screen.getByTestId(element.input)).toHaveClass(convertClassesToImportant(testClass))
    })

    test('should work without when value of it change', () => {
      const handleChange = jest.fn()

      render(<Input onChange={handleChange} />)

      fireEvent.change(screen.getByTestId(element.input), { target: { value: testValue } })

      expect(handleChange).toHaveBeenCalled()
      expect(screen.getByTestId(element.input)).toHaveValue(testValue)
    })

    test('should equal the new value when value of it changed', () => {
      let expectedValue
      const handleChange = (e: any) => (expectedValue = e.target.value)

      render(<Input onChange={handleChange} />)

      fireEvent.change(screen.getByTestId(element.input), { target: { value: testValue } })

      expect(expectedValue).toEqual(testValue)
    })
  })

  describe('title', () => {
    test('should contain !text-red-300 class when hasError prop is true', () => {
      render(<Input title={testValue} hasError />)

      expect(screen.getByTestId(element.title)).toHaveClass('!text-red-300')
    })

    test('should contain pointer-events-none class when hasError prop is disabled', () => {
      render(<Input title={testValue} disabled />)

      expect(screen.getByTestId(element.title)).toHaveClass('pointer-events-none')
    })

    test('should contain pointer-events-none class when hasError prop is loading', () => {
      render(<Input title={testValue} loading />)

      expect(screen.getByTestId(element.title)).toHaveClass('pointer-events-none')
    })

    test('should equal the added title when title prop is not empty', () => {
      render(<Input title={testValue} />)

      expect(screen.getByTestId(element.title).textContent).toEqual(testValue)
    })
  })
})
