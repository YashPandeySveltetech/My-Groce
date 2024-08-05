/** @format */

'use client';
import Image from 'next/image';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import ChatMessager from '@/components/chatMessagerAi';
import DropdownComponent from '@/components/commonComponents/dropdown';
import Button from '@/components/commonComponents/button';
import Refresh from '@/assets/refresh';
import HeartIcon from '@/assets/heartIcon';
import BagIcon from '@/assets/bagIcon';
import UserIcon from '@/assets/userIcon';
import Slider from '@/components/slider';
import MultiLevelDropdown from '@/components/commonComponents/MultiLevelDropdown';
import { menuItems } from '@/assets/constant/categoryConstant';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/redux/counterSlice';
import { apiHandler } from '@/services/axios';
import { getCotegoryList } from '@/services/categoryServices';
import { setCategoryList } from '@/redux/categorySlice';

function Header() {
	const { value } = useSelector((state) => state.counterSlice);
	// console.log(count, "counter")/;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const timeoutRef = useRef(null);
	const dispatch = useDispatch();
	const handleMouseEnter = useCallback(() => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setIsModalOpen(true);
		}, 200); // 200ms delay before opening
	}, []);

	const handleMouseLeave = useCallback(() => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setIsModalOpen(false);
		}, 300); // 300ms delay before closing
	}, []);

	const getcategory = async () => {
		apiHandler(() => getCotegoryList(''), {
			onSuccess: (data) => {
				console.log(data, 'data');
				dispatch(setCategoryList(data?.data));
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
		getcategory();
	}, []);

	return (
		<>
			<div className='flex justify-around items-center w-full py-[3rem] px-[15rem]'>
				<Image
					alt=''
					className='w-[153px] h-[44px]'
					width={144}
					height={14}
					src={'/logo-2024-05-22-01-30-23-2490.webp'}
				/>
				<div className='flex justify-center ml-[20px]'>
					<input
						className='border border-green-300  h-4 p-5'
						placeholder='Search Product'
					/>

					<DropdownComponent />
					<Button
						className='h-[4.6vh] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
						btn_name='Search'
						handleClick={undefined}
						icon={''}
					/>
				</div>
				<div className='flex justify-center gap-4'>
					<button
						type='button'
						className='relative inline-flex items-center p-1 text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						<Refresh />

						<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
							20
						</div>
					</button>

					<button
						type='button'
						className='relative inline-flex items-center p-1 text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						<HeartIcon />

						<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
							20
						</div>
					</button>

					<div
						className='relative'
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<button
							type='button'
							className='relative inline-flex items-center p-1 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							<BagIcon />
							<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
								{value}
							</div>
						</button>
						{isModalOpen && (
							<div className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-[20rem] bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
								<div className='p-4'>
									<h3 className='text-lg font-semibold mb-2'>Your Cart</h3>
									<p>You have {value} items in your cart.</p>
								</div>
							</div>
						)}
					</div>

					<button
						type='button'
						className='relative inline-flex items-center p-1 text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						<UserIcon />

						<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
							20
						</div>
					</button>
				</div>
			</div>{' '}
			<div className='flex justify-between w-full h-[70px] items-center'>
				<div className='w-70 px-10 '>HELLO</div>
				<div className='w-30 px-10 '>
					<button className='p-3 w-[200px] rounded-md bg-orange-400 text-black'>
						Seller Login
					</button>
				</div>
			</div>
			<ChatMessager />
		</>
	);
}

export default Header;
