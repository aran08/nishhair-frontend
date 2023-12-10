import React from "react";
import { MdCancel } from "react-icons/md";

const Failure = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-1/4 bg-white rounded-lg">
        <div className="flex py-3 border-b-2">
          <div className="w-14 flex justify-center items-center border-r-2">
            <img src="/images/trial1.webp" alt="" className="w-8 h-5" />
          </div>
          <div className="pl-3">
            <p className="font-semibold text-sm">Nish Hair</p>
            <p className="text-xs">Txn ID: rzqwdfgnjoihgtghhcsU348gb</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex-col flex justify-center items-center py-10 border-b-2 w-10/12 ">
            <MdCancel className="text-red-600 w-20 h-20" />
            <p className="text-[20px] font-semibold pt-5">Failure</p>
            <p className="text-xs">
              You will be redirected to the merchent in time
            </p>
          </div>
          <div className="py-5">
            <p className="text-sm">Reason Code: GL-201-016</p>
          </div>
          <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-10/12">
            <button className="w-full rounded-md text-white font-semibold flex text-xl justify-center items-center h-14 bg-green-500">
              Retry Payment
            </button>
            <p className="text-sm py-3 text-center">Attempt Left:9</p>
          </div>
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

export default Failure;
