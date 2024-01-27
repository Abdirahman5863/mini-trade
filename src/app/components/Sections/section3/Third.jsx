import Image from "next/image";
import React from "react";

const Third = () => {
  return (
    <div className="bigPro">
      <div className="flex items-center justify-around mt-8 ">
        <div>
          <Image src="/Group.png" alt="" width={369} height={330} />
        </div>
        <div>
          <h1 class="w-[699px] text-stone-50 text-5xl font-normal leading-[73.69px]">
            Getting Started
          </h1>
          <p class="w-[699px] text-stone-50 text-[21px] font-normal  leading-loose">
            Select Go to start using mini trade ,and make passive income with
            our preselected automated trading bots and other investment
            platforms aggregated to one place for your convenience. Grow your
            savings on mini trade with our curated savings options and rest
            assured that your assets will grow on minitrade.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-[100px]">
          <h1 className="w-[699px] text-stone-50 text-[32px] font-normal  leading-[49.13px]">
            Risk Selection
          </h1>
          <h1 className="w-[699px] text-stone-50 text-[21px] font-normal leading-loose">
            Select your investment pln according to your risk appetite. We
            provide you with three models to invest in. You can use one or many.
            Trade however you wish.
            <br />
          </h1>
        </div>

        <div>
          <Image src="/risk.png" alt="" width={1000} height={730} />
        </div>
      </div>
      <div className="flex">
        <div>
          <Image src="/Rectangle.png " alt="" width={977} height={822} />
        </div>
        <div>
          <h1 class="w-[699px] text-stone-50 text-5xl font-normal  leading-[73.69px]">
            Selecting Timespan
          </h1>
          <p class="w-[699px] text-stone-50 text-[21px] font-normal leading-loose">
            The risk model automatically selects a time span for you but you can
            extend the time as you wish within the investment plan that you
            chose.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
