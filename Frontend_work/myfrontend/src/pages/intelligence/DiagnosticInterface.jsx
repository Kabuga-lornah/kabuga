import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * DEVIZA SYSTEM INTELLIGENCE DIAGNOSTIC
 * One-question-per-screen flow with internal scoring vectors.
 */
const questions = [
  {
    id: "system_stage",
    section: "SYSTEM STAGE",
    text: "How would you describe your current system?",
    options: [
      { label: "We don’t have a real system yet (idea / early MVP)", scores: { arch: 10, data: 10 } },
      { label: "We have a system, but it breaks often", scores: { arch: 40, data: 30 } },
      { label: "The system works, but changes are slow and risky", scores: { arch: 60, data: 50 } },
      { label: "The system scales, but costs and complexity are rising", scores: { arch: 80, data: 70 } },
      { label: "We operate at enterprise scale and are optimizing", scores: { arch: 100, data: 90 } }
    ]
  },
  {
    id: "friction",
    section: "PRIMARY FRICTION",
    text: "What causes the most friction today?",
    options: [
      { label: "Bugs after releases", scores: { arch: -20 } },
      { label: "Slow development cycles", scores: { arch: -10, auto: 20 } },
      { label: "Manual internal processes", scores: { auto: 40 } },
      { label: "Poor visibility into data", scores: { data: -30, ai: -20 } },
      { label: "Security or compliance concerns", scores: { arch: -10 } },
      { label: "Scaling issues under load", scores: { arch: -20 } }
    ]
  },
  {
    id: "data_handling",
    section: "DATA REALITY",
    text: "How is your data currently handled?",
    options: [
      { label: "Mostly spreadsheets or manual reports", scores: { data: 10, ai: 0 } },
      { label: "Stored in an application database only", scores: { data: 40, ai: 20 } },
      { label: "Centralized in a warehouse or lake", scores: { data: 80, ai: 60 } },
      { label: "Real-time or event-driven pipelines", scores: { data: 100, ai: 90 } },
      { label: "I’m not sure", scores: { data: 0, ai: 0 } }
    ]
  },
  {
    id: "automation",
    section: "AUTOMATION PRESSURE",
    text: "Which activities consume the most unnecessary time?",
    options: [
      { label: "Customer support or inquiries", scores: { auto: 30 } },
      { label: "Internal approvals or operations", scores: { auto: 40 } },
      { label: "Reporting and analysis", scores: { auto: 30, data: -10 } },
      { label: "Data entry or reconciliation", scores: { auto: 50 } },
      { label: "Engineering deployment or testing", scores: { arch: -10, auto: 20 } }
    ]
  },
  {
    id: "ai_exposure",
    section: "AI EXPOSURE",
    text: "What best describes your current use of AI?",
    options: [
      { label: "No AI usage", scores: { ai: 0 } },
      { label: "Basic tools (chatbots, AI writing, etc.)", scores: { ai: 20 } },
      { label: "Internal AI tools or experiments", scores: { ai: 40 } },
      { label: "ML models in production", scores: { ai: 80 } },
      { label: "AI is central to our operations", scores: { ai: 100 } }
    ]
  },
  {
    id: "governance",
    section: "DECISION CONFIDENCE",
    text: "How confident are you in your technical decisions today?",
    options: [
      { label: "We often guess and react", scores: { arch: -20 } },
      { label: "Decisions are made under pressure", scores: { arch: -10 } },
      { label: "We rely heavily on specific individuals", scores: { arch: 10 } },
      { label: "Decisions are structured and documented", scores: { arch: 30 } },
      { label: "We have clear technical governance", scores: { arch: 50 } }
    ]
  },
  {
    id: "priority",
    section: "PRIORITY HORIZON",
    text: "What matters most in the next 6–12 months?",
    options: [
      { label: "Getting to market fast", scores: { arch: -10 } },
      { label: "Stabilizing what we’ve built", scores: { arch: 20 } },
      { label: "Reducing costs or inefficiencies", scores: { auto: 20 } },
      { label: "Scaling reliably", scores: { arch: 20, data: 10 } },
      { label: "Using AI strategically", scores: { ai: 30 } }
    ]
  }
];

const DiagnosticInterface = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [rawAnswers, setRawAnswers] = useState([]);
  const navigate = useNavigate();

  const calculateFinalScores = (responses) => {
    let totals = { arch: 50, data: 40, auto: 30, ai: 20 };
    
    responses.forEach(ans => {
      Object.keys(ans.scores).forEach(key => {
        totals[key] += ans.scores[key];
      });
    });

    // Normalize (0-100)
    const normalized = {
      arch: Math.min(100, Math.max(0, totals.arch)),
      data: Math.min(100, Math.max(0, totals.data)),
      auto: Math.min(100, Math.max(0, totals.auto)),
      ai: Math.min(100, Math.max(0, totals.ai))
    };

    // AI Readiness Cap Logic
    if (normalized.data < 40 || normalized.arch < 40) {
      normalized.ai = Math.min(normalized.ai, 35);
    }

    return normalized;
  };

  const handleSelect = (option) => {
    const updatedAnswers = [...rawAnswers, option];
    setRawAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalScores = calculateFinalScores(updatedAnswers);
      navigate("/intelligence/results", { state: { scores: finalScores, answers: updatedAnswers } });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-2xl w-full">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <span className="text-[10px] font-black text-cyan-600 tracking-[0.3em] uppercase">
              Question {currentStep + 1} of {questions.length} — {questions[currentStep].section}
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              {Math.round(((currentStep + 1) / questions.length) * 100)}% COMPLETE
            </span>
          </div>
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 leading-tight tracking-tight">
              {questions[currentStep].text}
            </h2>

            <div className="grid gap-3">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left p-6 bg-white border border-slate-200 hover:border-cyan-600 hover:bg-cyan-50/20 transition-all rounded-sm group relative overflow-hidden"
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <span className="font-mono text-xs text-slate-300 group-hover:text-cyan-600 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-slate-950 transition-colors">
                      {option.label}
                    </span>
                  </div>
                  <div className="absolute left-0 top-0 h-full w-1 bg-cyan-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Branding Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            Devixa Architecture Signal Analysis
          </span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1 w-1 bg-slate-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticInterface;