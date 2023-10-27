import React from "react";
import Slider from "react-slick";

const imageData = [
  {
    id: 1,
    src: "./images/hair1.webp",
  },
  {
    id: 2,
    src:"./images/hair2.webp",
  },
  {
    id: 3,
    src: "./images/hair3.webp",
  },
  {
    id: 4,
    src: "./images/hair4.webp",
  },
  {
    id: 5,
    src: "./images/hair5.webp",
  },
  {
    id: 6,
    src: "./images/hair6.webp",
  },
];

function Index() {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    swipe: true,

    Responsive : [
    {
       
    }
  ]
  };

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-2xl xl:text-3xl font-semibold text-center py-5">
        Hair Transformations
      </h1>
      <Slider {...settings} className="">
          {imageData.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt=""
                className="h-30 lg:h-[600px] lg:w-full px-4 justify-evenly lg:px-[85px]"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Index;
