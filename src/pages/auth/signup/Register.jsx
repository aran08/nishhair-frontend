import React from "react";
// import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/slice/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


const initialValues = {
   name:"",
   email:"",
   password:""
};

const Register = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
  const {values, handleSubmit, handleChange, handleBlur } = useFormik ({
    initialValues,
    onSubmit : (values) => {
      if(values){
        const result = dispatch(register(values))
        if(result){
          return navigate("/login")
        }
      }
    },
  });

  return (
    <div className="flex justify-center item-center py-6 bg-slate-300 mt-24">
      <div className="flex w-[900px] h-[600px] bg-[#0FB2AE] ">
        <div className="px-6">
          <div className="pl-6">
            <p className="text-[34px] font-bold pt-20">
              Looks like you're new here!
            </p>
            <p className="text-xl font-medium text-white pt-6">
              Sign up with your mobile number to get started
            </p>
          </div>

          <div className="flex items-center h-[300px] justify-center">
            <img src="/images/bottom.avif" alt="" />
          </div>
        </div>
        <div className="w-[750px] bg-slate-200">
          
          <div  onSubmit={handleSubmit}>
          <div className="px-10 flex-col items-center flex h-[200px]">
            <div className="">
              <label htmlFor="name">Enter Name</label>
              <div className="pt-3 underline underline-offset-3">
                <input
                  id="name"
                  name="name"
                  placeholder="Type your name"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="email">Enter Email Id</label>
              <div className="pt-3 underline underline-offset-3">
                <input
                  id="email"
                  name="email"
                  placeholder="Type your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="password">Enter Password</label>
              <div className="pt-3 underline underline-offset-3">
                <input
                  id="password"
                  name="password"
                  placeholder="Type your Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
          </div>
          <p className="text-xs font-medium pl-10 pt-6">
            By continuing, you agree to Flipkart's{" "}
            <a href="/" className="text-blue-400">
              Terms of Use
            </a>
            and
            <a href="/" className="text-blue-400">
              Privacy Policy.
            </a>
          </p>
          <div className="flex justify-center align-middle py-6">
            <button
              type="submit"
              className="text-white font-bold bg-[#FB641B] w-[85%] h-10 text-center"
              onClick={handleSubmit}
              roles="submit"
            >
              CONTINUE
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-blue-400 bg-white w-[85%] h-10 text-center shadow-2xl"
            >
              <a href="/login" className="text-bold">
                Existing User? Log in
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
