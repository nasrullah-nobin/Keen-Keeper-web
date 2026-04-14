import React from "react";

const Banner = () => {
  return (
    <>
      <div className="text-center space-y-3.5 pt-20 pb-10">
        <h2 className="text-5xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white font-semibold">
          + Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6 text-center max-w-7xl mx-auto pb-10">
        <div className="bg-white rounded p-8">
          <p className="font-semibold text-3xl  text-[#244D3F]">10</p>
          <h6 className="text-lg font-normal">Total Friends    kk</h6>
        </div>
        <div className="bg-white rounded p-8">
          <p className="font-semibold text-3xl  text-[#244D3F]">10</p>
          <h6 className="text-lg font-normal">Total Friends</h6>
        </div>
        <div className="bg-white rounded p-8">
          <p className="font-semibold text-3xl  text-[#244D3F]">10</p>
          <h6 className="text-lg font-normal">Total Friends</h6>
        </div>
        <div className="bg-white rounded p-8">
          <p className="font-semibold text-3xl  text-[#244D3F]">10</p>
          <h6 className="text-lg font-normal">Total Friends</h6>
        </div>
      </div>
    </>
  );
};

export default Banner;
