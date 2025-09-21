import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import MobileHeader from '../Components/Shared/MobileHeader';
import MobileBottomnav from '../Components/Shared/MobileBottomnav';
import Food from '../Components/home/Food';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
       <div className='hidden lg:block'>
         <Header></Header>
         </div>
         <MobileHeader></MobileHeader>
         <Outlet></Outlet>
         <MobileBottomnav></MobileBottomnav>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;