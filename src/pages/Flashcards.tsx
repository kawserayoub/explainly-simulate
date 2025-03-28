
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';

interface Flashcard {
  id: number;
  front: string;
  back: string;
}

const FlashcardsPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState<number[]>([]);

  const flashcards: Flashcard[] = [
    {
      id: 1,
      front: "What is a Neural Network?",
      back: "A computing system inspired by biological neural networks that can learn from examples. It consists of interconnected nodes (neurons) organized in layers that process information and learn patterns."
    },
    {
      id: 2,
      front: "What are the key differences between deep learning and traditional machine learning?",
      back: "Deep learning uses neural networks with multiple hidden layers, while traditional ML often uses simpler models. Deep learning can automatically discover features from raw data without feature engineering, scales better with data, but requires more computational resources and training data."
    },
    {
      id: 3,
      front: "What is the Transformer architecture and why is it significant?",
      back: "Transformer is a neural network architecture that uses self-attention mechanisms to process sequential data in parallel rather than sequentially. It's significant because it revolutionized NLP by enabling more efficient training on larger datasets, leading to models like BERT, GPT, and T5 that achieve state-of-the-art performance."
    },
    {
      id: 4,
      front: "What is Reinforcement Learning?",
      back: "A learning approach where agents take actions in an environment to maximize cumulative reward. It involves learning through trial and error, with the agent receiving feedback in the form of rewards or penalties. It's used in applications like game playing, robotics, and autonomous systems."
    },
    {
      id: 5,
      front: "What were the major periods in AI development?",
      back: "1. Early symbolic AI (1950s-1960s): Focus on reasoning, logic, and search\n2. Expert Systems era (1970s): Rule-based systems for specific domains\n3. AI Winter (1980s-1990s): Reduced funding due to unmet expectations\n4. Statistical ML (1990s-2000s): Probability and statistics-based methods\n5. Deep Learning era (2010s-present): Neural networks, big data, and GPU computing"
    }
  ];

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const markCardCompleted = () => {
    if (!completedCards.includes(flashcards[currentCard].id)) {
      setCompletedCards(prev => [...prev, flashcards[currentCard].id]);
    }
    handleNextCard();
  };

  const resetFlashcards = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setCompletedCards([]);
  };

  const progress = Math.round((completedCards.length / flashcards.length) * 100);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Flashcards
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Study key concepts with interactive flashcards. Click a card to flip it.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6 animate-fade-in">
        <div className="flex items-center space-x-2">
          <span className="text-explainly-navy font-medium">Progress:</span>
          <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-gradient rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-explainly-gray text-sm">
            {completedCards.length} of {flashcards.length}
          </span>
        </div>
        
        <button 
          onClick={resetFlashcards}
          className="text-explainly-navy hover:text-explainly-blue flex items-center"
        >
          <RotateCcw size={16} className="mr-1" />
          Reset
        </button>
      </div>

      <div 
        className={`flip-card h-80 mb-8 animate-fade-in ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlipCard}
      >
        <div className="flip-card-inner h-full">
          <div className="flip-card-front">
            <Card className="h-full w-full flex flex-col justify-center items-center text-center px-8 cursor-pointer">
              <h2 className="text-2xl font-semibold text-explainly-navy mb-4">
                {flashcards[currentCard].front}
              </h2>
              <p className="text-explainly-gray text-sm mt-auto">
                Click to flip
              </p>
            </Card>
          </div>
          <div className="flip-card-back">
            <Card className="h-full w-full flex flex-col justify-center px-8 py-6 cursor-pointer overflow-auto">
              <p className="text-explainly-gray whitespace-pre-line">
                {flashcards[currentCard].back}
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center animate-fade-in">
        <button
          onClick={handlePrevCard}
          disabled={currentCard === 0}
          className={`flex items-center ${
            currentCard === 0 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-explainly-navy hover:text-explainly-blue'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          Previous
        </button>
        
        <div className="text-explainly-gray">
          {currentCard + 1} / {flashcards.length}
        </div>
        
        <div className="flex space-x-4">
          {currentCard < flashcards.length - 1 ? (
            <>
              <button
                onClick={markCardCompleted}
                className="text-explainly-teal hover:text-explainly-blue"
              >
                Mark & Next
              </button>
              <button
                onClick={handleNextCard}
                className="text-explainly-navy hover:text-explainly-blue flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-1" />
              </button>
            </>
          ) : (
            <Link to="/summary-preview">
              <GradientButton>
                Back to Summary
              </GradientButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashcardsPage;
