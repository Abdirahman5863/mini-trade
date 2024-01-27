import React from "react";
import Image from "next/image";
import Navbar from "../../Navbar/Navbar";

const First = () => {
  return (
    <main className="hero">
      <Navbar />
      <div className="flex flex-col justify-center gap-12 m-7 ml-[7rem] mt-12 ">
        <h1 className="text-white text-7xl font-bold  ">
          World's first intuitive <br />
          way to grow & <br />
          Manage Funds
        </h1>
        <p className="text-stone-100 text-xl font-normal">
          Growing wealth or savings is as important as <br />
          having a job even if you have just one dollar as savings.
        </p>
        <button className="button-go">
          <span className="text-white">GO</span>
          <Image src="/Arrow.png" alt="arrow" width={24} height={24} />
        </button>
      </div>
    </main>
  );
};

export default First;
