import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const servicesLinks = [
  { name: "Internal Audit", href: "/internal-audit" },
  { name: "External Audit", href: "/external-audit" },
  { name: "Liquidation", href: "/liquidation" },
  { name: "Stock Audit", href: "/stock-audit" },
];

const locationsList = [
  {
    title: "DUBAI",
    location:
      "3503-3507, 35th Floor, HDS Tower Cluster F, Jumeirah Lake Towers Dubai, UAE",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12065.062719556694!2d55.1423631!3d25.0723224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cadeaaaaaab%3A0xaa6a2c1753a2e01a!2sExcellence%20Auditing%20%26%20Business%20Consultants!5e1!3m2!1sen!2sin!4v1732983644094!5m2!1sen!2sin",
  },
  {
    title: "Sharjah",
    location:
      "Suite 23, Building Y Sharjah Airport International Free Zone Sharjah, UAE",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12065.062719556694!2d55.1423631!3d25.0723224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cadeaaaaaab%3A0xaa6a2c1753a2e01a!2sExcellence%20Auditing%20%26%20Business%20Consultants!5e1!3m2!1sen!2sin!4v1732983644094!5m2!1sen!2sin",
  },
  {
    title: "Abu Dhabi",
    location:
      "Office 49, 1st Floor Max Home Business Centre, Emirates Towers Hamdan Street, Abu Dhabi, UAE",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12065.062719556694!2d55.1423631!3d25.0723224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cadeaaaaaab%3A0xaa6a2c1753a2e01a!2sExcellence%20Auditing%20%26%20Business%20Consultants!5e1!3m2!1sen!2sin!4v1732983644094!5m2!1sen!2sin",
  },
];

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-row md:grid-cols-4 gap-4 md:gap-0">
          <div className="md:w-56">
            <Image
              src="./images/footer-logo.svg"
              width={250}
              height={0}
              alt=""
              className="px-8 md:px-0 w-full"
            />
            <ul className="flex gap-4 mt-6 items-center justify-center">
              <li>
                <Link
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                >
                  <Image
                    src="./images/linkedin.svg"
                    width={20}
                    height={0}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                >
                  <Image
                    src="./images/facebook.svg"
                    width={20}
                    height={0}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                >
                  <Image
                    src="./images/instagram.svg"
                    width={20}
                    height={0}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-4">Quick Links</h4>
            <ul className="grid">
              {quickLinks?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:translate-x-2 transition duration-1000"
                  >
                    <Link href={item.href} className="text-[0.8rem] mb-2">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-4">Our Services</h4>
            <ul className="grid">
              {servicesLinks?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:translate-x-2 transition duration-1000"
                  >
                    <Link href={item.href} className="text-[0.8rem] mb-2">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-4">CORPORATE OFFICE</h4>
            <ul className="grid gap-4 text-[0.8rem] mb-2">
              <li className="flex gap-4">
                <FaMapMarkerAlt className="w-10 h-10" />
                <span>
                  3503-3507, 35th Floor, HDS Tower Cluster F, Jumeirah Lake
                  Towers Dubai, UAE
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6" />
                <span>+971 4 557 0410</span>
              </li>
              <li className="flex gap-4">
                <BiEnvelope className="w-6 h-6" />
                <span>info@excellenceauditing.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.2)] h-[1px] my-8"></div>

        <div className="grid grid-row md:grid-cols-3 gap-8">
          {locationsList?.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="uppercase font-bold mb-4">{item.title}</h4>
                <p className="text-[0.8rem] mb-2">{item.location}</p>
                <iframe
                  src={item.mapSrc}
                  className="mt-4 rounded-2xl w-full"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
