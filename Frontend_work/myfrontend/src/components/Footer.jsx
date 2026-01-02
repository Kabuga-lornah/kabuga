import { Link } from "react-router-dom";

/**
 * DEVIXA INSTITUTIONAL FOOTER
 * Designed for high-authority branding and disciplined technical pathways.
 */
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 py-20">
          
          {/* Brand & Philosophy */}
          <div className="lg:col-span-4">
            <div className="text-slate-950 font-black text-3xl mb-6 tracking-tight">
              Devixa<span className="text-cyan-600">Group</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 mb-8 font-medium">
              Software engineering consulting for SMEs and professional organizations. Outcomes over instruction.
            </p>
            <div className="relative pl-4 border-l-2 border-cyan-500">
              <p className="text-xs text-slate-900 font-bold uppercase tracking-wider italic">
                Software should be understood before it is built.
              </p>
            </div>
          </div>

          {/* Strategic Domains */}
          <div className="lg:col-span-3">
            <h5 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-cyan-500">
              Advisory Domains
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link to="/solutions/software" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-cyan-600 transition-colors"></span>
                  Software Scoping
                </Link>
              </li>
              <li>
                <Link to="/how-we-work/quality" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-cyan-600 transition-colors"></span>
                  Architecture Audits
                </Link>
              </li>
              <li>
                <Link to="/solutions/consulting" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-cyan-600 transition-colors"></span>
                  Decision Briefs
                </Link>
              </li>
              <li>
                <a href="#diagnostic" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-cyan-600 transition-colors"></span>
                  Project Diagnostic
                </a>
              </li>
            </ul>
          </div>

          {/* Intelligence Tools */}
          <div className="lg:col-span-2">
            <h5 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-cyan-500">
              Intelligence
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li className="text-sm text-slate-400 font-medium flex items-center">
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mr-3"></span>
                AI Advisor Lab
              </li>
              <li className="text-sm text-slate-400 font-medium flex items-center">
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mr-3"></span>
                Risk Matrix v1.0
              </li>
              <li>
                <Link to="/login" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-cyan-600 transition-colors"></span>
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Contact */}
          <div className="lg:col-span-3">
            <h5 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-6 pb-2 border-b-2 border-cyan-500">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-slate-500 leading-relaxed italic bg-slate-50 border-l-2 border-cyan-500 p-4 rounded-r">
                Engineering-led, vendor-neutral. Serving professional organizations globally from Nairobi.
              </p>
              <a href="mailto:engineering@devixa.com" className="text-sm font-semibold text-slate-900 hover:text-cyan-600 transition-colors">
                engineering@devixa.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 font-medium">
              © 2025 Devixa Systems Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;