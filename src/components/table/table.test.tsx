import { render } from '@testing-library/react'

import Table from './Table'

describe('Table', () => {
  const element = {
    tableContainer: 'tableContainer',
    rowItem: 'rowItem',
    columnItem: 'columnItem',
  }

  const testRows = [
    { field: 'price', headerName: 'Price', type: 'number' },
    { field: 'title', headerName: 'Title', type: 'string' },
    { field: 'date', headerName: 'Date', type: 'date' },
  ]
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
})
