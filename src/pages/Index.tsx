import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-explainly-navy mb-4">
          Unlock Your Learning Potential
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Transform your study routine with AI-powered tools designed to make learning more efficient and effective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 animate-fade-in">
          <h2 className="text-2xl font-semibold text-explainly-navy mb-4">
            Summarize
          </h2>
          <p className="text-explainly-gray mb-4">
            Instantly generate clear and concise summaries from lengthy text or audio, saving you time and helping you focus on key information.
          </p>
          <Link to="/demo" className="explainly-btn-primary">
            Summarize Now <ArrowRight className="ml-2" size={16} />
          </Link>
        </Card>

        <Card className="p-6 animate-fade-in">
          <h2 className="text-2xl font-semibold text-explainly-navy mb-4">
            Quiz & Flashcards
          </h2>
          <p className="text-explainly-gray mb-4">
            Create custom quizzes and flashcards from your summaries to reinforce learning and improve retention.
          </p>
          <Link to="/demo" className="explainly-btn-primary">
            Create Learning Tools <ArrowRight className="ml-2" size={16} />
          </Link>
        </Card>
      </div>

      <div className="mt-12 text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-explainly-navy mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto mb-8">
          Join thousands of students and professionals who are already using Explainly to enhance their learning experience.
        </p>
        <Link to="/demo" className="explainly-btn-primary">
          Try the Demo
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
