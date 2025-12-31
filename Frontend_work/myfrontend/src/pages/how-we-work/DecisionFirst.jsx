import React from 'react';
import { 
  ShieldCheckIcon, 
  ArrowPathIcon, 
  DocumentChartBarIcon, 
  UserGroupIcon,
  ScaleIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const DecisionFirst = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: INSTITUTIONAL POSITIONING */}
      <section className="relative pt-32 pb-24 px-6 lg:px-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-10 animate-[fadeIn_0.6s_ease-out]">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Governance Model</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-10 leading-[1.05] max-w-5xl animate-[fadeIn_0.8s_ease-out]">
            Enterprise Systems Fail at the <br /> 
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Decision Layer</span> — Not the Technology.
          </h1>
          
          <p className="text-lg lg:text-2xl text-slate-300 font-light max-w-4xl mb-16 leading-relaxed animate-[fadeIn_1s_ease-out]">
            Large-scale systems fail because foundational decisions are unclear, misaligned, or undocumented. Devixa treats decisions as governance assets that guide architecture, engineering, and AI behavior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-[fadeIn_1.2s_ease-out]">
            <button className="group relative bg-cyan-600 text-white px-10 py-6 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-cyan-500 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Request an Enterprise Decision Review</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <div className="border-l-2 border-slate-700 pl-8 py-2">
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2">Status</span>
               <span className="text-[11px] font-bold uppercase text-cyan-400 tracking-wider">Operational Alignment First</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </section>

      {/* SECTION 2 — THE RATIONALE (WHY ENTERPRISES) */}
      <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 mb-10">The Enterprise Imperative</h2>
            <div className="space-y-8 text-base text-slate-600 font-light leading-relaxed">
              <p className="text-lg">In high-stakes environments, undocumented or implicit decisions create systemic risk. Technology cannot compensate for unclear intent.</p>
              <div className="relative p-10 bg-gradient-to-br from-slate-50 to-slate-100 border-l-4 border-cyan-600 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-6 left-6 text-6xl text-cyan-600/10 font-serif">"</div>
                <p className="relative text-slate-950 font-medium text-lg leading-relaxed">Decision-first engineering replaces ambiguity with structure, traceability, and accountability.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Stakeholder Misalignment", color: "cyan" },
              { title: "Compliance Constraints", color: "cyan" },
              { title: "Organizational Inertia", color: "cyan" },
              { title: "Legacy Fragility", color: "cyan" }
            ].map((risk, i) => (
              <div key={i} className="group relative bg-white p-10 border-2 border-slate-100 hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-600 to-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-1.5 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 leading-tight">{risk.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE HIERARCHY (CORE CONTENT) */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-24 text-center">Decision Hierarchy: Structuring Clarity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                layer: "01", 
                title: "Strategic", 
                desc: "Business outcomes, risk tolerance, and build vs. buy considerations.",
                icon: <ScaleIcon className="h-6 w-6" />
              },
              { 
                layer: "02", 
                title: "Architectural", 
                desc: "System boundaries, data models, and resilience requirements.",
                icon: <ArrowPathIcon className="h-6 w-6" />
              },
              { 
                layer: "03", 
                title: "Engineering", 
                desc: "Technology stacks, frameworks, and delivery standards.",
                icon: <ShieldCheckIcon className="h-6 w-6" />
              },
              { 
                layer: "04", 
                title: "Operational & AI", 
                desc: "Automation boundaries and human-in-the-loop accountability.",
                icon: <CpuChipIcon className="h-6 w-6" />
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white p-12 border-2 border-slate-200 hover:border-cyan-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-cyan-600 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">{item.icon}</div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-3">Layer {item.layer}</span>
                  <h3 className="text-base font-black uppercase mb-6 tracking-widest text-slate-950 group-hover:text-cyan-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-[12px] text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — GOVERNANCE & AUDIT (RECORDS) */}
      <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 uppercase text-slate-950 leading-tight tracking-tight">
              Institutional Memory: <br /> 
              <span className="text-cyan-600">Decisions are Documented.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mb-12">
              Key decisions are documented in a structured, auditable format. Systems outlive people; decisions must outlive teams.
            </p>
            <ul className="space-y-2">
              {["Context & Constraints", "Alternatives Evaluated", "Expected Impact", "Rationale & Trade-offs"].map((record, i) => (
                <li key={i} className="group flex items-center gap-4 py-5 border-b border-slate-200 hover:border-cyan-600 transition-all duration-300">
                  <DocumentChartBarIcon className="h-5 w-5 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 group-hover:text-cyan-600 transition-colors duration-300">{record}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-16 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_70%)]"></div>
            <div className="relative z-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-10">AI Governance Protocol</h4>
              <p className="text-base font-light leading-relaxed text-slate-300 mb-12">
                In AI projects, we explicitly decide what the system is allowed to decide and where human accountability resides to prevent regulatory exposure.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-700 pt-10">
                <div className="space-y-2">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Focus</span>
                  <span className="text-[12px] font-bold block text-cyan-400">Bias & Drift Control</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Control</span>
                  <span className="text-[12px] font-bold block text-cyan-400">Human-in-the-loop</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA: STRATEGIC GOLD */}
      <section className="relative py-40 bg-gradient-to-br from-slate-50 to-white border-t border-slate-200 px-6 lg:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-10 uppercase text-slate-950 leading-tight">
            Begin With Decisions <br /> 
            <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">That Scale.</span>
          </h2>
          <p className="text-sm text-slate-500 mb-16 font-medium uppercase tracking-[0.2em] leading-relaxed">
            Align strategy, architecture, and execution — before complexity compounds.
          </p>
          <button className="group relative bg-slate-950 text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Request an Enterprise Decision Review</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          
        </div>
      </section>

    </div>
  );
};

export default DecisionFirst;