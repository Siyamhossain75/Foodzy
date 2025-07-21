import React from 'react';
import Bg from '../../assets/Layout/Background.png'
import subBg from '../../assets/images/freepik__background__90128 1.png'
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div style={{backgroundImage:`url('${Bg}')`}}
        className=' bg-center bg-cover flex justify-between'>
            <div className=''><button className='absolute bottom-1 text-center left-1/20 p-3 bg-[#CD7A1D] flex items-center P-2 rounded-full gap-2 '>
                <div className='bg-white p-2 text-black rounded-full'><FaArrowRight></FaArrowRight></div>Order now</button></div>
            <div>
                <img src={subBg} className='h[500px]' alt="" />
            </div>
        </div>
    );
};

export default Banner;