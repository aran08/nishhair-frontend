import React from "react";

const Lower = () => {
  const imageData = [
    {
      id: "1",
      src: "/images/b1.webp",
    },
    {
      id: "2",
      src: "/images/b2.webp",
    },
    {
      id: "3",
      src: "/images/b3.webp",
    },
    {
      id: "4",
      src: "/images/b4.webp",
    },
  ];
  return (
    <div className="w-[800px] md:w-full flex flex-nowrap justify-center items-center md:py-20 ">
      <div className="md:w-[60%] flex flex-nowrap justify-between">
        {imageData.map((item) => (
          <div key={item.id} className="w-[200px]">
            <img src={item.src} alt="kuchbhi" className=" h-[200px] md:h-[200px] md:w-[200px] mt-3 mx-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lower;
