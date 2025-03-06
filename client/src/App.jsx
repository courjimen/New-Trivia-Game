import { useState } from 'react'
import TriviaForm from './components/TriviaForm'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TriviaForm />
    </>
  )
}

export default App
