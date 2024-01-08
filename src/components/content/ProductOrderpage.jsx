import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getcartData } from "../../redux/slice/cart";

const ProductOrderpage = ({cartData}) => {


  return (
    <div className="bg-[#0FB2AE] min-h-full">
      {cartData &&
        cartData?.data &&
        cartData.data.map((item) => (
          <div key={item.products}>
            {item &&
              item?.products &&
              item?.products.map((data) => (
                <div key={data} className="ml-10 mt-16 w-[60%]">
                  <div className="flex gap-4">
                    <div className="w-[60px] h-[70px] rounded-md">
                      <img
                        src={data.productId?.image}
                        alt=""
                        className="w-[60px] h-[70px]"
                      />
                    </div>

                    <div className="w-[300px]">
                      <p>{data.productId?.title?.longTitle}</p>
                      <p>{data.productId?.title?.shortTitle}</p>
                    </div>
                    <div className="w-[60px] h-[70px] rounded-md border-2 font-semibold flex items-center justify-center">
                      {`${data.productId?.price.mrp}` * data.qty}
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 py-5 ">
                      <div>
                        <input
                          type="text"
                          name=""
                          placeholder="Discount code or gift card"
                          id=""
                          className="w-[300px] h-12 rounded-md px-2"
                        />
                      </div>
                      <button className="border-2 border-white w-20 rounded-md font-semibold flex justify-center items-center">
                        Apply
                      </button>
                    </div>
                    <div className="flex justify-between pb-1 text-white">
                      <p>Subtotal</p>
                      <p>RS.{`${data.productId?.price.mrp}` * data.qty}</p>
                    </div>
                    <div className="flex justify-between pb-3 text-white">
                      <p>Shipping</p>
                      <p>Calculated at next step</p>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <p>Total</p>
                        <p>
                          Including{" "}
                          {(`${data.productId?.price.mrp}` * data.qty * 18) /
                            100}{" "}
                          in taxes
                        </p>
                      </div>
                      <p>
                        INR{" "}
                        {(data.productId?.price.mrp * data.qty * 18) / 100 +
                          data.productId?.price.mrp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default ProductOrderpage;
