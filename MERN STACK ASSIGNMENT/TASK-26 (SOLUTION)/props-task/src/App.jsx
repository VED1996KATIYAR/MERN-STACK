import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'


const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is Card 1',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is Card 2',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300'
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is Card 3',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300'
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is Card 4',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300'
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'This is Card 5',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300'
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'This is Card 6',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300'
  },
  {
    id: 7,
    title: 'Card 7',
    description: 'This is Card 7',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300'
  },
  {
    id: 8,
    title: 'Card 8',
    description: 'This is Card 8',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300'
  },
  {
    id: 9,
    title: 'Card 9',
    description: 'This is Card 9',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=300'
  },
  {
    id: 10,
    title: 'Card 10',
    description: 'This is Card 10',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300'
  },
  {
    id: 11,
    title: 'Card 11',
    description: 'This is Card 11',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300'
  },
  {
    id: 12,
    title: 'Card 12',
    description: 'This is Card 12',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-center text-purple-400 text-xl font-bold mb-10">
        All the cards are here
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App

