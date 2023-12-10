import React from "react";
import { RxCross2 } from "react-icons/rx";
import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Upi from "../../components/content/Upi";

const Rozarpay = () => {

  const handleClick = () => {
    if (onclick=== true)
    {
       return <Upi/>
    }
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3]">
      <div className="w-[25%] border rounded-lg bg-white">
        <div className="flex justify-between h-16">
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-14">
              <img src="/images/logo.webp" alt="" className="w-10 h-8" />
            </div>
            <div className="flex-col flex justify-center">
              <p className="font-semibold">Nish Hair</p>
              <p className="text-xs"> Txn ID:12345678990987654</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-10">
            <RxCross2 />
          </div>
        </div>
        <div className="bg-[#464752] h-14 px-4 flex justify-between items-center text-white">
          <p className="font-semibold">Total Amount</p>
          <p className="text-2xl font-semibold">$1599 INR</p>
        </div>
        <div className="h-14 flex justify-center items-center font-medium">
          Select a Payment Method
        </div>
        <div className="flex justify-between border-t-2  h-24 hover:bg-[#FAFAFA]">
          <div className="flex items-center gap-3">
            <div className="w-8 items-center justify-center pl-3">
              <CiCreditCard1 />
            </div>
            <div>
              <p className="font-bold">Credit/Debit Card</p>
              <p className="text-sm">Visa, MasterCard, Rupay & More</p>
            </div>
          </div>
          <div className="flex items-center w-12 justify-center">
            <FaArrowRight />
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-y-2 h-24 hover:bg-[#FAFAFA]" onClick={handleClick}>
          <div className="flex items-center gap-3">
            <div className="w-8 items-center justify-center pl-3">
              <CiCreditCard1 />
            </div>
            <div>
              <p className="font-bold">UPI</p>
              <p className="text-sm">GooglePay, PhonePay & More</p>
            </div>
          </div>
          <div className="flex items-center w-12 justify-center">
            <FaArrowRight />
          </div>
        </div>
        <div className="h-32 flex justify-end items-center p-5">
          <img
            src="/images/rozorpay.png"
            alt=""
            className="h-10 w-20 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Rozarpay;
