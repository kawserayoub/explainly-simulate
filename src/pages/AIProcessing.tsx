
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';

const AIProcessingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          AI Processing
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Visualization of our AI processing workflow.
        </p>
      </div>

      <Card className="text-center py-12 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center">
            <Settings size={32} className="text-white animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-explainly-navy mb-4">
          ⚙️ Processing Flow Visualizer – Coming Soon!
        </h2>
        
        <p className="text-explainly-gray max-w-lg mx-auto mb-8">
          We're developing an interactive visualization that shows how our AI analyzes and processes your transcripts in real-time.
        </p>
        
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex justify-between items-center relative">
            <div className="z-10 bg-explainly-blue text-white px-4 py-2 rounded-lg">Text Input</div>
            <div className="z-10 bg-explainly-teal text-white px-4 py-2 rounded-lg">NLP Processing</div>
            <div className="z-10 bg-explainly-blue text-white px-4 py-2 rounded-lg">Learning Output</div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0">
              <div className="h-full bg-primary-gradient w-2/3"></div>
            </div>
          </div>
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

export default AIProcessingPage;
