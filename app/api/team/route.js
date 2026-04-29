export async function GET() {
  const teams = [
    {
      name: "DR. MANSOOR M.H. MULLA",
      designation: "MANAGING DIRECTOR",
      img: "/images/team/mansoor.webp",
    },
    // {
    //   name: "SAJID SAJJAD",
    //   designation: "CEO",
    //   img: "/images/team/sajid.webp",
    // },
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

  return Response.json({
    success:true,
    data:teams,
  })
}
