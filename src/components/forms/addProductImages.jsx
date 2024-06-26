/** @format */

import React from 'react';
import TexField from '@/components/commonComponents/textInput';
import Image from 'next/image';

function AddProductImages({ imgObj, setImgObj }) {
	return (
		<div className='w-full bg-blue-900/20 p-3 border-b rounded  mb-2'>
			<div className='flex justify-between gap-3 w-full'>
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

				<TexField
					name='color'
					// value={varientObj.color}
					title='Product Color'
					placeholder='Enter Product Description'
					// handleChange={(e) =>
					// 	// setVarientObj({ ...varientObj, ['color']: e.target.value })
					// }
				/>
			</div>
		</div>
	);
}

export default AddProductImages;
