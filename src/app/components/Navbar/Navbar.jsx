import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex  justify-between  items-center  p-10">
      <div className="">
        <Image
          src="/LOGO.png"
          alt=" "
          width={120}
          height={80}
          className=" flex-1 relative"
        />
      </div>
      <div>
        <Link href="./go">
          <div className="pr-[70px]">
            <button className="button-nav">GO</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
