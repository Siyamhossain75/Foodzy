import React from 'react';
import Title from '../Shared/Title';
import card1 from "../../assets/Layout/div.cr-blog-image.png"
import card2 from "../../assets/Layout/card2.png"
import card3 from "../../assets/Layout/card3.png"
const News = () => {
    return (
       <div className='my-20  mx-auto container px-10'>
          <Title title={"Latest News"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore lacus vel facilisis."}></Title>
        <div className='grid lg:grid-cols-3 gap-5'>
        
          <div className="card shadow-sm">
            <div className="card-body">
    <h2 className="text-black/70">By Admin | Snacks</h2>
    <p className='font-bold text-xl font-sans'>Urna pretium elit mauris cursus at elit
              Vestibulum.</p>
              <h2 className='text-[#64B496] text-xl font-semibold'>Read More</h2>
    <div className="card-actions justify-end">
    </div>
  <figure>
    <img
      src={card1}
      alt="Shoes" />
  </figure>
  
  </div>
</div>

 <div className="card shadow-sm">
            <div className="card-body">
    <h2 className="text-black/70">By Admin | Snacks</h2>
    <p className='font-bold text-xl font-sans'>Urna pretium elit mauris cursus at elit
              Vestibulum.</p>
              <h2 className='text-[#64B496] text-xl font-semibold'>Read More</h2>
    <div className="card-actions justify-end">
    </div>
  <figure>
    <img
      src={card2}
      alt="Shoes" />
  </figure>
  
  </div>
</div>

<div className="card shadow-sm">
            <div className="card-body">
    <h2 className="text-black/70">By Admin | Snacks</h2>
    <p className='font-bold text-xl font-sans'>Urna pretium elit mauris cursus at elit
              Vestibulum.</p>
              <h2 className='text-[#64B496] text-xl font-semibold'>Read More</h2>
    <div className="card-actions justify-end">
    </div>
  <figure>
    <img
      src={card3}
      alt="Shoes" />
  </figure>
  
  </div>
</div>
</div>
       </div>
    );
};

export default News;