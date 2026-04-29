"use client";

import React from "react";
import style from "./Services.module.css";
import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    title: "External Audit",
    description:
      "Our external auditors independently examine your financial statements and records. The resulting report gives leadership a clear, decision-ready view of financial position and performance.",
    icon: "/images/s1.png",
  },
  {
    title: "COMPLIANCE AUDIT",
    description:
      "We identify and address compliance gaps early through a structured audit process, ensuring ongoin regulatory adherence.",
    icon: "/images/s3.png",
  },
  {
    title: "STOCK AUDIT",
    description:
      "Inventory discrepancies impact margins and create reporting problems. Our stock audits verify physical inventory and investigate variances through detailed reconciliation processes. Our clear recommendations align stock management with best practices.",
    icon: "/images/s2.png",
  },
  {
    title: "INTERNAL AUDIT",
    description:
      "Strong governance begins with clear operational insights. That’s why we systematically assess your processes, controls, and operations to identify risks and governance gaps. Our internal audits go beyond a checklist, delivering actionable findings that improve business performance.",
    icon: "/images/s4.png",
  },
];

const Services = () => {
  return (
    <section className={` ${style.servicesSection} text-white`}>
      <div className="max-w-7xl mx-auto py-8 md:py-16 md:pb-28 px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:pr-12">
            <div className="services-head mx-auto pb-5">
              <div className="service-content">
                <span className="bg-[#FFFFFF] rounded-full px-4 py-2">
                  <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
                    OUR SERVICES
                  </span>
                </span>
                <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
                  Our Comprehensive Audit Solutions
                </h2>
                <p className="mt-6 pr-0 md:pr-20">
                  To succeed in the evolving UAE economy, businesses need audits that bring clarity to financial performance. Our professional auditors identify risks, uncover opportunities, and deliver practical, data-driven insights, empowering smarter decisions and stronger, more transparent outcomes.
                </p>
              </div>
              <div className="service-img relative md:mt-32 md:block hidden">
                  <Image
                    src="/images/service-icon/1.png"
                    alt="service icon"
                    width={30}
                    height={30}
                    className={`${style.serviceIcon1} img-fluid absolute top-10 left-4`}
                  />
                  <Image
                    src="/images/service-icon/2.png"
                    alt="service icon"
                    width={42}
                    height={42}
                    className={`${style.serviceIcon2} img-fluid absolute top-24 left-16`}
                  />
                  <Image
                    src="/images/service-icon/3.png"
                    alt="service icon"
                    width={10}
                    height={10}
                    className={`${style.serviceIcon3} img-fluid absolute top-20 left-28`}
                  />
                  <Image
                    src="/images/service-icon/4.png"
                    alt="service icon"
                    width={60}
                    height={60}
                    className={`${style.serviceIcon4} img-fluid absolute top-12 left-42`}
                  />
                  <Image
                    src="/images/service-icon/5.png"
                    alt="service icon"
                    width={30}
                    height={30}
                    className={`${style.serviceIcon5} img-fluid absolute top-0 left-56`}
                  />
                  <Image
                    src="/images/service-icon/6.png"
                    alt="service icon"
                    width={30}
                    height={30}
                    className={`${style.serviceIcon6} img-fluid absolute top-12 left-84`}
                  />
                  <Image
                    src="/images/service-icon/7.png"
                    alt="service icon"
                    width={24}
                    height={24}
                    className={`${style.serviceIcon7} img-fluid absolute top-12 right-32`}
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
                    className={`bg-white rounded-xl block p-4 p-8 pb-12 relative transition hover:-translate-x-2 duration-300 ${index === 1 || index === 3 ? "md:translate-y-12" : ""} `}
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
                    <p className="text-[#293579] text-sm">{item.description}</p>
                    <span className="bg-[#2935794D] rounded-full py-[2px] px-4 absolute bottom-4 right-4">
                      <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent text-sm">
                        {" "}
                        Read More
                      </span>
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
