import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';

// IMPORT YOUR DOWNLOADED HERO IMAGE HERE
import checkoutHero from '../../assets/Layout/Rectangle1.png'; 

const Checkout = () => {
    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${checkoutHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Checkout</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Checkout</span></p>
                </div>
            </div>

            {/* 2. Checkout Content */}
            <div className="container mx-auto px-4 lg:px-20 py-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* Left Side: Billing Details */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-10">Billing details</h2>
                        <form className="space-y-8">
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <label className="block font-semibold mb-4">First Name</label>
                                    <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold mb-4">Last Name</label>
                                    <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Company Name (Optional)</label>
                                <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Country / Region</label>
                                <select className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none bg-white text-[#9F9F9F]">
                                    <option>Sri Lanka</option>
                                    <option>Bangladesh</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Street address</label>
                                <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Town / City</label>
                                <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Province</label>
                                <select className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none bg-white text-[#9F9F9F]">
                                    <option>Western Province</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">ZIP code</label>
                                <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Phone</label>
                                <input type="tel" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <label className="block font-semibold mb-4">Email address</label>
                                <input type="email" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                            </div>

                            <div>
                                <input type="text" placeholder="Additional information" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none mt-8" />
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Order Summary & Payment */}
                    <div className="lg:w-1/2 pt-16 lg:pt-20">
                        <div className="border-b border-[#D9D9D9] pb-8 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold">Product</h3>
                                <h3 className="text-2xl font-bold">Subtotal</h3>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[#9F9F9F]">Asgaard sofa <span className="text-black text-xs font-bold ml-2">X 1</span></p>
                                <p>Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p>Subtotal</p>
                                <p>Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Total</p>
                                <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
                            </div>
                        </div>

                        {/* Payment Options */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-black"></div>
                                <span className="font-medium">Direct Bank Transfer</span>
                            </div>
                            <p className="text-[#9F9F9F] font-light leading-relaxed">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-4 text-[#9F9F9F]">
                                <div className="w-4 h-4 rounded-full border border-[#9F9F9F]"></div>
                                <span>Direct Bank Transfer</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#9F9F9F]">
                                <div className="w-4 h-4 rounded-full border border-[#9F9F9F]"></div>
                                <span>Cash On Delivery</span>
                            </div>
                        </div>

                        <p className="mt-8 text-black font-light leading-relaxed">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span>
                        </p>

                        <div className="mt-12 flex justify-center">
                            <button className="w-full sm:w-80 py-4 border border-black rounded-xl text-xl hover:bg-black hover:text-white transition-all">
                                Place order
                            </button>
                        </div>
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

export default Checkout;