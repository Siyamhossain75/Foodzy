import React from 'react';
import Pic from "../../assets/Layout/1a2b144527c2591118e8d9a27fb0ffa00a67cbf1.jpg"
const Deals = () => {
    return (
        <div 
        style={{backgroundImage:`url('${Pic}')`}}
        className={`my-20 py-20 w-full h-[600px] bg-cover bg-fixed`}
        >
            <div className='container mx-auto'>
           <div className="max-w-[600px] bg-white space-y-2 o p-5 rounded-md "> 
            <h2 className='text-2xl font-semibold '><span className='text-p'>35%</span> Off</h2>
            <h2 className='text-4xl font-semibold font-poppins '>Great deal on organic food.</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                   do maecenas accumsan lacus vel facilisis.</p>
                   <div className='border p-4 flex items-center gap-4  border-[#E9CBBE]'>
                    <div>
                        <h2 className='text-2xl font-bold '>326</h2>
                        <p className='text-black/70'>Days</p>
                    </div>
                    <p className='text-4xl'>:</p>
                    <div>
                        <h2 className='text-2xl font-bold '>20</h2>
                        <p className='text-black/70'>Hrs</p>
                    </div>
                    <p className='text-4xl'>:</p>
                    <div>
                        <h2 className='text-2xl font-bold '>30</h2>
                        <p className='text-black/70'>Min</p>
                    </div>
                    <p className='text-4xl'>:</p>
                    <div>
                        <h2 className='text-2xl font-bold '>20</h2>
                        <p className='text-black/70'>Sec</p>
                    </div>
                    </div>
                   </div>
            </div> 

        </div>
    );
};

export default Deals;