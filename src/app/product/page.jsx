/** @format */
"use client";
import React, {useEffect, useState} from "react";
import Table from "@/components/table";
import Pagination from "@/components/pagination";
import Button from "@/components/commonComponents/button";
import SearchField from "@/components/commonComponents/searchField";
import {apiHandler} from "@/services/axios";
import {useRouter} from "next/navigation";
import {getAllProduct} from "@/services/productService";
import {productHeader} from "@/assets/constant/table";

function Product() {
  // let productData = {
  // 	data: {
  // 		productName: 'Shirt',
  // 		desc: 'this is one of the best jeans',
  // 		imgColor: ["['red','black','blue']"],
  // 		review: ["[{user:{userName:'yash'},message:'Awasome Shirt'},]"],
  // 		rating: 3.5,
  // 		category: '65e5de5aa4eaaa39f5c55ec0',
  // 		subCategory: '65e5e24fcc43b0bf608af9ad',
  // 		varients: [
  // 			"[{'size':xl,price:30,discount:12,quataty:10,color:['red','black']},{'size':xxl,price:30,discount:12,quataty:10,color:['red','black']},{'size':s,price:30,discount:12,quataty:10,color:['red','black']}]",
  // 		],
  // 		images: [
  // 			"['http://localhost:2000/public/my-uploads/image-1712052971517-702034303.jpg','http://localhost:2000/public/my-uploads/image-1712052971517-702034303.jpg','http://localhost:2000/public/my-uploads/image-1712052971517-702034303.jpg']",
  // 		],
  // 		_id: '666154ee51e3355eb2862694',
  // 		__v: 0,
  // 	},
  // 	message: 'Register Successfully',
  // };

  useEffect(() => {
    window.location.hash = "no-back-button";

    // Again because Google Chrome doesn't insert
    // the first hash into the history
    window.location.hash = "Again-No-back-button";

    window.onhashchange = function () {
      window.location.hash = "no-back-button";
    };
  }, []);
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    apiHandler(() => getAllProduct(""), {
      onSuccess: (data) => {
        setProductList(data?.data);
        // deleteCookie('access_token');
        // setIsDropDownOpen(false);
        // router.push('/login');
      },
      onError: (e) => {
        // Your error handling logic here
      },
      final: () => {
        // Your final logic here
      },
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const route = useRouter();
  const handleClick = () => {
    route.push("/addProduct");
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <SearchField />
        <div className="text-blue-500 text-lg font-bold">PRODUCT</div>
        <Button handleClick={handleClick} btn_name="ADD PRODUCT" />
      </div>

      <div className="flex flex-col gap-2 h-[77vh] w-content">
        <Table headers={productHeader} data={productList} type={"product"} />
        <div className="w-full flex flex-col items-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Product;
