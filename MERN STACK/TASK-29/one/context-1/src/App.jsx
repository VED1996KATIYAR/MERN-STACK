import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h4 className="text-3xl">React Context API Course</h4>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
