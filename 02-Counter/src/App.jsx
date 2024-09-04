import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  
  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
    }
    console.log(counter)
  }
  const removeValue=()=>{
    if(counter>0){
      
      setCounter(counter-1)
    }
    console.log(counter)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
