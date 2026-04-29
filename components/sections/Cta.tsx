import React from "react";
import style from "./Cta.module.css";
import Link from "next/link";

function Cta() {
  return (
    <div className="max-w-7xl mx-auto  overflow-hidden text-white mb-12 px-4 md:px-0">
      <div className={` ${style.ctaSection} py-20 px-4 md:px-84 bg-[#293579] rounded-3xl`}>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4 uppercase">
          Let’s get your audit sorted.
        </h2>
        <p>
          We bring clarity and control to every audit, powering better business
          decisions.
        </p>
        <Link
          href="contact"
          className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-5 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] inline-block transform transition-all hover:-translate-y-2 duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Cta;
