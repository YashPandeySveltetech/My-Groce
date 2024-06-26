/** @format */

import React from 'react';

function TextInput({
	title = 'Product Name',
	placeholder = 'Enter Product Name',
	value,
	name = 'product',
	handleChange,
}) {
	return (
		<div className='flex flex-col justify-between w-full'>
			<label className='text-[10px] '>{title}</label>
			<input
				placeholder={placeholder}
				value={value}
				name={name}
				className='border text-[10px] p-2 rounded-sm w-[90%]'
				onChange={handleChange}
			/>
		</div>
	);
}

export default TextInput;
