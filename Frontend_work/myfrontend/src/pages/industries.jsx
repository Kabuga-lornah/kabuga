import React from "react";
import {
  BuildingOfficeIcon,
  BanknotesIcon,
  TruckIcon,
  UserGroupIcon,
  CpuChipIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Industries = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100 pb-20">
      {/* SECTION 1 — HERO: POSITIONING & AUTHORITY */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 border-b border-slate-50 bg-slate-950 text-white overflow-hidden">
        {/* Subtle geometric accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 skew-x-12 transform translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-cyan-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
              Sector Expertise
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Engineering Systems That Operate <br />
            Under <span className="text-cyan-500">Real-World Constraints.</span>
          </h1>

          <p className="text-base lg:text-xl text-slate-400 font-medium max-w-3xl mb-12 leading-relaxed">
            Modern systems fail when engineering decisions ignore the realities
            of the operating environment. At Devixa, we design systems that
            adapt to regulatory pressure, operational risk, and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="bg-cyan-600 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-slate-950 transition-all duration-300 rounded-sm shadow-xl">
              Discuss Your Operational Environment
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE THESIS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase text-slate-950">
              Industries Differ. <br /> System Failures Repeat.
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
              While regulation and workflows vary, the underlying causes of
              failure remain consistent: poor architecture, fragile
              integrations, and a lack of governance.
            </p>
            <div className="p-8 bg-slate-50 border-l-2 border-slate-950">
              <p className="text-slate-950 font-bold italic text-base">
                "We do not build software for industries. We engineer systems
                that survive them."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Structural Risk Management",
              "Governance Mapping",
              "Constraint-Based Design",
              "Logic Accountability",
            ].map((thesis, i) => (
              <div
                key={i}
                className="p-6 border border-slate-100 flex items-center gap-4"
              >
                <div className="w-1 h-1 bg-cyan-600"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  {thesis}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INDUSTRY ENVIRONMENTS (THE CORE) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-20 text-center">
            Industry Environments We Operate In
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {/* SMEs & Growth */}
            <div className="bg-white p-12 group hover:bg-slate-50 transition-colors">
              <UserGroupIcon className="h-6 w-6 text-cyan-600 mb-8" />
              <h3 className="text-sm font-black uppercase mb-6 tracking-widest text-slate-950">
                SMEs & Growth Companies
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Primary Constraints
                  </span>
                  <p className="text-[11px] font-bold text-slate-700">
                    Rapid growth vs. technical debt accumulation.
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Engineering Focus
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Scalable foundations that avoid irreversible design
                    shortcuts.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Services */}
            <div className="bg-white p-12 group hover:bg-slate-50 transition-colors">
              <BuildingOfficeIcon className="h-6 w-6 text-cyan-600 mb-8" />
              <h3 className="text-sm font-black uppercase mb-6 tracking-widest text-slate-950">
                Professional Services
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Primary Constraints
                  </span>
                  <p className="text-[11px] font-bold text-slate-700">
                    Manual, people-dependent workflows and visibility gaps.
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Engineering Focus
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Workflow automation and structured decision systems.
                  </p>
                </div>
              </div>
            </div>

            {/* FinTech */}
            <div className="bg-white p-12 group hover:bg-slate-50 transition-colors">
              <BanknotesIcon className="h-6 w-6 text-cyan-600 mb-8" />
              <h3 className="text-sm font-black uppercase mb-6 tracking-widest text-slate-950">
                FinTech & Regulated
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Primary Constraints
                  </span>
                  <p className="text-[11px] font-bold text-slate-700">
                    Zero tolerance for failure; compliance and auditability.
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Engineering Focus
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Secure architecture and compliance-ready documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-white p-12 group hover:bg-slate-50 transition-colors">
              <TruckIcon className="h-6 w-6 text-cyan-600 mb-8" />
              <h3 className="text-sm font-black uppercase mb-6 tracking-widest text-slate-950">
                Logistics & Operations
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Primary Constraints
                  </span>
                  <p className="text-[11px] font-bold text-slate-700">
                    Real-time data and high operational cost of downtime.
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block mb-2">
                    Engineering Focus
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Fault tolerance and resilient data pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI ACROSS INDUSTRIES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
              AI as an Operational Tool <br /> — Not a Buzzword.
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
              Our approach to AI is consistent regardless of sector: AI supports
              decisions, not replaces accountability. Human-in-the-loop
              validation is mandatory.
            </p>
            <ul className="space-y-4">
              {[
                "Continuous Performance Monitoring",
                "Clearly Defined Automation Boundaries",
                "Human Sovereign Accountability",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-950"
                >
                  <div className="h-px w-4 bg-cyan-600"></div> {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 bg-slate-950 p-12 relative">
            <CpuChipIcon className="h-12 w-12 text-cyan-500 mb-8" />
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              "AI is integrated where it strengthens systems — not where it
              introduces fragility. This allows responsible operation in
              high-stakes environments."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — QUALIFIER */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-white border border-slate-200">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mb-6">
              Organizations We Serve
            </h4>
            <ul className="text-xs text-slate-600 space-y-3 font-medium">
              <li> Mission-critical system operators.</li>
              <li> Long-term reliability prioritizers.</li>
              <li> Accountability-driven leadership.</li>
            </ul>
          </div>
          <div className="p-10 border border-slate-100 opacity-50">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              Outside Our Scope
            </h4>
            <ul className="text-xs text-slate-400 space-y-3 font-medium">
              <li>• Brochures and one-off websites.</li>
              <li>• Ownership-free experimental builds.</li>
              <li>• Lowest-cost optimization projects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 uppercase text-slate-950">
            Your Industry Has Constraints. <br /> Your System Should Be Designed
            For Them.
          </h2>
          <p className="text-xs text-slate-500 mb-12 font-medium uppercase tracking-[0.2em] leading-relaxed">
            Devixa helps organizations engineer systems that hold up under
            real-world pressure.
          </p>
          <button className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all rounded-sm shadow-xl">
            Discuss Your Operational Environment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
