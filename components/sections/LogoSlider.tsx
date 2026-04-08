"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const LogoSlider = () => {
  return (
    <section className="border border-1 bg-white">
      <div className="relative max-w-7xl mx-auto py-8 md:py-8 px-4 md:px-0 text-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={7}
            autoHeight={false}
          >
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation1.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation2.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation3.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation4.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation5.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation6.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation7.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation8.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation9.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/affiliation/affiliation10.webp"
                width={180}
                height={0}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
