import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import './App.css'
import { Deneme } from './components'
import Button from './components/Button/Button'
import Checkbox from './components/Checkbox/Checkbox'

function App() {
  const [testCheck, setTestCheck] = useState(true)

  return (
    <div className="flex">
      <div className="mr-6">
        <Button className="bg-red-700">test button</Button>
      </div>
      <Checkbox
        className=""
        checked={testCheck}
        onChange={() => {
          setTestCheck(!testCheck)
        }}
        id="test">
        tess deneme
      </Checkbox>
    </div>
  )
}

export default App
