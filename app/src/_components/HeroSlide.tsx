import React from "react";
import Image from "next/image";

const HeroSlide = ({
  slide,
}: {
  slide: { bgImg: string; title: string; brief: string };
}) => {
  return (
    <div className="relative w-full h-full ">
      <Image
        src={slide.bgImg}
        alt={slide.title}
        width={1000}
        height={100}
        className="h-[500px]"
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-gradient-to-tr from-black via-black/50 to-transparent justify-center items-center text-white p-20">
        <h2 className="text-2xl font-bold">{slide.title}</h2>
        <p className="text-sm">{slide.brief}</p>
      </div>
    </div>
  );
};

export default HeroSlide;
