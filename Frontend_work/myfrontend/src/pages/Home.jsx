import React, { useState, useEffect } from 'react';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  const mockProjects = [
    { id: 1, title: 'E-Commerce Platform', impact_metric: '300% Revenue Growth', description: 'Built a scalable marketplace connecting local artisans with global buyers, featuring AI-powered recommendations.' },
    { id: 2, title: 'Logistics Dashboard', impact_metric: '50% Cost Reduction', description: 'Real-time fleet tracking system with predictive maintenance and route optimization for delivery companies.' },
    { id: 3, title: 'FinTech API', impact_metric: '1M+ Transactions', description: 'Secure payment processing infrastructure handling millions of transactions with 99.99% uptime.' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1), transparent 40%)`,
  };

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none" style={gradientStyle} />
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <section className="relative py-32 px-6 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-6 inline-block">
            <span className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/20 animate-pulse">
              AI-First Development Studio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-slate-50 via-cyan-200 to-slate-50 bg-clip-text text-transparent animate-[gradient_8s_ease_infinite] bg-[length:200%_auto]">
            Build Software That Scales Beyond Tomorrow
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We architect <span className="text-cyan-400 font-semibold">intelligent systems</span> that evolve with your business—combining cutting-edge AI with battle-tested engineering.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button className="group relative bg-cyan-400 text-slate-950 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group border-2 border-cyan-400/30 text-cyan-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-sm">
              Explore Work
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 opacity-60">
            {['React', 'Python', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL'].map((tech, i) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg text-sm hover:border-cyan-400/50 transition-all cursor-default"
                style={{
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full p-1">
            <div className="w-1.5 h-2 bg-cyan-400 rounded-full mx-auto animate-[scroll_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      <section id="section-trust" className="py-24 bg-slate-950/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible['section-trust'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { number: '10+', label: 'Projects Delivered', icon: '🚀' },
                { number: '99.9%', label: 'Uptime Guaranteed', icon: '⚡' },
                { number: '24/7', label: 'Support Available', icon: '🛡️' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-6xl font-black text-transparent bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium text-lg">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="section-services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent">
              What We Build
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              End-to-end solutions engineered for performance, security, and scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Custom Software',
                desc: 'Bespoke applications designed around your workflows, not generic templates. Full-stack development from concept to deployment.',
                color: 'from-cyan-400 to-blue-500'
              },
              {
                icon: '🧠',
                title: 'AI Integration',
                desc: 'Harness LLMs, computer vision, and predictive analytics. Turn your data into competitive advantage with ML pipelines.',
                color: 'from-purple-400 to-pink-500'
              },
              {
                icon: '☁️',
                title: 'Cloud Architecture',
                desc: 'Scalable infrastructure on AWS, Azure, or GCP. CI/CD automation, containerization, and zero-downtime deployments.',
                color: 'from-emerald-400 to-teal-500'
              }
            ].map((service, i) => (
              <div 
                key={i}
                className={`group relative bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-transparent transition-all duration-500 ${
                  isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${i * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Case Studies
            </h2>
            <p className="text-slate-400 text-lg">Real impact. Real results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mockProjects.map((project, i) => (
              <div
                key={project.id}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-cyan-400 font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    {project.impact_metric}
                  </div>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span>View Case Study</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="inline-block border-2 border-slate-700 text-slate-300 px-10 py-4 rounded-xl font-bold hover:bg-slate-800 hover:border-cyan-400/50 transition-all group">
              View All Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Ready to Build Something <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Exceptional?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your vision. No commitment required—just a conversation about what's possible.
          </p>
          <button className="group inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-12 py-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/40 transition-all hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Schedule Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;