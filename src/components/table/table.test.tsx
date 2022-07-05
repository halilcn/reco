import { fireEvent, render, screen, within } from '@testing-library/react'

import Table, { IRow } from './Table'

describe('Table', () => {
  const element = {
    tableContainer: 'tableContainer',
    row: 'row',
    column: 'column',
    rowItem: 'rowItem',
    columnItem: 'columnItem',
  }

  const testRows = [
    { field: 'price', headerName: 'Price', type: 'number' },
    { field: 'date', headerName: 'Date', type: 'date' },
    { field: 'title', headerName: 'Title', type: 'string', sortingActive: false },
  ] as IRow[]

  const testColumns = [
    { price: 10, title: 'test asd', date: '11-12-2020' },
    { price: 20, title: 'cxvxcv', date: '09-12-2020' },
    { price: 2, title: 'fdtdsdsest asd', date: '01-12-2020' },
    { price: 40, title: 'aa', date: '01-12-2025' },
    { price: 42, title: 'b', date: '01-02-2025' },
  ]

  test('should be render without crashing', () => {
    render(<Table rows={testRows} columns={testColumns} />)
  })

  describe('table container', () => {
    test('should add the added component props', () => {
      const handleMouseOver = jest.fn()

      render(<Table rows={testRows} onMouseOver={handleMouseOver} columns={testColumns} />)

      fireEvent.mouseOver(screen.getByTestId(element.tableContainer))

      expect(handleMouseOver).toHaveBeenCalled()
    })
  })

  describe('row item', () => {
    test('length should equal length of the rows prop', () => {
      render(<Table rows={testRows} columns={testColumns} />)

      expect(screen.getAllByTestId(element.rowItem)).toHaveLength(testRows.length)
    })

    test('should correct render when click any row  to sorting which has not that sortingActive is false', () => {
      const columns = [
        { price: 1, title: 'test asd', date: '11-12-2020' },
        { price: 2, title: 'b', date: '01-02-2025' },
        { price: 3, title: 'b', date: '01-02-2025' },
      ]

      render(<Table rows={testRows} columns={columns} />)

      //Price title click
      fireEvent.click(screen.getAllByTestId(element.rowItem)[0])

      const getColumns = screen.getAllByTestId(element.column)

      const price1Text = within(getColumns[0]).getAllByTestId(element.columnItem)[0].textContent
      const price2Text = within(getColumns[1]).getAllByTestId(element.columnItem)[0].textContent
      const price3Text = within(getColumns[2]).getAllByTestId(element.columnItem)[0].textContent

      expect(price1Text).toEqual('3')
      expect(price2Text).toEqual('2')
      expect(price3Text).toEqual('1')
    })

    test('should has text-sky-500 class when click any row  to sorting which has not that sortingActive is false', () => {
      const columns = [
        { price: 1, title: 'test asd', date: '11-12-2020' },
        { price: 2, title: 'b', date: '01-02-2025' },
        { price: 3, title: 'b', date: '01-02-2025' },
      ]

      render(<Table rows={testRows} columns={columns} />)

      const priceRow = screen.getAllByTestId(element.rowItem)[0]
      fireEvent.click(priceRow)

      expect(priceRow).toHaveClass('text-sky-500')
    })
  })

  describe('column', () => {
    test('length should equal length of the columns prop', () => {
      render(<Table rows={testRows} columns={testColumns} />)

      expect(screen.getAllByTestId(element.column)).toHaveLength(testColumns.length)
    })
  })

  describe('column item', () => {
    test('length should equal length of the columns prop', () => {
      render(<Table rows={testRows} columns={testColumns} />)

      const column = screen.getAllByTestId(element.column)[0]

      expect(within(column).getAllByTestId(element.columnItem)).toHaveLength(
        Object.values(testColumns[0]).length
      )
    })
  })
})
