import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(10)

  
  const addValue=()=>{
    console.log("Value Incremented",Math.random())
    setCounter(counter+1)

  }
  const subtractvalue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Hey Everyone , we are here to understood hooks in react</h1>
      <h3>Counter :{counter}</h3>


      <button onClick={addValue}>Increment By 1</button>
      <button onClick={subtractvalue}>Decrement By 1</button>
    </>
  )
}

export default App
