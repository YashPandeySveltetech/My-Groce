/** @format */
"use client";

import Image from 'next/image';
import React from 'react';
import DashboardIcon from "@/assets/dashboardIcon"
import OfferIcon from "@/assets/offerIcon"
import ProductIcon from "@/assets/productIcon"
import CategoryIcon from "@/assets/categoryIcon"
import LogoutIcon from "@/assets/logoutIcon"


import { useRouter } from 'next/navigation';

function Sidebar() {
	const router = useRouter()
	const tabs = [
		{ title: 'Dashboard', icon: <DashboardIcon/> ,path:"/dashboard"},
		{ title: 'Product', icon: <ProductIcon/> ,path:"/product"},
		{ title: 'Catogory', icon: <CategoryIcon/> ,path:"/category"},
		{ title: 'Sub Catogory', icon: <CategoryIcon/> ,path:"/sub_category"},
		{ title: 'Offers And Discount', icon:<OfferIcon/> ,path:"/offer_and_discount"},
        
	];
	return (
		<div className='w-56  h-[100vh] text-black-300'>
			<div className='flex justify-center mt-10'>
				<Image
					alt=''
					width={120}
					height={50}
					src={'/aorus.png'}
				/>
			</div>
			<div className='flex flex-col justify-center  h-[60vh] items-center w-full'>
				{tabs.map(({ title, icon,path }, index) => (
					<div
						key={index}
						className='text-[10px]  text-left'
						onClick={()=>router.push(path)}
					>
					<div className='w-[8rem] p-2 text-left hover:bg-gray-700 cursor-pointer flex items-center hover:text-white  rounded-lg'><span className='mr-1'>{icon}</span><span>{title}</span></div>	
					</div>
				))}
				<div className='border-b-2 border-black-500 w-[80%] my-5'/>
				<div
						
						className='text-[10px]  text-left'
						onClick={()=>router.push('/setting')}
					>
					<div className='w-[8rem] p-2 text-left hover:bg-gray-700 cursor-pointer flex items-center  hover:text-grey-500  rounded-lg'><span className='mr-1'><LogoutIcon/></span><span>{"Setting"}</span></div>	
					</div>
				<div
						
						className='text-[10px]  text-left'
						onClick={()=>router.push('/login')}
					>
					<div className='w-[8rem] p-2 text-left hover:bg-gray-700 cursor-pointer flex items-center text-red-300 hover:text-red-500  rounded-lg'><span className='mr-1'><LogoutIcon/></span><span>{"Logout"}</span></div>	
					</div>
			</div>
		</div>
	);
}

export default Sidebar;
