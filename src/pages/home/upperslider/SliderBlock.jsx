import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AOS from "aos";

function Index() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:<PreviousBtn />,
    // nextArrow:<NextBtn />,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" w-[100%] md:w-[100%]">
      <Slider {...settings} className="">
        <div className="relative aspect-video">
          <video loop autoPlay className="w-full h-full " >
            <source src="/videos/intro1.mp4" />
          </video>
          <div className="w-full flex justify-center items-center">
          <div className="absolute bottom-[33%] md:left-[10%] lg:left-[30%] xl:left-[20%]">
            <p className="text-center font-medium text-sm text-white mb-6">
              <a href="/" className="mr-3">
                N I S H
              </a>
              <a href="/">H A I R</a>
            </p>
            <p className="text-6xl font-semibold text-center text-white ">
              Get Celebrity Like Hair
            </p>
            <p className="text-center font-medium text-sm text-white mt-6">
              AS SEEN ON
            </p>
          </div>
          </div>
        </div>
        <div className="relative">
          <video loop autoPlay className="w-[100%]">
            <source src="/videos/intro2.mp4" />
          </video>
          <div className="absolute bottom-[30%] md:left-[10%]  lg:left-[25%] xl:left-[20%]">
            <ul>
              <li
                href="/"
                className="text-center font-medium text-sm text-white mb-6"
              >
                <a href="/" className="mr-3">
                  N I S H
                </a>
                <a href="/">H A I R</a>
              </li>
              <li
                href="/"
                className="text-6xl font-semibold text-center text-white "
              >
                100% HUMAN HAIR
              </li>
              <li
                href=""
                className="text-center font-medium text-sm text-white mt-6"
              >
                MADE WITH LOVE
              </li>
            </ul>
            <div className="flex mt-10">
              <div className="">
                <button type="button" className="btn1 btn2">
                  SHOP NOW
                </button>
              </div>
              <div className="">
                <button type="button" className="btn1 btn2">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Index;
