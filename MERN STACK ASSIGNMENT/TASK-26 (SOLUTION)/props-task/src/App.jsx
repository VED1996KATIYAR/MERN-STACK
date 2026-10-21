import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-center text-purpule-400 text-xl font-bold mb-10">
        All the cards are here
      </h2>
      <div className="grid grid-cols-1 sm:grids-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <Card
        title="Card 1"
        description="This is Card 1"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 2"
        description="This is Card 2"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 3"
        description="This is Card 3"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 4"
        description="This is Card 4"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 5"
        description="This is Card 5"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 6"
        description="This is Card 6"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 7"
        description="This is Card 7"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 8"
        description="This is Card 8"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 9"
        description="This is Card 9"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 10"
        description="This is Card 10"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 11"
        description="This is Card 11"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />
        <Card
        title="Card 12"
        description="This is Card 12"
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300"
        />

      </div>
    </div>
    </>
  )
}

export default App
