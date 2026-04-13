import React from 'react';
import { Trophy, ShieldCheck, Truck, Headset } from 'lucide-react';
import { BsSearch, BsPerson, BsCalendar4, BsTag } from 'react-icons/bs';

// IMPORT YOUR DOWNLOADED IMAGES HERE
import blogHero from '../../assets/Layout/Group79.png'; 
import post1 from '../../assets/images/Rectangle70.png';
import post2 from '../../assets/images/Rectangle69.png';
import post3 from '../../assets/images/Rectangle70.png';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: post1,
            title: "Going all-in with millennial design",
            date: "14 Oct 2023",
            category: "Wood",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc."
        },
        {
            id: 2,
            image: post2,
            title: "Exploring new ways of decorating",
            date: "03 Aug 2023",
            category: "Handmade",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc."
        }
    ];

    const categories = [
        { name: "Crafts", count: 2 },
        { name: "Design", count: 8 },
        { name: "Handmade", count: 7 },
        { name: "Interior", count: 1 },
        { name: "Wood", count: 6 }
    ];

    return (
        <div className="font-poppins">
            {/* 1. Hero Section */}
            <div className="relative h-[316px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${blogHero})` }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center">
                </div>
            </div>

            {/* 2. Main Blog Content Section */}
            <div className="container mx-auto px-4 lg:px-20 py-16 flex flex-col lg:flex-row gap-12">
                
                {/* Blog Posts Area */}
                <div className="lg:w-2/3 space-y-14">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group">
                            <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl mb-6" />
                            <div className="flex gap-6 text-[#9F9F9F] mb-4">
                                <span className="flex items-center gap-2"><BsPerson /> Admin</span>
                                <span className="flex items-center gap-2"><BsCalendar4 /> {post.date}</span>
                                <span className="flex items-center gap-2"><BsTag /> {post.category}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-black mb-4">{post.title}</h2>
                            <p className="text-[#9F9F9F] mb-6 leading-relaxed">{post.content}</p>
                            <button className="text-black border-b border-black pb-2 font-medium hover:text-[#B88E2F] transition-colors">
                                Read more
                            </button>
                        </article>
                    ))}
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    {/* Search */}
                    <div className="relative mb-10">
                        <input type="text" className="w-full border border-[#9F9F9F] rounded-lg py-4 px-6 outline-none" />
                        <BsSearch className="absolute right-6 top-5 text-xl" />
                    </div>

                    {/* Categories */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8">Categories</h3>
                        <ul className="space-y-6">
                            {categories.map((cat, i) => (
                                <li key={i} className="flex justify-between text-[#9F9F9F]">
                                    <span>{cat.name}</span>
                                    <span>{cat.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            {/* 3. Features Footer */}
            <div className="bg-[#FAF3EA] py-24 px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[
                    { icon: <Trophy size={40} />, title: "High Quality", desc: "crafted from top materials" },
                    { icon: <ShieldCheck size={40} />, title: "Warranty Protection", desc: "Over 2 years" },
                    { icon: <Truck size={40} />, title: "Free Shipping", desc: "Order over 150 $" },
                    { icon: <Headset size={40} />, title: "24 / 7 Support", desc: "Dedicated support" }
                ].map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <span className="text-black">{f.icon}</span>
                        <div>
                            <h4 className="text-2xl font-bold text-[#242424]">{f.title}</h4>
                            <p className="text-[#898989] font-medium">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;