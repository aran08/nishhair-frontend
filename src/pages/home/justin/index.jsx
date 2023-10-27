import { useState } from "react";
import Slider from "react-slick";



const Justin = () => {

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    swipe: true,
  
    // arrows: true,
  
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // infinite: true,
          // dots: true
        },
      },
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
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // cssEase: 'linear',
  };
  
  const [showDiv, setShowDiv] = useState(true);

  const handleShowDiv = () => {
    setShowDiv(!showDiv);
  };

  const [showDiv1, setShowDiv1] = useState(true);

  const handleShowDiv1 = () => {
    setShowDiv1(!showDiv1);
  };

  const [showDiv2, setShowDiv2] = useState(true);

  const handleShowDiv2 = () => {
    setShowDiv2(!showDiv2);
  };

  const [showDiv3, setShowDiv3] = useState(true);

  const handleShowDiv3 = () => {
    setShowDiv3(!showDiv3);
  };

  return (
    <div className="w-full flex justify-center items-center border-b-[1px] border-black">
      <div className="w-11/12">
        <Slider {...settings}>
          <div className="">
            <div
              className=" relative border overflow-hidden mr-2"
              onMouseEnter={handleShowDiv}
              onMouseLeave={handleShowDiv}
            >
              <Slider {...settings2}>
                <div className="">
                  <img src="/images/quickview1.webp" alt="" />
                </div>
              </Slider>

              <div
                className={`bg-gray-400 absolute z-20  w-full h-8 flex justify-center items-center  duration-500  transition-transform text-white text-normal ${
                  !showDiv
                    ? "-translate-y-8 opacity-100"
                    : "-translate-y-2 opacity-0"
                } `}
              >
                <p>QUICK VIEW </p>
              </div>
            </div>
            <a
              href="/"
              className=" text-xs md:text-sm font-medium text-[#939393] text-center"
            >
              SCALP LINE HAIR TOPPER - 1.5 X 5INCH - SILK BASE - NISH HAIR
            </a>
            <p className="text-xs md:text-sm text-center text-[#0FB2AE] font-semibold">
              FROM Rs.11,999.00
            </p>
          </div>

          <div>
            <div
              className=" relative border overflow-hidden mr-2"
              onMouseEnter={handleShowDiv1}
              onMouseLeave={handleShowDiv1}
            >
              <div >
                <img src="/images/quickview2.1.webp" alt="" />
              </div>

              <div
                className={`bg-gray-400 absolute z-20  w-full h-8 flex justify-center items-center  duration-500  transition-transform text-white text-normal ${
                  !showDiv
                    ? "-translate-y-8 opacity-100"
                    : "-translate-y-2 opacity-0"
                } `}
              >
                <p>QUICK VIEW </p>
              </div>
            </div>
            <a
              href="/"
              className="text-xs md:text-sm font-medium text-[#939393] text-center"
            >
              SCALP LINE HAIR TOPPER - 1.5 X 5INCH - SILK BASE - NISH HAIR
            </a>
            <p className="text-xs md:text-sm text-center text-[#0FB2AE] font-semibold">
              FROM Rs.11,999.00
            </p>
          </div>

          <div>
            <div
              className=" relative border overflow-hidden mr-2"
              onMouseEnter={handleShowDiv1}
              onMouseLeave={handleShowDiv1}
            >
              <img src="/images/quickview2.1.webp" alt="" />
              <div
                className={`bg-gray-400 absolute z-20  w-full h-8 flex justify-center items-center  duration-500  transition-transform text-white text-normal ${
                  !showDiv
                    ? "-translate-y-8 opacity-100"
                    : "-translate-y-2 opacity-0"
                } `}
              >
                <p>QUICK VIEW </p>
              </div>
            </div>
            <a
              href="/"
              className="text-xs md:text-sm font-medium text-[#939393] text-center"
            >
              SCALP LINE HAIR TOPPER - 1.5 X 5INCH - SILK BASE - NISH HAIR
            </a>
            <p className="text-xs md:text-sm text-center text-[#0FB2AE] font-semibold">
              FROM Rs.11,999.00
            </p>
          </div>

          <div>
            <div
              className=" relative border overflow-hidden mr-2"
              onMouseEnter={handleShowDiv2}
              onMouseLeave={handleShowDiv2}
            >
              <img src="/images/quickview3.1.webp" alt="" />
              <div
                className={`bg-gray-400 absolute z-20  w-full h-8 flex justify-center items-center  duration-500  transition-transform text-white text-normal ${
                  !showDiv
                    ? "-translate-y-8 opacity-100"
                    : "-translate-y-2 opacity-0"
                } `}
              >
                <p>QUICK VIEW </p>
              </div>
            </div>
            <a
              href="/"
              className="text-xs md:text-sm font-medium text-[#939393] text-center"
            >
              SCALP LINE HAIR TOPPER - 1.5 X 5INCH - SILK BASE - NISH HAIR
            </a>
            <p className="text-xs md:text-sm text-center text-[#0FB2AE] font-semibold">
              FROM Rs.11,999.00
            </p>
          </div>

          <div>
            <div
              className=" relative border overflow-hidden mr-2 "
              onMouseEnter={handleShowDiv3}
              onMouseLeave={handleShowDiv3}
            >
              <div>
                <div>
                  <img src="/images/quickview4.1.webp" alt="" />
                </div>
              </div>
              <div
                className={`bg-gray-400 absolute z-20  w-full h-8 flex justify-center items-center  duration-500  transition-transform text-white text-normal ${
                  !showDiv
                    ? "-translate-y-8 opacity-100"
                    : "-translate-y-2 opacity-0"
                } `}
              >
                <p>QUICK VIEW </p>
              </div>
            </div>
            <a
              href="/"
              className="text-xs md:text-sm font-medium text-[#939393] text-center"
            >
              SCALP LINE HAIR TOPPER - 1.5 X 5INCH - SILK BASE - NISH HAIR
            </a>
            <p className="text-xs md:text-sm text-center text-[#0FB2AE] font-semibold">
              FROM Rs.11,999.00
            </p>
          </div>
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
