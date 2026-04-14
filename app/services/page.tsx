import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import React from "react";

const Services = () => {
  return (
    <div>
      <InnerHeader
        title="SERVICES"
        subtitle="We are certified by the Ministry of Economy, licensed by the Department of Economic
Development (DED), and approved by major free zones in the UAE. Our auditing services in
 the UAE ensure financial reporting meets the expectations of regulators, banks, and key
stakeholders."
        backgroundImage="/images/header-services.webp"
      />

       <div className="mt-12">
        <Cta />
      </div>

    </div>
  );
};
export default Services;
