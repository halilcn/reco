import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import './App.css'
import Button from './components/button/Button'
import Checkbox from './components/checkbox/Checkbox'
import IconCheckbox from './components/icon-checkbox/IconCheckbox'

function App() {
  const [testCheck, setTestCheck] = useState(true)

  return (
    <div className="flex-col justify-center items-center">
      <div className="mr-6">
        <Button className="bg-red-700">test button</Button>
      </div>
      <Checkbox
        className={'mr-10'}
        checked={testCheck}
        onChange={() => {
          setTestCheck(!testCheck)
        }}
        id="test">
        tess deneme
      </Checkbox>
      <br />
      <div className="flex">
        <IconCheckbox
          disabled
          checked={testCheck}
          onClick={() => {
            setTestCheck(!testCheck)
          }}
          id={'dednem'}>
          <FaBeer />
        </IconCheckbox>
      </div>
    </div>
  )
}

export default App
