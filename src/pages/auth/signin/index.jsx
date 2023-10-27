import React from "react";
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from "formik";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
const Login = () => {
  return (
    <div className="bg-[#0FB2AE] h-screen flex justify-center items-center ">
      <div className="h-[85%] w-[23.33%] bg-white rounded-lg ">
        <div className="h-[15%] flex items-center justify-center">
          <h className="text-black text-4xl font-extrabold text-center">
            Login
          </h>
        </div>
        <Formik
        //   initialValues={{
        //     Username: "",
        //     lastName: "",
        //     email: "",
        //   }}
        //   onSubmit={async (values) => {
        //     await new Promise((r) => setTimeout(r, 500));
        //     alert(JSON.stringify(values, null, 2));
        //   }}
        >
          <Form>
            <div className="px-10">
              <div>
                <label htmlFor="email">Username</label>
                <div className="py-3 underline underline-offset-3">
                  <Field
                    id="email"
                    name="email"
                    placeholder="Type your username"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName">Password</label>
                <div className="py-3">
                  <Field
                    id="password"
                    name="Password"
                    placeholder="Type your password"
                  />
                </div>
              </div>
            </div>

            <p className="px-10 text-end">
              <a href="/" className="">
                Forgot password?
              </a>
            </p>
            <div className="flex justify-center align-middle py-10">
              <button
                type="submit"
                className="text-white text-sm bg-[#0FB2AE] rounded-3xl w-[85%] h-8 text-center"
              >
                <p className="text-bold">Login</p>
              </button>
            </div>

            <p className="text-center pb-3">Or Sign Up Using </p>
            <div className="flex justify-center items-center space-x-3">
              <div className=" bg-[#0FB2AE] h-8 w-8 flex justify-center items-center rounded-full">
                <TfiFacebook />
              </div>
              <div className="bg-[#0FB2AE] h-8 w-8 flex justify-center items-center rounded-full">
                <BsTwitter />
              </div>
              <div className=" bg-[#0FB2AE] h-8 w-8 flex justify-center items-center rounded-full">
                <BsGoogle />
              </div>
            </div>
            <p className="text-center pt-20">Or Sign Up Using </p>
            <p className="text-center font-bold ">
              <a href="/" className="hover:text-blue-600">Sign Up</a>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login  ;