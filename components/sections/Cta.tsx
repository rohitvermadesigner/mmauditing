import React from "react";
import style from "./Cta.module.css";
import Link from "next/link";

function Cta() {
  return (
    <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden text-white mb-12">
      <div className={` ${style.ctaSection} py-20 md:px-96 bg-[#293579]`}>
        <h2 className="text-3xl md:text-4xl font-bold">
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
