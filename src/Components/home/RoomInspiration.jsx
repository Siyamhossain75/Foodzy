import React from 'react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// IMPORT YOUR DOWNLOADED IMAGES HERE
import room1 from '../../assets/images/Rectangle24.png'; 
import room2 from '../../assets/images/Rectangle25.png';
import { BsArrowRight } from 'react-icons/bs';

const RoomInspiration = () => {
    return (
        <section className="bg-[#FCF8F3] py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-5 lg:flex items-center gap-12">
                
                {/* Text Content */}
                <div className="lg:w-1/3 mb-10 lg:mb-0">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4 leading-tight">
                        50+ Beautiful rooms inspiration
                    </h2>
                    <p className="text-[#616161] text-lg mb-8 max-w-sm">
                        Our designer already made a lot of beautiful prototypes of rooms that inspire you
                    </p>
                    <button className="bg-[#B88E2F] text-white px-9 py-3 font-semibold hover:bg-[#a47e2a] transition-all">
                        Explore More
                    </button>
                </div>

                {/* Swiper Slider Section */}
                <div className="lg:w-2/3 relative">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={24}
                        centeredSlides={false}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        className="roomSwiper"
                    >
                        {/* Slide 1 (The one with the overlay) */}
                        <SwiperSlide className="!w-[350px] md:!w-[400px]">
                            <div className="relative h-[582px]">
                                <img src={room1} alt="Inner Peace" className="w-full h-full object-cover" />
                                
                                <div className="absolute bottom-10 left-6 flex items-end">
                                    <div className="bg-white/70 backdrop-blur-md p-8 pr-14">
                                        <div className="flex items-center gap-2 text-[#616161] mb-2">
                                            <span>01</span>
                                            <div className="w-7 h-[1px] bg-[#616161]"></div>
                                            <span>Bed Room</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#3A3A3A]">Inner Peace</h3>
                                    </div>
                                    <button className="bg-[#B88E2F] p-3 text-white">
                                        <BsArrowRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide className="!w-[300px] md:!w-[350px]">
                            <div className="h-[480px]">
                                <img src={room2} alt="Modern Vibes" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>

                        {/* Add more slides as needed */}
                        <SwiperSlide className="!w-[300px] md:!w-[350px]">
                            <div className="h-[480px] bg-gray-200 flex items-center justify-center text-gray-400">
                                More inspiration...
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Custom CSS for Swiper dots to match Furniro Gold */}
                    <style>{`
                        .roomSwiper .swiper-pagination {
                            position: relative;
                            text-align: left;
                            margin-top: 40px;
                        }
                        .roomSwiper .swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                            background: #D8D8D8;
                            opacity: 1;
                        }
                        .roomSwiper .swiper-pagination-bullet-active {
                            background: #B88E2F;
                            outline: 2px solid #B88E2F;
                            outline-offset: 4px;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default RoomInspiration;