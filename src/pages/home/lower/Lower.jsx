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
    <div className=" md:w-full flex flex-nowrap justify-center items-center md:py-20 md:px-0 ">
      <div className="w-[60%] flex flex-nowrap justify-between">
        {imageData.map((item) => (
          <div key={item.id} className="md:w-[200px] py-3">
            <img src={item.src} alt="" className=" h-[60px] w-[80px] md:h-[200px] md:w-[200px] mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lower;
