import React from "react";
import Slider from "react-slick";

const Spotted = () => {

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 6,
          slidesToScroll: 2,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          // infinite: true,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  const imageData = [
    {
      id: 1,
      name: "Huma Qureshi",
      href: "/images/Huma.webp",
      src: "https://www.instagram.com/iamhumaq/?hl=en",
      alt:"Apple1"
    },
    // {
    //   id: 2,
    //   name: "Komal pandey",
    //   href: "/images/Komal.webp",
    //   src: "https://www.instagram.com/komalpandeyofficial/?hl=en",
    //   alt:"Apple2"
    // },
    {
      id: 2,
      name: "Barkha Singh",
      href: "/images/Barkha.webp",
      src: "https://www.instagram.com/barkhasingh0308/",
      alt:"Apple3"
    },
    {
      id: 3,
      name: "Ahsaas Channa",
      href: "/images/Ahsaas.webp",
      src: "https://www.instagram.com/ahsaassy_/?hl=en",
      alt:"Apple4"
    },
    {
      id: 4,
      name: "Srishti Shrivastava",
      href: "/images/Srishti.webp",
      src: "https://www.instagram.com/srishti.shrivastava21/?hl=en",
      alt:"Apple5"
    },
    {
      id: 5,
      name: "Sobhita Dhulipala",
      href: "/images/Sobhita.webp",
      src: "https://www.instagram.com/sobhitad/?igshid=YmMyMTA2M2Y%3D",
      alt:"Apple6"
    },
    {
      id: 6,
      name: "Juhi Godambe",
      href: "/images/Juhi.webp",
      src: "https://www.instagram.com/juhigodambe/?hl=en",
      alt:"Apple7"
    },
    {
      id: 7,
      name: "Simran Natekar",
      href: "/images/Simran.webp",
      src: "https://www.instagram.com/simran.natekar/?hl=en",
      alt:"Apple8"
    },
  ];
  return (
    <div className="pb-12">
      <p className="text-center text-2xl 2xl:text-3xl font-semibold py-8">
        Spotted In Nish Hair
      </p>
      <div>
      <Slider {...settings} className="px-5">
        {imageData.map((item) => (
          <div key={item.id} className="relative flex gap-2">
            <img src={item.href} alt={item.alt} className="h-40 w-40 md:h-fit md:w-fit"/>
            <div className="absolute bottom-[12%] left-[26%] md:left-[35%] ">
              <a href={item.src} className="text-white text-sm font-semibold">
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Spotted;
