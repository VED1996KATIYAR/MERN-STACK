import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 let [color,setColor]= useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-md  bottom-12 bg-white inset-x-0 px-2 py-2 rounded-2xl">
        <button onClick={()=>setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
          Green
        </button>
        <button  onClick={()=>setColor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
          Red
        </button>
        <button  onClick={()=>setColor("yellow")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>
          Yellow
        </button>
        <button  onClick={()=>setColor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>
          orange
        </button>
        <button  onClick={()=>setColor("purple")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
          Purpule
        </button>
      </div>
    </div>
    </>
  )
}

export default App
