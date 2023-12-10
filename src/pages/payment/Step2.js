import React from "react";
import Paymenttop from "../../components/content/Paymenttop";
import { Checkbox } from "@mui/material";
import { LiaLessThanSolid } from "react-icons/lia";
// import Conditions from "../../components/content/Conditions";

const Step2 = () => {
  const ImageData = [
    {
      id: 1,
      src: "/images/visa.svg",
    },
    {
      id: 2,
      src: "/images/master.svg",
    },
    {
      id: 3,
      src: "/images/Rupay.svg",
    },
    {
      id: 4,
      src: "/images/upi.svg",
    },
  ];

  return (
    <div>
      <div className="w-1/2 flex justify-end">
        <div className="w-[75%]">
          <Paymenttop />
          <div className="border-2 rounded-md my-3">
            <div className="grid grid-cols-6 gap-4 h-10 py-1">
              <div className="flex justify-center items-center">Contact</div>
              <div className="col-start-2 col-span-4 flex items-center">
                aranjaish2308@gmail.com
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="/information"
                  className="text-xs font-semibold underline text-blue-700"
                >
                  Change
                </a>
              </div>
            </div>
            <div className="border-t-2 grid grid-cols-6 gap-4 py-2">
              <div className="flex justify-center items-center">Ship to</div>
              <div className="col-start-2 col-span-4 flex items-center">
                aran4616, Krishna Nagar Jagjeetpur, f-11, 249404 Haridwar UK,
                India
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="/information"
                  className="text-xs font-semibold underline text-blue-700"
                >
                  Change
                </a>
              </div>
            </div>
            <div className="border-t-2 grid grid-cols-6 gap-4 py-2">
              <div className=" pl-4">Shipping method</div>
              <div className="col-start-2 col-span-4 flex">Standard . Free</div>
              <div className="flex justify-center">
                <a
                  href="/information"
                  className="text-xs font-semibold underline text-blue-700"
                >
                  Change
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-7 font-semibold text-lg">Payment</p>
            <p className="font-light text-base">
              All transactions are secure and encrypted.
            </p>
            <div className="h-80 border-black border rounded-md">
              <div className="flex justify-center border rounded-md h-16 border-black items-center">
                <div className="w-11/12">
                  <p>
                    {" "}
                    <Checkbox />
                    Cash on Delivery
                  </p>
                </div>
              </div>
              <div className="h-16 border rounded-md border-black flex justify-center">
                <div className="w-11/12 flex justify-between items-center">
                  <div>
                    <p>
                      {" "}
                      <Checkbox />
                      International cards, UPI, Bank Transfers
                    </p>
                  </div>
                  <div className="flex">
                    {ImageData.map((item) => (
                      <div key={item.id}>
                        <img alt="" src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-5">
              <div className="flex items-center text-blue-600 gap-2">
                <LiaLessThanSolid />
                <p>Return to shipping</p>
              </div>
              <button className="h-16 w-28 bg-blue-600 rounded-md">
                <a href="/rozorpay">Pay now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
