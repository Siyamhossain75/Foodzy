import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import signupHero from '../../assets/Layout/Rectangle1.png'; 
import { auth } from '../../firebase/Firebase.config'; 
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignupPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    // --- 1. Email/Password Signup Logic ---
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 
        
        const name = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return setError("Passwords do not match!");
        }

        if (password.length < 6) {
            return setError("Password should be at least 6 characters.");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, { displayName: name })
                    .then(() => {
                        console.log("User created and profile updated:", userCredential.user);
                        navigate("/"); 
                    });
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    // --- 2. Google Sign-In Logic ---
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Google Login Success:", result.user);
                navigate("/"); // Redirect to home
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="font-poppins">
            {/* Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${signupHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Sign Up</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Sign Up</span></p>
                </div>
            </div>

            {/* Registration Form Section */}
            <div className="container mx-auto px-4 py-24 flex justify-center">
                <div className="w-full max-w-[600px] border border-[#9F9F9F]/30 rounded-lg p-8 lg:p-16 shadow-sm">
                    <h2 className="text-4xl font-bold text-black mb-10 text-center">Create Account</h2>
                    
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-black font-semibold mb-3">Full Name</label>
                            <input name="fullname" type="text" required placeholder="Enter your full name" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" />
                        </div>

                        <div>
                            <label className="block text-black font-semibold mb-3">Email address</label>
                            <input name="email" type="email" required placeholder="Abc@gmail.com" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" />
                        </div>
                        
                        <div>
                            <label className="block text-black font-semibold mb-3">Password</label>
                            <input name="password" type="password" required placeholder="Create a password" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" />
                        </div>

                        <div>
                            <label className="block text-black font-semibold mb-3">Confirm Password</label>
                            <input name="confirmPassword" type="password" required placeholder="Repeat your password" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F] transition-all" />
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <input type="checkbox" id="terms" className="mt-1 w-5 h-5 accent-[#B88E2F]" required />
                            <label htmlFor="terms" className="text-sm text-black leading-relaxed">
                                I agree to the <span className="font-bold">Terms & Conditions</span> and <span className="font-bold">Privacy Policy</span>.
                            </label>
                        </div>

                        <div className="pt-4 space-y-4">
                            <button type="submit" className="w-full bg-[#B88E2F] text-white py-4 rounded-lg font-semibold hover:bg-[#a47e2a] transition-all shadow-md">
                                Register Now
                            </button>

                            {/* --- Google Sign In Button --- */}
                            <div className="relative flex items-center justify-center py-2">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            <button 
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center gap-3 border border-[#9F9F9F] py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm"
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
                                Sign up with Google
                            </button>
                        </div>

                        <p className="text-center text-black font-light mt-6">
                            Already have an account? <Link to="/login" className="text-[#B88E2F] font-semibold hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Features Footer */}
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