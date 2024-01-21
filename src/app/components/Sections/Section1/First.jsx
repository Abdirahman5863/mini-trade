import React from "react";
import Image from "next/image";
import Navbar from "../../Navbar/Navbar";
import Link from "next/link";

const First = () => {
  return (
    <div className="Hero">
      <div className="Hero-overlay">
        <div className="hero-content">
          <h1>
            World's first intuitive
            <br /> way to grow & <br />
            Manage Funds
          </h1>
        </div>
        <div className=" flex flex-col justify-center gap-5  w-[740px]">
          <p className="text-title ">
            Growing wealth or savings is as important as <br />
            having a job even if you have just one dollar as savings.
          </p>
          <Link href="./go">
            <button className="button-go">
              <span className="text-white">GO</span>
              <Image src="/Arrow.png" alt="arrow" width={24} height={24} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
