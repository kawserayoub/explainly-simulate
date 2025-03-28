
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-explainly-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              explain<span className="text-explainly-teal">ly</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Transform transcripts into interactive learning materials powered by AI.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/summary-preview" className="text-gray-300 hover:text-white transition-colors">Summary</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-white transition-colors">Quizzes</Link></li>
              <li><Link to="/flashcards" className="text-gray-300 hover:text-white transition-colors">Flashcards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Coming Soon</h3>
            <ul className="space-y-2">
              <li><Link to="/highlight-summary" className="text-gray-300 hover:text-white transition-colors">Highlighting</Link></li>
              <li><Link to="/ai-processing" className="text-gray-300 hover:text-white transition-colors">AI Processing</Link></li>
              <li><Link to="/study-tips" className="text-gray-300 hover:text-white transition-colors">Study Tips</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Explainly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
