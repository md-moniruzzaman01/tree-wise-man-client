import Image from "next/image";
import React from "react";


const Brand = () => {
  return (
    <div className="w-44 md:w-52 h-auto">
      <Image
        src='/logo.png'
        width={140}
        height={140}
        alt="Arbor Connect"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Brand;
