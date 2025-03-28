
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, BookOpen, FileQuestion, BookMarked } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';
import { useToast } from '@/hooks/use-toast';

const SummaryPreviewPage = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const { toast } = useToast();

  const summaryContent = {
    title: "The Evolution of Artificial Intelligence",
    summary: "Artificial Intelligence has evolved significantly since its inception in the 1950s. This lecture covered the major developments, from early symbolic AI to modern deep learning approaches. Key milestones include the development of expert systems in the 1970s, the AI winter in the 1980s, and the renaissance of neural networks in the 2010s with advances in computing power and data availability.",
    keyPoints: [
      "AI development began with symbolic reasoning and rule-based expert systems",
      "Machine learning approaches gained prominence in the 1990s with statistical methods",
      "Deep learning breakthrough came with AlexNet in 2012, demonstrating superior image recognition",
      "Current AI research focuses on multimodal models, transformer architectures, and reinforcement learning",
      "Ethical considerations include bias, transparency, and societal impact of AI systems"
    ],
    importantConcepts: [
      { term: "Neural Networks", definition: "Computing systems inspired by biological neural networks that learn from examples" },
      { term: "Deep Learning", definition: "A subset of machine learning with neural networks containing multiple hidden layers" },
      { term: "Transformer Architecture", definition: "A type of neural network architecture that uses self-attention mechanisms" },
      { term: "Reinforcement Learning", definition: "Learning approach where agents take actions to maximize cumulative reward" }
    ]
  };

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    
    toast({
      title: "Copied to clipboard",
      description: `${section} has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Summary
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Here's an AI-generated summary of your transcript.
        </p>
      </div>

      <Card className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-explainly-navy">{summaryContent.title}</h2>
          <button 
            onClick={() => handleCopy(summaryContent.summary, "Summary")}
            className="text-explainly-gray hover:text-explainly-blue transition-colors"
          >
            <Copy size={20} />
          </button>
        </div>
        
        <p className="text-explainly-gray mb-8 leading-relaxed">
          {summaryContent.summary}
        </p>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-explainly-navy">Key Points</h3>
            <button 
              onClick={() => handleCopy(summaryContent.keyPoints.join('\n• '), "Key Points")}
              className="text-explainly-gray hover:text-explainly-blue transition-colors"
            >
              <Copy size={18} />
            </button>
          </div>
          <ul className="space-y-2">
            {summaryContent.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-explainly-blue mr-2">•</span>
                <span className="text-explainly-gray">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-explainly-navy">Important Concepts</h3>
            <button 
              onClick={() => handleCopy(
                summaryContent.importantConcepts.map(c => `${c.term}: ${c.definition}`).join('\n'),
                "Important Concepts"
              )}
              className="text-explainly-gray hover:text-explainly-blue transition-colors"
            >
              <Copy size={18} />
            </button>
          </div>
          <div className="space-y-4">
            {summaryContent.importantConcepts.map((concept, index) => (
              <div key={index} className="bg-explainly-lightGray p-4 rounded-lg">
                <h4 className="font-semibold text-explainly-navy mb-1">{concept.term}</h4>
                <p className="text-explainly-gray text-sm">{concept.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        <Link to="/quiz" className="col-span-1">
          <Card className="flex flex-col items-center p-6 text-center h-full">
            <FileQuestion size={36} className="text-explainly-blue mb-4" />
            <h3 className="text-lg font-semibold text-explainly-navy mb-2">Generate Quiz</h3>
            <p className="text-explainly-gray text-sm mb-4">Test your knowledge with an AI-generated quiz.</p>
            <GradientButton className="mt-auto">Start Quiz</GradientButton>
          </Card>
        </Link>
        
        <Link to="/flashcards" className="col-span-1">
          <Card className="flex flex-col items-center p-6 text-center h-full">
            <BookMarked size={36} className="text-explainly-blue mb-4" />
            <h3 className="text-lg font-semibold text-explainly-navy mb-2">Create Flashcards</h3>
            <p className="text-explainly-gray text-sm mb-4">Study with interactive AI-generated flashcards.</p>
            <GradientButton className="mt-auto">View Flashcards</GradientButton>
          </Card>
        </Link>
        
        <Link to="/highlight-summary" className="col-span-1">
          <Card className="flex flex-col items-center p-6 text-center h-full">
            <BookOpen size={36} className="text-explainly-blue mb-4" />
            <h3 className="text-lg font-semibold text-explainly-navy mb-2">Highlight Summary</h3>
            <p className="text-explainly-gray text-sm mb-4">View your summary with key concepts highlighted.</p>
            <GradientButton className="mt-auto">View Highlights</GradientButton>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default SummaryPreviewPage;
