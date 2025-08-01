import React from 'react';
import Discount1 from '../../assets/images/discount1.jpg.png'
import Discount2 from '../../assets/images/discount2.png'
import Discount3 from '../../assets/images/discount3.png'
const BannerDiscount = () => {
    return (
        <div className='mt-20 grid grid-cols-3 gap-6 container mx-auto'>
            <div className='relative'>
                <img src={Discount1} className='w-full' alt="" />
                  <div className='absolute pt-10 space-y-2 top-0 w-full p-5'>
                <h2 className='font-semibold text-2xl font-poppins '>Healthy <br />
                Bakery Products</h2>
                <p className='text-black/70'> <span className='font-bold text-xl text-p'>30%</span> Off on first order</p>
                <button className='btn bg-p border-0 text-white font-semibold mt-3'>Shop Now</button>

            </div>
            </div>
            <div className='relative'>
                <img src={Discount2} className='w-full' alt="" />
                  <div className='absolute space-y-2 pt-10 top-0 w-full p-5'>
                <h2 className='font-semibold text-2xl font-poppins '>Fresh <br />
                  Snacks & Sweets</h2>
                <p className='text-black/70'> <span className='font-bold text-xl text-p'>25%</span> Off on first order</p>
                <button className='btn bg-p border-0 text-white font-semibold mt-3'>Shop Now</button>

            </div>
            </div>
            <div className='relative'>
                <img src={Discount3} className='w-full' alt="" />
                  <div className='absolute pt-10 space-y-2 top-0 w-full p-5'>
                <h2 className='font-semibold text-2xl font-poppins '>Fresh & healthy <br />
                 Organic Fruits</h2>
                <p className='text-black/70'> <span className='font-bold text-xl text-p'>35%</span> Off on first order</p>
                <button className='btn bg-p border-0 text-white font-semibold mt-3'>Shop Now</button>

            </div>
            </div>
          
        </div>
    );
};

export default BannerDiscount;