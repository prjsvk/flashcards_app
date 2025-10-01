import React, { useState } from 'react'
import Flashcard from './Flashcard'

function App() {
  // Sample flashcard data
  const cardSet = {
    title: "Web Development Basics",
    description: "Fundamental concepts for web developers",
    cards: [
      { id: 1, question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "easy" },
      { id: 2, question: "What is the purpose of CSS?", answer: "To style and layout web pages", category: "easy" },
      { id: 3, question: "What is a React component?", answer: "A reusable piece of UI that can contain its own logic and appearance", category: "medium" },
      { id: 4, question: "What is JavaScript's event loop?", answer: "A runtime model that executes code, collects and processes events, and executes queued sub-tasks", category: "hard" },
      { id: 5, question: "What is the virtual DOM?", answer: "A programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM", category: "medium" },
      { id: 6, question: "What is CSS Flexbox?", answer: "A layout model that allows efficient arrangement of elements in a container", category: "medium" }
    ]
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardSet.cards.length)
    setCurrentCardIndex(randomIndex)
  }

  const currentCard = cardSet.cards[currentCardIndex]

  return (
    <div className="app">
      <header className="app-header">
        <h1>{cardSet.title}</h1>
        <p className="description">{cardSet.description}</p>
        <div className="card-count">
          Total Cards: {cardSet.cards.length}
        </div>
      </header>

      <main className="main-content">
        <Flashcard 
          card={currentCard}
        />
        
        <button className="next-button" onClick={getRandomCard}>
          Next Card
        </button>
      </main>
    </div>
  )
}

export default App