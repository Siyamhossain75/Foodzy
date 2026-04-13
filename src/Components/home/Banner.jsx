import React from 'react';
import Bg from '../../assets/Layout/Mainbg.png'

import spaghettiImg from '../../assets/images/freepik__background__90128 1.png' // image without text
import sc from "../../assets/images/Group 114.png"
const Banner = () => {
    return (
        <div 
            style={{ backgroundImage:` url(${Bg}) `}} 
            className="bg-center bg-cover flex justify-between  lg:flex-row items-center"
        >
            {/* Text Section */}
            <div className="mt-6 lg:mt-100 ml-200 mb-20">
                <img src={sc} alt="Delicious Spaghetti" className="h-[500px]md:w-96" />
            </div>

            {/* Image Section */}
            
        </div>
    );
};

export default Banner;