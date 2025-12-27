function About() {
  return (
    <div className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-4">Our Mission</h2>
        <h1 className="text-5xl font-bold text-slate-950 mb-8 leading-tight">
          Bridging the gap between <span className="text-cyan-600">traditional software</span> and AI transformation.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <p className="text-slate-600 text-lg leading-relaxed">
            Founded in 2024, Core Systems focuses on building resilient infrastructure for the next generation of business. We don't just build apps; we engineer systems that learn and adapt.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our team specializes in the African tech landscape, specifically focusing on how Kenyan businesses can leverage AI to reduce manual workloads by up to 40%.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;