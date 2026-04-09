"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Team", href: "/team" },
  ];

  const [isOpen, setIsOpen] = useState(false);


  return (
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
                    className="h-20 w-auto"
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
                      <li key={link.href} className={isActive ? 'active' : '' }>
                        <Link
                          href={link.href}
                          className={`text-[#364153] hover:text-black font-semibold py-8 px-4 text-center block ${
                            isActive ? "bg-gradient-to-r from-[#942681] to-[#293579] bg-clip-text text-transparent" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}

                  <li className="mt-4 md:mt-0">
                    <Link
                      href="contact"
                      className="bg-[linear-gradient(90deg,#942681,#293579)] text-[#ffffff] py-3 px-5 rounded-full drop-shadow-[2px_4px_10px_#AD46FF4D] ml-12"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
