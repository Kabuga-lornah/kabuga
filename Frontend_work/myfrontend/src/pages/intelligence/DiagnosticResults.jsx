import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ShieldAlert, Zap, BarChart3, Cpu, ArrowRight, Download } from "lucide-react";

/**
 * DEVIXA INTELLIGENCE SUITE — RESULTS ENGINE
 * This component renders the final architecture signal analysis.
 */
const DiagnosticResults = () => {
  const { state } = useLocation();
  const scores = state?.scores || { arch: 50, data: 50, auto: 50, ai: 30 };

  // Dynamic Content Logic based on heuristic thresholds
  const getStatus = () => {
    if (scores.arch < 40) return { title: "Fragile Architecture", subtitle: "Immediate structural intervention required to prevent silent failure." };
    if (scores.arch < 70) return { title: "Transitional Architecture", subtitle: "Operational stability is maintained, but underlying debt is restricting speed." };
    return { title: "Optimized Foundation", subtitle: "Strong architectural governance is in place. Focus can shift to advanced automation." };
  };

  const status = getStatus();

  return (
    <div className="min-h-screen bg-white py-24 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header — Institutional Authority */}
        <header className="mb-24 text-center">
          <span className="text-[10px] font-black text-cyan-600 tracking-[0.4em] uppercase mb-4 block">
            Analysis Complete
          </span>
          <h1 className="text-4xl font-black text-slate-950 uppercase tracking-tight">
            Your System Intelligence Snapshot
          </h1>
          <p className="text-slate-500 mt-4 font-medium italic max-w-xl mx-auto">
            “Intelligence is the ability to perceive risk before it becomes an emergency.”
          </p>
        </header>

        {/* System Posture — High-Level Diagnostic */}
        <section className="mb-20 text-center border-b border-slate-50 pb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
            System Posture
          </h2>
          <p className="text-2xl font-bold text-slate-900">
            {status.title}
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-3 leading-relaxed font-medium">
            {status.subtitle}
          </p>
        </section>

        {/* Intelligence Domains — Scoring Vectors */}
        <section className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-cyan-200 transition-colors">
            <ShieldAlert className="text-cyan-600 mb-6" size={32} />
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-slate-950">
              Architectural Risk: {scores.arch}%
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {scores.arch < 50 
                ? "Structural decisions and accumulated technical debt are limiting development velocity and increasing operational risk."
                : "Your architecture is modular and stable, supporting reliable scaling and efficient feature deployment."}
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-cyan-200 transition-colors">
            <BarChart3 className="text-cyan-600 mb-6" size={32} />
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-slate-950">
              Data Maturity: {scores.data}%
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {scores.data < 50
                ? "Data exists, but lacks the structure and accessibility required for advanced analytics or reliable machine learning."
                : "High data integrity. Your environment is prepared for real-time reporting and intelligent automation."}
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-cyan-200 transition-colors">
            <Zap className="text-cyan-600 mb-6" size={32} />
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-slate-950">
              Automation Potential: {scores.auto}%
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Multiple operational workflows show strong candidates for automation, 
              offering immediate efficiency gains.
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-cyan-200 transition-colors">
            <Cpu className="text-cyan-600 mb-6" size={32} />
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-slate-950">
              AI Readiness: {scores.ai}%
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {scores.ai < 40
                ? "AI would deliver limited ROI today. Foundational improvements would significantly increase impact and reliability."
                : "Signals for applied ML are strong. Focus on specific use-cases where decision logic can be augmented."}
            </p>
          </div>
        </section>

        {/* AI Guidance — Strategic Differentiator */}
        <section className="border-t border-slate-100 pt-20 mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
            Where AI Actually Makes Sense
          </h2>
          <div className="bg-slate-950 text-white p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Cpu size={120} />
            </div>
            <p className="text-xl font-medium italic mb-6 relative z-10">
              “AI is not your first move — and that’s a good thing.”
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl relative z-10 font-medium">
              Strengthening your data architecture and system foundations will unlock 
              substantially more AI value later. Premature implementation would increase 
              complexity without delivering durable results.
            </p>
          </div>
        </section>

        {/* Recommended Path & Next Steps */}
        <section className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
                    Recommended Focus
                </h2>
                <ol className="space-y-6 text-sm text-slate-800 font-bold uppercase tracking-tight">
                    <li className="flex items-center gap-4">
                        <span className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">01</span>
                        Stabilize and clarify system architecture
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">02</span>
                        Centralize and structure operational data
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">03</span>
                        Introduce targeted automation before ML
                    </li>
                </ol>
            </div>
            
            <div className="flex flex-col gap-4 justify-center">
                <Link to="/contact">
                    <button className="w-full bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-cyan-600 transition-all rounded-sm flex items-center justify-center gap-3">
                        Request a Detailed Review <ArrowRight size={14}/>
                    </button>
                </Link>
                <button className="w-full bg-white border border-slate-200 text-slate-600 px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-50 transition-all rounded-sm flex items-center justify-center gap-3">
                    Download Summary PDF <Download size={14}/>
                </button>
            </div>
        </section>

        {/* Institutional Footer */}
        <footer className="pt-10 border-t border-slate-100 text-center">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            Generated by Devixa’s Intelligence Suite — Engineering Heuristics & Applied AI Logic.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default DiagnosticResults;