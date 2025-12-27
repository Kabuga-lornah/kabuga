import { Link } from "react-router-dom";

/**
 * DEVIXA INSTITUTIONAL FOOTER
 * Designed to provide decision-first branding and clear technical pathways.
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-24 px-10 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        
        {/* Brand & Philosophy */}
        <div className="md:col-span-1">
          <div className="text-slate-950 font-black text-2xl mb-8 tracking-tighter uppercase">
            Devixa<span className="text-cyan-600">Group</span>
          </div>
          <p className="text-[10px] leading-relaxed max-w-xs font-bold uppercase tracking-widest text-slate-500 italic mb-8">
            "Software engineering consulting for SMEs and professional organizations. Results, not tutorials."
          </p>
          <p className="text-[11px] text-slate-900 font-black uppercase tracking-[0.2em] italic underline decoration-cyan-500 decoration-2">
            Software should be understood before it is built.
          </p>
        </div>

        {/* Strategic Domains */}
        <div>
          <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-10 underline decoration-cyan-500 underline-offset-8">
            Advisory Domains
          </h5>
          <ul className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li><Link to="/" className="hover:text-cyan-600 transition">Software Scoping</Link></li>
            <li><Link to="/about" className="hover:text-cyan-600 transition">Architecture Audits</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-600 transition">Decision Briefs</Link></li>
            <li><a href="#diagnostic" className="hover:text-cyan-600 transition">Project Diagnostic</a></li>
          </ul>
        </div>

        {/* Intelligence Tools */}
        <div>
          <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-10 underline decoration-cyan-500 underline-offset-8">
            Intelligence
          </h5>
          <ul className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li className="opacity-50 cursor-not-allowed">AI Advisor Lab</li>
            <li className="opacity-50 cursor-not-allowed">Risk Matrix v1.0</li>
            <li><Link to="/auth" className="hover:text-cyan-600 transition">Client Portal</Link></li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-10 underline decoration-cyan-500 underline-offset-8">
            Institutional
          </h5>
          <div className="flex flex-col gap-5 text-[11px] font-medium leading-relaxed uppercase tracking-widest">
            <p>Nairobi, Kenya</p>
            <p className="text-slate-950 font-bold">engineering@devixa.com</p>
            <p className="mt-6 pt-6 border-t border-slate-50 opacity-40 italic">
              © 2025 Devixa Systems Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;