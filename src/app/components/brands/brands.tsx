import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  { id: "versace", srcUrl: "/icons/verce.png" },
  { id: "zara", srcUrl: "/icons/zara.png" },
  { id: "gucci", srcUrl: "/icons/gucci.png" },
  { id: "prada", srcUrl: "/icons/prada.png" },
  { id: "calvin-klein", srcUrl: "/icons/calvin.png" },
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center  py-5 space-x-10  justify-evenly">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            src={brand.srcUrl}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] max-h-[26px] my-5"
            width={116}
            height={26}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
