import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import productBanner from '../../assets/images/div.banner-img.png'
import Product from '../Shared/Product';
import { products } from '../../Data/popularProductData';

const PopularProduct = () => {
    const category =["all","Snacks","Vegetable", "Fruit","Bekary"]

    return (
        <div className='container mx-auto'>  

      <div className='text-center'>
            <h1 className='text-5xl font-bold'>Popular Products</h1>
            <p className='max-w-lg mx-auto mt-4 text-black/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore lacus vel facilisis.</p>
        </div>
        

<div className="grid grid-cols-4 gap-5 mt-10">
                        
                        <div className='space-y-2 text-center'>
                {category.map((item , idx ) =>(
                    <div className='p-3 flex justify-between bg-[#E9E9E9]' key={idx}>
                     <h2 className='text-xl font-semibold'>{item}</h2>
                     <p className='text-black/70'><FaArrowRight></FaArrowRight></p>

                </div>
            ))}
                <div className='relative h-[950px] w-full'>
                   <img src={productBanner} className='w-full h-full object-cover' alt="" />
                   <div className='absolute text-left top-25 space-y-2  text-white left-10 '>
                    <p className='text-3xl text-white/90'>Juicy</p>
                    <h2 className='text-5xl font-semibold text-[#F7E855]'>FRUITS</h2>
                    <p className='text-white/70'>100% Natural</p>
                     <button className='btn bg-p border-0 text-white font-semibold mt-3'>Shop Now</button>
                   </div> 
                     </div>
                     </div>
                    <div className=' grid grid-cols-3 col-span-3 gap-5'>
                 {
                    products.map((item , idx)=> 
                        <Product key={idx} item={item}></Product>
                    )
                 }
                                                   
                </div> 
        </div>
        </div>
    );
};

export default PopularProduct;