import React from 'react';
import fi from '../../assets/images/text.png'
import Page from '../Shared/Page';
import Service from '../Shared/Service';

const About = () => {
    return (
        
        <div className='mb-5'>
            <Page></Page>
    
                        <div className='container mx-auto flex gap-5 my-20'>
                        <div className='flex-1 space-y-5 '>
                    <h1 className='text-[40px] font-semibold'>About Foodzy</h1>
                    <p className='text-lg text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus aut mollitia? Repellendus ad aliquam enim dignissimos  ipsum assumenda dignissimos?</p>

                    <p className='text-lg text-black/70 '>ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus aut mollitia? Repellendus ad aliquam enim dignissimos  ipsum assumenda dignissimos?</p>
                    <p className='text-lg text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus aut mollitia? Repellendus ad aliquam enim dignissimos  ipsum assumenda dignissimos?</p>
                    <div className='bg-[#F7F7F8] p-5 flex justify-around '>
                        <div className='text-center'>
                            <h1 className='text-p text-5xl font-semibold'>100
                                <span className='text-3xl text-black/50'>K</span>
                            </h1>
                            <p>Vendors</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-p text-5xl font-semibold'>45<span className='text-3xl text-black/50'>K</span></h1>
                            <p>Customer</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-p text-5xl font-semibold'>100
                      <span className='text-3xl text-black/50'>K</span>
                            </h1>
                            <p>Products</p>
                        </div>
                    </div>
                </div>
                <img src={fi} className='flex-1' alt="" />

            </div>
            <Service></Service>
        </div>
        
    );
};

export default About;