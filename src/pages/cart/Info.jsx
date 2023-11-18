import React from "react";
import { useFormik } from "formik";
import { info } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const initialValues = {
  name: "",
  // email:"",
  // password:""
};

const Info = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (values) {
        const result = dispatch(info(values));
        if (result) {
          return navigate("/shipping");
        }
      }
    },
  });

  return (
    <div className="flex justify-end w-full">
      <div className="flex w-[88%]">
        <div className="w-1/2">
          <div className="flex justify-end items-center flex-col h-[200px]">
            <img
              src="/images/logo.webp"
              alt=""
              className="w-[170px] h-[80px]"
            />
            <div className="flex gap-2 py-3">
              <p>Cart</p>
              <p>Information</p>
              <p>Shipping</p>
              <p>Payment</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 pr-10">
              <p className="text-lg font-semibold mb-2">Contact</p>
              <div onSubmit={handleSubmit} className="pt-3">
                <input
                  id="name"
                  name="name"
                  placeholder="Type your name"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12"
                />
                <div className="flex gap-2 items-center">
                  <Checkbox />
                  <p>Email me with news and offers</p>
                </div>
              </div>
              <div onSubmit={handleSubmit}>
                <p className="text-lg font-semibold mb-2 pt-3">
                  Shipping address
                </p>
                <input
                  id="name"
                  name="name"
                  placeholder="Country/Origin"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12"
                />
                <div className="flex gap-3 mt-3">
                  <input
                    id="name"
                    name="name"
                    placeholder="First name"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-3 rounded-md border-blue-600 w-full h-12"
                  />
                  <input
                    id="name"
                    name="name"
                    placeholder="Last name"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-3 rounded-md border-blue-600 w-full h-12"
                  />
                </div>
                <input
                  id="name"
                  name="name"
                  placeholder="Instagram ID"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12 mt-3"
                />
                <input
                  id="name"
                  name="name"
                  placeholder="Address"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12 mt-3"
                />
                <input
                  id="name"
                  name="name"
                  placeholder="Apartment, suit etc."
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12 mt-3"
                />
                <div className="flex gap-3 mt-3">
                  <input
                    id="name"
                    name="name"
                    placeholder="City"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-3 rounded-md border-blue-600 w-full h-12"
                  />
                  <input
                    id="name"
                    name="name"
                    placeholder="State"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-3 rounded-md border-blue-600 w-full h-12"
                  />
                  <input
                    id="name"
                    name="name"
                    placeholder="PIN Code"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-3 rounded-md border-blue-600 w-full h-12"
                  />
                </div>
                <input
                  id="name"
                  name="name"
                  placeholder="Phone"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12 mt-3"
                />
                <div className="flex gap-2 items-center">
                  <Checkbox />
                  <p>Save this information for next time</p>
                </div>
                <div className="flex justify-end mb-5">
                  <button className="w-[180px] h-[60px] rounded text-sm font-semibold bg-blue-600 text-white">
                    <a href="/shipping">Continue to Shipping</a>
                  </button>
                </div>
                <div className="flex gap-5 text-xs border-t-2 py-5 text-blue-600 underline underline-offset-1 font-semibold">
                  <a href="/">Refund policy</a>
                  <a href="/">Shipping policy</a>
                  <a href="/">Privecy policy</a>
                  <a href="/">Terms of services</a>
                  <a href="/">Contact information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#0FB2AE] border border-black">
          <div className="ml-10 w-[60%] mt-16">
            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] rounded-md border border-white">
                <img src="" alt="" />
              </div>
              <div className="border border-white w-[300px]"></div>
              <div className="w-[60px] h-[60px] rounded-md border border-white flex items-center text-white justify-center">
                1250
              </div>
            </div>
            <div className="flex gap-5 py-5 ">
              <div>
                <input
                  type="text"
                  name=""
                  placeholder="Discount code or gift card"
                  id=""
                  className="w-[300px] h-12 rounded-md"
                />
              </div>
              <button className="border border-white w-20 rounded-md text-white flex justify-center items-center">
                Apply
              </button>
            </div>
            <div className="flex justify-between pb-1 text-white">
              <p>Subtotal</p>
              <p>1200</p>
            </div>
            <div className="flex justify-between pb-3 text-white">
              <p>Shipping</p>
              <p>Calculated at next step</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <div>
                <p>Total</p>
                <p>Including ₹181.49 in taxes</p>
              </div>
              <p>INR ₹2,198.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
