import React, { useState } from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import checkoutHero from '../../assets/Layout/Rectangle1.png'; 

const Checkout = () => {
    const navigate = useNavigate();

    // 1. State for Form Data & Payment Method
    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', 
        address: '', city: '', zip: '', country: 'Bangladesh'
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. The Redirect Handler
    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const orderData = {
            ...formData,
            amount: 250000,
            currency: 'BDT',
            paymentMethod
        };

        if (paymentMethod === 'bank') {
            // Direct success for bank transfers
            navigate('/order-success');
        } else {
            // For SSLCommerz or Stripe, you trigger the redirect logic
            try {
                // This would be your real API call to your Node/Firebase backend
                console.log(`Redirecting to ${paymentMethod} gateway...`, orderData);
                
                // Example: window.location.replace(apiResponse.gatewayUrl);
                alert(`Redirecting to ${paymentMethod === 'ssl' ? 'SSLCommerz (bKash/Nagad)' : 'Stripe'}...`);
            } catch (error) {
                alert("Payment initiation failed. Please try again.");
            }
        }
    };

    return (
        <div className="font-poppins">
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${checkoutHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Checkout</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Checkout</span></p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-20 py-24">
                <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* Left Side: Billing Details */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-10">Billing details</h2>
                        <div className="space-y-8">
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <label className="block font-semibold mb-4">First Name</label>
                                    <input type="text" name="firstName" required onChange={handleInputChange} className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F]" />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold mb-4">Last Name</label>
                                    <input type="text" name="lastName" required onChange={handleInputChange} className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F]" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold mb-4">Email address</label>
                                <input type="email" name="email" required onChange={handleInputChange} className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F]" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-4">Street address</label>
                                <input type="text" name="address" required onChange={handleInputChange} className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none focus:border-[#B88E2F]" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Order Summary & Gateway Options */}
                    <div className="lg:w-1/2 pt-16 lg:pt-20">
                        <div className="border-b border-[#D9D9D9] pb-8 mb-8">
                            <div className="flex justify-between items-center mb-4 font-bold text-2xl">
                                <h3>Product</h3>
                                <h3>Subtotal</h3>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[#9F9F9F]">Asgaard sofa <span className="text-black text-xs font-bold ml-2">X 1</span></p>
                                <p>Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl">Total</p>
                                <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
                            </div>
                        </div>

                        {/* Payment Selection Logic */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPaymentMethod('bank')}>
                                <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'bank' ? 'bg-black border-black' : 'border-[#9F9F9F]'}`}></div>
                                <span className={paymentMethod === 'bank' ? 'font-medium' : 'text-[#9F9F9F]'}>Direct Bank Transfer</span>
                            </div>
                            
                            {paymentMethod === 'bank' && (
                                <p className="text-[#9F9F9F] font-light text-sm leading-relaxed">
                                    Make your payment directly into our bank account. Please use your Order ID as the reference.
                                </p>
                            )}

                            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPaymentMethod('ssl')}>
                                <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'ssl' ? 'bg-black border-black' : 'border-[#9F9F9F]'}`}></div>
                                <span className={paymentMethod === 'ssl' ? 'font-medium' : 'text-[#9F9F9F]'}>Local Payment (bKash / Nagad)</span>
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPaymentMethod('stripe')}>
                                <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'stripe' ? 'bg-black border-black' : 'border-[#9F9F9F]'}`}></div>
                                <span className={paymentMethod === 'stripe' ? 'font-medium' : 'text-[#9F9F9F]'}>Stripe (International Card)</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type="submit" className="w-full py-4 border border-black rounded-xl text-xl hover:bg-black hover:text-white transition-all">
                                Place order
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            {/* ... Features Footer ... */}
        </div>
    );
};

export default Checkout;