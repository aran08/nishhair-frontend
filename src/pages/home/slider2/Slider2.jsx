import React from "react";
import Slider from "react-slick";

const Slider2 = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    // prevArrow: true,
    // nextArrow: true,
    arrows: false
   
  };

  return (
 
      <div className="place-items-center px-3 md:pr-[25%] md:pl-[25%] bg-[#0FB2AE] py-10 " >
        <Slider {...settings} className="  py-4" >
          <div className="text-center  text-white font-medium text-xl ">
            <p className="py-4">⭐⭐⭐⭐⭐</p>
            <p >
              Through our work in salons and on our film projects we constantly
              need to create Someting new. Each individual has unique
              requirements and hair extensions can offer endless possibilities!!
            </p>
            <p className="p-6 text-sm" >
              -- Adhuna - Celebrity Hairstylist | Co Founder Bblunt
            </p>
          </div>
          <div className="text-center  text-white font-medium text-xl ">
          <p className="py-4">⭐⭐⭐⭐⭐</p>
            <p >
              The Nish hair extensions are innovative and created for people
              with varied needs and lifestyles. Personally for me, this is one
              stop shop. From using coloured strands, adding volume or length to
              simply framing my face or adding layers. I can now do it all
            </p>
            <p className="p-6 text-sm"> Achint Kaur - Actress</p>
          </div>
          <div className="text-center  text-white font-medium text-xl ">
          <p className="py-4">⭐⭐⭐⭐⭐</p>
            <p >
              The possibilities are endless with hair extensions, which is why
              they've been such a key component to film, tv and fashion, and
              also why Nish extensions are a staple in my kit
            </p>
            <p className="p-2 text-sm md:p-6">
              -- Antra Bahuguna Ghosh - celebrity Hairstylist
            </p>
          </div>
        </Slider>
      </div>
   
  );
};

export default Slider2;
