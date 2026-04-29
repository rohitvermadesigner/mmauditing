import React from "react";
import style from "./Hero.module.css";
import { ArrowRight, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <section className={style.heroSection}>
      <div className="relative max-w-7xl mx-auto py-8 md:py-32 pt-12 md:pt-48 md:pb-56 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 md:gap-8 items-center">
          <div className="text-white">
            <h1
                className="relative text-3xl md:text-7xl mb-0 md:mb-4 leading-tight drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)] font-bold [text-shadow:0_4px_10px_rgba(0,0,0,0.5)] uppercase"
              >
                Innovative Insights, Timeless Trust
              </h1>

            <p className="mb-4 md:mb-6 text-1xl md:text-2xl [text-shadow:0_4px_10px_rgba(0,0,0,0.5)] font-semibold">
              Delivering audit clarity through a strategic approach that builds<span className="desktop-clearfix"></span> long-term trust with stakeholders and regulators.
              </p>

              <ul className="flex gap-4 flex-col md:flex-row">
                <li className="flex gap-2 bg-[#00000066] rounded-full py-2 px-4 border-[1px] border-[#FFFFFF33] text-[0.875rem] font-medium"><CheckCircle className="text-[#05DF72]" /> ISO 9001:2015 certified </li>
                <li className="flex gap-2 bg-[#00000066] rounded-full py-2 px-4 border-[1px] border-[#FFFFFF33] text-[0.875rem] font-medium"><CheckCircle className="text-[#05DF72]" /> UAE Freezone-approved auditors </li>
                <li className="flex gap-2 bg-[#00000066] rounded-full py-2 px-4 border-[1px] border-[#FFFFFF33] text-[0.875rem] font-medium"><CheckCircle className="text-[#05DF72]" /> IFRS, IAS & ISA compliant </li>
              </ul>

            <div className="flex space-x-2 md:space-x-4 mt-8">
                <a
                  href="mailto:info@800-simplify.com"
                  className="bg-[linear-gradient(90deg,#942681,#293579)] text-white px-5 md:px-8 py-2 md:py-4 rounded-full font-medium  inline-flex gap-4 items-center justifty-center shadow-[0_6px_15px_rgba(0,0,0,0.7)] mt-4 transition-all hover:-translate-y-2 duration-300"
                >
                  Get Started Today <ArrowRight size={20} />
                </a>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
