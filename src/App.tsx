import { useState } from 'react'
import { FaBeer } from 'react-icons/fa'

import './App.css'
import Button from './components/button/Button'
import Checkbox from './components/checkbox/Checkbox'

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
