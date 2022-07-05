import { fireEvent, render, screen } from '@testing-library/react'

import Rating from './Rating'

describe('Rating', () => {
  const element = {
    ratingContainer: 'ratingContainer',
    rating: 'rating',
    fillStar: 'fillStar',
    outlineStar: 'outlineStar',
  }

  const testChangeRating = jest.fn()

  test('should be render without crashing', () => {
    render(<Rating onChange={testChangeRating} />)
  })

  describe('rating container', () => {
    test('should contain pointer-events-none,opacity-60 class when disabled prop is true', () => {
      render(<Rating disabled onChange={testChangeRating} />)

      expect(screen.getByTestId(element.ratingContainer)).toHaveClass(
        'pointer-events-none opacity-60'
      )
    })

    test('should contain pointer-events-none class when readOOnly prop is true', () => {
      render(<Rating readOnly onChange={testChangeRating} />)

      expect(screen.getByTestId(element.ratingContainer)).toHaveClass('pointer-events-none')
    })
  })

  describe('fill start', () => {
    test('length should equal default score prop when add default score prop', () => {
      const testScore = 2

      render(<Rating defaultScore={testScore} onChange={testChangeRating} />)

      expect(screen.getAllByTestId(element.fillStar)).toHaveLength(testScore)
    })

    test('length should equal clicked rating when click any ratings', () => {
      const ratingIndex = 2

      render(<Rating onChange={testChangeRating} />)

      fireEvent.click(screen.getAllByTestId(element.rating)[ratingIndex])

      expect(screen.getAllByTestId(element.fillStar)).toHaveLength(ratingIndex + 1)
    })

    test('length should equal hovered rating when hover any ratings', () => {
      const ratingIndex = 3

      render(<Rating onChange={testChangeRating} />)

      fireEvent.mouseOver(screen.getAllByTestId(element.rating)[ratingIndex])

      expect(screen.getAllByTestId(element.fillStar)).toHaveLength(ratingIndex + 1)
    })

    test('length should equal the default score added when mouse leaves any rating', () => {
      const ratingIndex = 3
      const defaultScore = 2

      render(<Rating defaultScore={defaultScore} onChange={testChangeRating} />)

      fireEvent.mouseOver(screen.getAllByTestId(element.rating)[ratingIndex])
      fireEvent.mouseLeave(screen.getAllByTestId(element.rating)[ratingIndex])

      expect(screen.getAllByTestId(element.fillStar)).toHaveLength(defaultScore)
    })
  })
})
