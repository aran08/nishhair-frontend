import React from "react";

const Shop = () => {
  return (
    <div className=" px-5 md:px-14">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2 mt-8">SHOP BY BRANDS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 2xl:gap-7 w-full border">
        <div>
        <div className="h-[200px] md:h-[332.2px] w-[200px] md:w-[332.2px] relative">
          <img src="/images/shop1.webp" alt="" />
          {/* <img src="/images/shop1.1.webp" alt="" /> */}
          {/* <img src="/images/shop1.2.webp" alt="" /> */}
          {/* <img src="/images/shop1.3.webp" alt="" /> */}
        </div>
        {/* <div className="absolute">
              QUICK VIEW
        </div> */}
        </div>
        <div className="h-[200px] md:h-[332.2px] w-[200px] md:w-[332.2px]">
          <img src="/images/shop2.4.webp" alt="" className="h-[332.2px] w-[332.2px]"/>
          {/* <img src="/images/shop2.1.webp" alt="" /> */}
          {/* <img src="/images/shop2.2.webp" alt="" /> */}
          {/*<img src="/images/shop2.3.webp" alt="" />*/}
        </div>
        <div className="h-[200px] mr-2 md:h-[332.2px] w-[200px] md:w-[332.2px]">
          <img src="/images/shop3.3.webp" alt="" className="md:h-[332.2px] h-[200px] w-[182px] md:w-[332.2px]"/>
          {/* <img src="/images/shop3.1.webp" alt="" /> */}
          {/* <img src="/images/shop3.2.webp" alt="" /> */}
        </div>
        <div className="h-[200px] md:h-[332.2px] w-[200px] md:w-[332.2px]">
          {/* <img src="/images/shop4.1.webp" alt="" /> */}
          {/* <img src="/images/shop4.2.webp" alt="" /> */}
          {/* <img src="/images/shop4.3.webp" alt="" /> */}
          <img src="/images/shop4.4.webp" alt="" className="md:h-[332.2px] h-[200px] w-[182px] md:w-[332.2px]" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
