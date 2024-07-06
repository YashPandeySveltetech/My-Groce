import React from "react";

const CategoryBanner = ({title, description, image, bg}) => {
  return (
    <>
      <div
        //   key={index}
        className={"relative mx-auto rounded-lg h-[40vh] w-80 p-5 shadow-lg"}
        style={{backgroundImage: `url(${bg})`}}
      >
        <div className="relative z-10">
          <h3 className="text-xs text-gray-500">{title}</h3>
          <h1 className="text-xl text-gray-800 mt-1 mb-3">{description}</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Shop Now
          </button>
        </div>
        <div className="absolute bottom-0 right-0 w-full overflow-hidden rounded-b-lg">
          <img src={image} alt="Fruits and Juice" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
