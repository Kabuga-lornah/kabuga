import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 p-12 shadow-sm rounded-sm">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-950">Get Started</h2>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mt-2 italic">Initialize your technical partnership</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
             <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full border border-slate-200 p-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50/30" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full border border-slate-200 p-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50/30" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="w-full border border-slate-200 p-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50/30" />
            </div>
          </div>
          
          <button className="w-full bg-cyan-600 text-white py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 cursor-pointer">
            Create Account
          </button>
        </form>

        <div className="mt-10 text-center border-t border-slate-100 pt-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Already registered? <Link to="/login" className="text-cyan-600 hover:text-slate-950 underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;