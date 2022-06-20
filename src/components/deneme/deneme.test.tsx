import {render, fireEvent,screen} from '@testing-library/react'
import Deneme from './Deneme'


describe('test deneme', () => {
  test('okey selma', () => {
    render(<Deneme/>)

    expect(true).toBeTruthy()
  })
})
