import React, { useState } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slice/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //   toast("Default Notification !");

  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER
  //   });

  //   toast.error("Error Notification !", {
  //     position: toast.POSITION.TOP_LEFT
  //   });

  //   toast.warn("Warning Notification !", {
  //     position: toast.POSITION.BOTTOM_LEFT
  //   });

  //   toast.info("Info Notification !", {
  //     position: toast.POSITION.BOTTOM_CENTER
  //   });

  //   toast("Custom Style Notification with css class!", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //     className: 'foo-bar'
  //   });
  // };

  const [email,setemail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //login management
  const handleSubmit =async () => {
    if(!email && !password){
      return true;
    }

    const data = {
      "username":email,
      "password":password,
    }
    //sending data for verification
    const result = await dispatch(login(data))
    

    //if sent successfully, then notification system
    if(result){
      setemail("")
      setPassword("")
      toast.success("You are Successfully Login !", {
        position: toast.POSITION.TOP_CENTER
      });
      return navigate("/")
    }
    else 
    {
      toast.error("Credential Error !", {
        position: toast.POSITION.TOP_CENTER
      });
    }

  }
  return (
    <div className="bg-[#0FB2AE] h-screen flex justify-center items-center ">
      <div className="h-[75%] md:h-[85%] md:w-[23.33%] bg-white rounded-lg ">
        <div className="h-[15%] flex items-center justify-center">
          <p className="text-black text-[25px] md:text-[36px] font-extrabold text-center">
            Login
          </p>
        </div>
          <div>
            <div className="px-10">
              <div>
                <label htmlFor="email">Username</label>
                <div className="py-3 underline underline-offset-3">
                  <input
                    id="email"
                    name="email"
                    placeholder="Type your username"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="pl-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className="py-3">
                  <input
                    id="password"
                    name="Password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-3"
                  />
                </div>
              </div>
            </div>

            <p className="px-10 text-end">
              <a href="/" className="">
                Forgot password?
              </a>
            </p>
            <div className="flex justify-center align-middle py-5 md:py-10">
              <button
                type="submit"
                className="text-white text-sm bg-[#0FB2AE] rounded-3xl w-[85%] h-8 text-center"
              >
                <p className="text-bold" role="button" onClick={handleSubmit} >Login</p>
              </button>
            </div>
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
            <p className="text-center pt-10 md:pt-20">Or Sign Up Using </p>
            <p className="text-center font-bold ">
              <a href="/register" className="hover:text-blue-600">Sign Up</a>
            </p>
      </div>
    </div>
  );
};

export default Login  ;