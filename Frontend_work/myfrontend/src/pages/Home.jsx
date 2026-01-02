import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ChevronRight, 
  Search,
  CheckCircle2,
  ArrowUpRight,
  ShieldAlert,
  Target
} from "lucide-react";

/**
 * DEVIXA FINAL POSITIONING - RESTRAINED SCALE
 * Updated to include the ai-face.mp4 visual anchor in the Core Domains section with original colors.
 */
const Home = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-200">
      
      {/* 1. HERO SECTION — REFINED POSITIONING & RESTRAINT */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-100 blur-[120px] rounded-full opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 blur-[120px] rounded-full opacity-40" />
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-[0.03] grayscale">
            <source src="/city.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 flex flex-col items-center text-center">
          <motion.div {...fadeInUp} className="max-w-4xl flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-slate-900"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">
                Devixa Systems Group • Engineering & AI Advisory
              </span>
              <span className="h-px w-10 bg-slate-900"></span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 tracking-tight text-slate-950">
              Engineering Software <br />
              & AI Systems <span className="text-slate-400 font-medium italic">Built for Long-Term Confidence.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Devixa is a software engineering and artificial intelligence firm focused on helping organizations 
                make correct technical decisions before complexity sets in. We design and build systems that 
                remain reliable as teams, data, and expectations grow.
              </p>
              
              <div className="space-y-4 text-xs text-slate-500 leading-relaxed border-l border-slate-900 pl-6 bg-slate-50/50 p-5 rounded-r-xl border border-slate-100 shadow-sm text-left">
                <p>
                  Modern software systems fail quietly — not at launch, but over time. 
                  Architecture is rushed. AI is introduced without governance. 
                  Technical debt accumulates unnoticed.
                </p>
                <p className="font-bold text-slate-900 italic">
                  Devixa exists to prevent that.
                </p>
              </div>
            </div>

            <div className="mb-8 text-[9px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-3">
              <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
              Built with production standards. Designed for systems that outlive MVPs.
              <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center">
              <Link to="/solutions/software">
                <motion.button 
                  whileHover={{ y: -2 }}
                  className="bg-slate-900 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-4 shadow-xl shadow-slate-200"
                >
                  Explore Software Engineering <ChevronRight size={14} />
                </motion.button>
              </Link>
              
              <Link 
                to="/solutions/ai" 
                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900 transition-all"
              >
                AI & Intelligent Systems
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY DEVIXA SECTION — EXECUTIVE CLARITY */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <motion.div variants={fadeInUp} className="md:col-span-8 bg-slate-50 border border-slate-100 p-10 rounded-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-slate-950 italic">Technology should reduce uncertainty — not create it.</h2>
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Too many organizations invest in software only to discover that their systems are difficult to maintain, 
                  expensive to scale, or unable to support changing business needs. These issues emerge 
                  months or years later, when fixing them becomes costly and disruptive.
                </p>
                <p>
                  We help teams slow down at the right moments — to think, design, and validate — so that execution 
                  is faster, cleaner, and more reliable in the long run.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-4 bg-cyan-700 p-10 rounded-2xl flex flex-col justify-between text-white shadow-xl shadow-cyan-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Target size={100} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-8">
                <ShieldAlert size={20} />
              </div>
              <p className="font-bold text-xl leading-snug relative z-10">
                "Our role is to ensure that what is built aligns with real operational needs and long-term objectives."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE DOMAINS — WITH AI VIDEO VISUAL (ORIGINAL COLOR) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="group">
            <div className="bg-slate-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm text-slate-900">
              <Layers size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Software Engineering</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
              Devixa delivers production-grade software engineering across backend systems, frontend applications, 
              APIs, and cloud infrastructure. We prioritize readability and modularity 
              so that software remains adaptable long after deployment.
            </p>
            <div className="flex gap-3 text-[8px] font-black uppercase tracking-[0.2em] text-slate-600 bg-slate-100/60 p-3 rounded-lg w-fit border border-slate-200/50">
              <span>Readability</span>
              <span className="opacity-30">/</span>
              <span>Modularity</span>
              <span className="opacity-30">/</span>
              <span>Peer Review</span>
            </div>
          </motion.div>

          {/* AI Section with Original Color Video Anchor */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group space-y-8">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-slate-200">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-all duration-700"
              >
                <source src="/ai-face.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-100 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm text-slate-900">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight">AI & Intelligent Systems</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Artificial intelligence should serve a purpose beyond novelty. We design AI systems that 
                integrate into business workflows — intelligent automation, data-driven decision systems, 
                and predictive logic tailored to real operational constraints.
              </p>
              <div className="flex gap-3 text-[8px] font-black uppercase tracking-[0.2em] text-slate-600 bg-slate-100/60 p-3 rounded-lg w-fit border border-slate-200/50">
                <span>Transparency</span>
                <span className="opacity-30">/</span>
                <span>Governance</span>
                <span className="opacity-30">/</span>
                <span>Utility</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. METHODOLOGY — SHARED CLARITY */}
      <section className="py-20 px-6 md:px-12 bg-slate-900 text-white rounded-[2rem] mx-4 md:mx-10 my-10 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 tracking-tight text-white">
                Decision-First <br />
                <span className="text-slate-500 italic font-medium">Methodology.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed">
                <p>
                  Every engagement follows a structured methodology. Before writing code, we invest time in 
                  understanding the problem space — analyzing business logic, operational workflows, and 
                  future growth considerations.
                </p>
                <p className="text-slate-300 font-medium italic">
                  This approach reduces rework, prevents architectural drift, and creates shared clarity 
                  between business and technical teams.
                </p>
                <div className="border-l-4 border-cyan-500 pl-6 py-2 text-white text-xl md:text-2xl font-bold tracking-tight">
                  "Execution is faster when decisions are validated early."
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                { title: "Analysis", desc: "Understanding the problem space and business logic." },
                { title: "Validation", desc: "Defining clear architectural directions before development." },
                { title: "Implementation", desc: "Structured delivery guided by quality standards." }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all border-l-4 hover:border-l-cyan-500 group"
                >
                  <h4 className="text-base font-bold flex items-center gap-4">
                    <span className="text-slate-500 group-hover:text-cyan-500 font-mono text-xs tracking-widest transition-colors uppercase">STEP 0{i+1}</span> {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY & FOUNDER'S NOTE — PURE RESTRAINT */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp} className="mb-20">
          <div className="inline-flex items-center gap-3 text-slate-900 font-black text-[9px] uppercase tracking-[0.4em] mb-10 bg-slate-100 px-5 py-2 rounded-full border border-slate-200">
            <ShieldCheck size={14} className="text-cyan-700" /> Quality is not negotiable
          </div>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
            Devixa applies enterprise-grade standards across all deliverables. Our approach treats AI 
            as part of a broader system — engineered with the same discipline and security standards 
            as any critical software component.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="border-t border-slate-100 pt-20">
          <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-400 mb-8">Founder's Note</h3>
          <p className="text-2xl md:text-3xl font-bold text-slate-950 leading-tight italic mb-8 tracking-tight max-w-3xl mx-auto">
            "Good software begins with good decisions. The goal is not to build fast at all costs, 
            but to build correctly — with systems that teams can rely on as they grow."
          </p>
          <div className="h-1 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* 6. FINAL CTA — TECHNICAL REVIEW */}
      <section className="py-32 px-6 md:px-12 text-center bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-200/40 blur-[150px] -z-10" />
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight text-slate-950">
            Build With <br />
            <span className="text-slate-900/40 italic">Decision Confidence.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            If you are planning a new system, improving an existing platform, or exploring the responsible 
            use of AI, Devixa is open for consultation.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-950 text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-800 transition-all flex items-center gap-4 mx-auto shadow-2xl shadow-slate-300 rounded-sm"
          >
            Start a Technical Review <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;