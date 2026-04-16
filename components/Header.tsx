"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Modal from "@/components/Modal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Team", href: "/team" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  const [subject, setSubject] = useState("");
  const [showServices, setShowServices] = useState(false);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubject(value);
    setShowServices(value === "services");

    if (value !== "services") {
      const serviceSelect = document.querySelector(
        'select[name="service"]',
      ) as HTMLSelectElement | null;

      if (serviceSelect) serviceSelect.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
  };

  return (
    <>
      <header className="sticky top-0 z-100">
        <div className="bg-[#fff]">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
            <div className="w-full md:w-1/3 md:w-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/images/logo.svg"
                      width={180}
                      height={0}
                      alt="MM Auditing"
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#697B84] hover:text-[#001f3f]"
                  >
                    <span>{isOpen ? <X /> : <Menu />}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:w-auto md:px-3">
              <nav
                id="mainNav"
                className={` ${isOpen ? "block" : "hidden"} md:block`}
              >
                <ul
                  className={` ${isOpen ? "mt-4" : "mt-0"} flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-6 md:ml-auto pb-3 md:pb-0`}
                >
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <li key={link.href} className={isActive ? "active" : ""}>
                        <Link
                          onClick={() => setIsOpen(false)}
                          href={link.href}
                          className={`text-[#364153] hover:text-black font-semibold py-2 md:py-8 px-4 md:text-center block ${
                            isActive
                              ? "bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent"
                              : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}

                  <li>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setOpen(true);
                      }}
                      className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-5 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] ml-4 md:ml-12 cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-4">
          <div className="bg-[linear-gradient(90deg,#942681,#293579)] rounded-xl p-6 md:p-10 text-white relative overflow-hidden">
            <Image
              src="/images/circle-icon.svg"
              alt=""
              width={200}
              height={0}
              className="absolute -right-10 -bottom-10"
            />
            <h2 className="text-xl font-semibold mb-4">Get in touch with us</h2>
            <p className="text-[0.9rem]">
              Clarifying doubts about auditing and financial compliance is
              essential. Our team at MM Auditing is here to help. Feel free to
              reach out.
            </p>

            <ul className="grid gap-4 md:gap-10 text-[0.8rem] mt-4 md:mt-16">
              <li className="flex gap-4">
                <Phone className="w-6 h-6" />
                <span>+971 4 557 0410</span>
              </li>
              <li className="flex gap-4">
                <BiEnvelope className="w-6 h-6" />
                <span>info@excellenceauditing.com</span>
              </li>
              <li className="flex gap-4">
                <FaMapMarkerAlt className="w-10 h-10" />
                <span>
                  3503-3507, 35th Floor, HDS Tower Cluster F, Jumeirah Lake
                  Towers Dubai, UAE
                </span>
              </li>
            </ul>

            <div className="mt-8 md:mt-24 grid grid-cols-2">
              <Image
                src="/images/footer-logo.svg"
                alt=""
                width={125}
                height={0}
              />
              <ul className="flex gap-4 mt-6 items-center justify-center z-10">
                <li>
                  <Link
                    href="#"
                    className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                  >
                    <Image
                      src="./images/linkedin.svg"
                      width={16}
                      height={0}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                  >
                    <Image
                      src="./images/facebook.svg"
                      width={16}
                      height={0}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition hover:-translate-y-1 duration-200"
                  >
                    <Image
                      src="./images/instagram.svg"
                      width={16}
                      height={0}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-[0.8rem] text-[#4A5565]">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    required
                    className="w-full border-b border-[#8D8D8D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[0.8rem] text-[#4A5565]">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    required
                    className="w-full border-b border-[#8D8D8D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[0.8rem] text-[#4A5565]">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-b border-[#8D8D8D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[0.8rem] text-[#4A5565]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border-b border-[#8D8D8D] focus:outline-none"
                  />
                </div>
              </div>

              <label className="text-[0.8rem] text-[#000000] font-semibold">
                Select Subject?
              </label>

              <div className="grid grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      value="general"
                      checked={subject === "general"}
                      onChange={handleSubjectChange}
                      required
                      className="#942681"
                    />
                    <span className="text-sm">General Query</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      value="services"
                      checked={subject === "services"}
                      onChange={handleSubjectChange}
                      required
                      className="accent-blue-600"
                    />
                    <span className="text-sm">Select Services</span>
                  </label>
                </div>
              </div>

              {showServices && (
                <select
                  name="service"
                  className="w-full border-b border-[#8D8D8D] focus:outline-none"
                  required
                >
                  <option value="">Choose a Service</option>
                  <option value="External/Statutory Audit">
                    External/Statutory Audit
                  </option>
                  <option value="Internal Audit">Internal Audit</option>
                  <option value="Stock Audit">Stock Audit</option>
                  <option value="Review Management Report">
                    Review Management Report
                  </option>
                  <option value="Cost Audit">Cost Audit</option>
                  <option value="Interim Audit Report">
                    Interim Audit Report
                  </option>
                  <option value="Consolidation of Financial Statements">
                    Consolidation of Financial Statements
                  </option>
                  <option value="Forensic Audit">Forensic Audit</option>
                  <option value="Special Purpose Audit Report">
                    Special Purpose Audit Report
                  </option>
                  <option value="Compliance Audit">Compliance Audit</option>
                  <option value="Sales/Revenue Audit">
                    Sales/Revenue Audit
                  </option>
                  <option value="Liquidation Report">Liquidation Report</option>
                </select>
              )}

              <label className="text-[0.8rem] text-[#4A5565]">Message</label>
              <textarea
                name="message"
                placeholder="Write your message.."
                rows={4}
                required
                className="w-full border-b border-[#8D8D8D] focus:outline-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-8 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] cursor-pointer float-right text-[0.8rem] transform transition-all hover:-translate-y-2 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
