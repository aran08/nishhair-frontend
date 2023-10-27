import { BiSearch } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {BsList} from "react-icons/bs"
import { useState } from "react";
import { Drawer } from "@mui/material";

const Navbar = () => {
    
  const [show,setShow] = useState(false)
  return (
    <nav className=" h-24 flex justify-center items-center text-black hover:bg-white top-0 fixed z-10 w-full border-b-[1px] border-black">
      <div className="w-11/12 flex justify-between items-center text-center my-0 py-0 z-50 group h-full space-x-10">
        <div className="sm:w-[55%] w-[80%] flex justify-between items-center group-hover:text-[#2dd4bf] h-full">
          <div className="lg:flex lg:gap-2 xl:gap-5 font-medium hidden lg:text-[8px] xl:text-base ">
            <a href="/PageNot" className="hover:underline hover:text-black">
              HOME
            </a>
            <a  href="/shop" className="hover:underline hover:text-black">
              SHOP
            </a>
            <a href="/helpme" className="hover:underline hover:text-black">
              HELP ME
            </a>
            <a href="/about" className="hover:underline hover:text-black">
              ABOUT US
            </a>
            <a href="/bookatrial" className="hover:underline hover:text-black">
              BOOK A TRIAL
            </a>
            <a href="/reviews" className="hover:underline hover:text-black">
              REVIEWS
            </a>
          </div>
          <div className="lg:hidden gap-5 font-medium flex" onClick={() => setShow(true)}>
            <div className="hover:underline hover:text-black">
              <BsList/>
            </div>
          </div>
          <Drawer
            anchor="left"
            open={show}
            onClose={() => setShow(false)}
          >  
          <div className="w-[300px]">
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </div>
          </Drawer>

          <div>
            <img
              src="/images/logo.webp"
              className="w-[117.74px] h-[80px] py-2"
              alt="logo"
            />
          </div>
        </div>

        <div className="flex text-2xl  gap-3 group-hover:text-black">
          <a href="/login"><CgProfile /></a>
          <BiSearch />
          <RiShoppingBag3Line />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
