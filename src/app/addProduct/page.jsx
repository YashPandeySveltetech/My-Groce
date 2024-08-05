/** @format */
"use client";
import React, {useEffect, useState} from "react";
import TextInput from "@/components/commonComponents/textInput";
import Dropdown from "@/components/commonComponents/dropdown";
import AddVarient from "@/components/forms/addVarient";
import AddProductImages from "@/components/forms/addProductImages";

import Button from "@/components/commonComponents/button";
import CloseIcon from "@/assets/closeIcon";
import {useSelector} from "react-redux";
import {apiHandler} from "@/services/axios";
import {createProduct} from "@/services/productService";
import {getSubCotegoryListByID} from "@/services/categoryServices";

function AddProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    desc: "",
    price: "",
    type: "",
    images: "",

    category: "",
    subCategory: "",
  });
  const {categoryList} = useSelector((state) => state.categorySlice);

  //   const [varientObj, setVarientObj] = useState({
  //     size: "XL",
  //     color: "red",
  //     price: 0,
  //     quantity: 0,
  //   });
  //   const [varient, setVarient] = useState([]);
  //   const [imgObj, setImgObj] = useState({
  //     size: "XL",
  //     color: "red",
  //     price: 0,
  //     quantity: 0,
  //   });
  const [images, setImages] = useState([]);
  const handleAddVarient = () => {
    console.log(varientObj, "first");
    setVarient([...varient, varientObj]);
    setVarientObj({size: "", color: "", price: 0, quantity: 0});
  };

  const handleChange = (e) => {
    console.log("clcc");
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // console.log(formData, "name={name}");
    let newFormData = new FormData();
    newFormData.append("images", formData.images);
    newFormData.append("productName", formData.productName);
    newFormData.append("category", formData.category);
    newFormData.append("desc", formData.desc);
    newFormData.append("price", formData.price);
    newFormData.append("subCategory", formData.subCategory);
    newFormData.append("type", formData.type);

    // Properly log the contents of the FormData
    for (let [key, value] of newFormData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // return;
    apiHandler(() => createProduct({data: newFormData}), {
      onSuccess: (data) => {
        // setsubCategoryList(data?.data)/;
        // setcategoryList(data?.data);
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

  //   const handleRemoveVarient = ({index}) => {
  //     var array = [...varient]; // make a separate copy of the array
  //     if (index !== -1) {
  //       array.splice(index, 1);
  //       setVarient(array);
  //     }
  //   };
  //   const handleRemoveImage = ({index}) => {
  //     var array = [...images]; // make a separate copy of the array
  //     if (index !== -1) {
  //       array.splice(index, 1);
  //       setImages(array);
  //     }
  //   };
  //   const handleAddImages = () => {
  //     setImages([...images, imgObj]);
  //     setImgObj({size: "", color: "", price: 0, quantity: 0});
  //   };

  useEffect(() => {
    console.log("asdasd");
    if (formData?.category) {
      fetchSubCategoryList();
    }
  }, [formData?.category]);
  const [subCategoryList, setsubCategoryList] = useState([]);
  const fetchSubCategoryList = async () => {
    apiHandler(() => getSubCotegoryListByID({id: formData?.category}), {
      onSuccess: (data) => {
        setsubCategoryList(data?.data);
      },
      onError: (e) => {
        // Your error handling logic here
      },
      final: () => {
        // Your final logic here
      },
    });
  };
  const handleSelect = (e) => {
    console.log(e.target.name, "handleSelect");
    const {name} = e.target;
    setFormData({...formData, [name]: e.target.value});
  };

  const handleFileChange = (e) => {
    setFormData({...formData, images: e.target.files[0]});
  };

  return (
    <div className=" h-[70vh] overflow-y-scroll mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h2>
      <div className="gap-5 flex flex-col">
        <div className="flex justify-between w-full">
          <TextInput
            name="productName"
            value={formData.productName}
            title="Product Name"
            placeholder="Enter Product Name"
            handleChange={handleChange}
          />
          <TextInput
            name="desc"
            value={formData.desc}
            title="Product Description"
            placeholder="Enter Product Description"
            handleChange={handleChange}
          />
        </div>
        <div className="flex justify-start gap-5 w-full">
          <Dropdown
            name="category"
            value={formData.category}
            title="Category"
            placeholder="Enter Category"
            handleChange={handleChange}
            items={categoryList}
            handleSelect={handleSelect}
          />
          <Dropdown
            name="subCategory"
            value={formData.category}
            title="SubCategory"
            placeholder="Enter Category"
            handleChange={handleChange}
            items={subCategoryList}
            handleSelect={handleSelect}
          />
        </div>
        <div className="flex justify-between w-full">
          <TextInput
            name="price"
            value={formData.price}
            title="Product Price"
            placeholder="Enter Product Price"
            handleChange={handleChange}
          />
          <TextInput
            name="type"
            value={formData.type}
            title="Product Type"
            placeholder="Enter Product Type"
            handleChange={handleChange}
          />
        </div>

        <div className="flex justify-between w-full">
          <input
            type="file"
            name="images"
            value={formData.image}
            title="Product Image"
            placeholder="Enter Product Image"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="click"
          onClick={handleSubmit}
          className="flex justify-center items-center  py-2 w-[200px] border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>

        {/* <div className="font-bold text-[1.2rem]">Product Varients</div>
        <div className="">
          <div className="w-full">
            {varient.map((item, index) => (
              <div className="flex items-center gap-5 w-full">
                {console.log(item, "item")}
                <AddVarient varientObj={item} />
                <Button
                  btn_name=""
                  handleClick={() => handleRemoveVarient({index})}
                  icon={<CloseIcon />}
                />
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-5 w-full">
              {" "}
              <AddVarient
                varientObj={varientObj}
                setVarientObj={setVarientObj}
              />
              <Button btn_name="" handleClick={handleAddVarient} />
            </div>
          </div>
        </div>

        <div className="font-bold text-[1.2rem]">Product Images</div>
        <div className="">
          <div className="w-full">
            {images.map((item, index) => (
              <div className="flex items-center gap-5 w-full">
                {console.log(item, "item")}
                <AddProductImages varientObj={item} />
                <Button
                  btn_name=""
                  handleClick={() => handleRemoveImage({index})}
                  icon={<CloseIcon />}
                />
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-5 w-full">
              {" "}
              <AddProductImages
                varientObj={varientObj}
                setVarientObj={setVarientObj}
              />
              <Button btn_name="" handleClick={handleAddImages} />
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default AddProductForm;
