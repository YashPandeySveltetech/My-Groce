/** @format */
'use client';
import React, { useState } from 'react';
import TextInput from '@/components/commonComponents/textInput';
import Dropdown from '@/components/commonComponents/dropdown';
import AddVarient from '@/components/forms/addVarient';
import AddProductImages from '@/components/forms/addProductImages';

import Button from '@/components/commonComponents/button';
import CloseIcon from '@/assets/closeIcon';

function AddProductForm() {
	const [product, setProduct] = useState({
		productName: '',
		desc: '',
		imgColor: [],
		review: [],
		rating: 0,
		category: '',
		subCategory: '',
	});
	const [varientObj, setVarientObj] = useState({
		size: 'XL',
		color: 'red',
		price: 0,
		quantity: 0,
	});
	const [varient, setVarient] = useState([]);
	const [imgObj, setImgObj] = useState({
		size: 'XL',
		color: 'red',
		price: 0,
		quantity: 0,
	});
	const [images, setImages] = useState([]);
	const handleAddVarient = () => {
		console.log(varientObj, 'first');
		setVarient([...varient, varientObj]);
		setVarientObj({ size: '', color: '', price: 0, quantity: 0 });
	};

	console.log(varient, 'varient');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Product added:', product);
		// Add your product submission logic here
	};
	const handleRemoveVarient = ({ index }) => {
		var array = [...varient]; // make a separate copy of the array
		if (index !== -1) {
			array.splice(index, 1);
			setVarient(array);
		}
	};
	const handleRemoveImage = ({ index }) => {
		var array = [...images]; // make a separate copy of the array
		if (index !== -1) {
			array.splice(index, 1);
			setImages(array);
		}
	};
	const handleAddImages = () => {
		setImages([...images, imgObj]);
		setImgObj({ size: '', color: '', price: 0, quantity: 0 });
	};

	return (
		<form
			className=' h-[70vh] overflow-y-scroll mt-10 p-6 bg-white rounded-lg shadow-md'
			onSubmit={handleSubmit}
		>
			<h2 className='text-2xl font-bold mb-6 text-gray-800'>Add Product</h2>
			<div className='gap-5 flex flex-col'>
				<div className='flex justify-between w-full'>
					<TextInput
						name='productName'
						value={product.productName}
						title='Product Name'
						placeholder='Enter Product Name'
					/>
					<TextInput
						name='productName'
						value={product.productName}
						title='Product Description'
						placeholder='Enter Product Description'
					/>
				</div>
				<div className='flex justify-between w-full'>
					<Dropdown
						name='category'
						value={product.category}
						title='Category'
						placeholder='Enter Category'
					/>
					<TextInput
						name='category'
						value={product.category}
						title='Category'
						placeholder='Enter Category'
					/>
				</div>
				<div className='flex justify-between w-full'>
					<TextInput />
					<TextInput />
				</div>

				{/* Product Varients  */}
				<div className='font-bold text-[1.2rem]'>Product Varients</div>
				<div className=''>
					<div className='w-full'>
						{varient.map((item, index) => (
							<div className='flex items-center gap-5 w-full'>
								{console.log(item, 'item')}
								<AddVarient varientObj={item} />
								<Button
									btn_name=''
									handleClick={() => handleRemoveVarient({ index })}
									icon={<CloseIcon />}
								/>
							</div>
						))}
					</div>

					<div className='w-full'>
						<div className='flex items-center gap-5 w-full'>
							{' '}
							<AddVarient
								varientObj={varientObj}
								setVarientObj={setVarientObj}
							/>
							<Button
								btn_name=''
								handleClick={handleAddVarient}
							/>
						</div>
					</div>
				</div>

				{/* Product Images */}
				<div className='font-bold text-[1.2rem]'>Product Images</div>
				<div className=''>
					<div className='w-full'>
						{images.map((item, index) => (
							<div className='flex items-center gap-5 w-full'>
								{console.log(item, 'item')}
								<AddProductImages varientObj={item} />
								<Button
									btn_name=''
									handleClick={() => handleRemoveImage({ index })}
									icon={<CloseIcon />}
								/>
							</div>
						))}
					</div>

					<div className='w-full'>
						<div className='flex items-center gap-5 w-full'>
							{' '}
							<AddProductImages
								varientObj={varientObj}
								setVarientObj={setVarientObj}
							/>
							<Button
								btn_name=''
								handleClick={handleAddImages}
							/>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default AddProductForm;
