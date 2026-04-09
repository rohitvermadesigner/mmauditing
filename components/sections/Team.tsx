"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import style from "./Team.module.css";

const teams = [
  {
    name: "DR. MANSOOR M.H. MULLA",
    designation: "MANAGING DIRECTOR",
    img: "/images/team/mansoor.webp",
  },
  {
    name: "SAJID SAJJAD",
    designation: "CEO",
    img: "/images/team/sajid.webp",
  },
  {
    name: "MD AASIM AASI",
    designation: "Senior Manager - Audit & Assurance",
    img: "/images/team/aasim.webp",
  },
  {
    name: "MONIKA MISTRY",
    designation: "Senior Manager - Tax Advisory",
    img: "/images/team/monika.webp",
  },
  {
    name: "PURVAK UMRANIYA",
    designation: "Senior FINANCE Manager",
    img: "/images/team/purvak.webp",
  },
  {
    name: "JAIDEEP JAYARAJ",
    designation: "Senior Manager - Business Consulting",
    img: "/images/team/jaideep.webp",
  },
  {
    name: "ABDALLAH ACHLAIBOU",
    designation: "Senior Manager - Business Consulting",
    img: "/images/team/abdallah.webp",
  },
  {
    name: "IMTIAZ HUSSAIN",
    designation: "Senior Manager - Corporate Services",
    img: "/images/team/imtiaz.webp",
  },
  {
    name: "ROZEL DE LOS REYES",
    designation: "Client Servicing Manager",
    img: "/images/team/rozel.webp",
  },
  {
    name: "SYED SAYEED ALAM",
    designation: "Manager - Business Consulting",
    img: "/images/team/syed.webp",
  },
  {
    name: "ADEL MOHAMMAD",
    designation: "Manager - Government Relations",
    img: "/images/team/adel.webp",
  },
  {
    name: "DYAN MONTOYA",
    designation: "Assistant Manager - Audit",
    img: "/images/team/dyan.webp",
  },
  {
    name: "KETA BHAVSAR",
    designation: "Senior Auditor",
    img: "/images/team/keta.webp",
  },
  {
    name: "ROSHANI @ AYE THIN ZAR",
    designation: "Auditor",
    img: "/images/team/roshani.webp",
  },
  {
    name: "HABIB HUSENI MITHIBORWALA",
    designation: "Auditor",
    img: "/images/team/habib.webp",
  },
  {
    name: "SURAJ BHATTARAI",
    designation: "Auditor",
    img: "/images/team/suraj.webp",
  },
  {
    name: "ABDUL VASIH",
    designation: "Team Lead - Accounts",
    img: "/images/team/abdul.webp",
  },
  {
    name: "HASAN ANWAR",
    designation: "Team Lead - Accounting and Bookkeeping",
    img: "/images/team/hasan.webp",
  },
  {
    name: "SHOAIB BALOCH",
    designation: "Senior Accountant",
    img: "/images/team/shoaib.webp",
  },
  {
    name: "SARIKA BOLAR",
    designation: "Senior Accountant",
    img: "/images/team/sarika.webp",
  },
  {
    name: "SNEHA THAKAR",
    designation: "Senior Accountant",
    img: "/images/team/sneha.webp",
  },
  {
    name: "BINNYMOL FRANCIS",
    designation: "Accountant",
    img: "/images/team/binnymol.webp",
  },
  {
    name: "POOJA SAHA DEV",
    designation: "Accountant",
    img: "/images/team/pooja.webp",
  },
  {
    name: "GEETHI DILEEP",
    designation: "Junior Accountant",
    img: "/images/team/geethi.webp",
  },
  {
    name: "NATALIA VASYUKOVA UMRANI",
    designation: "Business Coordinator",
    img: "/images/team/natalia.webp",
  },
];

const Team = () => {
  return (
    <section className={style.teamSection}>
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0 text-center">
        <div className="md:px-40">
          <span className="uppercase bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-14">
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
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={4}
            autoHeight={false}
          >
            {teams?.map((team, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href="#" className="rounded-[0.9rem] inline-block h-96">
                    <Image src={team.img} width={300} height={0} alt="" />
                    <Image
                      src="/images/team-shape.webp"
                      width={300}
                      height={0}
                      alt=""
                      className="absolute -bottom-[5px]"
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
              );
            })}
          </Swiper>
        </div>
        <Link
          href="team"
          className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-6 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] inline-block transform transition-all hover:-translate-y-2 duration-300 absolute right-0 bottom-16 z-50"
        >
          View All Team
        </Link>
      </div>
    </section>
  );
};

export default Team;
