
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, GitCompare, Users, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import GradientButton from '@/components/ui/GradientButton';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former ML researcher with a passion for education technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Head of AI",
      bio: "PhD in NLP with experience at leading AI research labs",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Miguel Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack engineer with expertise in building scalable applications",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Patel",
      role: "Education Specialist",
      bio: "Former teacher with 10+ years of experience in learning design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
            About Explainly
          </h1>
          <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
            Our mission is to transform how people learn from educational content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-explainly-navy mb-4">
              Our Story
            </h2>
            <p className="text-explainly-gray mb-4">
              Explainly was born from a simple observation: there's an abundance of educational content available today, but turning that content into lasting knowledge remains challenging.
            </p>
            <p className="text-explainly-gray mb-4">
              Our team of educators, AI researchers, and learning specialists came together to create a tool that leverages artificial intelligence to transform passive content consumption into active learning.
            </p>
            <p className="text-explainly-gray">
              We believe that everyone deserves access to tools that make learning more efficient and effective, regardless of their learning style or educational background.
            </p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Team collaborating" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Target Users Section */}
      <section className="max-w-4xl mx-auto mb-16 py-12 bg-explainly-lightGray rounded-2xl px-6 animate-fade-in">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mr-4">
            <Target className="text-white h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-explainly-navy">Who We Serve</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold text-explainly-navy mb-3">Students</h3>
            <p className="text-explainly-gray">
              From high school to university, we help students process lecture recordings, readings, and class notes more effectively, turning hours of content into focused study materials.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-explainly-navy mb-3">Professionals</h3>
            <p className="text-explainly-gray">
              Stay on top of industry developments by quickly digesting webinars, conference talks, and training materials. Transform lengthy professional development content into actionable insights.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-explainly-navy mb-3">Educators</h3>
            <p className="text-explainly-gray">
              Create supplementary learning materials for your students with ease. Generate quizzes, summaries, and study aids from your lecture content or assigned readings.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-explainly-navy mb-3">Lifelong Learners</h3>
            <p className="text-explainly-gray">
              Make the most of online courses, podcasts, and educational videos by extracting and reinforcing key concepts with our learning tools.
            </p>
          </Card>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <div className="flex items-center justify-center mb-12">
          <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mr-4">
            <GitCompare className="text-white h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-explainly-navy">How We're Different</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-explainly-lightGray">
                <th className="p-4 text-left text-explainly-navy border-b border-gray-200">Feature</th>
                <th className="p-4 text-center text-explainly-navy border-b border-gray-200">Explainly</th>
                <th className="p-4 text-center text-explainly-navy border-b border-gray-200">Traditional Note-Taking</th>
                <th className="p-4 text-center text-explainly-navy border-b border-gray-200">Basic AI Summarizers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-gray-200 text-explainly-navy font-medium">Content Understanding</td>
                <td className="p-4 border-b border-gray-200 text-center">Deep concept extraction</td>
                <td className="p-4 border-b border-gray-200 text-center">Manual and subjective</td>
                <td className="p-4 border-b border-gray-200 text-center">Surface-level summarization</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 text-explainly-navy font-medium">Learning Tools</td>
                <td className="p-4 border-b border-gray-200 text-center">Summaries, quizzes, flashcards, highlights</td>
                <td className="p-4 border-b border-gray-200 text-center">Manual creation required</td>
                <td className="p-4 border-b border-gray-200 text-center">Basic summaries only</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 text-explainly-navy font-medium">Time Efficiency</td>
                <td className="p-4 border-b border-gray-200 text-center">Seconds to process content</td>
                <td className="p-4 border-b border-gray-200 text-center">Hours of manual work</td>
                <td className="p-4 border-b border-gray-200 text-center">Minutes, but limited output</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 text-explainly-navy font-medium">Personalization</td>
                <td className="p-4 border-b border-gray-200 text-center">Adaptive to learning style</td>
                <td className="p-4 border-b border-gray-200 text-center">Inherently personal</td>
                <td className="p-4 border-b border-gray-200 text-center">One-size-fits-all</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <div className="flex items-center justify-center mb-12">
          <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mr-4">
            <Users className="text-white h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-explainly-navy">Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative mx-auto">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-gradient rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-explainly-navy">{member.name}</h3>
              <p className="text-explainly-blue text-sm mb-2">{member.role}</p>
              <p className="text-explainly-gray text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pricing Section (Bonus) */}
      <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <div className="flex items-center justify-center mb-12">
          <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mr-4">
            <ShieldCheck className="text-white h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-explainly-navy">Pricing</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-explainly-navy mb-2">Free</h3>
              <p className="text-4xl font-bold text-explainly-navy mb-4">$0<span className="text-explainly-gray text-sm font-normal">/month</span></p>
              <p className="text-explainly-gray">Perfect for occasional use</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">5 transcripts per month</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Basic summaries</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Simple quizzes</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-explainly-gray">Advanced learning tools</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-explainly-gray">Personalized study tips</span>
              </li>
            </ul>
            
            <Link to="/demo" className="block text-center">
              <GradientButton variant="secondary" className="w-full">
                Start Free
              </GradientButton>
            </Link>
          </Card>
          
          <Card className="border-2 border-explainly-teal relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-explainly-navy mb-2">Premium</h3>
              <p className="text-4xl font-bold text-explainly-navy mb-4">$9.99<span className="text-explainly-gray text-sm font-normal">/month</span></p>
              <p className="text-explainly-gray">For serious learners</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Unlimited transcripts</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Advanced summaries with highlights</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Comprehensive quizzes & flashcards</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">All learning tools</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-explainly-gray">Personalized study recommendations</span>
              </li>
            </ul>
            
            <Link to="/demo" className="block text-center">
              <GradientButton className="w-full">
                Try Premium
              </GradientButton>
            </Link>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto animate-fade-in">
        <Card className="bg-primary-gradient text-white text-center py-12 px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to transform how you learn?</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students and professionals who are saving time and learning more effectively with Explainly.
          </p>
          <Link to="/demo">
            <button className="bg-white text-explainly-blue font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
              Try the Demo
            </button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;
