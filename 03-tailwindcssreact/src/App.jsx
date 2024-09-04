
import Card from './components/Card'

function App() {
  let myObj={
    username:"alok",
    age:24,
  }
  let newArr=[1,2,3]

  return (
    <>
      <Card username='Twitch' btnText="click me"/>
      <Card username="Alok" btnText="visit me"/>
    </>
  )
}

export default App
