import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
    setIsMenuOpen(false);
    navigate("/login");
  };

  const navItems = [
    {
      label: "SOLUTIONS", // Fixed to uppercase
      tagline: "Custom engineering tailored to your business goals.",
      dropdown: [
        { title: "Software Engineering", path: "/solutions/software", description: "Custom development and technical architecture for scalable systems" },
        { title: "AI & Automation", path: "/solutions/ai", description: "Intelligent automation and machine learning implementations" },
        { title: "Data & Analytics", path: "/solutions/data", description: "Transform data into actionable insights and competitive advantage" },
        { title: "Technical Consulting", path: "/solutions/consulting", description: "Strategic guidance from senior engineers and architects" },
      ],
    },
    {
      label: "METHODOLOGY", // Fixed to uppercase
      tagline: "How we ensure quality and speed in every sprint.",
      dropdown: [
        { title: "Our Process", path: "/how-we-work/process", description: "Agile, transparent, and decision-first engineering" },
        { title: "Decision-First Approach", path: "/how-we-work/approach", description: "Every solution starts with understanding your business needs" },
        { title: "Quality & Security", path: "/how-we-work/quality", description: "Enterprise-grade standards across all deliverables" },
      ],
    },
    { label: "INDUSTRIES", path: "/industries", tagline: "Deep expertise in specialized market sectors." }, // Fixed to uppercase
    { label: "COMPANY", path: "/company" }, // Fixed to uppercase
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 lg:px-10 h-20 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          
          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl z-[60] flex items-center px-6 lg:px-10 animate-in fade-in duration-200">
              <input
                autoFocus
                type="text"
                placeholder="SEARCH ENGINEERING SOLUTIONS..."
                className="w-full bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-[0.3em] text-slate-950 placeholder:text-slate-400 focus:ring-0"
              />
              <button onClick={() => setIsSearchOpen(false)} className="ml-4 hover:bg-slate-50 p-2 rounded-full text-cyan-600">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          )}

          {/* Logo */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black tracking-tighter text-slate-950 uppercase hover:text-cyan-600 transition-colors duration-300 relative z-[70]">
            Devixa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-20 flex items-center"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link to={item.path} className="hover:text-cyan-600 transition-all duration-300 h-full flex items-center">{item.label}</Link>
                ) : (
                  <button className={`hover:text-cyan-600 transition-all duration-300 h-full flex items-center ${activeDropdown === item.label ? "text-cyan-600" : ""}`}>
                    {item.label}
                    {activeDropdown === item.label && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-600 animate-in fade-in slide-in-from-bottom-1" />}
                  </button>
                )}
              </div>
            ))}

            {/* Intelligence Button with Persistent Glowing Border */}
            <Link to="/intelligence" className="relative group ml-2">
              <div className="absolute -inset-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-700 rounded-sm blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-5 py-2.5 bg-white text-slate-950 text-[9px] font-black uppercase tracking-[0.3em] rounded-sm flex items-center justify-center">
                INTELLIGENCE
              </button>
            </Link>
          </div>

          {/* Right Actions (Redesigned Search & Auth) */}
          <div className="flex items-center gap-1 lg:gap-2">
            {/* Search Icon - Refined Styling */}
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="text-slate-400 hover:text-cyan-600 p-2.5 border border-transparent hover:border-slate-100 rounded-lg transition-all"
              title="Search"
            >
              <MagnifyingGlassIcon className="h-4.5 w-4.5" />
            </button>

            {/* Profile/Auth Icon - Refined Styling */}
            <Link 
              to={token ? "/profile" : "/login"} 
              className="text-slate-400 hover:text-cyan-600 p-2.5 border border-transparent hover:border-slate-100 rounded-lg transition-all hidden lg:block"
              title={token ? "My Profile" : "Login"}
            >
              <UserIcon className="h-4.5 w-4.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-950 p-2 relative z-[70]">
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            <Link to="/contact" className="hidden sm:block ml-3">
              <button className="bg-slate-950 text-white px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all rounded-sm shadow-lg">
                CONSULT AN ENGINEER
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[65] lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="pt-28 px-8 pb-10 h-full overflow-y-auto">
          <div className="flex flex-col gap-8">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-50 pb-6">
                {item.path ? (
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest text-slate-950">{item.label}</Link>
                ) : (
                  <>
                    <h3 className="text-xl font-black uppercase tracking-widest text-slate-950 mb-4">{item.label}</h3>
                    <div className="grid gap-4 pl-4 border-l-2 border-cyan-600">
                      {item.dropdown?.map((sub) => (
                        <Link key={sub.path} to={sub.path} onClick={() => setIsMenuOpen(false)} className="block">
                          <span className="text-sm font-bold text-slate-700 block">{sub.title}</span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider">{sub.description}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            
            <div className="border-b border-slate-50 pb-6">
               <Link to="/intelligence" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest text-cyan-600">INTELLIGENCE SUITE</Link>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {!token ? (
                <div className="flex gap-4">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex-1 text-center py-4 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-950">LOGIN</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="flex-1 text-center py-4 bg-cyan-600 text-[10px] font-black uppercase tracking-widest text-white">SIGN UP</Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-950">MY PROFILE</Link>
                  <button onClick={handleLogout} className="w-full text-center py-4 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-red-600">LOGOUT</button>
                </div>
              )}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="sm:hidden">
                <button className="w-full bg-slate-950 text-white py-5 text-[10px] font-black uppercase tracking-[0.2em]">CONSULT AN ENGINEER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      <div className={`hidden lg:block fixed top-20 left-0 w-full bg-white border-b border-slate-100 shadow-2xl z-40 transition-all duration-300 ${activeDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
           onMouseEnter={() => setActiveDropdown(activeDropdown)}
           onMouseLeave={() => setActiveDropdown(null)}>
        <div className="max-w-7xl mx-auto px-10 py-16">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-3 border-l-2 border-cyan-600 pl-8">
              <h3 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-6">{activeDropdown}</h3>
              <p className="text-xs text-slate-400 leading-relaxed italic font-medium">
                {navItems.find((n) => n.label === activeDropdown)?.tagline}
              </p>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-x-12 gap-y-8">
              {navItems.find((item) => item.label === activeDropdown)?.dropdown?.map((subItem) => (
                <Link key={subItem.title} to={subItem.path} className="group block">
                  <h4 className="text-[10px] font-black text-slate-950 mb-2 group-hover:text-cyan-600 transition-colors uppercase tracking-widest">{subItem.title}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">{subItem.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;