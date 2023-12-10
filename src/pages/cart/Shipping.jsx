import Conditions from "../../components/content/Conditions";
import Paymenttop from "../../components/content/Paymenttop";
import Payment from "../payment/Payment";
import { LiaLessThanSolid } from "react-icons/lia";

const Shipping = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="flex w-[88%]">
        <div className="w-1/2">
          <Paymenttop/>
          <div className="w-11/12 pl-10">
            <div className="border-2">
              <div className="grid grid-cols-6 gap-4 h-10 py-1">
                <div className="flex justify-center items-center">Contact</div>
                <div className="col-start-2 col-span-4 flex items-center">
                  aranjaish2308@gmail.com
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="/information"
                    className="text-xs font-semibold underline text-blue-700"
                  >
                    Change
                  </a>
                </div>
              </div>
              <div className="border-t-2 grid grid-cols-6 gap-4 py-2">
                <div className="flex justify-center items-center">Ship to</div>
                <div className="col-start-2 col-span-4 flex items-center">
                  aran4616, Krishna Nagar Jagjeetpur, f-11, 249404 Haridwar UK,
                  India
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="/information"
                    className="text-xs font-semibold underline text-blue-700"
                  >
                    Change
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-semibold text-[18px] mt-8">Shipping method</p>
              <div className="my-2">
                <Payment />
              </div>
            </div>
            <div className="flex justify-between w-full mb-16">
              <div className="flex items-center gap-2">
                <a href="/information">
                  <LiaLessThanSolid className="text-[#1F9BE2]" />
                </a>
                <a href="/information" className="text-[#1F9BE2] ">
                  Return to information
                </a>
              </div>
              <button className="bg-[#105989] h-16 w-44 rounded text-white font-medium text-sm">
                <a href="/payment">Continue to payment</a>
              </button>
            </div>
            <Conditions/>
          </div>
        </div>
        <div className="w-1/2 bg-[#0FB2AE] border border-black h-screen">
          <div className="ml-10 w-[60%] mt-16">
            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] rounded-md border border-white">
                <img src="" alt="" />
              </div>
              <div className="border border-white w-[300px]"></div>
              <div className="w-[60px] h-[60px] rounded-md border border-white flex items-center text-white justify-center">
                1250
              </div>
            </div>
            <div className="flex gap-5 py-5 ">
              <div>
                <input
                  type="text"
                  name=""
                  placeholder="Discount code or gift card"
                  id=""
                  className="w-[300px] h-12 rounded-md"
                />
              </div>
              <button className="border border-white w-20 rounded-md text-white flex justify-center items-center">
                Apply
              </button>
            </div>
            <div className="flex justify-between pb-1 text-white">
              <p>Subtotal</p>
              <p>1200</p>
            </div>
            <div className="flex justify-between pb-3 text-white">
              <p>Shipping</p>
              <p>Calculated at next step</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <div>
                <p>Total</p>
                <p>Including ₹181.49 in taxes</p>
              </div>
              <p>INR ₹2,198.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
