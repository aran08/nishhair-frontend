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
      <div className="min-h-screen h-full flex w-full relative">
        <div className={`w-[22%] max-h-screen h-screen ${scrolled ? "h-full z-20":null} `}>
          <Block1 />
        </div>
        <div className="w-[78%] ">
          <Block2 />
        </div>
      </div>
    </>
  );
}

export default Product;
