import React, { useEffect, useState } from "react";
import Conditions from "../../components/content/Conditions";
import { GiConfirmed } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
// import { FaRegCreditCard } from "react-icons/fa";
// import ProductOrderpage from "../../components/content/ProductOrderpage";
import { useDispatch } from "react-redux";
import { getorderData } from "../../redux/slice/order";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const  navigate = useNavigate()
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const handlegetData = async () => {
    const res = await dispatch(getorderData());
    console.log("Order details", res);
    if (res?.data) {
      setData(res?.data);
    } else {
      return false;
    }
  };

  useEffect(() => {
    handlegetData();
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex-col flex  w-1/2">
        <div className="pl-[110px]">
          <div className="flex justify-end items-center flex-col h-[200px]">
            <img
              src="/images/logo.webp"
              alt=""
              className="w-[170px] h-[80px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <GiConfirmed className="h-10 w-10" />
            <div className="flex-col flex justify-center">
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
            {data &&
              data?.data &&
              data &&
              data?.data.map((item) => (
                <div className="p-3" key={item}>
                  <p className="text-xl">Order details</p>
                  <p>Order Id : {item.id}</p>
                  <div className="flex">
                    <div className="w-1/2">
                      <p className="text-sm font-bold pt-3">
                        Contact information
                      </p>
                      <p className="pb-4 pt-2">+91 886 307 5268</p>
                      <p className="text-sm font-bold pb-2">Shipping address</p>
                      <p>Aran Choudhary</p>
                      <p>{item.address.locality}</p>
                      <p>{item.address.city}</p>
                      <p>{item.address.state}</p>
                      <p>{item.address.country}</p>
                      <p className="pb-2">8863075268</p>
                      <p className="text-sm font-bold">Shipping method</p>
                      <p>Standard</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold pt-3">Payment method</p>
                      <p className="py-2 flex items-center gap-2">
                        {/* <FaRegCreditCard /> - ₹150.00 */}
                        Cash On Delivery
                      </p>
                      <p className="text-sm font-bold pt-3 pb-2">
                        Billing address
                      </p>
                      <p>Aran Choudhary</p>
                      <p>aran4616</p>
                      <p>{item.address.city}</p>
                      <p>{item.address.state}</p>
                      <p>{item.address.country}</p>
                      <p>886307268</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-between pt-10 pb-16 ">
            <p className="flex gap-1">
              Need help?<p className="text-[#115683]">Contact us</p>
            </p>
            <button className="text-sm font-semibold bg-[#11BFEb] hover:bg-[#115683] h-16 w-40 rounded-xl" onClick={()=>  navigate(`/product`)}>
              Continue Shopping
            </button>
          </div>
          <Conditions />
        </div>
      </div>
      ;
      <div className="bg-[#0FB2AE] w-1/2 min-h-full">
      {data && data?.data && data?.data.map((item) => (
          <div key={item.products}>
            {item &&
              item?.products &&
              item?.products.map((order) => (
                <div key={order} className="ml-10 mt-16 w-[60%]">
                  <div className="flex gap-4">
                    <div className="w-[60px] h-[70px] rounded-md">
                      <img
                        src={order.productId?.image}
                        alt=""
                        className="w-[60px] h-[70px]"
                      />
                    </div>

                    <div className="w-[300px]">
                      <h1>{order.productId?.title?.longTitle} {order.productId?.title?.shortTitle}</h1>
                    </div>
                    <div className="px-3 h-[70px] rounded-md border-2 font-semibold flex items-center justify-center">
                    {(order.productId?.price.mrp * order.qty * 18) / 100 + order.productId?.price.mrp}
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 py-5 ">
                      
                    </div>
                    <div className="flex justify-between pb-1 text-white">
                      <p>Subtotal</p>
                      <p>RS.{`${order.productId?.price.mrp}` * order.qty}</p>
                    </div>
                    <div className="flex justify-between pb-3 text-white">
                      <p>Shipping</p>
                      <p>Free</p>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <p>Total</p>
                        <p className="text-sm font-light">
                          Including{" "}
                          {(`${order.productId?.price.mrp}` * order.qty * 18) /
                            100}{" "}
                          in taxes
                        </p>
                      </div>
                      <p>
                        INR{" "}
                        {(order.productId?.price.mrp * order.qty * 18) / 100 +
                          order.productId?.price.mrp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
    </div>
  );
};

export default Order;
