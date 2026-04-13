"use client";

import React from "react";
import style from "./Services.module.css";
import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    title: "External Audit",
    description:
      "Our auditors conduct an independent review of financial statements, testing internal controls and verifying transactions to ensure accurate, compliant, and reliable reporting.",
    icon: "/images/s1.png",
  },
  {
    title: "COMPLIANCE AUDIT",
    description:
      "We assess internal controls, review procedures, and test compliance with UAE regulatory requirements to minimize risk and ensure reliable reporting.",
      icon: "/images/s3.png",
    },
    {
      title: "STOCK AUDITC",
      description:
      "Our stock audit services focus on verifying inventory, reconciling records, and uncovering discrepancies to improve accuracy and enhance control over stock management.",
      icon: "/images/s2.png",
  },
  {
    title: "INTERNAL AUDIT",
    description:
      "Our team of internal audit consultants evaluates processes, controls, and operations to identify gaps, strengthen governance, and improve risk management across your business.",
    icon: "/images/s4.png",
  },
];

const Services = () => {
  return (
    <section className={` ${style.servicesSection} text-white`}>
      <div className="max-w-7xl mx-auto py-8 md:py-16 md:pb-28 px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="pr-12">
            <div className="services-head mx-auto pb-5">
              <div className="service-content">
                <span className="bg-[#FFFFFF] rounded-full px-4 py-2">
                  <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
                    OUR SERVICES
                  </span>
                </span>
                <h2 className="text-2xl md:text-5xl font-bold mt-5 md:leading-14">
                  Comprehensive Audit Solutions
                </h2>
                <p className="mt-6 pr-0 md:pr-20">
                  To succeed in the evolving UAE marketplace, businesses need audits that bring clarity
to financial performance. Our financial audit services in Dubai and across the UAE are
rigorous, responsive, and tailored to their size, industry, and goals. Our professional
auditors identify risks, uncover opportunities, and deliver practical, innovative insights,
empowering smarter decisions and stronger, more transparent outcomes.
                </p>
              </div>
              <div className="service-img">
                <Image
                  src="/images/service-icon-img.png"
                  alt="service icon"
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              {serviceList?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className={`bg-white rounded-xl block p-4 p-8 pb-12 relative ${index === 1 || index === 3 ? 'md:translate-y-12' : ''} `}
                  >
                    <div className="flex items-center gap-0 mb-4">
                      <h5 className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent text-[1.3rem] font-bold uppercase">
                        {item.title.split(" ")[0]} <br />
                        {item.title.split(" ")[1]}
                      </h5>
                      <div className="bg-[linear-gradient(90deg,#293579,#942681)] rounded-full font-medium flex justify-center items-center w-16 h-16 absolute right-4">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={40}
                          height={0}
                        />
                      </div>
                    </div>
                    <p className="text-[#293579] text-sm">
                      {item.description}
                    </p>
                    <span className="bg-[#2935794D] rounded-full py-[2px] px-4 absolute bottom-4 right-4">
                      <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent text-sm"> Read More</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
