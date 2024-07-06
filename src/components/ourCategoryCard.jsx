"use client";

import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {categoryData} from "@/assets/constant/categoryConstant";

const OurCategoryCard = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {categoryData.map((item, index) => (
        <div
          key={index}
          className="m-4 cursor-pointer"
          data-aos="fade-left"
          data-aos-delay={index * 100}
        >
          <div className="bg-green-50 text-center h-[200px] w-[200px] flex items-center justify-center">
            <img
              src={item.image}
              className="h-[100px] w-[100px] object-cover transition-transform transform hover:scale-110"
              alt={item.title}
            />
          </div>
          <div className="text-center mt-2 transition-colors hover:text-green-500">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurCategoryCard;
