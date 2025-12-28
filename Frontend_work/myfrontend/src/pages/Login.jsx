import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', formData);
            localStorage.setItem('token', response.data.token);
            alert("Login Successful!");
            navigate('/');
        } catch (error) {
            alert("Invalid username or password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Branding Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-md w-full space-y-8 bg-white p-10 border-2 border-slate-100 shadow-2xl relative z-10">
                <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-6">
                        Engineering Access
                    </div>
                    <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">
                        Welcome Back
                    </h2>
                    <p className="mt-4 text-xs font-medium italic text-slate-400">
                        Authorize to manage your technical consultations.
                    </p>
                </div>

                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Username</label>
                            <input
                                type="text"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="ENTER USERNAME"
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Password</label>
                            <input
                                type="password"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="••••••••"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-5 px-4 bg-slate-950 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-cyan-600 transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-cyan-600/20 hover:-translate-y-1"
                        >
                            Log In System
                        </button>
                    </div>
                </form>

                <div className="text-center pt-4 border-t border-slate-50">
                    <Link to="/signup" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-600 transition-colors">
                        No Account? <span className="underline underline-offset-4 decoration-cyan-600">Request Access</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;