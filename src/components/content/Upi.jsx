import React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { LiaLessThanSolid } from "react-icons/lia";
import { LuCheckCircle } from "react-icons/lu";
import { BsLockFill } from "react-icons/bs";

const Upi = () => {

    const ImageData = [
        {
            id:1,
            src:"/images/gpay.png"
        },
        {
            id:2,
            src:"/images/phpay.png"
        },
        {
            id:3,
            src:"/images/paytm.jpg"
        },
        {
            id:4,
            src:"/images/bhim.png"
        },
    ]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[25%]">
        <div className="flex gap-3 items-center text-blue-500 text-sm">
          <LiaLessThanSolid />
          <p>Choose Payment Method</p>
        </div>
        <div className="pt-5 pb-3">
          <div className="flex items-center gap-3">
            <FaCreditCard />
            <p className="text-xl font-medium">UPI</p>
          </div>
          <div className=" text-[#A3A3A9] py-3">
            <p className="text-xs ">
              Select the app installed on your phone to make payment directly
              from the app or pay with a upi ID or pay by scanning the QR code
            </p>
          </div>
          <div>
            <input type="text" placeholder="UPI Id" className="border rounded-md w-full h-14 pl-3"/>
            <div className="flex items-center pt-3">
            {ImageData.map((item) => (
            <div key={item.id}>
                <img src={item.src} alt="" className="h-10 w-11"/>
            </div>
            ))}
            & more
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center h-8 text-[#A3A3A9]">
        <LuCheckCircle />
        <p className="text-sm">Bt continuing, you agree to the <a href="/" className="text-[#0052C1] font-semibold">T&C </a>and <a href="/" className="text-[#0052C1] font-semibold">Privacy Policy</a></p>
        </div>
        <div className="h-14 w-full bg-[#A3A3A9] flex items-center justify-center rounded-md">
          <button className="text-2xl font-semibold text-white">Pay $ 1599.00 INR</button>
        </div>
        <div className="text-xs flex justify-center items-center h-14 gap-1 text-[#A3A3A9]">
        <BsLockFill className="w-6 h-6"/>
        <p>Your information is protected by 256-bit end to end browser encryption.</p>
        </div>
      </div>
    </div>
  );
};

export default Upi;
