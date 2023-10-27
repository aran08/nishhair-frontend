import React from "react";
import { HiArrowSmUp } from "react-icons/hi";
import {BsInstagram, BsPinterest} from "react-icons/bs";
import {GrYoutube} from "react-icons/gr";




const About = () => {
  return (
    <>
      <div className="border border-black bg-[#939393] text-white">
        <div className=" ml-12 mt-14 flex">
          <div className="w-[425px] pr-8">
            <h1 className="font-bold">ABOUT US</h1>
            <div>
              <img
                src="/images/bottom.avif"
                alt=""
                className="h-[110px] w-[130px] py-5"
              />
            </div>
            <p className="text-sm pb-3 font-semibold">
              Nish Hair is India's First Online Company of Hair Extensions. At
              Nish Hair we provide the best Clip-In Hair Extensions with the
              Fastest Delivery Time with In India & worldwide . Being the first
              to understand the Hair Needs of women who are looking for an easy
              yet quick solution for their Hair in the comfort of their homes.
              We've been there to guide our customers at each step when it comes
              to their Hair volume or Hair Loss . Nish Hair Your Way
            </p>
            <p className="py-2 text-[15px]">By Parul Hariom Gulati</p>
            <p className="py-2 underline underline-offset-2 underline-white text-sm font-medium">
              <a href="/">+91 9582253234‬</a>
            </p>
            <p className="py-2 underline underline-offset-4 underline-white text-sm font-medium">
              <a href="/" >Know More</a>
            </p>
          </div>
          <div className="w-[300px]">
            <p className="font-medium pb-4">RESOURCES</p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Home page
              </a>
            </p>
            <div className="pb-2">
              <p className=" text-sm font-medium">Shop</p>
            </div>
            <p className="pb-2">
              <a href="/Help" className="text-sm font-medium pb-3.5">
                Help Me Choose
              </a>
            </p>
            <p className="pb-2">
              <a href="/About Us" className="text-sm font-medium pb-3.5">
                About Us
              </a>
            </p>
            <p className="pb-2">
              <a href="/Contact" className="text-sm font-medium pb-3.5">
                Contact Us
              </a>
            </p>
            <p className="pb-2">
              <a href="/Reviews" className="text-sm font-medium">
                Reviews
              </a>
            </p>
          </div>
          <div className="w-[300px]">
            <p className="font-medium pb-4">SOCIAL</p>
            <p className="pb-2">
              <a href="https://www.instagram.com/nishhair/" className="text-sm font-medium flex items-center ">
                <BsInstagram className="mr-2"/>Instagram
              </a>
            </p>
            <p className="pb-2">
              <a href="https://www.youtube.com/@nishhair" className="text-sm font-medium flex items-center">
                <GrYoutube className="mr-2"/>YouTube
              </a>
            </p>
            <p className="pb-2">
              <a href="https://in.pinterest.com/nishhair/" className="text-sm font-medium flex items-center">
                <BsPinterest className="mr-2"/>Pinterest
              </a>
            </p>
          </div>
          <div className="w-[300px]">
            <p className="font-medium pb-4">POLICY</p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Privacy Policy
              </a>
            </p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Return and Exchange Policy
              </a>
            </p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Shipping Policy
              </a>
            </p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Terms of Service
              </a>
            </p>
          </div>
          <div className="w-[400px]">
            <p className="font-medium pb-4">SUPPORT</p>
            <p className="pb-2">
              {" "}
              <a href="/" className="text-sm font-medium">
                Why Nish Hair
              </a>
            </p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                Order Tracking
              </a>
            </p>
            <p className="pb-2">
              <a href="/" className="text-sm font-medium">
                FAQ's
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-end pr-14 pb-10 ">
          <img src="/images/pay.webp" alt="x" className="h-[25px] w-[40px] rounded " />
        </div>
        <p className="pb-24 text-xs font-medium ml-12">
          © 2023 Nish Hair, All rights reserved.{" "}
          <a
            href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
            className="underline"
          >
            Powered by Shopify
          </a>
        </p>
      </div>
      <div className="flex flex-row justify-end  ">
        <div className="pb-24 fixed bottom-3 pr-9">
          <HiArrowSmUp className="bg-white w-[35px] h-[35px] rounded-3xl"/>
        </div>
        <div className="flex w-full justify-between p-5 fixed bottom-3">
          <div className="h-[30px] w-[60px] bg-black">hii</div>
          <div>
            <img
              src="/images/chat.jpg"
              alt=""
              className="h-[60px] w-[60px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
