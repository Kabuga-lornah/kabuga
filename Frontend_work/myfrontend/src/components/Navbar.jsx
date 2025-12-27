import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: "Solutions",
      tagline: "Custom engineering tailored to your business goals.",
      dropdown: [
        { title: "Software Engineering", path: "/solutions/software", description: "Custom development and technical architecture for scalable systems" },
        { title: "AI & Automation", path: "/solutions/ai", description: "Intelligent automation and machine learning implementations" },
        { title: "Data & Analytics", path: "/solutions/data", description: "Transform data into actionable insights and competitive advantage" },
        { title: "Technical Consulting", path: "/solutions/consulting", description: "Strategic guidance from senior engineers and architects" },
      ]
    },
    {
      label: "Methodology",
      tagline: "How we ensure quality and speed in every sprint.",
      dropdown: [
        { title: "Our Process", path: "/how-we-work/process", description: "Agile, transparent, and decision-first engineering" },
        { title: "Decision-First Approach", path: "/how-we-work/approach", description: "Every solution starts with understanding your business needs" },
        { title: "Quality & Security", path: "/how-we-work/quality", description: "Enterprise-grade standards across all deliverables" },
      ]
    },
    {
      label: "Industries",
      tagline: "Deep expertise in specialized market sectors.",
      dropdown: [
        { title: "SMEs & Startups", path: "/industries/startups", description: "Rapid development and MVP delivery for growing companies" },
        { title: "Professional Services", path: "/industries/services", description: "Workflow automation and client management systems" },
        { title: "FinTech", path: "/industries/fintech", description: "Secure, compliant financial technology solutions" },
        { title: "Logistics & Operations", path: "/industries/logistics", description: "Optimization and real-time tracking systems" },
      ]
    },
    {
      label: "Insights",
      tagline: "Perspectives on the future of technology.",
      dropdown: [
        { title: "Blog / Articles", path: "/insights/blog", description: "Technical deep-dives and engineering perspectives" },
        { title: "Case Examples", path: "/insights/cases", description: "Real client outcomes and project breakdowns" },
        { title: "AI & Engineering Insights", path: "/insights/ai", description: "Cutting-edge developments in software and AI" },
      ]
    },
    {
      label: "Company",
      tagline: "The team behind the technology.",
      dropdown: [
        { title: "About Devixa", path: "/about", description: "Our mission, team, and approach to engineering" },
        { title: "Mission & Values", path: "/company/mission", description: "What drives us and how we work with clients" },
        { title: "Careers", path: "/company/careers", description: "Join our team of world-class engineers" },
      ]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 px-6 lg:px-10 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-950 uppercase">
            Devixa Engineering
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            {navItems.map((item, idx) => (
              <div 
                key={idx}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onFocus={() => setActiveDropdown(item.label)}
                  onBlur={() => setActiveDropdown(null)}
                  className={`relative hover:text-slate-950 transition cursor-pointer outline-none h-full flex items-center ${activeDropdown === item.label ? 'text-slate-950' : ''}`}
                >
                  {item.label}
                  {/* Visual Anchor / Indicator */}
                  {activeDropdown === item.label && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-950 animate-in fade-in zoom-in-x duration-300" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link to="/contact">
              <button className="bg-slate-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all cursor-pointer rounded-sm shadow-md">
                Talk to an Engineer
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mega Menu Panel */}
      {activeDropdown && (
        <div 
          className="fixed top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-300 ease-out"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-10 py-12">
            <div className="grid grid-cols-5 gap-12">
              
              {/* Left Column: Context (Stripe-style) */}
              <div className="col-span-1 border-r border-slate-100 pr-8">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {activeDropdown}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {navItems.find(n => n.label === activeDropdown)?.tagline}
                </p>
              </div>

              {/* Right Columns: Links */}
              <div className="col-span-4 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {navItems
                  .find(item => item.label === activeDropdown)
                  ?.dropdown.map((subItem, i) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="group block p-4 rounded-lg hover:bg-slate-50 transition-all duration-200"
                    >
                      <h4 className="text-[11px] font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                        {subItem.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug font-normal normal-case tracking-normal">
                        {subItem.description}
                      </p>
                    </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;