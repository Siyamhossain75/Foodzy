import React, { useState } from 'react';
import { Trophy, ShieldCheck, Truck, Headset, Loader2, CreditCard, Landmark, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import checkoutHero from '../../assets/Layout/Rectangle1.png'; 

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

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulated API and Redirect logic
        setTimeout(() => {
            if (paymentMethod === 'bank') {
                setLoading(false);
                navigate('/order-success');
            } else if (paymentMethod === 'ssl') {
                // REDIRECT TO LOCAL GATEWAY (bKash/Nagad)
                window.location.href = "https://sandbox.sslcommerz.com/gwprocess/v4/testbox.php";
            } else {
                // REDIRECT TO STRIPE (Card)
                window.location.href = "https://checkout.stripe.com/pay/test_session";
            }
        }, 2000);
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
                                <label className="text-sm font-semibold">First Name</label>
                                <input type="text" name="firstName" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Last Name</label>
                                <input type="text" name="lastName" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold">Phone Number</label>
                                <input type="tel" name="phone" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" placeholder="017XXXXXXXX" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold">Full Address</label>
                                <textarea name="address" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl py-3 px-4 h-32 focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary & Enhanced Payment UI */}
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

                            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Select Payment Method</h4>
                            
                            <div className="space-y-4">
                                {/* Option 1: Mobile Banking (SSLCommerz) */}
                                <div 
                                    onClick={() => setPaymentMethod('ssl')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'ssl' ? 'border-[#B88E2F] bg-[#B88E2F]/5' : 'border-gray-100 hover:border-gray-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#B88E2F]"><Smartphone size={24}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Mobile Banking</p>
                                            <p className="text-[10px] text-gray-400">bKash, Nagad, Rocket, Upay</p>
                                        </div>
                                    </div>

                                    {paymentMethod === 'ssl' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1"><ShieldCheck size={14}/></div>}
                                </div>

                                {/* Option 2: Cards (Stripe) */}
                                <div 
                                    onClick={() => setPaymentMethod('stripe')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'stripe' ? 'border-[#B88E2F] bg-[#B88E2F]/5' : 'border-gray-100 hover:border-gray-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#B88E2F]"><CreditCard size={24}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Card Payment</p>
                                            <p className="text-[10px] text-gray-400">Visa, Mastercard, AMEX</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'stripe' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1"><ShieldCheck size={14}/></div>}
                                </div>

                                {/* Option 3: Bank Transfer */}
                                <div 
                                    onClick={() => setPaymentMethod('bank')}
                                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'bank' ? 'border-[#B88E2F] bg-[#B88E2F]/5' : 'border-gray-100 hover:border-gray-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#B88E2F]"><Landmark size={24}/></div>
                                        <div>
                                            <p className="font-bold text-sm">Bank Transfer</p>
                                            <p className="text-[10px] text-gray-400">Direct Manual Deposit</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'bank' && <div className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full p-1"><ShieldCheck size={14}/></div>}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full mt-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-[#B88E2F] transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                            >
                                {loading ? <><Loader2 className="animate-spin" /> Securing Session...</> : "Complete Purchase"}
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