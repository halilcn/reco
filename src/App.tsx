import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import './App.css'
import Button from './components/button/Button'
import Checkbox from './components/checkbox/Checkbox'
import IconCheckbox from './components/icon-checkbox/IconCheckbox'
import Input from './components/input/Input'
import Select from './components/select/Select'

function App() {
  const [testCheck, setTestCheck] = useState(true)
  const [testSelectDrop, setTestSelectDrop] = useState(false)

  const handleSelect = (selectedOption: string | number | boolean) => {
    console.log(selectedOption)
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
      <Input title={'ASDsadsa'} type="text" onChange={e => console.log(e.target.value)} />
    </div>
  )
}

export default App
