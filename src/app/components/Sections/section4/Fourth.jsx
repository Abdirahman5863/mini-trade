import React from "react";
import Footer from "../../Footer/Footer";
import Image from "next/image";
const Fourth = () => {
  return (
    <div className="section4">
      <div className="flex justify-center gap-8 ml-[7rem] mt-[6rem]">
        <div>
          <h1 class="w-[699px] text-stone-50 text-5xl font-normal leading-[73.69px]">
            Select Trading Mode
          </h1>
          <p class="w-[699px] text-stone-50 text-[21px] font-normal leading-loose">
            You want to trade by yourself like a pro? Go ahead. You want to copy
            the pros as they trade? We got you. You can Do It Yourself,
            useAutomated trading or choose from a pool of investment portfolios.
            <br />
          </p>
        </div>
        <di>
          <Image src="/select.png" width={500} height={450} />
        </di>
      </div>
      <div className="flex justify-center gap-[10rem] ml-[10rem]">
        <div>
          <Image src="/group1.png" width={800} height={500} />
        </div>
        <div>
          <h1 class="w-[537px] text-stone-50 text-5xl font-normal font-['Inter'] leading-[73.69px]">
            Connect Your Wallet
          </h1>
          <p class="w-[441px] text-stone-50 text-[21px] font-normal font-['Inter'] leading-loose">
            After selecting your risk module and trading mode, you can go ahead
            and connect your wallet.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10rem] ">
        <div className="flex  justify-center  ml-[2rem] mr-[2rem] ">
          <div className="flex flex-col gap-4">
            <h1 class="text-stone-50 text-3xl font-bold  w-[1036px]">
              Monitor Trade Progress & Withdraw funds
            </h1>
            <p class="w-[699px] text-stone-50  text-xl font-normal leading-loose ">
              Watch the growth steps that your investment grow by each day
              through a nice simple animated graph that's easy to understand and
              interpret .
              <br />
              Mini trade allows you to make more than one investment and you can
              easily switch between monitoring the different investments
              <br />
            </p>
          </div>
          <div>
            <Image src="/group2.png" width={1000} height={877} alt="" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Fourth;
