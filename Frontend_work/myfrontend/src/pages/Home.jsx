import React from "react";

function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-cyan-100">
      
      {/* NAVIGATION PLACEHOLDER - For a truly official look */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-slate-900">
            CORE<span className="text-cyan-600">SYSTEMS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-cyan-600 transition">Services</a>
            <a href="#" className="hover:text-cyan-600 transition">Case Studies</a>
            <a href="#" className="hover:text-cyan-600 transition">About</a>
          </div>
          <button className="text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-sm hover:bg-slate-800 transition">
            Contact Us
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-400 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Enterprise Solutions 2024
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[1.1] max-w-4xl">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">future of digital</span> infrastructure.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
            We partner with growing enterprises to architect, build, and scale 
            mission-critical software and intelligent AI automation.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-cyan-600 text-white px-10 py-5 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-cyan-700 shadow-lg shadow-cyan-200 transition-all active:scale-95">
              Start a Project
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-slate-50 transition-all">
              View Portfolios
            </button>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-16 border-y border-slate-100 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", val: "150+" },
              { label: "System Uptime", val: "99.99%" },
              { label: "Global Clients", val: "40+" },
              { label: "Technical Support", val: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-bold text-slate-900">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-4">Expertise</h2>
              <h3 className="text-4xl font-bold text-slate-950">Specialized Engineering Services</h3>
            </div>
            <p className="text-slate-500 max-w-md text-lg">
              High-performance solutions designed for security, 
              longevity, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="group bg-white p-12 border border-slate-200 hover:border-cyan-500 transition-colors duration-500">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-8 group-hover:bg-cyan-50 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Software</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Tailored enterprise platforms and microservices architecture designed to solve complex business logic.
              </p>
            </div>

            <div className="group bg-white p-12 border border-slate-200 hover:border-cyan-500 transition-colors duration-500">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-8 group-hover:bg-cyan-50 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">AI & Intelligence</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Deploying LLMs, predictive analytics, and automated decision engines into existing production workflows.
              </p>
            </div>

            <div className="group bg-white p-12 border border-slate-200 hover:border-cyan-500 transition-colors duration-500">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-8 group-hover:bg-cyan-50 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Strategy</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Architecting resilient AWS/Azure environments with automated CI/CD and SOC2-compliant security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-12">Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Global E-Commerce Integration",
                impact: "300% revenue growth",
                desc: "Re-architected a legacy marketplace into a headless commerce engine."
              },
              {
                title: "AI Logistics Engine",
                impact: "50% cost reduction",
                desc: "ML-driven route optimization for a regional logistics fleet."
              },
              {
                title: "FinTech Gateway",
                impact: "1M+ Daily Transactions",
                desc: "High-throughput API infrastructure with sub-30ms latency."
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden rounded-sm relative">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mt-2">
                  {item.impact}
                </p>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your technical capabilities?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Our consultants are ready to audit your current infrastructure and 
            propose a roadmap for long-term technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all">
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all">
              Download Capabilities Statement
            </button>
          </div>
        </div>
        {/* Decorative circle for that "Enterprise" feel */}
        <div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full"></div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>© 2024 Core Systems Engineering Group. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;