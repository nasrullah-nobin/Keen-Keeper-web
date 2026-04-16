import Image from "next/image";
import React from "react";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";

const Footer = () => {
  return (
 <footer className="bg-[#244D3F] text-white px-6 py-12">

 
  <div className="text-center max-w-2xl mx-auto">
    
   
    <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>

   
    <p className="text-sm md:text-base opacity-80 mb-6">
      Your personal shelf of meaningful connections. Browse, tend, and
      nurture the relationships that matter most.
    </p>

   <nav>
    <h6 className="footer-title">Social</h6>
   <div className="flex justify-center items-center gap-3">
  <a>
    <Image
      src={instagram}
      alt="instagram"
      width={32}
      height={32}
      className="hover:scale-110 transition duration-300"
    />
  </a>

  <a>
    <Image
      src={facebook}
      alt="facebook"
      width={32}
      height={32}
      className="hover:scale-110 transition duration-300"
    />
  </a>

  <a>
    <Image
      src={twitter}
      alt="twitter"
      width={32}
      height={32}
      className="hover:scale-110 transition duration-300"
    />
  </a>
</div>
  </nav>
  </div>


  <div className="border-t border-white/20 my-10"></div>


  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
    
  
    <p>
      © {new Date().getFullYear()} KeenKeeper. All rights reserved.
    </p>

  
    <div className="flex gap-5">
      <a className="hover:underline">Terms</a>
      <a className="hover:underline">Privacy</a>
      <a className="hover:underline">Cookies</a>
    </div>

  </div>
</footer>
  );
};

export default Footer;
