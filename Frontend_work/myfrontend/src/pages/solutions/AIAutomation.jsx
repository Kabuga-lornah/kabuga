import React from 'react';
// Import the image from the public folder
import aiImage from '/ai image.png'; 
import { 
  CpuChipIcon, 
  BeakerIcon, 
  ShieldExclamationIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  EyeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const AIAutomation = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: DARK BLUE OPERATIONAL STYLE */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-cyan-600/30 rounded-full mb-8 bg-cyan-950/20">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400">System Status: Operational</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight mb-8 text-white">
            Applied artificial <br /> intelligence for real <br /> operational decisions.
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 font-medium max-w-3xl mb-10 leading-relaxed">
            Devixa integrates AI and automation into business systems where it creates measurable value — safely, transparently, and under human control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="bg-cyan-600 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-slate-950 transition-all duration-300 rounded-sm shadow-xl">
              Explore AI opportunities responsibly
            </button>
            <div className="flex flex-col border-l border-slate-800 pl-6">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-500">Guardrail Protocol</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">No black boxes. No inflated promises.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEFINITION: UPDATED WITH AI IMAGE */}
      <section className="py-24 px-6 lg:px-10 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-white uppercase">
              Artificial intelligence is a tool — <span className="text-cyan-500">not a strategy.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm font-medium">
              <p>AI does not replace business thinking; it supports it.</p>
              <p>Automation must be explainable, controllable, and grounded in reality.</p>
              <p>Human oversight is mandatory.</p>
              <div className="mt-8 bg-slate-900/50 p-6 border-l-2 border-cyan-500 backdrop-blur-sm">
                <p className="text-white font-medium italic leading-relaxed text-base">
                  "At Devixa, AI is introduced only when the problem is well understood, the data is reliable, and the risk is acceptable."
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex items-center justify-center">
             <div className="relative w-full max-w-md group">
                {/* Decorative background glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                {/* The AI Image Integration */}
                <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                   <img 
                    src={aiImage} 
                    alt="Artificial Intelligence" 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                   />
                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent">
                      <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500">Logic Over Hype</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEMS */}
      <section className="py-24 bg-white px-6 lg:px-10 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-2 text-slate-950">Organizations adopt AI for one reason: complexity has exceeded human scale.</h2>
          <p className="text-slate-500 mb-12 text-sm">AI is effective when it reduces cognitive load — not when it replaces accountability.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Information Overload", items: ["Too much data", "Too many documents", "Too many decisions"] },
              { title: "Repetitive Cognitive Work", items: ["Manual review", "Classification", "Pattern spotting"] },
              { title: "Delayed Decisions", items: ["Slow reporting", "Reactive responses", "Missed opportunities"] }
            ].map((problem, i) => (
              <div key={i} className="bg-slate-50 p-8 border border-slate-100">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-950 mb-6">{problem.title}</h4>
                <ul className="space-y-3">
                  {problem.items.map((item, j) => (
                    <li key={j} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-3">
                      <div className="w-1 h-1 bg-cyan-600"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-16 text-center">Responsible Deployment</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-4">
            <UserGroupIcon className="h-6 w-6 text-slate-950" />
            <h3 className="text-sm font-black uppercase tracking-widest">Intelligent Assistants</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Internal AI tools and knowledge retrieval systems. Assistants support humans — they do not act autonomously.</p>
          </div>
          <div className="space-y-4">
            <ArrowPathIcon className="h-6 w-6 text-slate-950" />
            <h3 className="text-sm font-black uppercase tracking-widest">Process Automation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Document processing and workflow routing. Automation reduces friction, not oversight.</p>
          </div>
          <div className="space-y-4">
            <EyeIcon className="h-6 w-6 text-slate-950" />
            <h3 className="text-sm font-black uppercase tracking-widest">Predictive Models</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Trend identification and risk forecasting. Predictions inform decisions — they do not make them.</p>
          </div>
        </div>

        <div className="bg-slate-50 p-10 border border-slate-100">
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-slate-400">Practical examples of responsible AI integration</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-bold text-slate-700 leading-snug">
            <p>Automating document classification for compliance-heavy teams</p>
            <p>Internal AI assistants trained on company knowledge bases</p>
            <p>Predictive analysis for operational planning (non-autonomous)</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COLLABORATION MODEL */}
      <section className="py-24 bg-white px-6 lg:px-10 border-y border-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-12 text-center uppercase">Human + Machine Collaboration Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-600">The Role of AI</h4>
              <ul className="space-y-4 text-xs text-slate-500">
                <li className="flex gap-3 items-start"><CheckCircleIcon className="h-4 w-4 text-cyan-600 flex-shrink-0" /> High-speed data processing and pattern identification</li>
                <li className="flex gap-3 items-start"><CheckCircleIcon className="h-4 w-4 text-cyan-600 flex-shrink-0" /> Drafting and initial classification</li>
                <li className="flex gap-3 items-start"><CheckCircleIcon className="h-4 w-4 text-cyan-600 flex-shrink-0" /> Surfacing anomalies and predictive trends</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Human Sovereignty</h4>
              <ul className="space-y-4 text-xs text-slate-500">
                <li className="flex gap-3 items-start"><div className="h-1.5 w-1.5 bg-slate-950 rounded-full mt-1.5 flex-shrink-0" /> Strategic decision-making and ethical review</li>
                <li className="flex gap-3 items-start"><div className="h-1.5 w-1.5 bg-slate-950 rounded-full mt-1.5 flex-shrink-0" /> Final approval and accountability for outcomes</li>
                <li className="flex gap-3 items-start"><div className="h-1.5 w-1.5 bg-slate-950 rounded-full mt-1.5 flex-shrink-0" /> Contextual nuance and "edge case" management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOUNDATIONS */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 uppercase">AI is only as reliable <br/> as its foundations.</h2>
              <p className="text-slate-400 text-sm max-w-md mb-8">Algorithms are secondary to data quality, model assumptions, and business context.</p>
              
              <div className="pt-8 border-t border-slate-800">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 block mb-4">Technologies we work with:</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-loose">
                  Machine learning models • NLP systems • Rule-based automation • Secure cloud infrastructure
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {["Data Integrity", "Model Selection", "Context Awareness"].map((pillar) => (
                <div key={pillar} className="border-l border-cyan-600 pl-6">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2">{pillar}</span>
                  <div className="h-px w-8 bg-slate-800"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — GOVERNANCE */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-slate-950 uppercase">Responsible AI is non-negotiable.</h2>
          <div className="space-y-6 text-slate-500 text-sm leading-relaxed mb-10">
            <p>Our guardrails include: Human-in-the-loop design, Data privacy considerations, Bias awareness, and Security controls.</p>
            <p className="text-slate-950 font-bold italic border-l-2 border-slate-950 pl-6">"We would rather decline an AI project than deploy one irresponsibly."</p>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <ShieldExclamationIcon className="h-4 w-4 text-cyan-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-950">Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <BeakerIcon className="h-4 w-4 text-cyan-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-950">Bias Audited</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE PATH */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-12">The Path to Integration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-950">
          {[
            { title: "Problem Definition", desc: "Clarify what decision or process needs support." },
            { title: "Data Assessment", desc: "Evaluate availability, quality, and risk." },
            { title: "Feasibility Review", desc: "Decide if AI is appropriate at all." },
            { title: "Pilot & Validation", desc: "Controlled testing before full-scale deployment." }
          ].map((step, i) => (
            <div key={i} className="space-y-4">
              <span className="text-[10px] font-black text-cyan-600 mb-4 block">STEP 0{i+1}</span>
              <h4 className="text-xs font-bold uppercase mb-2 tracking-wider">{step.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-12 border-t border-slate-50">
           Not every problem needs AI — and we will tell you when it doesn’t.
        </p>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center text-slate-950">
        <h2 className="text-3xl font-bold tracking-tight mb-8 uppercase">Introduce intelligence without introducing risk.</h2>
        <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all rounded-sm shadow-xl">
          Discuss an AI use case
        </button>
        <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] mt-6">
          Feasibility and Risk Assessment Required
        </p>
      </section>

    </div>
  );
};

export default AIAutomation;