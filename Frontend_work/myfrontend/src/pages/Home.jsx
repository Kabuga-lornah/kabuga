import React, { useState, useEffect } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased">
      {/* 1. HERO SECTION — POSITIONING & AUTHORITY */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/city.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-cyan-700">
              Engineering & AI Advisory
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
              Engineering Software <br />
              & AI Systems <br />
              <span className="text-cyan-700">That Scale With Confidence.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Devixa is a software engineering and artificial intelligence
              consulting firm that designs, audits, and builds reliable digital
              systems for businesses that need technology to work — not fail. We
              help organizations move from unclear ideas to structured, scalable
              solutions by making the right technical decisions from the start.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/solutions/software"
                className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition"
              >
                Explore Software Engineering Solutions
              </a>
              <a
                href="/solutions/ai"
                className="border border-slate-300 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-slate-900 transition"
              >
                Explore AI & Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION — WHY DEVIXA EXISTS */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 border-t border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">
            Most software fails <span className="text-slate-400">before it breaks.</span>
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
            <p>
              Modern software fails not because teams lack tools, but because
              systems are built without clear architectural thinking. Features
              are rushed. AI is added without governance. Technical debt
              accumulates quietly until systems become expensive and fragile.
            </p>
            <p className="font-bold text-slate-900">
              Devixa exists to prevent this.
            </p>
            <p>
              We approach software as an engineered system — one that must remain
              secure, maintainable, and adaptable as a business grows. Every
              solution is grounded in structure, documentation, and long-term
              thinking, ensuring that what we build today does not become
              tomorrow’s liability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-cyan-700">Software Engineering</h3>
            <p className="text-slate-600 leading-relaxed">
              Devixa delivers production-grade software engineering across backend systems, 
              frontend applications, APIs, cloud infrastructure, and integrations. We design 
              architectures that support growth, reliability, and maintainability — not just initial delivery.
              <br /><br />
              Our focus is on systems that are easy to extend, test, and operate over time.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-cyan-700">AI & Intelligent Systems</h3>
            <p className="text-slate-600 leading-relaxed">
              We design artificial intelligence solutions that serve real business workflows. 
              This includes automation, data-driven decision systems, document intelligence, 
              and predictive logic — always with transparency, control, and human oversight.
              <br /><br />
              AI at Devixa is not experimentation. It is engineering.
            </p>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY — HOW YOU WORK */}
      <section className="py-32 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Decision-First <br />
                <span className="text-slate-400">Methodology.</span>
              </h2>
              <div className="space-y-6 text-slate-300 text-lg">
                <p>
                  Every engagement at Devixa follows a structured, decision-first methodology. 
                  Before writing code, we invest time in understanding the business logic, 
                  constraints, risks, and long-term goals behind a system.
                </p>
                <p>
                  We begin with discovery and system analysis, followed by architectural design and validation. 
                  Only once decisions are documented and aligned do we move into implementation. 
                  This ensures clarity, reduces rework, and protects clients from costly mistakes.
                </p>
                <p className="italic text-white">
                  Quality, security, and documentation are not add-ons — they are built into every stage of delivery.
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
               <ul className="space-y-8">
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-mono">01</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-sm">Discovery</h4>
                      <p className="text-sm text-slate-400">Deep analysis of logic and constraints.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-mono">02</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-sm">Architecture</h4>
                      <p className="text-sm text-slate-400">Validating the plan before execution.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-mono">03</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-sm">Implementation</h4>
                      <p className="text-sm text-slate-400">Engineering with precision and scale.</p>
                    </div>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER-LED & 6. PROOF */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-700 mb-8">Our Philosophy</h3>
        <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-12">
          "Devixa was founded to bring discipline, clarity, and foresight back into software development. 
          Good software is not defined by speed alone. It is defined by the quality of decisions made 
          before the first line of code is written."
        </p>
        <div className="h-px w-24 bg-slate-200 mx-auto mb-12"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We focus on eliminating operational friction and enabling teams to scale confidently. 
          Whether designing infrastructure or introducing AI pipelines, our work prioritizes 
          precision, accountability, and measurable outcomes.
        </p>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl font-black">Who We Serve.</h2>
          <p className="text-slate-600">
            Devixa works with startups, SMEs, and professional organizations across industries 
            where reliability and efficiency matter most. Rather than offering one-size-fits-all 
            solutions, we adapt our engineering approach to the operational realities of each sector.
          </p>
        </div>
      </section>

      {/* 8. FINAL CTA — CONVERSION */}
      <section className="py-40 px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-10">
          Build with <br />
          <span className="text-cyan-700">Decision Confidence.</span>
        </h2>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          If you are building or improving a digital system and need clarity before committing 
          resources, Devixa can help.
        </p>

        <button className="bg-slate-900 text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition">
          Book a Software & AI Consultation
        </button>

        <p className="mt-6 text-sm text-slate-500 italic">
          High-integrity engineering for businesses that value long-term stability.
        </p>
      </section>
    </div>
  );
};

export default Home;