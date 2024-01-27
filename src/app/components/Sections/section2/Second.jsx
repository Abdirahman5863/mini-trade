import React from "react";
import Image from "next/image";

const Second = () => {
  return (
    <div className="container">
      <div className="flex ">
        <div className="relative flex-1">
          <Image src="/web.png" alt=" " width={559} height={594} />
        </div>
        <div className="flex-1 flex flex-col gap-3  text-white font-thin ">
          <div className="text-[3rem]">
            <strong>MiniTrade</strong> is the ‘Web3 Amazon’ for growing your
            wealth.
          </div>
          <div className="text-white font-normal">
            Never miss savings opportunities, staking and even high-performin
            new crypto listings
          </div>
          <div>
            MiniTrade aggregates the best performing assets globally including
            crypto, stocks, managed portfolios, private companies (startups),
            new listings, bonds, staking & savings, and even predictions
            (gaming, betting & etc)
          </div>
          <div>
            <button className="button-g">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
