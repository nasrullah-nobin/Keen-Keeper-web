import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

const TimelinePage = () => {
  return (
    <div className="py-20 w-7xl mx-auto space-y-3">
      <h6 className="text-5xl font-bold">Timeline </h6>
      <select defaultValue="Filter timeline" className="select select-ghost">
        <option disabled={true}>Filter timeline</option>
        <option>Inter</option>
        <option>Poppins</option>
        <option>Raleway</option>
      </select>
<div className="bg-white rounded p-4 mb-6">
<div className="flex items-center gap-3">
    <HiOutlineVideoCamera className="text-2xl"/>
    <div>
        <h1 className="text-lg text-[#64748B]"><span className="font-bold text-black">lorme</span> ipsum dolor sit amet.</h1>
        <p className="text-lg text-[#64748B]">Lorem, ipsum dolor.</p>
    </div>
</div>
</div>
    </div>
  );
};

export default TimelinePage;
