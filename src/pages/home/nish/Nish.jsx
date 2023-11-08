import React from "react";

;const Nish = () => {
  return (
    <div className="lg:flex py-24 lg:ml-[90px] px-3">
      <div className="w-full lg:w-[50%]">
        <img src="/images/nish.webp" alt="" />
      </div>
      <div className="lg:w-[50%] flex justify-center items-center md:pl-16">
        <div className="">
          <h1 className="font-semibold text-3xl md:-ml-5 pb-5 pt-5 pl-6">Nish Hair Promise</h1>
          <div className="flex justify-center  w-[80%] font-semibold text-[17px] flex-col pl-6">
            <ul style={{ listStyleType: "disc" }} className="list-disc">
              <li>
                What you get here is perfection, with premium quality 100% human
                hair extensions
              </li>
              <li>
                Huge inventory of hair extensions so you will definitely find
                your perfect match
              </li>
              <li>
                Your hair goals are now ours and we work very hard in making
                hair dreams come true around the globe with the best hair
                solutions for all
              </li>
              <li>Helping you create incredible hairstyles for any occasion</li>
              <li>Our goal is to be your expert best friend</li>
            </ul>
          </div>

          <div className="pt-3 pl-9">
            <button type="button" className="btn2 btn5 -ml-5">
              <a href="/" className="font-semibold text-xs">
                WHY NISH HAIR
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nish;
