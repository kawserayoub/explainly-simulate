
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';
import { Card } from '@/components/ui/card';

const FlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Sample flashcards data - in a real app this would come from an API
  const flashcards = [
    { question: "What is the greenhouse effect?", answer: "A natural process that warms Earth's surface by trapping heat in the atmosphere through greenhouse gases" },
    { question: "How much has Earth's temperature increased since pre-industrial times?", answer: "About 1°C" },
    { question: "Name one mitigation strategy for climate change", answer: "Reducing fossil fuel emissions through renewable energy transition" }
  ];

  const handleNext = () => {
    setFlipped(false);
    setCurrentCardIndex((prevIndex) => 
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setFlipped(false);
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Flashcards
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Test your knowledge with these AI-generated flashcards. Click to reveal the answers.
        </p>
      </div>

      {flashcards.length > 0 ? (
        <div className="max-w-2xl mx-auto space-y-8">
          <div 
            className="relative h-64 w-full cursor-pointer perspective-1000"
            onClick={toggleFlip}
          >
            <div className={`absolute w-full h-full transition-transform duration-700 transform-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
              <Card className="absolute w-full h-full p-6 flex items-center justify-center backface-hidden">
                <p className="text-xl font-medium text-center text-explainly-navy">
                  {flashcards[currentCardIndex].question}
                </p>
              </Card>

              <Card className="absolute w-full h-full p-6 flex items-center justify-center backface-hidden rotate-y-180">
                <p className="text-xl text-center text-explainly-blue">
                  {flashcards[currentCardIndex].answer}
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="flex items-center text-explainly-gray hover:text-explainly-blue transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </button>
            <div className="text-explainly-gray">
              {currentCardIndex + 1} / {flashcards.length}
            </div>
            <button
              onClick={handleNext}
              className="flex items-center text-explainly-gray hover:text-explainly-blue transition-colors"
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/summary-preview">
              <GradientButton variant="secondary">
                Back to Summary
              </GradientButton>
            </Link>
          </div>
        </div>
      ) : (
        <Card className="text-center p-8">
          <p className="text-explainly-gray text-lg">
            No flashcards available for this summary yet.
          </p>
          <div className="mt-6">
            <Link to="/summary-preview">
              <GradientButton variant="secondary">
                Back to Summary
              </GradientButton>
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FlashcardsPage;
