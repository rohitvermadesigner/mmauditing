import React from "react";
import style from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className={`relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto py-8 md:py-24 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center pb-36 md:pb-0">
          <div>
            <span className="uppercase font-semibold bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
              ABOUT US
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
              Delivering Audit Precision
              <div className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
                Through Focused Guidance
              </div>
            </h2>
            <p className="mt-5">
              Mansoor Mulla Auditing of Accounts (MM Auditing) is a UAE-based
              audit firm, registered with the Ministry of Economy and the
              Department of Economic Development. We deliver comprehensive audit
              services across the UAE mainland and free zones, fully compliant
              with International Standards on Auditing (ISAs) and International
              Financial Reporting Standards (IFRS). Our approach blends rigor
              with adaptability, tailoring audits to each client’s business
              size, industry, and operational phase. By meticulously examining
              financial records, validating transactions, and providing
              actionable insights, we help businesses enhance transparency,
              maintain compliance, and strengthen operational efficiency.
            </p>

            <div className="block mt-8">
              <Link
                href="about"
                className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-5 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] inline-block transform transition-all hover:-translate-y-2 duration-300"
              >
                Know More
              </Link>
            </div>

            <span className="absolute top-8 right-[30rem] h-32 w-32 border-4 border-[#DAB2FF4D] rounded-full animate-ping [animation-duration:4s]"></span>
            <span className="absolute top-8 right-[30rem] h-32 w-32 border-4 border-[#DAB2FF4D] rounded-full "></span>

            <span className={`absolute -top-3 right-44 h-20 w-20 bg-[#F5E6FA] rounded-full hidden md:block ${style.aboutCirlceMove}`}></span>
            <span className="absolute -bottom-8 left-[30rem] h-32 w-32 border-4 border-[#DAB2FF4D] rounded-full animate-bounce [animation-duration:4s]"></span>
            <Image
              src="/images/about.webp"
              alt="About Us Image"
              width={1000}
              height={0}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
