//Follow this steps:

//Before using this code, please install swiper js.  
///Use this command for installing swiper: npm i swiper 
////Then just copy the full code from here. And paste to your component. You can create a component and change the component name or you can create a component as same as given. Then just change the blog section. Tittle, img and others.




import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; 

// // Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

// // import required modules
import { FreeMode, Autoplay } from "swiper";
import { FiArrowRight } from "react-icons/fi";


const SliderOne = () => {
    const blogs = [
        { title: 'Healthy food pyramid chart', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-vector/healthy-food-pyramid-chart_1308-50311.jpg' },
        { title: 'Cook healthy food for yourself', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/healthy-hearty-salad-tuna-green-beans-tomatoes-eggs-potatoes-black-olives-close-up-bowl-table_2829-4485.jpg' },
        { title: 'Always eat green vegetables', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg' },
        { title: 'Healthy breakfast proper nutrition top view flat', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/concept-healthy-food-sports-lifestyle-vegetarian-lunch-healthy-breakfast-proper-nutrition-top-view-flat-lay_2829-6082.jpg' },
        { title: 'Healthy food medical equipment', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg' },
        { title: 'Paper bag full delicious organic food diet menu', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-psd/paper-bag-full-delicious-organic-food-diet-menu_23-2148322495.jpg' },
        { title: 'Happy smiling athletic woman with arms outstretched', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/happy-smiling-athletic-woman-with-arms-outstretched_1150-4184.jpg' },
        { title: 'Girl granola honey blue white natural', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/girl-granola-honey-blue-white-natural_1428-679.jpg' },
        { title: 'Happy family having fun field sunset', date: '10 Sept, 2022', image: 'https://img.freepik.com/free-photo/happy-family-having-fun-field-sunset_1303-22471.jpg' },

    ]
    return (
        <div className=" my-10">
            <div className='flex justify-between items-center bg-light p-3 rounded-lg'>
                <h3 className='text-primary md:text-3xl text-lg font-bold py-1'>Featured Blog</h3>

                <span className='flex items-center gap-2 md:text-lg text-sm text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    },
                }}
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                modules={[FreeMode, Autoplay]}
                className=""
            >
                {
                    blogs?.map((blog, i) => <SwiperSlide key={i} className='p-4 cursor-pointer'>
                        <img src={blog?.image} alt="" className=" rounded-lg w-full h-56" />
                        <div className="mt-3">
                            <p className="text-sm md:text-md font-semibold">{blog?.date}</p>
                            <h1 className="text-lg md:text-xl font-bold text-primary">{blog.title}</h1>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default SliderOne;