import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  const navItems = [
    {
      label: "Solutions",
      tagline: "Custom engineering tailored to your business goals.",
      dropdown: [
        {
          title: "Software Engineering",
          path: "/solutions/software",
          description:
            "Custom development and technical architecture for scalable systems",
        },
        {
          title: "AI & Automation",
          path: "/solutions/ai",
          description:
            "Intelligent automation and machine learning implementations",
        },
        {
          title: "Data & Analytics",
          path: "/solutions/data",
          description:
            "Transform data into actionable insights and competitive advantage",
        },
        {
          title: "Technical Consulting",
          path: "/solutions/consulting",
          description:
            "Strategic guidance from senior engineers and architects",
        },
      ],
    },
    {
      label: "Methodology",
      tagline: "How we ensure quality and speed in every sprint.",
      dropdown: [
        {
          title: "Our Process",
          path: "/how-we-work/process",
          description: "Agile, transparent, and decision-first engineering",
        },
        {
          title: "Decision-First Approach",
          path: "/how-we-work/approach",
          description:
            "Every solution starts with understanding your business needs",
        },
        {
          title: "Quality & Security",
          path: "/how-we-work/quality",
          description: "Enterprise-grade standards across all deliverables",
        },
      ],
    },
    {
      label: "Industries",
      path: "/industries",
      tagline: "Deep expertise in specialized market sectors.",
    },

    {
      label: "Company",
      path: "/company",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 lg:px-10 h-20 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {isSearchOpen && (
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl z-50 flex items-center px-6 lg:px-10 animate-in fade-in duration-200">
              <input
                autoFocus
                type="text"
                placeholder="SEARCH ENGINEERING SOLUTIONS..."
                className="w-full bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-[0.3em] text-slate-950 placeholder:text-slate-400 focus:ring-0"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 hover:bg-slate-50 p-2 rounded-full transition-colors duration-200 text-cyan-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          )}

          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-slate-950 uppercase hover:text-cyan-600 transition-colors duration-300"
          >
            Devixa
          </Link>

          <div className="hidden lg:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-20 flex items-center"
                // Only trigger dropdown states if the item actually has a dropdown
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Logic: If item.path exists, render a Link. Otherwise, render a Button. */}
                {item.path ? (
                  <Link
                    to={item.path}
                    className="relative hover:text-cyan-600 transition-all duration-300 cursor-pointer outline-none h-full flex items-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`relative hover:text-cyan-600 transition-all duration-300 cursor-pointer outline-none h-full flex items-center ${
                      activeDropdown === item.label ? "text-cyan-600" : ""
                    }`}
                  >
                    {item.label}
                    {activeDropdown === item.label && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-600 animate-in fade-in slide-in-from-bottom-1 duration-300" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-400 hover:text-cyan-600 p-2 transition-all duration-200"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            <div className="relative group flex items-center h-20">
              <button className="text-slate-400 hover:text-cyan-600 p-2 transition-all duration-200">
                <UserIcon className="h-5 w-5" />
              </button>

              <div className="absolute top-20 right-0 w-48 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="bg-white border border-slate-100 shadow-2xl rounded-sm overflow-hidden">
                  {!token ? (
                    <>
                      <Link
                        to="/login"
                        className="block px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-cyan-600 border-t border-slate-50 transition-colors"
                      >
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/profile"
                        className="block px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-cyan-600 border-t border-slate-50 transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Link to="/contact" className="ml-2">
              <button className="bg-slate-950 text-white px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all duration-300 cursor-pointer rounded-sm shadow-lg shadow-slate-200 hover:shadow-cyan-600/20 hover:-translate-y-0.5">
                Consult an Engineer
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mega Menu Panel - Only shows if activeDropdown is truthy */}
      {activeDropdown && (
        <div
          className="fixed top-20 left-0 w-full bg-white border-b border-slate-100 shadow-2xl z-40 animate-in fade-in slide-in-from-top-2 duration-500 ease-out"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-10 py-16">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-3 border-l-2 border-cyan-600 pl-8">
                <h3 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-6">
                  {activeDropdown}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed italic font-medium">
                  {navItems.find((n) => n.label === activeDropdown)?.tagline}
                </p>
              </div>
              <div className="col-span-9 grid grid-cols-3 gap-x-12 gap-y-8">
                {navItems
                  .find((item) => item.label === activeDropdown)
                  ?.dropdown?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="group block transition-all duration-300"
                    >
                      <h4 className="text-[10px] font-black text-slate-950 mb-2 group-hover:text-cyan-600 transition-colors uppercase tracking-widest">
                        {subItem.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
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
