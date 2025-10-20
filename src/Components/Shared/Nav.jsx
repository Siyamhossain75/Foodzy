import React, { useState } from 'react';
import { IoCartOutline, IoChevronDown } from 'react-icons/io5';
import logo from "../../assets/Layout/Logo.png"
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Login from '../Auth/Login';

const Nav = () => {
    const [isDropDownOpen , setIsDropDownOpen] = useState(false)
    const foodCategories = [
  "Fruits",
  "Vegetables",
  "Grains",
  "Dairy",
  "Protein",
  "Beverages",
  "Snacks",
  "Seafood",
  "Spices & Herbs",
  "Baked Goods",
  "Frozen Foods",
  "Condiments & Sauces",
  "Soups & Stews",
  "Meat & Poultry",
  "Nuts & Seeds"
];

    return (
        <div className="container flex items-center justify-between mx-auto">

        <div className='flex items-center'>
            <img src={logo}></img>
            <div>
                <h2 className='capitalize font-bold font-sans text-2xl'> Foodzy</h2>
                <p className='text-sm font-semibold'> A Treasure of Tastes</p>

                </div>
                </div>

                <div className='flex rounded-md W-[500PX]'>
                
              <input type="text" className='flex-1 rounded-l-md border focus:border-2 border-[#64B496] focus:outline-[#64B496] p-4
                'placeholder='Sarch For Items' />
                
                <div className="relative">
                    <div onClick={() =>setIsDropDownOpen(prev => !prev)} className='flex p-4 border-y border-[#64B496]  items-center gap-2'>
                    All Catagories <IoChevronDown></IoChevronDown>
                </div>
            <div className={`absolute duration-300 ${isDropDownOpen ? "h-[400px]" : "h-0"} overflow-auto w-[200px] top-[60px] shadow-md`}>
                    {foodCategories.map((item , idx) => <div className='p-2 py-2 hover:bg-white/70 bg-white' key={idx}>{item}</div>)
                    }
                </div>
                </div>
                <button className='btn rounded-l-none m-0 outline-0 outline-offset-0 hovere:outline-0  bg-p h-auto text-white'><FaSearch></FaSearch></button>
            
        </div>
        {/* icon start */}
        <div className=''>
            <ul className='flex gap-5'> 
                <li className='flex items-center gap-2'><CiHeart></CiHeart>Wishlist</li>
                <li className='flex items-center gap-2'>
                <Link to={Login}></Link>
                    <FiUser></FiUser>Account</li> 
                <li className='flex items-center gap-2'><IoCartOutline></IoCartOutline> Cart</li>
            </ul>
        </div>
        </div>
        
        
        
    );
};
 
export default Nav;  