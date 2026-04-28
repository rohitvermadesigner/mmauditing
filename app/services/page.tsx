import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import Link from "next/link";

const serviceList = [
  {
    name: "External/Statutory Audit",
    des: "Our external auditors independently examine your financial statements and records. The resulting report gives leadership a clear, decision-ready view of financial position and performance.",
    url: "external-statutory-audit",
  },
  {
    name: "Internal Audit",
    des: "As strong governance is built on clear operational insights, we assess your processes, controls, and operations to identify risks and governance gaps. Our internal audits go beyond a checklist, delivering actionable findings that improve business performance.",
    url: "internal-audit",
  },
  {
    name: "Stock Audit",
    des: "Inventory discrepancies can impact margins and create reporting problems. Our stock audits verify physical inventory and investigate variances through detailed reconciliation processes. Our clear recommendations align stock management with best practices.",
    url: "stock-audit",
  },
  {
    name: "Review Management Report",
    des: "Our team assesses key performance areas to identify priorities, risks, and improvement opportunities. We prepare a comprehensive management report that supports effective decision-making and strengthens long-term organisational stability. ",
    url: "review-management-report",
  },
  {
    name: "Cost Audit",
    des: "To enhance business profitability, costs must be justified and effectively managed. Our cost audits examine allocations across materials, labour, and overheads to identify inefficiencies and improve cost control.",
    url: "cost-audit",
  },
  {
    name: "Interim Audit Report",
    des: "Mid-cycle reviews help identify financial issues before they become year-end problems. By assessing records, transactions, and internal controls during the reporting period, we provide early visibility into risk areas and support timely corrective actions.",
    url: "interim-audit-report",
  },
  {
    name: "Consolidation of Financial Statements",
    des: "Consolidating financials across multiple entities can become complicated, so we align policies, handle intercompany eliminations, and ensure consistency in reporting. The unified financial statement reflects the group’s true financial position. ",
    url: "consolidation-of-financial-statements",
  },
  {
    name: "Forensic Audit",
    des: "When there are signs of fraud or financial irregularity, a standard audit isn't enough. Our forensic audit team investigates transactions, assesses AML compliance, and produces reports that withstand any scrutiny.",
    url: "forensic-audit",
  },
  {
    name: "Special Purpose Audit Report",
    des: "When a specific financial area requires independent verification, we conduct a focused, ISA-compliant audit scoped precisely to the requirement. This gives stakeholders the targeted assurance they need. ",
    url: "special-purpose-audit-report",
  },
  {
    name: "Compliance Audit",
    des: "Compliance with current UAE regulations is essential for smooth business operations. We identify and address compliance gaps early through a structured audit process, helping ensure ongoing regulatory adherence.",
    url: "compliance-audit",
  },
  {
    name: "Sales/Revenue Audit",
    des: "We review the full revenue cycle, from transactions and invoices to VAT compliance and sales controls, to detect discrepancies. Our findings give management a clear view of revenue integrity and build stakeholder confidence in reported revenue.",
    url: "sales-revenue-audit",
  },
  {
    name: "Liquidation Report",
    des: "Closing a business requires meticulous attention at every stage of the liquidation process. We verify liabilities, coordinate settlements, and manage asset distribution with full oversight, delivering a compliant liquidation report that protects stakeholders' interests",
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
