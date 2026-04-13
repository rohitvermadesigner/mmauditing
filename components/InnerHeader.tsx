import React from "react";
import style from "./InnerHeader.module.css";

interface InnerHeaderProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
}

function InnerHeader({ backgroundImage = "/images/hero-banner.webp", title, subtitle }: InnerHeaderProps) {
  return (
    <section 
      className={style.innerHeader}
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="relative max-w-7xl mx-auto py-20 md:py-36 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold [text-shadow:0_4px_10px_rgba(0,0,0,0.5)] mb-4 drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)] uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-base [text-shadow:0_4px_10px_rgba(0,0,0,0.5)] drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)] md:px-48">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default InnerHeader;
