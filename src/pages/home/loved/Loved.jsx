import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Loved = () => {
  const [image, setImage] = useState("#000");
  return (
    <div className="w-full flex justify-center items-center pb-20">
      <div className="w-11/12">
        <h1 className="text-[22px] md:text-3xl font-bold text-center pt-16 pb-6 ">
          Most loved product of the month
        </h1>
        <div className="md:flex">
          <div className="overflow-y-auto overflow-x-hidden max-h-[800px] scroll-hide md:pl-6 md:pr-12 md:w-[60%]">
            {image === "#000" ? (
              <img src="/images/lovedblack.webp" alt="" />
            ) : (
              <img className="" src="/images/loved.webp" alt="" />
            )}
          </div>

          <div className="md:w-[40%]">
            <p className="font-medium text-2xl py-2">
              HAIR LINE POWDER | NISH HAIR
            </p>
            <p className="text-[#2dd4bf]">Rs.1,099.00 INR</p>
            <p className="text-xs py-2">
              Tax included.{" "}
              <a href="/" className="underline font-light">
                Shipping
              </a>
              calculated at checkout.
            </p>
            <p className="py-2 text-xs">
              <span className="font-medium">COLOR:</span> Natural Black
            </p>
            <div className="flex">
              <div
                className={`border w-10 h-10 flex justify-center items-center ${
                  image === "#000" ? "border-black" : null
                }`}
              >
                <div
                  className="bg-black w-5 h-5 rounded-full"
                  onClick={() => setImage("#000")}
                ></div>
              </div>
              <div
                className={`border w-10 h-10 flex justify-center items-center ${
                  image !== "#000" ? "border-black" : null
                }`}
                onClick={() => setImage("#5C4033")}
              >
                <div className="bg-[#5C4033] w-5 h-5 rounded-full"></div>
              </div>
            </div>
            <div className="flex py-3 md:mx-0">
              <div className="border w-28 h-12 text-center border-[#0FB2AE] rounded-3xl flex justify-center items-center">
                <button className="flex gap-2"><RemoveIcon/>{1}<AddIcon/></button>
              </div>
              <div className="ml-2 md:w-[380px] w-[158px]">
                <button type="button" className="btn btn4 font-medium text-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="h-12 flex pr-6 justify-center items-center font-semibold rounded-3xl pl-2 w-[96%] bg-[#0FB2AE] text-white">
              <button className="my-1">
                BUY IT NOW
              </button>
            </div>

            <p className="text-sm">Shipping will take 1-3 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loved;
