import React from 'react';

// IMPORT YOUR DOWNLOADED IMAGES HERE
// Adjust these paths to match your assets folder structure
import img1 from '../../assets/images/Rectangle36.png';
import img2 from '../../assets/images/Rectangle37.png';
import img3 from '../../assets/images/Rectangle38.png';
import img4 from '../../assets/images/Rectangle39.png';
import img5 from '../../assets/images/Rectangle40.png';
import img6 from '../../assets/images/Rectangle41.png';
import img7 from '../../assets/images/Rectangle43.png';
import img8 from '../../assets/images/Rectangle44.png';
import img9 from '../../assets/images/Rectangle45.png';

const FurnitureGallery = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            {/* Header Section */}
            <div className="text-center mb-8">
                <p className="text-[#616161] font-semibold text-lg">Share your setup with</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mt-2">
                    #FuniroFurniture
                </h2>
            </div>

            {/* Masonry-style Layout */}
            {/* Using columns-1 to columns-4 creates the staggered height effect from your design */}
            <div className="container mx-auto px-4">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    
                    {/* Image 1 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img1} 
                            alt="Gallery 1" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img2} 
                            alt="Gallery 2" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img3} 
                            alt="Gallery 3" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img4} 
                            alt="Gallery 4" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 5 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img5} 
                            alt="Gallery 5" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 6 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img6} 
                            alt="Gallery 6" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 7 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img7} 
                            alt="Gallery 7" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 8 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img8} 
                            alt="Gallery 8" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                    {/* Image 9 */}
                    <div className="relative overflow-hidden group break-inside-avoid">
                        <img 
                            src={img9} 
                            alt="Gallery 9" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FurnitureGallery;