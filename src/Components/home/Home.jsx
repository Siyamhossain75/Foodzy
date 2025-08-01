import React from 'react';
import Banner from './Banner';
import Discount from './Discount';
import PopularProduct from './PopularProduct';
import BannerDiscount from './BannerDiscount';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=' font-poppins'>
        
        <Banner></Banner>
        <Discount></Discount>
        <PopularProduct></PopularProduct>
        <BannerDiscount></BannerDiscount>
        <Service></Service>
        <Testimonial></Testimonial>
        </div>
    ); 
}; 

export default Home;