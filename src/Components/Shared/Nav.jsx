import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/Firebase.config';
import logo from '../../assets/Layout/logoo.png'; 

const Nav = () => {
    const [user, setUser] = useState(null); // This holds the logged-in user's data
    const navigate = useNavigate();

    // 1. Monitor Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Sets user data if logged in, null if logged out
        });
        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    // 2. Handle Logout
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Logged out successfully");
                navigate("/login");
            })
            .catch((error) => console.error("Logout Error:", error.message));
    };

    return (
        <div className="border-b border-gray-100">
            <div className="container flex items-center justify-between mx-auto py-4 px-4">
                
                {/* Logo Section */}
                <Link to="/" className='flex items-center gap-2'>
                    <img src={logo} alt="Furniro Logo" className="w-8" />
                    <h2 className='capitalize font-bold font-sans text-2xl'>Furniro</h2>
                </Link>

                {/* Icons & Navigation Links */}
                <div className='flex items-center gap-8'>
                    <ul className='flex gap-6 font-medium'> 
                        <Link to="/checkoutpage">
                            <li className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                                <CiHeart size={20} /> Checkout
                            </li>
                        </Link> 

                        <Link to="/cart">
                            <li className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                                <IoCartOutline size={20} /> Cart
                            </li>
                        </Link>

                        {/* PRO WAY: Conditional Rendering for Account Link */}
                        {!user && (
                            <Link to="/login">
                                <li className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                                    <FiUser size={20} /> Account
                                </li>
                            </Link>
                        )}
                    </ul>

                    {/* PRO WAY: Show Logout & User Info only if user is logged in */}
                    {user ? (
                        <div className='flex items-center gap-4 border-l pl-6 border-gray-200'>
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-gray-500">Welcome,</p>
                                <p className="text-sm font-bold text-black">{user.displayName || 'User'}</p>
                            </div>
                            <button 
                                onClick={handleLogOut}
                                className="bg-[#B88E2F] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#a47e2a] transition-all shadow-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        // Optional: Show a "Join Us" button if you want when logged out
                        <Link to="/signup">
                            <button className="border border-[#B88E2F] text-[#B88E2F] px-5 py-2 rounded-md font-semibold hover:bg-[#B88E2F] hover:text-white transition-all">
                                Join Us
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;