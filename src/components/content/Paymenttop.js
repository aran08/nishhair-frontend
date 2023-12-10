import React from "react";
import { TbMathGreater } from "react-icons/tb";

const Paymenttop = () => {
  return (
    <div className="flex justify-end items-center flex-col h-[200px]">
      <img src="/images/logo.webp" alt="" className="w-[170px] h-[80px]" />
      <div className="flex gap-2 py-3">
        <p className="flex items-center gap-2">
          Cart <TbMathGreater />
        </p>
        <p className="flex items-center gap-2">
          Information <TbMathGreater />
        </p>
        <p className="flex items-center gap-2">
          Shipping <TbMathGreater />
        </p>
        <p>Payment</p>
      </div>
    </div>
  );
};

export default Paymenttop;
