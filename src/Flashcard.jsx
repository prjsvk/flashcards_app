import React, { useState } from 'react'

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'easy': return '#4CAF50'
      case 'medium': return '#FF9800'
      case 'hard': return '#F44336'
      default: return '#2196F3'
    }
  }

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="flashcard-inner">
        <div 
          className="flashcard-front"
          style={{ borderColor: getCategoryColor(card.category) }}
        >
          <div className="card-content">
            <span className="category-badge" style={{ backgroundColor: getCategoryColor(card.category) }}>
              {card.category}
            </span>
            <h3>Question</h3>
            <p>{card.question}</p>
            <div className="hint">Click to reveal answer</div>
          </div>
        </div>
        
        <div 
          className="flashcard-back"
          style={{ borderColor: getCategoryColor(card.category) }}
        >
          <div className="card-content">
            <span className="category-badge" style={{ backgroundColor: getCategoryColor(card.category) }}>
              {card.category}
            </span>
            <h3>Answer</h3>
            <p>{card.answer}</p>
            <div className="hint">Click to see question</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcard