import React from 'react';
import Banner from './Banner';
import Discount from './Discount';
import PopularProduct from './PopularProduct';

const Home = () => {
    return (
        <div className=' font-poppins'>
        
        <Banner></Banner>
        <Discount></Discount>
        <PopularProduct></PopularProduct>
        </div>
    ); 
}; 

export default Home;