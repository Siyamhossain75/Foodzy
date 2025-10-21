import React from 'react';
import Page from '../Shared/Page';
import { FiFilter } from 'react-icons/fi';
import { MdOutlineGridOn } from 'react-icons/md';
import { LuLayoutList } from 'react-icons/lu';
import { IoChevronDown } from 'react-icons/io5';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Products = () => {
            const filterOptions =[
            {
               name: "Juice & Drinks",
               productCount :20
            },
            {
               name: "Dairy & Milk",
               productCount :17
            },
            {
               name: "Snack & Spices",
               productCount :22
            },
        ]

         const filterColour=[
            {
               name: "Blue",
               colour :"#0000FF"
            },
            {
               name: "Red",
               colour :"#FF0000"
            },
            {
               name: "Green",
               colour :"#008000"
            },
        ] 
         const filterWeight=[
            {
               name: "2Kg Pack",
               
            },
            {
               name: "20Kg Pack",
               
            },
            {
               name: "56Kg Pack"
            
            },
        ] 
        const tags = [
           "Vegetables ", "Dry Fruits", "Juice" , "Food" , "Snacks" , "Chocolate" ,"Barger"
        ]
    return (

        <div>
            <Page></Page>
           <div className='container flex pt-20 gap-5  items-start w-full mx-auto px-10 my-10'>
           {/* category */}
           <div className='bg-[#E9E9E9] p-5 w-1/4 rounded-md'>
           <h1 className='text-xl font-semibold font-sans'>Product Category</h1>
           <ul className='space-y-2 my-5 text-lg '>
            {
                filterOptions.map((item , idx ) => (
                <li className='flex justify-between items-center' key={idx }>
                   <p className='flex gap-2 '>
                     <input className='checkbox bg-white checked:bg-white' type="checkbox" />
                    <span>{item.name}</span>

                   </p>
                                    
                   <span>[{item.productCount}]</span>
                </li>

                ))
            }
                       </ul>

            {/* filter by price */}
            <h1 className='text-xl mt-10 font-semibold font-sans'>Filter by price</h1>
            <div className='mt-10'>    
                        <RangeSlider 
                        onInput={(value) =>{

                        }}
                        min={0} max={100} className=''></RangeSlider>
                        <h1 className='text-xl mt-10 font-semibold font-sans'> price 50-100$</h1>
                        </div>
                        <h1 className='text-xl mt-10 font-semibold font-sans'>Product Colour</h1>

             <ul className='space-y-2 my-5 text-lg '>
            {
                filterColour.map((item , idx ) => (
                <li className='flex justify-between items-center' key={idx }>
                   <p className='flex gap-2 '>
                     <input className='checkbox bg-white checked:bg-white' type="checkbox" />
                    <span>{item.name}</span>

                   </p>
                                    
                   <span className='h-5 w-5 rounded-sm ' style={{backgroundColor : item?.colour}}></span>
                </li>

                ))
            }
                       </ul>

                       <h1 className='text-xl mt-10 font-semibold font-sans'>Product Weight</h1>

             <ul className='space-y-2 my-5 text-lg '>
            {
                filterWeight.map((item , idx ) => (
                <li className='flex justify-between items-center' key={idx }>
                   <p className='flex gap-2 '>
                     <input className='checkbox bg-white checked:bg-white' type="checkbox" />
                    <span className='text-black/70'>{item.name}</span>

                   </p>
                                    
                </li>

                ))
            }
         </ul> 
          
              
             <h1 className='text-xl mt-10 font-semibold font-sans'>Product Tages</h1>
             <div className='mt-5 flex gap-3 flex-wrap'>
                {
                    tags.map((item ,index) =>{
                    return <p className='px-4 py-2 bg-white rounded-md text-black/70'>{item}</p>

                    })

                    
}
             </div>
           
           </div>

             <div className='p-2 w-3/4  bg-[#E9E9E9] flex justify-between items-center rounded-md'>
            <div className='flex gap-2 '>
            <FiFilter className='bg-white p-1 text-3xl rounded-md'></FiFilter>
            <MdOutlineGridOn className='bg-p text-white p-1 text-3xl rounded-md'></MdOutlineGridOn>
            <LuLayoutList className='bg-white p-1 text-3xl rounded-md'></LuLayoutList>
            <p className=' text-black/70 ml-10'>We found 25 items for you</p>
            </div>
            <div className=''>
                <details className="dropdown dropdown-end">
  <summary className="btn m-1 text-black/70">Sort by : Featured <IoChevronDown></IoChevronDown></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Price (accending)</a></li>
    <li><a>Price (Decending)</a></li>
  </ul>
</details>
            </div>

            </div>
           </div>
        </div>
    );
};

export default Products;