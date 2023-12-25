import React from "react";
import Conditions from "../../components/content/Conditions";
import { GiConfirmed } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import ProductOrderpage from "../../components/content/ProductOrderpage";

const Order = () => {
  return (
    <div className="flex w-full">
    <div className="flex-col flex  w-1/2">
      <div className="pl-[110px]">
        <div className="flex justify-end items-center flex-col h-[200px]">
          <img src="/images/logo.webp" alt="" className="w-[170px] h-[80px]" />
        </div>
        <div className="flex items-center gap-2">
          <GiConfirmed className="h-10 w-10" />
          <div className="flex-col flex justify-center">
            <p>Order Id</p>
            <p>Thank you, Aran!</p>
          </div>
        </div>
      </div>
      <div className="pl-40">
        <div className="flex justify-center border mb-3">
          <div className="w-[95%]">
            <p className="text-xl font-semibold pt-3">Order Updates</p>
            <p className="py-2">
              You may get shipping and delivery updates by text.
            </p>
            <div className="pb-3">
              <button className="flex gap-2 items-center border-2 h-10 px-5 rounded-md text-blue-700 ">
                <IoMail />
                Get shipping updates by email
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg">
          <div className="p-3">
            <p className="text-xl">Order details</p>
            <div className="flex">
            <div className="w-1/2">
              <p className="text-sm font-bold pt-3">Contact information</p>
              <p className="pb-4 pt-2">+91 886 307 5268</p>
              <p className="text-sm font-bold pb-2">Shipping address</p>
              <p>Nmae</p>
              <p>Instagram iD</p>
              <p>Address1</p>
              <p>Address2</p>
              <p>Address3</p>
              <p className="pb-2">Phone Number</p>
              <p className="text-sm font-bold">Shipping method</p>
              <p>Standard</p>
            </div>
            <div> 
              <p className="text-sm font-bold pt-3">Payment method</p>
              <p className="py-2 flex items-center gap-2">
              <FaRegCreditCard /> - ₹150.00</p>
              <p className="text-sm font-bold pt-3 pb-2">Billing address</p>
              <p>Nmae</p>
              <p>Instagram iD</p>
              <p>Address1</p>
              <p>Address2</p>
              <p>Address3</p>
              <p>Phone Number</p>
            </div>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 pb-16 ">
          <p className="flex gap-1">Need help?<p className="text-[#115683]">Contact us</p></p>
          <button className="text-sm font-semibold bg-[#11BFEb] hover:bg-[#115683] h-16 w-40 rounded-xl" >Continue Shopping</button>
        </div>
        <Conditions />
      </div>
    </div>
    <div className="bg-[#0FB2AE] w-1/2 ml-10">
      <ProductOrderpage/>
    </div>
    </div>
  );
};

export default Order;
