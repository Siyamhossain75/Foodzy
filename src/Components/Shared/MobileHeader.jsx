import React, { useEffect, useState } from 'react';
import Logo from "../../assets/Layout/logoo.png"; 
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';
import { route } from './TopNav';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/Firebase.config';

const MobileHeader = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // 1. Monitor Auth State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            document.getElementById('my-drawer').checked = false; // Close drawer
            navigate("/login");
        });
    };

    return (
        <div className='lg:hidden font-poppins sticky top-0 z-[60] bg-white shadow-sm'>
            {/* Main Navbar Row */}
            <div className='flex items-center justify-between px-4 py-4 bg-white'>
                <Link to="/" className='flex items-center gap-1'>
                    <img src={Logo} alt="Furniro Logo" className="w-8 h-8 object-contain" />
                    <h2 className='text-2xl font-bold text-black tracking-tight'>Furniro</h2>
                </Link>
                
                <div className='flex items-center gap-4 text-black'>
                    <Link to="/checkoutpage"><button className="text-2xl"><AiOutlineHeart /></button></Link>
                    <Link to="/cart"><button className="text-2xl"><AiOutlineShoppingCart /></button></Link>
                    <label htmlFor="my-drawer" className="cursor-pointer">
                        <RiMenu3Line className='text-3xl' />
                    </label>
                </div>
            </div>

            {/* Search Bar */}
            <div className='px-4 pb-4'>
                <div className="relative">
                    <input 
                        type="text" 
                        className='w-full border border-[#9F9F9F] bg-[#F4F5F7] rounded-lg py-3 px-5 pr-12 outline-none focus:border-[#B88E2F] text-sm'
                        placeholder='Search for furniture...' 
                    />
                    <AiOutlineSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#B88E2F]" />
                </div>
            </div>

            {/* Navigation Drawer */}
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <div className="menu bg-white text-black min-h-full w-72 p-0 shadow-2xl flex flex-col">
                        
                        {/* Drawer Header & User Profile */}
                        <div className="p-6 border-b border-[#D9D9D9] bg-[#F9F1E7]">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#B88E2F] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                        {user.displayName?.charAt(0) || user.email?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-black">Hi, {user.displayName || 'User'}</p>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <img src={Logo} alt="Logo" className="w-6 h-6" />
                                    <span className="font-bold text-xl uppercase tracking-wider">Furniro</span>
                                </div>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <ul className="p-4 space-y-1 flex-grow">
                            {route.map((item, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={item.Link}
                                        onClick={() => document.getElementById('my-drawer').checked = false}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 rounded-lg font-medium transition-all ${
                                                isActive ? "bg-[#B88E2F]/10 text-[#B88E2F]" : "text-black hover:bg-gray-50"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}

                            <div className="border-t border-gray-100 my-4"></div>

                            {/* Authentication Links in Sidebar */}
                            {user ? (
                                <li>
                                    <button 
                                        onClick={handleLogOut}
                                        className="flex items-center gap-3 px-4 py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg w-full"
                                    >
                                        <AiOutlineLogout size={20} /> Logout
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login" onClick={() => document.getElementById('my-drawer').checked = false} className="flex items-center gap-3 px-4 py-3 text-black font-medium hover:bg-gray-50 rounded-lg">
                                            <AiOutlineUser size={20} /> Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" onClick={() => document.getElementById('my-drawer').checked = false} className="flex items-center gap-3 px-4 py-3 bg-[#B88E2F] text-white font-medium hover:bg-[#a47e2a] rounded-lg">
                                            <AiOutlineUser size={20} /> Sign Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        <div className="p-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-400 italic">Premium Furniture Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;