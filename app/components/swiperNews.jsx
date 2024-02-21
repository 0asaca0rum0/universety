"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default function SwiperNews({ items }) {
  console.log(items);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full w-full"
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-1 text-start h-[325px] w-[346px]">
              <img
                crossorigin="anonymous"
                loading="lazy"
                src={item?.imageUrl}
                className="flex-1"
              />
              <div className="text-lg font-bold text-black">{item?.title}</div>
              <div className="text-base font-medium leading-6 text-zinc-700">
                {item?.description?.substring(0, 100)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
