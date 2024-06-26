/** @format */
'use client';
import React, { useState } from 'react';
import TextInput from '@/components/commonComponents/textInput';
import Image from 'next/image';

function AddSubCategoryForm() {
	const [subcategory, setsubcategory] = useState({
		subcategoryName: '',
		image: '',
		slang: '',
	});

	return (
		<form className=' h-[70vh] overflow-y-scroll mt-10 p-6 bg-white rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold mb-6 text-gray-800'>Add subcategory</h2>
			<div className='gap-5 flex flex-col'>
				<div className='flex justify-between w-full'>
					<TextInput
						name='subcategoryName'
						value={subcategory.subcategoryName}
						title='subCategory Name'
						placeholder='Enter subcategory Name'
					/>
					<TextInput
						name='subcategoryName'
						value={subcategory.subcategoryName}
						title='subCategory Slang'
						placeholder='Enter subCategory Slang'
					/>
				</div>

				<div className='flex justify-between w-full'>
					<div className='flex justify-between w-full'>
						<Image
							alt=''
							// className='w-[4rem] h-[4rem] '
							width={50}
							height={20}
							src={'/user.png'}
						/>
						<input
							hidden
							type='file'
							id='choose-image'
						/>
						<div className='flex flex-col gap-1 w-full'>
							<label className='text-[10px]'>Choose Image</label>
							<label
								htmlFor='choose-image'
								className=' bg-white text-[12px] p-[7px] rounded text-zinc-300 cursor-pointer'
							>
								Select Image
							</label>
						</div>
					</div>
					<div>
						<TextInput
							name='subcategoryName'
							value={subcategory.subcategoryName}
							title='subCategory Slang'
							placeholder='Enter subCategory Slang'
						/>
					</div>
				</div>

				{/* subcategory Varients  */}
			</div>
		</form>
	);
}

export default AddSubCategoryForm;
