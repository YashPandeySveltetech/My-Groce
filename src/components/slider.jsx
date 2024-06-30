// components/Slider.js
"use client";

import React, {useRef, useEffect} from "react";

const Slider = () => {
  const carousel = useRef(null);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (carousel.current) {
        const maxScrollLeft =
          carousel.current.scrollWidth - carousel.current.clientWidth;
        if (carousel.current.scrollLeft >= maxScrollLeft) {
          carousel.current.scrollTo({left: 0, behavior: "smooth"});
        } else {
          carousel.current.scrollTo({
            left: carousel.current.scrollLeft + carousel.current.clientWidth,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Change the interval duration as needed
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleMouseDown = (e) => {
    stopAutoScroll();
    const slider = carousel.current;
    slider.isDown = true;
    slider.classList.add("active");
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    const slider = carousel.current;
    slider.isDown = false;
    slider.classList.remove("active");
    startAutoScroll();
  };

  const handleMouseUp = () => {
    const slider = carousel.current;
    slider.isDown = false;
    slider.classList.remove("active");
    startAutoScroll();
  };

  const handleMouseMove = (e) => {
    const slider = carousel.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 3; //scroll-fast
    slider.scrollLeft = slider.scrollLeft - walk;
  };

  return (
    <div className="container mx-auto py-12">
      <div
        ref={carousel}
        className="carousel flex overflow-x-auto scroll-snap-type-x-mandatory"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="carousel-item w-full relative flex-none scroll-snap-align-start">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 1"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl">Slide 1 Title</h2>
            <p className="text-lg">Description for slide 1.</p>
          </div>
        </div>
        <div className="carousel-item w-full relative flex-none scroll-snap-align-start">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 2"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl">Slide 2 Title</h2>
            <p className="text-lg">Description for slide 2.</p>
          </div>
        </div>
        <div className="carousel-item w-full relative flex-none scroll-snap-align-start">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 3"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl">Slide 3 Title</h2>
            <p className="text-lg">Description for slide 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
