import { fireEvent, render, screen } from '@testing-library/react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'
import Button from './Button'

describe('Button', () => {
  const element = {
    button: 'button',
    loading: 'loading',
    content: 'content',
  }

  const testClass = 'test-class-name'

  test('should be render without crashing', () => {
    render(<Button>Test Text Button</Button>)
  })

  describe('loading content', () => {
    test('should"t be null when loading prop is true', async () => {
      render(<Button loading>Test Text Button</Button>)

      expect(screen.queryByTestId(element.content)).toBeNull()
      expect(screen.getByTestId(element.loading)).toBeTruthy()
    })

    test('should be null when loading prop is false', async () => {
      render(<Button>Test Text Button</Button>)

      expect(screen.queryByTestId(element.loading)).toBeNull()
      expect(screen.getByTestId(element.content)).toBeTruthy()
    })
  })

  describe('button click function', () => {
    test('should be called when button is clicked', async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Test Text Button</Button>)

      fireEvent.click(screen.getByTestId(element.button))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('class of the button', () => {
    test('should contain the added class name', async () => {
      render(<Button className={testClass}>Test Text Button</Button>)

      expect(screen.getByTestId(element.button)).toHaveClass(convertClassesToImportant(testClass))
    })

    test('should contain opacity class when disabled prop is true', async () => {
      render(<Button disabled>Test Text Button</Button>)

      const buttonClassList = screen.getByTestId(element.button).classList

      expect(buttonClassList.contains('opacity-50')).toBeTruthy()
      expect(buttonClassList.contains('pointer-events-none')).toBeTruthy()
    })

    test('should contain opacity class when loading prop is true', async () => {
      render(<Button loading>Test Text Button</Button>)

      const buttonClassList = screen.getByTestId(element.button).classList

      expect(buttonClassList.contains('opacity-50')).toBeTruthy()
      expect(buttonClassList.contains('pointer-events-none')).toBeTruthy()
    })
  })
})
