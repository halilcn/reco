import { fireEvent, render, screen } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  const element = {
    checkboxContainer: 'checkboxContainer',
    checkbox: 'checkbox',
    label: 'label',
  }

  const testId = 'test-id'

  //todo:!

  test('should be render without crashing', () => {
    render(<Checkbox id={testId}>Test Checkbox</Checkbox>)
  })

  describe('checkbox container', () => {})

  describe('input checkbox', () => {
    test('shouldn"t be disable when first render', async () => {
      render(<Checkbox id={testId}>Test Checkbox</Checkbox>)

      expect(screen.getByTestId(element.checkbox)).not.toBeDisabled()
    })

    test('should be disable when disable prop is true', async () => {
      render(
        <Checkbox disabled id={testId}>
          Test Checkbox
        </Checkbox>
      )

      expect(screen.getByTestId(element.checkbox)).toBeDisabled()
    })

    test('should be checked when checked prop is true', async () => {
      render(
        <Checkbox checked id={testId}>
          Test Checkbox
        </Checkbox>
      )

      expect(screen.getByTestId(element.checkbox)).toBeChecked()
    })

    test('shouldn"t be checked when checked prop is false', async () => {
      render(
        <Checkbox checked={false} id={testId}>
          Test Checkbox
        </Checkbox>
      )

      expect(screen.getByTestId(element.checkbox)).not.toBeChecked()
    })

    test('should be called when checkbox is clicked', async () => {
      const clickHandle = jest.fn()

      render(
        <Checkbox onClick={clickHandle} checked={false} id={testId}>
          Test Checkbox
        </Checkbox>
      )

      fireEvent.click(screen.getByTestId(element.checkbox))

      expect(clickHandle).toHaveBeenCalled()
    })

    test('should have added props', async () => {
      const testValue = 'test-value'

      render(
        <Checkbox value={testValue} id={testId}>
          Test Checkbox
        </Checkbox>
      )

      expect(screen.getByTestId(element.checkbox)).toHaveProperty('value', testValue)
    })
  })
})
