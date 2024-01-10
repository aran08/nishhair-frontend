import React from "react";
import Block2 from "./Block2";
import Block1 from "./Block1";
import Upperblock from "./Upperblock";
import { useScrollTop } from "../../layout/navbar/Usescrolltop";

function Product() {
  const scrolled = useScrollTop()
  return (
    <>
      <div className="w-full">
        <Upperblock />
      </div>
      <div className="min-h-screen h-full md:flex md:w-full relative">
        <div className={`md:w-[22%] w-full md:max-h-screen md:h-screen ${scrolled ? "h-full z-20":null} `}>
          <Block1 />
        </div>
        <div className="md:w-[78%] w-full">
          <Block2 />
        </div>
      </div>
    </>
  );
}

export default Product;
