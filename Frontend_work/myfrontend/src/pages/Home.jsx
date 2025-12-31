import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-cyan-100">

      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-center px-8 border-b border-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          <div className="lg:col-span-8">
            <span className="inline-block mb-8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-700 bg-cyan-50 border border-cyan-600/20 rounded-full">
              Engineering & AI Advisory
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
              Software Engineering <br />
              & AI Systems <br />
              <span className="text-cyan-600">Built Right.</span>
            </h1>

            <p className="max-w-2xl text-lg lg:text-xl text-slate-600 font-medium mb-12">
              Devixa designs, audits, and builds scalable software systems and AI-powered solutions
              for organizations that cannot afford failure, rework, or unclear decisions.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/solutions/software" className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition rounded-sm">
                Software Engineering
              </Link>
              <Link to="/solutions/ai" className="border border-slate-300 px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 rounded-sm">
                AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE REAL PROBLEM */}
      <section className="py-28 px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-10">
            Most software fails <br /> long before it breaks.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Software systems rarely collapse overnight. They degrade quietly —
            through rushed decisions, unclear ownership, undocumented assumptions,
            and architectural shortcuts made under pressure.
          </p>

          <ul className="space-y-4 text-slate-600 font-medium">
            <li>• Rising operational cost</li>
            <li>• Fragile integrations</li>
            <li>• Security exposure</li>
            <li>• Systems that teams are afraid to touch</li>
          </ul>

          <p className="mt-10 italic text-slate-500">
            By the time these issues surface, fixing them is expensive —
            sometimes impossible without rebuilding.
          </p>
        </div>
      </section>

      {/* 3. WHY DEVIXA EXISTS */}
      <section className="py-32 px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <h3 className="text-4xl lg:text-5xl font-black uppercase leading-[0.9]">
            Devixa exists to fix <br /> the thinking before <br /> the code.
          </h3>

          <div className="space-y-8 text-slate-600 text-lg font-medium leading-relaxed">
            <p>
              Most software teams are optimized for speed.
              Very few are optimized for correctness.
            </p>
            <p>
              Devixa was founded on a simple belief:
              <strong className="text-slate-900"> engineering excellence begins with disciplined decision-making.</strong>
            </p>
            <p>
              We design systems meant to survive scale, withstand change,
              and remain secure and maintainable long after initial delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. AI RESPONSIBILITY */}
      <section className="py-32 px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-black uppercase mb-12">
            AI without governance <br /> is operational risk.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-slate-600 text-lg font-medium">
            <p>
              AI introduces new power — and new failure modes.
              Without structure, AI systems drift silently, automate the wrong decisions,
              and expose organizations to regulatory and reputational risk.
            </p>

            <ul className="space-y-4">
              <li>• Human-in-the-loop controls</li>
              <li>• Clear automation boundaries</li>
              <li>• Explainability standards</li>
              <li>• Performance and drift monitoring</li>
            </ul>
          </div>

          <p className="mt-12 italic text-slate-500">
            Intelligence is only valuable when it is controlled.
          </p>
        </div>
      </section>

      {/* 5. HOW WE BUILD */}
      <section className="py-32 px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h3 className="text-4xl lg:text-5xl font-black uppercase leading-[0.9] mb-8">
              How we build <br /> & deploy.
            </h3>
            <p className="text-lg text-slate-600 font-medium">
              From business logic to technical validation — with clarity at every step.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              "Discovery & System Analysis",
              "Architecture & AI Design",
              "Engineering Validation",
              "Deployment & Governance"
            ].map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 flex gap-8">
                <span className="text-3xl font-black text-slate-200">0{i + 1}</span>
                <span className="text-sm font-black uppercase tracking-widest">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO THIS IS FOR */}
      <section className="py-32 px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-cyan-600">
              Ideal Clients
            </h4>
            <ul className="space-y-4 font-medium text-slate-700">
              <li>• Organizations building core systems</li>
              <li>• Teams planning for scale</li>
              <li>• Businesses tired of rebuilding software</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-slate-400">
              Not a Fit
            </h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li>• Cheapest-option seekers</li>
              <li>• One-off quick websites</li>
              <li>• No long-term ownership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. DIAGNOSTIC CTA */}
      <section className="py-40 px-8 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black uppercase leading-[0.8] mb-10">
            Build with <br />
            <span className="text-cyan-600">decision confidence.</span>
          </h2>

          <p className="text-lg text-slate-400 mb-16 italic">
            Most organizations cannot clearly explain why their system is built the way it is.
            Our diagnostic surfaces risks before they become failures.
          </p>

          <button className="bg-cyan-600 px-16 py-7 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-slate-950 transition rounded-sm">
            Request a System & AI Diagnostic
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
