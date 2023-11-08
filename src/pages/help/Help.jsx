import React from "react";
// import YouTubePlayer from "react-player/youtube";

const Help = () => {
  const imageData = [
    {
      id: "1",
      src: "/images/help1.webp",
      msg: "COVERAGE",
    },
    {
      id: "2",
      src: "/images/help2.webp",
      msg: "LENGTH",
    },
    {
      id: "3",
      src: "/images/help3.webp",
      msg: "VOLUME",
    },
    {
      id: "4",
      src: "/images/help4.webp",
      msg: "STYLE",
    },
    {
      id: "5",
      src: "/images/help5.webp",
      msg: "COLOR",
    },
    {
      id: "6",
      src: "/images/help6.webp",
      msg: "SHOP",
    },
  ];

  // const videLink = [
  //   {
  //     id: "1",
  //     link: "https://youtu.be/oxHLtn1eTiU?si=fcfDYCIeGOR-W9yY",
  //     msg: "",
  //   },
  //   {
  //     id: "2",
  //     link: "https://youtu.be/q7PDGedFi7c?si=b9Rajl8WhZIRCo22",
  //   },
  //   {
  //     id: "3",
  //     link: "https://youtu.be/q98HX_E-6W4?si=DwcuxV570lVsQwJ4",
  //   },
  //   {
  //     id: "4",
  //     link: "https://youtu.be/c9iyoWbVsqg?si=OkZ5A6ibEi8chnBv",
  //   },
  //   {
  //     id: "5",
  //     link: "https://youtu.be/OYBC6cjjYQI?si=_uEESSWWMXvW63u7",
  //   },
  //   {
  //     id: "6",
  //     link: "https://youtu.be/ffjP4YvYYdg?si=L2b6-r8tN0PPl2sK",
  //   },
  // ];

  return (
    <div>
      <div className="flex justify-center items-end h-[350px]">
        <p className="w-[48%] text-[48px] font-bold text-center text-[#1E4E1C]">
          What would you like your Hair extensions to do for you ?
        </p>
      </div>
      <div className="flex justify-center items-top h-[200px] mt-3">
        <p className="w-[30%] text-[15px] text-center font-medium">
          Find Nish Hair products based on your unique hair needs.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center h-[80px]">
          <p className="text-[33px] font-semibold text-center w-[50%]">
            Shop by Solutions
          </p>
        </div>
        <div className="flex gap-7 mx-11">
          {imageData.map((item) => (
            <div key={item.id} className="">
              <img
                src={item.src}
                alt=""
                className="transition ease-in-out delay-950  hover:-translate-y-1 hover:scale-110  duration-1000"
              />
              <a
                href="/"
                className="flex justify-center h-16 font-light items-center underline underline-offset-4"
              >
                {item.msg}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex bg-[#FFF5E9] w-full">
        <div className="w-[50%]">
          <video
            controls
            className="aspect-video w-[100%]"
            // src="https://youtu.be/oxHLtn1eTiU?si=fcfDYCIeGOR-W9yY"
          >
            <source src="https://youtu.be/oxHLtn1eTiU?si=fcfDYCIeGOR-W9yY"/>
          </video>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              DO HAIR EXTENSIONS DAMAGE MY NATURAL HAIR?
            </p>
            <p className="text-[17px]">
              Let’s begin with the most common question you all have in your
              mind. The correct answer is no, hair extensions will not damage
              your hair if they are worn properly and are cared for well.
              NishHair extensions are kind to your natural hair, causing
              absolutely no damage (don’t worry girls, we understand your
              concerns. One use and you will adore hair extensions just as much
              as we do! )
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FCE7F1] w-full py-16">
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              WHAT ARE THE CARE INSTRUCTIONS FOR MY HAIR EXTENSIONS?
            </p>

            <p className="text-[17px]">
              <p>
                One major thing to always remember is that your hair extensions
                do not have a natural source of hydration, like your own hair,
                so it is important to keep them moisturized to prolong their
                lifespan.
              </p>
              <p className="py-5">
                -On average, clip-on hair extensions can be washed after 10 to
                15-time wear.
              </p>
              <p>
                -Since your hair extensions aren’t getting the oils produced by
                your scalp, there is no need to wash them as often.
              </p>
              <p className="pt-5">
                -After removing your clip-in hair extensions, always ensure to
                detangle the hair and all of the clips are closed shut.
              </p>
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <video
            controls
            autoPlay
            className="aspect-video w-[100%]"
            src="https://youtu.be/q7PDGedFi7c?si=b9Rajl8WhZIRCo22"
          />
        </div>
      </div>
      <div className="flex bg-[#FCE7F1] w-full">
        <div className="w-[50%]">
          <video
            controls
            autoPlay
            className="aspect-video w-[100%]"
            src="https://youtu.be/q98HX_E-6W4?si=DwcuxV570lVsQwJ4"
          />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              WHAT PRODUCTS CAN BE USED TO WASH MY HAIR?
            </p>
            <p className="text-[17px]">
              For NishHair extensions, you can use any mild shampoo and
              conditioner that you use for your own hair. Avoid alcohol &
              sulfate products for a prolonged lifespan.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FCE7F1] w-full">
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              ARE HAIR EXTENSIONS UNCOMFORTABLE TO WEAR?
            </p>
            <p className="text-[17px]">
              A piece that boosts your confidence and amps up your look doesn’t
              always have to be a painful task. It is very normal for some
              people to experience some slight discomfort the first 1-2 wears.
              However, NishHair extensions are meant to compliment your hair as
              naturally as possible and must feel just like real, natural hair
              within no time. They are extremely comfortable to wear and can be
              worn all day long with ease.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <video
            controls
            autoPlay
            className="aspect-video w-[100%]"
            src="https://youtu.be/c9iyoWbVsqg?si=OkZ5A6ibEi8chnBv"
          />
        </div>
      </div>
      <div className="flex bg-[#FCE7F1] w-full">
        <div className="w-[50%]">
          <video
            controls
            autoPlay
            className="aspect-video w-[100%]"
            src="https://youtu.be/OYBC6cjjYQI?si=_uEESSWWMXvW63u7"
          />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              CAN I STRAIGHTEN OR STYLE MY HAIR EXTENSIONS?
            </p>
            <p className="text-[17px]">
              Our hair extensions are just natural—real human hair! And as long
              as proper care is taken while using the right styling tools and
              products, you can style them the way you want to – cut it, dye or
              colour it, curl it and everything you could possibly do to upgrade
              your new hair.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FCE7F1] w-full">
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex-col w-[80%]">
            <p className="text-[36px] font-semibold pb-5">
              WHAT IS A FAUX SCALP TOPPER?
            </p>
            <p className="text-[17px]">
              The faux scalp is a lace based hair topper, that is an exact
              replica of your real scalp. It has the most natural finish and
              sits seamlessly on your head giving you the right coverage and
              volume. The lace base is of the best quality, is breathable and
              magically comfortable to wear.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <video
            controls
            autoPlay
            className="aspect-video w-[100%]"
            src="https://youtu.be/ffjP4YvYYdg?si=L2b6-r8tN0PPl2sK"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;