import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import Link from "next/link";

const serviceList = [
  {
    name: "External/Statutory Audit",
    des: "We carry out an independent audit of financial statements to confirm accuracy and ensure compliance with all statutory requirements. This gives stakeholders confidence in the reported figures.",
    url: "external-statutory-audit",
  },
  {
    name: "Internal Audit",
    des: "Our team examines how a company’s controls and processes actually function in practice, helping businesses identify gaps and strengthen control frameworks before they escalate.",
    url: "internal-audit",
  },
  {
    name: "Stock Audit",
    des: "Our stock audit services include physical verification of inventory alongside record checks to identify discrepancies, reduce risk, and ensure stock reporting remains reliable.",
    url: "stock-audit",
  },
  {
    name: "Review Management Report",
    des: "We prepare a focused report that reflects on management performance, and highlight key matters that may not be captured in standard financial reporting.",
    url: "review-management-report",
  },
  {
    name: "Cost Audit",
    des: "We review cost structures and expenses in detail to ensure they are recorded correctly and aligned with cost accounting principles.",
    url: "cost-audit",
  },
  {
    name: "Interim Audit Report",
    des: "We review financials during the year to maintain continuity in the audit process and minimise surprises at the final stage.",
    url: "interim-audit-report",
  },
  {
    name: "Consolidation of Financial Statements",
    des: "Our audit consultants combine financial data from multiple entities into a single, structured view of the group’s overall financial position.",
    url: "consolidation-of-financial-statements",
  },
  {
    name: "Forensic Audit",
    des: "We analyze financial records in detail to identify irregularities, establish facts, and support legal or dispute-related matters.",
    url: "forensic-audit",
  },
  {
    name: "Special Purpose Audit Report",
    des: "We conduct focused audit procedures around specific requirements, ensuring the relevant areas are properly reviewed and addressed.",
    url: "special-purpose-audit-report",
  },
  {
    name: "Compliance Audit",
    des: "Our registered auditors complete a structured check of whether operations align with applicable regulations, internal policies, and governance standards.",
    url: "compliance-audit",
  },
  {
    name: "Sales/Revenue Audit",
    des: "We test the revenue cycle end-to-end to ensure transactions are properly captured, recorded, and supported.",
    url: "sales-revenue-audit",
  },
  {
    name: "Liquidation Report",
    des: "We prepare a comprehensive liquidation report outlining assets, liabilities, and financial position, supporting regulatory requirements for trade license cancellation.",
    url: "liquidation-report",
  },
];

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

      <div className="max-w-7xl mx-auto pt-8">
        <div className="text-center">
          <span className="uppercase bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent font-semibold">
            Our Services
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-4 uppercase">
            SERVICE &nbsp;
            <span className="bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent">
              WE PROVIDE
            </span>
          </h2>
          <p className="text-[#4A5565] md:px-48 mt-4">
            Our UAE-approved auditors provide independent opinions on the audit
            of financial statements, bringing clarity and strengthening
            compliance. Beyond this, we help identify and manage risks to ensure
            operations stay aligned with expected standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8 px-4 md:px-0">
          {serviceList &&
            serviceList.map((item, index) => {
              return (
                <div key={index} className="border-[#E2E2E2] border-1 p-6 rounded-xl pb-16 h-full relative transition hover:-translate-y-2 hover:bg-gray-100 duration-200">
                  <h3 className="text-[#000A2D] font-bold">{item.name}</h3>
                  <p className="mt-2 text-[#212529]">
                    {item.des}
                  </p>
                  <Link href={item.url} className="absolute bottom-4 text-[#1A98D5] text-sm">About More &gt; </Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-12">
        <Cta />
      </div>

    </div>
  );
};
export default Services;
