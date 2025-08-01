import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';

const MainLayout = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;