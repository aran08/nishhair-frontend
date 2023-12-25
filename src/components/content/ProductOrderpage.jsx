import React from 'react'

const ProductOrderpage = () => {
  return (
    <div className="bg-[#0FB2AE] w-full h-max">
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
            {/* <div className="flex gap-5 py-5 ">
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
            </div> */}
            <div className="flex justify-between pb-1 text-white pt-9">
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
  )
}

export default ProductOrderpage