import React from "react";

import {productCardItems} from "@/assets/constant/categoryConstant";
import CategorySidebar from "@/components/categorySidebar";
import ProductCard from "@/components/productCard";

const ProductCatogaryPage = () => {
  return (
    <div className="flex justify-center gap-10 my-2">
      <div>
       

        <CategorySidebar />
      </div>
      <div className="flex  justify-center gap-8">
        {productCardItems.map((item, index) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatogaryPage;
