import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import { FaTrash } from 'react-icons/fa';

import cartHero from '../../assets/Layout/Rectangle1.png'; 
import productImg from '../../assets/images/Asgaard.png'; 

const Cart = () => {
    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${cartHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-medium text-black">Cart</h1>
                    <p className="text-black mt-2 font-medium">Home &gt; <span className="font-light">Cart</span></p>
                </div>
            </div>

            {/* 2. Cart Content Section */}
            <div className="container mx-auto px-4 lg:px-20 py-16 flex flex-col lg:flex-row gap-8">
                
                {/* Left Side: Product Table */}
                <div className="lg:w-2/3">
                    <table className="w-full text-left border-separate border-spacing-y-8">
                        <thead className="bg-[#F9F1E7]">
                            <tr>
                                <th className="py-4 pl-20 font-medium text-black">Product</th>
                                <th className="py-4 font-medium text-black">Price</th>
                                <th className="py-4 font-medium text-black">Quantity</th>
                                <th className="py-4 font-medium text-black">Subtotal</th>
                                <th className="py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="align-middle">
                                <td className="flex items-center gap-8">
                                    <div className="bg-[#F9F1E7] rounded-lg p-2">
                                        <img src={productImg} alt="Asgaard sofa" className="w-24 h-24 object-contain" />
                                    </div>
                                    <span className="text-[#9F9F9F]">Asgaard sofa</span>
                                </td>
                                <td className="text-[#9F9F9F]">Rs. 250,000.00</td>
                                <td>
                                    <input 
                                        type="number" 
                                        defaultValue="1" 
                                        className="w-8 h-8 border border-[#9F9F9F] rounded text-center outline-none" 
                                    />
                                </td>
                                <td className="text-black">Rs. 250,000.00</td>
                                <td>
                                    <button className="text-[#B88E2F] hover:text-[#a47e2a] transition-colors">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Right Side: Cart Totals */}
                <div className="lg:w-1/3 bg-[#F9F1E7] p-8 lg:p-16 flex flex-col items-center rounded-sm h-fit">
                    <h2 className="text-3xl font-bold text-black mb-12">Cart Totals</h2>
                    
                    <div className="w-full space-y-8 mb-12">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-black">Subtotal</span>
                            <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-black">Total</span>
                            <span className="text-xl font-bold text-[#B88E2F]">Rs. 250,000.00</span>
                        </div>
                    </div>

                    <button className="w-full lg:w-48 py-4 border border-black rounded-xl text-xl hover:bg-black hover:text-white transition-all">
                        Check Out
                    </button>
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

export default Cart;