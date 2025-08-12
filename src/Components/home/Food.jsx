import React from 'react';
import Image1 from "../../assets/images/Listbox → Option (1).png"
import Image2 from "../../assets/images/Listbox → Option.png"
import Image3 from "../../assets/images/Section → products-rightview.jpg.png"
const Food = () => {
    return (
        <div className='my-20 container px-10 mx-auto gap-5 grid grid-cols-2 lg:grid-cols-4'>
          <div><img className='w-full' src={Image1} alt="" /></div>  
          <div><img className='w-full' src={Image2} alt="" /></div>
          <div className='col-span-2 relative'><img className='w-full' src={Image3} alt="" />
                            <div className='absolute pt-7 space-y-2 top-20 right-5 w-fit p-5'>
                <h2 className='font-semibold text-2xl font-poppins '>Fresh & healthy <br />
                 Organic Fruits</h2>
                <p className='text-black/70'> <span className='font-bold text-xl text-p'>35%</span> Off on first order</p>
                <button className=' btn btn-md bg-p border-0 text-white font-semibold mt-3'>Shop Now</button>
</div>
</div>
        </div>
    );
};

export default Food;