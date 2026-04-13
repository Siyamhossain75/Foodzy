import React from 'react';
// Using react-icons to match your RoomInspiration style
import { BsFilter, BsGrid3X3Gap, BsListUl } from 'react-icons/bs';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';

// IMPORT YOUR DOWNLOADED IMAGES HERE
import shopBanner from '../../assets/Layout/Group78.png';
import p1 from '../../assets/images/Rectangle24.png'; 
import p2 from '../../assets/images/Rectangle25.png';
// ... import other product images as needed

const Products = () => {
    const products = [
        { id: 1, name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%", image: p1 },
        { id: 2, name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: p2, showHover: true },
        { id: 3, name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%", image: p1 },
        { id: 4, name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New", image: p2 },
        // Repeat for 16 items as shown in your image
    ];

    const features = [
        { icon: <Trophy size={40} />, title: "High Quality", desc: "crafted from top materials" },
        { icon: <ShieldCheck size={40} />, title: "Warranty Protection", desc: "Over 2 years" },
        { icon: <Truck size={40} />, title: "Free Shipping", desc: "Order over 150 $" },
        { icon: <Headset size={40} />, title: "24 / 7 Support", desc: "Dedicated support" }
    ];

    return (
        <div className="font-poppins">
            {/* 1. Header Banner */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${shopBanner})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                </div>
            </div>

            {/* 2. Filter Bar */}
            <div className="bg-[#F9F1E7] py-6 px-4 lg:px-20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 border-r border-[#9F9F9F] pr-6">
                    <button className="flex items-center gap-2 text-xl"><BsFilter /> Filter</button>
                    <button className="text-xl"><BsGrid3X3Gap /></button>
                    <button className="text-xl border-l border-[#9F9F9F] pl-4"><BsListUl /></button>
                    <p className="text-sm">Showing 1–16 of 32 results</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">Show <span className="bg-white px-4 py-3 text-[#9F9F9F]">16</span></div>
                    <div className="flex items-center gap-2">Short by <span className="bg-white px-4 py-3 text-[#9F9F9F]">Default</span></div>
                </div>
            </div>

            {/* 3. Product Grid */}
            <div className="container mx-auto px-4 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative bg-[#F4F5F7]">
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="w-full h-[300px] object-cover" />
                            {product.discount && <div className="absolute top-5 right-5 bg-[#E97171] text-white rounded-full w-12 h-12 flex items-center justify-center">{product.discount}</div>}
                            {product.tag && <div className="absolute top-5 right-5 bg-[#2EC1AC] text-white rounded-full w-12 h-12 flex items-center justify-center">{product.tag}</div>}
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                                <button className="bg-white text-[#B88E2F] px-10 py-3 font-semibold">Add to cart</button>
                                <div className="flex gap-4 text-white font-semibold">
                                    <span>Share</span><span>Compare</span><span>Like</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-[#3A3A3A]">{product.name}</h3>
                            <p className="text-[#898989] font-medium my-2">{product.desc}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-[#3A3A3A]">{product.price}</span>
                                {product.oldPrice && <span className="text-[#B0B0B0] line-through">{product.oldPrice}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. Pagination */}
            <div className="flex justify-center gap-8 py-10">
                <button className="w-12 h-12 bg-[#B88E2F] text-white rounded-[10px]">1</button>
                <button className="w-12 h-12 bg-[#F9F1E7] text-black rounded-[10px]">2</button>
                <button className="w-12 h-12 bg-[#F9F1E7] text-black rounded-[10px]">3</button>
                <button className="px-6 h-12 bg-[#F9F1E7] text-black rounded-[10px]">Next</button>
            </div>

            {/* 5. Features Footer */}
            <div className="bg-[#FAF3EA] py-24 px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
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

export default Products;