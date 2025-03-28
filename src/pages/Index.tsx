
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import Card from '@/components/ui/Card';
import { CheckCircle, BrainCircuit, Clock, Book, Lightbulb, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-explainly-navy leading-tight">
              Understand more.<br /> Faster.<br />
              <span className="explainly-gradient-text">Powered by AI</span>
            </h1>
            
            <p className="text-explainly-gray text-lg md:text-xl">
              Transform raw transcripts into interactive learning tools. Generate summaries, quizzes, and flashcards with a single click.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/demo">
                <GradientButton>Try the Demo</GradientButton>
              </Link>
              <a href="#how-it-works">
                <GradientButton variant="secondary">See How It Works</GradientButton>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Learning Process" 
              className="rounded-2xl shadow-xl mx-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <span className="explainly-gradient-text">AI-powered learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-explainly-lightGray px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">How It Works</h2>
            <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
              Explainly uses advanced AI to transform any transcript into personalized learning materials in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Upload Transcript</h3>
              <p className="text-explainly-gray">
                Upload any lecture transcript, meeting notes, or educational content.
              </p>
            </Card>
            
            <Card className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-explainly-navy mb-3">AI Processing</h3>
              <p className="text-explainly-gray">
                Our AI analyzes the content, identifies key concepts, and organizes information.
              </p>
            </Card>
            
            <Card className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Learn Better</h3>
              <p className="text-explainly-gray">
                Access summaries, quizzes, flashcards, and more – all tailored to your content.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">Powerful Features</h2>
            <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
              Everything you need to turn complex content into easy-to-digest learning materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <BrainCircuit className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">AI-Powered Summaries</h3>
              <p className="text-explainly-gray">
                Get concise summaries that capture the most important points from your transcripts.
              </p>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Book className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Interactive Flashcards</h3>
              <p className="text-explainly-gray">
                Study with automatically generated flashcards that focus on key concepts.
              </p>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CheckCircle className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Smart Quizzes</h3>
              <p className="text-explainly-gray">
                Test your knowledge with quizzes personalized to the content you're learning.
              </p>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Clock className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Time-Saving</h3>
              <p className="text-explainly-gray">
                Process hours of content in seconds, letting you focus on learning, not organizing.
              </p>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Lightbulb className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Study Tips</h3>
              <p className="text-explainly-gray">
                Receive personalized learning strategies based on your content.
              </p>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Star className="text-explainly-blue w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-explainly-navy mb-3">Highlighting</h3>
              <p className="text-explainly-gray">
                Automatically highlight key concepts and important details in your summaries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-gradient px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your learning experience?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Try Explainly now and see how our AI can help you learn more efficiently.
          </p>
          <Link to="/demo">
            <button className="bg-white text-explainly-blue font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
              Try the Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
