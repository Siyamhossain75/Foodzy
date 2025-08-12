import React from 'react';
import Title from '../Shared/Title';
import profile1 from "../../assets/images/1.jpg.png"
import profile3 from "../../assets/images/3.jpg.png"
import profile2 from "../../assets/images/2.jpg.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
const Testimonial = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <Title title={"Great Words From People"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."}></Title>
        <div className='pt-10'>

        
         
                <Swiper
breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },  }}
        spaceBetween={30}
        freeMode={true}
        autoplay ={
          {delay : 1100}
        }
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper !pt-20"
      >
       {
        Array.from({length :3}).map(() => <>
            <SwiperSlide> 
               <div className='h-[300px] mb-20 w-[400px] flex flex-col justify-start items-center border border-gray-300'>
               <div className=' p-5  border-l-gray-300 border-l border-b-gray-300 border-b border border-white -rotate-45 -mt-18 bg-white rounded-full w-fit '>
                <img src={profile1} className='w-25 h-25 object-cover rotate-45' alt="" />
                </div>
                <p className='text-black/60'>Co Founder</p>
                <h2 className='font-bold text-2xl font-sans'>Stephen Smith</h2>
                <p className='text-black/70 mt-5 text-center'>“eiusmpsu dolor sit amet, conse cte tur <br />
                    ng elit, sed do eiusmod tem lacus vel <br />
                    facilisis.”</p>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                   <div className='h-[300px] mb-20 w-[400px] flex flex-col justify-start items-center border border-gray-300'>
               <div className=' p-5  border-l-gray-300 border-l border-b-gray-300 border-b border border-white -rotate-45 -mt-18 bg-white rounded-full w-fit '>
                <img src={profile2} className='w-25 h-25 object-cover rotate-45' alt="" />
                </div>
                <p className='text-black/60'>Manager</p>
                <h2 className='font-bold text-2xl font-sans'>Lorem Robinson</h2>
                <p className='text-black/70 mt-5 text-center'>“eiusmpsu dolor sit amet, conse cte tur <br />
                    ng elit, sed do eiusmod tem lacus vel <br />
                    facilisis.”</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='h-[300px] mb-20 w-[400px] flex flex-col justify-start items-center border border-gray-300'>
               <div className=' p-5  border-l-gray-300 border-l border-b-gray-300 border-b border border-white -rotate-45 -mt-18 bg-white rounded-full w-fit '>
                <img src={profile3} className='w-25 h-25 object-cover rotate-45' alt="" />
                </div>
                <p className='text-black/60'>Team Leader</p>
                <h2 className='font-bold text-2xl font-sans'>Saddika Alard</h2>
                <p className='text-black/70 mt-5 text-center'>“eiusmpsu dolor sit amet, conse cte tur <br />
                    ng elit, sed do eiusmod tem lacus vel <br />
                    facilisis.”</p>
                </div>
                </SwiperSlide>

                
                 </>

        )
       }
      </Swiper>
        </div>
        </div>

    );
};

export default Testimonial;