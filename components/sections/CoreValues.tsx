"use client";

import React from "react";
import style from "./CoreValues.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValueList = [
  {
    title: "ACCURACY",
    description:
      "Precision and accuracy in every audit, ensuring clarity and compliance.",
    icon: "/images/core-values-icon-1.svg",
  },
  {
    title: "INTEGRITY",
    description:
      "Transparency, integrity, and ethics, with unwavering confidentiality and discretion.",
    icon: "/images/core-values-icon-2.svg",
  },
  {
    title: "CLIENT CENTRIC",
    description:
      "Delivering focused support and exceptional service, aligned with client goals.",
    icon: "/images/core-values-icon-3.svg",
  },
  {
    title: "COMPLIANCE FOCUS",
    description:
      "Guiding clients through UAE regulations to stay compliant and minimise risk.",
    icon: "/images/core-values-icon-4.svg",
  },
  {
    title: "PROFESSIONALISM",
    description:
      "We combine professional excellence with genuine respect and collaboration.",
    icon: "/images/core-values-icon-4.svg",
  },
];

const CoreValues = () => {
  return (
    <section className={` ${style.coreValuesSection} text-white`}>
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0 text-center">
        <div className="md:px-60">
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
            Core Values Driving Every Decision
          </h2>
          <p className="px-4 font-medium mt-2">
            Our core values guide every engagement, delivering transparency,
            quality, and alignment for clients, team, and community.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            autoHeight={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                autoplay: { delay: 3000, disableOnInteraction: true },
              },
              1024: {
                slidesPerView: 5,
                autoplay: { delay: 3000, disableOnInteraction: true },
              },
            }}
          >
            {coreValueList?.map((item, index) => {
              return (
                <SwiperSlide key={index} className="py-4">
                  <div className="bg-[linear-gradient(0deg,_#293579,_#942681)] border-[1px] border-[#a5529a] rounded-[0.9rem] p-4 text-left inline-block h-60 hover:translate-y-[-10px] transition-transform duration-300">
                    <Image
                      src={item.icon}
                      width={50}
                      height={0}
                      alt={item.title}
                    />
                    <h3 className="text-[1.1rem] font-bold mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm">{item.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
