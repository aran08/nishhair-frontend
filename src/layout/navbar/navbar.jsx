import { BiSearch } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";

const navbar = () => {
  return (
    <nav className="bg-slate-50 h-24 flex justify-center items-center hover:bg-sky-700 top-0">
      <div className="w-11/12 flex justify-between items-center text-center fixed">
        <div className="w-[55%] flex justify-between items-center  ">
          <div className="flex gap-5">
            <a href="/" className="hover:underline hover:text-black font-medium">HOME</a>
            <a href="/" className="hover:underline hover:text-black font-medium">SHOP</a>
            <a href="/" className="hover:underline hover:text-black font-medium">HELP ME</a>
            <a href="/" className="hover:underline hover:text-black font-medium">ABOUT US</a>
            <a href="/" className="hover:underline hover:text-black font-medium">BOOK A TRIAL</a>
            <a href="/" className="hover:underline hover:text-black font-medium">REVIEWS</a>
          </div>
          <div>
            <img
              src="/images/logo.webp"
              className="w-[117.74px] h-[80px] py-2"
              alt="logo"
            />
          </div>
        </div>

        <div className="flex text-2xl  gap-3">
          <BiSearch />
          <RiShoppingBag3Line />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
