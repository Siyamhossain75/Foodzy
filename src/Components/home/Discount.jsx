import React from 'react';
import Discount1 from "../../assets/images/bcc.png"
import Discount2 from "../../assets/images/dcc.png"
import Discount3 from "../../assets/images/ccc.png"
import Title from '../Shared/Title';

const Discount = () => {


    return (
      <div className='container px-10 mx-auto'>
        <Title title={'Browse The Range'}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Title>
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-5 p-20 mx-auto px-5'> 
            

            {/* start */}
            <div className='relative'> 
             <img className='h-full' src={Discount1} alt="" />
             <div className='absolute text-white top-0 left-0 right-0 bottom-0'>

             </div>
            </div>
            <div className='relative'> 
             <img className='h-full' src={Discount3} alt="" />
             <div className='absolute text-white top-0 left-0 right-0 bottom-0'>

             </div>
            </div>
            <div className='relative'> 
             <img className='h-full' src={Discount2} alt="" />
             <div className='absolute text-white top-0 left-0 right-0 bottom-0'>
             </div>
            </div>
    </div>
    </div>
    ); 
};

export default Discount;