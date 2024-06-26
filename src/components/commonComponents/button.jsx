/** @format */
'use client';
import React from 'react';
import AddIcon from '@/assets/addIcon';
// import { useRouter } from 'next/navigation';

function Button({ btn_name = 'Add', icon = <AddIcon />, handleClick }) {
	return (
		<button
			onClick={handleClick}
			className='p-2 h-[2rem] bg-blue-300 text-sm font-bold text-white bg-blue-600 rounded-lg flex justify-center items-center'
		>
			{icon && <span className='mx-2 font-bold '>{icon}</span>}
			<div> {btn_name}</div>
		</button>
	);
}

export default Button;
