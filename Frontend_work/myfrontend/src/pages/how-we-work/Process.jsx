import React from 'react';

const Process = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: PROCESS AS COMPETITIVE ADVANTAGE */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-cyan-600/30 rounded-full mb-8 bg-cyan-50/50">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-700">Engineering Methodology</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8 text-slate-950">
            A structured process for <br /> serious software systems.
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-3xl mb-10 leading-relaxed">
            Devixa follows a disciplined, transparent engineering process designed to reduce risk, enforce quality, and deliver systems that scale beyond their first release.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all duration-300 rounded-sm shadow-xl">
              Begin with a Technical Consultation
            </button>
            <div className="flex flex-col border-l border-slate-200 pl-6">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Core Lifecycle</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Discovery • Architecture • Validation • Execution • Continuity</span>
            </div>
          </div>
          <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
            Our process exists to prevent rework, not to create ceremony.
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHY PROCESS IS NOT OPTIONAL */}
      <section className="py-24 px-6 lg:px-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase text-slate-950">
              Why Process Is Not Optional
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-sm">
              <p>Most teams fail not because they lack talent, but because they lack a repeatable decision framework. Without a defined process, assumptions replace analysis and speed replaces correctness.</p>
              <p className="text-slate-950 font-bold border-l-2 border-slate-950 pl-6 py-2">
                Process is how engineering integrity scales.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
             {["Every decision is traceable", "Every build has intent", "Every system has a future"].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-slate-200 flex items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-cyan-600"></div>
                   <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">{item}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE DEVIXA ENGINEERING PROCESS (LINEAR TIMELINE) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-20 text-center">The Devixa Engineering Process</h2>
        
        <div className="space-y-24">
          {[
            {
              id: "01",
              title: "Discovery & Context",
              purpose: "To understand what problem should be solved before deciding how to solve it.",
              details: ["Business goals and success criteria", "User workflows and operational realities", "Constraints: budget, time, security", "Review of existing systems"],
              outputs: ["Problem definition", "Constraint map", "Initial risk overview"],
              warning: "If discovery is weak, everything that follows will be expensive."
            },
            {
              id: "02",
              title: "System & Architecture Design",
              purpose: "To design a system that can evolve without collapsing under its own complexity.",
              details: ["System decomposition", "Architecture pattern selection", "Data modeling and ownership", "Integration and API strategy"],
              outputs: ["Architecture diagrams", "Decision records (why this, not that)", "Technical blueprint"],
              warning: "Architecture is the costliest mistake to fix later."
            },
            {
              id: "03",
              title: "Validation & Risk Analysis",
              purpose: "To stress-test decisions before they reach production.",
              details: ["Performance and scalability checks", "Security and access control review", "Failure-mode analysis", "AI feasibility review (if applicable)"],
              outputs: ["Risk register", "Mitigation plan", "Go / No-Go decision"],
              warning: "We treat uncertainty as a risk, not a surprise."
            },
            {
              id: "04",
              title: "Engineering Execution",
              purpose: "To build exactly what was designed — no shortcuts, no improvisation.",
              details: ["Controlled implementation cycles", "Code reviews and quality gates", "Automated and manual testing", "Documentation written alongside code"],
              outputs: ["Production-ready software", "Documented systems", "Verified builds"],
              warning: "Execution is where discipline matters most."
            },
            {
              id: "05",
              title: "Continuity & Handover",
              purpose: "To ensure the system survives beyond the initial build phase.",
              details: ["Knowledge transfer", "System ownership clarification", "Monitoring and observability setup", "Long-term improvement recommendations"],
              outputs: ["Handover documentation", "Operational guidelines", "Future roadmap input"],
              warning: "A successful system does not depend on its creators."
            }
          ].map((stage, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
              <div className="lg:col-span-1">
                <span className="text-4xl font-black text-slate-100 group-hover:text-cyan-600 transition-colors">{stage.id}</span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{stage.title}</h3>
                <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-6">Purpose: {stage.purpose}</p>
                <ul className="space-y-3">
                  {stage.details.map((detail, j) => (
                    <li key={j} className="text-sm text-slate-500 flex gap-3">
                      <span className="text-slate-300">—</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 bg-slate-50 p-8 border border-slate-100">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-6">Defined Outputs</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {stage.outputs.map((output, k) => (
                    <div key={k} className="text-[10px] font-bold uppercase tracking-tight text-slate-900 flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-600"></div> {output}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] italic text-slate-400 border-t border-slate-200 pt-4">{stage.warning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — AGILE WITHOUT RIGIDITY */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 uppercase">Process Without Rigidity</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Devixa supports agile delivery without chaos. Our process allows iteration within defined constraints, prioritizing learning without sacrificing structure.
              </p>
              <p className="text-cyan-500 font-black uppercase text-[10px] tracking-[0.2em]">Agile without discipline is just motion.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["Traceable decisions", "Intentional builds", "Scalable integrity", "Handover ready"].map((point, i) => (
                  <div key={i} className="border border-slate-800 p-6">
                     <p className="text-[10px] font-black uppercase tracking-widest">{point}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FILTER */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-10">Ideal Fit</h3>
          <ul className="space-y-4">
            {["Organizations building core systems", "Teams planning for scale and longevity", "Businesses tired of rebuilding software"].map((item, i) => (
              <li key={i} className="flex gap-4 text-xs font-bold uppercase text-slate-700">
                <span className="text-cyan-600">/</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="opacity-50">
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Not Ideal</h3>
          <ul className="space-y-4">
            {["One-off, disposable projects", "“Just ship it” mindsets", "Cheapest-possible development"].map((item, i) => (
              <li key={i} className="flex gap-4 text-xs font-bold uppercase text-slate-400">
                <span className="text-slate-300">—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-32 bg-white text-center border-t border-slate-50">
        <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase text-slate-950">Start with a process that protects you.</h2>
        <p className="text-slate-500 mb-10 text-sm font-medium">Devixa’s process is designed to reduce uncertainty before it becomes cost.</p>
        <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all rounded-sm shadow-xl">
          Begin with a Technical Consultation
        </button>
      </section>

    </div>
  );
};

export default Process;