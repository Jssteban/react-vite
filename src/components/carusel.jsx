import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Carousel = () =>{
    return (
      <Swiper
      slidesPerView={5}
      spaceBetween={0}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://imgs.search.brave.com/8ngvXURnE8e4yGNd5sgbCz4f4p-XUPk6-6TJLHppWJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/am9ybmFkYS5jb20u/bXgvbmRqc2ltZy9p/bWFnZXMvam9ybmFk/YS9qb3JuYWRhaW1n/L2VsLWRpYS1lbi1p/bWFnZW5lcy0yMDI0/LTA2LTExdDE1LTQw/LTQxL2VsLWRpYS1l/bi1pbWFnZW5lcy0y/MDI0LTA2LTExdDE1/LTQwLTQxLWZyYW5j/aWFqcGVnLWMxOTM1/MWJlLWE5YjgtNDlk/Zi04NzgzLWQyZDVi/MGJlMTY3OC5qcGVn" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
}
export default Carousel;