import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart, FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';

const MobileBottomnav = () => {
    return (
        <div className=' lg:hidden'>
            <ul className='flex justify-between text-white px-4 bg-p fixed w-full bottom-0 py-3 gap-5'> 
         <li className='flex flex-1 flex-col items-center gap-2'>
            <FaHome className='text2xl'></FaHome>Wishlist</li>
         <li className='flex flex-1 flex-col items-center gap-2'>
            < FaHeart className='text2xl'></FaHeart>Wishlist</li>
          <li className='flex flex-1 flex-col items-center gap-2'>
            <FaUser className='text2xl'></FaUser>Account</li> 
         <li className='flex flex-1 flex-col items-center gap-2'>
            <FaShoppingCart className='text2xl'></FaShoppingCart> Cart</li>
           </ul>
        </div>
    );
};

export default MobileBottomnav;