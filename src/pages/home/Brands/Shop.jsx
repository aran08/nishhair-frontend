import React, { useState } from "react";

const Shop = () => {

  const imageData = [
    {
      id: 1,
      ima: "/images/shop1.webp",
    },
    {
      id: 2,
      ima: "/images/shop2.4.webp",
    },
    {
      id: 3,
      ima: "/images/shop3.3.webp",
    },
    {
      id: 4,
      ima: "/images/shop4.4.webp",
    }
  ];

  const [identity,setIdentity] = useState(null)

  const handleShowDiv = (i) => {
    setIdentity(i+1)
    
  };
  const handleHideDiv = (i) => {
    setIdentity(null)
  };

  return (
    <div className=" px-5 md:px-14">
      <h1 className="text-[24px] md:text-[36px] font-semibold mb-2 mt-8">SHOP BY BRANDS</h1>
      <div className="flex">
      {imageData.map((item,i) => (
            <div 
            key={item.id}
           
                 className=" h-max overflow-hidden  px-3">
              <div
               onMouseEnter={() => handleShowDiv(i)}
               onMouseLeave={handleHideDiv}
                className="relative overflow-hidden"
              >
                
                 <div className='h-max overflow-y-hidden'>
                    <img src={item.ima} alt="" className='md:h-[380px] md:w-[360px] h-20 w-20' />
                  </div>
              

                <div
                  className={`absolute bottom-0 z-[999] duration-500  transition-transform left-0 bg-[#8E9491] 
                   w-full  justify-center flex items-center  text-white font-semibold text-xs h-10 
                  ${
                     item.id !== identity ? 
                     "translate-y-12"
                      : "translate-y-0 " 
                  }
                  `}
                >
                  {" "}
                  QUICK VIEW{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;