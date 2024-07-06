"use client";

import React, {useState, useEffect} from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: "/delivery_boy.png",
      title: "Home Delivery",
      description: "Delivery at your doorstep",
    },
    {
      src: "/trolly.webp",
      title: "Quick Service",
      description: "Fast and reliable",
    },
    {
      src: "/veg.png",
      title: "Customer Satisfaction",
      description: "Our top priority",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      id="default-carousel"
      className="relative w-[90%] mx-auto  border-blue-500"
    >
      <div className="relative h-[80vh] flex overflow-hidden rounded-lg md:h-[80vh]">
        <div className="w-1/2 flex items-center  justify-center">
          <div className="text-left">
            <p className="text-[2rem]  text-green-500  font-bold">
              {slides[currentIndex].title}
            </p>
            <p className="text-[5rem]">{slides[currentIndex].description}</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-200 ease-in-out absolute w-full h-full transition-opacity ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
            >
              <img
                src={slide.src}
                className="absolute block  h-auto w-[30rem] max-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
