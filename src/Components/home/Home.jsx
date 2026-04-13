import React from 'react';
import Banner from './Banner';
import PopularProduct from './PopularProduct';
import BannerDiscount from './RoomInspiration';
import Service from '../Shared/Service';
import Testimonial from './Testimonial';
import Food from './Food';
import Deals from './Deals';
import News from './News';
import Footer from '../Shared/Footer';
import RoomInspiration from './Discount';
import Discount from './Discount';

const Home = () => {
    return (
        <div className=' font-poppins'>
        
        <Banner></Banner>
        <Discount></Discount>
        <PopularProduct></PopularProduct>
        <BannerDiscount></BannerDiscount>
        <Service></Service>
        {/* <Deals></Deals>
        <Food></Food>
    
        <Testimonial></Testimonial>
        <News></News> */}
        </div>
    ); 
}; 

export default Home;