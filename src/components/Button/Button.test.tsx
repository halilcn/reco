import { render, screen } from '@testing-library/react'

import Button from './Button'

//todo:tests

describe('Button', () => {
  const loadingElement = 'loading'
  const contentElement = 'content'

  test('should be render without crashing', () => {
    render(<Button>Test Text Button</Button>)
  })

  test('loading content should"t be null when loading prop is true', async () => {
    render(<Button loading>Test Text Button</Button>)

    expect(screen.queryByTestId(contentElement)).toBeNull()
    expect(screen.getByTestId(loadingElement)).toBeTruthy()
  })

  test('loading content should be null when loading prop is false', async () => {
    render(<Button>Test Text Button</Button>)

    expect(screen.queryByTestId(loadingElement)).toBeNull()
    expect(screen.getByTestId(contentElement)).toBeTruthy()
  })
})
