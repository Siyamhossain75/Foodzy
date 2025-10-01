import React from 'react';
import { useLocation } from 'react-router-dom';
const Page = () => {
    const {pathname} = useLocation()
    const newPathName = pathname.slice(1)
    console.log(newPathName);
    
    return (
        <div className=' bg-p'>
            <div className='container flex capitalize  justify-between text-white font-semibold mx-auto p-5'>
                <p>{newPathName || ""}</p>
                <p>                    Home- {newPathName || ""}
</p>
                
            </div>
        </div>
    );
};

export default Page;