import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

// IMPORT YOUR DOWNLOADED HERO IMAGE HERE
import contactHero from '../../assets/Layout/Rectangle1.png'; 

const Faq = () => {
    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${contactHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Contact</h1>
                    <p className="text-black mt-2 font-medium">Home&gt; <span className="font-light">Contact</span></p>
                </div>
            </div>

            {/* 2. Main Contact Section */}
            <div className="container mx-auto px-4 lg:px-20 py-24">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-black mb-4">Get In Touch With Us</h2>
                    <p className="text-[#9F9F9F] max-w-2xl mx-auto">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us 
                        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 px-4 lg:px-20">
                    {/* Left Side: Contact Info */}
                    <div className="lg:w-1/3 space-y-10">
                        <div className="flex gap-6">
                            <FaMapMarkerAlt className="text-2xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold text-black">Address</h3>
                                <p className="text-black leading-relaxed">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <FaPhoneAlt className="text-2xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold text-black">Phone</h3>
                                <p className="text-black">Mobile: +(84) 546-6789</p>
                                <p className="text-black">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <FaClock className="text-2xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold text-black">Working Time</h3>
                                <p className="text-black">Monday-Friday: 9:00 - 22:00</p>
                                <p className="text-black">Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-2/3">
                        <form className="space-y-8">
                            <div>
                                <label className="block text-black font-semibold mb-4">Your name</label>
                                <input type="text" placeholder="Abc" className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F]" />
                            </div>
                            <div>
                                <label className="block text-black font-semibold mb-4">Email address</label>
                                <input type="email" placeholder="Abc@gmail.com" className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F]" />
                            </div>
                            <div>
                                <label className="block text-black font-semibold mb-4">Subject</label>
                                <input type="text" placeholder="This is an optional" className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F]" />
                            </div>
                            <div>
                                <label className="block text-black font-semibold mb-4">Message</label>
                                <textarea placeholder="Hi! I'd like to ask about" rows="4" className="w-full border border-[#9F9F9F] rounded-lg py-5 px-6 outline-none focus:border-[#B88E2F] resize-none"></textarea>
                            </div>
                            <button className="bg-[#B88E2F] text-white px-16 py-4 rounded-lg font-semibold hover:bg-[#a47e2a] transition-all">
                                Submit
                            </button>
                        </form>
                    </div>
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

export default Faq;