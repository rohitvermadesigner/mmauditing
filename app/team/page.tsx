import InnerHeader from "@/components/InnerHeader";
import Cta from "@/components/sections/Cta";
import Image from "next/image";
import Link from "next/link";

async function getTeams() {
  const res = await fetch("http://localhost:3000/api/team", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  } else {
    return res.json();
  }
}

export default async function Team() {
  const { data: teams } = await getTeams();
  console.log("teams365", teams);
  return (
    <div>
      <InnerHeader
        title="Meet Our Experts"
        subtitle="At Mansoor Mulla Auditing of Accounts, our audit services fully comply with International Standards on Auditing (ISAs) and International Financial Reporting Standards (IFRS)."
        backgroundImage="/images/header-team.webp"
      />

      <div className="relative max-w-7xl mx-auto pt-8 md:pt-16 px-4 md:px-0 text-center">
        <div className="grid grid-row md:grid-cols-[0.7fr_1.3fr] items-center gap-4 md:gap-0">
          <div>
            <Image
              src="/images/team/mansoor-2.webp"
              width={400}
              height={0}
              alt="Teams"
            />
          </div>
          <div className="text-left md:pl-6">
            <h2 className="font-bold text-2xl">
              Dr. MANSOOR MOHAMMED HASSAN MULLA
            </h2>
            <p className="mt-2">(FCPA, MBA, PHD researcher)</p>
            <h2 className="uppercase text-1xl md:text-2xl font-semibold bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent border-b-1 border-gray-200 mt-2 mb-4 pb-4 inline-block">
              MANAGING DIRECTOR
            </h2>
            <p className="pt-4">
              Dr. Mansoor is a fellow certified public accountant with an MBA in
              financial management and a PhD, certified by the UAE Ministry of
              Economy. He brings over 20 years of multi-domain experience in
              operational and compliance audits, accounting, inspections,
              investigations, financial planning, and budgeting across
              government entities and corporate groups in Dubai. A UAE national
              fluent in Arabic and English, he combines technical expertise with
              practical insights to deliver accurate, reliable, and compliant
              audit and advisory services. His approach emphasizes integrity,
              diligence, and adherence to IFRS standards.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-row md:grid-cols-4 gap-4">
          {teams?.slice(1).map((item, index) => {
            return (
              <div key={index} className="mb-4 relative">
                <Link href="#" className="rounded-[0.9rem] inline-block h-96">
                  <Image src={item.img} width={300} height={300} alt="" />
                  <Image
                    src="/images/team-shape.webp"
                    width={300}
                    height={0}
                    alt=""
                    className="absolute -bottom-[8px]"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-left">
                    <h3 className="text-base font-bold mt-4 uppercase">
                      {item.name}
                    </h3>
                    <p className="text-[0.8rem] uppercase">
                      {item.designation}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Cta />
        </div>
      </div>
    </div>
  );
}
