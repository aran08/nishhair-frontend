import React from "react";

const Look = () => {
  return (
    <div className="pb-14">
      <div className=" flex justify-center items-center pb-6 text-sm font-medium pt-20">
        <h1>S H O P</h1>
        <h1 className="mx-3">T H E</h1>
        <h1 className="mr-3">L O O K</h1>
        <h1>T O D A Y</h1>
      </div>
      <p className="text-center pb-5 text-2xl 2xl:text-3xl font-semibold ">Shop The look</p>

      <div className="flex justify-center">
        <img
          src="/images/look.webp"
          alt=""
          className="h-[150px] md:h-[270px] 2xl:h-[555px] w-11/12 2xl:w-[88%]"
        />
      </div>
    </div>
  );
};

export default Look;
