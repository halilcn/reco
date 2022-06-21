import './App.css'
import { Deneme } from './components'
import Button from './components/Button/Button'
import Checkbox from './components/Checkbox/Checkbox'

function App() {
  return (
    <div className="flex">
      <div className="mr-6">
        <Button className="bg-red-700">test button</Button>
      </div>
      <Checkbox
        disabled
        onChange={() => {
          console.log('selam 1')
        }}
        id="test">
        test check
      </Checkbox>
    </div>
  )
}

export default App
