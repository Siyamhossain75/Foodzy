import React from 'react';
import Bg from '../../assets/Layout/Background.png'
import subBg from '../../assets/images/freepik__background__90128 1.png'
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div             style={{ backgroundImage: `url(${Bg})` }}

        className=' bg-center bg-cover flex justify-between'>
            <div className=''></div>
            <div>
                <img src={subBg} className='h[500px]' alt="" />
            </div>
        </div>
    );
};

export default Banner;