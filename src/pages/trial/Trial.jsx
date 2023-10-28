import React from "react";

const Trial = () => {
  return (
    <div className="">
      <p className="text-5xl font-medium h-[350px] flex justify-center items-center">
        BOOK A TRIAL
      </p>
      <div className="w-full flex justify-center items-center mb-32">
        <div className="md:flex justify-center items-center w-11/12 md:gap-4">
          <div className="">
            <img src="/images/trial1.webp" alt="" />
            <div className="flex flex-col justify-center items-center">
            <a href="/" className="font-semibold">MUMBAI IN STUDIO TRIAL</a>
            <p>⭐⭐⭐⭐⭐(8)</p>
            <p className="text-[#2EBCCD] font-semibold">Rs. 200.00</p>
            </div>
          </div>
          <div className="">
            <img src="/images/trial1.webp" alt="" />
            <div className="flex flex-col justify-center items-center">
            <a href="/" className="font-semibold">VIDEO CALL TRIAL</a>
            <p>⭐⭐⭐⭐⭐(5)</p>
            <p className="text-[#2EBCCD] font-semibold">Rs. 99.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
