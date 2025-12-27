import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

  const expertiseList = [
    { title: "Software Engineering", path: "/services/software" },
    { title: "Data Science", path: "/services/data-science" },
    { title: "Machine Learning", path: "/services/ml" },
    { title: "DevOps & Cloud", path: "/services/devops" },
    { title: "System Audits", path: "/services/audits" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 px-10 h-20 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-950 uppercase group">
          Devixa<span className="text-cyan-600 group-hover:text-slate-950 transition-colors">Group</span>
        </Link>
        
        <div className="hidden lg:flex gap-10 items-center text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
          <div 
            className="relative h-full py-4"
            onMouseEnter={() => setIsExpertiseOpen(true)}
            onMouseLeave={() => setIsExpertiseOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-cyan-600 transition cursor-pointer outline-none">
              Our Expertise
              <svg className={`w-3 h-3 transition-transform ${isExpertiseOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isExpertiseOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl py-6 animate-in fade-in slide-in-from-top-2">
                {expertiseList.map((s) => (
                  <Link key={s.title} to={s.path} className="block px-8 py-3 text-slate-400 hover:bg-slate-50 hover:text-cyan-600 transition tracking-widest border-l-2 border-transparent hover:border-cyan-600">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-cyan-600 transition">How We Think</Link>
          <Link to="/contact" className="hover:text-cyan-600 transition">Consultation</Link>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/login" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-950 transition">Sign In</Link>
          <Link to="/signup">
            <button className="bg-slate-950 text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all cursor-pointer shadow-lg">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;