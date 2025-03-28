
import { Link } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';

const StudyTipsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Study Tips
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Get personalized study recommendations based on your content.
        </p>
      </div>

      <Card className="text-center py-12 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center">
            <Lightbulb size={32} className="text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-explainly-navy mb-4">
          💡 Study Tips Assistant in progress!
        </h2>
        
        <p className="text-explainly-gray max-w-lg mx-auto mb-8">
          We're building an AI assistant that will analyze your learning materials and provide customized study strategies to help you learn more effectively.
        </p>
        
        <div className="max-w-md mx-auto mb-8 bg-explainly-lightGray p-6 rounded-lg text-left">
          <h3 className="font-semibold text-explainly-navy mb-3">Example Study Tips</h3>
          <ul className="space-y-3 text-explainly-gray">
            <li className="flex items-start">
              <span className="text-explainly-blue mr-2">•</span>
              <span>Focus on understanding the relationships between different neural network architectures</span>
            </li>
            <li className="flex items-start">
              <span className="text-explainly-blue mr-2">•</span>
              <span>Create a timeline of AI development to understand the historical context</span>
            </li>
            <li className="flex items-start">
              <span className="text-explainly-blue mr-2">•</span>
              <span>Practice explaining transformer architectures in your own words</span>
            </li>
          </ul>
        </div>
        
        <Link to="/summary-preview">
          <GradientButton>
            Back to Summary
          </GradientButton>
        </Link>
      </Card>
    </div>
  );
};

export default StudyTipsPage;
