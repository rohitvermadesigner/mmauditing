"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Package = () => {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0 text-center">
        <div className="px-60">
          <h2 className="text-5xl font-bold text-[#2F3B51] mt-4">
            Tailored Business Solutions
          </h2>
          <p className="text-[#4A5565] px-4 font-medium mt-2">
            Covering your big picture needs with in-depth analysis, regulatory requirements and <span className="desktop-clearfix"></span> expert financial guidance.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            // navigation
            // pagination={{ clickable: true }}
            // autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={3}
            autoHeight={false}
          >
            <SwiperSlide>
              <Link
                href="#"
                className="border-2 border-[#F3F4F6] rounded-[0.9rem] p-6 text-left inline-block h-96"
              >
                <Image
                  src="/images/service-icon-1.svg"
                  width={50}
                  height={0}
                  alt=""
                />
                <h3 className="text-[#2F3B51] text-2xl font-bold mt-4">
                  Accounting & Bookkeeping
                </h3>
                <p className="text-[#4A5565] mt-4">
                  We build clear, structured accounting systems that keep your books accurate and decision-ready. From daily transactions to financial reporting, we simplify workflows and eliminate gaps so you always know where your business stands.
                </p>
                <span className="inline-flex gap-2 text-[#1C398E] mt-4 absolute bottom-6">
                  Know More <ArrowRight className="w-4" />
                </span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="border-2 border-[#F3F4F6] rounded-[0.9rem] p-6 text-left inline-block h-96"
              >
                <Image
                  src="/images/service-icon-2.svg"
                  width={50}
                  height={0}
                  alt=""
                />
                <h3 className="text-[#2F3B51] text-2xl font-bold mt-4">
                  Audit & Assurance
                </h3>
                <p className="text-[#4A5565] mt-4">
                  Our audits go beyond compliance. We review, strengthen, and validate your financial records to ensure transparency and reliability. With a structured, risk-focused approach, we help you stay audit-ready, build stakeholder confidence, and operate with clarity backed by verified numbers.
                </p>
                <span className="inline-flex gap-2 text-[#1C398E] mt-4 absolute bottom-6">
                  Know More <ArrowRight className="w-4" />
                </span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="#"
                className="border-2 border-[#F3F4F6] rounded-[0.9rem] p-6 text-left inline-block h-96"
              >
                <Image
                  src="/images/service-icon-3.svg"
                  width={50}
                  height={0}
                  alt=""
                />
                <h3 className="text-[#2F3B51] text-2xl font-bold mt-4">
                  Taxation
                </h3>
                <p className="text-[#4A5565] mt-4">
                  We simplify tax planning, registration, and compliance to keep your business aligned with UAE regulations. From VAT to corporate tax, we minimize risk, close gaps, and provide proactive guidance, ensuring accuracy, timely filings, and smarter tax decisions that protect your growth.
                </p>
                <span className="inline-flex gap-2 text-[#1C398E] mt-4 absolute bottom-6">
                  Know More <ArrowRight className="w-4" />
                </span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Package;
