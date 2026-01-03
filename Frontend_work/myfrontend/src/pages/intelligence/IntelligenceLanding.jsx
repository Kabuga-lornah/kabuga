import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Database, Cpu, HelpCircle } from "lucide-react";

/**
 * DEVIXA INTELLIGENCE LANDING PAGE
 * Locked production copy - Institutional & Senior positioning.
 */
const IntelligenceLanding = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const categories = [
    {
      title: "Software Systems",
      desc: "For web applications, mobile applications, internal platforms, and APIs.",
      focus: "This evaluation focuses on architectural structure, scalability risk, development velocity, and long-term maintainability.",
      icon: <Layers size={20} className="text-cyan-600" />
    },
    {
      title: "Data & Analytics Systems",
      desc: "For reporting pipelines, dashboards, analytics platforms, and data infrastructure.",
      focus: "This evaluation examines data quality, pipeline reliability, analytical maturity, and decision-making readiness.",
      icon: <Database size={20} className="text-cyan-600" />
    },
    {
      title: "AI & Automation Systems",
      desc: "For machine learning initiatives, intelligent automation, and AI-enabled workflows.",
      focus: "This evaluation assesses data foundations, model feasibility, operational risk, and sustainability of AI in production.",
      icon: <Cpu size={20} className="text-cyan-600" />
    },
    {
      title: "Early-Stage or Unsure",
      desc: "For founders or teams still shaping their technical direction.",
      focus: "This evaluation helps clarify what kind of system you are actually building — and what should come first.",
      icon: <HelpCircle size={20} className="text-cyan-600" />
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-cyan-100 pb-24">
      
      {/* 1. HERO — INSTITUTIONAL INTRO */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 block">
              Devixa Intelligence Suite
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-950 mb-8 leading-tight uppercase tracking-tight">
              A decision-support framework <br />
              <span className="text-slate-400 italic font-medium lowercase">for modern digital systems</span>
            </h1>
            <p className="text-xl font-bold text-slate-900 mb-6 italic">
              Most technology projects fail quietly.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Not because teams lack tools — but because foundational decisions are made without enough clarity. 
              Architecture is assumed. Data is improvised. Automation is forced too early. 
              AI is introduced without the conditions required for it to succeed.
            </p>
            <div className="mt-10 h-px w-20 bg-slate-200 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORE PROPOSITION */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div {...fadeInUp}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">What This Is</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-medium">
            <p>
              The Intelligence Suite is a guided diagnostic designed to evaluate the health, readiness, 
              and structural integrity of digital systems.
            </p>
            <p>
              It reflects how senior engineers and architects reason about systems in practice — 
              not how tools describe them in theory.
            </p>
            <ul className="space-y-2 pt-4">
              {["Architectural weaknesses that slow delivery", "Data limitations that constrain insight and automation", "Process gaps that create operational drag", "Areas where AI would add real value — and where it would not"].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-cyan-600 font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">What This Is Not</h2>
          <div className="space-y-4 text-sm text-slate-500 font-medium">
            <div className="flex flex-wrap gap-4 mb-6">
              {["Not a chatbot", "Not a sales quiz", "Not generic AI advice"].map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <p>
              The Intelligence Suite does not generate opinions. It evaluates conditions.
            </p>
            <p className="text-slate-900 italic font-bold">
              Every question is designed to map to a known engineering risk or leverage point, 
              and every result is grounded in applied systems thinking.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. PATH SELECTION */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-950">Choose Your Evaluation Path</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Different systems fail in different ways. The diagnostic adapts accordingly.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-white p-8 border border-slate-200 rounded-sm hover:border-cyan-600 transition-all flex flex-col h-full"
              >
                <div className="mb-6">{cat.icon}</div>
                <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-slate-950">{cat.title}</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-bold uppercase tracking-tight">{cat.desc}</p>
                <p className="text-[10px] text-slate-400 mt-auto leading-relaxed italic">{cat.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILS & OUTPUT */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div {...fadeInUp}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">How It Works</h2>
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-medium">
            <p>The diagnostic consists of a short sequence of structured questions.</p>
            <p>Each question corresponds to a specific system dimension — such as architecture, data flow, operational process, or automation potential.</p>
            <p className="text-slate-950 font-bold uppercase tracking-widest">No personal data collected. No signup required.</p>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">What You Receive</h2>
          <ul className="space-y-3 text-xs text-slate-600 font-bold uppercase tracking-tight">
            <li className="flex gap-3"><div className="h-1 w-1 bg-cyan-600 rounded-full mt-1.5" /> Identified risk areas limiting growth</li>
            <li className="flex gap-3"><div className="h-1 w-1 bg-cyan-600 rounded-full mt-1.5" /> Signals of readiness for automation or AI</li>
            <li className="flex gap-3"><div className="h-1 w-1 bg-cyan-600 rounded-full mt-1.5" /> Guidance on what to strengthen first</li>
          </ul>
        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 px-6 md:px-12 bg-slate-950 text-white text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Begin Your System Analysis</h2>
          <div className="flex justify-center gap-8 mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <span>Two minutes.</span>
            <span>No signup.</span>
            <span>Clear signal.</span>
          </div>
          
          <button 
            onClick={() => navigate("/intelligence/diagnostic")}
            className="relative group mx-auto"
          >
            <div className="absolute -inset-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-700 rounded-sm blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <span className="relative px-12 py-5 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm flex items-center gap-3">
              Begin Diagnostic <ArrowRight size={14} />
            </span>
          </button>

          <p className="mt-16 text-[9px] font-bold text-slate-500 uppercase tracking-[0.4em] italic">
            Generated using Devixa’s Intelligence Suite — applied engineering heuristics and system-level reasoning.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default IntelligenceLanding;