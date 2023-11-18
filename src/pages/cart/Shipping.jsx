const Shipping = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="flex w-[88%]">
        <div className="w-1/2 border border-black">
          <div className="flex justify-end items-center flex-col h-[200px] border border-black">
            <img
              src="/images/logo.webp"
              alt=""
              className="w-[170px] h-[80px]"
            />
            <div className="flex gap-2 py-3">
              <p>Cart</p>
              <p>Information</p>
              <p>Shipping</p>
              <p>Payment</p>
            </div>
          </div>
          <div className="w-11/12 ml-10">
            <div className="border">
                <div className="flex">
                    <div>Contact</div>
                    <div>aranjaish2308@gmail.com</div>
                    <div><a href="/information" className="text-xs font-semibold underline text-blue-700 flex items-end">Change</a></div>
                </div>
                <div className="border-t"></div>
            </div>
          <div className="flex gap-5 text-xs border-t-2 py-5 text-blue-600 underline underline-offset-1 font-semibold">
            <a href="/">Refund policy</a>
            <a href="/">Shipping policy</a>
            <a href="/">Privecy policy</a>
            <a href="/">Terms of services</a>
            <a href="/">Contact information</a>
          </div>
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
