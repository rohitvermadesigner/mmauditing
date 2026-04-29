"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const logos = [
  "/images/affiliation/affiliation1.webp",
  "/images/affiliation/affiliation2.webp",
  "/images/affiliation/affiliation3.webp",
  "/images/affiliation/affiliation4.webp",
  "/images/affiliation/affiliation5.webp",
  "/images/affiliation/affiliation6.webp",
  "/images/affiliation/affiliation7.webp",
  "/images/affiliation/affiliation8.webp",
  "/images/affiliation/affiliation9.webp",
  "/images/affiliation/affiliation10.webp",
];

const LogoSlider = () => {
  return (
    <section className="bg-white">
      <div className="relative max-w-7xl mx-auto py-8 md:py-8 px-4 md:px-0 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
          <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
            Approved auditors 
          </span>&nbsp;in Major UAE Freezones
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoHeight={false}
          className="mt-8"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                autoplay: { delay: 3000, disableOnInteraction: true },
              },
              1024: {
                slidesPerView: 7,
                autoplay: { delay: 3000, disableOnInteraction: true },
              },
            }}
        >
          {logos?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={item} width={180} height={0} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default LogoSlider;
