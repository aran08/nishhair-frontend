import { useState } from "react";
import Slider from "react-slick";

const Justin = () => {

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
    {
      id: 5,
      ima: "/images/product5.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 6,
      ima: "/images/product6.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 7,
      ima: "/images/product7.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 8,
      ima: "/images/product8.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 9,
      ima: "/images/product9.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 10,
      ima: "/images/product10.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 11,
      ima: "/images/product11.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 12,
      ima: "/images/product12.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
  ];


  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchMove: true,
    swipe: true,

    // nextArrow,
    // prevArrow,
    // arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [identity,setIdentity] = useState(null)

  const handleShowDiv = (i) => {
    setIdentity(i+1)
    
  };
  const handleHideDiv = (i) => {
    setIdentity(null)
  };

  return (
    <div className="w-full flex justify-center gap-4 items-center border-b-[1px] my-10">
      
      <div className="w-11/12">
      <p className="text-4xl font-semibold ml-3 mb-6">JUST IN</p>
        <Slider {...settings}>
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
                    <img src={item.ima} alt="" className='w-full' />
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
              <div>
                <p className="text-center font-semibold ">{item.msg}</p>
                <p className="text-[#14B4B0] text-center font-semibold">
                  {item.pr}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Justin;
/* 
1
            <div>
              <img src="/images/quickview2.webp" alt="" />
            </div>
            <div>
              <img src="/images/quickview3.webp" alt="" />
            </div>
2
            <div>
              <img src="/images/quickview2.2.webp" alt="" />
            </div>
            <div>
              <img src="/images/quickview2.3.webp" alt="" />
            </div>
3
            <div>
              <img src="/images/quickview3.2.webp" alt="" />
            </div>
4
            <div>
              <img src="/images/quickview4.2.webp" alt="" />
            </div>
            <div>
              <img src="/images/quickview4.3.webp" alt="" />
            </div>
            
5           
            <h1 className="text-3xl font-medium py-6"> JUST IN</h1>
*/