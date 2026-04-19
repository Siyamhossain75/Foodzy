import React, { useState } from 'react';
import { ShieldCheck, Loader2, CreditCard, Landmark, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 1. ASSET IMPORTS
import checkoutHero from '../../assets/Layout/Rectangle1.png'; 
import bkashIcon from '../../assets/Layout/bkash.jpg'; 
import nagadIcon from '../../assets/Layout/nagad.png';
import visaIcon from '../../assets/Layout/visa.jpg';

const Checkout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('ssl'); 
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', 
        address: '', city: '', zip: '', country: 'Bangladesh'
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. UPDATED: REAL BACKEND CONNECTION
    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Prepare the data for the backend
        const orderData = {
            firstName: formData.firstName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            amount: 250000, // Dynamic value if you have a cart
        };

        try {
            if (paymentMethod === 'bank') {
                // Manual transfer doesn't need the gateway
                setTimeout(() => {
                    setLoading(false);
                    navigate('/order-success');
                }, 1500);
            } else {
                // CALL YOUR NODE.JS SERVER
                const response = await fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData),
                });

                const data = await response.json();

                if (data?.url) {
                    // Redirect to bKash/Nagad via SSLCommerz
                    window.location.replace(data.url); 
                } else {
                    throw new Error("Payment URL not found");
                }
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("Could not connect to the payment server. Make sure your backend is running!");
            setLoading(false);
        }
    };

    return (
        <div className="font-poppins bg-[#FAFAFA]">
            {/* Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${checkoutHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Checkout</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Checkout</span></p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-20 py-16">
                <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left: Billing Form */}
                    <div className="lg:w-[60%] bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-3xl font-bold mb-8">Billing Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">First Name</label>
                                <input type="text" name="firstName" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Last Name</label>
                                <input type="text" name="lastName" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Phone Number</label>
                                <input type="tel" name="phone" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" placeholder="017XXXXXXXX" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Email Address</label>
                                <input type="email" name="email" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Full Address</label>
                                <textarea name="address" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 h-32 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary & Payment UI */}
                    <div className="lg:w-[40%] space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 border-b border-gray-100 pb-6 mb-6">
                                <div className="flex justify-between text-[#9F9F9F]">
                                    <span>Asgaard sofa x 1</span>
                                    <span className="text-black font-medium">৳ 250,000</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-[#B88E2F]">৳ 250,000</span>
                                </div>
                            </div>

                            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Secure Payment Options</h4>
                            
                            <div className="space-y-4">
                                {/* Option 1: Mobile Banking (bKash/Nagad) */}
                                <div 
                                    onClick={() => setPaymentMethod('ssl')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'ssl' ? 'border-[#B88E2F] bg-[#B88E2F]/5 shadow-sm' : 'border-gray-100 bg-white'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${paymentMethod === 'ssl' ? 'bg-[#B88E2F] text-white' : 'bg-gray-100 text-gray-400'}`}><Smartphone size={20}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Mobile Banking</p>
                                            <p className="text-[10px] text-gray-400">bKash, Nagad, Rocket</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src={bkashIcon} className="h-5 w-auto" alt="bkash" />
                                        <img src={nagadIcon} className="h-5 w-auto" alt="nagad" />
                                    </div>
                                    {paymentMethod === 'ssl' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1 border-2 border-white"><ShieldCheck size={14}/></div>}
                                </div>

                                {/* Option 2: Cards */}
                                <div 
                                    onClick={() => setPaymentMethod('stripe')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'stripe' ? 'border-[#B88E2F] bg-[#B88E2F]/5 shadow-sm' : 'border-gray-100 bg-white'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${paymentMethod === 'stripe' ? 'bg-[#B88E2F] text-white' : 'bg-gray-100 text-gray-400'}`}><CreditCard size={20}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Card Payment</p>
                                            <p className="text-[10px] text-gray-400">Visa, Mastercard</p>
                                        </div>
                                    </div>
                                    <img src={visaIcon} className="h-4" alt="visa" />
                                    {paymentMethod === 'stripe' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1 border-2 border-white"><ShieldCheck size={14}/></div>}
                                </div>

                                {/* Option 3: Bank Transfer */}
                                <div 
                                    onClick={() => setPaymentMethod('bank')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'bank' ? 'border-[#B88E2F] bg-[#B88E2F]/5 shadow-sm' : 'border-gray-100 bg-white'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${paymentMethod === 'bank' ? 'bg-[#B88E2F] text-white' : 'bg-gray-100 text-gray-400'}`}><Landmark size={20}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Bank Transfer</p>
                                            <p className="text-[10px] text-gray-400">Manual Deposit</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'bank' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1 border-2 border-white"><ShieldCheck size={14}/></div>}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full mt-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-[#B88E2F] transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                            >
                                {loading ? <><Loader2 className="animate-spin" /> Securely Redirecting...</> : "Complete Purchase"}
                            </button>
                            
                            <p className="text-[10px] text-gray-400 mt-4 text-center">
                                Your payment is secured with 256-bit SSL encryption.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;