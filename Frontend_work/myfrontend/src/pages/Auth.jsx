function Auth() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 p-10 rounded-sm shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-950">Client Dashboard</h1>
          <p className="text-slate-500 text-sm mt-2">Access your project history and AI insights.</p>
        </div>
        
        <div className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition" />
          <input type="password" placeholder="Password" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition" />
          
          <button className="w-full bg-slate-900 text-white py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition cursor-pointer">
            Sign In
          </button>
          
          <div className="text-center pt-4">
            <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">New Client?</span>
            <button className="block w-full mt-2 text-cyan-600 font-bold text-sm hover:text-cyan-700 transition underline">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;