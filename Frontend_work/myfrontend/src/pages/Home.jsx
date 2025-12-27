import React, { useState } from "react";

const Home = () => {
  const [diagnosticStep, setDiagnosticStep] = useState(0);

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
      
      {/* 1. HERO: BENEFIT-DRIVEN HEADLINE */}
      <section className="relative min-h-[85vh] flex items-center px-8 border-b border-slate-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8 py-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 mb-10 animate-[fadeIn_0.8s_ease-out] hover:border-cyan-600 hover:shadow-lg transition-all duration-300">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                Engineering Confidence for High-Impact Software
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-10 uppercase animate-[fadeIn_1s_ease-out]">
              Build Software <br /> 
              <span className="text-cyan-600 inline-block hover:scale-105 transition-transform duration-300">With Fewer</span> <br /> 
              Mistakes.
            </h1>
            <p className="max-w-xl text-xl text-slate-500 leading-relaxed mb-12 font-medium italic animate-[fadeIn_1.2s_ease-out]">
              Devixa helps teams make the right engineering decisions—before code is written. 
              We use AI-assisted analysis and engineer-reviewed outcomes to ensure project success.
            </p>
            <div className="flex flex-wrap gap-6 animate-[fadeIn_1.4s_ease-out]">
              <a href="#diagnostic" className="bg-slate-950 text-white px-10 py-6 text-xs font-black uppercase tracking-widest hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-600/20 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-200">
                Start Project Diagnostic
              </a>
              <button className="border-2 border-slate-200 text-slate-950 px-10 py-6 text-xs font-black uppercase tracking-widest hover:bg-slate-50 hover:border-slate-900 hover:-translate-y-1 transition-all duration-300">
                Download Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: MEASURABLE OUTCOMES */}
      <section className="py-24 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Reduced Uncertainty", desc: "Identify technical risks before they become costly mid-build changes." },
              { title: "Architectural Clarity", desc: "Expert decisions on tech stacks and database structures from Day 1." },
              { title: "Transparent Scoping", desc: "AI-assisted project breakdowns that eliminate the 'Black Box' of dev costs." },
              { title: "Risk Mitigation", desc: "Strategic engineering advice tailored for founders and SMEs." }
            ].map((prop, i) => (
              <div key={i} className="space-y-4 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-8 h-1 bg-cyan-600 group-hover:w-16 transition-all duration-500"></div>
                <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs group-hover:text-cyan-600 transition-colors duration-300">{prop.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS: THE JOURNEY */}
      <section id="diagnostic" className="py-32 px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-cyan-600 text-xs font-black uppercase tracking-[0.4em] mb-4">The Methodology</h2>
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">Value Through Process</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-gradient-to-r from-slate-100 via-cyan-500/20 to-slate-100 -z-0"></div>
            {[
              { step: "01", title: "Diagnostic", sub: "Interactive discovery of business needs and system risks." },
              { step: "02", title: "Blueprint", sub: "AI-assisted technical roadmap and architectural design." },
              { step: "03", title: "Review", sub: "Deep-dive validation of decisions by expert engineers." },
              { step: "04", title: "Delivery", sub: "Mission-critical build support with zero technical debt." }
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-28 h-28 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mx-auto mb-10 font-black text-2xl text-slate-950 shadow-lg group-hover:border-cyan-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 group-hover:scale-110 transition-all duration-500 animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: `${i * 0.5}s`}}>
                  {p.step}
                </div>
                <h4 className="font-black text-slate-950 uppercase tracking-widest mb-4 text-sm group-hover:text-cyan-600 transition-colors duration-300">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed italic max-w-[180px] mx-auto group-hover:text-slate-700 transition-colors duration-300">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROOF: DIAGNOSTIC EXAMPLES */}
      <section className="py-32 px-8 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <h2 className="text-cyan-600 text-xs font-black uppercase tracking-[0.4em] mb-10">Proof of Thought</h2>
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8 leading-tight">
              Evidence-Based <br /> Engineering.
            </h3>
            <p className="text-slate-600 mb-12 leading-relaxed">
              We don't expect you to trust a generic logo wall. Instead, we show you the 
              depth of our analysis. View sample diagnostics and prototype project breakdowns 
              that showcase how we solve real business logic.
            </p>
            <div className="space-y-6">
              <div className="p-8 bg-white border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2 group-hover:tracking-[0.4em] transition-all duration-300">Example Case: SME Automation</p>
                <p className="text-sm font-medium text-slate-900 leading-relaxed italic">
                  "Recommendation: Delay mobile app development. Focus on API-first data normalization to reduce long-term operational costs by 30%."
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-950 p-12 text-white shadow-2xl relative overflow-hidden group rounded-lg">
             <div className="font-mono text-[11px] space-y-4 relative z-10">
                <p className="text-cyan-400 animate-pulse">// DEVIXA_STRATEGY_SYSTEM</p>
                <p className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.5s_forwards]">&gt; Initializing Project Diagnostic...</p>
                <p className="opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">&gt; Scanning for Architectural Debt: High Risk Found</p>
                <p className="opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">&gt; Suggested Mitigation: Modular Monolith Architecture</p>
                <div className="h-32 bg-white/5 border border-white/10 mt-8 rounded animate-pulse flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
             </div>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-900/20 blur-3xl rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-1000"></div>
             <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-600/10 blur-2xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 5. SECTORS SERVED */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-cyan-600 text-xs font-black uppercase tracking-[0.4em] mb-4 underline underline-offset-8">Sectors</h2>
              <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter mt-10">Specialized Verticals</h3>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">Market Expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["SME Operations", "Legal & Professional", "FinTech Backends", "AI-Ready Workflows"].map((sector, i) => (
              <div key={i} className="p-10 bg-slate-50 border-2 border-slate-100 hover:bg-white hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[250px] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500"></div>
                <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest relative z-10 group-hover:text-cyan-600 transition-colors duration-300">{sector}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto italic relative z-10 group-hover:text-cyan-500 transition-colors duration-300">Industry Sector {i+1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 px-8 bg-slate-950 text-white text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-cyan-600/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.75s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-12 hover:scale-105 transition-transform duration-500">
            Build With <br /> <span className="text-cyan-600 inline-block hover:text-cyan-500 transition-colors duration-300">Decision</span> Confidence.
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto italic">
            "Eliminate technical debt before it exists. Devixa's consulting cycles are now open for business clients."
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-16 py-8 text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-xl shadow-cyan-950 hover:shadow-2xl hover:shadow-cyan-600/30 cursor-pointer hover:-translate-y-2 hover:scale-105 rounded-sm">
            Start Your Technical Audit
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;