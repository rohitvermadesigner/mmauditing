import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <InnerHeader
        title="About us"
        subtitle="At Mansoor Mulla Auditing of Accounts (MM Auditing), every audit is conducted in accordance with the International Standards on Auditing (ISAs) and International Financial Reporting Standards (IFRS)."
        backgroundImage="/images/header-about.webp"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="py-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-2 md:gap-12 mt-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
                The Standard for
                <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
                  {" "}
                  <br />
                  Financial Integrity
                </span>
              </h2>

              <p className="text-[#4A5565] text-justify leading-7 mb-2 mt-5">
                We believe that auditing goes beyond checking numbers. It is
                about building trust, ensuring transparency, and enabling
                businesses to grow confidently.
              </p>
              <p className="text-[#4A5565] text-justify leading-7 mb-2">
                Our UAE-approved auditors place a strong emphasis on accuracy,
                thoroughness, and integrity in every client engagement. We
                carefully review financial documentation, rigorously confirm the
                validity of each transaction, and provide clients with a
                comprehensive audit report that delivers actionable insights to
                support better decision-making.
              </p>
            </div>
            <div>
              <Image
                src="/images/trusted-audit-solutions.webp"
                width={700}
                height={0}
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-1">
              Freezone expertise you can rely on
            </h4>
            <p className="text-[#101828] italic text-justify leading-7 mb-2">
              We are proud to be approved by major freezones across the UAE,
              including JAFZA, DIFC, DAFZA, DWC, DSO, SAIF Zone, FCC, UAQ FTZ,
              Meydan FZ, AFZ, DHCC, DDA, Hamriyah FZ, DED, TECOM, RAKEZ, DMC,
              D3, and DIC.
            </p>
            <p className="text-[#4A5565] text-justify leading-7 mb-2">
              This broad network of accreditations allows us to serve our
              clients across diverse sectors with full regulatory assurance.
            </p>
            <p className="text-[#4A5565] text-justify leading-7 mb-2">
              As one of the leading audit firms in the UAE, we are registered
              with the Ministry of Economy and the Department of Economic
              Development. We have earned a strong reputation through consistent
              delivery of high-quality services, combining technical excellence
              with a client-focused approach.
            </p>
            <p className="text-[#4A5565] text-justify leading-7 mb-2">
              Our services extend beyond compliance. We are committed to helping
              clients enhance operational efficiency, strengthen financial
              controls, and make strategic decisions that drive sustainable
              growth.
            </p>
            <p className="text-[#4A5565] text-justify leading-7 mb-2">
              Our mission is to safeguard the integrity of your financial
              information so you can focus on what matters most: the growth of
              your business.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(135deg,#59168B,#942681,#293579)] text-white py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:px-64">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase">
              Our Values
            </h2>
            <p className="mt-4 text-[0.9rem]">
              At MM Auditing, our core values form the foundation of everything we do. They guide our actions, shape our culture, and drive our commitment to delivering excellence in every client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8 mt-8">
            <div className="col-span-3 md:col-span-2">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    ACCURACY
                  </h4>
                  <Image
                    src="/images/value-icon-1.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  Precision and reliability lie at the heart of our work. We are dedicated to delivering accurate, timely audit outcomes that clients can depend on. Each report is delivered in line with the highest professional standards. 
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    INTEGRITY
                  </h4>
                  <Image
                    src="/images/value-icon-2.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  We maintain absolute integrity in every situation. Guided by transparency, honesty, and unwavering moral principles, we protect sensitive information with the utmost confidentiality and discretion. As a result, relationships are built on credibility and accountability. 
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    Commitment to Compliance
                  </h4>
                  <Image
                    src="/images/value-icon-3.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  We guide our clients through the complexities of regulatory requirements with clarity and expertise. By staying abreast of evolving laws and standards, we help businesses minimise risk, maintain full compliance, and focus on sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    CLIENT CENTRIC
                  </h4>
                  <Image
                    src="/images/value-icon-4.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  Our clients are at the core of our business. We deeply value the trust they place in us and remain committed to understanding and exceeding their expectations. We put clients first, delivering meaningful interactions and tailored solutions for long-term success. 
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    PROFESSIONALISM
                  </h4>
                  <Image
                    src="/images/value-icon-5.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  We combine professional excellence with genuine respect and collaboration. Our clients count on us for consistent, dependable service delivered with the highest levels of expertise, timeliness, and integrity in every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Cta />
      </div>
    </div>
  );
};

export default About;
