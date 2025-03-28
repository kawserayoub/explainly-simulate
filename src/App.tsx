
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Index";
import DemoPage from "./pages/Demo";
import SummaryPreviewPage from "./pages/SummaryPreview";
import QuizPage from "./pages/Quiz";
import FlashcardsPage from "./pages/Flashcards";
import HighlightSummaryPage from "./pages/HighlightSummary";
import AIProcessingPage from "./pages/AIProcessing";
import StudyTipsPage from "./pages/StudyTips";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="demo" element={<DemoPage />} />
            <Route path="summary-preview" element={<SummaryPreviewPage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="flashcards" element={<FlashcardsPage />} />
            <Route path="highlight-summary" element={<HighlightSummaryPage />} />
            <Route path="ai-processing" element={<AIProcessingPage />} />
            <Route path="study-tips" element={<StudyTipsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
