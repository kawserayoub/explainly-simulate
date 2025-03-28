
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';

const HighlightSummaryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Highlighting
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Automatically highlight key concepts and important information.
        </p>
      </div>

      <Card className="text-center py-12 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center">
            <Sparkles size={32} className="text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-explainly-navy mb-4">
          ✨ Summary Highlighting is under development.
        </h2>
        
        <p className="text-explainly-gray max-w-lg mx-auto mb-8">
          We're working on an advanced highlighting feature that will automatically identify and highlight key concepts, definitions, and important information in your summaries.
        </p>
        
        <div className="max-w-md mx-auto mb-8 bg-explainly-lightGray p-6 rounded-lg">
          <p className="text-explainly-navy text-left leading-relaxed">
            Artificial Intelligence has evolved significantly since its inception in the <span className="bg-yellow-200">1950s</span>. This lecture covered the major developments, from early <span className="bg-green-200">symbolic AI</span> to modern <span className="bg-blue-200">deep learning</span> approaches. Key milestones include the development of <span className="bg-pink-200">expert systems</span> in the 1970s...
          </p>
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

export default HighlightSummaryPage;
