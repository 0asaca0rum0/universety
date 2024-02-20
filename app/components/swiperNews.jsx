"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default function SwiperNews({items}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <img
              crossorigin="anonymous"
              loading="lazy"
              src={item?.imageUrl}
            />
            <div className="mt-2 text-lg font-bold text-black">
              {item?.title}
            </div>
            <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
              {item?.description?.substring(0, 20)}
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
