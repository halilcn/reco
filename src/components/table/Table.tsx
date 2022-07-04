import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

export interface IRow {
  field: string
  headerName: string
  type: 'string' | 'number' | 'date'
  sortingActive?: boolean
}

export interface IProps extends React.ComponentProps<'div'> {
  rows: IRow[]
  columns: any[]
  rowsStyle?: string
  columnsStyle?: string
}

export interface ActiveSort {
  reverse: boolean
  field: string
}

const Select: React.FC<IProps> = props => {
  const { className, rows, columns, rowsStyle, columnsStyle, ...componentProps } = props

  const [tableColumns, setTableColumns] = useState<any[]>([])
  const [rowFields, setRowFields] = useState<string[]>()
  const [activeSorting, setActiveSorting] = useState<ActiveSort>({ reverse: false, field: '' })

  useEffect(() => {
    setTableColumns(columns)
    setRowFields(rows.map(row => row.field))
  }, [])

  const sortColum = (field: string) => {
    if (findRowByField(field)?.sortingActive === false) return

    const isReserve = activeSorting.field === field ? activeSorting.reverse : false

    if (findRowByField(field)?.type === 'number') sortingByNumber(field, isReserve)
    if (findRowByField(field)?.type === 'date') sortingByDate(field, isReserve)
    if (findRowByField(field)?.type === 'string') sortingByString(field, isReserve)

    setActiveSorting({ reverse: !activeSorting.reverse, field })
  }

  const findRowByField = (field: string) => {
    return rows.find(row => row.field === field)
  }

  const sortingByNumber = (field: string, reserve: boolean) => {
    const sortedColumns = columns.sort(function (a: any, b: any) {
      if (reserve) return parseInt(a[field]) > parseInt(b[field]) ? 1 : -1

      return parseInt(a[field]) < parseInt(b[field]) ? 1 : -1
    })

    setTableColumns(sortedColumns)
  }

  const sortingByDate = (field: string, reserve: boolean) => {
    const sortedColumns = columns.sort(function (a: any, b: any) {
      if (reserve) return dayjs(a[field]).isAfter(b[field]) ? 1 : -1

      return dayjs(a[field]).isBefore(b[field]) ? 1 : -1
    })

    setTableColumns(sortedColumns)
  }

  const sortingByString = (field: string, reserve: boolean) => {
    const sortedColumns = columns.sort(function (a: any, b: any) {
      return reserve ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field])
    })

    setTableColumns(sortedColumns)
  }

  const tableContainerClass = classNames('w-full border-2 rounded shadow-sm')

  const rowContainerClass = classNames('flex justify-around border-b p-4 text-sm text-gray-800')

  const rowItemClass = (row: IRow) => {
    return classNames(
      'flex items-center w-full cursor-pointer',
      convertClassesToImportant(rowsStyle),
      {
        'cursor-pointer': row.sortingActive !== false,
        'text-sky-500': activeSorting.field === row.field,
      }
    )
  }

  const columClass = classNames(
    'flex justify-around p-4 border-b font-light text-sm text-gray-600 even:bg-gray-50',
    convertClassesToImportant(columnsStyle)
  )

  return (
    <div className={tableContainerClass} {...componentProps}>
      <div className={rowContainerClass}>
        {rows.map((row, key) => (
          <div key={key} onClick={() => sortColum(row.field)} className={rowItemClass(row)}>
            {row.headerName}
            {row.sortingActive !== false &&
              (activeSorting.reverse ? (
                <TiArrowSortedDown className="ml-3" />
              ) : (
                <TiArrowSortedUp className="ml-3" />
              ))}
          </div>
        ))}
      </div>
      {tableColumns.map((column, key) => (
        <div key={key} className={columClass}>
          {rowFields?.map(rowField => (
            <div className="w-full">{column[rowField]}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Select
