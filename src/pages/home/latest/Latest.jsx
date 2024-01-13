import React from "react";
import Slider from "react-slick";

const Latest = () => {

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
          // infinite: true,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold px-12 pt-28">Latest News</h1>
      
      <Slider {...settings} className="px-5 py-3">
        <div className="">
          <div className="overflow-hidden">
            <img
              src="/images/test1.webp"
              alt=""
              className="transition ease-in-out delay-950  hover:-translate-y-1 hover:scale-110  duration-[2500ms]"
            />
          </div>
          <div className="text-[#939393]">
            <p className="py-5">SEPTEMBER 25 2023</p>
            <p className="text-2xl font-semibold">
              Looking for Hair Extensions Without Clips? Try Halo Hair
              Extensions!
            </p>
            <p className="py-6 font-normal text-[17px]">
              Hey there, gorgeous! If you're on a quest for luscious locks
              without the fuss of clip-on, tape-in, sew-in, pre-bonded, or
              glue-on hair extensions, you're in for a treat. We understand...
            </p>
            <a href="/" className="underline underline-offset-4">
              Read more
            </a>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img
              src="/images/test2.webp"
              alt=""
              className="transition ease-in-out delay-950  hover:-translate-y-1 hover:scale-110  duration-[2500ms] "
            />
          </div>
          <div className="text-[#939393]">
            <p className="py-5">SEPTEMBER 06 2023</p>
            <p className="text-2xl font-semibold">Wig vs Hair Extensions: What Should I Choose?</p>
            <p className="py-6 font-normal text-[17px]">
              In the world of hair transformation, the choice between wigs and
              hair extensions depends on your unique needs and preferences.
              Wigs, available in various styles and colours, are the go-to...
            </p>
            <a href="/" className="underline underline-offset-4">
              Read more
            </a>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <img
              src="/images/test3.webp"
              alt=""
              className="transition ease-in-out delay-950  hover:-translate-y-1 hover:scale-110  duration-[2500ms] "
            />
          </div>
          <div className="text-[#939393]">
            <p className="py-5">AUGUST 29 2023</p>
            <p className="text-2xl font-semibold">
              Best Back To School Hairstyles and How To Do Them!
            </p>
            <p className="py-6 font-normal text-[17px]">
              Ah, the days of scouring the internet for the perfect back to
              school hairstyles that seamlessly blend style and convenience –
              who could forget them? The thrill of adorning a...
            </p>
            <a href="/" className="underline underline-offset-4 flex align-bottom">
              Read more
            </a>
          </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Latest;
