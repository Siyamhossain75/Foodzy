import React from 'react';
import { BsCashCoin } from 'react-icons/bs';
import { GiBoxUnpacking } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const Service = () => {
    return (
        <div className='grid mt-20 container mx-auto grid-cols-4 gap-5'>
            <div className='bg-[#F7F7F8] flex flex-col items-center justify-center p-10 text-center w-full '>
                <GiBoxUnpacking className='text-5xl '></GiBoxUnpacking>
                <h2 className='font-semibold text-2xl mt-2'>Product packing</h2>
                <p className='text-black/60 mt-2'>Lorem ipsum dolor sit amet,<br />
                  consectetur adipisicing.</p>
            </div>
            <div className='bg-[#F7F7F8] flex flex-col items-center justify-center p-10 text-center w-full '>
                <MdOutlineSupportAgent className='text-5xl'></MdOutlineSupportAgent>
                <h2 className='font-semibold text-2xl mt-2'>24X7 Support</h2>
                <p className='text-black/60 mt-2'>Lorem ipsum dolor sit amet,<br />
                  consectetur adipisicing.</p>
            </div>
            <div className='bg-[#F7F7F8] flex flex-col items-center justify-center p-10 text-center w-full '>
                <TbTruckDelivery className='text-5xl'></TbTruckDelivery>

                <h2 className='font-semibold text-2xl mt-2'>Delivery in 5 Days</h2>
                <p className='text-black/60 mt-2'>Lorem ipsum dolor sit amet,<br />
                  consectetur adipisicing.</p>
            </div>
            <div className='bg-[#F7F7F8] flex flex-col items-center justify-center p-10 text-center w-full '>
                <BsCashCoin className='text-5xl'></BsCashCoin>

                <h2 className='font-semibold text-2xl mt-2'>Payment Secure</h2>
                <p className='text-black/60 mt-2'>Lorem ipsum dolor sit amet,<br />
                  consectetur adipisicing.</p>
            </div>
        </div>
    );
};

export default Service; 