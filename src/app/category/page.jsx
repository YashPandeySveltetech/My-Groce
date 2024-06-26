/** @format */

/** @format */
'use client';
import React, { useEffect, useState } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import Button from '@/components/commonComponents/button';
import SearchField from '@/components/commonComponents/searchField';
import { useRouter } from 'next/navigation';
import { categoryHeader } from '@/assets/constant/table';
import { getCotegoryList } from '@/services/categoryServices';
import { apiHandler } from '@/services/axios';

function Category() {
	const route = useRouter();
	const handleClick = () => {
		route.push('/addCategory');
	};
	const [categoryList, setcategoryList] = useState([]);
	const getcategory = async () => {
		apiHandler(() => getCotegoryList(''), {
			onSuccess: (data) => {
				setcategoryList(data?.data);
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
	useEffect(() => {
		getcategory();
	}, []);

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-between'>
				<SearchField />{' '}
				<div className='text-blue-500 text-lg font-bold'>CATEGORY</div>
				<Button
					handleClick={handleClick}
					btn_name='ADD  CATEGORY'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<Table
					data={categoryList}
					headers={categoryHeader}
					type='category'
				/>
				<div className='w-full flex flex-col items-center'>
					<Pagination />
				</div>
			</div>
		</div>
	);
}

export default Category;
