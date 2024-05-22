import { useState } from 'react'
import './App.css'
import Alphabet from './components/Alphabet/Alphabet'
import Partition from './components/Partition/Partition'

function App() {
  const [task, setTask] = useState(true);


  return (
    <div className="App">
      <div className="button-container">
        <button className="styled-button" onClick={()=>setTask(true)}>Recursive-partitioning</button>
        <button className="styled-button" onClick={()=>setTask(false)}>Alphabet Tile Interaction</button>        
      </div>
      {
        task ?
          <Partition color={'#' + Math.floor(Math.random() * 16777215).toString(16)} onRemove={() => { }} />
          :
          <Alphabet />
      }
    </div>
  )
}

export default App
