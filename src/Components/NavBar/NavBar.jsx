"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImStatsDots } from "react-icons/im";
import { RiHome4Line, RiTimeLine } from "react-icons/ri";
import NavLinks from "./NavLinks";

const NavBar = () => {
    const pathName = usePathname();
  const links = [
    { path: "/", text: "Home", icon: <RiHome4Line /> },
    { path: "/timeline", text: "Timeline", icon: <RiTimeLine /> },
    { path: "/stats", text: "Stats", icon: <ImStatsDots /> },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-2xl font-extrabold">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            const isActive = pathName === link.path;
            return  <li key={link.text}>
              <NavLinks href={link.path} className={`font-bold ${isActive && 'text-white bg-[#244D3F] py-3 px-4 rounded' }`}>{link.icon}{link.text}</NavLinks>
            </li>
          } )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
