import React from 'react';
import { 
  ArrowRightIcon, 
  CheckBadgeIcon, 
  CodeBracketSquareIcon, 
  CpuChipIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Company = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100">
      
      {/* SECTION 1 — HERO: AUTHORITY WITHOUT NOISE */}
      <section className="pt-32 pb-20 px-6 lg:px-10 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-cyan-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600">Established 2025</span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl text-slate-950">
            Building Technology With <br /> 
            Clarity, Discipline, and Intent.
          </h1>
          
          <p className="text-base lg:text-xl text-slate-500 font-medium max-w-3xl mb-12 leading-relaxed">
            Devixa is a modern software engineering and AI firm helping organizations make sound technical decisions before complexity becomes risk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-16">
            <button className="bg-slate-950 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all duration-300 rounded-sm">
              Work With Us
            </button>
            <a href="/how-we-work/decision-first" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors">
              <span>How We Think</span>
              <ArrowRightIcon className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span>Engineer-led</span>
            <span className="text-cyan-600">•</span>
            <span>Security-conscious</span>
            <span className="text-cyan-600">•</span>
            <span>AI-responsible</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY DEVIXA EXISTS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-6 block">Why We Exist</span>
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-slate-950 uppercase">
              Most software failures don’t come from bad code — they come from rushed decisions.
            </h2>
            <div className="space-y-6 text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
              <p>Systems are built without clear problem definition, AI is added without governance, and architectural shortcuts quietly accumulate risk.</p>
              <p>Devixa was founded to bring structure, clarity, and engineering discipline back into the decision-making process.</p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 p-12 border border-slate-100 flex flex-col justify-center">
            <p className="text-slate-950 font-bold italic text-lg leading-relaxed text-center">
              “Speed without clarity creates fragile systems.”
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR BELIEFS (GRID) */}
      <section className="py-24 bg-slate-950 text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500 mb-16 text-center">Our Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { title: "Engineering Advantage", desc: "Well-designed systems reduce cost, improve reliability, and enable long-term growth.", icon: <CodeBracketSquareIcon className="h-5 w-5"/> },
              { title: "Systems are Decisions", desc: "Technology choices shape security, scalability, and operational health.", icon: <ShieldCheckIcon className="h-5 w-5"/> },
              { title: "AI must be Intentional", desc: "Artificial intelligence requires oversight, boundaries, and accountability.", icon: <CpuChipIcon className="h-5 w-5"/> },
              { title: "Rigor from Day One", desc: "Early decisions compound — discipline cannot be retrofitted.", icon: <CheckBadgeIcon className="h-5 w-5"/> }
            ].map((belief, i) => (
              <div key={i} className="bg-slate-950 p-10 group hover:bg-slate-900 transition-colors">
                <div className="text-cyan-500 mb-6">{belief.icon}</div>
                <h3 className="text-[11px] font-black uppercase mb-4 tracking-widest leading-tight">{belief.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE OPERATE */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-20 text-center">How We Operate</h2>
        <div className="space-y-px bg-slate-100 border border-slate-100 max-w-4xl mx-auto">
          {[
            { step: "Clarify the real problem", desc: "We challenge assumptions and define objectives before writing code." },
            { step: "Evaluate trade-offs openly", desc: "Architecture, tooling, and AI choices are explained — not hidden." },
            { step: "Design for scale and security", desc: "Systems are built with future complexity in mind." },
            { step: "Implement with quality controls", desc: "Testing, review, and documentation are part of delivery — not add-ons." },
            { step: "Advise as systems evolve", desc: "We stay involved as technology and requirements change." }
          ].map((op, i) => (
            <div key={i} className="bg-white p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-slate-50 transition-colors">
              <span className="text-cyan-600 font-mono text-xs">0{i+1}</span>
              <div className="flex-1">
                <h4 className="text-sm font-black uppercase tracking-tight mb-1">{op.step}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{op.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — FOUNDER’S NOTE */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 block text-center">Founder’s Note</span>
          <div className="space-y-6 text-sm text-slate-600 font-medium leading-relaxed italic">
            <p>Devixa was created out of frustration — not ambition.</p>
            <p>I kept seeing capable teams struggle, not because they lacked talent, but because the systems they were building were rushed, unclear, or driven by pressure instead of understanding.</p>
            <p>AI made this problem more visible. Powerful tools were being adopted without safeguards, context, or accountability. Software was moving faster than the thinking behind it.</p>
            <p className="text-slate-950 font-bold not-italic">Devixa exists to slow things down where it matters — so organizations can move faster with confidence.</p>
            <p>We don’t chase trends. We focus on fundamentals, clarity, and responsibility. That’s the kind of technology I believe in building.</p>
          </div>
          <div className="mt-12 text-center">
            <span className="h-px w-12 bg-slate-300 inline-block mb-4"></span>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-950">— Founder, Devixa</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TEAM & CULTURE */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8">Our Team</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
              Devixa is deliberately lean and engineer-led. We prioritize quality of thinking over size, and responsibility over hype.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {["Strong Fundamentals", "Clear Reasoning", "Ethical Technology", "Continuous Improvement"].map((v, i) => (
              <div key={i} className="space-y-2">
                <div className="h-1 w-4 bg-cyan-600"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-950">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CAREERS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 mb-8">Careers</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
            Devixa is built for engineers and technologists who care about how systems work — and why they matter. If you value clarity and responsibility, we’d like to hear from you.
          </p>
          <button className="text-[10px] font-black uppercase tracking-widest text-cyan-600 hover:text-slate-950 transition-colors border-b border-cyan-600 pb-1">
            View Opportunities or Get in Touch
          </button>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center bg-slate-950 text-white">
        <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">Designed for complexity. Built with intent.</h2>
        <p className="text-xs text-slate-400 mb-12 font-medium uppercase tracking-[0.2em]">Whether you’re early-stage or scaling fast, Devixa helps you build systems that last.</p>
        <button className="bg-cyan-600 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-slate-950 transition-all rounded-sm shadow-xl">
           Start a Conversation
        </button>
      </section>

    </div>
  );
};

export default Company;