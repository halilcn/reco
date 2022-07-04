import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import './App.css'
import AutoComplete from './components/auto-complete/AutoComplete'
import Button from './components/button/Button'
import Checkbox from './components/checkbox/Checkbox'
import IconCheckbox from './components/icon-checkbox/IconCheckbox'
import Input from './components/input/Input'
import Select from './components/select/Select'
import Table from './components/table/Table'

function App() {
  const [testCheck, setTestCheck] = useState(true)
  const [testSelectDrop, setTestSelectDrop] = useState(false)

  const handleSelect = (selectedOption: string | number | boolean) => {
    console.log(selectedOption)
  }

  const testFunc = (selectedOptionValue: string | number | boolean) => {
    console.log(selectedOptionValue)
  }

  return (
    <div className="flex flex-col items-center">
      <Button className={'bg-red-600'}>test button</Button>
      <Checkbox
        className={'mr-16'}
        checked={testCheck}
        onChange={() => {
          setTestCheck(!testCheck)
        }}
        id="test">
        tess deneme
      </Checkbox>
      <IconCheckbox
        className={'text-red-600'}
        checked={testCheck}
        onClick={() => {
          setTestCheck(!testCheck)
        }}
        id={'dednem'}>
        <FaBeer />
      </IconCheckbox>
      <br />
      <br />
      <br />
      <Select
        disabled={testCheck}
        changeOption={handleSelect}
        options={[
          { value: 1, text: 'deneasd ad asd asd ad asdsdsad sme' },
          { value: 2, text: 'aaaaa' },
        ]}
      />
      <br />
      <br />
      <Input onChange={e => console.log(e.target.value)} />
      <br />
      <AutoComplete
        changeSelectedOption={testFunc}
        options={[
          { value: 1, text: 'deneasd ad asd asd ad asdsdsad sme' },
          { value: 2, text: 'aaaaa' },
        ]}
      />
      <div className="w-1/2">
        <Table
          rows={[
            { field: 'price', headerName: 'Price', type: 'number', sortingActive: false },
            { field: 'title', headerName: 'Title', type: 'string' },
            { field: 'date', headerName: 'Date', type: 'date' },
          ]}
          columns={[
            { price: 10, title: 'test asd', date: '11-12-2020' },
            { price: 20, title: 'cxvxcv', date: '09-12-2020' },
            { price: 2, title: 'fdtdsdsest asd', date: '01-12-2020' },
            { price: 40, title: 'aa', date: '01-12-2025' },
            { price: 42, title: 'b', date: '01-02-2025' },
          ]}
        />
      </div>
    </div>
  )
}

export default App
