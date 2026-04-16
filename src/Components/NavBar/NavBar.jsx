"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { RiHome4Line, RiTimeLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", text: "Home", icon: <RiHome4Line /> },
    { path: "/timeline", text: "Timeline", icon: <RiTimeLine /> },
    { path: "/stats", text: "Stats", icon: <ImStatsDots /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">

   
      <div className="flex-1">
        <Link href="/" className="text-2xl font-extrabold">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </Link>
      </div>

     
      <div className="hidden md:flex gap-4">
        {links.map((link) => {
          const isActive = pathName === link.path;
          return (
            <NavLinks
              key={link.text}
              href={link.path}
              className={`flex items-center gap-1 font-bold px-3 py-2 rounded transition ${
                isActive
                  ? "bg-[#244D3F] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {link.icon}
              {link.text}
            </NavLinks>
          );
        })}
      </div>

      
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          <GiHamburgerMenu className="text-3xl" />
        </button>
      </div>

     
      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-44 p-2 md:hidden">
          {links.map((link) => {
            const isActive = pathName === link.path;
            return (
              <NavLinks
                key={link.text}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.icon}
                {link.text}
              </NavLinks>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavBar;