
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { File, Upload, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/card';
import GradientButton from '@/components/ui/GradientButton';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Textarea } from '@/components/ui/textarea';

const DemoPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [transcript, setTranscript] = useState<string>('');
  const [transcriptId, setTranscriptId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const steps = [
    { icon: '🧹', text: 'Cleaning Transcript' },
    { icon: '🧠', text: 'Generating Summary' },
    { icon: '📄', text: 'Creating Learning Aids' }
  ];

  const { data: summary, refetch } = useQuery({
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
    enabled: !!transcriptId && isProcessing,
    refetchInterval: isProcessing ? 2000 : false
  });

  useEffect(() => {
    let interval: number | null = null;
    
    if (isProcessing) {
      const startTime = Date.now();
      const totalDuration = 12000;
      const stepDuration = totalDuration / 3;
      
      interval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const percentage = Math.min((elapsed / totalDuration) * 100, 100);
        setProgressPercentage(percentage);
        
        if (elapsed < stepDuration) {
          setProcessingStep(0);
        } else if (elapsed < stepDuration * 2) {
          setProcessingStep(1);
        } else if (elapsed < totalDuration) {
          setProcessingStep(2);
        } else {
          clearInterval(interval);
          
          refetch();
          
          if (summary || elapsed >= totalDuration) {
            setTimeout(() => {
              navigate('/summary-preview', { 
                state: { 
                  transcriptId: transcriptId,
                  summary: summary?.content
                } 
              });
            }, 1000);
          }
        }
      }, 50);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isProcessing, navigate, transcriptId, summary, refetch]);

  useEffect(() => {
    if (summary && isProcessing) {
      setIsProcessing(false);
      navigate('/summary-preview', { 
        state: { 
          transcriptId: transcriptId,
          summary: summary.content
        } 
      });
    }
  }, [summary, isProcessing, navigate, transcriptId]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      
      // Read file content if it's a text file
      if (selectedFile.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setTranscript(content);
        };
        reader.readAsText(selectedFile);
      }
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value);
  };

  const handleUpload = async () => {
    if (!transcript && !file) {
      toast({
        title: "No content to process",
        description: "Please enter text or select a file to upload",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      
      const { data, error } = await supabase
        .from('transcripts')
        .insert([
          { 
            content: transcript, 
            file_name: file?.name || 'manual-entry.txt',
            file_type: file?.type || 'text/plain',
            processed: false
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      if (data && data[0]) {
        setTranscriptId(data[0].id);
      }

      toast({
        title: "Processing started",
        description: "We're analyzing your transcript...",
      });
    } catch (error) {
      console.error('Error uploading transcript:', error);
      setIsProcessing(false);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your transcript. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-explainly-navy mb-4">
          Try the Demo
        </h1>
        <p className="text-explainly-gray text-lg max-w-2xl mx-auto">
          Upload a transcript to see Explainly in action. Don't worry, you can use our sample transcript for this demo.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto animate-fade-in">
        {!isProcessing ? (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <File size={48} className="text-explainly-blue" />
              </div>
              <h3 className="text-xl font-medium text-explainly-navy mb-2">Upload Your Transcript</h3>
              <p className="text-explainly-gray mb-6">
                Drag and drop your file here, click to browse, or paste your text below
              </p>
              <input
                type="file"
                id="transcript"
                onChange={handleFileChange}
                className="hidden"
                accept=".txt,.pdf,.docx,.doc"
              />
              <label htmlFor="transcript">
                <GradientButton type="button" className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" /> Select File
                </GradientButton>
              </label>
              {file && (
                <div className="mt-4 text-sm text-explainly-navy">
                  Selected: <span className="font-medium">{file.name}</span>
                </div>
              )}
            </div>

            {/* Text area for manual transcript entry */}
            <div className="space-y-2">
              <label htmlFor="manual-transcript" className="text-sm font-medium text-explainly-navy">
                Or paste your transcript text:
              </label>
              <Textarea
                id="manual-transcript"
                placeholder="Paste or type your transcript content here..."
                value={transcript}
                onChange={handleTextChange}
                className="min-h-[150px]"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                className="text-explainly-blue underline text-sm"
                onClick={() => {
                  const sampleText = "Welcome to our lecture on climate science. Today we'll be discussing the greenhouse effect, global temperature trends, and potential mitigation strategies. The greenhouse effect is a natural process that warms the Earth's surface. When the Sun's energy reaches the Earth's atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases. The absorbed energy warms the atmosphere and the surface of the Earth.";
                  setTranscript(sampleText);
                  // Create a File object properly without using 'new' keyword incorrectly
                  const blob = new Blob([sampleText], { type: "text/plain" });
                  const sampleFile = new File([blob], "sample-transcript.txt", { type: "text/plain" });
                  setFile(sampleFile);
                  toast({
                    title: "Sample transcript selected",
                    description: "You can now process the sample transcript",
                  });
                }}
              >
                Use sample transcript
              </button>
              <GradientButton onClick={handleUpload}>
                Process Transcript
              </GradientButton>
            </div>
          </div>
        ) : (
          <div className="space-y-8 py-6">
            <h3 className="text-xl font-medium text-explainly-navy text-center">
              Processing Your Transcript
            </h3>
            
            {/* Progress bar */}
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-gradient rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                    processingStep === index 
                      ? 'bg-explainly-lightGray' 
                      : processingStep > index 
                        ? 'text-explainly-gray' 
                        : 'text-explainly-gray opacity-50'
                  }`}
                >
                  <div className="mr-4 text-2xl">{step.icon}</div>
                  <div className="flex-1">{step.text}</div>
                  {processingStep > index && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-center text-explainly-gray text-sm">
              This process typically takes just a few seconds...
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DemoPage;
