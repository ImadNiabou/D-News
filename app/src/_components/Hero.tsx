"use client";
import React from "react";
import { heroSlides } from "../data/data";
import HeroSlide from "./HeroSlide";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="hero-slider ">
      <div data-aos="fade-in">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto cursor-pointer "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="p-1">
                  <div>
                    <div className="flex mt-6 items-center justify-center ">
                      <div className="flex ">
                        <HeroSlide slide={slide} />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
