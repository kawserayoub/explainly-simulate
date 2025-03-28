
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';

interface Question {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What event is often cited as the breakthrough moment for deep learning in 2012?",
      options: [
        { id: "a", text: "IBM Watson winning Jeopardy" },
        { id: "b", text: "The release of TensorFlow" },
        { id: "c", text: "AlexNet winning the ImageNet competition" },
        { id: "d", text: "Google's AlphaGo defeating Lee Sedol" }
      ],
      correctAnswer: "c",
      explanation: "AlexNet, developed by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton, won the 2012 ImageNet competition with a significant improvement in image classification accuracy using deep convolutional neural networks. This moment is widely considered the breakthrough that sparked the current deep learning revolution."
    },
    {
      id: 2,
      text: "Which of the following is NOT a characteristic of transformer architectures?",
      options: [
        { id: "a", text: "Self-attention mechanisms" },
        { id: "b", text: "Recurrent connections" },
        { id: "c", text: "Parallel processing" },
        { id: "d", text: "Positional encodings" }
      ],
      correctAnswer: "b",
      explanation: "Transformer architectures, introduced in the paper 'Attention Is All You Need', specifically avoid recurrent connections. Instead, they rely entirely on self-attention mechanisms to process sequences in parallel, which has led to significant improvements in processing efficiency. Recurrent connections are a defining feature of RNNs, not transformers."
    },
    {
      id: 3,
      text: "What period is commonly referred to as the 'AI Winter'?",
      options: [
        { id: "a", text: "1970s" },
        { id: "b", text: "1980s-1990s" },
        { id: "c", text: "2000-2010" },
        { id: "d", text: "2015-present" }
      ],
      correctAnswer: "b",
      explanation: "The 'AI Winter' primarily refers to the period in the 1980s and early 1990s when funding and interest in AI research decreased significantly following unmet expectations and limitations of early AI approaches. During this time, many AI companies failed and research funding was cut as the field struggled to deliver on its promises."
    }
  ];

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
    setShowExplanation(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const isAnswerCorrect = (questionId: number) => {
    return selectedAnswers[questionId] === questions.find(q => q.id === questionId)?.correctAnswer;
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      score: correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const result = calculateScore();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Quiz
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Test your knowledge with these AI-generated questions.
        </p>
      </div>

      {!quizCompleted ? (
        <Card className="animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-explainly-gray">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex gap-1">
              {questions.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-6 rounded-full ${
                    index === currentQuestion 
                      ? 'bg-primary-gradient' 
                      : index < currentQuestion 
                        ? 'bg-explainly-teal/60' 
                        : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-explainly-navy mb-6">
            {questions[currentQuestion].text}
          </h2>
          
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map(option => {
              const isSelected = selectedAnswers[questions[currentQuestion].id] === option.id;
              const isCorrect = option.id === questions[currentQuestion].correctAnswer;
              const showResult = showExplanation[questions[currentQuestion].id];
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(questions[currentQuestion].id, option.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    isSelected
                      ? showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-explainly-blue bg-explainly-lightGray'
                      : showResult && isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-explainly-blue hover:bg-explainly-lightGray/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                      {option.text}
                    </div>
                    {showResult && isCorrect && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {showExplanation[questions[currentQuestion].id] && (
            <div className="bg-explainly-lightGray p-4 rounded-lg mb-6 animate-fade-in">
              <h3 className="font-semibold text-explainly-navy mb-2">Explanation:</h3>
              <p className="text-explainly-gray text-sm">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
          
          <div className="flex justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center ${
                currentQuestion === 0 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-explainly-navy hover:text-explainly-blue'
              }`}
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous
            </button>
            
            <GradientButton onClick={handleNextQuestion}>
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next
                  <ChevronRight size={20} className="ml-1" />
                </>
              ) : (
                'Finish Quiz'
              )}
            </GradientButton>
          </div>
        </Card>
      ) : (
        <Card className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-explainly-navy mb-4">Quiz Completed!</h2>
          
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-explainly-blue">
              <span className="text-3xl font-bold explainly-gradient-text">
                {result.percentage}%
              </span>
            </div>
            <p className="text-explainly-gray">
              You scored {result.score} out of {result.total} questions correctly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/summary-preview">
              <GradientButton variant="secondary" className="w-full">
                Back to Summary
              </GradientButton>
            </Link>
            <Link to="/flashcards">
              <GradientButton className="w-full">
                Try Flashcards
              </GradientButton>
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
};

export default QuizPage;
