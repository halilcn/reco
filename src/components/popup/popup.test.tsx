import { fireEvent, render, screen } from '@testing-library/react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'
import Popup from './Popup'

describe('Popup', () => {
  const element = {
    popupFilter: 'popupFilter',
    popup: 'popup',
    closeIcon: 'closeIcon',
    title: 'title',
    children: 'children',
  }

  const testEnable = true
  const testTitle = 'Test Title'
  const testChildren = 'Test Children'
  const testClass = 'test-class'
  const testTogglePopup = jest.fn()

  test('should be render without crashing', () => {
    render(
      <Popup enable={testEnable} title={testTitle} togglePopup={testTogglePopup}>
        {testChildren}
      </Popup>
    )
  })

  describe('popup filter', () => {})

  describe('popup', () => {
    it('should not render when enable is false', function () {
      render(
        <Popup enable={false} title={testTitle} togglePopup={testTogglePopup}>
          {testChildren}
        </Popup>
      )

      expect(screen.queryByTestId(element.popup)).toBeNull()
    })

    it('should contain the added class', function () {
      render(
        <Popup
          className={testClass}
          enable={testEnable}
          title={testTitle}
          togglePopup={testTogglePopup}>
          {testChildren}
        </Popup>
      )

      expect(screen.queryByTestId(element.popup)).toHaveClass(convertClassesToImportant(testClass))
    })
  })

  describe('title', () => {
    test('should be equal the child content', () => {
      render(
        <Popup enable={testEnable} title={testTitle} togglePopup={testTogglePopup}>
          {testChildren}
        </Popup>
      )

      expect(screen.getByTestId(element.title).textContent).toEqual(testTitle)
    })
  })

  describe('children', () => {
    test('should be equal the child content', () => {
      render(
        <Popup enable={testEnable} title={testTitle} togglePopup={testTogglePopup}>
          {testChildren}
        </Popup>
      )

      // eslint-disable-next-line testing-library/no-node-access
      expect(screen.getByTestId(element.children).textContent).toEqual(testChildren)
    })
  })

  describe('toggle popup function', () => {
    it('should have been called when click close icon', function () {
      const handleTogglePopup = jest.fn()

      render(
        <Popup enable={testEnable} title={testTitle} togglePopup={handleTogglePopup}>
          {testChildren}
        </Popup>
      )

      fireEvent.click(screen.getByTestId(element.closeIcon))

      expect(handleTogglePopup).toHaveBeenCalled()
    })

    it('should have been called when click popup filter', function () {
      const handleTogglePopup = jest.fn()

      render(
        <Popup enable={testEnable} title={testTitle} togglePopup={handleTogglePopup}>
          {testChildren}
        </Popup>
      )

      fireEvent.click(screen.getByTestId(element.popupFilter))

      expect(handleTogglePopup).toHaveBeenCalled()
    })
  })
})
