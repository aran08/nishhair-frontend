import React from "react";

const Spotted = () => {
  const imageData = [
    {
      id: 1,
      name: "Huma Qureshi",
      href: "/images/Huma.webp",
      src: "https://www.instagram.com/iamhumaq/?hl=en",
      alt:"Apple1"
    },
    {
      id: 2,
      name: "Komal pandey",
      href: "/images/Komal.webp",
      src: "https://www.instagram.com/komalpandeyofficial/?hl=en",
      alt:"Apple2"
    },
    {
      id: 3,
      name: "Barkha Singh",
      href: "/images/Barkha.webp",
      src: "https://www.instagram.com/barkhasingh0308/",
      alt:"Apple3"
    },
    {
      id: 4,
      name: "Ahsaas Channa",
      href: "/images/Ahsaas.webp",
      src: "https://www.instagram.com/ahsaassy_/?hl=en",
      alt:"Apple4"
    },
    {
      id: 5,
      name: "Srishti Shrivastava",
      href: "/images/Srishti.webp",
      src: "https://www.instagram.com/srishti.shrivastava21/?hl=en",
      alt:"Apple5"
    },
    {
      id: 6,
      name: "Sobhita Dhulipala",
      href: "/images/Sobhita.webp",
      src: "https://www.instagram.com/sobhitad/?igshid=YmMyMTA2M2Y%3D",
      alt:"Apple6"
    },
    {
      id: 7,
      name: "Juhi Godambe",
      href: "/images/Juhi.webp",
      src: "https://www.instagram.com/juhigodambe/?hl=en",
      alt:"Apple7"
    },
    {
      id: 8,
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-full">
        {imageData.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.href} alt={item.alt}/>
            <div className="absolute bottom-[12%] left-[26%] md:left-[35%] ">
              <a href={item.src} className="text-white text-sm font-semibold">
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotted;
