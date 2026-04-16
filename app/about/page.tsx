import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <InnerHeader
        title="About us"
        subtitle="At Mansoor Mulla Auditing of Accounts, our audit services fully comply with International Standards on Auditing (ISAs) and International Financial Reporting Standards (IFRS)."
        backgroundImage="/images/header-about.webp"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="py-8">
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
            Trusted Audit &nbsp;
            <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 mt-4">
            <div>
              <p className="text-[#4A5565] text-justify leading-7">
                We offer tailored solutions to meet your needs and objectives,
                whether your business is a startup or an established enterprise.
                Our expertise spans various industries, ensuring that each
                client receives personalized and effective support. We are proud
                to be DMCC approved auditors and authorized by a wide range of
                other free zones and regulatory bodies, including
              </p>
              <p className="text-[#101828] uppercase italic mt-5 font-semibold text-justify leading-7">
                JAFZA, DIFC, DAFZA, DWC, DSO, SAIF Zone, FCC, UAQ FTZ, Meydan
                FZ, AFZ, DHCC, DDA, Hamriyah FZ, DED, TECOM, RAKEZ, DMC, D3, and
                DIC.
              </p>
              <p className="text-[#4A5565] mt-5 text-justify leading-7">
                This extensive accreditation allows us to serve clients across
                multiple sectors, providing confidence and assurance through our
                comprehensive auditing services.
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

          <p className="text-[#4A5565] mt-8">
            As one of the leading audit companies in UAE, registered with the
            Ministry of Economy and the Department of Economic Development, we
            have built a strong reputation for delivering exceptional service.
            Our services are designed to add value at every stage of your
            business, helping you maintain compliance, improve operational
            efficiency, and make smarter financial decisions for your business’s
            growth and sustainability. Our mission is to protect your financial
            integrity, giving you the peace of mind to focus on what matters
            most—growing your business with confidence.
          </p>
        </div>

      </div>

      <div className="bg-[linear-gradient(135deg,#59168B,#942681,#293579)] text-white py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:px-64">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase">
              Our Values
            </h2>
            <p className="mt-4 text-[0.9rem]">
              At Mansoor Mulla Auditing of Accounts (MM Auditing), our core
              values form the foundation of everything we do. They guide our
              actions, shape our culture, and drive our commitment to delivering
              excellence in every client engagement. These principles define how
              we serve our clients, collaborate with our team, and contribute to
              the business community.
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
                  Precision and reliability lie at the heart of our work. We are
                  dedicated to delivering accurate, timely audit outcomes that
                  clients can depend on, with every report adhering to the
                  highest professional standards.
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
                  We uphold the highest ethical standards in all circumstances. Guided by transparency, honesty,
 and unwavering moral principles, we protect sensitive information with the utmost confidentiality
 and discretion, earning the trust placed in us.
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
                  We guide our clients through the complexities of regulatory requirements with clarity and
\ expertise. By staying abreast of evolving laws and standards, we help businesses minimise risk,
 maintain full compliance, and focus on sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#101828] font-bold text-[1.2rem]">
                    CLIENT-CENTRIC
                  </h4>
                  <Image
                    src="/images/value-icon-4.svg"
                    width={65}
                    height={0}
                    alt=""
                  />
                </div>

                <p className="text-[#4A5565] mt-2 text-[0.9rem]">
                  Our clients are at the centre of our business. We deeply value the trust they place in us and
remain committed to understanding and exceeding their expectations. Being client-centric is not
merely a principle; it is our operating philosophy, ensuring every interaction is meaningful and
every solution is tailored to support their long-term success.
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
                  We combine professional excellence with genuine respect and collaboration. Our clients count
on us for consistent, dependable service delivered with the highest levels of expertise,
timeliness, and integrity in every engagement.
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
