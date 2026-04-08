"use client";

import React from "react";
import style from "./Services.module.css";
import Image from "next/image";

const serviceList = [
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
];

const Services = () => {
  return (
   <section className={` ${style.servicesSection} text-white`}>
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0">
      <div className="row">
        <div className="col-md-6">
          <div className="services-head mx-auto pb-5">
            <div className="service-content">
              <span className="btn btn-custom"><span>WHY CHOOSE US</span></span>
              <h2 className="heading2">Our Services</h2>
              <p>
                We are licensed by the Department of Economic Development (DED)
                and the Ministry of Economy to provide impartial audit opinions
                on corporate financial statements. Our comprehensive audit
                services assess your financial position, income, equity changes,
                cash flows, and accounting policies in line with IAS and IFRS.
                Additionally, we offer review reports, sales reports, and other
                tailored procedure assignments to meet your specific needs and
                drive your business forward.
              </p>
            </div>
            <div className="service-img">
              <Image src="/images/service-icon-img.png" alt="service icon" width={500} height={500} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <a href="external-audit.html" className="service-info">
                <div className="title-wrapper">
                  <h5 className="py-2">External <br />Audit</h5>
                  <span className="service-img-cirlce">
                    <img src="assets/images/s1.png" alt="icon" className="s1" />
                  </span>
                </div>
                <p className="para">
                  Our team is dedicated to providing professional, thorough,
                  and insightful audit services with a focus on quality and
                  precision. Here’s what sets us apart among other audit
                  companies...
                </p>
                <span className="btn btn-custom"><span> Read More </span></span>
              </a>
            </div>
            <div className="col-md-6">
              <a href="stock-audit.html" className="service-info service-info-right">
                <div className="title-wrapper">
                  <h5 className="py-2">Stock <br />Audit</h5>
                  <span className="service-img-cirlce">
                    <img src="assets/images/s2.png" alt="icon" className="s1" />
                  </span>
                </div>
                <p className="para">
                  By partnering with one of the leading audit firms in UAE,
                  you ensure that your business benefits from a transparent,
                  efficient, and accurate stock management system that drives
                  better...
                </p>
                <span className="btn btn-custom"><span> Read More </span></span>
              </a>
            </div>
            <div className="col-md-6">
              <a href="liquidation-report.html" className="service-info">
                <div className="title-wrapper">
                  <h5 className="py-2">Liquidation <br />Report</h5>
                  <span className="service-img-cirlce">
                    <img src="assets/images/s3.png" alt="icon" className="s1" />
                  </span>
                </div>
                <p className="para">
                  While the UAE is one of the most business-friendly
                  environments globally, with its strategic location and
                  thriving economy, the journey to success is not always
                  straightforward... 
                </p>
                <span className="btn btn-custom"><span> Read More </span></span>
              </a>
            </div>
            <div className="col-md-6">
              <a href="internal-audit.html" className="service-info service-info-right">
                <div className="title-wrapper">
                  <h5 className="py-2">Internal <br />Audit</h5>
                  <span className="service-img-cirlce">
                    <img src="assets/images/s4.png" alt="icon" className="s1" />
                  </span>
                </div>
                <p className="para">
                  There are many auditing companies in the UAE, but selecting
                  the right one is crucial for achieving comprehensive,
                  reliable results. As one of the top auditing companies in
                  Dubai... 
                </p>
                <span className="btn btn-custom"><span> Read More </span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;
