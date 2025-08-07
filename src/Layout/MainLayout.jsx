import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import MobileHeader from '../Components/Shared/MobileHeader';
import MobileBottomnav from '../Components/Shared/MobileBottomnav';

const MainLayout = () => {
    return (
        <div>
       <div className='hidden lg:block'>
         <Header></Header>
         </div>
         <MobileHeader></MobileHeader>
         <Outlet></Outlet>
         <MobileBottomnav></MobileBottomnav>
        </div>
    );
};

export default MainLayout;