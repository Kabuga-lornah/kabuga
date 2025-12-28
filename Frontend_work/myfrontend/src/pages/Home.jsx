import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [diagnosticStep, setDiagnosticStep] = useState(0);

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-cyan-100">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      
      {/* 1. HERO: EXPLICIT SERVICE POSITIONING */}
      <section className="relative min-h-[85vh] flex items-center px-8 border-b border-slate-50 overflow-hidden">
        {/* Restrained background animation to maintain enterprise feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 animate-[fadeIn_1s_ease-out]">
            <div className="inline-block px-3 py-1 border border-cyan-600/20 rounded-full mb-8 bg-cyan-50/50">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-700">Engineering & AI Advisory</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase text-slate-950 mb-8">
              Software Engineering <br />
              & AI Systems <br />
              <span className="text-cyan-600">Built Right.</span>
            </h1>
            
            <p className="max-w-2xl text-lg lg:text-xl text-slate-600 leading-relaxed mb-12 font-medium">
              Devixa designs, audits, and builds scalable software systems and AI-powered solutions 
              for startups, SMEs, and professional firms—reducing risk, rework, and technical debt.
            </p>
            
            {/* DUAL CTA: Mapping directly to service pages */}
            <div className="flex flex-wrap gap-6">
              <Link to="/solutions/software" className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all duration-300 rounded-sm shadow-xl shadow-slate-200 hover:shadow-cyan-600/20">
                Software Engineering
              </Link>
              <Link to="/solutions/ai" className="border border-slate-300 text-slate-950 px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all duration-300 rounded-sm">
                AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: REFRAMED AROUND SERVICES */}
      <section className="py-24 px-8 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Production-Ready Engineering",
                desc: "Well-architected backend, frontend, and cloud systems built for scale and maintainability."
              },
              {
                title: "AI With Business Logic",
                desc: "AI models and automation designed around real workflows—not experiments."
              },
              {
                title: "Clear System Architecture",
                desc: "Documented decisions on stacks, data models, and integrations before development begins."
              },
              {
                title: "Reduced Technical Debt",
                desc: "Engineering choices that lower long-term maintenance and operational costs."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-1 w-10 bg-cyan-600 mb-8 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-950">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE BUILD & DEPLOY: ALIGNED LIFECYCLE */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-slate-950">
                How we build <br /> & deploy.
              </h3>
              <p className="text-slate-500 text-lg mb-12 font-medium">
                Our methodology ensures that intelligence is introduced without introducing risk. 
                We move from business logic to technical validation with absolute clarity.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              {[
                { title: "Discovery & System Analysis", desc: "Understanding business rules, constraints, and operational bottlenecks." },
                { title: "Architecture & AI Design", desc: "Defining the technical structure and decision-support logic." },
                { title: "Engineering Validation", desc: "Rigorous testing and peer reviews against institutional standards." },
                { title: "Build & Deployment Support", desc: "Executing with documentation, scalability, and security by default." }
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 p-8 flex justify-between items-center group cursor-default hover:border-cyan-600 transition-colors duration-300"
                >
                  <div className="flex gap-8 items-center">
                    <span className="text-4xl font-black text-slate-100 group-hover:text-cyan-600 transition-colors duration-500">0{idx + 1}</span>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-950 mb-1">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF: TIE DIRECTLY TO AI & ENGINEERING */}
      <section className="py-32 px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border-l-2 border-slate-950 pl-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-4">Example Case: Core System Engineering</p>
              <p className="text-xl font-bold text-slate-900 italic leading-relaxed">
                “Designed and deployed a scalable backend infrastructure for a logistics firm, 
                eliminating 80% of manual scheduling errors through precise architecture.”
              </p>
            </div>
            <div className="border-l-2 border-slate-950 pl-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-4">Example Case: AI Workflow Automation</p>
              <p className="text-xl font-bold text-slate-900 italic leading-relaxed">
                “Implemented document classification and automated decision rules, 
                reducing manual processing time by 45% while maintaining human oversight.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTORS: WHERE OUR SOFTWARE IS APPLIED */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-center mb-24">
            Where our software <br /> is applied.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { label: "SMEs & Growth Teams", tech: "Software + AI" },
              { label: "FinTech & Secure Ops", tech: "Engineering + Security" },
              { label: "Professional Services", tech: "Automation + Insights" }
            ].map((sector, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">{sector.label}</h4>
                <div className="h-px w-8 bg-cyan-600 mx-auto"></div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sector.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA: ALIGNED WITH SERVICE BOOKING */}
      <section className="py-40 px-8 relative overflow-hidden bg-slate-950 text-white text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
            Build With <br /> <span className="text-cyan-600">Decision</span> Confidence.
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto italic font-medium">
            "Eliminate technical debt before it exists. Devixa's engineering and AI consultation 
            is now open for businesses seeking clarity."
          </p>
          <button className="bg-cyan-600 hover:bg-white hover:text-slate-950 px-16 py-7 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 rounded-sm shadow-2xl shadow-cyan-600/20 active:scale-95">
            Book a Software & AI Consultation
          </button>
          <div className="mt-12">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Institutional-Grade Engineering</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;