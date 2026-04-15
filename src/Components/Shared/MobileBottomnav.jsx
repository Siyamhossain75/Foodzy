import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/Firebase.config';

const MobileBottomnav = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // 1. Sync User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // 2. Handle Logout
    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate("/login");
        });
    };

    return (
        <div className='lg:hidden'>
            <ul className='flex justify-between items-center bg-white border-t border-[#D9D9D9] fixed w-full bottom-0 py-3 px-6 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'> 
                
                {/* Home */}
                <Link to="/"> 
                    <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                        <AiOutlineHome className='text-2xl group-hover:scale-110 transition-transform' />
                        <span className='text-[10px] font-medium'>Home</span>
                    </li>
                </Link>

                {/* Wishlist/Checkout */}
                <Link to="/checkoutpage"> 
                    <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                        <AiOutlineHeart className='text-2xl group-hover:scale-110 transition-transform' />
                        <span className='text-[10px] font-medium'>Wishlist</span>
                    </li>
                </Link>

                {/* Account / Logout Logic */}
                {user ? (
                    <li onClick={handleLogOut} className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-red-500 text-black'>
                        <AiOutlineLogout className='text-2xl group-hover:scale-110 transition-transform' />
                        <span className='text-[10px] font-medium'>Logout</span>
                    </li>
                ) : (
                    <Link to="/login"> 
                        <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                            <AiOutlineUser className='text-2xl group-hover:scale-110 transition-transform' />
                            <span className='text-[10px] font-medium'>Account</span>
                        </li>
                    </Link>
                )}

                {/* Cart */}
                <Link to="/cart"> 
                    <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                        <AiOutlineShoppingCart className='text-2xl group-hover:scale-110 transition-transform' />
                        <span className='text-[10px] font-medium'>Cart</span>
                    </li>
                </Link>

            </ul>
            
            {/* Spacer to prevent content from hiding behind the fixed nav */}
            <div className="h-16 lg:hidden"></div>
        </div>
    );
};

export default MobileBottomnav;