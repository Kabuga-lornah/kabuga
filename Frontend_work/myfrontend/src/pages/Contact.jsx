function Contact() {
  return (
    <div className="min-h-[80vh] py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-4 text-center">Inquiry</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8 text-center">Start a Consultation</h1>
        <p className="text-slate-600 text-center mb-12 text-lg">
          Tell us about your technical challenges. Our team will get back to you within 24 hours.
        </p>

        <form className="space-y-6 bg-slate-50 p-8 md:p-12 border border-slate-100 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
              <input type="email" placeholder="john@enterprise.com" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Service Interest</label>
            <select className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition appearance-none">
              <option>Custom Software Development</option>
              <option>AI Automation & LLM Integration</option>
              <option>Cloud Infrastructure Strategy</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Project Brief</label>
            <textarea placeholder="Describe your AI needs or technical roadmap..." rows="5" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition"></textarea>
          </div>

          <button className="w-full bg-cyan-600 text-white py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100 cursor-pointer">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;