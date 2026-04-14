import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import signupHero from '../../assets/Layout/Rectangle1.png'; 

const SignupPage = () => {
    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${signupHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Sign Up</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Sign Up</span></p>
                </div>
            </div>

            {/* 2. Registration Form Section */}
            <div className="container mx-auto px-4 py-24 flex justify-center">
                <div className="w-full max-w-[600px] border border-[#9F9F9F]/30 rounded-lg p-8 lg:p-16 shadow-sm">
                    <h2 className="text-4xl font-bold text-black mb-10 text-center">Create Account</h2>
                    
                    <form className="space-y-6">
                        <div>
                            <label className="block text-black font-semibold mb-3">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>

                        <div>
                            <label className="block text-black font-semibold mb-3">Email address</label>
                            <input 
                                type="email" 
                                placeholder="Abc@gmail.com"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-black font-semibold mb-3">Password</label>
                            <input 
                                type="password" 
                                placeholder="Create a password"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>

                        <div>
                            <label className="block text-black font-semibold mb-3">Confirm Password</label>
                            <input 
                                type="password" 
                                placeholder="Repeat your password"
                                className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" 
                            />
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <input type="checkbox" id="terms" className="mt-1 w-5 h-5 accent-[#B88E2F]" required />
                            <label htmlFor="terms" className="text-sm text-black leading-relaxed">
                                I agree to the <span className="font-bold">Terms & Conditions</span> and <span className="font-bold">Privacy Policy</span>.
                            </label>
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-[#B88E2F] text-white py-4 rounded-lg font-semibold hover:bg-[#a47e2a] transition-all shadow-md">
                                Register Now
                            </button>
                        </div>

                        <p className="text-center text-black font-light mt-6">
                            Already have an account? <a href="/login" className="text-[#B88E2F] font-semibold hover:underline">Login here</a>
                        </p>
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

export default SignupPage;