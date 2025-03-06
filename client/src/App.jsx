import { useState } from 'react'
import TriviaForm from './components/TriviaForm'
import './App.css'
import PlayerName from './components/PlayerName'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PlayerName />
    <TriviaForm />
    </>
  )
}

export default App
