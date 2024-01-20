import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Image
          src="/LOGO.png"
          alt=" "
          width={80}
          height={80}
          he
          className=" flex-1 relative"
        />
        <p className="font-thin ">Copyright @2022. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col">
        <span>Features</span>
        <span className="font-thin">Automation</span>
        <span className="font-thin">Aggregation</span>
      </div>
      <div className="flex flex-col">
        <span>Company</span>
        <span className="font-thin">About us</span>
        <span className="font-thin">Contact us</span>
      </div>
      <div className="flex flex-col">
        <span>Legal</span>
        <span className="font-thin">Terms & agreements</span>
        <span className="font-thin">Privacy & Coditions</span>
      </div>
      <div className="flex flex-col">
        <span>FollowUs</span>
        <div className="flex flex-col gap-3">
          <Image src="/social.png" alt="" width={10} height={10} />
          <Image src="/linked.png" alt="" width={10} height={10} />
          <Image src="/Telegram.png" alt="" width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
