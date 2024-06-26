/** @format */

import React, { useState } from 'react';

function AddProductForm() {
	const [product, setProduct] = useState({
		name: '',
		description: '',
		price: '',
		category: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Product added:', product);
		// Add your product submission logic here
	};

	return (
		<form
			className='max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'
			onSubmit={handleSubmit}
		>
			<h2 className='text-2xl font-bold mb-6 text-gray-800'>Add Product</h2>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='name'
				>
					Product Name
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='name'
					type='text'
					name='name'
					value={product.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='description'
				>
					Description
				</label>
				<textarea
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='description'
					name='description'
					value={product.description}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='price'
				>
					Price
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='price'
					type='number'
					name='price'
					value={product.price}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='category'
				>
					Category
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='category'
					type='text'
					name='category'
					value={product.category}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='flex items-center justify-between'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Add Product
				</button>
			</div>
		</form>
	);
}

export default AddProductForm;
