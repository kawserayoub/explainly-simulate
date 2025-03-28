
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Copy, CheckCheck } from 'lucide-react';
import Card from '@/components/ui/card';
import GradientButton from '@/components/ui/GradientButton';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

// Static sample summary content as a fallback
const sampleSummary = `
# Climate Science Overview

## The Greenhouse Effect
- Natural process that warms Earth's surface
- Sun's energy is absorbed and re-radiated by greenhouse gases
- These gases include water vapor, carbon dioxide, methane, and others
- Without the greenhouse effect, Earth would be too cold for life

## Global Temperature Trends
- Earth's average temperature has increased by about 1°C since pre-industrial times
- Rate of warming has accelerated in recent decades
- 19 of the 20 warmest years on record have occurred since 2001
- Arctic warming at twice the global average rate

## Mitigation Strategies
- Reducing fossil fuel emissions through renewable energy transition
- Improving energy efficiency in buildings, transportation, and industry
- Developing carbon capture and storage technologies
- Protecting and restoring carbon sinks like forests and wetlands
- International cooperation through agreements like the Paris Climate Accord

Understanding these fundamentals is crucial for developing effective policies and technologies to address climate change challenges.
`;

const SummaryPreviewPage = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Get transcriptId from location state
  const transcriptId = location.state?.transcriptId;
  const summaryFromState = location.state?.summary;

  // Query to fetch the summary if not provided in state
  const { data: summaryData, isLoading, error } = useQuery({
    queryKey: ['summary', transcriptId],
    queryFn: async () => {
      if (!transcriptId) return null;
      
      const { data, error } = await supabase
        .from('summaries')
        .select('*')
        .eq('transcript_id', transcriptId)
        .single();
      
      if (error) {
        console.error('Error fetching summary:', error);
        return null;
      }
      
      return data;
    },
    enabled: !!transcriptId && !summaryFromState,
    // Don't refetch if we already have the summary from state
    staleTime: Infinity
  });

  // Determine the summary content to display
  const summaryContent = summaryFromState || summaryData?.content || sampleSummary;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryContent);
    setCopied(true);
    toast({
      title: "Summary copied!",
      description: "The summary has been copied to your clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Summary Preview
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Here's an AI-generated summary of your content. Use our learning tools to understand it better.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto mb-8 p-6 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-explainly-navy">Summary</h2>
          <button 
            onClick={handleCopy}
            className="text-explainly-gray hover:text-explainly-blue transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <CheckCheck className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
        
        {isLoading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-md">
            Error loading summary. Please try again.
          </div>
        ) : (
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-explainly-gray">
              {summaryContent}
            </div>
          </div>
        )}
      </Card>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/quiz">
          <GradientButton>
            Generate Quiz
          </GradientButton>
        </Link>
        <Link to="/flashcards">
          <GradientButton variant="secondary">
            Create Flashcards
          </GradientButton>
        </Link>
        <Link to="/highlight-summary">
          <GradientButton variant="secondary">
            Highlight Key Concepts
          </GradientButton>
        </Link>
      </div>
    </div>
  );
};

export default SummaryPreviewPage;
