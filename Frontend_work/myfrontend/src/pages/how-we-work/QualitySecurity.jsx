import React from 'react';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  CheckBadgeIcon, 
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  BeakerIcon,
  ArrowRightIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const QualitySecurity = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: AUTHORITY & PRINCIPLE */}
      <section className="pt-32 pb-20 px-6 lg:px-10 border-b border-slate-50 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-cyan-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">Methodology 02</span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Quality and Security Are Operating <br /> 
            <span className="text-cyan-500">Principles</span> — Not Final Checks.
          </h1>
          
          <p className="text-base lg:text-xl text-slate-400 font-medium max-w-3xl mb-12 leading-relaxed">
            In enterprise environments, quality and security cannot be validated at the end of a project. They must be embedded into decision-making, architecture, and engineering execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="bg-cyan-600 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-slate-950 transition-all duration-300 rounded-sm shadow-xl">
              Request a Quality & Security Review
            </button>
            <div className="flex items-center gap-4 border-l border-slate-800 pl-6 py-2">
               <ShieldCheckIcon className="h-6 w-6 text-cyan-500" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Zero-Trust Architecture Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE ENTERPRISE CONTEXT */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8">Why Informal Standards Fail</h2>
            <div className="space-y-6 text-sm text-slate-500 font-medium leading-relaxed">
              <p>Enterprise systems operate under regulatory oversight and operational continuity requirements. A single failure can cascade across customers and partners.</p>
              <p className="text-slate-950 font-bold border-l-2 border-slate-950 pl-6 py-1 italic">
                “Testing validates quality — it does not create it.”
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Predictability", desc: "Systems behave consistently under peak operational load." },
              { title: "Regression Control", desc: "Automated safeguards ensure changes do not break core logic." },
              { title: "Fault Isolation", desc: "Failures are detected and isolated to prevent systemic collapse." },
              { title: "Strategic Match", desc: "Engineering outcomes align exactly with business intent." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100">
                <CheckBadgeIcon className="h-5 w-5 text-cyan-600 mb-4" />
                <h4 className="text-[10px] font-black uppercase mb-2 tracking-wider text-slate-950">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INSTITUTIONAL QUALITY CONTROLS */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            Quality failures rarely originate at the same layer where they are detected.
          </p>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500 mb-16 text-center">Institutional Quality Controls</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
            {[
              { 
                title: "Architecture-Level", 
                items: ["Service boundaries & ownership", "Resilience strategies", "Fault-tolerance design"],
                note: "Poor architecture cannot be fixed downstream."
              },
              { 
                title: "Code-Level", 
                items: ["Peer reviews & standards", "Static analysis scanning", "Backward compatibility"],
                note: "Code is treated as a long-term asset."
              },
              { 
                title: "Delivery Quality", 
                items: ["Automated testing pipelines", "Controlled release strategies", "Environment parity"],
                note: "Speed without control is operational risk."
              }
            ].map((tier, i) => (
              <div key={i} className="bg-slate-950 p-12 group hover:bg-slate-900 transition-colors">
                <h3 className="text-sm font-black uppercase mb-8 tracking-widest text-white">{tier.title}</h3>
                <ul className="space-y-4 mb-10 text-[11px] text-slate-400">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <div className="h-px w-3 bg-cyan-600 mt-2"></div> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-800">
                   <p className="text-[9px] font-black uppercase text-slate-500 italic">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SECURITY AS ARCHITECTURAL RESPONSIBILITY */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-8 uppercase text-slate-950 leading-tight">Security Is An <br /> Architectural Responsibility.</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-12">
              Security is not a penetration test at the end of development. We design systems assuming adversarial behavior and infrastructure failure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <LockClosedIcon className="h-5 w-5"/>, title: "Least Privilege", desc: "Role-based access controls by design." },
                { icon: <ShieldCheckIcon className="h-5 w-5"/>, title: "Data Handling", desc: "Encryption in transit and at rest." }
              ].map((sec, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-cyan-600">{sec.icon}</div>
                  <h4 className="text-[10px] font-black uppercase text-slate-950">{sec.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-12 border border-slate-100">
             <div className="flex items-center gap-3 mb-8">
                <CpuChipIcon className="h-6 w-6 text-slate-950" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-950">AI Security & Governance</span>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed mb-8">
                AI systems introduce risk vectors that traditional controls cannot fully address. We establish human-in-the-loop checkpoints and drift detection protocols.
             </p>
             <div className="space-y-3">
                {["Automation Boundaries", "Model Validation", "Sovereignty Protocols"].map((label, i) => (
                  <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-tighter text-slate-400">
                    <div className="w-1 h-1 bg-cyan-600"></div> {label}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — METRICS & COMPLIANCE */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-12">
            We prioritize indicators that expose risk early, not vanity metrics.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">Metrics That Matter</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Reliability", value: "99.9% Contextual Uptime" },
                  { label: "Recovery", value: "Minimal MTTR Standards" },
                  { label: "Integrity", value: "Zero Unmanaged Drift" },
                  { label: "Audit", value: "100% Traceability" }
                ].map((m, i) => (
                  <div key={i} className="bg-white p-6 border border-slate-200">
                    <span className="text-[9px] font-black uppercase text-cyan-600 block mb-1">{m.label}</span>
                    <span className="text-[10px] font-bold text-slate-950 uppercase">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 border border-slate-200">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8">Compliance Readiness</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-8">
                We ensure documented architectural decisions and traceable change approvals to support regulatory reviews and executive oversight.
              </p>
              <p className="text-[9px] text-slate-400 uppercase tracking-widest italic">
                Our practices align with internationally recognized software quality and security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO THIS IS FOR (QUALIFIER) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 border border-slate-100">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mb-6">Designed For</h4>
            <ul className="text-xs text-slate-600 space-y-3 font-medium">
              <li>• Organizations handling sensitive or regulated data.</li>
              <li>• Leadership teams requiring predictable delivery at scale.</li>
              <li>• Firms operating mission-critical digital infrastructure.</li>
            </ul>
          </div>
          <div className="p-10 bg-slate-50 border border-slate-100 opacity-60">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Not Designed For</h4>
            <ul className="text-xs text-slate-400 space-y-3 font-medium">
              <li>• Experimental builds without accountability.</li>
              <li>• Teams seeking shortcuts over long-term stability.</li>
              <li>• Projects where risk ownership is undocumented.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 uppercase text-slate-950">Governance That Scales With Complexity.</h2>
          <p className="text-xs text-slate-500 mb-12 font-medium uppercase tracking-[0.2em] leading-relaxed">As systems grow, informal practices collapse. We provide institutional-grade discipline.</p>
          <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all rounded-sm shadow-xl">
            Request a Quality & Security Review
          </button>
          
         
        </div>
      </section>

    </div>
  );
};

export default QualitySecurity;