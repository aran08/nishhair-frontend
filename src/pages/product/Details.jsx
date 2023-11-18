import {AiFillFacebook} from "react-icons/ai";
import {BsTwitter,BsPinterest} from "react-icons/bs"

const Details = () => {
  const imageData = [
    {
      id: 1,
      ima: "/images/detail1.1.webp",
      msg: "Adjustable Ring – Cuban Link – Tarnish Free | Nish Hair X Evil Eye Jewel",
      pr: "Rs. 1,099.00",
    },
    {
      id: 2,
      ima: "/images/detail1.2.webp",
      msg: "ARATA CLEANSING SHAMPOO",
      pr: "Rs. 299.00",
    },
    {
      id: 3,
      ima: "/images/detail1.3.webp",
      msg: "Arata Nourishing Conditioner",
      pr: "Rs. 675.00",
    },
    {
      id: 4,
      ima: "/images/detail1.4.webp",
      msg: "Arata Hydrating Shampoo",
      pr: "Rs. 675.00",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className=" flex mt-28">
        <div className="w-[59%] justify-end gap-1 flex flex-wrap">
          {imageData.map((item) => (
            <div key={item.id} className="flex">
              <div className="">
                <img src={item.ima} alt="" className="w-[400px] h-[535px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-[41%] flex justify-center pl-16 pr-16">
          <div className="">
            <p className="text-xs">NISH HAIR</p>
            <p className="text-[26px] font-semibold">Adjustable Ring – Cuban Link – Tarnish Free | Nish Hair X Evil Eye Jewel</p>
            <p className="py-1">⭐⭐⭐⭐⭐ 7 Reviews</p>
            <p className="text-[#0FB2AE] my-1 text-lg font-semibold">Rs. 1,099.00</p>
            <p className="text-sm font-light">Inclusive of all taxes and shipping.</p>
            <p className="text-sm font-bold mt-4">or Pay ₹275 now. Rest in 0% interest EMIs</p>
            <p className="text-normal font-light mb-4">UPI & Cards Accepted, Online approval in 2 minutes</p>
            <div className="flex gap-3">
              <button className="w-[90px] h-[40px] border border-[#0FB2AE] rounded-3xl">button</button>
              <button className="w-[350px] h-[40px] border border-[#0FB2AE] rounded-3xl text-sm text-[#0FB2AE] font-semibold">ADD TO CART</button>
            </div>
            <div className="">
              <button className="w-11/12 h-[40px] rounded-3xl bg-[#0FB2AE] my-3 text-sm text-white font-semibold">BUY IT NOW</button>
            </div>
            <p className="text-[#FF1F1F] text-sm font-bold">Please note: there is no return or exchange applicable on discounted, sale and coupon bought items.</p>
            <div className="flex gap-5 my-5">
               <AiFillFacebook/>
               <BsTwitter/>
               <BsPinterest/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
