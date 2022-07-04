import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { FaSortUp } from 'react-icons/fa'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

export interface IRows {
  field: string
  headerName: string
}

export interface IProps extends React.ComponentProps<'div'> {
  rows: IRows[]
  columns: any[]
}

enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}

//todo:row ve title custom style?

const Select: React.FC<IProps> = props => {
  const { className, ...componentProps } = props

  const [tableColumns, setTableColumns] = useState<any[]>([])

  useEffect(() => {
    setTableColumns([
      { test: 1, test1: 2, test3: 3 },
      { test: 5, test1: 2, test3: 3 },
      { test: 3, test1: 2, test3: 3 },
    ])
  }, [])

  const sortColum = (field: string, sortType: SortType) => {
    alert(sortType)
  }

  return (
    <div className="w-full border-2 rounded shadow-sm">
      <div className="flex justify-around border-b p-4 text-sm text-gray-800">
        <div
          onClick={() => sortColum('field_name', SortType.ASC)}
          className="flex items-center w-full cursor-pointer text-sky-500">
          Test asda s 1
          <FaSortUp className="ml-3" />
        </div>
        <div className=" w-full">Test asd as1</div>
        <div className=" w-full">Testds 1</div>
      </div>
      {tableColumns.map(column => (
        <div className="flex justify-around p-4 border-b font-light text-sm	text-gray-600">
          <div className=" w-full">{column.test}</div>
          <div className=" w-full">{column.test1}</div>
          <div className=" w-full">{column.test3}</div>
        </div>
      ))}
    </div>
  )
}

export default Select
