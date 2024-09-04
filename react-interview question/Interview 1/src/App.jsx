import { useState, useEffect } from 'react'
import './App.css'

function App() {
  console.log("App rendered", Math.random())
  const [value, setValue] = useState({
    value: 0
  })
  // const [multipliedValue, setMultipliedValue] = useState(5)
  // let multipliedValue= value * 5
  // const multiplyByFive = () => {
  //   // setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }
  const clickMe = () => {
    setValue({
      value: 0
    })
  }
  return (
    <>
     <h1>Main Value:{value.value}</h1>
     <button
      onClick={clickMe}
     >clickMe</button>
     {/* <h2>Multiply Value:{multipliedValue}</h2> */}
    </>
  )
}

export default App
