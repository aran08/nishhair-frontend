import React from "react";

const Collection = () => {
  const videoData = [
    {
      id: 1,
      src: "/videos/collection1.mp4",
      msg: "Hair Toppers",
    },
    {
      id: 2,
      src: "/videos/collection2.mp4",
      msg: "All Things Hair",
    },
    {
      id: 3,
      src: "/videos/collection3.mp4",
      msg: "Strandouts",
    },
    {
      id: 4,
      src: "/videos/collection4.mp4",
      msg: "Clip In Bangs",
    },
    {
      id: 5,
      src: "/videos/collection5.mp4",
      msg: "Wigs",
    },
    {
      id: 6,
      src: "/videos/collection6.mp4",
      msg: "Hair Extension",
    },
    {
      id: 7,
      src: "/videos/collection7.mp4",
      msg: "Accessories",
    },
    {
      id: 8,
      src: "/videos/collection8.mp4",
      msg: "Halo Hair",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-medium text-center py-3 ">Our Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {videoData.map((item) => (
          <div
            key={item.id}
            className="border px-4 sm:px-11 md:px-8 lg:px-17 xl:px-20  pt-6 sm:pt-2 md:pt-2 lg:pt-3 xl:pt-4"
          >
            <video src={item.src} loop autoPlay />
            <div className="h-[100px] flex items-center">
              <p className="text-center">{item.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
