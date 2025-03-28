import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HighlightSummaryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Highlight Key Concepts
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Coming Soon! This feature will help you identify and highlight the most important concepts in your summary.
        </p>
      </div>

      <Card className="text-center p-8">
        <p className="text-explainly-gray text-lg">
          We're working hard to bring you this feature. Stay tuned!
        </p>
        <div className="mt-6">
          <Link to="/summary-preview" className="explainly-btn-secondary">
            <ArrowLeft className="mr-2 h-5 w-5 inline-block align-middle" />
            Back to Summary
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HighlightSummaryPage;
