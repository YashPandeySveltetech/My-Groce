/** @format */

import React from 'react';
import TexField from '@/components/commonComponents/textInput';

function AddVarient({ varientObj, setVarientObj }) {
	return (
		<div className='w-full bg-blue-900/20 p-3 border-b rounded  mb-2'>
			<div className='flex justify-between w-full'>
				<TexField
					name='size'
					value={varientObj.size}
					title='Product Size'
					placeholder='Enter Product Size'
					handleChange={(e) =>
						setVarientObj({ ...varientObj, ['size']: e.target.value })
					}
				/>
				<TexField
					name='color'
					value={varientObj.color}
					title='Product Color'
					placeholder='Enter Product Description'
					handleChange={(e) =>
						setVarientObj({ ...varientObj, ['color']: e.target.value })
					}
				/>
				<TexField
					name='price'
					value={varientObj.price}
					title='Product price'
					placeholder='Enter Product price'
					handleChange={(e) =>
						setVarientObj({ ...varientObj, ['price']: e.target.value })
					}
				/>
				<TexField
					name='quantity'
					value={varientObj.quantity}
					title='Product Quantity'
					placeholder='Enter Product Quantity'
					handleChange={(e) =>
						setVarientObj({ ...varientObj, ['quantity']: e.target.value })
					}
				/>
			</div>
		</div>
	);
}

export default AddVarient;
