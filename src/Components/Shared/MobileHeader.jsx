import React from 'react';
import Logo from "../../assets/Layout/logoo.png"; // Your Furniro logo
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';
import { route } from './TopNav';
import { Link, NavLink } from 'react-router-dom';

const MobileHeader = () => {
    return (
        <div className='lg:hidden font-poppins sticky top-0 z-[60] bg-white'>
            {/* 1. Main Navbar Row */}
            <div className='flex items-center justify-between px-4 py-4 bg-white'>
                {/* Logo Section */}
                <div className='flex items-center gap-1'>
                    <img src={Logo} alt="Furniro Logo" className="w-8 h-8 object-contain" />
                    <h2 className='text-2xl font-bold text-black tracking-tight'>Furniro</h2>
                </div>
                
                {/* Action Icons matching desktop style */}
                <div className='flex items-center gap-4 text-black'>
                 <Link to={"./checkoutpage"}>   <button className="text-2xl"><AiOutlineHeart /></button></Link>
                  <Link to={"./cart"}>  <button className="text-2xl"><AiOutlineShoppingCart /></button></Link>
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <Link to >  <RiMenu3Line className='text-3xl' /></Link>
                    </label>
                </div>
            </div>

            {/* 2. Search Bar Section */}
            <div className='px-4 pb-4'>
                <div className="relative group">
                    <input 
                        type="text" 
                        className='w-full border border-[#9F9F9F] bg-white rounded-lg py-3 px-5 pr-12 outline-none focus:border-[#B88E2F] transition-all text-sm'
                        placeholder='Search for furniture...' 
                    />
                    <AiOutlineSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-black" />
                </div>
            </div>

            {/* 3. Navigation Drawer */}
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-white text-black min-h-full w-72 p-0 shadow-2xl">
                        {/* Drawer Header */}
                        <div className="p-6 border-b border-[#D9D9D9] flex items-center gap-2">
                             <img src={Logo} alt="" className="w-6 h-6" />
                             <span className="font-bold text-xl uppercase">Menu</span>
                        </div>

                        <ul className="p-4 space-y-2">
                            {route.map((item, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={item.Link}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 rounded-lg font-medium transition-all ${
                                                isActive 
                                                ? "bg-[#F9F1E7] text-[#B88E2F]" 
                                                : "text-black hover:bg-gray-50"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;