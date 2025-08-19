import React from 'react';
import Bg from '../../assets/Layout/Grayscale with Bold Orange Brushstrokes.png'

import spaghettiImg from '../../assets/images/freepik__background__90128 1.png' // image without text

const Banner = () => {
    return (
        <div 
            style={{ backgroundImage:` url(${Bg}) `}} 
            className="bg-center bg-cover flex justify-between  lg:flex-row items-center"
        >
            {/* Text Section */}
            <div className="text-white max-w-lg text-center lg:ml-20 lg:text-left lg:space-y-6 lg:mx-auto lg:max-w-[400px]">
                <p className="text-lg lg:text-xl md:text-xl text-white/70">Super Delicious</p>
                <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                    THE BEST WAY TO STUFF YOUR WALLET.
                </h1>
                <p className="text-sm mt-2 lg:text-2xl lg:font-bold">Today's Best Deal</p>
                <div className="mt-4 inline-block px-4 py-2 bg-white text-black font-bold rounded-full">
                    50% OFF
                </div>
            </div>

            {/* Image Section */}
            <div className="mt-6 lg:mt-0">
                <img src={spaghettiImg} alt="Delicious Spaghetti" className="h-[500px]md:w-96" />
            </div>
        </div>
    );
};

export default Banner;