import React from 'react';
import { IoCafeOutline, IoCallOutline } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';


             export const route = [
            {name :"About",Link:"/about"},
            {name:"Home",Link:"/"},
            {name :"Products",Link:"/products"},
            {name :"Blog",Link:"/blog"},
            {name :"FAQ",Link:"/faq"},
        ];
const TopNav = () => {
           

    return (
        <div className='flex container mx-auto px-5 py-4 justify-between items-center    '>
            <ul className='flex gap-5'>
                {
                    route.map((item , index) =>(
                        <NavLink  key={index}
                        to ={item.Link}
                        className={({isActive,isPending}) =>
                            isPending ? "pending" : isActive ? "text-p hover:scale-110 duration-300 font-semibold" :"hover:scale-110 duration-300"
                        }
                        >{item.name } </NavLink>
                    )) }
            </ul>
    <p className='flex gap-2 items-center'>
                    <IoCallOutline className='text-lg'></IoCallOutline>
              01877977478
    </p>        
     </div>
    );
};

export default TopNav; 