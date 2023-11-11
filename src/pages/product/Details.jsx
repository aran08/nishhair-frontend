import {AiFillFacebook} from "react-icons/ai";
import {BsTwitter,BsPinterest} from "react-icons/bs"

const Details = () => {
  const imageData = [
    {
      id: 1,
      ima: "/images/product1.webp",
      msg: "Adjustable Ring – Cuban Link – Tarnish Free | Nish Hair X Evil Eye Jewel",
      pr: "Rs. 1,099.00",
    },
    {
      id: 2,
      ima: "/images/product2.webp",
      msg: "ARATA CLEANSING SHAMPOO",
      pr: "Rs. 299.00",
    },
    {
      id: 3,
      ima: "/images/product3.webp",
      msg: "Arata Nourishing Conditioner",
      pr: "Rs. 675.00",
    },
    {
      id: 4,
      ima: "/images/product4.webp",
      msg: "Arata Hydrating Shampoo",
      pr: "Rs. 675.00",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 flex mt-28 gap-16">
        <div className="w-[55%] justify-center border gap-1 flex flex-wrap">
          {imageData.map((item) => (
            <div key={item.id} className=" border-black flex border-2">
              <div className="">
                <img src={item.ima} alt="" className="w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-[41%] flex justify-center border border-blue-600">
          <div className="border border-black">
            <p className="text-xs">NISH HAIR</p>
            <p className="text-[28px] font-semibold">Adjustable Ring – Cuban Link – Tarnish Free | Nish Hair X Evil Eye Jewel</p>
            <p>⭐⭐⭐⭐⭐ 7 Reviews</p>
            <p>Rs. 1,099.00</p>
            <p>Inclusive of all taxes and shipping.</p>
            <p>or Pay ₹275 now. Rest in 0% interest EMIs </p>
            <p>UPI & Cards Accepted, Online approval in 2 minutes</p>
            <div className="flex">
              <button>button</button>
              <button>button</button>
            </div>
            <div>
              <button>button</button>
            </div>
            <p>Please note: there is no return or exchange applicable on discounted, sale and coupon bought items.</p>
            <div className="flex">
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
