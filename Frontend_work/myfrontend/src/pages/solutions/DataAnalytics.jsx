import React from 'react';

const DataAnalytics = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: PRECISION POSITIONING */}
      <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6">Intelligence Foundations</p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8 text-slate-950">
            Data systems that <br/> drive decisions.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-12">
            Devixa designs data pipelines, analytics frameworks, and decision-ready insights that help organizations understand performance, predict outcomes, and act with confidence.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all rounded-sm">
              Request Data Assessment
            </button>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              From raw data to operational intelligence
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEFINITION (HORIZONTAL FLOW) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-t border-slate-100">
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">What Data & Analytics means at Devixa</h2>
          <p className="text-slate-500 max-w-3xl leading-relaxed text-sm">
            At Devixa, Data & Analytics is not about charts for reporting sake. We engineer systems that collect, clean, structure, and analyze data so leadership teams can make faster, more accurate decisions — and prepare their organizations for AI-driven workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Data Engineering", desc: "Designing reliable pipelines, ETL workflows, and auditable data models." },
            { title: "Analytics & Insights", desc: "KPI frameworks aligned to business goals with deep performance analysis." },
            { title: "Decision Intelligence", desc: "Translating insights into actions through rule-based logic." },
            { title: "AI Readiness", desc: "Clean datasets and feature-ready structures for machine learning." }
          ].map((pillar, i) => (
            <div key={i} className="border-t border-slate-950 pt-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{pillar.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PROBLEMS (THE PAIN POINTS) */}
      <section className="py-24 bg-slate-50 px-6 lg:px-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight mb-6">The problems <br/> we solve.</h2>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                We fix the foundation before adding intelligence.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Data scattered across systems and spreadsheets",
                "Reports that arrive too late to be useful",
                "Inconsistent or unreliable numbers",
                "No single source of truth",
                "Decisions based on intuition, not evidence",
                "AI ideas blocked by poor data quality"
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 items-start py-4 border-b border-slate-200">
                  <span className="text-cyan-600 font-mono text-xs">0{i+1}</span>
                  <p className="text-xs font-bold uppercase tracking-tight text-slate-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES: ENGINEERED MODULES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-20 text-center">Core Analytics Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
          {[
            { 
              title: "Data Architecture & Pipelines", 
              items: ["Data source mapping", "Pipeline design (APIs, ETL)", "Data warehousing strategy"],
              outcome: "Reliable, centralized, and scalable data infrastructure."
            },
            { 
              title: "Business Analytics & Reporting", 
              items: ["KPI definition and alignment", "Dashboards and reports", "Performance tracking"],
              outcome: "Clear visibility into what is happening — and why."
            },
            { 
              title: "Advanced Analytics & Forecasting", 
              items: ["Trend analysis", "Scenario modeling", "Early predictive logic"],
              outcome: "Anticipate risks and opportunities before they happen."
            },
            { 
              title: "Data for AI & Automation", 
              items: ["Cleaning and labeling strategies", "Feature engineering support", "AI-ready datasets"],
              outcome: "Your data becomes usable for intelligent systems."
            }
          ].map((service, i) => (
            <div key={i} className="p-12 bg-white flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black uppercase mb-8 tracking-tight">{service.title}</h3>
                <ul className="space-y-4 mb-12">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-500 font-medium flex items-center gap-3">
                      <div className="h-px w-3 bg-slate-300"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Primary Outcome</span>
                <p className="text-xs font-bold text-slate-900">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — METHODOLOGY (DARK SECTION) */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-16 uppercase">How we deliver data & analytics.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "Data Assessment", desc: "Audit existing data sources to identify gaps, risks, and inconsistencies." },
              { step: "Design & Structuring", desc: "Define schemas and pipelines while establishing governance rules." },
              { step: "Analysis & Insight", desc: "Build analytics models and define critical business KPIs." },
              { step: "Decision Enablement", desc: "Translate insights into actions and prepare systems for AI." }
            ].map((step, i) => (
              <div key={i} className="group">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-4 block group-hover:translate-x-2 transition-transform">Step 0{i+1}</span>
                <h4 className="text-sm font-bold uppercase mb-4">{step.step}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — USE CASES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {[
            { title: "SME Operations", desc: "Centralized sales data to improve accuracy and reduce manual reconciliation." },
            { title: "Professional Services", desc: "Revealed underutilized resources and revenue leakage through performance analytics." },
            { title: "AI Preparation", desc: "Structured historical data to support future machine learning without rebuilding." }
          ].map((useCase, i) => (
            <div key={i} className="space-y-4">
              <div className="h-1 w-6 bg-slate-950"></div>
              <h4 className="text-sm font-black uppercase tracking-tight">{useCase.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — WHY DEVIXA */}
      <section className="py-24 bg-white px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Why Devixa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Engineering-first data systems",
              "Business-aligned metrics",
              "Designed for AI-readiness",
              "Transparency in documentation",
              "Security and integrity by default"
            ].map((reason, i) => (
              <div key={i} className="flex gap-4 items-center border-l border-slate-100 pl-6">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-20">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Turn data into decisions.</h2>
          <p className="text-slate-500 mb-10 text-sm font-medium leading-relaxed">Whether you are struggling with reporting or preparing for AI, Devixa helps you build data systems you can trust.</p>
          <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all rounded-sm">
            Book a Data & Analytics Assessment
          </button>
        </div>
      </section>

    </div>
  );
};

export default DataAnalytics;