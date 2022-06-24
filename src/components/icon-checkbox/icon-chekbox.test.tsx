import { fireEvent, render, screen } from '@testing-library/react'
import { FaBeer } from 'react-icons/fa'

import convertClassesToImportant from '../../utils/convertClassesToImportant'
import IconCheckbox from './IconCheckbox'

describe('Checkbox', () => {
  const element = {
    iconCheckbox: 'iconCheckbox',
  }

  const testId = 'test-id'
  const testClass = 'test-class'

  test('should be render without crashing', () => {
    render(
      <IconCheckbox id={testId}>
        <FaBeer />
      </IconCheckbox>
    )
  })

  describe('icon checkbox', () => {
    it('should contain pointer-events-none class when disable prop is true', () => {
      render(
        <IconCheckbox disabled id={testId}>
          <FaBeer />
        </IconCheckbox>
      )

      expect(screen.getByTestId(element.iconCheckbox)).toHaveClass('pointer-events-none')
    })

    it('should contain pointer-events-none class when loading prop is true', () => {
      render(
        <IconCheckbox loading id={testId}>
          <FaBeer />
        </IconCheckbox>
      )

      expect(screen.getByTestId(element.iconCheckbox)).toHaveClass('pointer-events-none')
    })

    it('should be called when checkbox is clicked', () => {
      const clickHandle = jest.fn()

      render(
        <IconCheckbox onClick={clickHandle} id={testId}>
          <FaBeer />
        </IconCheckbox>
      )

      fireEvent.click(screen.getByTestId(element.iconCheckbox))

      expect(clickHandle).toHaveBeenCalled()
    })

    it('should contain the added class name', () => {
      render(
        <IconCheckbox className={testClass} id={testId}>
          <FaBeer />
        </IconCheckbox>
      )

      expect(screen.getByTestId(element.iconCheckbox)).toHaveClass(
        convertClassesToImportant(testClass)
      )
    })
  })
})
