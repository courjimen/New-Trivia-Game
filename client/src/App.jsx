import { useState } from 'react'
import TriviaForm from './components/TriviaForm'
import './App.css'
import Score from './components/Results'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TriviaForm />
    </>
  )
}

export default App;
