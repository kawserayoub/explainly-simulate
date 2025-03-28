import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const StudyTipsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Study Tips
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Maximize your learning with these effective study tips.
        </p>
      </div>

      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-explainly-navy mb-4">
            Effective Study Techniques
          </h2>
          <ul className="list-disc list-inside text-explainly-gray">
            <li className="mb-2">
              <strong>Spaced Repetition:</strong> Review material at increasing intervals to improve retention.
            </li>
            <li className="mb-2">
              <strong>Active Recall:</strong> Test yourself frequently on the material rather than passively rereading it.
            </li>
            <li className="mb-2">
              <strong>Interleaving:</strong> Mix different subjects or topics during study sessions to enhance learning.
            </li>
            <li className="mb-2">
              <strong>Elaboration:</strong> Explain concepts in your own words and connect them to what you already know.
            </li>
          </ul>
        </div>
      </Card>

      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-explainly-navy mb-4">
            Optimize Your Study Environment
          </h2>
          <ul className="list-disc list-inside text-explainly-gray">
            <li className="mb-2">
              <strong>Minimize Distractions:</strong> Find a quiet place to study and turn off notifications.
            </li>
            <li className="mb-2">
              <strong>Use Background Noise:</strong> If silence is distracting, try white noise or ambient music.
            </li>
            <li className="mb-2">
              <strong>Stay Organized:</strong> Keep your study area tidy and have all necessary materials within reach.
            </li>
            <li className="mb-2">
              <strong>Take Breaks:</strong> Short, regular breaks can improve focus and prevent burnout.
            </li>
          </ul>
        </div>
      </Card>

      <Card className="mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-explainly-navy mb-4">
            Utilize Learning Tools
          </h2>
          <ul className="list-disc list-inside text-explainly-gray">
            <li className="mb-2">
              <strong>Flashcards:</strong> Use flashcards to memorize key terms and concepts.
            </li>
            <li className="mb-2">
              <strong>Mind Maps:</strong> Create visual diagrams to organize and connect ideas.
            </li>
            <li className="mb-2">
              <strong>Online Resources:</strong> Take advantage of online courses, videos, and interactive tools.
            </li>
            <li className="mb-2">
              <strong>Study Groups:</strong> Collaborate with peers to discuss and reinforce learning.
            </li>
          </ul>
        </div>
      </Card>

      <div className="flex justify-start mt-8">
        <Link to="/" className="text-explainly-navy hover:text-explainly-blue flex items-center">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default StudyTipsPage;
