import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import loginHero from '../../assets/Layout/Rectangle1.png'; // Using your hero image
import { auth } from '../../firebase/Firebase.config'; 
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        // 1. Firebase Login Logic
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Logged in user:", userCredential.user);
                navigate("/"); // Redirect to home after successful login
            })
            .catch((err) => {
                // Common errors: "auth/invalid-credential" or "auth/user-not-found"
                setError("Invalid email or password. Please try again.");
                console.error(err.message);
            });
    };

    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Login</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Login</span></p>
                </div>
            </div>

            {/* 2. Login Form Section */}
            <div className="container mx-auto px-4 py-24 flex justify-center">
                <div className="w-full max-w-[500px] border border-[#9F9F9F]/30 rounded-lg p-8 lg:p-12 shadow-sm">
                    <h2 className="text-4xl font-bold text-black mb-10 text-center">Welcome Back</h2>
                    
                    {/* Error Display */}
                    {error && (
                        <div className="bg-red-50 border border-red-400 text-red-600 px-4 py-2 rounded mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-black font-semibold mb-3">Email address</label>
                            <input 
                                name="email" 
                                type="email" 
                                required
                                placeholder="Abc@gmail.com"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-black font-semibold mb-3">Password</label>
                            <input 
                                name="password" 
                                type="password" 
                                required
                                placeholder="Enter your password"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="w-4 h-4 accent-[#B88E2F]" />
                                <label htmlFor="remember" className="text-sm">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-[#B88E2F] hover:underline">Forgot Password?</a>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-[#B88E2F] text-white py-4 rounded-lg font-semibold hover:bg-[#a47e2a] transition-all shadow-md">
                                Log In
                            </button>
                        </div>

                        <p className="text-center text-black font-light mt-6">
                            New to Furniro? <Link to="/signup" className="text-[#B88E2F] font-semibold hover:underline">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* 3. Features Footer (Reused) */}
            <div className="bg-[#FAF3EA] py-24 px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <Trophy size={40} />, title: "High Quality", desc: "crafted from top materials" },
                    { icon: <ShieldCheck size={40} />, title: "Warranty Protection", desc: "Over 2 years" },
                    { icon: <Truck size={40} />, title: "Free Shipping", desc: "Order over 150 $" },
                    { icon: <Headset size={40} />, title: "24 / 7 Support", desc: "Dedicated support" }
                ].map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <span className="text-black">{f.icon}</span>
                        <div>
                            <h4 className="text-2xl font-bold text-[#242424]">{f.title}</h4>
                            <p className="text-[#898989] font-medium">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoginPage;