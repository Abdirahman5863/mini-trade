import React from "react";
import Image from "next/image";

const Second = () => {
  return (
    <div className="container">
      <div className="flex-1 relative p-[200px] w-[200px] h-[200px] object-fill items-center"></div>
      <div className="Aside">
        <div>
          <h2 className="text-white pt-11">
            <span>MiniTrade</span> is the ‘Web3 Amazon’ for growing your wealth.
          </h2>
          <p className="text-white">
            Never miss savings opportunities, staking and even high-performin
            new crypto listings
          </p>
          <p className="text-white">
            MiniTrade aggregates the best performing assets globally including
            crypto, stocks, managed portfolios, private companies (startups),
            new listings, bonds, staking & savings, and even predictions
            (gaming, betting & etc)
          </p>
          <button className="button-g">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Second;
