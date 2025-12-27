import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Glass morphism card */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 p-8 md:p-12 shadow-2xl rounded-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-br from-cyan-600 to-slate-800 rounded-xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-950 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest italic">
              Access your secure dashboard
            </p>
          </div>
          
          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Work Email Address
              </label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="name@enterprise.com" 
                  className="w-full border border-slate-200 pl-12 pr-4 py-4 text-sm rounded-xl focus:outline-none focus:border-cyan-500 transition-all bg-slate-50/50 hover:border-slate-300" 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Password
                </label>
                <a href="#" className="text-[10px] font-bold text-cyan-600 hover:text-slate-950 transition-colors uppercase tracking-widest">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full border border-slate-200 pl-12 pr-4 py-4 text-sm rounded-xl focus:outline-none focus:border-cyan-500 transition-all bg-slate-50/50 hover:border-slate-300" 
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500 transition-all cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer">
                Remember session
              </label>
            </div>
            
            <button 
              type="button"
              className="w-full bg-slate-950 text-white py-5 text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-600 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-4 cursor-pointer"
            >
              Sign In Securely
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
              <span className="bg-white px-4 text-slate-300 font-bold">Identity provider</span>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-slate-100 rounded-xl py-3.5 hover:bg-white hover:border-cyan-200 transition-all cursor-pointer shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-100 rounded-xl py-3.5 hover:bg-white hover:border-cyan-200 transition-all cursor-pointer shadow-sm">
              <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Facebook</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center border-t border-slate-50 pt-8">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              New to our platform?{' '}
              <Link 
                to="/signup" 
                className="text-cyan-600 hover:text-slate-950 underline transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-8 text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center justify-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secured via 256-bit AES encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;