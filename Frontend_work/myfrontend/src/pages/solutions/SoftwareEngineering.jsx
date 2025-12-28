import React from 'react';
import { ShieldCheckIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const SoftwareEngineering = () => {
  return (
    <div className="bg-white text-slate-950 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: POSITIONING THE DISCIPLINE */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-50">
        <div className="border-l-[3px] border-cyan-600 pl-8 lg:pl-12">
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            Software engineering <br /> for systems that <br /> must last.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-3xl mb-10 leading-relaxed">
            Devixa designs and builds secure, scalable software systems for organizations that require long-term reliability, not short-term hacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all duration-300 rounded-sm shadow-2xl shadow-slate-200 hover:shadow-cyan-600/20">
              Request a technical assessment
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Architecture-first. Documentation-driven. Decision-aware.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM: WHY MOST SOFTWARE FAILS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-none mb-6">
            Most software problems are invisible at the start.
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Failures don’t start with bugs—they start with poor scoping, rushed architecture, and undefined constraints. By the time problems appear in production, the damage is already architectural.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            "Systems that collapse when users increase",
            "Features that become impossible to change",
            "High maintenance costs with no clear roadmap",
            "Teams afraid to touch existing code"
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
              <span className="text-cyan-600 font-black">/</span>
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY: ENGINEERING AS DESIGN */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Engineering is not writing code. It is designing decisions.
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg font-medium">
              At Devixa, we translate business logic into technical systems. Where appropriate, our systems are designed to safely integrate analytics and AI-driven decision support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Architecture before implementation", desc: "Every system begins with structure, not features." },
              { title: "Maintainability as a requirement", desc: "Code is written for future engineers, not just current deadlines." },
              { title: "Documentation as a deliverable", desc: "Knowledge is preserved, not trapped in people’s heads." },
              { title: "Security by default", desc: "Risk is considered from the first design decision." }
            ].map((pillar, i) => (
              <div key={i} className="group">
                <div className="h-1 w-12 bg-cyan-600 mb-6 transition-all group-hover:w-full duration-500"></div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-white">{pillar.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CAPABILITIES & REALITY ANCHOR */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-16 text-center">What we engineer</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-black uppercase mb-8 border-b border-slate-100 pb-4">Operational Systems</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>Internal platforms</li>
              <li>Workflow automation</li>
              <li>Admin dashboards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-black uppercase mb-8 border-b border-slate-100 pb-4">Scalable Backends</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>Secure APIs</li>
              <li>Database-driven systems</li>
              <li>Integration layers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-black uppercase mb-8 border-b border-slate-100 pb-4">Client-Facing Apps</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>Web platforms</li>
              <li>Controlled user environments</li>
              <li>Performance-optimized interfaces</li>
            </ul>
          </div>
        </div>

        {/* ADD 1: Reality Anchor Subsection */}
        <div className="bg-slate-50 p-10 border border-slate-100 mb-16">
          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-slate-400">Examples of systems we engineer</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-bold text-slate-700 leading-snug">
            <p>Internal operational tools for growing organizations</p>
            <p>Backend platforms supporting multiple client-facing products</p>
            <p>Data-driven admin systems with controlled access and audit trails</p>
          </div>
        </div>

        {/* ADD 2: Technical Footprint */}
        <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest leading-loose">
          Technologies are selected based on system needs, but commonly include: <br />
          Modern backend frameworks • Secure API architectures • Relational and non-relational databases • Cloud-based deployment environments
        </p>
      </section>

      {/* SECTION 5 — OUR ENGINEERING DISCIPLINE */}
      <section className="py-24 bg-slate-50 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-16">Our engineering discipline</h2>
          <div className="space-y-1">
            {[
              { step: "Discovery", desc: "Understanding business rules, constraints, and risk tolerance." },
              { step: "Design", desc: "Defining structure, data flows, and scaling strategy." },
              { step: "Implementation", desc: "Code written with testing, reviews, and documentation." },
              { step: "Handover", desc: "Ensuring clarity, stability, and ownership transfer." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-6 lg:items-center bg-white p-10 border border-slate-100 hover:border-cyan-600 transition-colors group">
                <span className="text-[10px] font-black text-cyan-600">STEP 0{i+1}</span>
                <h4 className="text-lg font-black uppercase min-w-[300px]">{step.step}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm font-bold uppercase tracking-widest text-center text-slate-400">
            We would rather delay development than build the wrong thing.
          </p>
        </div>
      </section>

      {/* SECTION 6 — QUALITY, SCALE & SECURITY */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-slate-100">
        <div className="text-center lg:text-left">
          <ShieldCheckIcon className="h-8 w-8 text-cyan-600 mb-6 mx-auto lg:mx-0" />
          <h4 className="font-black uppercase text-[11px] tracking-widest mb-4">Quality</h4>
          <p className="text-xs text-slate-500 leading-relaxed">Code reviews, testing discipline, and clear internal standards.</p>
        </div>
        <div className="text-center lg:text-left">
          <ChartBarIcon className="h-8 w-8 text-cyan-600 mb-6 mx-auto lg:mx-0" />
          <h4 className="font-black uppercase text-[11px] tracking-widest mb-4">Scalability</h4>
          <p className="text-xs text-slate-500 leading-relaxed">Load-aware architecture and rigorous growth planning.</p>
        </div>
        <div className="text-center lg:text-left">
          <DocumentTextIcon className="h-8 w-8 text-cyan-600 mb-6 mx-auto lg:mx-0" />
          <h4 className="font-black uppercase text-[11px] tracking-widest mb-4">Security</h4>
          <p className="text-xs text-slate-500 leading-relaxed">Access control, data protection, and risk awareness at every layer.</p>
        </div>
      </section>

      {/* SECTION 7 — WHO THIS IS FOR (SOFTENED) */}
      <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">Ideal For</h3>
            <ul className="space-y-4">
              {["Organizations building core systems", "Teams planning for growth", "Businesses tired of rebuilding software"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-slate-700">
                  <span className="h-1.5 w-1.5 bg-cyan-600 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Not Ideal For</h3>
            <ul className="space-y-4">
              {["One-off quick websites", "Projects with no long-term ownership", "Engagements focused solely on cost over long-term value"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-slate-400">
                  <span className="h-1.5 w-1.5 bg-slate-200 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="py-32 px-6 lg:px-10 bg-white text-center">
        <div className="max-w-3xl mx-auto border-t-2 border-slate-950 pt-20">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8 leading-none">
            Build with clarity, not assumptions.
          </h2>
          <button className="bg-slate-950 text-white px-10 py-6 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-cyan-600 transition-all rounded-sm mb-6">
            Request a technical assessment
          </button>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            We assess fit before committing to development.
          </p>
        </div>
      </section>

    </div>
  );
};

export default SoftwareEngineering;