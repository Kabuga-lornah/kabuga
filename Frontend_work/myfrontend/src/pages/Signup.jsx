import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });
            localStorage.setItem('token', response.data.token);
            alert("Account created successfully!");
            navigate('/');
        } catch (error) {
            alert(error.response?.data?.error || "Registration failed. Try a different username.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-md w-full space-y-8 bg-white p-10 border-2 border-slate-900 shadow-[20px_20px_0px_0px_rgba(241,245,249,1)] relative z-10">
                <div className="text-center">
                    <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">
                        Create <span className="text-cyan-600">Account</span>
                    </h2>
                    <p className="mt-4 text-xs font-medium italic text-slate-400">
                        Join Devixa for expert software engineering.
                    </p>
                </div>

                <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <input
                                type="text"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="USERNAME"
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="EMAIL ADDRESS"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="password"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="PASSWORD"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                            <input
                                type="password"
                                required
                                className="appearance-none relative block w-full px-4 py-4 border-2 border-slate-100 placeholder-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-0 sm:text-xs font-bold transition-all duration-300"
                                placeholder="CONFIRM"
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-5 px-4 bg-cyan-600 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-slate-950 transition-all duration-500 shadow-xl shadow-cyan-100 hover:shadow-slate-200 hover:-translate-y-1"
                        >
                            Initialize Account
                        </button>
                    </div>
                </form>

                <div className="text-center pt-4 border-t border-slate-50">
                    <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-600 transition-colors">
                        Already Registered? <span className="underline underline-offset-4 decoration-cyan-600">Log In Here</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;