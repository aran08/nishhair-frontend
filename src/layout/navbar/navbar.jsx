import { BiSearch } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cart from "../../pages/cart/Cart";
import { useScrollTop } from "./Usescrolltop";
import Shopdrawer from "../../pages/shop/Shopdrawer";
import {useDispatch, useSelector} from "react-redux"
import { getUser} from "../../redux/slice/auth";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)
 
  const handleLogout = async () => {
     await localStorage.removeItem("accessToken")
  };

  const [showDrawer, setShowDrawer] = useState(false);
  const [showShop, setShop] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const scroll = useScrollTop();

  const handleGetUser = async()=>{
    const result = await dispatch(getUser());
    return result;
  }

  useEffect(()=>{
    handleGetUser();
  },[]) 


  return (
    <nav
      className={`h-24 flex justify-center items-center text-black hover:bg-white top-0 fixed z-[999] w-full border-black ${
        scroll ? "bg-white shadow-md" : " border-b-[1px]"
      }`}
     
    >
      <div className="w-11/12 flex justify-between items-center text-center my-0 py-0 z-50 group h-full space-x-10">
        <div className="sm:w-[55%] w-[80%] flex justify-between items-center group-hover:text-[#2dd4bf] h-full">
          <div className="lg:flex lg:gap-2 xl:gap-5 font-medium hidden lg:text-[8px] xl:text-base ">
            <a href="/PageNot" className="hover:underline hover:text-black">
              HOME
            </a>
            
            <div
              onMouseEnter={() => setShop(!showShop)}
              onMouseLeave={() => setShop(!showShop)}
            >
              SHOP
            </div>
            <Drawer
              anchor="top"
              open={showShop}
              onMouseLeave = {() => setShowDrawer(false)}
            >
              <Shopdrawer className=""  
              // onMouseEnter={() => setShop(!showShop)}
              onMouseLeave={() => setShop(!showShop)}
              />
            </Drawer>

            <a href="/helpme" className="hover:underline hover:text-black">
              HELP ME
            </a>
            <a href="/aboutus" className="hover:underline hover:text-black">
              ABOUT US
            </a>
            <a href="/bookatrial" className="hover:underline hover:text-black">
              BOOK A TRIAL
            </a>
            <a href="/reviews" className="hover:underline hover:text-black">
              REVIEWS
            </a>
          </div>
          <div
            className="lg:hidden gap-5 font-medium flex"
            onClick={() => setShow(true)}
          >
            <div className="hover:underline hover:text-black">
              <BsList />
            </div>
          </div>
          <Drawer anchor="left" open={show} onClose={() => setShow(false)}>
            <div className="w-[300px]">
              <h1>Home</h1>
              <h1>SHOP</h1>
              <h1>HELP ME</h1>
              <h1>ABOUT US</h1>
              <h1>BOOK A TRIAL</h1>
              <h1>RIVIEW</h1>
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
          <div>
            <div
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            > 
            {
              user.user.email ? (
                <div className="uppercase rounded-full w-10 h-10 bg-red-400 text-center flex justify-center items-center ">
                  {user.user.email.slice(0,1)}
                </div>
              ):(
                <div>
                    <CgProfile className="text-black text-2xl gap-0 z-[999999]" />
                </div>
              )
            }
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ zIndex: 99999 }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/profile">Profile</a>
                </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem>
                { user.user.email ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <a href="/login">
                    
                    <button onClick={handleLogout}>
                      Login
                    </button>
                    </a>
                )}
              </MenuItem>
            </Menu>
          </div>
          <BiSearch />
          <RiShoppingBag3Line onClick={() => setShowDrawer(true)} />
          <Drawer
            anchor="right"
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
          >
            <Cart />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
