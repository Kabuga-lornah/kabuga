import React from 'react';

const TechnicalConsulting = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: AUTHORITY FIRST */}
      <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-50">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-cyan-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">Advisory Division</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8 text-slate-950">
            Technical decisions made with clarity.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-3xl mb-10 leading-relaxed">
            Devixa provides independent technical consulting to help organizations design, evaluate, and scale software systems with confidence — before costly implementation begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all duration-300 rounded-sm">
              Request a Technical Consultation
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Architecture • Systems Design • Due Diligence • AI Readiness
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IT MEANS (CONSULTING VS. CODING) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase text-slate-950">
            What Technical Consulting means at Devixa
          </h2>
          <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
            <p>
              Technical consulting at Devixa is not coding support or outsourced development. It is structured, senior-level engineering guidance focused on decision-making, system design, and risk reduction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["What should we build?", "How should it be built?", "What should not be built yet?", "What risks are hidden?"].map((q, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-100">
                  <span className="text-cyan-600 font-bold">?</span>
                  <span className="text-sm text-slate-800">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 p-10 border border-slate-100 flex flex-col justify-center">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 text-center">Independent Judgment</h4>
          <p className="text-slate-900 font-bold italic text-center leading-relaxed">
            "Most software failures start with a bad decision — not bad code. We are hired to think before others build."
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHO WE WORK WITH (TARGETED POSITIONING) */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-16">Who We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {[
              "Founders and startup leadership teams",
              "SMEs scaling internal systems",
              "Professional firms digitizing operations",
              "Organizations preparing for AI adoption",
              "Teams inheriting legacy systems"
            ].map((client, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="h-1.5 w-1.5 bg-cyan-600 rounded-full"></div>
                <p className="text-sm font-bold uppercase tracking-tight">{client}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-slate-500 text-xs italic">
            If technical decisions affect revenue, security, or scalability — consulting comes first.
          </p>
        </div>
      </section>

      {/* SECTION 4 — SERVICES (SENIOR OFFERINGS) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16">Our Technical Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
          {[
            { 
              title: "System & Architecture Design", 
              items: ["Architecture definition", "Stack selection", "Data model design"],
              outcome: "A clear, documented technical blueprint."
            },
            { 
              title: "Technical Audits & Reviews", 
              items: ["Codebase review", "Security & stability audit", "Scalability assessment"],
              outcome: "Clear understanding of system health."
            },
            { 
              title: "Product & MVP Advisory", 
              items: ["Realistic MVP scoping", "Core feature identification", "Overbuild prevention"],
              outcome: "Faster validation with lower cost."
            },
            { 
              title: "AI Readiness Consulting", 
              items: ["Data quality evaluation", "Feasible use case definition", "Premature adoption prevention"],
              outcome: "AI initiatives grounded in reality."
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-12 group hover:bg-slate-50 transition-colors duration-300">
              <h3 className="text-lg font-black uppercase mb-8 tracking-tight group-hover:text-cyan-600 transition-colors">{service.title}</h3>
              <ul className="space-y-4 mb-10">
                {service.items.map((item, j) => (
                  <li key={j} className="text-xs text-slate-500 font-medium flex items-center gap-3">
                    <div className="h-px w-4 bg-slate-300"></div> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Primary Outcome</span>
                <p className="text-xs font-bold text-slate-900">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — THE CONSULTING PROCESS */}
      <section className="py-24 bg-slate-50 px-6 lg:px-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-16 uppercase">How Our Consulting Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Discovery & Context", desc: "Business goals, constraints, and inherent risks." },
              { title: "Technical Analysis", desc: "Architecture, data, security, and scalability review." },
              { title: "Decision Framework", desc: "Trade-offs, recommendations, and alternatives." },
              { title: "Documentation", desc: "Clear written outputs and next operational steps." }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Phase 0{i+1}</span>
                <h4 className="text-sm font-bold uppercase">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest italic border-t border-slate-200 pt-10">
            We leave you with clarity, not dependency.
          </p>
        </div>
      </section>

      {/* SECTION 6 — OUTPUTS & WHY DEVIXA (THE TRUST MODULE) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-10">What You Receive</h3>
          <ul className="space-y-6">
            {[
              "Architecture diagrams",
              "Technical recommendation reports",
              "Risk and mitigation summaries",
              "Build vs buy analysis",
              "AI readiness assessments"
            ].map((output, i) => (
              <li key={i} className="text-sm font-bold uppercase text-slate-800 border-b border-slate-50 pb-4">
                {output}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-10">
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 text-center lg:text-left">Why Devixa</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              "Independent engineering judgment",
              "No pressure to build prematurely",
              "Focus on long-term maintainability",
              "Business-aligned technical logic"
            ].map((reason, i) => (
              <div key={i} className="p-6 border border-slate-100">
                <p className="text-xs font-bold uppercase leading-relaxed text-slate-600">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center border-t border-slate-50">
        <h2 className="text-4xl font-bold tracking-tight mb-6 uppercase text-slate-950">Make the Right Technical Decision — First.</h2>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
          Before you build, scale, or invest, speak to engineers who prioritize clarity over complexity.
        </p>
        <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all rounded-sm shadow-xl">
          Book a Technical Consulting Session
        </button>
      </section>

    </div>
  );
};

export default TechnicalConsulting;