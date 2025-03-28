
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { File, Upload, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import GradientButton from '@/components/ui/GradientButton';
import { useToast } from '@/hooks/use-toast';

const DemoPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const steps = [
    { icon: '🧹', text: 'Cleaning Transcript' },
    { icon: '🧠', text: 'Generating Summary' },
    { icon: '📄', text: 'Creating Learning Aids' }
  ];

  useEffect(() => {
    let interval: number | null = null;
    
    if (isProcessing) {
      // Start progress animation
      const startTime = Date.now();
      const totalDuration = 12000; // 12 seconds total
      const stepDuration = totalDuration / 3;
      
      interval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const percentage = Math.min((elapsed / totalDuration) * 100, 100);
        setProgressPercentage(percentage);
        
        // Update processing step
        if (elapsed < stepDuration) {
          setProcessingStep(0);
        } else if (elapsed < stepDuration * 2) {
          setProcessingStep(1);
        } else if (elapsed < totalDuration) {
          setProcessingStep(2);
        } else {
          clearInterval(interval);
          // Navigate to summary page after processing is complete
          setTimeout(() => {
            navigate('/summary-preview');
          }, 1000);
        }
      }, 50);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isProcessing, navigate]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setIsProcessing(true);
      toast({
        title: "Processing started",
        description: "We're analyzing your transcript...",
      });
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
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
                Drag and drop your file here, or click to browse
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

            <div className="flex justify-between items-center">
              <button
                className="text-explainly-blue underline text-sm"
                onClick={() => {
                  setFile(new File(["Sample transcript content"], "sample-transcript.txt"));
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
