import React from 'react';
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MobileBottomnav = () => {
    return (
        <div className='lg:hidden'>
            {/* 1. Background: White to match header
                2. Shadow-up: Added to separate from page content
                3. Z-index: High to stay above product grids
            */}
            <ul className='flex justify-between items-center bg-white border-t border-[#D9D9D9] fixed w-full bottom-0 py-3 px-6 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'> 
                
            <Link to={"./"}> <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                   <AiOutlineHome className='text-2xl group-hover:scale-110 transition-transform' />
                    <span className='text-[10px] font-medium'>Home</span>
                </li></Link>

                                 <Link to={"./checkoutpage"}> <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
  <AiOutlineHeart className='text-2xl group-hover:scale-110 transition-transform' />
                    <span className='text-[10px] font-medium'>Wishlist</span>
                </li></Link>

            <Link to={"./login"}>    <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                    <AiOutlineUser className='text-2xl group-hover:scale-110 transition-transform' />
                    <span className='text-[10px] font-medium'>Account</span>
                </li></Link>

                <Link to={"./cart"}>  <li className='flex flex-col items-center gap-1 group cursor-pointer transition-all hover:text-[#B88E2F] text-black'>
                    <AiOutlineShoppingCart className='text-2xl group-hover:scale-110 transition-transform' />
                    <span className='text-[10px] font-medium'>Cart</span>
                </li></Link>

            </ul>
            
            <div className="h-16 lg:hidden"></div>
        </div>
    );
};

export default MobileBottomnav;