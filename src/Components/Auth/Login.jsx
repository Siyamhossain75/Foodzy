import React from 'react';
import Page from '../Shared/Page';
import logo from "../../assets/Layout/Logo.png"

const Login = () => {
    return (
        <div>
            <Page></Page>
        <div className='flex justify-center items-center' >
        
         <div className='max-w-lg w-full py-20 p-10 bg-white shadow-md'>
          <div className='flex justify-center items-center'>
                      <img src={logo}></img>
                      <div>
                          <h2 className='capitalize font-bold font-sans text-2xl'> Foodzy</h2>
                          <p className='text-sm font-semibold'> A Treasure of Tastes</p>
         
                          </div>
                          
                          </div>
                           <fieldset className="fieldset ">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input w-full focus:outline-0 focus:border-p " placeholder="Enter your Email" />

  <label className="label">Password</label>
  <input type="password" className="input w-full focus:outline-0 focus:border-p" placeholder="Enter your Password" />

</fieldset>
        < div className='flex my-4 justify-between'>
        <input type="checkbox" defaultChecked className="checkbox checked:bg-p checked:text-white"/>
        <p className='text-black/70'>Forget Password</p>
        </div>
        < div className='flex my-4 items-center mt-10 justify-between'>
          <button className='btn bg-p text-amber-50'>login</button>
        <p className='text-black/70'>Sign Up</p>
        </div>
        
         </div>
        </div>
        </div>
    );
};

export default Login;