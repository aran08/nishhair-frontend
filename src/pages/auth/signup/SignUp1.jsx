import React from "react";
import { Formik, Field, Form } from "formik";

const SignUp1 = () => {
  return (
    <div className="flex justify-center item-center py-6 h-screen bg-slate-300">
      <div className="flex w-[900px] h-[650px] bg-[#0FB2AE] ">
        <div className="px-6">
          <div className="pl-6">
            <p className="text-4xl font-bold pt-20">
              Looks like you're new here!
            </p>
            <p className="text-xl font-medium text-white pt-6">
              Sign up with your mobile number to get started
            </p>
          </div>

          <div className="flex items-center h-[400px] justify-center">
            <img src="/images/bottom.avif" alt="" />
          </div>
        </div>

        <div className="w-[750px] bg-slate-200">
          <Formik>
            <Form>
              <div className="px-10 flex h-[150px] items-end">
                <div className="">
                  <label htmlFor="email">Enter Mobile number</label>
                  <div className="pt-3 underline underline-offset-3">
                    <Field
                      id="email"
                      name="email"
                      placeholder="Type your number"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium pl-10 pt-6">
                By continuing, you agree to Flipkart's{" "}
                <a href="/" className="text-blue-400">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="/" className="text-blue-400">
                  Privacy Policy.
                </a>
              </p>
              <div className="flex justify-center align-middle py-6">
                <button
                  type="submit"
                  className="text-white text-normal font-medium bg-[#FB641B] w-[85%] h-10 text-center"
                >
                  <p className="text-bold">CONTINUE</p>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-blue-400 font-medium bg-white w-[85%] h-10 text-center shadow-2xl"
                >
                  <p className="text-bold">Existing User? Log in</p>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp1;