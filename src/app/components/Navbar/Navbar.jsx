import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex  justify-between pt-[10px]  pb-{10px]">
      <div className="">
        <Image
          src="/LOGO.png"
          alt=" "
          width={120}
          height={80}
          className=" flex-1 relative"
        />
      </div>
      <Link href="./go">
        <div className="pr-[70px]">
          <button className="button-nav">GO</button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
