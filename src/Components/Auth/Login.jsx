import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure Link is imported for navigation

// IMPORT YOUR DOWNLOADED HERO IMAGE HERE
import loginHero from '../../assets/Layout/Rectangle1.png'; 

const LoginPage = () => {
    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">My Account</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Login</span></p>
                </div>
            </div>

            {/* 2. Login Form Section */}
            <div className="container mx-auto px-4 py-24 flex justify-center">
                <div className="w-full max-w-[600px] border border-[#9F9F9F]/30 rounded-lg p-8 lg:p-16 shadow-sm">
                    <h2 className="text-4xl font-bold text-black mb-10 text-center">Login</h2>
                    
                    <form className="space-y-8">
                        <div>
                            <label className="block text-black font-semibold mb-4">Username or email address</label>
                            <input 
                                type="text" 
                                className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-black font-semibold mb-4">Password</label>
                            <input 
                                type="password" 
                                className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="remember" className="w-5 h-5 accent-[#B88E2F]" />
                            <label htmlFor="remember" className="text-black">Remember me</label>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                            <button className="w-full sm:w-48 bg-[#B88E2F] text-white py-4 rounded-lg font-semibold hover:bg-[#a47e2a] transition-all shadow-md">
                                Log In
                            </button>
                            <a href="#" className="text-black hover:text-[#B88E2F] transition-colors font-light">
                                Lost Your Password?
                            </a>
                        </div>

                        {/* --- NEW SIGN UP OPTION --- */}
                        <div className="mt-8 pt-8 border-t border-[#D9D9D9] text-center">
                            <p className="text-[#9F9F9F]">
                                No account yet? {" "}
                                <Link to="/signup" className="text-[#B88E2F] font-semibold hover:underline">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* 3. Features Footer */}
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