"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import style from "./Team.module.css";

export default function TeamSlider({ teams }) { 
  return (
    <section className={style.teamSection}>
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0 text-center">
        <div className="md:px-40">
          <span className="uppercase bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent font-semibold">
            Meet Our Experts
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
            Leading with Purpose and Precision
          </h2>
          <p className="text-[#4A5565] px-4 font-medium mt-2 md:px-40">
            Our team of certified professionals brings decades of combined
            experience in audit & assurance to deliver insightful audit results.
          </p>
        </div>
        <div className="mt-8">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                autoplay: { delay: 5000, disableOnInteraction: true },
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                autoplay: { delay: 5000, disableOnInteraction: true },
              },
            }}
          >
            {teams?.map((team, index) => (
              <SwiperSlide key={index}>
                <Link href="#" className="rounded-[0.9rem] inline-block h-96 group overflow-hidden">
                  <Image src={team.img} width={300} height={300} alt="" className="transition group-hover:scale-110 duration-300" />
                  <Image
                    src="/images/team-shape.webp"
                    width={300}
                    height={0}
                    alt=""
                    className="absolute bottom-[6px]"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-left">
                    <h3 className="text-base font-bold mt-4 uppercase">
                      {team.name}
                    </h3>
                    <p className="text-[0.8rem] uppercase">
                      {team.designation}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
