import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AIProcessingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate AI processing delay
    const timer = setTimeout(() => {
      // Replace with actual navigation logic
      navigate('/summary-preview', { replace: true });
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          AI is Processing
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Please wait while our AI processes your content. This may take a few moments.
        </p>
      </div>

      <Card className="animate-fade-in flex flex-col items-center justify-center p-8">
        <Loader2 className="animate-spin h-10 w-10 text-explainly-blue mb-4" />
        <p className="text-explainly-gray">Generating summary...</p>
      </Card>
    </div>
  );
};

export default AIProcessingPage;
